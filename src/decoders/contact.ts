import type { Contact } from "~/models";

export function decodeContact (contact: any): Contact {
  return {
    phone: contact.tel,
    email: contact.email
  };
}
