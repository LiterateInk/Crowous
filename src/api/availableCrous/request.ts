import { API_ENDPOINT } from "~/api";
import type { Request } from "@literate.ink/utilities";

export function buildRequest(): Request {
  const url = `${API_ENDPOINT}/feeds.json`;
  return { url };
}
