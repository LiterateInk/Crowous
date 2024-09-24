package decoders

import kotlinx.serialization.json.*
import models.Image

fun decodeImage (contact: JsonObject): Image {
  return Image(
    contact["src"]!!.jsonPrimitive.content,
    contact["alt"]!!.jsonPrimitive.content
  )
}
