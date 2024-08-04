use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Clone, Debug)]
pub enum Moment {
  Morning,
  Lunch,
  Evening,
}

impl Moment {
  pub fn from_api(str: &str) -> Moment {
    match str {
      "matin" => Moment::Morning,
      "midi" => Moment::Lunch,
      "soir" => Moment::Evening,
      _ => unreachable!("Unknown opening: {}", str),
    }
  }
}
