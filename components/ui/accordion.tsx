import { ChevronDown } from "lucide-react";

import type { FaqItem } from "@/lib/types";

type AccordionProps = {
  items: FaqItem[];
};

export function Accordion({ items }: AccordionProps) {
  return (
    <div className="grid gap-4">
      {items.map((item, index) => (
        <details
          key={item.question}
          className="group rounded-[24px] border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-4 py-4 sm:px-6 sm:py-5"
          open={index === 0}
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left">
            <span className="max-w-3xl pr-2 text-sm font-medium leading-6 text-[var(--color-text)] sm:text-lg sm:leading-7">
              {item.question}
            </span>
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-accent)]">
              <ChevronDown className="size-4 transition-transform duration-200 group-open:rotate-180" />
            </span>
          </summary>
          <p className="pt-4 text-sm leading-6 text-[var(--color-muted)] sm:text-base sm:leading-7">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
