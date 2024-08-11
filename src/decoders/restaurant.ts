import type { Restaurant } from "~/models";
import { decodeMenu } from "./menu";
import { decodePaymentMethod } from "./payment-method";
import { decodeRestaurantKind } from "./restaurant-kind";
import { decodeContact } from "./contact";
import { decodeImage } from "./image";

export const decodeRestaurant = (restaurant: any): Restaurant => {
  return {
    id: restaurant.id,
    title: restaurant.title,
    latitude: restaurant.lat,
    longitude: restaurant.lon,
    area: restaurant.area,
    address: restaurant.adresse,
    opening: restaurant.opening,
    closing: restaurant.closing,
    kind: decodeRestaurantKind(restaurant.type),
    accessibility: restaurant.accessibility,
    wifi: restaurant.wifi,
    shortDescription: restaurant.shortdesc,
    description: restaurant.description,
    access: restaurant.access,
    operationalHours: restaurant.operationalhours,
    contact: decodeContact(restaurant.contact),
    crousAndGo: restaurant.crousandgo,
    album: restaurant.album && decodeImage(restaurant.album),
    photo: decodeImage(restaurant.photo),
    paymentMethods: restaurant.payment.map(decodePaymentMethod),
    menus: restaurant.menus.map(decodeMenu)
  };
};
