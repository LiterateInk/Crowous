import type { ApiMeal } from "~/api/restaurants";

export interface MealCategory {
  name: string;
  dishes: string[];
}

export enum MealTiming {
  MORNING = "MORNING",
  MIDDAY = "MIDDAY",
  EVENING = "EVENING"
}

export class Meal {
  public constructor (
    public name: MealTiming,
    public information: string | null,
    public categories: MealCategory[]
  ) {}

  public static fromAPI (meal: ApiMeal): Meal {
    const categories: MealCategory[] = [];
    let information: string | null = null;

    for (const category of meal.foodcategory) {
      if (category.name === "informations") {
        information = category.dishes[0].name;
        continue;
      }

      categories.push({
        name: category.name,
        dishes: category.dishes.map((dish) => dish.name).filter(Boolean)
      });
    }

    let name: MealTiming;
    switch (meal.name) {
      case "matin":
        name = MealTiming.MORNING;
        break;
      case "midi":
        name = MealTiming.MIDDAY;
        break;
      case "soir":
        name = MealTiming.EVENING;
        break;
      default:
        throw new TypeError(`Unknown meal name: ${meal.name}`);
    }

    return new Meal(
      name,
      information,
      categories
    );
  }
}
