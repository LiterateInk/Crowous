export const Moment = {
  MORNING: "MORNING",
  LUNCH: "LUNCH",
  EVENING: "EVENING"
} as const;

export type Moment = typeof Moment[keyof typeof Moment];
