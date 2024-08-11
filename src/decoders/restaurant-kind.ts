import { RestaurantKind, UnknownEnumValue } from "~/models";

export function decodeRestaurantKind (value: any): RestaurantKind {
  switch (value) {
    case "Cafétéria":
      return RestaurantKind.CAFETERIA;
    case "Restaurant":
      return RestaurantKind.RESTAURANT;
    case "Restaurant agréé":
      return RestaurantKind.APPROVED_RESTAURANT;
    case "Restaurant géré":
      return RestaurantKind.MANAGED_RESTAURANT;
    case "Coffee Corner":
      return RestaurantKind.COFFEE_CORNER;
    case "Brasserie":
      return RestaurantKind.BREWERY;
    case "Foodtruck":
      return RestaurantKind.FOOD_TRUCK;
    case "Restaurant administratif":
      return RestaurantKind.ADMINISTRATIVE_RESTAURANT;
    case "Libre-service":
      return RestaurantKind.SELF_SERVICE;
    case "Kiosque":
      return RestaurantKind.KIOSK;
    case "Pizzéria":
      return RestaurantKind.PIZZERIA;
    case "épicerie":
      return RestaurantKind.GROCERY_STORE;
    case "Triporteur":
      return RestaurantKind.SCOOTER;
    case "crous and go":
      return RestaurantKind.CROUS_AND_GO;
    case "Sandwicherie":
      return RestaurantKind.SANDWICH_SHOP;
    default:
      throw new UnknownEnumValue("RestaurantKind", value);
  }
};
