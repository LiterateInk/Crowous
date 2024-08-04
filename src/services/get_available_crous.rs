use crate::{
  api::available_crous::{make_request, parse_response},
  models::Crous,
};
use reqwest::Error;

pub async fn get_available_crous() -> Result<Vec<Crous>, Error> {
  let response = make_request().await?;
  Ok(parse_response(response))
}
