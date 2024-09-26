package ink.literate.crowous.api

import kotlinx.coroutines.runBlocking
import kotlin.test.Test

class FeedsTest {
    @Test
    fun `returns a list of feeds`() {
        runBlocking {
            val feeds = feeds()
            assert(feeds.isNotEmpty())
        }
    }

    @Test
    fun `returns a list of feeds with the correct properties`() {
        runBlocking {
            val feeds = feeds()
            // We only check the first feed.
            val feed = feeds.first()

            assert(feed.name.isNotEmpty())
            assert(feed.identifier.isNotEmpty())
        }
    }
}