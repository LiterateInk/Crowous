import { defaultFetcher, type Fetcher } from "@literate.ink/utilities";
import { Request } from "~/core/request";
import { parseXML } from "~/core/xml";
import type { NewsArticle } from "~/models";
import { decodeNewsArticle } from "~/decoders/news-article";

export const news = async (identifier: string, fetcher: Fetcher = defaultFetcher): Promise<Array<NewsArticle>> => {
  const request = new Request(`${identifier}/externe/actu.xml`);
  const response = await fetcher(request);
  const content = parseXML(response.content);

  return content.root.article.map(decodeNewsArticle);
};
