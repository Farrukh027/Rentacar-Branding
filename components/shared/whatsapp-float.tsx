import { MessageCircleMore } from "lucide-react";

import { buildWhatsAppLink } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  return (
    <a
      href={buildWhatsAppLink(
        "Salam, Brandium Rent a Car. Uyğun avtomobil üçün məlumat almaq istəyirəm."
      )}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp ilə yaz"
      className="fixed bottom-[calc(env(safe-area-inset-bottom)+1rem)] right-4 z-[85] inline-flex h-13 w-13 items-center justify-center rounded-full border border-[var(--color-accent)]/25 bg-[var(--color-surface-soft)] text-[var(--color-text)] shadow-[var(--color-card-shadow)] transition-transform duration-200 md:hover:-translate-y-1 sm:right-6"
    >
      <MessageCircleMore className="size-5 text-[var(--color-accent)] sm:size-6" />
    </a>
  );
}
