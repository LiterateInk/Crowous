use crate::models::Restaurant;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
struct RestaurantsResponseCollection {
  pub restaurants: Vec<Restaurant>,
}

pub fn parse_response(response: String) -> Vec<Restaurant> {
  let json: String = response.chars().filter(|c| !c.is_control()).collect();
  let collection: RestaurantsResponseCollection = serde_json::from_str(&json).unwrap();

  collection.restaurants
}
