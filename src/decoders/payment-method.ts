import { PaymentMethod, UnknownEnumValue } from "~/models";

export const decodePaymentMethod = (value: any): PaymentMethod => {
  const unwrapped = value.name;

  switch (unwrapped) {
    case "Carte bancaire":
      return PaymentMethod.CARD;
    case "Espèce":
      return PaymentMethod.CASH;
    case "IZLY":
      return PaymentMethod.IZLY;
    case "Monéo":
      return PaymentMethod.MONEO;
    default:
      throw new UnknownEnumValue("PaymentMethod", unwrapped);
  }
};
