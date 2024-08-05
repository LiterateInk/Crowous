export class Crous {
  public constructor (
    public name: string,
    public identifier: string
  ) {}
}

export interface CrousAPI {
  /**
   * Index in the array, starting from 1.
   */
  id: number

  /**
   * Name of the Crous feed.
   */
  name: string

  /**
   * Provided in the following format :
   * `http://webservices-v2.crous-mobile.fr:8080/feed/<identifier>/externe/crous-<identifier>.min.json`
   */
  url: string

  /**
   * Always `false`, apparently.
   */
  is_default: boolean
}

export const translateCrousFromAPI = (api: CrousAPI): Crous => {
  const name = api.name.replace("FLUX ", "");
  const identifier = api.url.split("/")[4];

  return new Crous(
    name,
    identifier
  );
};
