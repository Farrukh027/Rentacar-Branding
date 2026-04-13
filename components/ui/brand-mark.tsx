import Image from "next/image";
import Link from "next/link";

import { business } from "@/data/business";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  compact?: boolean;
};

export function BrandMark({ className, compact = false }: BrandMarkProps) {
  return (
    <Link
      href="/"
      aria-label={`${business.brandName} ana səhifə`}
      className="inline-flex min-w-0 max-w-full"
    >
      <div className={cn("flex min-w-0 items-center gap-2.5 sm:gap-3", className)}>
        <div className="shrink-0 overflow-hidden rounded-[16px] border border-[var(--color-border)] bg-black/85 shadow-[var(--color-card-shadow)]">
          <Image
            src="/brandium-logo.png"
            alt={business.brandName}
            width={compact ? 44 : 56}
            height={compact ? 44 : 56}
            sizes={compact ? "44px" : "(max-width: 640px) 48px, 56px"}
            className={cn("h-11 w-11 object-cover sm:h-14 sm:w-14", compact && "sm:h-11 sm:w-11")}
            priority
          />
        </div>
        <div className="min-w-0">
          {compact ? (
            <>
              <div className="truncate font-display text-[0.98rem] leading-none tracking-[-0.04em] text-[var(--color-text)] sm:text-[1.05rem]">
                Brandium
              </div>
              <div className="truncate text-[0.62rem] uppercase tracking-[0.24em] text-[var(--color-accent)] sm:text-[0.68rem]">
                Rent a Car
              </div>
            </>
          ) : (
            <>
              <div className="font-display text-[1.05rem] leading-none tracking-[-0.04em] text-[var(--color-text)] sm:text-[1.15rem]">
                Brandium
                <span className="ml-1 text-[var(--color-accent)]">Rent a Car</span>
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.34em] text-[var(--color-muted)]">
                Baku premium mobility
              </div>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}
