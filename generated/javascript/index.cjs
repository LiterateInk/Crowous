// This file is generated by inklang, see <https://github.com/inklang/inklang>.
// Do not edit it directly since it'll be overwritten.

const { parse: inklang__url_parse } = require("@inklang/url");
const { createRequest: inklang__http_createRequest, createHeaders: inklang__http_createHeaders, sendRequest: inklang__http_sendRequest, readResponseBodyAsString: inklang__http_readResponseBodyAsString } = require("@inklang/http");
const { parse: inklang__json_parse, asArray: inklang__json_asArray, getProperty: inklang__json_getProperty, asString: inklang__json_asString, asBoolean: inklang__json_asBoolean } = require("@inklang/json");
const { create: inklang__array_create, valueAtIndex: inklang__array_valueAtIndex, push: inklang__array_push } = require("@inklang/array");
const { stripAll: inklang__string_stripAll, split: inklang__string_split } = require("@inklang/string");

export class Feed {
	name;
	identifier;
	isDefault;
	constructor (name, identifier, isDefault) {
		this.name = name;
		this.identifier = identifier;
		this.isDefault = isDefault;
	}
}
exports.Feed = Feed;
const getFeeds = async () => {
	let url = inklang__url_parse("http://webservices-v2.crous-mobile.fr/feed/feeds.json");
	let request = inklang__http_createRequest("GET", url, inklang__http_createHeaders());
	let response = await inklang__http_sendRequest(request);
	let body = await inklang__http_readResponseBodyAsString(response);
	let json = inklang__json_parse(body);
	let feeds = inklang__array_create();
	for (let feed of inklang__json_asArray(inklang__json_getProperty(json, "results"))) {
		let name = inklang__string_stripAll(inklang__json_asString(inklang__json_getProperty(feed, "name")), "FLUX ");
		let parts = inklang__string_split(inklang__json_asString(inklang__json_getProperty(feed, "url")), "/");
		let identifier = inklang__array_valueAtIndex(parts, 4);
		feeds = inklang__array_push(feeds, new Feed(name, identifier, inklang__json_asBoolean(inklang__json_getProperty(feed, "is_default"))));
	}
	return feeds;
}
exports.getFeeds = getFeeds;