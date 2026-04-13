import { MessageCircleMore } from "lucide-react";

import { buildWhatsAppLink } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  return (
    <a
      href={buildWhatsAppLink(
        "Salam, Brandium Rent a Car. Uygun avtomobil üçün məlumat almaq istəyirəm."
      )}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp ilə yaz"
      className="fixed bottom-4 right-4 z-[85] inline-flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-accent)]/25 bg-[var(--color-surface-soft)] text-[var(--color-text)] shadow-[var(--color-card-shadow)] transition-transform duration-300 hover:-translate-y-1 sm:bottom-6 sm:right-6"
    >
      <MessageCircleMore className="size-6 text-[var(--color-accent)]" />
    </a>
  );
}
