import { getAvailableRestaurants, Moment, PaymentMethod, RestaurantKind } from "../src";
//                                                                             ^^^^^^^^
// Replace with:                                                          from "crowous";
// when using the package.

void async function main() {
  const identifier = "limoges";
  const restaurants = await getAvailableRestaurants(identifier);

  for (const restaurant of restaurants) {
    // Can be found programmatically.
    // Name of the restaurant I want to find.
    const restaurantTitle = "RU La Borie";
    if (restaurant.title !== restaurantTitle) continue;

    console.log(`Found ${restaurant.title} (kind: ${RestaurantKind[restaurant.kind]})`);
    console.log("->", restaurant.address);

    const payment_methods_as_str = restaurant.paymentMethods.map((method) => PaymentMethod[method]).join(", ");
    console.log("Payment Methods:", payment_methods_as_str);

    const meals = restaurant.getMeals("2024-08-05");
    if (meals.length === 0) {
      console.log("No meals for today.");
    }
    else {
      console.log("Meals:");
      for (const meal of meals) {
        console.log(`- ${Moment[meal.moment]} (${meal.information ?? "No information"})`);
        for (const category of meal.categories) {
          console.log(`  - ${category.name}: ${category.dishes.join(", ")}`);
        }
      }
    }
  }
}();
