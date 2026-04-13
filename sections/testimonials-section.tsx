import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/data/content";

export function TestimonialsSection() {
  return (
    <section className="section-defer py-18 sm:py-20">
      <SectionHeading
        eyebrow="Müştəri rəyləri"
        title="Qısa, real və inandırıcı təcrübələr"
        description="Yerli bazarda sürət, təmizlik və düzgün ünsiyyət ən çox dəyər yaradan hissələrdir."
      />
      <div className="site-container grid gap-4 lg:grid-cols-3">
        {testimonials.map((item) => (
          <blockquote key={item.name} className="premium-card p-5 sm:p-6">
            <p className="text-base leading-7 text-[var(--color-text)] sm:text-lg sm:leading-8">
              “{item.quote}”
            </p>
            <footer className="mt-6 border-t border-white/8 pt-4">
              <div className="font-medium text-[var(--color-text)]">{item.name}</div>
              <div className="text-sm text-[var(--color-muted)]">{item.role}</div>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
