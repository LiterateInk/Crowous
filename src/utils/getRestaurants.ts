import { restaurants } from "~/api/restaurants";
import { Restaurant } from "~/models/Restaurant";

export async function getRestaurants (identifier: string): Promise<Array<Restaurant>> {
  const response = await restaurants(identifier);
  return response.restaurants.map(Restaurant.fromAPI);
}
