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
import { cn, formatPhoneHref } from "@/lib/utils";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <div className="relative z-[70] border-b border-[var(--color-border)] bg-[var(--color-surface-soft)]">
        <Container className="flex items-center justify-between gap-4 py-2 text-[11px] uppercase tracking-[0.26em] text-[var(--color-muted)]">
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
          <div
            className={cn(
              "flex items-center justify-between rounded-full px-3 py-3 transition-all duration-500 sm:px-4",
              isScrolled
                ? "glass-panel"
                : "border border-[var(--color-border)] bg-[var(--color-surface-soft)] backdrop-blur-xl"
            )}
          >
            <BrandMark compact className="origin-left scale-[0.95]" />

            <nav className="hidden items-center gap-6 lg:flex">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="link-line text-sm text-[var(--color-muted)] transition-colors duration-300 hover:text-[var(--color-text)]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <ThemeToggle />
              <a
                href={formatPhoneHref(business.primaryPhone)}
                className="inline-flex h-12 items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-4 text-sm text-[var(--color-muted)] transition-colors duration-300 hover:border-[var(--color-accent)]/40 hover:text-[var(--color-text)]"
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

            <div className="flex items-center gap-3 lg:hidden">
              <ThemeToggle className="h-12 w-12" />
              <button
                type="button"
                aria-label="Menyunu aç"
                className="grid h-12 w-12 place-items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-soft)] text-[var(--color-text)]"
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
