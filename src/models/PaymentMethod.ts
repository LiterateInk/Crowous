export enum PaymentMethod {
  Card,
  Cash,
  Izly,
  Moneo
}

export const translatePaymentMethodFromAPI = (api: string): PaymentMethod => {
  switch (api) {
    case "Carte bancaire":
      return PaymentMethod.Card;
    case "Espèce":
      return PaymentMethod.Cash;
    case "IZLY":
      return PaymentMethod.Izly;
    case "Monéo":
      return PaymentMethod.Moneo;
    default:
      console.log(api);
      throw new Error(`Unknown payment method: ${api}`);
  }
};
