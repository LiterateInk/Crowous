package ink.literate.crowous.decoders

import kotlinx.serialization.json.*
import ink.literate.crowous.models.MealCategory

fun decodeMealCategory (category: JsonObject): MealCategory {
  return MealCategory(
    name = category["name"]!!.jsonPrimitive.content,
    dishes = category["dishes"]!!.jsonArray.map {
      it.jsonObject["name"]!!.jsonPrimitive.content
    }
  )
}
