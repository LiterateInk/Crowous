expose record feed {
  name: string
  identifier: string
  is_default: boolean
}

expose function create_feed () -> feed {
  return feed {
    is_default: false,
    identifier: "world",
    name: "hello"
  };
}

// expose async function get_feeds () -> @array::of<feed> {
//   var url: @url::url = @url::parse("http://webservices-v2.crous-mobile.fr/feed/feeds.json");
//   var request: @http::request = @http::create_request("GET", url, @http::create_headers());
//   var response: @http::response = await @http::send(request);
//   var json: @json::value = @json::parse(@bytes::to_utf8_string(response.bytes));
//
//   var feeds: @array::of<feed> = @array::create();
//
//   for feed in @json::as_array(@json::get(json, "results")) {
//     var name: string = @string::strip_once(@json::as_string(@json::get(feed, "name")), "FLUX ");
//     var parts: @array::of<string> = @string::split(@json::as_string(@json::get(feed, "url")), "/");
//     var identifier: string = @array::item_from_index(parts, 4);
//
//     @array::push(feed {
//       name: name,
//       identifier: identifier,
//       is_default: @json::as_boolean(@json::get(feed, "is_default"))
//     });
//   }
//
//   return feeds;
// }
