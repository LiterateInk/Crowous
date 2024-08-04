use crowous::services::get_available_crous;

#[tokio::main]
async fn main() {
  let available_crous = get_available_crous().await.unwrap();

  for crous in available_crous {
    println!("{} ({})", crous.name, crous.identifier);
  }
}
