import { Moment, UnknownEnumValue } from "~/models";

export function decodeMoment (value: any): Moment {
  switch (value) {
    case "matin":
      return Moment.MORNING;
    case "midi":
      return Moment.LUNCH;
    case "soir":
      return Moment.EVENING;
    default:
      throw new UnknownEnumValue("Moment", value);
  }
};
