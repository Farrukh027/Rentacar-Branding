"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

import type { FaqItem } from "@/lib/types";

type AccordionProps = {
  items: FaqItem[];
};

export function Accordion({ items }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="grid gap-4">
      {items.map((item, index) => {
        const isOpen = index === activeIndex;

        return (
          <div
            key={item.question}
            className="rounded-[24px] border border-white/10 bg-white/[0.03] px-5 py-5 sm:px-6"
          >
            <button
              type="button"
              className="flex w-full items-start justify-between gap-4 text-left"
              onClick={() => setActiveIndex(isOpen ? -1 : index)}
            >
              <span className="max-w-3xl text-base font-medium text-[var(--color-text)] sm:text-lg">
                {item.question}
              </span>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-[var(--color-accent)]">
                {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28 }}
                  className="overflow-hidden"
                >
                  <p className="pt-4 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                    {item.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
