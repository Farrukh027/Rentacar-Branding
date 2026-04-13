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
    "border border-[color:color-mix(in_srgb,var(--color-accent)_42%,transparent)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-accent)_18%,transparent),color-mix(in_srgb,var(--color-surface-soft)_92%,transparent))] text-[var(--color-text)] shadow-[0_10px_24px_color-mix(in_srgb,var(--color-accent)_14%,transparent)] hover:border-[var(--color-accent)]",
  secondary:
    "border border-[var(--color-border)] bg-[var(--color-surface-soft)] text-[var(--color-text)] hover:border-[color:color-mix(in_srgb,var(--color-accent)_35%,transparent)] hover:bg-[color:color-mix(in_srgb,var(--color-surface-soft)_84%,var(--color-accent)_16%)]",
  ghost:
    "border border-transparent bg-transparent text-[var(--color-text)] hover:border-[var(--color-border)] hover:bg-[var(--color-surface-soft)]"
} as const;

const sizeClasses = {
  sm: "min-h-10 gap-2 px-3.5 py-2 text-[13px]",
  md: "min-h-12 gap-2.5 px-5 py-2.5 text-sm",
  lg: "min-h-14 gap-3 px-6 py-3 text-sm"
} as const;

function ButtonIcon({ icon }: { icon: ButtonProps["icon"] }) {
  if (icon === "none") return null;

  return (
    <span className="grid size-7 shrink-0 place-items-center rounded-full border border-[var(--color-border)] bg-[color:color-mix(in_srgb,var(--color-surface-soft)_76%,var(--color-accent)_24%)] text-[var(--color-accent)] transition-transform duration-200 md:group-hover/button:translate-x-0.5 md:group-hover/button:-translate-y-0.5">
      {icon === "whatsapp" ? <MessageCircleMore className="size-4" /> : <ArrowUpRight className="size-4" />}
    </span>
  );
}

function ButtonContent({
  children,
  className,
  size = "md",
  variant = "primary",
  icon = "arrow",
  fillWidth = false
}: Pick<ButtonProps, "children" | "className" | "size" | "variant" | "icon"> & {
  fillWidth?: boolean;
}) {
  return (
    <span
      className={cn(
        "group/button inline-flex max-w-full items-center justify-center rounded-full font-medium tracking-[0.01em] transition-[transform,box-shadow,border-color,background-color,color,opacity] duration-200 ease-out disabled:pointer-events-none disabled:opacity-50 md:hover:-translate-y-0.5",
        fillWidth && "w-full",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      <span className="min-w-0 text-balance text-center leading-[1.25] whitespace-normal">{children}</span>
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
  const shouldFillWidth = className?.includes("w-full") ?? false;
  const wrapperClassName = cn("inline-flex max-w-full align-middle", shouldFillWidth && "w-full");

  if (href) {
    if (href.startsWith("http")) {
      return (
        <a href={href} className={wrapperClassName} target={target} rel={rel}>
          <ButtonContent
            className={className}
            size={size}
            variant={variant}
            icon={icon}
            fillWidth={shouldFillWidth}
          >
            {children}
          </ButtonContent>
        </a>
      );
    }

    return (
      <Link href={href} className={wrapperClassName}>
        <ButtonContent
          className={className}
          size={size}
          variant={variant}
          icon={icon}
          fillWidth={shouldFillWidth}
        >
          {children}
        </ButtonContent>
      </Link>
    );
  }

  return (
    <button className={cn(wrapperClassName, "bg-transparent")} {...props}>
      <ButtonContent
        className={className}
        size={size}
        variant={variant}
        icon={icon}
        fillWidth={shouldFillWidth}
      >
        {children}
      </ButtonContent>
    </button>
  );
}
