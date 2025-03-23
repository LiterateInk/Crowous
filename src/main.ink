expose record feed {
  name: string
  identifier: string
  is_default: boolean
}

expose async function get_feeds () -> @array::of<feed> {
  var url: @url::url = @url::parse("http://webservices-v2.crous-mobile.fr/feed/feeds.json");

  var request: @http::request = @http::create_request("GET", url, @http::create_headers());
  var response: @http::response = await @http::send_request(request);
  var body: string = await @http::read_response_body_as_string(response);
  var json: @json::value = @json::parse(body);

  var feeds: @array::of<feed> = @array::create();

  for feed: @json::value in @json::as_array(@json::get_property(json, "results")) {
    var name: string = @string::strip_all(@json::as_string(@json::get_property(feed, "name")), "FLUX ");
    var parts: @array::of<string> = @string::split(@json::as_string(@json::get_property(feed, "url")), "/");
    var identifier: string = @array::value_at_index(parts, 4);

    feeds = @array::push(feeds, feed {
      name: name,
      identifier: identifier,
      is_default: @json::as_boolean(@json::get_property(feed, "is_default"))
    });
  }

  return feeds;
}

expose record image {
  href: string
  description: string
}

expose record contact {
  phone: string
  email: string
}

expose enum payment_method {
  card = "Carte bancaire"
  cash = "Espèce"
  izly = "IZLY"
  moneo = "Monéo"
}

expose enum restaurant_kind {
  cafetaria = "Cafétéria"
  restaurant = "Restaurant"
  approved_restaurant = "Restaurant agréé"
  managed_restaurant = "Restaurant géré"
  coffee_corner = "Coffee Corner"
  brewery = "Brasserie"
  food_truck = "Foodtruck"
  administrative_restaurant = "Restaurant administratif"
  self_service = "Libre-service"
  kiosk = "Kiosque"
  pizzeria = "Pizzéria"
  grocery_store = "épicerie"
  scooter = "Triporteur"
  crous_and_go = "crous and go"
  sandwich_shop = "Sandwicherie"
}

expose record restaurant {
  id: u64
  title: string
  latitude: f64
  longitude: f64
  area: string
  address: string
  opening: string
  closing: string
  kind: string // TODO: enum RestaurantKind
  accessibility: boolean
  wifi: boolean
  short_description: string
  description: string
  access: string
  operational_hours: string
  contact: contact
  crous_and_go: string
  album: @option::optional<image>
  photo: image
  payment_methods: @array::of<string> // TODO: enum PaymentMethod
  // TODO: menus: @array::of<menu>
}

expose async function get_restaurants (identifier: string) -> @array::of<restaurant> {
  // Using segments is currently the only way to dynamically build this URL.
  // http://webservices-v2.crous-mobile.fr/feed/<identifier>/externe/crous-<identifier>.min.json
  var segments: @array::of<string> = @array::create();
  segments = @array::push(segments, "http://webservices-v2.crous-mobile.fr/feed/");
  segments = @array::push(segments, identifier);
  segments = @array::push(segments, "/externe/");
  segments = @array::push(segments, "crous-");
  segments = @array::push(segments, identifier);
  segments = @array::push(segments, ".min.json");
  var url: @url::url = @url::parse(@string::concat(segments));

  var request: @http::request = @http::create_request("GET", url, @http::create_headers());
  var response: @http::response = await @http::send_request(request);
  var body: string = await @http::read_response_body_as_string(response);

  // Sometimes the JSON is badly formatted because of some odd reasons...
  var content: string = @string::strip_ctl(body);
  var json: @json::value = @json::parse(content);

  var restaurants: @array::of<restaurant> = @array::create();

  for restaurant: @json::value in @json::as_array(@json::get_property(json, "restaurants")) {
    var contact_json: @json::value = @json::get_property(restaurant, "contact");
    var contact: contact = contact {
      phone: @json::as_string(@json::get_property(contact_json, "tel")),
      email: @json::as_string(@json::get_property(contact_json, "email"))
    };

    var photo_json: @json::value = @json::get_property(restaurant, "photo");
    var photo: image = image {
      href: @json::as_string(@json::get_property(photo_json, "src")),
      description: @json::as_string(@json::get_property(photo_json, "alt"))
    };

    var album_json: @json::value = @json::get_property(restaurant, "album");
    var album: @option::optional<image> = @option::undefined();
    if (@json::is_defined(album_json) == true) {
      album = @option::defined(image {
        href: @json::as_string(@json::get_property(album_json, "src")),
        description: @json::as_string(@json::get_property(album_json, "alt"))
      });
    }

    var payment_methods: @array::of<string> = @array::create();
    for payment_json: @json::value in @json::as_array(@json::get_property(restaurant, "payment")) {
      var value: string = @json::as_string(@json::get_property(payment_json, "name"));
      payment_methods = @array::push(payment_methods, value);
    }

    restaurants = @array::push(restaurants, restaurant {
      id: @json::as_u64(@json::get_property(restaurant, "id")),
      title: @json::as_string(@json::get_property(restaurant, "title")),
      latitude: @json::as_f64(@json::get_property(restaurant, "lat")),
      longitude: @json::as_f64(@json::get_property(restaurant, "lon")),
      area: @json::as_string(@json::get_property(restaurant, "area")),
      address: @json::as_string(@json::get_property(restaurant, "adresse")),
      opening: @json::as_string(@json::get_property(restaurant, "opening")),
      closing: @json::as_string(@json::get_property(restaurant, "closing")),
      kind: @json::as_string(@json::get_property(restaurant, "type")),
      accessibility: @json::as_boolean(@json::get_property(restaurant, "accessibility")),
      wifi: @json::as_boolean(@json::get_property(restaurant, "wifi")),
      short_description: @json::as_string(@json::get_property(restaurant, "shortdesc")),
      description: @json::as_string(@json::get_property(restaurant, "description")),
      access: @json::as_string(@json::get_property(restaurant, "access")),
      operational_hours: @json::as_string(@json::get_property(restaurant, "operationalhours")),
      contact: contact,
      crous_and_go: @json::as_string(@json::get_property(restaurant, "crousandgo")),
      album: album,
      photo: photo,
      payment_methods: payment_methods
      // menus: TODO
    });
  }

  return restaurants;
}
