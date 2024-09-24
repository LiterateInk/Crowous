package models

import kotlinx.serialization.Serializable

@Serializable
data class Restaurant(
    val id: Int,
    val title: String,
    val latitude: Double,
    val longitude: Double,
    val area: String,
    val address: String,
    val opening: String,
    val closing: String,
    val kind: RestaurantKind,
    val accessibility: Boolean,
    val wifi: Boolean,
    val shortDescription: String,
    val description: String,
    val access: String,
    val operationalHours: String,
    val contact: Contact,
    val crousAndGo: String,
    val album: Image?,
    val photo: Image,
    val paymentMethods: List<PaymentMethod>,
    val menus: List<Menu>
)
