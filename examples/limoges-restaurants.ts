import { getRestaurants } from "../src";

void async function main() {
  const identifier = "limoges"; // Can be found using `getAvailableCrous()`.
  const restaurants = await getRestaurants(identifier);

  const dayIndex = new Date().getDay() - 1; // Monday is 0, Sunday is 6.

  for (const restaurant of restaurants) {
    console.log(`${restaurant.title} (${restaurant.type})`);
    console.log("Payment Methods:", restaurant.paymentMethods.join(", "));
    console.log("->", restaurant.address);
    console.log(
      "-> morning",
      restaurant.isOpenMorning(dayIndex) ? "opened" : "closed", ";",
      "midday", restaurant.isOpenMidday(dayIndex) ? "opened" : "closed", ";",
      "evening", restaurant.isOpenEvening(dayIndex) ? "opened" : "closed"
    );

    console.log();
  }
}();
