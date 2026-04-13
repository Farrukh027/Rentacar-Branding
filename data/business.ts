import type {
  BusinessHour,
  CampaignRibbon,
  NavItem,
  TrustBadge
} from "@/lib/types";

export const navigation: NavItem[] = [
  { label: "Ana səhifə", href: "/" },
  { label: "Avtomobillər", href: "/avtomobiller" },
  { label: "Xidmətlər", href: "/xidmetler" },
  { label: "Haqqımızda", href: "/haqqimizda" },
  { label: "Rezervasiya", href: "/rezervasiya" },
  { label: "Əlaqə", href: "/elaqe" }
];

export const business = {
  brandName: "Brandium Rent a Car",
  shortName: "Brandium",
  url: "https://brandiumrentacar.az",
  description:
    "Bakıda premium və sərfəli avtomobil icarəsi. Gündəlik, həftəlik və aylıq icarə, depozitsiz seçimlər, VIP transfer və toy maşınları.",
  primaryPhone: "+994 50 609 00 04",
  secondaryPhone: "+994 55 207 00 04",
  whatsappNumber: "994506090004",
  instagramHandle: "@rentacar_brandium",
  instagramUrl: "https://instagram.com/rentacar_brandium",
  email: "rezerv@brandiumrentacar.az",
  addressLine: "Abbasqulu Abbaszadə, Bakı",
  addressNote: "Oksford məktəbi ilə üzbəüz",
  heroHeadline: "Bakıda premium və sərfəli avtomobil icarəsi",
  heroSubtitle:
    "Gündəlik, həftəlik və aylıq icarə. Depozitsiz seçimlər, VIP transfer, toy maşınları və sürətli rezervasiya.",
  primaryCta: "Avtomobillərə bax",
  secondaryCta: "WhatsApp ilə rezerv et",
  coreServices: [
    "Gündəlik avtomobil icarəsi",
    "Həftəlik avtomobil icarəsi",
    "Aylıq avtomobil icarəsi",
    "Depozitsiz icarə",
    "VIP transfer",
    "Toy maşınları və karteclərin təşkili",
    "Avtomobilin ünvana çatdırılması",
    "Aeroport qarşılama / təhvil"
  ]
} as const;

export const siteConfig = {
  name: business.brandName,
  title: "Brandium Rent a Car | Bakıda premium avtomobil icarəsi",
  description: business.description,
  url: business.url
} as const;

export const campaignRibbon: CampaignRibbon = {
  label: "Yeni mövsüm",
  text: "Depozitsiz seçimlər, sürətli təsdiq və Bakı daxilində çevik təhvil xidməti."
};

export const heroTrustBadges: TrustBadge[] = [
  { label: "Depozitsiz seçimlər", detail: "Seçilmiş modellərdə rahat başlanğıc." },
  { label: "Sürətli təsdiq", detail: "Rezervasiyalar WhatsApp üzərindən çevik təsdiqlənir." },
  { label: "Təmiz və baxımlı avtomobillər", detail: "Hər təhvil öncəsi yoxlama və hazırlıq." },
  { label: "Ünvana çatdırılma", detail: "Bakı daxilində rahat təhvil və geri qəbul." }
];

export const businessHours: BusinessHour[] = [
  { label: "Hər gün", value: "09:00 - 21:00" },
  { label: "WhatsApp", value: "Günün çox hissəsində aktiv cavab" }
];
