import type { ApiRestaurant } from "~/api/restaurants";
import { Meal } from "~/models/Meal";
import stripHTML from "~/utils/stripHTML";

type Opening = [morning: number, midday: number, evening: number];

export enum RestaurantType {
  CAFETERIA = "CAFETERIA",
  RESTAURANT = "RESTAURANT",
  APPROVED_RESTAURANT = "APPROVED_RESTAURANT",
  MANAGED_RESTAURANT = "MANAGED_RESTAURANT",
  ADMINISTRATIVE_RESTAURANT = "ADMINISTRATIVE_RESTAURANT",
  COFFEE_CORNER = "COFFEE_CORNER",
  BREWERY = "BREWERY",
  FOODTRUCK = "FOODTRUCK",
  SELF_SERVICE = "SELF_SERVICE",
  KIOSK = "KIOSK",
  PIZZERIA = "PIZZERIA",
  GROCERY_STORE = "GROCERY_STORE",
  SCOOTER = "SCOOTER",
  CROUS_AND_GO = "CROUS_AND_GO",
  SANDWICH_SHOP = "SANDWICH_SHOP"
}

export enum PaymentMethod {
  CARD = "CARD",
  CASH = "CASH",
  IZLY = "IZLY",
  MONEO = "MONEO"
}

export class Restaurant {
  public constructor (
    public title: string,
    public latitude: number,
    public longitude: number,
    public area: string,
    public address: string,
    private _openings: Array<Opening>,
    public type: RestaurantType,
    public accessibility: boolean,
    public wifi: boolean,
    public shortDescription: string,
    public description: string,
    /**
     * Small description on
     * how to access this restaurant.
     */
    public howToAccess: string,
    /**
     * Small description on when this
     * restaurant is operational.
     */
    public operationalHours: string,
    public phone: string,
    public email: string | null,
    public paymentMethods: Array<PaymentMethod>,
    public photo: { src: string, alt: string } | null,
    public album: { src: string, alt: string } | null,
    private _menus: Map<string, Meal[]>
  ) {}

  public isOpenMorning (dayIndex: number): boolean {
    return this._openings[dayIndex][0] === 1;
  }

  public isOpenMidday (dayIndex: number): boolean {
    return this._openings[dayIndex][1] === 1;
  }

  public isOpenEvening (dayIndex: number): boolean {
    return this._openings[dayIndex][2] === 1;
  }

  public getMeals (date: Date): Meal[] {
    const formattedDate = date.toISOString().split("T")[0];
    return this._menus.get(formattedDate) ?? [];
  }

  public static fromAPI (json: ApiRestaurant): Restaurant {
    const openings: Array<Opening> = new Array(7);

    let dayIndex = 0;
    for (const day of json.opening.split(",")) {
      openings[dayIndex++] = day.split("").map(Number) as Opening;
    }

    const menus = new Map<string, Meal[]>();
    for (const menu of json.menus) {
      menus.set(menu.date, menu.meal.map(Meal.fromAPI));
    }

    let type: RestaurantType;
    switch (json.type) {
      case "Cafétéria":
        type = RestaurantType.CAFETERIA;
        break;
      case "Restaurant":
        type = RestaurantType.RESTAURANT;
        break;
      case "Restaurant agréé":
        type = RestaurantType.APPROVED_RESTAURANT;
        break;
      case "Coffee Corner":
        type = RestaurantType.COFFEE_CORNER;
        break;
      case "Brasserie":
        type = RestaurantType.BREWERY;
        break;
      case "Foodtruck":
        type = RestaurantType.FOODTRUCK;
        break;
      case "Restaurant administratif":
        type = RestaurantType.ADMINISTRATIVE_RESTAURANT;
        break;
      case "Libre-service":
        type = RestaurantType.SELF_SERVICE;
        break;
      case "Kiosque":
        type = RestaurantType.KIOSK;
        break;
      case "Pizzéria":
        type = RestaurantType.PIZZERIA;
        break;
      case "Restaurant géré":
        type = RestaurantType.MANAGED_RESTAURANT;
        break;
      case "épicerie":
        type = RestaurantType.GROCERY_STORE;
        break;
      case "Triporteur":
        type = RestaurantType.SCOOTER;
        break;
      case "crous and go":
        type = RestaurantType.CROUS_AND_GO;
        break;
      case "Sandwicherie":
        type = RestaurantType.SANDWICH_SHOP;
        break;
      default:
        throw new Error(`Unknown restaurant type: ${json.type}`);
    }

    return new Restaurant(
      json.title,
      json.lat,
      json.lon,
      json.area,
      json.adresse,
      openings,
      type,
      json.accessibility,
      json.wifi,
      stripHTML(json.shortdesc).trim(),
      stripHTML(json.description).trim(),
      stripHTML(json.access).trim(),
      stripHTML(json.operationalhours).trim(),
      json.contact.tel,
      json.contact.email === "" ? null : json.contact.email,
      json.payment.map(({ name }) => {
        switch (name) {
          case "Carte bancaire":
            return PaymentMethod.CARD;
          case "Espèce":
            return PaymentMethod.CASH;
          case "IZLY":
            return PaymentMethod.IZLY;
          case "Monéo":
            return PaymentMethod.MONEO;
          default:
            throw new Error(`Unknown payment method: ${name}`);
        }
      }),
      json.photo.src ? { src: json.photo.src, alt: json.photo.alt } : null,
      json.album && json.album.src ? { src: json.album.src, alt: json.album.alt } : null,
      menus
    );
  }
}
