import { cars } from "@/data/fleet";
import type { Car, FleetFilterState } from "@/lib/types";

export const defaultFleetFilters: FleetFilterState = {
  category: "Hamısı",
  price: "all",
  transmission: "all",
  seats: "all",
  query: "",
  sort: "popular"
};

export const fleetFilterOptions = {
  categories: ["Hamısı", "Ekonom", "Sedan", "SUV", "Premium", "Toy maşınları"],
  prices: [
    { value: "all", label: "Bütün qiymətlər" },
    { value: "0-70", label: "70 AZN-dək" },
    { value: "70-100", label: "70 - 100 AZN" },
    { value: "100+", label: "100+ AZN" }
  ],
  transmissions: [
    { value: "all", label: "Bütün ötürmələr" },
    { value: "Avtomat", label: "Avtomat" },
    { value: "Mexanika", label: "Mexanika" }
  ],
  seats: [
    { value: "all", label: "Bütün yerlər" },
    { value: "4", label: "4+ yer" },
    { value: "5", label: "5+ yer" },
    { value: "7", label: "7 yer" }
  ],
  sorts: [
    { value: "cheap", label: "Ən ucuz" },
    { value: "expensive", label: "Ən bahalı" },
    { value: "popular", label: "Populyar" }
  ]
} as const;

export function parseFleetFilters(searchParams: URLSearchParams): FleetFilterState {
  return {
    category: searchParams.get("category") || defaultFleetFilters.category,
    price: searchParams.get("price") || defaultFleetFilters.price,
    transmission: searchParams.get("transmission") || defaultFleetFilters.transmission,
    seats: searchParams.get("seats") || defaultFleetFilters.seats,
    query: searchParams.get("query") || defaultFleetFilters.query,
    sort: (searchParams.get("sort") as FleetFilterState["sort"]) || defaultFleetFilters.sort
  };
}

function matchesPriceBand(car: Car, band: string) {
  if (band === "all") {
    return true;
  }

  if (band === "0-70") {
    return car.priceFrom <= 70;
  }

  if (band === "70-100") {
    return car.priceFrom > 70 && car.priceFrom <= 100;
  }

  if (band === "100+") {
    return car.priceFrom > 100;
  }

  return true;
}

export function filterCars(carList: Car[], filters: FleetFilterState) {
  return carList
    .filter((car) =>
      filters.category === "Hamısı" ? true : car.categories.includes(filters.category)
    )
    .filter((car) => matchesPriceBand(car, filters.price))
    .filter((car) =>
      filters.transmission === "all" ? true : car.transmission === filters.transmission
    )
    .filter((car) =>
      filters.seats === "all" ? true : car.seats >= Number(filters.seats)
    )
    .filter((car) => {
      const query = filters.query.trim().toLowerCase();
      if (!query) {
        return true;
      }

      return `${car.name} ${car.typeLabel} ${car.highlight}`.toLowerCase().includes(query);
    })
    .sort((left, right) => {
      if (filters.sort === "cheap") {
        return left.priceFrom - right.priceFrom;
      }

      if (filters.sort === "expensive") {
        return right.priceFrom - left.priceFrom;
      }

      const leftScore = Number(Boolean(left.popular)) + Number(Boolean(left.topPick));
      const rightScore = Number(Boolean(right.popular)) + Number(Boolean(right.topPick));
      return rightScore - leftScore || left.priceFrom - right.priceFrom;
    });
}

export function getCarBySlug(slug: string) {
  return cars.find((car) => car.slug === slug);
}

export function getRelatedCars(car: Car) {
  return cars
    .filter((item) => item.slug !== car.slug)
    .filter((item) => item.categories.some((category) => car.categories.includes(category)))
    .slice(0, 4);
}
