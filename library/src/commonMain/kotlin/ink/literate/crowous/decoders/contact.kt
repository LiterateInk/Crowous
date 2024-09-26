package ink.literate.crowous.decoders

import kotlinx.serialization.json.*
import ink.literate.crowous.models.Contact

fun decodeContact (contact: JsonObject): Contact {
  return Contact(
    contact["tel"]!!.jsonPrimitive.content,
    contact["email"]!!.jsonPrimitive.content,
  )
}
