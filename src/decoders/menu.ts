import type { Menu } from "~/models";
import { decodeMeal } from "./meal";

export function decodeMenu (menu: any): Menu {
  return {
    date: new Date(menu.date),
    meals: menu.meal.map(decodeMeal)
  };
}
