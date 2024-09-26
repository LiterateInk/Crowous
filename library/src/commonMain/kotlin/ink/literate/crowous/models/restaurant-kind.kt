package ink.literate.crowous.models

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
enum class RestaurantKind {
    @SerialName("CAFETERIA")
    CAFETERIA,
    @SerialName("RESTAURANT")
    RESTAURANT,
    @SerialName("APPROVED_RESTAURANT")
    APPROVED_RESTAURANT,
    @SerialName("MANAGED_RESTAURANT")
    MANAGED_RESTAURANT,
    @SerialName("ADMINISTRATIVE_RESTAURANT")
    ADMINISTRATIVE_RESTAURANT,
    @SerialName("COFFEE_CORNER")
    COFFEE_CORNER,
    @SerialName("BREWERY")
    BREWERY,
    @SerialName("FOOD_TRUCK")
    FOOD_TRUCK,
    @SerialName("SELF_SERVICE")
    SELF_SERVICE,
    @SerialName("KIOSK")
    KIOSK,
    @SerialName("PIZZERIA")
    PIZZERIA,
    @SerialName("GROCERY_STORE")
    GROCERY_STORE,
    @SerialName("SCOOTER")
    SCOOTER,
    @SerialName("CROUS_AND_GO")
    CROUS_AND_GO,
    @SerialName("SANDWICH_SHOP")
    SANDWICH_SHOP
}
