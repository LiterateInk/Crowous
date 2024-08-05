export class MealCategory {
  public constructor (
    public name: string,
    public dishes: Array<string>
  ) {}
}

export interface MealCategoryAPI {
  name: string
  dishes: Array<{ name: string }>
}

export const translateMealCategoryFromAPI = (api: MealCategoryAPI): MealCategory => {
  return new MealCategory(
    api.name,
    api.dishes.map((dish) => dish.name)
  );
};
