import type { Crous } from "~/models/Crous";
import { buildRequest, parseResponse } from "~/api/availableCrous";
import { type Fetcher, defaultFetcher } from "@literate.ink/utilities";

export async function getAvailableCrous(fetcher: Fetcher = defaultFetcher): Promise<Array<Crous>> {
  const response = await fetcher(buildRequest());
  return parseResponse(response);
}
