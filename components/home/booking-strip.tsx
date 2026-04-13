import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { fleetFilterOptions } from "@/lib/fleet";
import { cn } from "@/lib/utils";

type BookingStripProps = {
  className?: string;
};

export function BookingStrip({ className }: BookingStripProps) {
  return (
    <Container className={cn("relative z-10 mt-5 sm:mt-9", className)}>
      <form
        action="/rezervasiya"
        className="premium-card grid grid-cols-2 gap-3 p-3 sm:grid-cols-2 sm:p-5 lg:grid-cols-[1fr_1fr_0.9fr_0.9fr_auto] lg:items-end"
      >
        <label className="grid gap-1.5">
          <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] sm:text-xs sm:tracking-[0.24em]">
            Götürülmə
          </span>
          <input
            name="pickupDate"
            type="date"
            className="h-11 w-full rounded-[16px] border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-3 outline-none transition-colors focus:border-[var(--color-accent)]/45 sm:h-12 sm:rounded-[18px] sm:px-4"
          />
        </label>
        <label className="grid gap-1.5">
          <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] sm:text-xs sm:tracking-[0.24em]">
            Kateqoriya
          </span>
          <select
            name="category"
            defaultValue="Hamısı"
            className="h-11 w-full rounded-[16px] border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-3 outline-none transition-colors focus:border-[var(--color-accent)]/45 sm:h-12 sm:rounded-[18px] sm:px-4"
          >
            {fleetFilterOptions.categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <label className="hidden gap-2 sm:grid">
          <span className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
            Qaytarılma tarixi
          </span>
          <input
            name="returnDate"
            type="date"
            className="h-12 rounded-[18px] border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-4 outline-none transition-colors focus:border-[var(--color-accent)]/45"
          />
        </label>
        <label className="hidden gap-2 sm:grid">
          <span className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
            Büdcə
          </span>
          <select
            name="budget"
            defaultValue="all"
            className="h-12 rounded-[18px] border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-4 outline-none transition-colors focus:border-[var(--color-accent)]/45"
          >
            {fleetFilterOptions.prices.map((price) => (
              <option key={price.value} value={price.value}>
                {price.label}
              </option>
            ))}
          </select>
        </label>
        <div className="col-span-2 pt-1 sm:col-span-2 lg:col-span-1 lg:pt-0">
          <Button type="submit" size="sm" className="w-full justify-center">
            Uyğun variantı aç
          </Button>
        </div>
      </form>
    </Container>
  );
}
