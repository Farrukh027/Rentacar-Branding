import { howItWorks } from "@/data/content";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProcessSection() {
  return (
    <section className="py-18 sm:py-20">
      <SectionHeading
        eyebrow="Necə işləyir"
        title="Sadə 3 addım, sürətli qərar"
        description="Saytda məqsəd müştərini uzun prosesə salmaq deyil, seçimi aydınlaşdırıb rezervasiyanı sürətləndirməkdir."
      />
      <div className="site-container grid gap-4 md:grid-cols-3">
        {howItWorks.map((item) => (
          <div key={item.step} className="premium-card p-6">
            <div className="text-[11px] uppercase tracking-[0.34em] text-[var(--color-accent)]">Addım {item.step}</div>
            <h3 className="mt-4 text-2xl tracking-[-0.03em] text-[var(--color-text)]">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
