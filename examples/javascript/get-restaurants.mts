import { getRestaurants } from "crowous";

const restaurants = await getRestaurants("reims");
console.log(restaurants);
