expose record feed {
  name: string
  identifier: string
  is_default: boolean
}

expose async function get_feeds () -> @array::of<feed> {
  var url: @url::url = @url::parse("http://webservices-v2.crous-mobile.fr/feed/feeds.json");
  var request: @http::request = @http::create_request("GET", url, @http::create_headers());
  var response: @http::response = await @http::send(request);
  var json: @json::value = @json::parse(@bytes::to_utf8_string(response.bytes));

  var feeds: @array::of<feed> = @array::create();

  for feed in @json::get<@array::of<@json::value>>(json, "results") {
    var name: string = @string::strip_once(@json::get<string>(feed, "name"), "FLUX ");
    var parts: @array::of<string> = @string::split(@json::get<string>(feed, "url"), "/");
    var identifier: string = @array::item_from_index(parts, 4);

    @array::push(feed {
      name: name,
      identifier: identifier,
      is_default: @json::get<boolean>(feed, "is_default")
    });
  }

  return feeds;
}
