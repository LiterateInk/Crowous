package decoders

import kotlinx.serialization.json.*
import models.Meal

fun decodeMeal (meal: JsonObject): Meal {
  var information: String? = null
  val categories = meal["foodcategory"]!!.jsonArray.map {
    decodeMealCategory(it.jsonObject)
  } .filter {
    if (it.name == "informations" || it.name == "Fermeture") {
      if (information == null) {
        information = it.dishes.first()
      }

      // skip this category
      false
    }

    else true
  }


  return Meal(
    moment = decodeMoment(meal["name"]!!.jsonPrimitive.content),
    information,
    categories
  )
}