import type { Response } from "@literate.ink/utilities";
import { type Crous, type CrousAPI, translateCrousFromAPI } from "~/models/Crous";

interface CrousResponseCollection {
  results: Array<CrousAPI>
}

export function parseResponse(response: Response): Array<Crous> {
  const collection = JSON.parse(response.content) as CrousResponseCollection;
  return collection.results.map(translateCrousFromAPI);
}
