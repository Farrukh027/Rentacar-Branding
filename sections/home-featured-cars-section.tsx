import { CarCard } from "@/components/fleet/car-card";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { cars } from "@/data/fleet";

export function HomeFeaturedCarsSection() {
  const featured = cars.slice(0, 6);

  return (
    <section className="section-defer py-14 sm:py-20">
      <SectionHeading
        eyebrow="Elanlar"
        title="Populyar avtomobillər"
        description="Ən çox soruşulan və sürətli rezervasiya axınına ən uyğun avtomobillər."
        action={
          <Button href="/avtomobiller" variant="secondary" size="sm">
            Tam kataloq
          </Button>
        }
      />
      <div className="site-container grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-3 xl:gap-5">
        {featured.map((car) => (
          <CarCard key={car.slug} car={car} />
        ))}
      </div>
    </section>
  );
}
