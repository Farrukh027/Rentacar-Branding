"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, PhoneCall } from "lucide-react";

import { MobileMenu } from "@/components/layout/mobile-menu";
import { BrandMark } from "@/components/ui/brand-mark";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { business, campaignRibbon, navigation } from "@/data/business";
import { formatPhoneHref } from "@/lib/utils";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <div className="relative z-[70] border-b border-[var(--color-border)] bg-[var(--color-surface-soft)]">
        <Container className="flex items-center justify-between gap-3 py-2 text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] sm:text-[11px] sm:tracking-[0.26em]">
          <div className="truncate text-[var(--color-accent)]">
            {campaignRibbon.label} • {campaignRibbon.text}
          </div>
          <a href={formatPhoneHref(business.primaryPhone)} className="hidden sm:inline-flex">
            {business.primaryPhone}
          </a>
        </Container>
      </div>

      <header className="fixed inset-x-0 top-[37px] z-[80] pt-3 sm:pt-4">
        <Container>
          <div className="glass-panel flex items-center justify-between gap-3 rounded-[28px] px-3 py-2.5 sm:rounded-full sm:px-4 sm:py-3">
            <BrandMark compact className="min-w-0 flex-1 pr-1 sm:pr-2" />

            <nav className="hidden items-center gap-6 lg:flex">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="link-line text-sm text-[var(--color-muted)] transition-colors duration-200 hover:text-[var(--color-text)]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <ThemeToggle />
              <a
                href={formatPhoneHref(business.primaryPhone)}
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-4 text-sm text-[var(--color-muted)] transition-colors duration-200 hover:border-[var(--color-accent)]/40 hover:text-[var(--color-text)]"
              >
                <PhoneCall className="size-4 text-[var(--color-accent)]" />
                {business.primaryPhone}
              </a>
              <Button
                href={buildWhatsAppLink(
                  "Salam, Brandium Rent a Car. Rezervasiya üçün məlumat almaq istəyirəm."
                )}
                icon="whatsapp"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </Button>
            </div>

            <div className="flex shrink-0 items-center gap-2 lg:hidden">
              <ThemeToggle className="h-11 w-11" />
              <button
                type="button"
                aria-label="Menyunu aç"
                aria-controls="mobile-navigation"
                aria-expanded={menuOpen}
                className="grid h-11 w-11 place-items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-soft)] text-[var(--color-text)]"
                onClick={() => setMenuOpen(true)}
              >
                <Menu className="size-5" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
