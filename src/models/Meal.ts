import { translateMomentFromAPI, type Moment } from "~/models/Moment";
import { translateMealCategoryFromAPI, type MealCategory, type MealCategoryAPI } from "~/models/MealCategory";

export class Meal {
  public constructor (
    public moment: Moment,
    public information: string | undefined,
    public categories: Array<MealCategory>
  ) {}
}

export interface MealAPI {
  name: string
  foodcategory: Array<MealCategoryAPI>
}

export const translateMealFromAPI = (api: MealAPI): Meal => {
  let information: string | undefined;
  const categories = api.foodcategory.map(translateMealCategoryFromAPI)
    .filter((category) => {
      if (category.name === "informations" || category.name === "Fermeture") {
        if (typeof information === "undefined") {
          information = category.dishes[0];
        }

        return false;
      }

      return true;
    });

  return new Meal(
    translateMomentFromAPI(api.name),
    information,
    categories
  );
};
