import { getAvailableRestaurants } from "../src";
//                                      ^^^^^^^^
// Replace with:                   from "crowous";
// when using the package.

void async function main() {
  const available_restaurants = await getAvailableRestaurants("limoges");

  for (const restaurant of available_restaurants) {
    console.log(restaurant.title);
    console.log("=>", restaurant.address);
    console.log();
  }
}();
