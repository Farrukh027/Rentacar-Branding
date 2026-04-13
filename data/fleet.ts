import { buildCarListingRecord } from "@/data/car-media";
import { assertUniqueListingMediaAssignments } from "@/lib/listing-images";
import type { BaseCar, Car } from "@/lib/types";

const baseCars: BaseCar[] = [
  {
    slug: "hyundai-elantra", name: "Hyundai Elantra", typeLabel: "Ekonom / Sedan", categories: ["Ekonom", "Sedan"], priceFrom: 49,
    pricing: { daily: "49 AZN / gün", weekly: "329 AZN / həftə", monthly: "890 AZN / ay" }, seats: 5, transmission: "Avtomat", fuelType: "Benzin",
    luggage: "2 böyük çamadan", engine: "1.6L", drive: "FWD", deposit: "Depozitsiz paket mövcuddur", delivery: "Ünvana çatdırılma mümkündür", mileageLimit: "Gündəlik uyğun limit", year: 2021,
    highlight: "Şəhərdaxili sürüş üçün sərfəli və rahat seçim.", summary: "Gündəlik iş, görüş və şəhərdaxili rahat istifadə üçün balanslı sedan.", heroTag: "Şəhər üçün ağıllı seçim",
    accent: "#bb8d56", visual: "economy", badges: ["Top seçim", "Depozitsiz"], popular: true, topPick: true,
    features: ["Kondisioner", "Bluetooth və USB bağlantı", "Arxa kamera", "Ailə və fərdi istifadə üçün uyğundur"],
    gallery: [{ title: "Studio görünüş", note: "Premium qaranlıq səhnə", variant: "default" }, { title: "Gecə təqdimatı", note: "Şəhər işıqları ilə", variant: "night" }, { title: "Salon detalı", note: "Səliqəli və rahat interyer", variant: "interior" }]
  },
  {
    slug: "kia-cerato", name: "Kia Cerato", typeLabel: "Ekonom / Sedan", categories: ["Ekonom", "Sedan"], priceFrom: 49,
    pricing: { daily: "49 - 55 AZN / gün", weekly: "349 AZN / həftə", monthly: "930 AZN / ay" }, seats: 5, transmission: "Avtomat", fuelType: "Benzin",
    luggage: "2 böyük çamadan", engine: "1.6L", drive: "FWD", deposit: "Depozitsiz variant sorğu ilə", delivery: "Bakı daxilində çatdırılır", mileageLimit: "Gündəlik uyğun limit", year: 2022,
    highlight: "Səliqəli görünüş və rahat idarəetmə.", summary: "Şəhər üçün rahat, görünüşcə ciddi və qiymət baxımından məntiqli sedan.", heroTag: "Praktik və təqdimatlı",
    accent: "#c09962", visual: "economy", badges: ["Populyar"], popular: true,
    features: ["Apple CarPlay / Android Auto dəstəyi", "Sakit sürüş", "Yanacaq baxımından sərfəli", "Gündəlik və həftəlik paketlər üçün uyğundur"],
    gallery: [{ title: "Ön baxış", note: "Təmiz sedan xətti", variant: "default" }, { title: "Şəhər gecəsi", note: "Parlaq premium ton", variant: "night" }, { title: "Daxili rahatlıq", note: "İstifadə yönümlü salon", variant: "interior" }]
  },
  {
    slug: "kia-sportage", name: "Kia Sportage", typeLabel: "SUV", categories: ["SUV"], priceFrom: 65,
    pricing: { daily: "65 AZN / gün", weekly: "430 AZN / həftə", monthly: "1240 AZN / ay" }, seats: 5, transmission: "Avtomat", fuelType: "Benzin",
    luggage: "3 böyük çamadan", engine: "2.0L", drive: "FWD", deposit: "Şərtlərə görə dəyişir", delivery: "Ünvana təhvil mümkündür", mileageLimit: "Geniş istifadə üçün rahat", year: 2022,
    highlight: "SUV rahatlığı ilə gündəlik etibarlı seçim.", summary: "Yüksək oturuş, ailə komfortu və şəhərdən kənar sürüşlər üçün rahat seçim.", heroTag: "Komfortlu SUV balansı",
    accent: "#c7a36d", visual: "suv", badges: ["Ailə üçün"], popular: true,
    features: ["Geniş salon", "Arxa park sensoru", "Uzun yol üçün komfort", "Ailə və qonaq istifadəsi üçün uyğundur"],
    gallery: [{ title: "Yol üstü təqdimat", note: "Güclü SUV xətti", variant: "default" }, { title: "Axşam görüntüsü", note: "Premium işıq balansı", variant: "night" }, { title: "Komfort detalı", note: "Geniş salon hissi", variant: "interior" }]
  },
  {
    slug: "kia-optima", name: "Kia Optima", typeLabel: "Sedan", categories: ["Sedan"], priceFrom: 65,
    pricing: { daily: "65 AZN / gün", weekly: "430 AZN / həftə", monthly: "1190 AZN / ay" }, seats: 5, transmission: "Avtomat", fuelType: "Benzin",
    luggage: "3 böyük çamadan", engine: "2.0L", drive: "FWD", deposit: "Modelə görə dəyişir", delivery: "Ofis və ünvan təhvili mövcuddur", mileageLimit: "Standart limit", year: 2021,
    highlight: "Biznes görüşləri üçün daha ciddi sedan görünüşü.", summary: "Daha iri sedan rahatlığı və ciddi təqdimat axtaranlar üçün balanslı seçim.", heroTag: "Sedan seqmentində daha premium duruş",
    accent: "#b88f58", visual: "sedan", badges: ["Biznes üçün"],
    features: ["Komfort yönümlü asqı", "Salon genişliyi", "Qara premium interyer hissi", "Gündəlik və həftəlik istifadə üçün uyğundur"],
    gallery: [{ title: "Studio sedan", note: "Zərif xəttlər", variant: "default" }, { title: "Gecə sürüşü", note: "Qızılı aksentlərlə", variant: "night" }, { title: "Salon vurğusu", note: "Rahat oturacaq zonası", variant: "interior" }]
  },
  {
    slug: "kia-sorento", name: "Kia Sorento", typeLabel: "SUV", categories: ["SUV"], priceFrom: 70,
    pricing: { daily: "70 AZN / gün", weekly: "470 AZN / həftə", monthly: "1340 AZN / ay" }, seats: 7, transmission: "Avtomat", fuelType: "Benzin",
    luggage: "4 böyük çamadan", engine: "2.2L", drive: "AWD", deposit: "Şərtə görə", delivery: "Aeroport və ünvan təhvili mümkündür", mileageLimit: "Uzunmüddətli istifadə üçün uyğundur", year: 2020,
    highlight: "7 nəfərlik geniş SUV həlli.", summary: "Ailə, qonaq və daha geniş istifadə ssenariləri üçün praktik SUV.", heroTag: "Geniş park və rahat təhvil",
    accent: "#cca76b", visual: "suv", badges: ["7 yer"],
    features: ["7 oturacaq", "Böyük baqaj sahəsi", "Aeroport və ailəvi transfer üçün uyğundur", "Komfortlu uzun yol sürüşü"],
    gallery: [{ title: "SUV studio", note: "Geniş və güclü siluet", variant: "default" }, { title: "Premium gecə tonu", note: "Ciddi və dinamik", variant: "night" }, { title: "Ailə rahatlığı", note: "Geniş interyer", variant: "interior" }]
  },
  {
    slug: "hyundai-santa-fe", name: "Hyundai Santa Fe", typeLabel: "SUV", categories: ["SUV"], priceFrom: 75,
    pricing: { daily: "75 AZN / gün", weekly: "495 AZN / həftə", monthly: "1390 AZN / ay" }, seats: 5, transmission: "Avtomat", fuelType: "Benzin",
    luggage: "4 böyük çamadan", engine: "2.0L", drive: "AWD", deposit: "Seçimə görə", delivery: "Bakı daxilində mümkündür", mileageLimit: "Rahat limit paketi", year: 2022,
    highlight: "Daha rahat və daha premium SUV hissi.", summary: "Komfort, təhlükəsizlik və ailəvi istifadə üçün çox yönlü SUV.", heroTag: "Rahatlıq və güvən",
    accent: "#d0ad78", visual: "suv", badges: ["Komfort"],
    features: ["Yüksək oturuş mövqeyi", "Ailə və rayon səfərləri üçün uyğundur", "Premium hiss verən interyer tonu", "Çevik çatdırılma imkanı"],
    gallery: [{ title: "Premium SUV", note: "Təmiz və güclü ön baxış", variant: "default" }, { title: "Qaranlıq səhnə", note: "Cazibəli təqdimat", variant: "night" }, { title: "İnteryer fokus", note: "Komfort və səliqə", variant: "interior" }]
  },
  {
    slug: "toyota-prado", name: "Toyota Prado", typeLabel: "Premium SUV", categories: ["SUV", "Premium"], priceFrom: 100,
    pricing: { daily: "100 AZN / gün", weekly: "690 AZN / həftə", monthly: "1890 AZN / ay" }, seats: 7, transmission: "Avtomat", fuelType: "Dizel",
    luggage: "4 böyük çamadan", engine: "2.8L", drive: "4x4", deposit: "Premium şərtlərlə", delivery: "VIP təhvil planlana bilir", mileageLimit: "Müddətə görə uyğunlaşdırılır", year: 2021,
    highlight: "Güclü görünüş, status və geniş istifadə ssenarisi.", summary: "Premium SUV axtaranlar üçün etibar, status və rahatlıq balansı.", heroTag: "Statusu görünən SUV",
    accent: "#d7b47a", visual: "premium", badges: ["Premium SUV", "Top seçim"], popular: true,
    features: ["Yüksək status təqdimatı", "Uzun yol və premium qonaq istifadə üçün uyğundur", "Geniş salon və 7 yer", "VIP təhvil seçimləri"],
    gallery: [{ title: "Prado showcase", note: "Güclü premium duruş", variant: "default" }, { title: "Gecə premium", note: "Qızılı işıq xətti", variant: "night" }, { title: "Salon rahatlığı", note: "Yüksək səviyyəli interyer hissi", variant: "interior" }]
  },
  {
    slug: "bmw-f30", name: "BMW F30", typeLabel: "Premium", categories: ["Premium", "Sedan"], priceFrom: 99,
    pricing: { daily: "99 AZN / gün", weekly: "670 AZN / həftə", monthly: "1790 AZN / ay" }, seats: 5, transmission: "Avtomat", fuelType: "Benzin",
    luggage: "3 böyük çamadan", engine: "2.0L Turbo", drive: "RWD", deposit: "Premium şərt tətbiq oluna bilər", delivery: "Ofis və ünvan təhvili", mileageLimit: "Standart premium paket", year: 2019,
    highlight: "Sürüş hissi və premium təqdimatı ilə seçilir.", summary: "Dinamik sürüş və fərqli görünüş istəyən müştərilər üçün premium sedan.", heroTag: "Sürüşdən zövq alanlar üçün",
    accent: "#d2a56b", visual: "premium", badges: ["Populyar premium"], popular: true, topPick: true,
    features: ["Dinamik idarəetmə", "Premium salon atmosferi", "Biznes və xüsusi istifadə üçün uyğundur", "Şəhər və tədbir üçün fərqli görünüş"],
    gallery: [{ title: "BMW studio", note: "Premium sedan enerjisi", variant: "default" }, { title: "Qaranlıq şəhər", note: "Sport və premium balansı", variant: "night" }, { title: "İnteryer detalı", note: "Sürücü yönümlü kokpit", variant: "interior" }]
  },
  {
    slug: "bmw-g30", name: "BMW G30", typeLabel: "Premium", categories: ["Premium", "Sedan"], priceFrom: 135,
    pricing: { daily: "Premium qiymət sorğu ilə", weekly: "Sorğu ilə", monthly: "Sorğu ilə" }, seats: 5, transmission: "Avtomat", fuelType: "Benzin",
    luggage: "3 böyük çamadan", engine: "2.0L Turbo", drive: "RWD", deposit: "Sorğu ilə", delivery: "Şəxsi təhvil planlana bilir", mileageLimit: "Müddətə görə təklif olunur", year: 2022,
    highlight: "Daha üst seqment premium sedan təəssüratı.", summary: "Yüksək səviyyəli biznes görüşləri və fərqli premium təqdimat üçün seçilir.", heroTag: "Flagship premium sedan",
    accent: "#dab67d", visual: "premium", badges: ["Sorğu ilə", "Executive"],
    features: ["Executive səviyyəli salon hissi", "VIP qonaq və biznes istifadə üçün uyğundur", "Yüksək komfort", "Brend təqdimatını gücləndirən görünüş"],
    gallery: [{ title: "Executive görünüş", note: "Daha sakit premium dil", variant: "default" }, { title: "Axşam tonu", note: "Lüks təqdimat", variant: "night" }, { title: "Salon premium", note: "İncə detal hissi", variant: "interior" }]
  },
  {
    slug: "hyundai-sonata", name: "Hyundai Sonata", typeLabel: "Sedan", categories: ["Sedan"], priceFrom: 69,
    pricing: { daily: "Qiymət redaktə edilə bilər", weekly: "Sorğu ilə", monthly: "Sorğu ilə" }, seats: 5, transmission: "Avtomat", fuelType: "Benzin",
    luggage: "3 böyük çamadan", engine: "2.0L", drive: "FWD", deposit: "Şərtə görə", delivery: "Mümkündür", mileageLimit: "Standart paket", year: 2021,
    highlight: "Komfort və təqdimat balansı olan iri sedan.", summary: "Daha yumşaq sürüş və sakit interyer axtaranlar üçün uyğun sedan.", heroTag: "Rahat biznes sedanı",
    accent: "#c69a61", visual: "sedan", badges: ["Editable price"],
    features: ["Sakit interyer hissi", "Geniş salon", "Gündəlik və biznes istifadə üçün uyğun", "Çevik təklif paketi"],
    gallery: [{ title: "Sedan lounge", note: "Rahat və təmiz dil", variant: "default" }, { title: "Şəhər axşamı", note: "Zərif premium işıq", variant: "night" }, { title: "Salon görüntüsü", note: "Yumşaq komfort hissi", variant: "interior" }]
  },
  {
    slug: "mercedes-g-class", name: "Mercedes G-Class", typeLabel: "Wedding / Luxury", categories: ["Premium", "Toy maşınları"], priceFrom: 250,
    pricing: { daily: "Toy və premium event qiyməti sorğu ilə", weekly: "Sorğu ilə", monthly: "Sorğu ilə" }, seats: 5, transmission: "Avtomat", fuelType: "Benzin",
    luggage: "3 böyük çamadan", engine: "4.0L", drive: "4x4", deposit: "Event şərtləri ilə", delivery: "Yalnız planlı təhvil", mileageLimit: "Sifariş növünə görə", year: 2020,
    highlight: "Toy və xüsusi günlər üçün diqqət mərkəzində qalan seçim.", summary: "Luxury event, toy və premium çəkiliş ssenariləri üçün fərqli status avtomobili.", heroTag: "Xüsusi gün üçün güclü təqdimat",
    accent: "#e0be8b", visual: "wedding", badges: ["Toy seçimi", "Luxury"], topPick: true,
    features: ["Toy və event sifarişi üçün uyğundur", "Güclü vizual təqdimat", "Kortej planına uyğun koordinasiya", "VIP və premium tədbirlər üçün uyğundur"],
    gallery: [{ title: "Luxury show", note: "Tədbir üçün fərqli təqdimat", variant: "default" }, { title: "Event night", note: "Qızılı səhnə tonu", variant: "night" }, { title: "Salon lüksü", note: "Daha yüksək seqment hissi", variant: "interior" }]
  }
];

export const cars: Car[] = baseCars.map((car) => buildCarListingRecord(car));

assertUniqueListingMediaAssignments(cars);
