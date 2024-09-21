package api

import core.Request
import decoders.decodeFeed
import kotlinx.serialization.json.*
import models.Feed

suspend fun feeds (): List<Feed> {
    val request = Request("feeds.json")
    val response = request.send()
    val content = Json.parseToJsonElement(response)
    val results = content.jsonObject["results"]!!.jsonArray

    return results.map { json -> decodeFeed(json.jsonObject) }
}
