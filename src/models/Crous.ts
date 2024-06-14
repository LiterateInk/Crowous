import type { Restaurant } from "~/models/Restaurant";
import type { ApiCrous } from "~/api/crous";
import { getRestaurants } from "~/utils/getRestaurants";

export class Crous {
  constructor (
    public name: string,
    public identifier: string
  ) {}

  public async getRestaurants (): Promise<Restaurant[]> {
    return getRestaurants(this.identifier);
  }

  public static fromAPI (json: ApiCrous): Crous {
    const name = json.name.replace("FLUX ", "");
    const identifier = json.url.match(/feed\/(.+)\/externe/)![1];

    return new Crous(
      name,
      identifier
    );
  }
}
