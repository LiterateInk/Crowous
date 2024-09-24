package models

import kotlinx.serialization.Serializable

@Serializable
data class MealCategory(
    val name: String,
    val dishes: List<String>
)
