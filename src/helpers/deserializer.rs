use crate::models::{Meal, PaymentMethod, RestaurantKind};
use serde::{Deserialize, Deserializer};

pub fn parse_restaurant_kind<'de, D>(deserializer: D) -> Result<RestaurantKind, D::Error>
where
  D: Deserializer<'de>,
{
  let s = String::deserialize(deserializer)?;
  Ok(RestaurantKind::from_api(&s))
}

pub fn parse_payment_methods<'de, D>(deserializer: D) -> Result<Vec<PaymentMethod>, D::Error>
where
  D: Deserializer<'de>,
{
  let s = Vec::<serde_json::Value>::deserialize(deserializer)?;
  Ok(
    s.iter()
      .map(|v| PaymentMethod::from_api(v["name"].as_str().unwrap()))
      .collect(),
  )
}

pub fn parse_meals<'de, D>(deserializer: D) -> Result<Vec<Meal>, D::Error>
where
  D: Deserializer<'de>,
{
  let s = Vec::<serde_json::Value>::deserialize(deserializer)?;
  Ok(s.iter().map(Meal::from_api).collect())
}
