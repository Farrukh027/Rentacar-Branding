import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  className
}: SectionHeadingProps) {
  return (
    <Container className={cn("mb-6 sm:mb-12", className)}>
      <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-end lg:justify-between">
        <Reveal className="max-w-3xl">
          {eyebrow ? (
            <div className="mb-3 inline-flex rounded-full border border-[var(--color-accent)]/20 bg-[var(--color-surface-soft)] px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[var(--color-accent)] sm:mb-4 sm:text-[11px] sm:tracking-[0.32em]">
              {eyebrow}
            </div>
          ) : null}
          <h2 className="text-balance font-display text-[1.8rem] leading-[0.96] tracking-[-0.04em] text-[var(--color-text)] sm:text-[3rem]">
            {title}
          </h2>
          {description ? (
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--color-muted)] sm:mt-4 sm:text-base sm:leading-7">
              {description}
            </p>
          ) : null}
        </Reveal>
        {action ? <Reveal delay={0.08} className="w-full sm:w-auto">{action}</Reveal> : null}
      </div>
    </Container>
  );
}
