import crous from "~/api/crous";
import { Crous } from "~/models/Crous";

/**
 * Get every available Crous in the JSON API.
 * @returns A `Crous` object that can be used to get the restaurants.
 */
export async function getAvailableCrous (): Promise<Array<Crous>> {
  const response = await crous();
  return response.results.map(Crous.fromAPI);
}
