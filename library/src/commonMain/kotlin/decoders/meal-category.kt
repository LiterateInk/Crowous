package decoders

import kotlinx.serialization.json.*
import models.MealCategory

fun decodeMealCategory (category: JsonObject): MealCategory {
  return MealCategory(
    name = category["name"]!!.jsonPrimitive.content,
    dishes = category["dishes"]!!.jsonArray.map {
      it.jsonObject["name"]!!.jsonPrimitive.content
    }
  )
}
