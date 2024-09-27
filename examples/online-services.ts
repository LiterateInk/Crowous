import * as crous from "../src";
//                     ^^^^^^^^
// Replace with:  from "crowous";
// when using the package.

void async function main() {
  const identifier = "bordeaux";
  const onlineServices = await crous.onlineServices(identifier);

  for (const onlineService of onlineServices) {
    console.log(`- ${onlineService.title} : ${onlineService.shortDescription ?? "(no description)"} @ ${onlineService.url}`);
  }
}();
