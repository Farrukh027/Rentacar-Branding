import { Check, ChevronRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CarCard } from "@/components/fleet/car-card";
import { StickyInquiryCard } from "@/components/fleet/sticky-inquiry-card";
import { CarShowcaseVisual } from "@/components/shared/car-showcase-visual";
import { StructuredData } from "@/components/shared/structured-data";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { getCarMedia } from "@/data/car-media";
import { cars } from "@/data/fleet";
import { getCarBySlug, getRelatedCars } from "@/lib/fleet";
import { buildBreadcrumbSchema, buildVehicleSchema } from "@/lib/seo";
import { createPageMetadata } from "@/lib/utils";

type CarDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: CarDetailPageProps) {
  const { slug } = await params;
  const car = getCarBySlug(slug);

  if (!car) {
    return createPageMetadata("Avtomobil tapılmadı", "Seçilən avtomobil parkda tapılmadı.");
  }

  return createPageMetadata(
    `${car.name} icarəsi`,
    `${car.name} üçün gündəlik, həftəlik və aylıq icarə məlumatları.`,
    `/avtomobiller/${car.slug}`
  );
}

export async function generateStaticParams() {
  return cars.map((car) => ({ slug: car.slug }));
}

export default async function CarDetailPage({ params }: CarDetailPageProps) {
  const { slug } = await params;
  const car = getCarBySlug(slug);
  if (!car) notFound();
  const relatedCars = getRelatedCars(car);
  const media = getCarMedia(car.slug);

  return (
    <>
      <StructuredData
        data={[
          buildVehicleSchema(car),
          buildBreadcrumbSchema([
            { name: "Ana səhifə", path: "/" },
            { name: "Avtomobillər", path: "/avtomobiller" },
            { name: car.name, path: `/avtomobiller/${car.slug}` }
          ])
        ]}
      />
      <section className="pt-36 sm:pt-40">
        <Container>
          <div className="flex flex-wrap items-center gap-2 text-sm text-[var(--color-muted)]">
            <Link href="/">Ana səhifə</Link>
            <ChevronRight className="size-4" />
            <Link href="/avtomobiller">Avtomobillər</Link>
            <ChevronRight className="size-4" />
            <span className="text-[var(--color-text)]">{car.name}</span>
          </div>
          <div className="mt-6 grid gap-8 xl:grid-cols-[1.2fr_360px]">
            <div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
                {car.heroTag}
              </div>
              <h1 className="mt-4 font-display text-[3rem] leading-[0.92] tracking-[-0.05em] text-[var(--color-text)] sm:text-[4rem]">
                {car.name}
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
                {car.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {car.badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-4 py-2 text-sm text-[var(--color-text)]"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            <StickyInquiryCard car={car} />
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-12">
        <Container>
          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <CarShowcaseVisual
              title={car.name}
              accent={car.accent}
              visual={car.visual}
              label={car.typeLabel}
              imageSrc={media.cover}
              imagePosition={media.position}
              priority
              className="aspect-[1.45/1] min-h-[320px]"
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {car.gallery.slice(1).map((slide) => (
                <CarShowcaseVisual
                  key={slide.title}
                  title={slide.title}
                  accent={car.accent}
                  visual={car.visual}
                  label={slide.note}
                  variant={slide.variant}
                  imageSrc={media.cover}
                  imagePosition={media.detailPosition ?? media.position}
                  className="aspect-[1.2/1] min-h-[150px]"
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="premium-card p-6">
              <div className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
                Əsas xüsusiyyətlər
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {car.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 rounded-[18px] border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-4 py-4"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-[var(--color-accent)]" />
                    <span className="text-sm leading-7 text-[var(--color-text)]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="premium-card p-6">
              <div className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
                Texniki blok
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  ["Gündəlik", car.pricing.daily],
                  ["Həftəlik", car.pricing.weekly],
                  ["Aylıq", car.pricing.monthly],
                  ["Kateqoriya", car.typeLabel],
                  ["Oturacaq", `${car.seats} yer`],
                  ["Ötürmə", car.transmission],
                  ["Yanacaq", car.fuelType],
                  ["Mühərrik", car.engine],
                  ["Ötürücü", car.drive],
                  ["Baqaj", car.luggage],
                  ["Depozit", car.deposit],
                  ["Çatdırılma", car.delivery]
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-[18px] border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-4 py-4"
                  >
                    <div className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">
                      {label}
                    </div>
                    <div className="mt-2 text-sm leading-7 text-[var(--color-text)]">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={`/rezervasiya?car=${car.slug}`}>Rezervasiya formuna keç</Button>
            <Button href="/avtomobiller" variant="secondary">
              Parka qayıt
            </Button>
          </div>
        </Container>
      </section>

      {relatedCars.length ? (
        <section className="pb-20">
          <Container>
            <div className="mb-8 flex items-end justify-between gap-6">
              <div>
                <div className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
                  Oxşar modellər
                </div>
                <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] text-[var(--color-text)]">
                  Sizə bunlar da uyğun ola bilər
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4 xl:gap-5">
              {relatedCars.map((item) => (
                <CarCard key={item.slug} car={item} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}
    </>
  );
}
