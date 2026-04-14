import { Gauge, Fuel, Settings2, Users } from "lucide-react";

import { CarShowcaseVisual } from "@/components/shared/car-showcase-visual";
import { Button } from "@/components/ui/button";
import type { Car } from "@/lib/types";
import { buildCarReservationMessage, buildWhatsAppLink } from "@/lib/whatsapp";

type CarCardProps = {
  car: Car;
};

export function CarCard({ car }: CarCardProps) {
  return (
    <article className="premium-card group h-full overflow-hidden transition-[transform,box-shadow,border-color] duration-300 md:hover:-translate-y-1 md:hover:border-[color:color-mix(in_srgb,var(--color-accent)_34%,transparent)] md:hover:shadow-[0_26px_60px_color-mix(in_srgb,var(--color-accent)_10%,transparent)]">
      <div className="relative p-2.5 sm:p-4">
        <CarShowcaseVisual
          title={car.name}
          label={car.typeLabel}
          accent={car.accent}
          visual={car.visual}
          imageSrc={car.mainImage.src}
          imageAlt={car.mainImage.alt}
          imagePosition={car.mainImage.position}
          sizes="(max-width: 640px) 46vw, (max-width: 1280px) 30vw, 22vw"
          hideTextOnMobile
          className="aspect-[1/1] sm:aspect-[1.3/1]"
        />
        <div className="absolute left-5 top-5 sm:left-8 sm:top-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/55 px-2.5 py-1.5 text-[10px] font-medium tracking-[0.08em] text-white sm:px-3 sm:text-[11px]">
            <span className="size-2.5 rounded-full bg-emerald-400 shadow-[0_0_0_3px_rgba(16,185,129,0.18)]" />
            Aktiv
          </span>
        </div>
      </div>

      <div className="px-3 pb-3 sm:px-5 sm:pb-5">
        <div className="flex items-start justify-between gap-2 sm:gap-4">
          <div className="min-w-0">
            <div className="text-[9px] uppercase tracking-[0.24em] text-[var(--color-accent)] sm:text-[11px]">
              {car.typeLabel}
            </div>
            <h3 className="mt-1 text-sm font-semibold leading-5 tracking-[-0.03em] text-[var(--color-text)] sm:mt-2 sm:text-2xl sm:leading-tight">
              {car.name}
            </h3>
          </div>
          <div className="shrink-0 text-right">
            <div className="text-[9px] uppercase tracking-[0.18em] text-[var(--color-muted)] sm:text-[11px]">
              Gundelik
            </div>
            <div className="mt-1 text-[13px] font-semibold leading-5 text-[var(--color-text)] sm:text-lg">
              {car.pricing.daily}
            </div>
          </div>
        </div>

        <p className="mt-2 overflow-hidden text-[12px] leading-5 text-[var(--color-muted)] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] sm:mt-3 sm:text-sm sm:leading-7">
          {car.highlight}
        </p>

        <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] text-[var(--color-muted)] sm:mt-5 sm:gap-3 sm:text-sm">
          <div className="flex items-center gap-1.5 rounded-[16px] border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-2.5 py-2.5 sm:gap-2 sm:px-3 sm:py-3">
            <Users className="size-3.5 shrink-0 text-[var(--color-accent)] sm:size-4" />
            <span className="leading-4">{car.seats} yer</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-[16px] border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-2.5 py-2.5 sm:gap-2 sm:px-3 sm:py-3">
            <Settings2 className="size-3.5 shrink-0 text-[var(--color-accent)] sm:size-4" />
            <span className="leading-4">{car.transmission}</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-[16px] border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-2.5 py-2.5 sm:gap-2 sm:px-3 sm:py-3">
            <Fuel className="size-3.5 shrink-0 text-[var(--color-accent)] sm:size-4" />
            <span className="leading-4">{car.fuelType}</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-[16px] border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-2.5 py-2.5 sm:gap-2 sm:px-3 sm:py-3">
            <Gauge className="size-3.5 shrink-0 text-[var(--color-accent)] sm:size-4" />
            <span className="leading-4">{car.engine}</span>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-5 sm:gap-3">
          <Button
            href={`/avtomobiller/${car.slug}`}
            variant="secondary"
            size="sm"
            icon="none"
            className="w-full justify-center"
          >
            Ətraflı
          </Button>
          <Button
            href={buildWhatsAppLink(buildCarReservationMessage(car.name, "seçilən tarix", "seçilən tarix"))}
            size="sm"
            className="w-full justify-center"
            icon="none"
            target="_blank"
            rel="noreferrer"
          >
            <span className="whitespace-nowrap">Rezerv et</span>
          </Button>
        </div>
      </div>
    </article>
  );
}
