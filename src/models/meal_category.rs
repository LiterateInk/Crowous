use serde::{Deserialize, Serialize};
use serde_json::Value;

#[derive(Serialize, Deserialize, Clone)]
pub struct MealCategory {
  pub name: String,
  pub dishes: Vec<String>,
}

impl MealCategory {
  pub fn from_api(json: &Value) -> MealCategory {
    // .name: &str
    let name = json["name"].as_str().unwrap().to_string();

    // .dishes: Vec<{ name: &str }>
    // Convert to Vec<String>
    let dishes = json["dishes"]
      .as_array()
      .unwrap()
      .iter()
      .map(|v| v["name"].as_str().unwrap().to_string())
      .collect();

    MealCategory { name, dishes }
  }
}
