import {
  Banknote,
  CalendarRange,
  CarFront,
  Crown,
  Gem,
  MapPinned,
  PlaneLanding,
  ShieldCheck,
  Sparkles
} from "lucide-react";

import { cn } from "@/lib/utils";

type FeatureIconProps = {
  icon:
    | "economy"
    | "sedan"
    | "suv"
    | "premium"
    | "wedding"
    | "transfer"
    | "calendar"
    | "shield"
    | "crown"
    | "sparkles"
    | "plane"
    | "map"
    | "car";
  className?: string;
};

const icons = {
  economy: Banknote,
  sedan: CarFront,
  suv: CarFront,
  premium: Gem,
  wedding: Sparkles,
  transfer: Crown,
  calendar: CalendarRange,
  shield: ShieldCheck,
  crown: Crown,
  sparkles: Sparkles,
  plane: PlaneLanding,
  map: MapPinned,
  car: CarFront
} as const;

export function FeatureIcon({ icon, className }: FeatureIconProps) {
  const Icon = icons[icon];

  return (
    <span
      className={cn(
        "grid h-12 w-12 place-items-center rounded-[18px] border border-[var(--color-accent)]/20 bg-[linear-gradient(180deg,rgba(212,178,117,0.16),rgba(255,255,255,0.03))] text-[var(--color-accent)]",
        className
      )}
    >
      <Icon className="size-5" />
    </span>
  );
}
