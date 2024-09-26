package ink.literate.crowous.models

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
enum class Moment {
  @SerialName("MORNING")
  MORNING,
  @SerialName("LUNCH")
  LUNCH,
  @SerialName("EVENING")
  EVENING;
}
