import { SectionHeading } from "@/components/ui/section-heading";
import { whyChooseUs } from "@/data/content";

export function WhyChooseSection() {
  return (
    <section className="section-defer py-18 sm:py-20">
      <SectionHeading
        eyebrow="Niyə Brandium"
        title="Etibar, sürət və baxımlı park hissi ilk baxışdan görünməlidir"
        description="Bu saytın və xidmət modelinin əsas məqsədi qərarı sürətləndirmək və premium hissi aydın göstərməkdir."
      />
      <div className="site-container grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {whyChooseUs.map((item) => (
          <div key={item.title} className="premium-card p-5 sm:p-6">
            {item.metric ? (
              <div className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
                {item.metric}
              </div>
            ) : null}
            <h3 className="mt-3 text-[1.45rem] leading-tight tracking-[-0.03em] text-[var(--color-text)] sm:text-2xl">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)] sm:leading-7">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
