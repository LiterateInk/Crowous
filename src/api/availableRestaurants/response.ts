import type { Response } from "@literate.ink/utilities";
import { type Restaurant, type RestaurantAPI, translateRestaurantFromAPI } from "~/models/Restaurant";

interface RestaurantsResponseCollection {
  restaurants: Array<RestaurantAPI>
}

export function parseResponse(response: Response): Array<Restaurant> {
  const content = response.content.replace(/[\u0000-\u001F]/g, "");
  const json = JSON.parse(content) as RestaurantsResponseCollection;

  return json.restaurants.map(translateRestaurantFromAPI);
}
