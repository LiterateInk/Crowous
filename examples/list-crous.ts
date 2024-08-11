import * as crous from "../src";
//                     ^^^^^^^^
// Replace with:  from "crowous";
// when using the package.

void async function main () {
  const feeds = await crous.feeds();

  for (const feed of feeds) {
    console.log(`${feed.name} (${feed.identifier})`);
  }
}();
