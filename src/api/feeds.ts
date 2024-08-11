import { type Fetcher, defaultFetcher } from "@literate.ink/utilities";
import { Request } from "~/core/request";
import { decodeFeed } from "~/decoders/feed";
import type { Feed } from "~/models";

export const feeds = async (fetcher: Fetcher = defaultFetcher): Promise<Array<Feed>> => {
  const request = new Request("feeds.json");
  const { content } = await fetcher(request);
  const { results } = JSON.parse(content);

  return results.map(decodeFeed);
};
