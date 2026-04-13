import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const publicRoot = path.join(repoRoot, "public");
const listingsRoot = path.join(publicRoot, "listings");

const listings = [
  {
    id: "brc-hyundai-elantra-cn7-2021-white",
    brand: "Hyundai",
    model: "Elantra",
    generation: "CN7",
    variant: "1.6 MPI",
    year: 2021,
    colorLabel: "Ag",
    colorKey: "white",
    bodyType: "Sedan",
    accent: "#b88d5b"
  },
  {
    id: "brc-kia-cerato-bd-2022-white",
    brand: "Kia",
    model: "Cerato",
    generation: "BD",
    variant: "1.6 MPI",
    year: 2022,
    colorLabel: "Ag",
    colorKey: "white",
    bodyType: "Sedan",
    accent: "#c09962"
  },
  {
    id: "brc-kia-sportage-nq5-2022-grey",
    brand: "Kia",
    model: "Sportage",
    generation: "NQ5",
    variant: "2.0 Comfort",
    year: 2022,
    colorLabel: "Boz",
    colorKey: "grey",
    bodyType: "SUV",
    accent: "#c7a36d"
  },
  {
    id: "brc-kia-optima-jf-2021-black",
    brand: "Kia",
    model: "Optima",
    generation: "JF",
    variant: "2.0 Comfort",
    year: 2021,
    colorLabel: "Qara",
    colorKey: "black",
    bodyType: "Sedan",
    accent: "#b88f58"
  },
  {
    id: "brc-kia-sorento-mq4-2020-grey",
    brand: "Kia",
    model: "Sorento",
    generation: "MQ4",
    variant: "2.2 AWD",
    year: 2020,
    colorLabel: "Boz",
    colorKey: "grey",
    bodyType: "SUV",
    accent: "#cca76b"
  },
  {
    id: "brc-hyundai-santa-fe-tm-2022-black",
    brand: "Hyundai",
    model: "Santa Fe",
    generation: "TM",
    variant: "2.0 AWD",
    year: 2022,
    colorLabel: "Qara",
    colorKey: "black",
    bodyType: "SUV",
    accent: "#d0ad78"
  },
  {
    id: "brc-toyota-prado-j150-2021-black",
    brand: "Toyota",
    model: "Prado",
    generation: "J150",
    variant: "2.8 Diesel",
    year: 2021,
    colorLabel: "Qara",
    colorKey: "black",
    bodyType: "Premium SUV",
    accent: "#d7b47a"
  },
  {
    id: "brc-bmw-f30-2019-white",
    brand: "BMW",
    model: "3 Series",
    generation: "F30",
    variant: "320i",
    year: 2019,
    colorLabel: "Ag",
    colorKey: "white",
    bodyType: "Sedan",
    accent: "#d2a56b"
  },
  {
    id: "brc-bmw-g30-2022-black",
    brand: "BMW",
    model: "5 Series",
    generation: "G30",
    variant: "520i",
    year: 2022,
    colorLabel: "Qara",
    colorKey: "black",
    bodyType: "Sedan",
    accent: "#dab67d"
  },
  {
    id: "brc-hyundai-sonata-dn8-2021-grey",
    brand: "Hyundai",
    model: "Sonata",
    generation: "DN8",
    variant: "2.0 MPI",
    year: 2021,
    colorLabel: "Boz",
    colorKey: "grey",
    bodyType: "Sedan",
    accent: "#c69a61"
  },
  {
    id: "brc-mercedes-g-class-w463-2020-black",
    brand: "Mercedes-Benz",
    model: "G-Class",
    generation: "W463",
    variant: "G 500",
    year: 2020,
    colorLabel: "Qara",
    colorKey: "black",
    bodyType: "Luxury SUV",
    accent: "#e0be8b"
  }
];

const viewLabels = {
  main: "Esas sekil",
  1: "Yan gorunus",
  2: "On bucaq",
  3: "Salon detali"
};

