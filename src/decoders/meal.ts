import type { Meal, MealCategory } from "~/models";

import { decodeMealCategory } from "./meal-category";
import { decodeMoment } from "./moment";

export function decodeMeal (meal: any): Meal {
  let information: string | undefined;
  const categories = meal.foodcategory.map(decodeMealCategory)
    .filter((category: MealCategory) => {
      if (category.name === "informations" || category.name === "Fermeture") {
        if (typeof information === "undefined") {
          information = category.dishes[0];
        }

        return false;
      }

      return true;
    });

  return {
    moment: decodeMoment(meal.name),
    information,
    categories
  };
};
