import type { Metadata } from "next";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { siteConfig } from "@/data/business";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path = "") {
  return `${siteConfig.url}${path}`;
}

export function formatPhoneHref(phone: string) {
  return `tel:${phone.replace(/\s+/g, "")}`;
}

export function createPageMetadata(title: string, description: string, path = ""): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "az_AZ",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}
