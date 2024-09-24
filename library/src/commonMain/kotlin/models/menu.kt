package models

import kotlinx.serialization.Serializable

@Serializable
data class Menu(
    val date: Date, // ???
    val meals: List<Meal>
)
