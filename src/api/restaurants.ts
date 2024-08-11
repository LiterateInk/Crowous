import { defaultFetcher, type Fetcher } from "@literate.ink/utilities";
import { Request } from "~/core/request";
import { decodeRestaurant } from "~/decoders/restaurant";
import { type Meal, Moment, type Restaurant } from "~/models";

export async function restaurants (identifier: string, fetcher: Fetcher = defaultFetcher): Promise<Array<Restaurant>> {
  const request = new Request(`${identifier}/externe/crous-${identifier}.min.json`);
  const response = await fetcher(request);

  const content = response.content.replace(/[\u0000-\u001F]/g, "");
  const { restaurants } = JSON.parse(content);

  return restaurants.map(decodeRestaurant);
}

export function isRestaurantOpen (restaurant: Restaurant, dayIndex: number, moment: Moment): boolean {
  const day = restaurant.opening.split(",")[dayIndex];
  const momentAsINT = moment === Moment.LUNCH ? 1 : moment === Moment.MORNING ? 0 : 2;
  const opening = day[momentAsINT];

  return opening === "1";
}

export function meals (restaurant: Restaurant, date = new Date()): Array<Meal> | undefined {
  const currentSTR = date.toLocaleDateString();
  return restaurant.menus.find((menu) => menu.date.toLocaleDateString() === currentSTR)?.meals;
}
