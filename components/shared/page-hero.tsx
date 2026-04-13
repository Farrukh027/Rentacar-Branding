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
    <section className="pt-36 sm:pt-40">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <div className="inline-flex rounded-full border border-[var(--color-accent)]/20 bg-white/[0.03] px-4 py-2 text-[11px] uppercase tracking-[0.32em] text-[var(--color-accent)]">
              {eyebrow}
            </div>
            <h1 className="mt-5 max-w-4xl font-display text-[3rem] leading-[0.92] tracking-[-0.05em] text-[var(--color-text)] sm:text-[4.2rem]">
              {title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              {description}
            </p>
            {chips ? (
              <div className="mt-6 flex flex-wrap gap-3">
                {chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-[var(--color-text)]"
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
