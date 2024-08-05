import { defaultFetcher, type Fetcher } from "@literate.ink/utilities";
import { buildRequest, parseResponse } from "~/api/availableRestaurants";
import type { Restaurant } from "~/models/Restaurant";

export async function getAvailableRestaurants(identifier: string, fetcher: Fetcher = defaultFetcher): Promise<Array<Restaurant>> {
  const response = await fetcher(buildRequest(identifier));
  return parseResponse(response);
}
