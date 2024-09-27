import { XMLParser } from "fast-xml-parser";

export const parseXML = (content: string): any => {
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "",
    textNodeName: "content"
  });

  return parser.parse(content);
};
