import { defaultFetcher, type Fetcher } from "@literate.ink/utilities";
import { Request } from "~/core/request";
import { parseXML } from "~/core/xml";
import { decodeHome } from "~/decoders/home";
import type { Home } from "~/models";

export const housing = async (identifier: string, fetcher: Fetcher = defaultFetcher): Promise<Array<Home>> => {
  const request = new Request(`${identifier}/${identifier}-logement.xml`);
  const response = await fetcher(request);
  const content = parseXML(response.content);

  return content.root.residence.map(decodeHome);
};
