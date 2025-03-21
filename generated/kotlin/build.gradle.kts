plugins {
  kotlin("jvm") version "2.1.10"
}

repositories {
  mavenCentral()
}

dependencies {

}

kotlin {
  jvmToolchain(21)

  sourceSets.main {
    kotlin.srcDirs("src/main")
  }
}