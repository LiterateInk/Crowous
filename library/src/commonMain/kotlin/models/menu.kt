package models

import kotlinx.datetime.LocalDate
import kotlinx.serialization.Serializable

@Serializable
data class Menu(
    val date: LocalDate,
    val meals: List<Meal>
)
