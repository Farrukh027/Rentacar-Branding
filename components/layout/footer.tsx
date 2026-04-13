import Link from "next/link";

import { BrandMark } from "@/components/ui/brand-mark";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { business, navigation } from "@/data/business";
import { formatPhoneHref } from "@/lib/utils";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface-soft)] py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <BrandMark />
            <p className="mt-5 max-w-sm text-sm leading-7 text-[var(--color-muted)]">
              Bakı üçün sürətli, premium və etibarlı avtomobil icarə təcrübəsi. Təmiz park,
              şəffaf xidmət və birbaşa WhatsApp rezervasiya.
            </p>
            <div className="mt-6">
              <Button
                href={buildWhatsAppLink(
                  "Salam, Brandium Rent a Car. Uyğun avtomobil üçün məlumat almaq istəyirəm."
                )}
                icon="whatsapp"
                size="sm"
                className="w-full justify-center sm:w-auto"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp ilə əlaqə
              </Button>
            </div>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.32em] text-[var(--color-accent)]">
              Keçidlər
            </div>
            <div className="mt-5 space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-[var(--color-text)] transition-colors duration-300 hover:text-[var(--color-accent)]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.32em] text-[var(--color-accent)]">
              Xidmətlər
            </div>
            <div className="mt-5 space-y-3">
              {business.coreServices.slice(0, 6).map((service) => (
                <p key={service} className="text-sm leading-6 text-[var(--color-text)]">
                  {service}
                </p>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.32em] text-[var(--color-accent)]">
              Əlaqə
            </div>
            <div className="mt-5 space-y-3 text-sm text-[var(--color-text)]">
              <a href={formatPhoneHref(business.primaryPhone)}>{business.primaryPhone}</a>
              <a href={formatPhoneHref(business.secondaryPhone)}>{business.secondaryPhone}</a>
              <a href={business.instagramUrl} target="_blank" rel="noreferrer">
                {business.instagramHandle}
              </a>
              <p>{business.addressLine}</p>
              <p className="text-[var(--color-muted)]">{business.addressNote}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--color-border)] pt-6 text-sm text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
          <div>© 2026 Brandium Rent a Car. Bütün hüquqlar qorunur.</div>
          <div>Premium rent-a-car təcrübəsi, Bakı.</div>
        </div>
      </Container>
    </footer>
  );
}
