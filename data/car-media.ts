import type { BaseCar, Car } from "@/lib/types";
import { createListingImageAsset, sanitizeListingMedia } from "@/lib/listing-images";

type ListingProfile = {
  id: string;
  brand: string;
  model: string;
  generation?: string;
  variant?: string;
  color?: string;
  bodyType?: string;
  category?: string;
  imageAltText: string;
};

type StaticImageSeed = {
  id: string;
  caption: string;
  position?: string;
  src?: string;
};

type ListingMediaSeed = {
  mainImage: StaticImageSeed;
  galleryImages: StaticImageSeed[];
};

const listingProfiles: Record<string, ListingProfile> = {
  "hyundai-elantra": {
    id: "brc-hyundai-elantra-cn7-2021-white",
    brand: "Hyundai",
    model: "Elantra",
    generation: "CN7",
    variant: "1.6 MPI",
    color: "Ağ",
    bodyType: "Sedan",
    category: "Ekonom",
    imageAltText: "Ağ Hyundai Elantra CN7 sedan 2021"
  },
  "kia-cerato": {
    id: "brc-kia-cerato-bd-2022-white",
    brand: "Kia",
    model: "Cerato",
    generation: "BD",
    variant: "1.6 MPI",
    color: "Ağ",
    bodyType: "Sedan",
    category: "Ekonom",
    imageAltText: "Ağ Kia Cerato BD sedan 2022"
  },
  "kia-sportage": {
    id: "brc-kia-sportage-nq5-2022-grey",
    brand: "Kia",
    model: "Sportage",
    generation: "NQ5",
    variant: "2.0 Comfort",
    color: "Boz",
    bodyType: "SUV",
    category: "SUV",
    imageAltText: "Boz Kia Sportage NQ5 SUV 2022"
  },
  "kia-optima": {
    id: "brc-kia-optima-jf-2021-black",
    brand: "Kia",
    model: "Optima",
    generation: "JF",
    variant: "2.0 Comfort",
    color: "Qara",
    bodyType: "Sedan",
    category: "Sedan",
    imageAltText: "Qara Kia Optima JF sedan 2021"
  },
  "kia-sorento": {
    id: "brc-kia-sorento-mq4-2020-grey",
    brand: "Kia",
    model: "Sorento",
    generation: "MQ4",
    variant: "2.2 AWD",
    color: "Boz",
    bodyType: "SUV",
    category: "SUV",
    imageAltText: "Boz Kia Sorento MQ4 SUV 2020"
  },
  "hyundai-santa-fe": {
    id: "brc-hyundai-santa-fe-tm-2022-black",
    brand: "Hyundai",
    model: "Santa Fe",
    generation: "TM",
    variant: "2.0 AWD",
    color: "Qara",
    bodyType: "SUV",
    category: "SUV",
    imageAltText: "Qara Hyundai Santa Fe TM SUV 2022"
  },
  "toyota-prado": {
    id: "brc-toyota-prado-j150-2021-black",
    brand: "Toyota",
    model: "Prado",
    generation: "J150",
    variant: "2.8 Diesel",
    color: "Qara",
    bodyType: "Premium SUV",
    category: "Premium",
    imageAltText: "Qara Toyota Prado J150 premium SUV 2021"
  },
  "bmw-f30": {
    id: "brc-bmw-f30-2019-white",
    brand: "BMW",
    model: "3 Series",
    generation: "F30",
    variant: "320i",
    color: "Ağ",
    bodyType: "Sedan",
    category: "Premium",
    imageAltText: "Ağ BMW 3 Series F30 sedan 2019"
  },
  "bmw-g30": {
    id: "brc-bmw-g30-2022-black",
    brand: "BMW",
    model: "5 Series",
    generation: "G30",
    variant: "520i",
    color: "Qara",
    bodyType: "Sedan",
    category: "Premium",
    imageAltText: "Qara BMW 5 Series G30 sedan 2022"
  },
  "hyundai-sonata": {
    id: "brc-hyundai-sonata-dn8-2021-grey",
    brand: "Hyundai",
    model: "Sonata",
    generation: "DN8",
    variant: "2.0 MPI",
    color: "Boz",
    bodyType: "Sedan",
    category: "Sedan",
    imageAltText: "Boz Hyundai Sonata DN8 sedan 2021"
  },
  "mercedes-g-class": {
    id: "brc-mercedes-g-class-w463-2020-black",
    brand: "Mercedes-Benz",
    model: "G-Class",
    generation: "W463",
    variant: "G 500",
    color: "Qara",
    bodyType: "Luxury SUV",
    category: "Toy maşınları",
    imageAltText: "Qara Mercedes-Benz G-Class W463 luxury SUV 2020"
  }
};

