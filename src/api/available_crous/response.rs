use crate::models::Crous;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
struct CrousResponseCollection {
  pub results: Vec<CrousResponse>,
}

#[derive(Serialize, Deserialize)]
struct CrousResponse {
  /// Index in the array, starting from 1.
  pub id: u8,

  /// Name of the Crous feed.
  pub name: String,

  /// Provided in the following format :
  /// `http://webservices-v2.crous-mobile.fr:8080/feed/<identifier>/externe/crous-<identifier>.min.json`
  pub url: String,

  /// Always `false`, apparently.
  pub is_default: bool,
}

pub fn parse_response(response: String) -> Vec<Crous> {
  let collection: CrousResponseCollection = serde_json::from_str(&response).unwrap();
  let mut crous_collection: Vec<Crous> = Vec::with_capacity(collection.results.len());

  for crous in collection.results {
    let identifier = crous.url.split('/').collect::<Vec<&str>>()[4].to_string();
    let name = crous.name.replace("FLUX ", "");

    crous_collection.push(Crous {
      identifier,
      name,
      is_default: crous.is_default,
    });
  }

  crous_collection
}
