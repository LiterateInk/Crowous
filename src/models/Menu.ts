import type { Meal } from "~/models";

export interface Menu {
  date: Date
  meals: Array<Meal>
}
