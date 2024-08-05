export class Image {
  public constructor (
    public href: string,
    public description: string
  ) {}
}

export interface ImageAPI {
  src: string
  alt: string
}

export const translateImageFromAPI = (api: ImageAPI): Image => {
  return new Image(
    api.src,
    api.alt
  );
};
