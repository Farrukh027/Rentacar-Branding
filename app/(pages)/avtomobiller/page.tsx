import { FleetCatalog } from "@/components/fleet/fleet-catalog";
import { PageHero } from "@/components/shared/page-hero";
import { createPageMetadata } from "@/lib/utils";

export const metadata = createPageMetadata(
  "Avtomobillər",
  "Brandium Rent a Car parkı: ekonom, sedan, SUV, premium və toy maşınları.",
  "/avtomobiller"
);

export default function FleetPage() {
  return (
    <>
      <PageHero
        eyebrow="Fleet"
        title="Bakıda seçilmiş premium rent-a-car parkı"
        description="Kateqoriya, qiymət, ötürmə və model üzrə axtarın. Kataloq sürətli seçim və birbaşa rezervasiya üçün qurulub."
        chips={["Ekonom", "Sedan", "SUV", "Premium", "Toy maşınları"]}
      />
      <FleetCatalog />
    </>
  );
}
