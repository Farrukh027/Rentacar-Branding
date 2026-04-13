import { Clock3, Instagram, MapPin, MessageCircleMore, PhoneCall } from "lucide-react";

import { ContactForm } from "@/components/forms/contact-form";
import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { business, businessHours } from "@/data/business";
import { formatPhoneHref, createPageMetadata } from "@/lib/utils";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export const metadata = createPageMetadata(
  "Əlaqə",
  "Brandium Rent a Car ilə əlaqə saxlayın. Telefon, WhatsApp, Instagram, ünvan və sürətli sorğu formu bir yerdə.",
  "/elaqe"
);

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Əlaqə"
        title="Sürətli cavab verən, rahat koordinasiya olunan əlaqə mərkəzi"
        description="Telefon, WhatsApp və forma axını eyni səhifədədir. Məqsəd birdir: maşını və xidməti ən qısa vaxtda dəqiqləşdirmək."
        chips={["WhatsApp əsas kanal", "İki aktiv nömrə", "Instagram", "Bakı daxilində çevik təhvil"]}
        aside={
          <div className="premium-card p-5 sm:p-6">
            <div className="text-[11px] uppercase tracking-[0.32em] text-[var(--color-accent)]">
              İş rejimi
            </div>
            <div className="mt-5 space-y-4">
              {businessHours.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-4 border-b border-white/8 pb-3 text-sm text-[var(--color-text)] last:border-b-0 last:pb-0"
                >
                  <span>{item.label}</span>
                  <span className="text-[var(--color-muted)]">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        }
      />

      <section className="pb-20 pt-8">
        <Container>
          <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
            <div className="grid gap-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="premium-card p-5">
                  <PhoneCall className="size-5 text-[var(--color-accent)]" />
                  <div className="mt-4 text-[11px] uppercase tracking-[0.28em] text-[var(--color-accent)]">
                    Telefon
                  </div>
                  <div className="mt-3 space-y-2 text-sm text-[var(--color-text)]">
                    <a href={formatPhoneHref(business.primaryPhone)} className="block">
                      {business.primaryPhone}
                    </a>
                    <a href={formatPhoneHref(business.secondaryPhone)} className="block">
                      {business.secondaryPhone}
                    </a>
                  </div>
                </div>

                <div className="premium-card p-5">
                  <MessageCircleMore className="size-5 text-[var(--color-accent)]" />
                  <div className="mt-4 text-[11px] uppercase tracking-[0.28em] text-[var(--color-accent)]">
                    WhatsApp
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                    Model, tarix və xidmət növünü göndərin. İlkin cavab sürətli verilir.
                  </p>
                  <div className="mt-4">
                    <Button
                      href={buildWhatsAppLink("Salam, Brandium Rent a Car. Uyğun model və tarix üçün məlumat almaq istəyirəm.")}
                      icon="whatsapp"
                      size="sm"
                      target="_blank"
                      rel="noreferrer"
                    >
                      WhatsApp aç
                    </Button>
                  </div>
                </div>

                <div className="premium-card p-5">
                  <Instagram className="size-5 text-[var(--color-accent)]" />
                  <div className="mt-4 text-[11px] uppercase tracking-[0.28em] text-[var(--color-accent)]">
                    Instagram
                  </div>
                  <a
                    href={business.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 block text-sm text-[var(--color-text)]"
                  >
                    {business.instagramHandle}
                  </a>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                    Aktual görüntülər və park təqdimatları üçün rahat kanal.
                  </p>
                </div>

                <div className="premium-card p-5">
                  <MapPin className="size-5 text-[var(--color-accent)]" />
                  <div className="mt-4 text-[11px] uppercase tracking-[0.28em] text-[var(--color-accent)]">
                    Ünvan
                  </div>
                  <div className="mt-3 text-sm text-[var(--color-text)]">{business.addressLine}</div>
                  <div className="mt-2 text-sm text-[var(--color-muted)]">{business.addressNote}</div>
                </div>
              </div>

              <div className="premium-card overflow-hidden p-0">
                <div className="flex items-center gap-3 border-b border-white/8 px-5 py-4">
                  <Clock3 className="size-5 text-[var(--color-accent)]" />
                  <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-accent)]">
                    Xəritə placeholder
                  </div>
                </div>
                <div className="relative min-h-[280px] overflow-hidden bg-[radial-gradient(circle_at_top,rgba(212,178,117,0.18),transparent_42%),linear-gradient(180deg,rgba(18,18,20,0.92),rgba(10,10,11,0.98))]">
                  <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:32px_32px]" />
                  <div className="relative flex min-h-[280px] flex-col justify-end p-6">
                    <div className="max-w-sm rounded-[24px] border border-white/10 bg-black/30 p-5 backdrop-blur-xl">
                      <div className="text-xl text-[var(--color-text)]">{business.addressLine}</div>
                      <div className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                        {business.addressNote}. Buraya gələn mərhələdə `Google Maps embed` və ya custom map komponenti qoşula bilər.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-5">
              <ContactForm />

              <div className="premium-card p-6">
                <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-accent)]">
                  Sorğu formatı
                </div>
                <div className="mt-4 grid gap-3">
                  {[
                    "Model və tarix yazıldıqda cavab daha sürətli verilir.",
                    "Toy maşını və VIP transfer üçün tədbir saatını qeyd etmək tövsiyə olunur.",
                    "Ünvana çatdırılma istəyi varsa məkan detalını qısa yazmaq kifayətdir."
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[18px] border border-white/8 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-[var(--color-text)]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