const listingMediaSeeds: Record<string, ListingMediaSeed> = {
  "hyundai-elantra": {
    mainImage: { id: "hyundai-elantra-main", caption: "Hyundai Elantra əsas şəkli", position: "center 56%" },
    galleryImages: [
      { id: "hyundai-elantra-gallery-1", caption: "Yan görünüş", position: "center 54%" },
      { id: "hyundai-elantra-gallery-2", caption: "Ön hissə", position: "center 55%" },
      { id: "hyundai-elantra-gallery-3", caption: "Salon görünüşü", position: "center 56%" }
    ]
  },
  "kia-cerato": {
    mainImage: { id: "kia-cerato-main", caption: "Kia Cerato əsas şəkli", position: "center 56%" },
    galleryImages: [
      { id: "kia-cerato-gallery-1", caption: "Yan görünüş", position: "center 54%" },
      { id: "kia-cerato-gallery-2", caption: "Ön hissə", position: "center 55%" },
      { id: "kia-cerato-gallery-3", caption: "Salon görünüşü", position: "center 56%" }
    ]
  },
  "kia-sportage": {
    mainImage: { id: "kia-sportage-main", caption: "Kia Sportage əsas şəkli", position: "center 58%" },
    galleryImages: [
      { id: "kia-sportage-gallery-1", caption: "Yan görünüş", position: "center 56%" },
      { id: "kia-sportage-gallery-2", caption: "Ön hissə", position: "center 57%" },
      { id: "kia-sportage-gallery-3", caption: "Salon görünüşü", position: "center 58%" }
    ]
  },
  "kia-optima": {
    mainImage: { id: "kia-optima-main", caption: "Kia Optima əsas şəkli", position: "center 56%" },
    galleryImages: [
      { id: "kia-optima-gallery-1", caption: "Yan görünüş", position: "center 54%" },
      { id: "kia-optima-gallery-2", caption: "Ön hissə", position: "center 55%" },
      { id: "kia-optima-gallery-3", caption: "Salon görünüşü", position: "center 56%" }
    ]
  },
  "kia-sorento": {
    mainImage: { id: "kia-sorento-main", caption: "Kia Sorento əsas şəkli", position: "center 58%" },
    galleryImages: [
      { id: "kia-sorento-gallery-1", caption: "Yan görünüş", position: "center 56%" },
      { id: "kia-sorento-gallery-2", caption: "Ön hissə", position: "center 57%" },
      { id: "kia-sorento-gallery-3", caption: "Salon görünüşü", position: "center 58%" }
    ]
  },
  "hyundai-santa-fe": {
    mainImage: { id: "hyundai-santa-fe-main", caption: "Hyundai Santa Fe əsas şəkli", position: "center 57%" },
    galleryImages: [
      { id: "hyundai-santa-fe-gallery-1", caption: "Yan görünüş", position: "center 55%" },
      { id: "hyundai-santa-fe-gallery-2", caption: "Ön hissə", position: "center 56%" },
      { id: "hyundai-santa-fe-gallery-3", caption: "Salon görünüşü", position: "center 57%" }
    ]
  },
  "toyota-prado": {
    mainImage: { id: "toyota-prado-main", caption: "Toyota Prado əsas şəkli", position: "center 56%" },
    galleryImages: [
      { id: "toyota-prado-gallery-1", caption: "Yan görünüş", position: "center 54%" },
      { id: "toyota-prado-gallery-2", caption: "Ön hissə", position: "center 55%" },
      { id: "toyota-prado-gallery-3", caption: "Salon görünüşü", position: "center 56%" }
    ]
  },
  "bmw-f30": {
    mainImage: { id: "bmw-f30-main", caption: "BMW F30 əsas şəkli", position: "center 57%" },
    galleryImages: [
      { id: "bmw-f30-gallery-1", caption: "Yan görünüş", position: "center 55%" },
      { id: "bmw-f30-gallery-2", caption: "Ön hissə", position: "center 56%" },
      { id: "bmw-f30-gallery-3", caption: "Salon görünüşü", position: "center 57%" }
    ]
  },
  "bmw-g30": {
    mainImage: { id: "bmw-g30-main", caption: "BMW G30 əsas şəkli", position: "center 57%" },
    galleryImages: [
      { id: "bmw-g30-gallery-1", caption: "Yan görünüş", position: "center 55%" },
      { id: "bmw-g30-gallery-2", caption: "Ön hissə", position: "center 56%" },
      { id: "bmw-g30-gallery-3", caption: "Salon görünüşü", position: "center 57%" }
    ]
  },
  "hyundai-sonata": {
    mainImage: { id: "hyundai-sonata-main", caption: "Hyundai Sonata əsas şəkli", position: "center 56%" },
    galleryImages: [
      { id: "hyundai-sonata-gallery-1", caption: "Yan görünüş", position: "center 54%" },
      { id: "hyundai-sonata-gallery-2", caption: "Ön hissə", position: "center 55%" },
      { id: "hyundai-sonata-gallery-3", caption: "Salon görünüşü", position: "center 56%" }
    ]
  },
  "mercedes-g-class": {
    mainImage: { id: "mercedes-g-class-main", caption: "Mercedes G-Class əsas şəkli", position: "center 55%" },
    galleryImages: [
      { id: "mercedes-g-class-gallery-1", caption: "Yan görünüş", position: "center 53%" },
      { id: "mercedes-g-class-gallery-2", caption: "Ön hissə", position: "center 54%" },
      { id: "mercedes-g-class-gallery-3", caption: "Salon görünüşü", position: "center 55%" }
    ]
  }
};

