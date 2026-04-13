import { Accordion } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqItems } from "@/data/content";

export function FAQSection() {
  return (
    <section className="section-defer py-18 sm:py-20">
      <SectionHeading
        eyebrow="FAQ"
        title="Rezervasiyadan əvvəl ən çox verilən suallar"
        description="Müştərinin qərarını gecikdirən əsas suallar üçün qısa və aydın cavablar."
      />
      <div className="site-container">
        <Accordion items={faqItems} />
      </div>
    </section>
  );
}
