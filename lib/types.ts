export type NavItem = {
  label: string;
  href: string;
};

export type TrustBadge = {
  label: string;
  detail: string;
};

export type CategorySpotlight = {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  metric: string;
  icon:
    | "economy"
    | "sedan"
    | "suv"
    | "premium"
    | "wedding"
    | "transfer";
};

export type Advantage = {
  title: string;
  description: string;
  metric?: string;
};

export type ServiceDetail = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  bullets: string[];
  anchor: string;
  icon:
    | "calendar"
    | "shield"
    | "crown"
    | "sparkles"
    | "plane"
    | "map"
    | "car";
};

export type HowItWorksStep = {
  step: string;
  title: string;
  description: string;
};

export type Testimonial = {
  name: string;
  role: string;
  company?: string;
  quote: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type BusinessHour = {
  label: string;
  value: string;
};

export type CampaignRibbon = {
  label: string;
  text: string;
};

export type CarVisualType = "economy" | "sedan" | "suv" | "premium" | "wedding";

export type CarGallerySlide = {
  title: string;
  note: string;
  variant: "default" | "night" | "interior";
};

export type Car = {
  slug: string;
  name: string;
  typeLabel: string;
  categories: string[];
  priceFrom: number;
  pricing: {
    daily: string;
    weekly: string;
    monthly: string;
  };
  seats: number;
  transmission: "Avtomat" | "Mexanika";
  fuelType: "Benzin" | "Dizel" | "Hibrid";
  luggage: string;
  engine: string;
  drive: string;
  deposit: string;
  delivery: string;
  mileageLimit: string;
  year: number;
  highlight: string;
  summary: string;
  heroTag: string;
  accent: string;
  visual: CarVisualType;
  badges: string[];
  popular?: boolean;
  topPick?: boolean;
  features: string[];
  gallery: CarGallerySlide[];
};

export type FleetSort = "cheap" | "expensive" | "popular";

export type FleetFilterState = {
  category: string;
  price: string;
  transmission: string;
  seats: string;
  query: string;
  sort: FleetSort;
};

export type ContactFormValues = {
  fullName: string;
  phone: string;
  whatsapp: string;
  subject: string;
  note: string;
};

export type ReservationFormValues = {
  fullName: string;
  phone: string;
  whatsapp: string;
  selectedCar: string;
  pickupDate: string;
  pickupTime: string;
  returnDate: string;
  returnTime: string;
  pickupLocation: string;
  deliveryRequested: boolean;
  note: string;
};
