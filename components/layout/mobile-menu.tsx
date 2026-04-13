"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
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
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] bg-[var(--color-overlay)] backdrop-blur-2xl"
        >
          <Container className="flex min-h-screen flex-col py-4">
            <div className="flex items-center justify-between">
              <BrandMark compact />
              <div className="flex items-center gap-3">
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

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.35 }}
              className="mt-12 flex flex-1 flex-col"
            >
              <nav className="space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between rounded-[24px] border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-5 py-4 text-lg text-[var(--color-text)]"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="size-4 text-[var(--color-accent)]" />
                  </Link>
                ))}
              </nav>

              <div className="mt-8 rounded-[28px] border border-[var(--color-accent)]/20 bg-[linear-gradient(180deg,rgba(212,178,117,0.12),rgba(255,255,255,0.02))] p-5">
                <div className="text-[11px] uppercase tracking-[0.32em] text-[var(--color-accent)]">
                  Sürətli rezervasiya
                </div>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  Model və tarix göndərin, komanda sizə ən uyğun variantı tez təsdiqləsin.
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

              <div className="mt-auto rounded-[28px] border border-[var(--color-border)] bg-[var(--color-surface-soft)] p-5 text-sm text-[var(--color-muted)]">
                <div>{business.primaryPhone}</div>
                <div className="mt-2">{business.addressLine}</div>
                <div>{business.addressNote}</div>
              </div>
            </motion.div>
          </Container>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
