import { ListingMediaAudit } from "@/components/admin/listing-media-audit";
import { PageHero } from "@/components/shared/page-hero";
import { createPageMetadata } from "@/lib/utils";

export const metadata = createPageMetadata(
  "Şəkil audit",
  "Listing şəkillərinin eyni maşına bağlanmasını yoxlayan daxili audit səhifəsi.",
  "/idareetme/sekiller"
);

export default function ListingMediaAuditPage() {
  return (
    <>
      <PageHero
        eyebrow="Daxili audit"
        title="Listing şəkil sistemi və maşın uyğunluğu"
        description="Bu səhifə hər elanın əsas və qalereya şəkillərinin həmin listing-in brend, model, nəsil, rəng və il məlumatı ilə eyni olduğunu yoxlamaq üçündür."
        chips={["Main image tələb olunur", "Dublikatlar bloklanır", "Qovluq strukturu sabitdir"]}
      />
      <section className="pb-20 pt-8">
        <ListingMediaAudit />
      </section>
    </>
  );
}
