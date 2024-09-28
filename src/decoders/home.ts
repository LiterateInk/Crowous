import type { Home } from "~/models";

export const decodeHome = (xml: any): Home => ({
  fullInformationHTML: xml.infos,
  localServicesHTML: xml.services,
  contactHTML: xml.contact,
  address: xml.address || null,
  email: xml.mail,
  phone: xml.phone || null,
  websiteURL: xml.internetUrl || null,
  appointmentURL: xml.appointmentUrl || null,
  virtualVisitURL: xml.virtualVisitUrl || null,
  crousAndGoURL: xml.crousAndGoUrl || null,
  albumURL: xml.albumUrl || null,
  bookingURL: xml.bookingUrl || null,
  troubleshootingURL: xml.troubleshootingUrl || null,
  inHomeServices: typeof xml.house_services === "object" ? xml.house_services.house_service : [],
  images: typeof xml.images === "object" ? xml.images.url : [],
  id: xml.id,
  title: xml.title,
  shortDescription: xml.short_desc || null,
  latitude: parseFloat(xml.lat),
  longitude: parseFloat(xml.lon),
  area: xml.zone
});
