use crate::{
  api::available_restaurants::{make_request, parse_response},
  models::Restaurant,
};
use reqwest::Error;

pub async fn get_available_restaurants(identifier: String) -> Result<Vec<Restaurant>, Error> {
  let response = make_request(identifier).await?;
  Ok(parse_response(response))
}
