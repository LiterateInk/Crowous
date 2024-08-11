import type { RestaurantKind, Contact, Image, PaymentMethod, Menu } from "~/models";

export interface Restaurant {
  id: number,
  title: string,
  latitude: number,
  longitude: number,
  area: string,
  address: string,
  opening: string,
  closing: string,
  kind: RestaurantKind,
  accessibility: boolean,
  wifi: boolean,
  shortDescription: string,
  description: string,
  access: string,
  operationalHours: string,
  contact: Contact,
  crousAndGo: string,
  album: Image | undefined,
  photo: Image,
  paymentMethods: Array<PaymentMethod>,
  menus: Array<Menu>
}
