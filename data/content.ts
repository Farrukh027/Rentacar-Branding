import type {
  Advantage,
  CategorySpotlight,
  FaqItem,
  HowItWorksStep,
  ServiceDetail,
  Testimonial
} from "@/lib/types";

export const featuredCategories: CategorySpotlight[] = [
  {
    title: "Ekonom",
    subtitle: "Şəhər üçün sərfəli seçim",
    description: "Gündəlik hərəkət, qısa səfərlər və praktik büdcə üçün ideal modellər.",
    href: "/avtomobiller?category=Ekonom",
    metric: "49 AZN-dən",
    icon: "economy"
  },
  {
    title: "Sedan",
    subtitle: "Rahatlıq və balans",
    description: "Ailə, iş görüşləri və şəhərdaxili premium görünüş üçün rahat sedanlar.",
    href: "/avtomobiller?category=Sedan",
    metric: "49 AZN-dən",
    icon: "sedan"
  },
  {
    title: "SUV",
    subtitle: "Daha çox güvən və komfort",
    description: "Həm şəhər, həm də rayon istiqamətləri üçün geniş və rahat seçimlər.",
    href: "/avtomobiller?category=SUV",
    metric: "65 AZN-dən",
    icon: "suv"
  },
  {
    title: "Premium",
    subtitle: "Status və təəssürat",
    description: "Daha yüksək səviyyə, daha güclü görünüş və biznes görüşləri üçün fərqli park.",
    href: "/avtomobiller?category=Premium",
    metric: "99 AZN-dən",
    icon: "premium"
  },
  {
    title: "Toy maşınları",
    subtitle: "Xüsusi gün üçün fərqli təqdimat",
    description: "Toy və premium tədbirlər üçün diqqət çəkən modellər və kortej həlləri.",
    href: "/xidmetler#toy-masinlari",
    metric: "Sorğu ilə",
    icon: "wedding"
  },
  {
    title: "VIP transfer",
    subtitle: "Sürücü ilə komfortlu servis",
    description: "Aeroport, biznes görüşü və qonaq qarşılaması üçün premium transfer xidməti.",
    href: "/xidmetler#vip-transfer",
    metric: "24/7 planlana bilir",
    icon: "transfer"
  }
];

