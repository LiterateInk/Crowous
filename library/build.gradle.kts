import org.jetbrains.kotlin.gradle.ExperimentalKotlinGradlePluginApi
import org.jetbrains.kotlin.gradle.dsl.JvmTarget
import com.vanniktech.maven.publish.SonatypeHost

val libraryName = "Crowous"
version = "0.1.0"

plugins {
    alias(libs.plugins.kotlinMultiplatform)
    alias(libs.plugins.androidLibrary)
    id("com.vanniktech.maven.publish") version "0.29.0"
}

kotlin {
    jvm()
    androidTarget {
        publishLibraryVariants("release")
        @OptIn(ExperimentalKotlinGradlePluginApi::class)
        compilerOptions {
            jvmTarget.set(JvmTarget.JVM_1_8)
        }
    }

    sourceSets {
        val commonMain by getting {
            dependencies {
                implementation(libs.ktor.client.core)
                implementation(libs.kotlinx.serialization.json)
                implementation(libs.kotlinx.serialization.core)
                implementation(libs.kotlinx.datetime)
            }
        }
        val commonTest by getting {
            dependencies {
                implementation(libs.kotlin.test)
            }
        }
        val jvmMain by getting {
            dependencies {
                implementation(libs.ktor.client.okhttp)
                implementation(libs.kotlin.test)
            }
        }
        val androidMain by getting {
            dependencies {
                implementation(libs.ktor.client.okhttp)
            }
        }
    }
}

val groupName = "ink.literate." + libraryName.lowercase()
group = groupName

android {
    namespace = groupName
    compileSdk = libs.versions.android.compileSdk.get().toInt()
    defaultConfig {
        minSdk = libs.versions.android.minSdk.get().toInt()
    }
}

mavenPublishing {
    coordinates(groupName, libraryName.lowercase(), version.toString())

    pom {
        name.set(libraryName)
        description.set("A wrapper for the Crous Mobile internal API.")
        inceptionYear.set("2024")
        url.set("https://github.com/LiterateInk/$libraryName")
        licenses {
            license {
                name.set("GPL-3.0-or-later")
                url.set("https://www.gnu.org/licenses/gpl-3.0.txt")
                distribution.set("https://www.gnu.org/licenses/gpl-3.0.txt")
            }
        }
        developers {
            developer {
                id.set("literateink")
                name.set("LiterateInk")
                url.set("https://literate.ink")
            }
        }
        scm {
            url.set("https://github.com/LiterateInk/$libraryName")
            connection.set("scm:git:git://github.com/LiterateInk/$libraryName.git")
            developerConnection.set("scm:git:ssh://git@github.com/LiterateInk/$libraryName.git")
        }
    }

    publishToMavenCentral(SonatypeHost.CENTRAL_PORTAL, automaticRelease = true)
    signAllPublications()
}


