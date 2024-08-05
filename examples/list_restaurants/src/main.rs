use crowous::services::get_available_restaurants;

#[tokio::main]
async fn main() {
  let available_restaurants = get_available_restaurants("limoges".to_string())
    .await
    .unwrap();

  for restaurant in available_restaurants {
    println!("{}", restaurant.title);
    println!("=> {}\n", restaurant.address);
  }
}
