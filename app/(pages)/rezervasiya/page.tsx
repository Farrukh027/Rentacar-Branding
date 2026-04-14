import { MessageCircleMore, ShieldCheck, Sparkles } from "lucide-react";

import { ReservationForm } from "@/components/forms/reservation-form";
import { CarShowcaseVisual } from "@/components/shared/car-showcase-visual";
import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { business } from "@/data/business";
import { reservationNotes, rentalRules } from "@/data/content";
import { cars } from "@/data/fleet";
import { createPageMetadata } from "@/lib/utils";
import { buildWhatsAppLink } from "@/lib/whatsapp";

type ReservationPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export const metadata = createPageMetadata(
  "Rezervasiya",
  "Brandium Rent a Car ucun suretli rezervasiya formu. Tarixi gonderin, uygunlugu tesdiqleyek ve WhatsApp ile prosesi baglayaq.",
  "/rezervasiya"
);

function getFirstValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function ReservationPage({ searchParams }: ReservationPageProps) {
  const params = await searchParams;
  const selectedSlug = getFirstValue(params.car);
  const selectedCar = cars.find((car) => car.slug === selectedSlug);
  const showcaseCar = selectedCar ?? cars.find((car) => car.slug === "bmw-f30") ?? cars[0];

  return (
    <>
      <PageHero
        eyebrow="Rezervasiya"
        title="Tarixi gonderin, uygun avtomobili suretli sekilde sizin ucun baglayaq"
        description="Forma qisa saxlanilib ki, mobil telefonda da rahat doldurulsun. Gonderisden sonra melumat WhatsApp mesaji kimi hazirlanir ve tesdiq prosesi suretlenir."
        chips={["WhatsApp yonlendirmesi", "Depozitsiz secimler", "Unvana catdirilma", "Aeroport tehvil"]}
        aside={
          <div className="premium-card p-5 sm:p-6">
            <div className="text-[11px] uppercase tracking-[0.32em] text-[var(--color-accent)]">
              Suretli axin
            </div>
            <div className="mt-4 space-y-4">
              {[
                ["01", "Model secilir ve tarix gonderilir."],
                ["02", "Komanda uygunlugu ve sertleri deqiqlesdirir."],
                ["03", "WhatsApp uzerinden tesdiq ve tehvil razilasdirilir."]
              ].map(([step, text]) => (
                <div
                  key={step}
                  className="flex gap-4 rounded-[20px] border border-[var(--color-border)] bg-[var(--color-surface-soft)] p-4"
                >
                  <div className="font-display text-2xl text-[var(--color-accent)]">{step}</div>
                  <p className="text-sm leading-7 text-[var(--color-muted)]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        }
      />

      <section className="pb-20 pt-8">
        <Container>
          <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <div className="grid gap-6">
              <ReservationForm
                initialValues={{
                  selectedCar: selectedCar?.name,
                  pickupLocation: business.addressLine
                }}
              />

              <div className="grid gap-4 lg:grid-cols-3">
                {reservationNotes.map((note) => (
                  <div key={note} className="premium-card p-5">
                    <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-accent)]">
                      Qeyd
                    </div>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5">
              <CarShowcaseVisual
                title={showcaseCar.name}
                label={selectedCar?.typeLabel ?? "Rezervasiyaya hazir model"}
                accent={showcaseCar.accent}
                visual={showcaseCar.visual}
                imageSrc={showcaseCar.mainImage.src}
                imageAlt={showcaseCar.mainImage.alt}
                imagePosition={showcaseCar.mainImage.position}
                className="min-h-[320px]"
              />

              <div className="premium-card p-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 size-5 text-[var(--color-accent)]" />
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-accent)]">
                      Sertler
                    </div>
                    <div className="mt-4 grid gap-3">
                      {rentalRules.map((rule) => (
                        <div
                          key={rule}
                          className="rounded-[18px] border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-4 py-4 text-sm leading-7 text-[var(--color-text)]"
                        >
                          {rule}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="premium-card p-6">
                <div className="flex items-start gap-3">
                  <Sparkles className="mt-1 size-5 text-[var(--color-accent)]" />
                  <div className="flex-1">
                    <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-accent)]">
                      Birbasa elaqe
                    </div>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                      Formani doldurmadan da yaza bilersiniz. Xususen toy masini, VIP transfer ve ya coxlu avtomobil sorgulari ucun birbasa WhatsApp daha suretli olur.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <Button
                        href={buildWhatsAppLink(
                          selectedCar
                            ? `Salam, Brandium Rent a Car. ${selectedCar.name} modeli ucun rezervasiya etmek isteyirem.`
                            : "Salam, Brandium Rent a Car. Rezervasiya ucun melumat almaq isteyirem."
                        )}
                        icon="whatsapp"
                        target="_blank"
                        rel="noreferrer"
                      >
                        WhatsApp ile yaz
                      </Button>
                      <Button href="/avtomobiller" variant="secondary">
                        Parka bax
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="premium-card p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-accent)]">
                      Tehvil noqtesi
                    </div>
                    <div className="mt-3 text-xl text-[var(--color-text)]">{business.addressLine}</div>
                    <div className="mt-1 text-sm text-[var(--color-muted)]">{business.addressNote}</div>
                  </div>
                  <MessageCircleMore className="size-5 text-[var(--color-accent)]" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
