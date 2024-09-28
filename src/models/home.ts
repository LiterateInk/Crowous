export type Home = Readonly<{
  fullInformationHTML: string
  localServicesHTML: string
  contactHTML: string
  address: string | null
  email: string
  phone: string | null
  websiteURL: string | null
  appointmentURL: string | null
  virtualVisitURL: string | null
  crousAndGoURL: string | null
  albumURL: string | null
  bookingURL: string | null
  troubleshootingURL: string | null
  inHomeServices: string[]
  images: string[]
  id: string
  title: string
  shortDescription: string | null
  latitude: number
  longitude: number
  area: string
}>;
