import { CheckCircle2 } from "lucide-react";

import { BookingStrip } from "@/components/home/booking-strip";
import { CarShowcaseVisual } from "@/components/shared/car-showcase-visual";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { business, heroTrustBadges } from "@/data/business";
import { cars } from "@/data/fleet";
import { cn } from "@/lib/utils";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function HomeHero() {
  const heroPrimary = cars.find((car) => car.slug === "bmw-f30") ?? cars[0];
  const heroSecondary = cars.find((car) => car.slug === "toyota-prado") ?? cars[1];
  const heroEvent = cars.find((car) => car.slug === "mercedes-g-class") ?? cars[2];

  return (
    <section className="relative overflow-hidden pb-8 pt-22 sm:pb-18 sm:pt-30">
      <Container>
        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
          <Reveal>
            <div className="inline-flex rounded-full border border-[var(--color-accent)]/20 bg-[var(--color-surface-soft)] px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-[var(--color-accent)] sm:px-4 sm:py-2 sm:text-[11px] sm:tracking-[0.32em]">
              Brandium premium park
            </div>
            <h1 className="mt-3 max-w-3xl text-balance font-display text-[2.15rem] leading-[0.94] tracking-[-0.055em] text-[var(--color-text)] sm:mt-5 sm:text-[4.5rem]">
              {business.heroHeadline}
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--color-muted)] sm:mt-5 sm:text-lg sm:leading-8">
              {business.heroSubtitle}
            </p>

            <div className="mt-4 grid grid-cols-1 gap-2 sm:mt-7 sm:flex sm:flex-row sm:gap-3">
              <Button href="/avtomobiller" size="sm">
                {business.primaryCta}
              </Button>
              <Button
                href={buildWhatsAppLink(
                  "Salam, Brandium Rent a Car. Uyğun avtomobillər və rezervasiya şərtləri haqqında məlumat almaq istəyirəm."
                )}
                variant="secondary"
                size="sm"
                icon="whatsapp"
                target="_blank"
                rel="noreferrer"
              >
                {business.secondaryCta}
              </Button>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-2 sm:mt-8 sm:grid-cols-2 sm:gap-3">
              {heroTrustBadges.map((badge, index) => (
                <div
                  key={badge.label}
                  className={cn(
                    "rounded-[18px] border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-3 py-3 sm:rounded-[22px] sm:px-4 sm:py-4",
                    index > 1 && "hidden sm:block"
                  )}
                >
                  <div className="flex items-center gap-2 text-[12px] font-medium leading-5 text-[var(--color-text)] sm:text-sm">
                    <CheckCircle2 className="size-3.5 shrink-0 text-[var(--color-accent)] sm:size-4" />
                    <span>{badge.label}</span>
                  </div>
                  <p className="mt-2 hidden text-sm leading-6 text-[var(--color-muted)] sm:block">
                    {badge.detail}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative">
              <div className="absolute inset-x-[12%] top-6 hidden h-32 rounded-full bg-[var(--color-accent)]/10 blur-3xl sm:block sm:h-40" />
              <CarShowcaseVisual
                title={heroPrimary.name}
                label="Premium park"
                accent={heroPrimary.accent}
                visual={heroPrimary.visual}
                imageSrc={heroPrimary.mainImage.src}
                imageAlt={heroPrimary.mainImage.alt}
                imagePosition={heroPrimary.mainImage.position}
                priority
                className="aspect-[1.2/0.9] min-h-[200px] sm:aspect-[1.05/1] sm:min-h-[340px]"
                sizes="(max-width: 640px) 92vw, (max-width: 1280px) 50vw, 40vw"
              />
              <div className="mt-4 hidden gap-3 sm:grid sm:grid-cols-3">
                <CarShowcaseVisual
                  title={heroSecondary.name}
                  label={heroSecondary.typeLabel}
                  accent={heroSecondary.accent}
                  visual={heroSecondary.visual}
                  imageSrc={heroSecondary.mainImage.src}
                  imageAlt={heroSecondary.mainImage.alt}
                  imagePosition={heroSecondary.mainImage.position}
                  className="min-h-[160px]"
                  sizes="(max-width: 1280px) 22vw, 18vw"
                />
                <CarShowcaseVisual
                  title={heroEvent.name}
                  label={heroEvent.typeLabel}
                  accent={heroEvent.accent}
                  visual={heroEvent.visual}
                  imageSrc={heroEvent.mainImage.src}
                  imageAlt={heroEvent.mainImage.alt}
                  imagePosition={heroEvent.mainImage.position}
                  className="min-h-[160px]"
                  sizes="(max-width: 1280px) 22vw, 18vw"
                />
                <div className="premium-card flex flex-col justify-between px-4 py-4">
                  <div>
                    <div className="font-display text-2xl text-[var(--color-text)]">11+</div>
                    <div className="mt-1 text-sm text-[var(--color-muted)]">hazır park modeli</div>
                  </div>
                  <div className="mt-5 text-sm leading-7 text-[var(--color-muted)]">
                    Hər listing öz maşın məlumatı və öz şəkil bağları ilə saxlanılır.
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
      <BookingStrip />
    </section>
  );
}
