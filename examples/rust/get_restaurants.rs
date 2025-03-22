#[tokio::main]
async fn main() {
    let restaurants = crowous::get_restaurants("reims".into()).await;
    println!("{:#?}", restaurants);
}
