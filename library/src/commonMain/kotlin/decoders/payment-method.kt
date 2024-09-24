package decoders

import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.jsonPrimitive
import models.PaymentMethod

fun decodePaymentMethod (method: JsonObject): PaymentMethod {
  return when (val value = method["name"]!!.jsonPrimitive.content) {
    "Carte bancaire" -> PaymentMethod.CARD
    "Espèce" -> PaymentMethod.CASH
    "IZLY" -> PaymentMethod.IZLY
    "Monéo" -> PaymentMethod.MONEO
    else -> throw Exception("Unknown payment method: $value")
  }
}
