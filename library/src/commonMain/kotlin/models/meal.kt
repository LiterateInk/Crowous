package models

import kotlinx.serialization.Serializable

@Serializable
data class Meal(
    val moment: Moment,
    val information: String?,
    val categories: List<MealCategory>
)
