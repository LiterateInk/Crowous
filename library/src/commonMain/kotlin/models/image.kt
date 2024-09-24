package models

import kotlinx.serialization.Serializable

@Serializable
data class Image(
    val href: String,
    val description: String
)
