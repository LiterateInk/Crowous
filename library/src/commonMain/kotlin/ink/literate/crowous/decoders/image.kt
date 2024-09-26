package ink.literate.crowous.decoders

import kotlinx.serialization.json.*
import ink.literate.crowous.models.Image

fun decodeImage (contact: JsonObject): Image {
  return Image(
    contact["src"]!!.jsonPrimitive.content,
    contact["alt"]!!.jsonPrimitive.content
  )
}
