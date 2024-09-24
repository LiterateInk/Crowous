package decoders

import models.RestaurantKind

fun decodeRestaurantKind (kind: String): RestaurantKind {
  return when (kind) {
    "Cafétéria" -> RestaurantKind.CAFETERIA
    "Restaurant" -> RestaurantKind.RESTAURANT
    "Restaurant agréé" -> RestaurantKind.APPROVED_RESTAURANT
    "Restaurant géré" -> RestaurantKind.MANAGED_RESTAURANT
    "Coffee Corner" -> RestaurantKind.COFFEE_CORNER
    "Brasserie" -> RestaurantKind.BREWERY
    "Foodtruck" -> RestaurantKind.FOOD_TRUCK
    "Restaurant administratif" -> RestaurantKind.ADMINISTRATIVE_RESTAURANT
    "Libre-service" -> RestaurantKind.SELF_SERVICE
    "Kiosque" -> RestaurantKind.KIOSK
    "Pizzéria" -> RestaurantKind.PIZZERIA
    "épicerie" -> RestaurantKind.GROCERY_STORE
    "Triporteur" -> RestaurantKind.SCOOTER
    "crous and go" -> RestaurantKind.CROUS_AND_GO
    "Sandwicherie" -> RestaurantKind.SANDWICH_SHOP
    else -> throw Exception("Unknown restaurant kind: $kind")
  }
}
