use crate::models::Moment;
use serde::{Deserialize, Serialize};
use serde_json::Value;

use crate::models::MealCategory;

#[derive(Serialize, Deserialize, Clone)]
pub struct Meal {
  pub moment: Moment,
  pub information: Option<String>,
  pub categories: Vec<MealCategory>,
}

impl Meal {
  pub fn from_api(json: &Value) -> Meal {
    let moment = Moment::from_api(json["name"].as_str().unwrap());
    let mut information = None;

    let categories = json["foodcategory"]
      .as_array()
      .unwrap()
      .iter()
      .map(MealCategory::from_api)
      .filter(|category| {
        if category.name == "informations" || category.name == "Fermeture" {
          if information.is_none() {
            information = category.dishes.first().cloned();
          }
          false
        } else {
          true
        }
      })
      .collect::<Vec<MealCategory>>();

    Meal {
      moment,
      information,
      categories,
    }
  }
}
