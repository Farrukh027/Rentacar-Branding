# Brandium Rent a Car

Premium, dark-only, mobile-first rent-a-car website for Baku built with `Next.js 15`, `TypeScript`, `Tailwind CSS`, `Framer Motion` and reusable local data/config files.

## Setup

```bash
npm install
npm run dev
```

Production:

```bash
npm run build
npm run start
```

## Main structure

```text
app/
  (pages)/
    page.tsx
    avtomobiller/
    xidmetler/
    haqqimizda/
    rezervasiya/
    elaqe/
  layout.tsx
  globals.css
  opengraph-image.tsx
components/
  fleet/
  forms/
  layout/
  shared/
  ui/
data/
  business.ts
  content.ts
  fleet.ts
lib/
  fleet.ts
  seo.ts
  validation.ts
  whatsapp.ts
```

## Where to edit content

- Brand name, phones, Instagram, address, navigation, hero CTA texts:
  `data/business.ts`
- Fleet seed data, categories, prices, specs, badges:
  `data/fleet.ts`
- Services, about copy, testimonials, FAQ, reservation notes:
  `data/content.ts`
- WhatsApp deep links and message templates:
  `lib/whatsapp.ts`
- Global visual system and premium dark theme:
  `app/globals.css`, `styles/utilities.css`

## Current functionality

- Home page with premium hero, booking strip, featured categories, cars, services, FAQ and CTA sections
- Filterable fleet page with category, price, transmission, seats, search and sort
- Single car detail pages with gallery visuals, specs, sticky inquiry card and related cars
- Separate services, about, reservation and contact pages
- Reservation and contact forms with local validation
- WhatsApp redirect flow with prefilled Azerbaijani messages
- SEO metadata, Open Graph route and JSON-LD for `LocalBusiness`, `AutoRental` and vehicles

## Backend / CMS integration notes

The project is structured to connect later to `Supabase`, `Firebase`, a headless CMS or a custom API:

- Replace `data/fleet.ts` with API or CMS fetches in route/page loaders
- Keep `lib/types.ts` as the shared contract between frontend and backend
- Replace `lib/validation.ts` with shared schema validation if server actions or APIs are added
- Keep `lib/whatsapp.ts` for fallback lead generation even after backend integration
- Reservation/contact forms can be switched from WhatsApp redirect to `server actions`, REST endpoints or CRM hooks without rewriting page layouts
