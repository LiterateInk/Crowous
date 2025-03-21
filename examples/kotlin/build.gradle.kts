plugins {
  application
  kotlin("jvm") version "2.1.10"
}

repositories {
  mavenCentral()
}

dependencies {
  implementation(kotlin("stdlib"))
  implementation(project(":generated:kotlin"))
}

application {
  mainClass.set(findProperty("mainClass").toString())
}