function buildFallbackProfile(baseCar: BaseCar): ListingProfile {
  const [brand = baseCar.name, ...rest] = baseCar.name.split(" ");
  const model = rest.join(" ") || baseCar.name;

  return {
    id: `brc-${baseCar.slug}-${baseCar.year}`,
    brand,
    model,
    bodyType: baseCar.categories[0],
    category: baseCar.categories[0],
    imageAltText: `${baseCar.name} ${baseCar.year}`
  };
}

function buildFallbackSeed(baseCar: BaseCar): ListingMediaSeed {
  return {
    mainImage: {
      id: `${baseCar.slug}-main`,
      caption: `${baseCar.name} əsas şəkli`
    },
    galleryImages: baseCar.gallery.map((item, index) => ({
      id: `${baseCar.slug}-gallery-${index + 1}`,
      caption: item.note
    }))
  };
}

export function getListingProfile(slug: string) {
  return listingProfiles[slug];
}

export function getListingMediaSeed(slug: string) {
  return listingMediaSeeds[slug];
}

export function buildCarListingRecord(baseCar: BaseCar): Car {
  const profile = getListingProfile(baseCar.slug) ?? buildFallbackProfile(baseCar);
  const mediaSeed = getListingMediaSeed(baseCar.slug) ?? buildFallbackSeed(baseCar);

  const listingIdentity = {
    id: profile.id,
    slug: baseCar.slug,
    brand: profile.brand,
    model: profile.model,
    generation: profile.generation,
    variant: profile.variant,
    bodyType: profile.bodyType,
    color: profile.color,
    year: baseCar.year,
    imageAltText: profile.imageAltText
  };

  const mainImage = createListingImageAsset(listingIdentity, {
    id: mediaSeed.mainImage.id,
    role: "main",
    sourceType: mediaSeed.mainImage.src ? "upload" : "generated",
    order: 0,
    src: mediaSeed.mainImage.src,
    caption: mediaSeed.mainImage.caption,
    position: mediaSeed.mainImage.position,
    verified: true
  });

  const galleryImages = mediaSeed.galleryImages.map((image, index) =>
    createListingImageAsset(listingIdentity, {
      id: image.id,
      role: "gallery",
      sourceType: image.src ? "upload" : "generated",
      order: index + 1,
      src: image.src,
      caption: image.caption,
      position: image.position,
      verified: true
    })
  );

  const validatedMedia = sanitizeListingMedia(
    listingIdentity,
    mainImage,
    galleryImages,
    baseCar.gallery.map((slide) => slide.note)
  );

  return {
    ...baseCar,
    id: profile.id,
    brand: profile.brand,
    model: profile.model,
    generation: profile.generation,
    variant: profile.variant,
    color: profile.color,
    bodyType: profile.bodyType,
    category: profile.category ?? baseCar.categories[0] ?? baseCar.typeLabel,
    imageAltText: profile.imageAltText,
    mainImage: validatedMedia.mainImage,
    galleryImages: validatedMedia.galleryImages
  };
}
