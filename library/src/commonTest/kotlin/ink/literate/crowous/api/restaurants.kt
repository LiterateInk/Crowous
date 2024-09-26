package ink.literate.crowous.api

import ink.literate.crowous.models.*
import kotlinx.coroutines.runBlocking
import kotlinx.datetime.LocalDate
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class RestaurantsTest {

  // Define a dummy restaurant to test the decoding.
  // We only want to test `opening` and `menus` properties.
  private val dummyRestaurant = Restaurant(
    title = "Dummy",
    kind = RestaurantKind.RESTAURANT,
    address = "Dummy",
    latitude = 1.0,
    longitude = 1.0,
    paymentMethods = listOf(),
    id = 1,
    area = "Dummy",
    /**
     * Opening moments for the week.
     *
     * 0.Monday = morning, lunch, evening
     * 1.Tuesday = lunch, evening
     * 2.Wednesday = (none)
     * 3.Thursday = lunch
     * 4.Friday = morning
     * 5.Saturday = evening
     * 6.Sunday = (none)
     */
    /**
     * Opening moments for the week.
     *
     * 0.Monday = morning, lunch, evening
     * 1.Tuesday = lunch, evening
     * 2.Wednesday = (none)
     * 3.Thursday = lunch
     * 4.Friday = morning
     * 5.Saturday = evening
     * 6.Sunday = (none)
     */
    opening = "111,011,000,010,100,001,000",
    closing = "",
    accessibility = false,
    wifi = false,
    shortDescription = "",
    description = "",
    access = "",
    operationalHours = "",
    contact = Contact(phone = "", email = ""),
    crousAndGo = "",
    album = null,
    photo = Image(href = "", description = ""),
    menus = listOf(
      Menu(
        date = LocalDate(2024, 10, 6),
        meals = listOf(
          Meal(
            moment = Moment.LUNCH,
            categories = listOf(
              MealCategory(
                name = "Entrées",
                dishes = listOf("Hello", "World"),
              )
            ),
            information = null
          )
        )
      ),
      Menu(
        date = LocalDate(2024, 10, 7),
        meals = listOf(
          Meal(
            moment = Moment.LUNCH,
            categories = listOf(),
            information = "Fermeture"
          )
        )
      )
    )
  )

  @Test
  fun `returns a list of restaurants`() {
    runBlocking {
      val restaurants = restaurants("limoges");
      assert(restaurants.isNotEmpty())
    }
  }

  @Test
  fun `contains 'RU La Borie' and properties are matching`() {
    runBlocking {
      val restaurants = restaurants("limoges");
      val restaurant = restaurants.first { it.title == "RU La Borie" }

      assert(restaurant.kind == RestaurantKind.RESTAURANT)
      assert(restaurant.address == "185 avenue Albert Thomas 87065 LIMOGES")

      // Defining a small tolerance (epsilon) for floating-point comparison
      val epsilon = 0.000001

      assertEquals(45.83889784370443, restaurant.latitude, epsilon)
      assertEquals(1.2358011785160563, restaurant.longitude, epsilon)

      val expectedPaymentMethods = listOf(
        PaymentMethod.IZLY,
        PaymentMethod.CARD,
        PaymentMethod.CASH
      )

      assertTrue(restaurant.paymentMethods.containsAll(expectedPaymentMethods),
      "Expected payment methods: $expectedPaymentMethods, but got: ${restaurant.paymentMethods}")
    }
  }

  @Test
  fun `isRestaurantOpen returns true for 'RU La Borie' on Monday and Thursday at lunch`() {
    assert(isRestaurantOpen(dummyRestaurant, 0, Moment.LUNCH))
    assert(isRestaurantOpen(dummyRestaurant, 3, Moment.LUNCH))
  }

  @Test
  fun `isRestaurantOpen returns false for 'RU La Borie' on Wednesday and Sunday`() {
    assert(!isRestaurantOpen(dummyRestaurant, 2, Moment.LUNCH))
    assert(!isRestaurantOpen(dummyRestaurant, 6, Moment.LUNCH))
  }

  @Test
  fun `meals contains information on 2024-10-7`() {
    val date = LocalDate(2024, 10, 7)
    val meals = meals(dummyRestaurant, date)
    assert(meals != null)

    val meal = meals!!.first()
    assert(meal.moment == Moment.LUNCH)
    assert(meal.categories.isEmpty())
    assert(meal.information == "Fermeture")
  }

  @Test
  fun `meals returns a meal on 2024-10-6`() {
    val date = LocalDate(2024, 10, 6)
    val meals = meals(dummyRestaurant, date)
    assert(meals != null)

    val meal = meals!!.first()
    assert(meal.moment == Moment.LUNCH)
    assert(meal.categories.isNotEmpty())
    assert(meal.information == null)

    val category = meal.categories.first()
    assert(category.name == "Entrées")
    assert(category.dishes.contains("Hello"))
    assert(category.dishes.contains("World"))
  }

  @Test
  fun `meals returns null on 2024-10-8`() {
    val date = LocalDate(2024, 10, 8)
    val meals = meals(dummyRestaurant, date)
    assert(meals == null)
  }
}