const bodyPaths = {
  sedan:
    "M168 488C213 431 305 392 424 389H820C938 394 1031 431 1090 487L1164 578H95L168 488Z M279 399L356 332H706L815 397Z",
  suv:
    "M142 493C187 422 307 374 445 373H822C975 378 1088 430 1161 496L1223 578H88L142 493Z M258 388L340 314H726L848 384Z",
  premium:
    "M141 494C189 421 309 371 454 372H833C983 377 1097 430 1173 497L1240 578H90L141 494Z M270 387L355 306H748L879 383Z"
};

const heroGradients = [
  ["#0d1017", "#191d26", "#090b11"],
  ["#17120f", "#201814", "#0e0b0a"],
  ["#11161d", "#151a20", "#080a0e"],
  ["#16110e", "#1f1815", "#090807"]
];

function slugify(value) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function buildDirectory(listing) {
  return path.join(
    publicRoot,
    "listings",
    slugify(listing.brand),
    slugify(listing.model),
    slugify(listing.id)
  );
}

function buildStem(listing) {
  return [slugify(listing.brand), slugify(listing.model), listing.year, listing.colorKey].join("-");
}

function buildFileName(listing, role, order = 0) {
  return `${buildStem(listing)}-${role === "main" ? "main" : order}.svg`;
}

function getBodyKey(bodyType) {
  const normalized = bodyType.toLowerCase();
  if (normalized.includes("suv")) {
    return normalized.includes("luxury") || normalized.includes("premium") ? "premium" : "suv";
  }

  return "sedan";
}

function getVehicleFill(colorKey) {
  if (colorKey === "white") return "#f1efe8";
  if (colorKey === "grey") return "#8f949b";
  return "#191919";
}

function getVehicleStroke(colorKey) {
  if (colorKey === "white") return "#d8d0c2";
  if (colorKey === "grey") return "#7a7f87";
  return "#494542";
}

function pickGradient(index) {
  return heroGradients[index % heroGradients.length];
}

