package ink.literate.crowous.api

import ink.literate.crowous.core.Request
import ink.literate.crowous.decoders.decodeRestaurant
import kotlinx.datetime.LocalDate
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.jsonArray
import kotlinx.serialization.json.jsonObject
import ink.literate.crowous.models.Meal
import ink.literate.crowous.models.Moment
import ink.literate.crowous.models.Restaurant

suspend fun restaurants (identifier: String): List<Restaurant> {
  val request = Request("$identifier/externe/crous-$identifier.min.json")
  val response = request.send()

  val content = response.replace(Regex("[\u0000-\u001F]"), "")
  val json = Json.parseToJsonElement(content)

  return json.jsonObject["restaurants"]!!.jsonArray.map { decodeRestaurant(it.jsonObject) }
}

/**
 * Check if a restaurant is open at a specific day and moment.
 *
 * @param restaurant The restaurant to check.
 * @param dayIndex The index of the day to check, starting from 0 for Monday.
 * @param moment The moment to check.
 */
fun isRestaurantOpen (restaurant: Restaurant, dayIndex: Int, moment: Moment): Boolean {
  val day = restaurant.opening.split(",")[dayIndex]
  val opening = day[moment.ordinal]

  return opening == '1'
}

/**
 * Get the meals of a restaurant for a specific date.
 *
 * @param restaurant The restaurant to get the meals from.
 * @param date The date to get the meals for.
 */
fun meals (restaurant: Restaurant, date: LocalDate): List<Meal>? {
  return restaurant.menus.find {
    it.date.monthNumber == date.monthNumber
        && it.date.dayOfMonth == date.dayOfMonth
  }?.meals
}
