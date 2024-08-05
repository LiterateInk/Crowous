import { API_ENDPOINT } from "~/api";
import type { Request } from "@literate.ink/utilities";

export function buildRequest(identifier: string): Request {
  const url = `${API_ENDPOINT}/${identifier}/externe/crous-${identifier}.min.json`;
  return { url };
}
