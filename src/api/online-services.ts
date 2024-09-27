import { defaultFetcher, type Fetcher } from "@literate.ink/utilities";
import { Request } from "~/core/request";
import { parseXML } from "~/core/xml";
import type { OnlineService } from "~/models";
import { decodeOnlineService } from "~/decoders/online-service";

export const onlineServices = async (identifier: string, fetcher: Fetcher = defaultFetcher): Promise<Array<OnlineService>> => {
  const request = new Request(`${identifier}/${identifier}-online.xml`);
  const response = await fetcher(request);
  const content = parseXML(response.content);

  return content.root.online.map(decodeOnlineService);
};