export const whyChooseUs: Advantage[] = [
  {
    title: "Şəffaf qiymətlər",
    description: "Qiymət mesajı aydındır, sürpriz xərclərlə etibarı zədələmirik.",
    metric: "Aydın şərtlər"
  },
  {
    title: "Depozitsiz seçimlər",
    description: "Bəzi modellərdə daha rahat rezervasiya üçün depozitsiz paketlər təqdim edirik.",
    metric: "Rahat başlanğıc"
  },
  {
    title: "Təmiz və baxımlı park",
    description: "Maşınlar müntəzəm baxışdan keçirilir və təhvil öncəsi vizual olaraq hazırlanır.",
    metric: "Hazır təhvil"
  },
  {
    title: "Sürətli WhatsApp rezervasiya",
    description: "Ən qısa yoldan tarix göndərin, uyğunluğu təsdiqləyək və prosesi sürətləndirək.",
    metric: "Birbaşa əlaqə"
  },
  {
    title: "VIP transfer və toy xidməti",
    description: "Sadəcə günlük icarə deyil, xüsusi günlər və premium logistika üçün də həll veririk.",
    metric: "Xüsusi xidmət"
  },
  {
    title: "Təhvil və çatdırılma rahatlığı",
    description: "Avtomobili uyğun nöqtədə götürmək və qaytarmaq daha rahat olsun deyə çevik işləyirik.",
    metric: "Bakı daxilində çevik"
  }
];

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "gundelik-icare",
    title: "Gündəlik icarə",
    summary: "Tez qərar, sürətli təhvil, rahat sürüş.",
    description:
      "Şəhərdaxili istifadə, qısa səfər və çevik ehtiyaclar üçün gündəlik icarə paketləri sürətli təsdiq və təmiz təhvil ilə təqdim olunur.",
    bullets: ["Şəhər üçün praktik modellər", "WhatsApp üzərindən çevik təsdiq", "Götür və sür modeli"],
    anchor: "gundelik-icare",
    icon: "calendar"
  },
  {
    slug: "heftelik-icare",
    title: "Həftəlik icarə",
    summary: "Daha sərfəli müddət, daha rahat planlama.",
    description:
      "Bir neçə günlük iş səfəri, qonaq yerləşdirilməsi və ya ailəvi istifadə üçün həftəlik paketlər daha balanslı qiymət və rahatlıq yaradır.",
    bullets: ["Gündəlikdən daha sərfəli yanaşma", "Ailə və iş səfəri üçün uyğundur", "Model seçimi genişdir"],
    anchor: "heftelik-icare",
    icon: "calendar"
  },
  {
    slug: "ayliq-icare",
    title: "Aylıq icarə",
    summary: "Uzunmüddətli istifadə üçün stabil həll.",
    description:
      "Layihə işləri, korporativ ehtiyac və şəxsi rahat istifadə üçün aylıq icarə həm büdcə, həm də servis baxımından daha praktik seçimdir.",
    bullets: ["Biznes və fərdi istifadə üçün", "Aylıq sabit planlama", "Çatdırılma seçimləri mümkündür"],
    anchor: "ayliq-icare",
    icon: "calendar"
  },
  {
    slug: "toy-masinlari",
    title: "Toy maşınları",
    summary: "Xüsusi günə uyğun fərqli təqdimat.",
    description:
      "Toy günü üçün tək avtomobil və ya kortej həlli, vizual təəssürat və vaxtında xidmət prinsipi ilə planlanır.",
    bullets: ["Luxury və event yönümlü modellər", "Kortej təşkili", "Qrafikə uyğun dəqiq koordinasiya"],
    anchor: "toy-masinlari",
    icon: "sparkles"
  },
  {
    slug: "vip-transfer",
    title: "VIP transfer",
    summary: "Qonaq qarşılaması üçün sakit və premium servis.",
    description:
      "Aeroport, otel, biznes görüşü və özəl tədbirlər üçün sürücülü premium transfer xidməti təqdim olunur.",
    bullets: ["Sürücü ilə servis", "Aeroport və biznes görüşləri üçün", "Premium təqdimat"],
    anchor: "vip-transfer",
    icon: "crown"
  },
  {
    slug: "aeroport-qarsilama",
    title: "Aeroport qarşılama",
    summary: "Gəliş və gediş üçün rahat koordinasiya.",
    description:
      "Bakı hava limanında qarşılanma, avtomobil təhvili və ya sürücülü transfer planı ilə proses daha rahat idarə olunur.",
    bullets: ["Qarşılama və təhvil", "Qonaqlar üçün rahat həll", "Əvvəlcədən planlanan servis"],
    anchor: "aeroport-qarsilama",
    icon: "plane"
  },
  {
    slug: "unvana-catdirilma",
    title: "Ünvana çatdırılma",
    summary: "Vaxta qənaət edən rahat xidmət.",
    description:
      "Seçilmiş avtomobili ünvanınıza çatdırmaq və ya uyğun nöqtədə təhvil etmək üçün çevik şəhərdaxili servis mövcuddur.",
    bullets: ["Bakı daxilində rahat həll", "İş və ev ünvanına çatdırılma", "Təhvil prosesində vaxt qənaəti"],
    anchor: "unvana-catdirilma",
    icon: "map"
  },
  {
    slug: "depozitsiz-teklifler",
    title: "Depozitsiz təkliflər",
    summary: "Daha az maneə ilə rezervasiya.",
    description:
      "Uyğun modellərdə və uyğun tarixlərdə depozitsiz təkliflər təqdim edərək rezervasiya prosesini daha rahat edirik.",
    bullets: ["Seçilmiş modellər üçün keçərlidir", "WhatsApp ilə sürətli dəqiqləşmə", "Çevik kampaniya əsaslı təkliflər"],
    anchor: "depozitsiz-teklifler",
    icon: "shield"
  }
];

