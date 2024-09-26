package ink.literate.crowous.models

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
enum class PaymentMethod {
    @SerialName("CARD")
    CARD,
    @SerialName("CASH")
    CASH,
    @SerialName("IZLY")
    IZLY,
    @SerialName("MONEO")
    MONEO
}
