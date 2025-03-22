import { getRestaurants } from "crowous";

const restaurants = await getRestaurants("limoges");
console.log(restaurants);
