import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function FinalCtaSection() {
  return (
    <section className="section-defer py-18 sm:py-20">
      <Container>
        <div className="premium-card overflow-hidden px-6 py-10 sm:px-10 sm:py-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="text-[11px] uppercase tracking-[0.32em] text-[var(--color-accent)]">
                Sürətli qərar
              </div>
              <h2 className="mt-4 max-w-3xl font-display text-[2.2rem] leading-[0.96] tracking-[-0.04em] text-[var(--color-text)] sm:text-5xl">
                İndi uyğun avtomobili seç və sürətli rezervasiya et
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--color-muted)] sm:text-base sm:leading-7">
                Parkı incələ, modeli seç və WhatsApp ilə birbaşa tarix göndər. Sürətli təsdiq üçün axın hazırdır.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button href="/avtomobiller" className="w-full justify-center lg:w-auto">
                Avtomobillərə bax
              </Button>
              <Button
                href={buildWhatsAppLink(
                  "Salam, Brandium Rent a Car. Uyğun avtomobili seçmək üçün kömək almaq istəyirəm."
                )}
                variant="secondary"
                icon="whatsapp"
                className="w-full justify-center lg:w-auto"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp ilə rezerv et
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
