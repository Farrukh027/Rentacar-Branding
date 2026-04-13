import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { businessHours } from "@/data/business";
import { aboutStory, rentalRules } from "@/data/content";
import { createPageMetadata } from "@/lib/utils";

export const metadata = createPageMetadata(
  "Haqqımızda",
  "Brandium Rent a Car-ın Bakı bazarı üçün qurduğu premium, sürətli və etibarlı xidmət yanaşması.",
  "/haqqimizda"
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Haqqımızda"
        title="Etibarlı, modern və müştəri yönümlü rent-a-car təcrübəsi"
        description={aboutStory.intro}
        chips={["Sürətli cavab", "Baxımlı park", "Lokal xidmət", "Premium təqdimat"]}
      />
      <section className="pb-20 pt-8">
        <Container>
          <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
            <div className="premium-card p-6 sm:p-8">
              <div className="grid gap-6">
                {aboutStory.paragraphs.map((paragraph) => <p key={paragraph} className="text-base leading-8 text-[var(--color-muted)] sm:text-lg">{paragraph}</p>)}
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {aboutStory.stats.map((stat) => (
                  <div key={stat.label} className="rounded-[22px] border border-white/8 bg-white/[0.03] px-4 py-5">
                    <div className="font-display text-3xl text-[var(--color-text)]">{stat.value}</div>
                    <div className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5">
              <div className="premium-card p-6">
                <div className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-accent)]">İş rejimi</div>
                <div className="mt-5 space-y-4">
                  {businessHours.map((item) => (
                    <div key={item.label} className="flex items-center justify-between gap-4 border-b border-white/8 pb-3 text-sm text-[var(--color-text)] last:border-b-0 last:pb-0">
                      <span>{item.label}</span>
                      <span className="text-[var(--color-muted)]">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="premium-card p-6">
                <div className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-accent)]">Qaydalar</div>
                <div className="mt-5 grid gap-3">
                  {rentalRules.map((rule) => <div key={rule} className="rounded-[18px] border border-white/8 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-[var(--color-text)]">{rule}</div>)}
                </div>
                <div className="mt-6"><Button href="/rezervasiya">Rezervasiya et</Button></div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
