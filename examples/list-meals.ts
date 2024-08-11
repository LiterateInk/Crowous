import * as crous from "../src";
//                     ^^^^^^^^
// Replace with:  from "crowous";
// when using the package.

void async function main() {
  const identifier = "limoges";
  const restaurants = await crous.restaurants(identifier);

  for (const restaurant of restaurants) {
    if (restaurant.title !== "RU La Borie") continue;

    console.log(`Found ${restaurant.title} (kind: ${restaurant.kind})`);
    console.log("->", restaurant.address);

    const payment_methods_as_str = restaurant.paymentMethods.join(", ");
    console.log("Payment Methods:", payment_methods_as_str);

    // Get the meals for today, you can change the date
    // using the second parameter.
    const meals = crous.meals(restaurant);
    if (typeof meals === "undefined") {
      console.log("Meals data is unavailable for the given date.");
    }
    else if (meals.length === 0) {
      console.log("No meals for today.");
    }
    else {
      console.log("Meals:");
      for (const meal of meals) {
        console.log(`- ${meal.moment} (${meal.information ?? "No information"})`);
        for (const category of meal.categories) {
          console.log(`  - ${category.name}: ${category.dishes.join(", ")}`);
        }
      }
    }
  }
}();
