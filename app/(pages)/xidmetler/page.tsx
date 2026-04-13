import { FeatureIcon } from "@/components/shared/feature-icon";
import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { serviceDetails } from "@/data/content";
import { createPageMetadata } from "@/lib/utils";

export const metadata = createPageMetadata(
  "Xidmətlər",
  "Gündəlik, həftəlik, aylıq icarə, VIP transfer, toy maşınları və depozitsiz təkliflər.",
  "/xidmetler"
);

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Xidmətlər"
        title="Lokal bazara uyğun, premium hiss yaradan xidmət paketi"
        description="Brandium parkı sadəcə maşın vermir. Müştərinin vaxtına, təqdimatına və rahat logistikasına uyğun xidmət qurur."
        chips={["Gündəlik", "Aylıq", "VIP transfer", "Toy maşınları", "Depozitsiz"]}
      />
      <section className="pb-20 pt-8">
        <Container>
          <div className="grid gap-5 xl:grid-cols-2">
            {serviceDetails.map((service) => (
              <article key={service.slug} id={service.anchor} className="premium-card scroll-mt-32 p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <FeatureIcon icon={service.icon} />
                  <Button href="/rezervasiya" variant="secondary" size="sm">Sorğu göndər</Button>
                </div>
                <div className="mt-5 text-[11px] uppercase tracking-[0.3em] text-[var(--color-accent)]">{service.summary}</div>
                <h2 className="mt-3 text-3xl tracking-[-0.04em] text-[var(--color-text)]">{service.title}</h2>
                <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">{service.description}</p>
                <div className="mt-5 grid gap-3">
                  {service.bullets.map((bullet) => <div key={bullet} className="rounded-[18px] border border-white/8 bg-white/[0.03] px-4 py-4 text-sm text-[var(--color-text)]">{bullet}</div>)}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
