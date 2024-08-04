use crate::api::API_ENDPOINT;
use reqwest::{get, Error};

pub async fn make_request(identifier: String) -> Result<String, Error> {
  let url = format!("{API_ENDPOINT}/{identifier}/externe/crous-{identifier}.min.json");

  let response = get(url).await?.text().await?;

  Ok(response)
}
