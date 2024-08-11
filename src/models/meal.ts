import type { Moment, MealCategory } from "~/models";

export type Meal = Readonly<{
  moment: Moment,
  information: string | undefined,
  categories: Array<MealCategory>
}>;
