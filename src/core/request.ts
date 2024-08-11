import type { Request as UnsafeRequest } from "@literate.ink/utilities";

export class Request implements UnsafeRequest {
  public readonly url: URL;

  public constructor (path: string) {
    this.url = new URL("http://webservices-v2.crous-mobile.fr/feed/" + path);
  }
}
