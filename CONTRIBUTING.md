# Contributing

## Publishing

Currently using `cargo-release` to publish manually the library to [crates.io](https://crates.io/).

```bash
# Requirements in case you don't have them.
cargo login
cargo install cargo-release

# Run the following command to publish the library.
# Remove the "--execute" argument to make a dry-run.
cargo release <patch|minor|major> --execute
```