function renderSvg(listing, role, order) {
  const [bgA, bgB, bgC] = pickGradient(order);
  const bodyKey = getBodyKey(listing.bodyType);
  const title = `${listing.brand} ${listing.model}`;
  const meta = [listing.generation, listing.variant, `${listing.year}`, listing.colorLabel]
    .filter(Boolean)
    .join(" • ");
  const viewLabel = role === "main" ? viewLabels.main : viewLabels[order];
  const vehicleFill = getVehicleFill(listing.colorKey);
  const vehicleStroke = getVehicleStroke(listing.colorKey);
  const accentSoft = `${listing.accent}33`;
  const accentGlow = `${listing.accent}22`;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="960" viewBox="0 0 1600 960" fill="none">
  <defs>
    <linearGradient id="bg" x1="84" y1="74" x2="1498" y2="885" gradientUnits="userSpaceOnUse">
      <stop stop-color="${bgA}"/>
      <stop offset="0.5" stop-color="${bgB}"/>
      <stop offset="1" stop-color="${bgC}"/>
    </linearGradient>
    <radialGradient id="glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1170 210) rotate(129.473) scale(426 533)">
      <stop stop-color="${accentGlow}"/>
      <stop offset="1" stop-color="#00000000"/>
    </radialGradient>
    <linearGradient id="panel" x1="212" y1="664" x2="1350" y2="664" gradientUnits="userSpaceOnUse">
      <stop stop-color="#181513"/>
      <stop offset="1" stop-color="#101013"/>
    </linearGradient>
    <filter id="shadow" x="58" y="250" width="1284" height="410" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feDropShadow dx="0" dy="18" stdDeviation="24" flood-color="#000000" flood-opacity="0.36"/>
    </filter>
  </defs>
  <rect width="1600" height="960" rx="44" fill="url(#bg)"/>
  <rect width="1600" height="960" rx="44" fill="url(#glow)"/>
  <circle cx="1275" cy="174" r="182" fill="${accentSoft}"/>
  <circle cx="306" cy="770" r="220" fill="${accentGlow}"/>
  <path d="M0 712C290 640 535 612 801 612C1068 612 1319 642 1600 712V960H0V712Z" fill="#0a0a0d"/>
  <g filter="url(#shadow)">
    <path d="${bodyPaths[bodyKey]}" transform="translate(130 0)" fill="${vehicleFill}" stroke="${vehicleStroke}" stroke-width="10" stroke-linejoin="round"/>
    <path d="M503 401H1095" stroke="${listing.accent}" stroke-opacity="0.42" stroke-width="5" stroke-linecap="round"/>
    <path d="M443 532H1204" stroke="#0d0e11" stroke-opacity="0.32" stroke-width="10" stroke-linecap="round"/>
    <circle cx="400" cy="579" r="86" fill="#0e0f12" stroke="${listing.accent}" stroke-opacity="0.85" stroke-width="8"/>
    <circle cx="400" cy="579" r="36" fill="#1f2024" stroke="#f1e8db" stroke-opacity="0.48" stroke-width="4"/>
    <circle cx="1030" cy="579" r="86" fill="#0e0f12" stroke="${listing.accent}" stroke-opacity="0.85" stroke-width="8"/>
    <circle cx="1030" cy="579" r="36" fill="#1f2024" stroke="#f1e8db" stroke-opacity="0.48" stroke-width="4"/>
    <path d="M514 398L610 325H907L1009 396" stroke="#fbf6ef" stroke-opacity="0.22" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M627 330L598 403" stroke="#fbf6ef" stroke-opacity="0.16" stroke-width="5" stroke-linecap="round"/>
    <path d="M856 330L886 403" stroke="#fbf6ef" stroke-opacity="0.16" stroke-width="5" stroke-linecap="round"/>
  </g>
  <rect x="132" y="104" width="338" height="54" rx="27" fill="#fff8ef"/>
  <text x="164" y="139" fill="${listing.accent}" font-size="22" font-family="Arial, Helvetica, sans-serif" letter-spacing="8">${viewLabel.toUpperCase()}</text>
  <text x="132" y="238" fill="#f4ede2" font-size="88" font-weight="700" font-family="Georgia, 'Times New Roman', serif">${title}</text>
  <text x="132" y="292" fill="${listing.accent}" font-size="28" font-family="Arial, Helvetica, sans-serif" letter-spacing="4">${listing.bodyType.toUpperCase()}</text>
  <rect x="132" y="648" width="1336" height="188" rx="32" fill="url(#panel)" stroke="${accentSoft}"/>
  <text x="180" y="718" fill="#f7f0e8" font-size="34" font-weight="600" font-family="Arial, Helvetica, sans-serif">${meta}</text>
  <text x="180" y="776" fill="#b9b2a8" font-size="28" font-family="Arial, Helvetica, sans-serif">${listing.id}</text>
  <text x="1250" y="718" fill="${listing.accent}" font-size="28" font-family="Arial, Helvetica, sans-serif" text-anchor="end">${listing.brand.toUpperCase()}</text>
  <text x="1250" y="776" fill="#f7f0e8" font-size="42" font-weight="700" font-family="Georgia, 'Times New Roman', serif" text-anchor="end">${listing.generation}</text>
</svg>`;
}

if (fs.existsSync(listingsRoot)) {
  fs.rmSync(listingsRoot, { recursive: true, force: true });
}

fs.mkdirSync(listingsRoot, { recursive: true });

for (const listing of listings) {
  const directory = buildDirectory(listing);
  fs.mkdirSync(directory, { recursive: true });

  const mainPath = path.join(directory, buildFileName(listing, "main", 0));
  fs.writeFileSync(mainPath, renderSvg(listing, "main", 0), "utf8");

  for (const order of [1, 2, 3]) {
    const galleryPath = path.join(directory, buildFileName(listing, "gallery", order));
    fs.writeFileSync(galleryPath, renderSvg(listing, "gallery", order), "utf8");
  }
}

console.log(`Generated ${listings.length * 4} listing image assets.`);
