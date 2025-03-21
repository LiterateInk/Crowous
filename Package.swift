// swift-tools-version:6.0
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "Crowous",
    products: [
      .library(
        name: "Crowous",
        targets: ["Crowous"]),
    ],
    targets: [
      .target(
          name: "Crowous",
          dependencies: [],
          path: "generated/swift"),
      .executableTarget(
          name: "GetFeeds",
          dependencies: ["Crowous"],
          path: "examples/swift/GetFeeds"),
    ]
)