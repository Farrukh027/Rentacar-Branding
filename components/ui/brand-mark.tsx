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
    <Link href="/" aria-label={`${business.brandName} ana səhifə`} className="inline-flex">
      <div className={cn("flex items-center gap-3", className)}>
        <div className="overflow-hidden rounded-[18px] border border-[var(--color-border)] bg-black/85 shadow-[var(--color-card-shadow)]">
          <Image
            src="/brandium-logo.png"
            alt={business.brandName}
            width={compact ? 48 : 56}
            height={compact ? 48 : 56}
            className={cn("h-12 w-12 object-cover sm:h-14 sm:w-14", compact && "sm:h-12 sm:w-12")}
            priority
          />
        </div>
        <div className={cn(compact && "hidden sm:block")}>
          <div className="font-display text-[1.05rem] leading-none tracking-[-0.04em] text-[var(--color-text)] sm:text-[1.15rem]">
            Brandium
            <span className="ml-1 text-[var(--color-accent)]">Rent a Car</span>
          </div>
          {!compact ? (
            <div className="mt-1 text-[10px] uppercase tracking-[0.34em] text-[var(--color-muted)]">
              Baku premium mobility
            </div>
          ) : null}
        </div>
      </div>
    </Link>
  );
}
