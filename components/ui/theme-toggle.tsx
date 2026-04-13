"use client";

import { MoonStar, SunMedium } from "lucide-react";

import { cn } from "@/lib/utils";

import { useTheme } from "./theme-provider";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Light moduna kec" : "Dark moduna kec"}
      className={cn(
        "inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-soft)] text-[var(--color-text)] shadow-[var(--color-card-shadow)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent)]/45",
        className
      )}
    >
      {isDark ? (
        <SunMedium className="size-5 text-[var(--color-accent)]" />
      ) : (
        <MoonStar className="size-5 text-[var(--color-accent)]" />
      )}
    </button>
  );
}
