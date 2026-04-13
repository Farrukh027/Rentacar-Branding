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
  "Brandium Rent a Car üçün sürətli rezervasiya formu. Tarixi göndərin, uyğunluğu təsdiqləyək və WhatsApp ilə prosesi bağlayaq.",
  "/rezervasiya"
);

function getFirstValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function ReservationPage({ searchParams }: ReservationPageProps) {
  const params = await searchParams;
  const selectedSlug = getFirstValue(params.car);
  const selectedCar = cars.find((car) => car.slug === selectedSlug);

  return (
    <>
      <PageHero
        eyebrow="Rezervasiya"
        title="Tarixi göndərin, uyğun avtomobili sürətli şəkildə sizin üçün bağlayaq"
        description="Forma qısa saxlanılıb ki, mobil telefonda da rahat doldurulsun. Göndərişdən sonra məlumat WhatsApp mesajı kimi hazırlanır və təsdiq prosesi sürətlənir."
        chips={["WhatsApp yönləndirməsi", "Depozitsiz seçimlər", "Ünvana çatdırılma", "Aeroport təhvil"]}
        aside={
          <div className="premium-card p-5 sm:p-6">
            <div className="text-[11px] uppercase tracking-[0.32em] text-[var(--color-accent)]">
              Sürətli axın
            </div>
            <div className="mt-4 space-y-4">
              {[
                ["01", "Model seçilir və tarix göndərilir."],
                ["02", "Komanda uyğunluğu və şərtləri dəqiqləşdirir."],
                ["03", "WhatsApp üzərindən təsdiq və təhvil razılaşdırılır."]
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
                title={selectedCar?.name ?? business.shortName}
                label={selectedCar?.typeLabel ?? "Premium rent-a-car təcrübəsi"}
                accent={selectedCar?.accent ?? "#d4b275"}
                visual={selectedCar?.visual ?? "premium"}
                imageSrc={selectedCar?.mainImage.src}
                imageAlt={selectedCar?.mainImage.alt}
                imagePosition={selectedCar?.mainImage.position}
                className="min-h-[320px]"
              />

              <div className="premium-card p-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 size-5 text-[var(--color-accent)]" />
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-accent)]">
                      Şərtlər
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
                      Birbaşa əlaqə
                    </div>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                      Formanı doldurmadan da yaza bilərsiniz. Xüsusən toy maşını, VIP transfer və ya çoxlu avtomobil sorğuları üçün birbaşa WhatsApp daha sürətli olur.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <Button
                        href={buildWhatsAppLink(
                          selectedCar
                            ? `Salam, Brandium Rent a Car. ${selectedCar.name} modeli üçün rezervasiya etmək istəyirəm.`
                            : "Salam, Brandium Rent a Car. Rezervasiya üçün məlumat almaq istəyirəm."
                        )}
                        icon="whatsapp"
                        target="_blank"
                        rel="noreferrer"
                      >
                        WhatsApp ilə yaz
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
                      Təhvil nöqtəsi
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
