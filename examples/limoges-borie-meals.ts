import { getRestaurants } from "../src";

void async function main() {
  const identifier = "limoges"; // Can be found using `getAvailableCrous()`.
  const restaurants = await getRestaurants(identifier);

  for (const restaurant of restaurants) {
    // Can be found programmatically.
    // Name of the restaurant I want to find.
    const restaurantTitle = "RU La Borie";
    if (restaurant.title !== restaurantTitle) continue;

    console.log(`Found ${restaurant.title} (${restaurant.type})`);
    console.log("->", restaurant.address);
    console.log("Payment Methods:", restaurant.paymentMethods.join(", "));

    const meals = restaurant.getMeals(new Date()); // Meals for today.
    if (meals.length === 0) {
      console.log("\nNo meals for today.");
    }
    else {
      console.log("\nMeals for today:");
      for (const meal of meals) {
        console.log(`- ${meal.name} (${meal.information ?? "No information"})`);
        for (const category of meal.categories) {
          console.log(`  - ${category.name}: ${category.dishes.join(", ")}`);
        }
      }
    }
  }
}();
