import { AlertTriangle, CheckCircle2, FolderTree } from "lucide-react";

import { CarShowcaseVisual } from "@/components/shared/car-showcase-visual";
import { cars } from "@/data/fleet";
import { validateCarListingMedia } from "@/lib/listing-images";

export function ListingMediaAudit() {
  return (
    <div className="site-container grid gap-4">
      {cars.map((car) => {
        const result = validateCarListingMedia(car);

        return (
          <details
            key={car.id}
            className="premium-card overflow-hidden"
            open={car.slug === "bmw-f30"}
          >
            <summary className="flex cursor-pointer list-none flex-col gap-3 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <div>
                <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-accent)]">
                  {car.brand} • {car.model}
                </div>
                <div className="mt-2 text-xl text-[var(--color-text)]">{car.name}</div>
                <div className="mt-2 text-sm text-[var(--color-muted)]">
                  {car.id} • {car.color ?? "Rəng yoxdur"} • {car.bodyType ?? car.typeLabel}
                </div>
              </div>

              <div
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm ${
                  result.isValid
                    ? "border-emerald-500/25 bg-emerald-500/10 text-emerald-600"
                    : "border-amber-500/25 bg-amber-500/10 text-amber-600"
                }`}
              >
                {result.isValid ? (
                  <CheckCircle2 className="size-4" />
                ) : (
                  <AlertTriangle className="size-4" />
                )}
                {result.isValid ? "Şəkil bağı doğrudur" : "Yoxlama tələb olunur"}
              </div>
            </summary>

            <div className="border-t border-[var(--color-border)] px-5 py-5 sm:px-6">
              <div className="grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
                <div className="grid gap-4">
                  <div>
                    <div className="mb-3 text-[11px] uppercase tracking-[0.28em] text-[var(--color-accent)]">
                      Əsas şəkil
                    </div>
                    <CarShowcaseVisual
                      title={car.name}
                      label="Main image"
                      accent={car.accent}
                      visual={car.visual}
                      imageSrc={result.mainImage.src}
                      imageAlt={result.mainImage.alt}
                      imagePosition={result.mainImage.position}
                      className="min-h-[240px]"
                    />
                  </div>

                  <div>
                    <div className="mb-3 text-[11px] uppercase tracking-[0.28em] text-[var(--color-accent)]">
                      Qalereya
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                      {result.galleryImages.map((image, index) => (
                        <div key={image.id} className="grid gap-2">
                          <CarShowcaseVisual
                            title={car.name}
                            label={image.caption ?? `Qalereya ${index + 1}`}
                            accent={car.accent}
                            visual={car.visual}
                            imageSrc={image.src}
                            imageAlt={image.alt}
                            imagePosition={image.position}
                            className="min-h-[150px]"
                          />
                          <div className="rounded-[18px] border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-3 py-3 text-xs leading-6 text-[var(--color-muted)]">
                            <div className="text-[var(--color-text)]">{image.fileName}</div>
                            <div>{image.storagePath}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="premium-card p-5">
                    <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-[var(--color-accent)]">
                      <FolderTree className="size-4" />
                      Storage standardı
                    </div>
                    <div className="mt-4 text-sm leading-7 text-[var(--color-text)]">
                      <div>Əsas şəkil: {result.mainImage.storagePath}</div>
                      <div>Alt text: {car.imageAltText}</div>
                    </div>
                  </div>

                  <div className="premium-card p-5">
                    <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-accent)]">
                      Listing metadata
                    </div>
                    <div className="mt-4 grid gap-2 text-sm leading-7 text-[var(--color-text)]">
                      <div>Brand: {car.brand}</div>
                      <div>Model: {car.model}</div>
                      <div>Generation: {car.generation ?? "—"}</div>
                      <div>Variant: {car.variant ?? "—"}</div>
                      <div>Year: {car.year}</div>
                      <div>Color: {car.color ?? "—"}</div>
                      <div>Body type: {car.bodyType ?? "—"}</div>
                    </div>
                  </div>

                  <div className="premium-card p-5">
                    <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-accent)]">
                      Validation nəticəsi
                    </div>
                    <div className="mt-4 grid gap-3">
                      {result.errors.length ? (
                        result.errors.map((error) => (
                          <div
                            key={error}
                            className="rounded-[18px] border border-amber-500/20 bg-amber-500/10 px-4 py-3 text-sm leading-6 text-amber-700"
                          >
                            {error}
                          </div>
                        ))
                      ) : (
                        <div className="rounded-[18px] border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm leading-6 text-emerald-700">
                          Şəkillər listing metadata-sı ilə eyni maşına bağlıdır.
                        </div>
                      )}

                      {result.warnings.map((warning) => (
                        <div
                          key={warning}
                          className="rounded-[18px] border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-4 py-3 text-sm leading-6 text-[var(--color-muted)]"
                        >
                          {warning}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </details>
        );
      })}
    </div>
  );
}
