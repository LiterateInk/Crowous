package models

import kotlinx.serialization.Serializable

@Serializable
data class Feed(
    val name: String,
    val identifier: String,
    val isDefault: Boolean
)
