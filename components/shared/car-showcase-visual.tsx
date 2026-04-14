import Image from "next/image";

import { cn } from "@/lib/utils";
import type { CarVisualType } from "@/lib/types";

type CarShowcaseVisualProps = {
  title: string;
  accent: string;
  visual: CarVisualType;
  label?: string;
  imageAlt?: string;
  className?: string;
  variant?: "default" | "night" | "interior";
  imageSrc?: string;
  imagePosition?: string;
  priority?: boolean;
  sizes?: string;
  hideTextOnMobile?: boolean;
};

const shapes = {
  economy: "M120 190C145 147 223 127 286 130C348 132 432 149 475 190L495 232H100L120 190Z",
  sedan: "M110 192C138 151 215 126 290 127C366 129 442 148 488 192L508 232H92L110 192Z",
  suv: "M98 192C124 148 204 121 295 122C389 123 465 149 512 192L526 232H82L98 192Z",
  premium:
    "M105 188C132 146 212 116 302 118C394 120 470 148 517 188L536 232H84L105 188Z",
  wedding:
    "M100 184C133 140 212 112 307 114C400 116 482 146 532 184L548 232H80L100 184Z"
} as const;

export function CarShowcaseVisual({
  title,
  accent,
  visual,
  label,
  imageAlt,
  className,
  variant = "default",
  imageSrc,
  imagePosition = "center center",
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw",
  hideTextOnMobile = false
}: CarShowcaseVisualProps) {
  const gradientId = `car-accent-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  const isVectorImage = imageSrc?.endsWith(".svg") ?? false;
  const backgroundClass =
    variant === "interior"
      ? "from-white/[0.08] via-white/[0.03] to-transparent"
      : variant === "night"
        ? "from-[rgba(8,8,12,0.8)] via-[rgba(212,178,117,0.08)] to-[rgba(18,18,24,0.92)]"
        : "from-[rgba(212,178,117,0.1)] via-[rgba(255,255,255,0.05)] to-[rgba(8,8,9,0.92)]";

  if (imageSrc) {
    const overlayClass =
      variant === "interior"
        ? "bg-[linear-gradient(180deg,rgba(16,16,18,0.14),rgba(16,16,18,0.6))]"
        : variant === "night"
          ? "bg-[linear-gradient(180deg,rgba(9,10,12,0.18),rgba(9,10,12,0.74))]"
          : "bg-[linear-gradient(180deg,rgba(9,10,12,0.08),rgba(9,10,12,0.62))]";

    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-[24px] border border-[var(--color-border)] bg-[var(--color-showcase-bg)] transition-[transform,box-shadow,border-color] duration-300 ease-out md:transform-gpu md:rounded-[28px] md:hover:-translate-y-1 md:hover:shadow-[0_22px_42px_color-mix(in_srgb,var(--color-accent)_10%,transparent)]",
          className
        )}
        style={{
          boxShadow: "var(--color-card-shadow), inset 0 0 0 1px rgba(255,255,255,0.03)"
        }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt ?? title}
          fill
          priority={priority}
          quality={72}
          unoptimized={isVectorImage}
          sizes={sizes}
          className="object-cover transition-transform duration-300 ease-out md:duration-500 md:hover:scale-[1.02]"
          style={{ objectPosition: imagePosition }}
        />
        <div className={cn("absolute inset-0", overlayClass)} />
        <div
          className="absolute -right-8 top-0 hidden h-24 w-24 rounded-full blur-3xl md:block"
          style={{ backgroundColor: accent, opacity: 0.22 }}
        />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent" />
        <div
          className={cn(
            "absolute inset-x-3 bottom-3 rounded-[18px] border border-white/10 bg-black/55 p-3 sm:inset-x-4 sm:bottom-4 sm:rounded-[22px] sm:bg-black/36 sm:p-4 lg:backdrop-blur-sm",
            hideTextOnMobile && "hidden sm:block"
          )}
        >
          {label ? (
            <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)] sm:text-[11px] sm:tracking-[0.28em]">
              {label}
            </div>
          ) : null}
          <div className="mt-1 font-display text-lg tracking-[-0.04em] text-white sm:mt-2 sm:text-2xl">
            {title}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[24px] border border-[var(--color-border)] bg-[var(--color-showcase-bg)] transition-[transform,box-shadow,border-color] duration-300 ease-out md:transform-gpu md:rounded-[28px] md:hover:-translate-y-1 md:hover:shadow-[0_22px_42px_color-mix(in_srgb,var(--color-accent)_10%,transparent)]",
        className
      )}
      style={{
        boxShadow: "var(--color-card-shadow), inset 0 0 0 1px rgba(255,255,255,0.02)"
      }}
    >
      <div className={cn("absolute inset-0 bg-gradient-to-br", backgroundClass)} />
      <div
        className="absolute -right-8 top-0 hidden h-24 w-24 rounded-full blur-3xl md:block"
        style={{ backgroundColor: accent, opacity: 0.2 }}
      />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/70 to-transparent" />
      <svg
        viewBox="0 0 620 320"
        aria-hidden="true"
        className="relative h-full w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.95" />
            <stop offset="100%" stopColor="#f5f1ea" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <circle cx="505" cy="74" r="64" fill={accent} fillOpacity="0.08" />
        <circle cx="112" cy="266" r="46" fill="#0a0b0d" stroke={accent} strokeOpacity="0.65" />
        <circle cx="112" cy="266" r="18" fill="none" stroke="#f5f1ea" strokeOpacity="0.28" />
        <circle cx="458" cy="266" r="46" fill="#0a0b0d" stroke={accent} strokeOpacity="0.65" />
        <circle cx="458" cy="266" r="18" fill="none" stroke="#f5f1ea" strokeOpacity="0.28" />
        <path
          d={shapes[visual]}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M170 189C205 154 241 140 298 138C355 136 407 151 452 187"
          fill="none"
          stroke="#f5f1ea"
          strokeOpacity="0.2"
          strokeWidth="2"
        />
        <path
          d="M182 184L223 157H358L402 183"
          fill="none"
          stroke="#f5f1ea"
          strokeOpacity="0.18"
          strokeWidth="2"
        />
        <path d="M248 156L237 184" fill="none" stroke="#f5f1ea" strokeOpacity="0.16" strokeWidth="1.6" />
        <path d="M340 156L352 184" fill="none" stroke="#f5f1ea" strokeOpacity="0.16" strokeWidth="1.6" />
        <text x="42" y="56" fill="#f5f1ea" fillOpacity="0.82" fontSize="32" fontFamily="serif">
          {title}
        </text>
        {label ? (
          <text
            x="42"
            y="88"
            fill={accent}
            fillOpacity="0.92"
            fontSize="12"
            letterSpacing="4"
            fontFamily="sans-serif"
          >
            {label.toUpperCase()}
          </text>
        ) : null}
      </svg>
    </div>
  );
}
