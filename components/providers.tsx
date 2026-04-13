"use client";

import type { ReactNode } from "react";

import { ScrollProgress } from "@/components/ui/scroll-progress";
import { ThemeProvider } from "@/components/ui/theme-provider";

type ProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider>
      <ScrollProgress />
      {children}
    </ThemeProvider>
  );
}
