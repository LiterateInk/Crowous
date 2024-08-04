pub mod available_crous;
pub mod available_restaurants;

// Note how it's not "https:" but "http:".
// For some reason, the API doesn't work when using "https:".
pub const API_ENDPOINT: &str = "http://webservices-v2.crous-mobile.fr/feed";
