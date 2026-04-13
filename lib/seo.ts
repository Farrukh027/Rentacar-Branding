import { business } from "@/data/business";
import type { Car } from "@/lib/types";
import { absoluteUrl } from "@/lib/utils";

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AutoRental"],
    name: business.brandName,
    description: business.description,
    url: business.url,
    telephone: business.primaryPhone,
    image: absoluteUrl("/opengraph-image"),
    address: {
      "@type": "PostalAddress",
      streetAddress: business.addressLine,
      addressLocality: "Bakı",
      addressCountry: "AZ"
    },
    sameAs: [business.instagramUrl]
  };
}

export function buildVehicleSchema(car: Car) {
  return {
    "@context": "https://schema.org",
    "@type": "Car",
    brand: business.shortName,
    model: car.name,
    vehicleTransmission: car.transmission,
    fuelType: car.fuelType,
    numberOfSeats: car.seats,
    productionDate: String(car.year),
    offers: {
      "@type": "Offer",
      priceCurrency: "AZN",
      availability: "https://schema.org/InStock",
      description: car.pricing.daily
    }
  };
}

export function buildBreadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}
