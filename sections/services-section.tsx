import { FeatureIcon } from "@/components/shared/feature-icon";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { serviceDetails } from "@/data/content";

export function ServicesSection() {
  return (
    <section className="section-defer py-18 sm:py-20">
      <SectionHeading
        eyebrow="Xidmətlər"
        title="Sadəcə avtomobil icarəsi deyil, tam servis məntiqi"
        description="Gündəlik və aylıq icarədən toy maşınları, VIP transfer və aeroport təhvilinə qədər strukturlaşdırılmış xidmətlər."
        action={
          <Button href="/xidmetler" variant="secondary">
            Xidmətlər səhifəsi
          </Button>
        }
      />
      <div className="site-container grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {serviceDetails.map((service) => (
          <div key={service.slug} className="premium-card p-5 sm:p-6">
            <FeatureIcon icon={service.icon} />
            <div className="mt-5 text-[11px] uppercase tracking-[0.28em] text-[var(--color-accent)]">
              {service.summary}
            </div>
            <h3 className="mt-2 text-[1.45rem] leading-tight tracking-[-0.03em] text-[var(--color-text)] sm:text-2xl">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)] sm:leading-7">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
