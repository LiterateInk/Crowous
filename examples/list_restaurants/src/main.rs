use crowous::services::get_available_restaurants;

#[tokio::main]
async fn main() {
  let available_restaurants = get_available_restaurants("limoges".to_string())
    .await
    .unwrap();

  for restaurant in available_restaurants {
    println!("{}", serde_json::to_string_pretty(&restaurant).unwrap());
  }
}
