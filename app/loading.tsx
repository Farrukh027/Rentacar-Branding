export default function Loading() {
  return (
    <div className="grid min-h-[70vh] place-items-center px-6 pt-28">
      <div className="text-center">
        <div className="mx-auto mb-5 h-14 w-14 animate-pulse rounded-[20px] border border-[var(--color-accent)]/25 bg-[linear-gradient(180deg,rgba(212,178,117,0.16),rgba(255,255,255,0.04))]" />
        <div className="text-[11px] uppercase tracking-[0.32em] text-[var(--color-accent)]">
          Brandium Rent a Car
        </div>
        <div className="mt-4 font-display text-4xl tracking-[-0.04em] text-[var(--color-text)]">
          Premium park yüklənir
        </div>
      </div>
    </div>
  );
}
