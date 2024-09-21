package core

import io.ktor.client.*
import io.ktor.client.request.*
import io.ktor.client.statement.*

class Request(path: String) {
    private val url: String = "http://webservices-v2.crous-mobile.fr/feed/$path"
    private val http = HttpClient()

    suspend fun send(): String {
        val res = http.get(url)
        return res.bodyAsText()
    }
}