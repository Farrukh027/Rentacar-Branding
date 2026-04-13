import type { Car, CarImageAsset, CarImageRole, ListingMediaValidationResult } from "@/lib/types";

type ListingIdentity = Pick<
  Car,
  "id" | "slug" | "brand" | "model" | "generation" | "variant" | "bodyType" | "color" | "year" | "imageAltText"
>;

type ListingImageDraft = {
  id: string;
  role: CarImageRole;
  sourceType?: CarImageAsset["sourceType"];
  src?: string;
  position?: string;
  caption?: string;
  order?: number;
  verified?: boolean;
  extension?: string;
};

const imageExtensionRegex = /\.(avif|webp|png|jpe?g|svg)$/i;

export function slugifySegment(value: string) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function buildListingStorageDirectory(listing: ListingIdentity) {
  return `/listings/${slugifySegment(listing.brand)}/${slugifySegment(listing.model)}/${slugifySegment(listing.id)}`;
}

function getListingColorSegment(listing: ListingIdentity) {
  const idSegments = slugifySegment(listing.id).split("-");
  const colorFromId = idSegments[idSegments.length - 1];

  if (colorFromId && /^[a-z0-9]+$/.test(colorFromId) && Number.isNaN(Number(colorFromId))) {
    return colorFromId;
  }

  return listing.color ? slugifySegment(listing.color) : undefined;
}

export function buildListingFileStem(listing: ListingIdentity) {
  return [
    slugifySegment(listing.brand),
    slugifySegment(listing.model),
    listing.year,
    getListingColorSegment(listing)
  ]
    .filter(Boolean)
    .join("-");
}

export function buildListingFileName(
  listing: ListingIdentity,
  role: CarImageRole,
  order = 0,
  extension = "svg"
) {
  const suffix = role === "main" ? "main" : `${order}`;
  return `${buildListingFileStem(listing)}-${suffix}.${extension}`;
}

export function isSupportedImageSource(src?: string) {
  if (!src) return false;
  if (!imageExtensionRegex.test(src)) return false;
  return src.startsWith("/") || src.startsWith("http://") || src.startsWith("https://");
}

function pickExtension(src?: string, fallback = "svg") {
  if (!src) return fallback;
  const match = src.match(imageExtensionRegex);
  return match ? match[1].toLowerCase() : fallback;
}

export function createListingImageAsset(
  listing: ListingIdentity,
  draft: ListingImageDraft
): CarImageAsset {
  const extension = draft.extension ?? pickExtension(draft.src);
  const order = draft.order ?? (draft.role === "main" ? 0 : 1);
  const fileName = buildListingFileName(listing, draft.role, order, extension);
  const storagePath = `${buildListingStorageDirectory(listing)}/${fileName}`;

  return {
    id: draft.id,
    role: draft.role,
    sourceType: draft.sourceType ?? (draft.src ? "upload" : "generated"),
    src: draft.src,
    fileName,
    storagePath,
    alt:
      draft.role === "main"
        ? listing.imageAltText
        : `${listing.imageAltText} - qalereya ${order}`,
    order,
    verified: draft.verified ?? true,
    listingId: listing.id,
    brand: listing.brand,
    model: listing.model,
    generation: listing.generation,
    variant: listing.variant,
    bodyType: listing.bodyType,
    color: listing.color,
    year: listing.year,
    position: draft.position,
    caption: draft.caption
  };
}

