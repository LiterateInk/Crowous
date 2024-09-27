import type { NewsArticle } from "~/models";

export const decodeNewsArticle = (xml: any): NewsArticle => ({
  id: xml.id,
  content: xml.content,
  category: xml.category,
  title: xml.title,
  imageURL: xml.image,
  publicationDate: new Date(xml.date)
});
