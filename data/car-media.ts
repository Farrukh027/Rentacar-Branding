type CarMediaEntry = {
  cover: string;
  position?: string;
  detailPosition?: string;
};

export const carMedia: Record<string, CarMediaEntry> = {
  "hyundai-elantra": {
    cover:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d8?auto=format&fit=crop&w=1600&q=80",
    position: "center 58%",
    detailPosition: "center 54%"
  },
  "kia-cerato": {
    cover:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80",
    position: "center 58%",
    detailPosition: "center 56%"
  },
  "kia-sportage": {
    cover:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1600&q=80",
    position: "center 60%",
    detailPosition: "center 56%"
  },
  "kia-optima": {
    cover:
      "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?auto=format&fit=crop&w=1600&q=80",
    position: "center 56%",
    detailPosition: "center 54%"
  },
  "kia-sorento": {
    cover:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1600&q=80",
    position: "center 58%",
    detailPosition: "center 56%"
  },
  "hyundai-santa-fe": {
    cover:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=80",
    position: "center 56%",
    detailPosition: "center 54%"
  },
  "toyota-prado": {
    cover:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=80",
    position: "center 56%",
    detailPosition: "center 52%"
  },
  "bmw-f30": {
    cover:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1600&q=80",
    position: "center 58%",
    detailPosition: "center 54%"
  },
  "bmw-g30": {
    cover:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80",
    position: "center 58%",
    detailPosition: "center 54%"
  },
  "hyundai-sonata": {
    cover:
      "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1600&q=80",
    position: "center 57%",
    detailPosition: "center 54%"
  },
  "mercedes-g-class": {
    cover:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1600&q=80",
    position: "center 54%",
    detailPosition: "center 50%"
  }
};

const fallbackMedia: CarMediaEntry = {
  cover:
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d8?auto=format&fit=crop&w=1600&q=80",
  position: "center 56%",
  detailPosition: "center 54%"
};

export function getCarMedia(slug: string) {
  return carMedia[slug] ?? fallbackMedia;
}
