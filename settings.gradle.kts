plugins {
  id("org.gradle.toolchains.foojay-resolver-convention") version "0.8.0"
}

rootProject.name = "crowous"
val generatedKotlinDir = file("generated/kotlin")
val examplesKotlinDir = file("examples/kotlin")

if (generatedKotlinDir.exists()) {
  include("generated:kotlin")
}
else {
  println("Skipping inclusion of 'generated:kotlin' as the directory does not exist.")
}

if (examplesKotlinDir.exists()) {
  include("examples:kotlin")
} else {
  println("Skipping inclusion of 'examples:kotlin' as the directory does not exist.")
}