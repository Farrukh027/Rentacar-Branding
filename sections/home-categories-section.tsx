import Link from "next/link";

import { FeatureIcon } from "@/components/shared/feature-icon";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { featuredCategories } from "@/data/content";

export function HomeCategoriesSection() {
  return (
    <section className="py-14 sm:py-20">
      <SectionHeading
        eyebrow="Kateqoriyalar"
        title="Seçilmiş kateqoriyalar"
        description="Sərfəli gündəlik seçimlərdən premium və event yönümlü modellərə qədər aydın kateqoriya strukturu."
        action={
          <Button href="/avtomobiller" variant="secondary" size="sm">
            Bütün park
          </Button>
        }
      />
      <div className="site-container grid gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3">
        {featuredCategories.map((category) => (
          <Link
            key={category.title}
            href={category.href}
            className="premium-card group p-4 transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1 hover:border-[color:color-mix(in_srgb,var(--color-accent)_34%,transparent)] sm:p-5"
          >
            <FeatureIcon icon={category.icon} />
            <div className="mt-4 flex items-start justify-between gap-3 sm:mt-5 sm:gap-4">
              <div>
                <div className="text-[10px] uppercase tracking-[0.24em] text-[var(--color-accent)] sm:text-[11px] sm:tracking-[0.28em]">
                  {category.subtitle}
                </div>
                <h3 className="mt-2 text-[1.7rem] leading-none tracking-[-0.03em] text-[var(--color-text)] sm:text-2xl">
                  {category.title}
                </h3>
              </div>
              <div className="text-sm font-medium text-[var(--color-text)]">{category.metric}</div>
            </div>
            <p className="mt-3 text-sm leading-7 text-[var(--color-muted)] sm:mt-4">
              {category.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
