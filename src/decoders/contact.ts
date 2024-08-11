import type { Contact } from "~/models";

export const decodeContact = (contact: any): Contact => {
  return {
    phone: contact.tel,
    email: contact.email
  };
};
