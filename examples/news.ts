import * as crous from "../src";
//                     ^^^^^^^^
// Replace with:  from "crowous";
// when using the package.

void async function main() {
  const identifier = "limoges";
  const news = await crous.news(identifier);

  for (const article of news) {
    console.log(`[${article.category}]: ${article.title}, published @ ${article.publicationDate.toLocaleDateString()}`);
    // You can retrieve the HTML content of the article by using `article.content`.
    // We're not doing it here to avoid cluttering the console.
  }
}();
