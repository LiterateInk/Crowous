use crowous::services::get_available_restaurants;

#[tokio::main]
async fn main() {
  let identifier = "limoges".to_string();
  let restaurants = get_available_restaurants(identifier).await.unwrap();

  for restaurant in restaurants {
    if restaurant.title != *"RU La Borie" {
      continue;
    }

    println!("Found {} (kind: {:?})", restaurant.title, restaurant.kind);
    println!("-> {}", restaurant.address);

    let payment_methods_as_str = restaurant
      .payment_methods
      .iter()
      .map(|pm| format!("{:?}", pm))
      .collect::<Vec<String>>()
      .join(", ");

    println!("Payment Methods: {payment_methods_as_str}");

    let meals = restaurant.get_meals("2024-08-05".to_string());
    if meals.is_empty() {
      println!("No meals available.");
    } else {
      println!("Meals:");
      for meal in meals {
        println!(
          "- {:?} ({})",
          meal.moment,
          meal.information.unwrap_or("No information".to_string())
        );

        for category in meal.categories {
          println!("  - {}: {}", category.name, category.dishes.join(", "));
        }
      }
    }
  }
}