export function validateListingImageAsset(listing: ListingIdentity, asset: CarImageAsset) {
  const errors: string[] = [];
  const warnings: string[] = [];
  const expectedDirectory = buildListingStorageDirectory(listing);
  const expectedStem = buildListingFileStem(listing);

  if (asset.listingId !== listing.id) {
    errors.push("Sekil basqa listing-e baglidir.");
  }

  if (slugifySegment(asset.brand) !== slugifySegment(listing.brand)) {
    errors.push("Sekildeki brend listing ile uygun deyil.");
  }

  if (slugifySegment(asset.model) !== slugifySegment(listing.model)) {
    errors.push("Sekildeki model listing ile uygun deyil.");
  }

  if (
    (asset.generation || listing.generation) &&
    slugifySegment(asset.generation ?? "") !== slugifySegment(listing.generation ?? "")
  ) {
    errors.push("Sekildeki generasiya listing ile uygun deyil.");
  }

  if (
    (asset.variant || listing.variant) &&
    slugifySegment(asset.variant ?? "") !== slugifySegment(listing.variant ?? "")
  ) {
    errors.push("Sekildeki versiya listing ile uygun deyil.");
  }

  if (
    (asset.bodyType || listing.bodyType) &&
    slugifySegment(asset.bodyType ?? "") !== slugifySegment(listing.bodyType ?? "")
  ) {
    errors.push("Sekildeki kuzov tipi listing ile uygun deyil.");
  }

  if (
    (asset.color || listing.color) &&
    slugifySegment(asset.color ?? "") !== slugifySegment(listing.color ?? "")
  ) {
    errors.push("Sekildeki reng listing ile uygun deyil.");
  }

  if (asset.year !== listing.year) {
    errors.push("Sekildeki il listing ile uygun deyil.");
  }

  if (!asset.storagePath.startsWith(expectedDirectory)) {
    errors.push("Sekil listing ucun ayrilan qovluqda deyil.");
  }

  if (!asset.fileName.startsWith(expectedStem)) {
    errors.push("Sekil fayl adi listing standartina uygun deyil.");
  }

  if (asset.sourceType === "upload" && !isSupportedImageSource(asset.src)) {
    errors.push("Sekil yolu qiriqdir ve ya desteklenmeyen formatdadir.");
  }

  if (asset.src?.startsWith("/") && asset.src !== asset.storagePath) {
    errors.push("Sekil yolu listing fayl yolu ile uygun deyil.");
  }

  if (!asset.verified) {
    warnings.push("Sekil hele admin terefinden tesdiqlenmeyib.");
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
}

export function buildGeneratedGalleryAssets(
  listing: ListingIdentity,
  captions: string[],
  positions: Array<string | undefined> = []
) {
  return captions.map((caption, index) =>
    createListingImageAsset(listing, {
      id: `${listing.id}-gallery-${index + 1}`,
      role: "gallery",
      sourceType: "generated",
      order: index + 1,
      caption,
      position: positions[index],
      verified: true
    })
  );
}

export function sanitizeListingMedia(
  listing: ListingIdentity,
  mainImage: CarImageAsset,
  galleryImages: CarImageAsset[],
  fallbackCaptions: string[]
): ListingMediaValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  const mainValidation = validateListingImageAsset(listing, mainImage);
  if (!mainValidation.isValid) {
    errors.push(...mainValidation.errors);
    warnings.push(...mainValidation.warnings);
  }

  const safeMain = mainValidation.isValid
    ? mainImage
    : createListingImageAsset(listing, {
        id: `${listing.id}-main`,
        role: "main",
        sourceType: "generated",
        order: 0,
        caption: "Esas sekil",
        verified: true
      });

  const seen = new Set<string>([`${safeMain.fileName}|${safeMain.src ?? ""}`]);
  const safeGallery: CarImageAsset[] = [];

  for (const asset of galleryImages) {
    const validation = validateListingImageAsset(listing, asset);
    const identityKey = `${asset.fileName}|${asset.src ?? ""}`;

    if (seen.has(identityKey)) {
      warnings.push(`Dublikat sekil silindi: ${asset.fileName}`);
      continue;
    }

    if (!validation.isValid) {
      errors.push(...validation.errors);
      warnings.push(...validation.warnings);
      continue;
    }

    seen.add(identityKey);
    safeGallery.push(asset);
  }

  if (!safeGallery.length) {
    safeGallery.push(...buildGeneratedGalleryAssets(listing, fallbackCaptions));
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
    mainImage: safeMain,
    galleryImages: safeGallery.sort((left, right) => left.order - right.order)
  };
}

export function validateCarListingMedia(car: Car): ListingMediaValidationResult {
  return sanitizeListingMedia(
    car,
    car.mainImage,
    car.galleryImages,
    car.gallery.map((item, index) => item.note || `Qalereya ${index + 1}`)
  );
}

export function assertUniqueListingMediaAssignments(cars: Car[]) {
  const usedStoragePaths = new Map<string, string>();
  const usedUploadedSources = new Map<string, string>();

  for (const car of cars) {
    const media = [car.mainImage, ...car.galleryImages];

    if (!car.mainImage || !car.mainImage.src || !isSupportedImageSource(car.mainImage.src)) {
      throw new Error(`Listing ucun esas sekil tapilmadi: ${car.slug}`);
    }

    for (const asset of media) {
      if (asset.listingId !== car.id) {
        throw new Error(`Sekil yanlis listing-e baglanib: ${car.slug} -> ${asset.fileName}`);
      }

      if (asset.src?.startsWith("/") && asset.src !== asset.storagePath) {
        throw new Error(`Sekil yolu listing storage standartina uygun deyil: ${asset.src}`);
      }

      const existingStorageOwner = usedStoragePaths.get(asset.storagePath);
      if (existingStorageOwner && existingStorageOwner !== car.id) {
        throw new Error(`Eyni storage path iki listing-de istifade olunur: ${asset.storagePath}`);
      }
      usedStoragePaths.set(asset.storagePath, car.id);

      if (asset.src) {
        const existingSourceOwner = usedUploadedSources.get(asset.src);
        if (existingSourceOwner && existingSourceOwner !== car.id) {
          throw new Error(`Eyni upload iki ferqli listing-e baglanib: ${asset.src}`);
        }
        usedUploadedSources.set(asset.src, car.id);
      }
    }
  }
}

export function cleanupDeletedListingImageReferences<T extends { id: string; galleryImages?: CarImageAsset[] }>(
  listings: T[],
  deletedListingId: string
) {
  return listings
    .filter((listing) => listing.id !== deletedListingId)
    .map((listing) => ({
      ...listing,
      galleryImages: (listing.galleryImages ?? []).filter((asset) => asset.listingId !== deletedListingId)
    }));
}
