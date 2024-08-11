import type { Image } from "~/models";

export const decodeImage = (image: any): Image => {
  return {
    href: image.src,
    description: image.alt
  };
};
