export enum RestaurantKind {
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
  SandwichShop
}

export const translateRestaurantKindFromAPI = (api: string): RestaurantKind => {
  switch (api) {
    case "Cafétéria":
      return RestaurantKind.Cafeteria;
    case "Restaurant":
      return RestaurantKind.Restaurant;
    case "Restaurant agréé":
      return RestaurantKind.ApprovedRestaurant;
    case "Restaurant géré":
      return RestaurantKind.ManagedRestaurant;
    case "Coffee Corner":
      return RestaurantKind.CoffeeCorner;
    case "Brasserie":
      return RestaurantKind.Brewery;
    case "Foodtruck":
      return RestaurantKind.FoodTruck;
    case "Restaurant administratif":
      return RestaurantKind.AdministrativeRestaurant;
    case "Libre-service":
      return RestaurantKind.SelfService;
    case "Kiosque":
      return RestaurantKind.Kiosk;
    case "Pizzéria":
      return RestaurantKind.Pizzeria;
    case "épicerie":
      return RestaurantKind.GroceryStore;
    case "Triporteur":
      return RestaurantKind.Scooter;
    case "crous and go":
      return RestaurantKind.CrousAndGo;
    case "Sandwicherie":
      return RestaurantKind.SandwichShop;
    default:
      throw new Error(`Unknown restaurant type: ${api}`);
  }
};
