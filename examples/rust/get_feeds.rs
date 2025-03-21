#[tokio::main]
async fn main() {
    let feeds = crowous::get_feeds().await;
    println!("{:#?}", feeds);
}
