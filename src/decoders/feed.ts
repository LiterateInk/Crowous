import type { Feed } from "~/models";

export function decodeFeed (feed: any): Feed {
  const name = feed.name.replace("FLUX ", "");
  const identifier = feed.url.split("/")[4];

  return {
    name,
    identifier,
    isDefault: feed.is_default
  };
}
