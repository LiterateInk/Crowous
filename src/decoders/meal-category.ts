import type { MealCategory } from "~/models";

export const decodeMealCategory = (category: any): MealCategory => {
  return {
    name: category.name,
    dishes: category.dishes.map((dish: any) => dish.name)
  };
};
