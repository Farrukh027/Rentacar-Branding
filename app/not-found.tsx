import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="py-28 sm:py-36">
      <Container>
        <div className="premium-card mx-auto max-w-3xl px-6 py-12 text-center sm:px-10">
          <div className="text-[11px] uppercase tracking-[0.32em] text-[var(--color-accent)]">
            404
          </div>
          <h1 className="mt-4 font-display text-5xl tracking-[-0.04em] text-[var(--color-text)] sm:text-7xl">
            Bu səhifə tapılmadı
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
            Ola bilər keçid dəyişib və ya artıq mövcud deyil. Uyğun avtomobil və ya xidmət üçün
            əsas səhifədən davam edin.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/">Ana səhifəyə qayıt</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
