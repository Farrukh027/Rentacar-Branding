"use client";

import {
  useCallback,
  useDeferredValue,
  useEffect,
  useMemo,
  useState,
  useTransition
} from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { CarCard } from "@/components/fleet/car-card";
import { Button } from "@/components/ui/button";
import { cars } from "@/data/fleet";
import {
  defaultFleetFilters,
  filterCars,
  fleetFilterOptions,
  parseFleetFilters
} from "@/lib/fleet";
import type { FleetFilterState } from "@/lib/types";
import { cn } from "@/lib/utils";

const initialVisibleCount = 6;

export function FleetCatalog() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [filters, setFilters] = useState<FleetFilterState>(() =>
    parseFleetFilters(new URLSearchParams(searchParams.toString()))
  );
  const [queryInput, setQueryInput] = useState(filters.query);
  const deferredQuery = useDeferredValue(queryInput);
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);

  useEffect(() => {
    const nextFilters = parseFleetFilters(new URLSearchParams(searchParams.toString()));
    setFilters(nextFilters);
    setQueryInput(nextFilters.query);
  }, [searchParams]);

  useEffect(() => {
    setVisibleCount(initialVisibleCount);
  }, [filters.category, filters.price, filters.transmission, filters.seats, filters.sort, queryInput]);

  const filteredCars = useMemo(
    () => filterCars(cars, { ...filters, query: deferredQuery.trim() }),
    [deferredQuery, filters]
  );

  const syncUrl = useCallback(
    (next: FleetFilterState) => {
      const params = new URLSearchParams();

      if (next.category !== defaultFleetFilters.category) params.set("category", next.category);
      if (next.price !== defaultFleetFilters.price) params.set("price", next.price);
      if (next.transmission !== defaultFleetFilters.transmission) {
        params.set("transmission", next.transmission);
      }
      if (next.seats !== defaultFleetFilters.seats) params.set("seats", next.seats);
      if (next.query) params.set("query", next.query);
      if (next.sort !== defaultFleetFilters.sort) params.set("sort", next.sort);

      startTransition(() => {
        router.replace(params.toString() ? `${pathname}?${params.toString()}` : pathname, {
          scroll: false
        });
      });
    },
    [pathname, router]
  );

  useEffect(() => {
    const normalizedQuery = queryInput.trim();
    if (normalizedQuery === filters.query) return;

    const timer = window.setTimeout(() => {
      setFilters((current) => {
        const next = { ...current, query: normalizedQuery };
        syncUrl(next);
        return next;
      });
    }, 220);

    return () => window.clearTimeout(timer);
  }, [filters.query, queryInput, syncUrl]);

  function updateFilters(partial: Partial<FleetFilterState>) {
    const next = { ...filters, ...partial };
    setFilters(next);
    syncUrl(next);
  }

  function resetFilters() {
    setFilters(defaultFleetFilters);
    setQueryInput(defaultFleetFilters.query);
    syncUrl(defaultFleetFilters);
  }

  const filterControls = (
    <FilterControls
      filters={filters}
      queryInput={queryInput}
      onQueryChange={setQueryInput}
      onChange={updateFilters}
      onReset={resetFilters}
    />
  );

  return (
    <section className="pb-20 pt-8 sm:pt-10">
      <div className="site-container grid gap-6 xl:grid-cols-[280px_1fr]">
        <div className="xl:hidden">
          <details className="premium-card group p-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-left">
              <div>
                <div className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
                  Filtrlər
                </div>
                <div className="mt-1 text-sm leading-6 text-[var(--color-text)]">
                  Kateqoriya, qiymət və model üzrə seçin
                </div>
              </div>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-soft)] text-[var(--color-accent)]">
                <SlidersHorizontal className="size-4" />
              </span>
            </summary>
            <div className="pt-4">{filterControls}</div>
          </details>
        </div>

        <aside className="hidden xl:block">
          <div className="premium-card h-fit p-5">{filterControls}</div>
        </aside>

        <div>
          <div className="mb-5 flex flex-col gap-3 rounded-[24px] border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
            <div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-accent)]">
                Kataloq
              </div>
              <div className="mt-2 text-base text-[var(--color-text)] sm:text-lg">
                {filteredCars.length} uyğun avtomobil tapıldı
              </div>
            </div>
            <div
              className={cn(
                "hidden text-sm text-[var(--color-muted)] sm:block",
                isPending && "animate-pulse"
              )}
            >
              Filtrlər sürətli şəkildə yenilənir
            </div>
          </div>

          {filteredCars.length ? (
            <>
              <div className="grid grid-cols-2 gap-2.5 sm:gap-4 xl:grid-cols-3 xl:gap-5">
                {filteredCars.slice(0, visibleCount).map((car) => (
                  <CarCard key={car.slug} car={car} />
                ))}
              </div>
              {visibleCount < filteredCars.length ? (
                <div className="mt-8 flex justify-center">
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => setVisibleCount((current) => current + initialVisibleCount)}
                  >
                    Daha çox göstər
                  </Button>
                </div>
              ) : null}
            </>
          ) : (
            <div className="premium-card px-5 py-12 text-center sm:px-6 sm:py-14">
              <div className="text-[11px] uppercase tracking-[0.32em] text-[var(--color-accent)]">
                Nəticə yoxdur
              </div>
              <h2 className="mt-4 font-display text-[2rem] tracking-[-0.04em] text-[var(--color-text)] sm:text-4xl">
                Bu filtrə uyğun model tapılmadı
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[var(--color-muted)] sm:text-base sm:leading-7">
                Filtrləri sıfırlayın və ya daha geniş kateqoriya seçin. Alternativ olaraq birbaşa
                WhatsApp ilə ehtiyacınızı yazın.
              </p>
              <div className="mt-8 flex justify-center">
                <Button type="button" onClick={resetFilters}>
                  Filtrləri sıfırla
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

type FilterControlsProps = {
  filters: FleetFilterState;
  queryInput: string;
  onQueryChange: (value: string) => void;
  onChange: (partial: Partial<FleetFilterState>) => void;
  onReset: () => void;
};

function FilterControls({
  filters,
  queryInput,
  onQueryChange,
  onChange,
  onReset
}: FilterControlsProps) {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[11px] uppercase tracking-[0.32em] text-[var(--color-accent)]">
            Filtrlər
          </div>
          <div className="mt-2 text-lg text-[var(--color-text)]">Uyğun modeli seçin</div>
        </div>
        <button
          type="button"
          onClick={onReset}
          className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
        >
          Sıfırla
        </button>
      </div>

      <div className="mt-5 space-y-4">
        <label className="grid gap-2">
          <span className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
            Model axtar
          </span>
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[var(--color-muted)]" />
            <input
              value={queryInput}
              onChange={(event) => onQueryChange(event.target.value)}
              inputMode="search"
              placeholder="BMW, Prado, Elantra..."
              className="h-12 w-full rounded-[18px] border border-[var(--color-border)] bg-[var(--color-surface-soft)] pl-11 pr-4 text-sm outline-none transition-colors focus:border-[var(--color-accent)]/45"
            />
          </div>
        </label>

        <FilterSelect
          label="Kateqoriya"
          value={filters.category}
          onChange={(value) => onChange({ category: value })}
          options={fleetFilterOptions.categories.map((item) => ({ value: item, label: item }))}
        />
        <FilterSelect
          label="Qiymət"
          value={filters.price}
          onChange={(value) => onChange({ price: value })}
          options={fleetFilterOptions.prices}
        />
        <FilterSelect
          label="Ötürmə"
          value={filters.transmission}
          onChange={(value) => onChange({ transmission: value })}
          options={fleetFilterOptions.transmissions}
        />
        <FilterSelect
          label="Oturacaq sayı"
          value={filters.seats}
          onChange={(value) => onChange({ seats: value })}
          options={fleetFilterOptions.seats}
        />
        <FilterSelect
          label="Sıralama"
          value={filters.sort}
          onChange={(value) => onChange({ sort: value as FleetFilterState["sort"] })}
          options={fleetFilterOptions.sorts}
        />
      </div>
    </>
  );
}

type FilterSelectProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: ReadonlyArray<{ value: string; label: string }>;
};

function FilterSelect({ label, value, onChange, options }: FilterSelectProps) {
  return (
    <label className="grid gap-2">
      <span className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 w-full rounded-[18px] border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-4 text-sm outline-none transition-colors focus:border-[var(--color-accent)]/45"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
