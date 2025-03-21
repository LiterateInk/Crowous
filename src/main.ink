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

  for feed in @json::as_array(@json::get_property(json, "results")) {
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
