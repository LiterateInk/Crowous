use serde::Serialize;

#[derive(Serialize, Clone)]
pub struct Crous {
  /// Identifier of the Crous feed.
  pub identifier: String,

  /// Name of the Crous feed.
  pub name: String,
}
