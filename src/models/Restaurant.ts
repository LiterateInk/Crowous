import { translateRestaurantKindFromAPI, type RestaurantKind } from "~/models/RestaurantKind";
import { translatePaymentMethodFromAPI, type PaymentMethod } from "~/models/PaymentMethod";
import type { Moment } from "~/models/Moment";
import { translateMenuFromAPI, type Menu, type MenuAPI } from "~/models/Menu";
import type { Meal } from "~/models/Meal";
import { translateImageFromAPI, type Image, type ImageAPI } from "~/models/Image";
import { translateContactFromAPI, type Contact, type ContactAPI } from "~/models/Contact";

export class Restaurant {
  constructor (
    public id: number,
    public title: string,
    public latitude: number,
    public longitude: number,
    public area: string,
    public address: string,
    public opening: string,
    public closing: string,
    public kind: RestaurantKind,
    public accessibility: boolean,
    public wifi: boolean,
    public shortDescription: string,
    public description: string,
    public access: string,
    public operationalHours: string,
    public contact: Contact,
    public crousAndGo: string,
    public album: Image | undefined,
    public photo: Image,
    public paymentMethods: Array<PaymentMethod>,
    public menus: Array<Menu>
  ) {}

  public isOpen (dayIndex: number, moment: Moment): boolean {
    const day = this.opening.split(",")[dayIndex];
    const opening = day[moment as number];

    return opening === "1";
  }

  public getMeals (date: string): Meal[] {
    return this.menus.find((menu) => menu.date === date)?.meals ?? [];
  }
}

export interface RestaurantAPI {
  id: number
  title: string
  lat: number
  lon: number
  area: string
  adresse: string
  opening: string
  closing: string
  type: string
  accessibility: boolean
  wifi: boolean
  shortdesc: string
  description: string
  access: string
  operationalhours: string
  contact: ContactAPI
  crousandgo: string
  album?: ImageAPI
  photo: ImageAPI
  payment: Array<{ name: string }>
  menus: Array<MenuAPI>
}

export const translateRestaurantFromAPI = (api: RestaurantAPI): Restaurant => {
  return new Restaurant(
    api.id,
    api.title,
    api.lat,
    api.lon,
    api.area,
    api.adresse,
    api.opening,
    api.closing,
    translateRestaurantKindFromAPI(api.type),
    api.accessibility,
    api.wifi,
    api.shortdesc,
    api.description,
    api.access,
    api.operationalhours,
    translateContactFromAPI(api.contact),
    api.crousandgo,
    api.album && translateImageFromAPI(api.album),
    translateImageFromAPI(api.photo),
    api.payment.map((method) => translatePaymentMethodFromAPI(method.name)),
    api.menus.map(translateMenuFromAPI)
  );
};
