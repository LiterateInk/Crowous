package decoders

import kotlinx.serialization.json.*
import models.Contact

fun decodeContact (contact: JsonObject): Contact {
  return Contact(
    contact["tel"]!!.jsonPrimitive.content,
    contact["email"]!!.jsonPrimitive.content,
  )
}
