import type { Metadata } from "next";
import type { ReactNode } from "react";

import { SiteShell } from "@/components/layout/site-shell";
import { Providers } from "@/components/providers";
import { StructuredData } from "@/components/shared/structured-data";
import { siteConfig } from "@/data/business";
import { buildLocalBusinessSchema } from "@/lib/seo";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "Bakida avtomobil icaresi",
    "rent a car Baku",
    "depozitsiz avtomobil icaresi",
    "premium rent a car",
    "VIP transfer Baki",
    "toy masinlari Baki"
  ],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: "az_AZ",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="az" data-theme="light" suppressHydrationWarning>
      <body>
        <Providers>
          <StructuredData data={buildLocalBusinessSchema()} />
          <SiteShell>{children}</SiteShell>
        </Providers>
      </body>
    </html>
  );
}
