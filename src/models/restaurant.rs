use crate::helpers::deserializer::{parse_payment_methods, parse_restaurant_kind};
use crate::models::{Meal, Menu, Moment, PaymentMethod, RestaurantKind};
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Clone)]
pub struct RestaurantContact {
  pub tel: String,
  pub email: String,
}

#[derive(Serialize, Deserialize, Clone)]
pub struct RestaurantImage {
  pub src: String,
  pub alt: String,
}

#[derive(Serialize, Deserialize, Clone)]
pub struct Restaurant {
  pub id: u32,
  pub title: String,
  #[serde(rename(deserialize = "lat"))]
  pub latitude: f32,
  #[serde(rename(deserialize = "lon"))]
  pub longitude: f32,
  /// Area for the restaurant, could be "Limoges (87)".
  pub area: String,
  #[serde(rename(deserialize = "adresse"))]
  pub address: String,
  /// Example : "010,010,010,010,010,000,000"
  pub opening: String,
  /// Example : "1"
  pub closing: String,
  #[serde(
    rename(deserialize = "type"),
    deserialize_with = "parse_restaurant_kind"
  )]
  pub kind: RestaurantKind,
  pub accessibility: bool,
  pub wifi: bool,
  #[serde(rename(deserialize = "shortdesc"))]
  pub short_description: String,
  pub description: String,
  pub access: String,
  /// HTML paragraph explaining when this restaurant is operational.
  #[serde(rename(deserialize = "operationalhours"))]
  pub operational_hours: String,
  pub contact: RestaurantContact,
  #[serde(rename(deserialize = "crousandgo"))]
  pub crous_and_go: String,
  pub album: Option<RestaurantImage>,
  pub photo: RestaurantImage,
  #[serde(
    rename(deserialize = "payment"),
    deserialize_with = "parse_payment_methods"
  )]
  pub payment_methods: Vec<PaymentMethod>,
  pub menus: Vec<Menu>,
}

impl Restaurant {
  pub fn is_open(&self, day: usize, moment: Moment) -> bool {
    let day = self.opening.split(',').nth(day).unwrap_or("000");
    let opening = day.chars().nth(moment as usize).unwrap_or('0');

    opening == '1'
  }

  pub fn get_meals(&self, date: String) -> Vec<Meal> {
    let menus = &self.menus;
    for menu in menus {
      if menu.date == date {
        return menu.meals.clone();
      }
    }

    vec![]
  }
}
