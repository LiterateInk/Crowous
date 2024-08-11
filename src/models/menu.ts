import type { Meal } from "~/models";

export type Menu = Readonly<{
  date: Date
  meals: Array<Meal>
}>;
