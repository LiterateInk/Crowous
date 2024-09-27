export type NewsArticle = Readonly<{
  id: string
  title: string
  publicationDate: Date
  imageURL: string
  /**
   * HTML string.
   */
  content: string
  category: string
}>;
