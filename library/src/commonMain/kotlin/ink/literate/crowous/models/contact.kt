package ink.literate.crowous.models

import kotlinx.serialization.Serializable

@Serializable
data class Contact(
    val phone: String,
    val email: String
)
