expose async function get_feeds () -> void {
  var url: @url::url = @url::parse("http://webservices-v2.crous-mobile.fr/feed/feeds.json");
  var request: @http::request = @http::create_request("GET", url, @http::create_headers());
  var response: @http::response = await @http::send(request);
  var json: @json::value = @json::parse(@bytes::to_utf8_string(response.bytes));
}