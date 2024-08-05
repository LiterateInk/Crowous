use serde::Serialize;

#[derive(Serialize, Clone, Debug)]
pub enum RestaurantKind {
  Cafeteria,
  Restaurant,
  ApprovedRestaurant,
  ManagedRestaurant,
  AdministrativeRestaurant,
  CoffeeCorner,
  Brewery,
  FoodTruck,
  SelfService,
  Kiosk,
  Pizzeria,
  GroceryStore,
  Scooter,
  CrousAndGo,
  SandwichShop,
}

impl RestaurantKind {
  pub fn from_api(str: &str) -> RestaurantKind {
    use RestaurantKind as RK;

    match str {
      "Cafétéria" => RK::Cafeteria,
      "Restaurant" => RK::Restaurant,
      "Restaurant agréé" => RK::ApprovedRestaurant,
      "Restaurant géré" => RK::ManagedRestaurant,
      "Coffee Corner" => RK::CoffeeCorner,
      "Brasserie" => RK::Brewery,
      "Foodtruck" => RK::FoodTruck,
      "Restaurant administratif" => RK::AdministrativeRestaurant,
      "Libre-service" => RK::SelfService,
      "Kiosque" => RK::Kiosk,
      "Pizzéria" => RK::Pizzeria,
      "épicerie" => RK::GroceryStore,
      "Triporteur" => RK::Scooter,
      "crous and go" => RK::CrousAndGo,
      "Sandwicherie" => RK::SandwichShop,
      _ => unreachable!("Unknown restaurant type: {}", str),
    }
  }
}
