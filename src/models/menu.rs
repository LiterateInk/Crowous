use crate::helpers::deserializer::parse_meals;
use crate::models::Meal;

use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Clone)]
pub struct Menu {
  pub date: String,

  #[serde(rename(deserialize = "meal"), deserialize_with = "parse_meals")]
  pub meals: Vec<Meal>,
}
