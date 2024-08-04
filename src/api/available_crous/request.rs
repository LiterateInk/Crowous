use crate::api::API_ENDPOINT;
use reqwest::{get, Error};

pub async fn make_request() -> Result<String, Error> {
  let url = format!("{API_ENDPOINT}/feeds.json");

  let response = get(url).await?.text().await?;

  Ok(response)
}
