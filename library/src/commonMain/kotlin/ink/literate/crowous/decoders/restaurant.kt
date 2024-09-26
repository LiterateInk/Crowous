package ink.literate.crowous.decoders

import kotlinx.serialization.json.*
import ink.literate.crowous.models.Restaurant

fun decodeRestaurant (restaurant: JsonObject): Restaurant {
  return Restaurant(
    id = restaurant["id"]!!.jsonPrimitive.int,
    title = restaurant["title"]!!.jsonPrimitive.content,
    latitude = restaurant["lat"]!!.jsonPrimitive.double,
    longitude = restaurant["lon"]!!.jsonPrimitive.double,
    area = restaurant["area"]!!.jsonPrimitive.content,
    address = restaurant["adresse"]!!.jsonPrimitive.content,
    opening = restaurant["opening"]!!.jsonPrimitive.content,
    closing = restaurant["closing"]!!.jsonPrimitive.content,
    kind = decodeRestaurantKind(restaurant["type"]!!.jsonPrimitive.content),
    accessibility = restaurant["accessibility"]!!.jsonPrimitive.boolean,
    wifi = restaurant["wifi"]!!.jsonPrimitive.boolean,
    shortDescription = restaurant["shortdesc"]!!.jsonPrimitive.content,
    description = restaurant["description"]!!.jsonPrimitive.content,
    access = restaurant["access"]!!.jsonPrimitive.content,
    operationalHours = restaurant["operationalhours"]!!.jsonPrimitive.content,
    contact = decodeContact(restaurant["contact"]!!.jsonObject),
    crousAndGo = restaurant["crousandgo"]!!.jsonPrimitive.content,
    album = restaurant["album"]?.let { decodeImage(it.jsonObject) },
    photo = decodeImage(restaurant["photo"]!!.jsonObject),
    paymentMethods = restaurant["payment"]!!.jsonArray.map {
      decodePaymentMethod(it.jsonObject)
    },
    menus = restaurant["menus"]!!.jsonArray.map {
      decodeMenu(it.jsonObject)
    }
  )
}
