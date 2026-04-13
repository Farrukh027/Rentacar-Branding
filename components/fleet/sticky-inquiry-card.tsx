import { PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";
import { business } from "@/data/business";
import type { Car } from "@/lib/types";
import { formatPhoneHref } from "@/lib/utils";
import { buildCarReservationMessage, buildWhatsAppLink } from "@/lib/whatsapp";

type StickyInquiryCardProps = {
  car: Car;
};

export function StickyInquiryCard({ car }: StickyInquiryCardProps) {
  return (
    <aside className="premium-card sticky top-32 p-5">
      <div className="text-[11px] uppercase tracking-[0.32em] text-[var(--color-accent)]">Sürətli sorğu</div>
      <div className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[var(--color-text)]">{car.pricing.daily}</div>
      <div className="mt-1 text-sm text-[var(--color-muted)]">Həftəlik: {car.pricing.weekly}</div>
      <div className="text-sm text-[var(--color-muted)]">Aylıq: {car.pricing.monthly}</div>
      <div className="mt-5 space-y-3 text-sm text-[var(--color-muted)]">
        <p>Depozit: {car.deposit}</p>
        <p>Çatdırılma: {car.delivery}</p>
        <p>Yürüş limiti: {car.mileageLimit}</p>
      </div>
      <div className="mt-6 flex flex-col gap-3">
        <Button href={buildWhatsAppLink(buildCarReservationMessage(car.name, "seçilən tarix", "seçilən tarix"))} icon="whatsapp" className="w-full justify-center" target="_blank" rel="noreferrer">
          WhatsApp ilə rezerv et
        </Button>
        <Button href={`/rezervasiya?car=${car.slug}`} variant="secondary" className="w-full justify-center">
          Formu doldur
        </Button>
      </div>
      <a href={formatPhoneHref(business.primaryPhone)} className="mt-6 flex items-center gap-2 text-sm text-[var(--color-text)]">
        <PhoneCall className="size-4 text-[var(--color-accent)]" />
        {business.primaryPhone}
      </a>
    </aside>
  );
}
