import { FEED_API_ENDPOINT } from "~/utils/constants";

interface ApiCrousResults {
  results: Array<ApiCrous>
}

export interface ApiCrous {
  /** Apparently just an index in the array. */
  id: number

  /** @example "FLUX <NAME>" */
  name: string

  /** @example "http://webservices-v2.crous-mobile.fr/feed/<identifier>/externe/crous-<identifier>.min.json" */
  url: string

  /** Always `false`, not sure why is this here. */
  is_default: string
}

export default async function crous (): Promise<ApiCrousResults> {
  const response = await fetch(`${FEED_API_ENDPOINT}/feeds.json`);
  return response.json();
};
