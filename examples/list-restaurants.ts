import * as crous from "../src";
//                     ^^^^^^^^
// Replace with:  from "crowous";
// when using the package.

void async function main() {
  const restaurants = await crous.restaurants("limoges");

  for (const restaurant of restaurants) {
    console.log(restaurant.title);
    console.log("=>", restaurant.address);
    console.log();
  }
}();
