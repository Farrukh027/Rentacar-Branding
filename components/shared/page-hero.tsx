import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  aside?: ReactNode;
  chips?: string[];
};

export function PageHero({ eyebrow, title, description, aside, chips }: PageHeroProps) {
  return (
    <section className="pt-30 sm:pt-36">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <div className="inline-flex rounded-full border border-[var(--color-accent)]/20 bg-white/[0.03] px-4 py-2 text-[11px] uppercase tracking-[0.32em] text-[var(--color-accent)]">
              {eyebrow}
            </div>
            <h1 className="mt-4 max-w-4xl text-balance font-display text-[2.3rem] leading-[0.96] tracking-[-0.05em] text-[var(--color-text)] sm:mt-5 sm:text-[4.2rem]">
              {title}
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-[var(--color-muted)] sm:mt-5 sm:text-lg sm:leading-8">
              {description}
            </p>
            {chips ? (
              <div className="mt-5 flex flex-wrap gap-2.5 sm:mt-6 sm:gap-3">
                {chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-3 py-2 text-[13px] leading-5 text-[var(--color-text)] sm:px-4 sm:text-sm"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
          {aside ? <div>{aside}</div> : null}
        </div>
      </Container>
    </section>
  );
}
