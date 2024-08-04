use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Clone, Debug)]
pub enum PaymentMethod {
  Card,
  Cash,
  Izly,
  Moneo,
}

impl PaymentMethod {
  pub fn from_api(str: &str) -> PaymentMethod {
    match str {
      "Carte bancaire" => PaymentMethod::Card,
      "Espèce" => PaymentMethod::Cash,
      "IZLY" => PaymentMethod::Izly,
      "Monéo" => PaymentMethod::Moneo,
      _ => unreachable!("Unknown payment method: {}", str),
    }
  }
}
