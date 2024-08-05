import { type Meal, translateMealFromAPI, type MealAPI } from "~/models/Meal";

export class Menu {
  public constructor (
    public date: string,
    public meals: Array<Meal>
  ) {}
}

export interface MenuAPI {
  date: string
  meal: Array<MealAPI>
}

export const translateMenuFromAPI = (api: MenuAPI): Menu => {
  return new Menu(
    api.date,
    api.meal.map(translateMealFromAPI)
  );
};
