package ink.literate.crowous.core

import io.ktor.client.*
import io.ktor.client.engine.cio.*
import io.ktor.client.request.*
import io.ktor.client.statement.*

class Request(path: String) {
    private val url: String = "http://webservices-v2.crous-mobile.fr/feed/$path"

    suspend fun send(): String {
        val http = HttpClient(CIO)
        val response = http.get(url)

        return response.bodyAsText()
    }
}