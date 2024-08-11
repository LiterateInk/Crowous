import type { Moment, MealCategory } from "~/models";

export interface Meal {
  moment: Moment,
  information: string | undefined,
  categories: Array<MealCategory>
}
