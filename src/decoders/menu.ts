import type { Menu } from "~/models";
import { decodeMeal } from "./meal";

export const decodeMenu = (menu: any): Menu => {
  return {
    date: new Date(menu.date),
    meals: menu.meal.map(decodeMeal)
  };
};
