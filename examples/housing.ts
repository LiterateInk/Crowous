import * as crous from "../src";
//                     ^^^^^^^^
// Replace with:  from "crowous";
// when using the package.

void async function main() {
  const identifier = "bordeaux";
  const houses = await crous.housing(identifier);

  for (const home of houses) {
    // When the address is not available, we show the longitude and latitude directly.
    console.log(`[${home.area}]: ${home.title} (${home.address ?? `lon: ${home.longitude}, lat: ${home.latitude}`})`);
  }
}();
