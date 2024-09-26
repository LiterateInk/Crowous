package ink.literate.crowous.decoders

import ink.literate.crowous.models.Moment

fun decodeMoment (value: String): Moment {
  return when (value) {
    "matin" -> Moment.MORNING
    "midi" -> Moment.LUNCH
    "soir" -> Moment.EVENING
    else -> throw Exception("Unknown moment: $value")
  }
}
