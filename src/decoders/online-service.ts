import type { OnlineService } from "~/models";

export const decodeOnlineService = (xml: any): OnlineService => ({
  id: xml.id,
  imageURL: xml.image,
  title: xml.title,
  shortDescription: xml.short_desc || null,
  url: xml.link
});
