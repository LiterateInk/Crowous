package decoders

import kotlinx.datetime.LocalDate
import kotlinx.serialization.json.*
import models.Menu

fun decodeMenu (menu: JsonObject): Menu {
  return Menu(
    // formatted as "YYYY-MM-DD"
    date = LocalDate.parse(menu["date"]!!.jsonPrimitive.content),

    meals = menu["meal"]!!.jsonArray.map {
      decodeMeal(it.jsonObject)
    }
  )
}
