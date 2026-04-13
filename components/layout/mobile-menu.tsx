"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";

import { BrandMark } from "@/components/ui/brand-mark";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { business, navigation } from "@/data/business";
import { buildWhatsAppLink } from "@/lib/whatsapp";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[90] lg:hidden">
      <button
        type="button"
        aria-label="Menyunu bağla"
        className="absolute inset-0 bg-black/35"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        id="mobile-navigation"
        className="relative ml-auto flex min-h-screen w-full max-w-[420px] flex-col overflow-y-auto overscroll-contain border-l border-[var(--color-border)] bg-[var(--color-overlay)] px-4 pb-[calc(env(safe-area-inset-bottom)+1rem)] pt-[calc(env(safe-area-inset-top)+0.9rem)] supports-[backdrop-filter]:backdrop-blur-md"
      >
        <Container className="flex min-h-[calc(100vh-env(safe-area-inset-top)-env(safe-area-inset-bottom))] flex-col px-0">
          <div className="flex items-start justify-between gap-3">
            <BrandMark compact className="min-w-0 flex-1" />
            <div className="flex items-center gap-2">
              <ThemeToggle className="h-11 w-11" />
              <button
                type="button"
                onClick={onClose}
                className="grid h-11 w-11 place-items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-soft)] text-[var(--color-text)]"
                aria-label="Menyunu bağla"
              >
                <X className="size-5" />
              </button>
            </div>
          </div>

          <div className="mt-7 flex flex-1 flex-col">
            <nav className="space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center justify-between rounded-[22px] border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-4 py-4 text-base font-medium text-[var(--color-text)] transition-colors duration-200 hover:border-[var(--color-accent)]/35"
                >
                  <span className="pr-3">{item.label}</span>
                  <ArrowUpRight className="size-4 shrink-0 text-[var(--color-accent)]" />
                </Link>
              ))}
            </nav>

            <div className="mt-6 rounded-[24px] border border-[var(--color-border)] bg-[var(--color-surface-soft)] p-4 sm:p-5">
              <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-accent)]">
                Sürətli rezervasiya
              </div>
              <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                Model və tarixi göndərin, komanda sizə ən uyğun variantı sürətlə təsdiqləsin.
              </p>
              <div className="mt-5">
                <Button
                  href={buildWhatsAppLink(
                    "Salam, Brandium Rent a Car. Rezervasiya üçün məlumat almaq istəyirəm."
                  )}
                  icon="whatsapp"
                  className="w-full justify-center"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp ilə yaz
                </Button>
              </div>
            </div>

            <div className="mt-auto rounded-[24px] border border-[var(--color-border)] bg-[var(--color-surface-soft)] p-4 text-sm leading-6 text-[var(--color-muted)]">
              <div className="text-[var(--color-text)]">{business.primaryPhone}</div>
              <div className="mt-2">{business.addressLine}</div>
              <div>{business.addressNote}</div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
