package ink.literate.crowous.decoders

import kotlinx.serialization.json.*
import ink.literate.crowous.models.Feed

fun decodeFeed (feed: JsonObject): Feed {
  var name = feed["name"]!!.jsonPrimitive.content
  name = name.replace("FLUX ", "")

  val url = feed["url"]!!.jsonPrimitive.content
  val identifier = url.split("/")[4];

  return Feed(
    name,
    identifier,
    feed["is_default"]!!.jsonPrimitive.boolean
  )
}