export const howItWorks: HowItWorksStep[] = [
  {
    step: "01",
    title: "Maşını seç",
    description: "Parka baxın, sizə uyğun modeli və kateqoriyanı müəyyən edin."
  },
  {
    step: "02",
    title: "Tarixi göndər",
    description: "Pick-up və return tarixini WhatsApp və ya forma ilə paylaşın."
  },
  {
    step: "03",
    title: "Təsdiqi al və sür",
    description: "Uyğunluq təsdiqləndikdən sonra təhvil nöqtəsini razılaşdırıb yola çıxın."
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "Rəşad Məmmədov",
    role: "Satış meneceri",
    quote:
      "Maşın təmiz idi, proses uzanmadı. WhatsApp ilə yazdım, tarix təsdiqləndi və təhvil hissəsi çox rahat keçdi."
  },
  {
    name: "Nərgiz Əliyeva",
    role: "Toy təşkilatçısı",
    quote:
      "Toy üçün seçdiyimiz maşın vaxtında gəldi, görüntü də yaxşı idi. Ən önəmlisi komanda məsuliyyətli yanaşdı."
  },
  {
    name: "Elvin Quliyev",
    role: "Sahibkar",
    quote:
      "Qonaq qarşılama üçün VIP transfer sifariş etmişdik. Səliqə, ünsiyyət və ümumi təqdimat premium hiss bağışladı."
  }
];

export const faqItems: FaqItem[] = [
  {
    question: "Depozit tələb olunur?",
    answer:
      "Modelə və tarixə görə dəyişir. Parkımızda depozitsiz seçimlər də var. Dəqiq şərt üçün seçdiyiniz modeli göndərməyiniz kifayətdir."
  },
  {
    question: "Maşınlar necə təhvil verilir?",
    answer:
      "Ofisdən təhvil, şəhərdaxili ünvan çatdırılması və bəzi hallarda aeroport təhvili mümkündür. Uyğun variant rezervasiya zamanı dəqiqləşdirilir."
  },
  {
    question: "Hansı sənədlər lazımdır?",
    answer:
      "Adətən şəxsiyyət vəsiqəsi və sürücülük vəsiqəsi tələb olunur. Xarici vətəndaşlar üçün əlavə dəqiqləşdirmə ola bilər."
  },
  {
    question: "WhatsApp ilə rezerv etmək mümkündür?",
    answer:
      "Bəli. Bu saytın əsas məqsədlərindən biri də sürətli WhatsApp rezervasiya axını yaratmaqdır. Model və tarix göndərməyiniz kifayətdir."
  },
  {
    question: "Toy maşını sifarişi necə edilir?",
    answer:
      "Toy tarixi, saat aralığı və istədiyiniz model və ya büdcə aralığını göndərin. Daha sonra uyğun variantlar və xidmət şərtləri paylaşılır."
  }
];

export const aboutStory = {
  intro:
    "Brandium Rent a Car Bakıda sürətli, rahat və premium hiss verən avtomobil icarə təcrübəsi qurmaq üçün formalaşdırılıb.",
  paragraphs: [
    "Bizim üçün icarə sadəcə açar təhvili deyil. Müştərinin vaxtına hörmət, təmiz təqdimat, aydın ünsiyyət və düzgün avtomobil seçimi eyni dərəcədə vacibdir.",
    "Şəhərdaxili qısa istifadə, ailəvi səfər, biznes görüşü, aeroport qarşılama və toy günü kimi fərqli ehtiyaclar üçün həm sərfəli, həm də daha premium səviyyədə həll təqdim edirik.",
    "Brandium-un yanaşması sadədir: sürətli cavab, baxımlı park, etibarlı proses və lokal bazara uyğun praktik xidmət."
  ],
  stats: [
    { value: "11+", label: "başlanğıc park modeli" },
    { value: "2 dəq", label: "WhatsApp üzrə orta ilkin cavab" },
    { value: "7 gün", label: "həftəlik və aylıq çevik paketlər" },
    { value: "Bakı", label: "mərkəzli çatdırılma və təhvil" }
  ]
};

export const reservationNotes = [
  "Rezervasiya formasını göndərdikdən sonra məlumatlar WhatsApp mesajı kimi hazırlanır.",
  "Tarix uyğunluğu təsdiqləndikdən sonra təhvil nöqtəsi və yekun şərtlər paylaşılır.",
  "Real backend əlavə etmək üçün forma strukturu CMS, Supabase və ya custom API ilə rahat genişlənə bilər."
];

export const rentalRules = [
  "Qiymət və depozit şərtləri modelə görə dəyişə bilər.",
  "Çatdırılma və geri təhvil üçün əlavə xidmət haqqı tətbiq oluna bilər.",
  "Toy və event sifarişləri üçün tarixlərin öncədən bron edilməsi tövsiyə olunur."
];
