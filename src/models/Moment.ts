export enum Moment {
  Morning,
  Lunch,
  Evening
}

export const translateMomentFromAPI = (api: string): Moment => {
  switch (api) {
    case "matin":
      return Moment.Morning;
    case "midi":
      return Moment.Lunch;
    case "soir":
      return Moment.Evening;
    default:
      throw new Error(`Unknown opening: ${api}`);
  }
};
