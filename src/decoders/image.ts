import type { Image } from "~/models";

export function decodeImage (image: any): Image {
  return {
    href: image.src,
    description: image.alt
  };
}
