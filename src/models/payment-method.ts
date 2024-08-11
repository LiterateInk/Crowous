export const PaymentMethod = {
  CARD: "CARD",
  CASH: "CASH",
  IZLY: "IZLY",
  MONEO: "MONEO"
} as const;

export type PaymentMethod = typeof PaymentMethod[keyof typeof PaymentMethod];
