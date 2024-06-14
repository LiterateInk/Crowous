import { FEED_API_ENDPOINT } from "~/utils/constants";

interface ApiRestaurants {
  restaurants: Array<ApiRestaurant>
}

export interface ApiRestaurant {
  id: number

  /** Title of the restaurant. */
  title: string

  /** Latitude. */
  lat: number

  /** Longitude. */
  lon: number

  /** @example "Limoges (87)" */
  area: string

  /** Full address of the restaurant. */
  adresse: string

  /** @example "010,010,010,010,010,000,000" */
  opening: string
  /** @example "1" */
  closing: string

  type: (
    | "Cafétéria"
    | "Restaurant"
    | "Restaurant agréé"
    | "Restaurant géré"
    | "Coffee Corner"
    | "Brasserie"
    | "Foodtruck"
    | "Restaurant administratif"
    | "Libre-service"
    | "Kiosque"
    | "Pizzéria"
    | "épicerie"
    | "Triporteur"
    | "crous and go"
    | "Sandwicherie"
  )

  accessibility: boolean
  wifi: boolean

  shortdesc: string
  description: string

  access: string
  operationalhours: string

  contact: {
    tel: string
    email: string
  }

  crousandgo: ""

  album?: {
    src: string
    alt: string
  }

  photo: {
    src: string
    alt: string
  }

  payment: Array<{ name: string }>
  menus: Array<ApiMenu>
}

interface ApiMenu {
  /** @example "2024-06-14" */
  date: string
  meal: Array<ApiMeal>
}

export interface ApiMeal {
  name: "matin" | "midi" | "soir"
  foodcategory: Array<{
    name: string
    dishes: Array<{
      name: string
    }>
  }>
}

export async function restaurants (identifier: string): Promise<ApiRestaurants> {
  const response = await fetch(`${FEED_API_ENDPOINT}/${identifier}/externe/crous-${identifier}.min.json`);
  let json = await response.text();

  // We should escape control characters because they don't do that apparently.
  json = json.replace(/[\u0000-\u001F]/g, "");
  return JSON.parse(json) as ApiRestaurants;
}
