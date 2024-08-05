export class Contact {
  public constructor (
    public phone: string,
    public email: string
  ) {}
}

export interface ContactAPI {
  tel: string
  email: string
}

export const translateContactFromAPI = (api: ContactAPI): Contact => {
  return new Contact(
    api.tel,
    api.email
  );
};
