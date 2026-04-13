import { FAQSection } from "@/sections/faq-section";
import { FinalCtaSection } from "@/sections/final-cta-section";
import { HomeCategoriesSection } from "@/sections/home-categories-section";
import { HomeFeaturedCarsSection } from "@/sections/home-featured-cars-section";
import { HomeHero } from "@/sections/home-hero";
import { ProcessSection } from "@/sections/process-section";
import { ServicesSection } from "@/sections/services-section";
import { TestimonialsSection } from "@/sections/testimonials-section";
import { WhyChooseSection } from "@/sections/why-choose-section";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeFeaturedCarsSection />
      <HomeCategoriesSection />
      <WhyChooseSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCtaSection />
    </>
  );
}
