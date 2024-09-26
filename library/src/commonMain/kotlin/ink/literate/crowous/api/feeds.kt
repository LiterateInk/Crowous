package ink.literate.crowous.api

import ink.literate.crowous.core.Request
import ink.literate.crowous.decoders.decodeFeed
import kotlinx.serialization.json.*
import ink.literate.crowous.models.Feed

suspend fun feeds (): List<Feed> {
    val request = Request("feeds.json")
    val response = request.send()
    val content = Json.parseToJsonElement(response)
    val results = content.jsonObject["results"]!!.jsonArray

    return results.map { json -> decodeFeed(json.jsonObject) }
}
