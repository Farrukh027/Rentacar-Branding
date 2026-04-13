"use client";

import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowUpRight, MessageCircleMore } from "lucide-react";

import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
  icon?: "arrow" | "whatsapp" | "none";
  target?: string;
  rel?: string;
};

const variantClasses = {
  primary:
    "border border-[color:color-mix(in_srgb,var(--color-accent)_42%,transparent)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-accent)_18%,transparent),color-mix(in_srgb,var(--color-surface-soft)_92%,transparent))] text-[var(--color-text)] shadow-[0_14px_34px_color-mix(in_srgb,var(--color-accent)_16%,transparent)] hover:border-[var(--color-accent)] hover:shadow-[0_20px_42px_color-mix(in_srgb,var(--color-accent)_20%,transparent)]",
  secondary:
    "border border-[var(--color-border)] bg-[var(--color-surface-soft)] text-[var(--color-text)] hover:border-[color:color-mix(in_srgb,var(--color-accent)_35%,transparent)] hover:bg-[color:color-mix(in_srgb,var(--color-surface-soft)_84%,var(--color-accent)_16%)]",
  ghost:
    "border border-transparent bg-transparent text-[var(--color-text)] hover:border-[var(--color-border)] hover:bg-[var(--color-surface-soft)]"
} as const;

const sizeClasses = {
  sm: "h-10 gap-2 px-3.5 text-[13px]",
  md: "h-12 gap-2.5 px-5 text-sm",
  lg: "h-14 gap-3 px-6 text-sm"
} as const;

function ButtonIcon({ icon }: { icon: ButtonProps["icon"] }) {
  if (icon === "none") return null;

  const iconNode =
    icon === "whatsapp" ? (
      <MessageCircleMore className="size-4" />
    ) : (
      <ArrowUpRight className="size-4" />
    );

  return (
    <span className="grid size-7 place-items-center rounded-full border border-[var(--color-border)] bg-[color:color-mix(in_srgb,var(--color-surface-soft)_76%,var(--color-accent)_24%)] text-[var(--color-accent)] transition-transform duration-500 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5">
      {iconNode}
    </span>
  );
}

function ButtonContent({
  children,
  className,
  size = "md",
  variant = "primary",
  icon = "arrow"
}: Pick<ButtonProps, "children" | "className" | "size" | "variant" | "icon">) {
  return (
    <span
      className={cn(
        "group/button inline-flex max-w-full items-center justify-center rounded-full font-medium tracking-[0.01em] transition-[transform,box-shadow,border-color,background-color,color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      <span className="truncate">{children}</span>
      <ButtonIcon icon={icon} />
    </span>
  );
}

export function Button({
  href,
  children,
  className,
  variant = "primary",
  size = "md",
  icon = "arrow",
  target,
  rel,
  ...props
}: ButtonProps) {
  if (href) {
    if (href.startsWith("http")) {
      return (
        <a href={href} className="inline-flex max-w-full" target={target} rel={rel}>
          <ButtonContent className={className} size={size} variant={variant} icon={icon}>
            {children}
          </ButtonContent>
        </a>
      );
    }

    return (
      <Link href={href} className="inline-flex max-w-full">
        <ButtonContent className={className} size={size} variant={variant} icon={icon}>
          {children}
        </ButtonContent>
      </Link>
    );
  }

  return (
    <button className="inline-flex max-w-full bg-transparent" {...props}>
      <ButtonContent className={className} size={size} variant={variant} icon={icon}>
        {children}
      </ButtonContent>
    </button>
  );
}
