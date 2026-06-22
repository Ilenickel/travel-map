export const COMOROS = {
  code: "COM",
  numericId: 174,
  name: "Comores",
  emoji: "🇰🇲",
  capital: "Moroni",
  language: "Comorien (shiKomori), Arabe, Français",
  currency: "Franc comorien (KMF)",
  timezone: "UTC+3",
  filter: {
    budgetMin: 50, budgetMid: 120,
    tripMin: 1800, tripMid: 3500,
  },
  description:
    "Les Comores sont un archipel volcanique de l'océan Indien entre Madagascar et le Mozambique : le Karthala (2 361m, l'un des plus grands cratères actifs du monde), les plages de sable blanc et les récifs coralliens préservés, et une culture swahili-arabe unique. L'une des destinations les moins touristiques au monde, encore hors des sentiers battus — une Zanzibar sans les foules.",

  bestPeriods: [
    {
      months: "Mai – Octobre",
      label: "Saison sèche",
      color: "#22c55e",
      description:
        "Meilleure période : moins de pluie, températures agréables (24–28°C), mer calme côté ouest. Idéal pour plongée et randonnée Karthala.",
      icon: "☀️",
    },
    {
      months: "Décembre – Mars",
      label: "Mousson et cyclones",
      color: "#ef4444",
      description:
        "Pluies abondantes, risque cyclonique, mer parfois houleuse. Températures chaudes mais humides (28–32°C).",
      icon: "🌀",
    },
  ],

  weatherCities: [
    {
      id: "moroni",
      name: "Moroni",
      region: "Grande Comore (Ngazidja)",
      data: [
        { month: "Jan", temp: 28, rain: 350, icon: "🌧️" },
        { month: "Fév", temp: 28, rain: 300, icon: "🌧️" },
        { month: "Mar", temp: 28, rain: 200, icon: "🌧️" },
        { month: "Avr", temp: 27, rain: 130, icon: "🌧️" },
        { month: "Mai", temp: 26, rain: 60,  icon: "☀️" },
        { month: "Jun", temp: 24, rain: 30,  icon: "☀️" },
        { month: "Jul", temp: 23, rain: 20,  icon: "☀️" },
        { month: "Aoû", temp: 23, rain: 20,  icon: "☀️" },
        { month: "Sep", temp: 24, rain: 30,  icon: "☀️" },
        { month: "Oct", temp: 26, rain: 50,  icon: "☀️" },
        { month: "Nov", temp: 27, rain: 150, icon: "🌧️" },
        { month: "Déc", temp: 28, rain: 280, icon: "🌧️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Karthala — Le géant volcanique",
      region: "Grande Comore",
      description:
        "Le Karthala (2 361m) est l'un des plus grands volcans actifs du monde en termes de superficie de caldeira (3 × 4 km). L'ascension de 2 jours traverse forêts tropicales, landes de bruyère géante et aboutit à un cratère fumant de dimensions spectaculaires. La dernière éruption majeure date de 2007. Un trekking peu balisé pour aventuriers.",
      wikipedia: "File:Karthala volcano-Comoros.jpg",
      tags: ["Volcan", "Randonnée", "Aventure", "Unique"],
      mustSee: [
        { name: "Ascension Karthala (2 jours, guide obligatoire)", wikipedia: "File:Karthala volcano-Comoros.jpg" },
        { name: "Forêt tropicale humide du flanc du Karthala", wikipedia: "File:Hiking to Karthala crater.jpg" },
      ],
    },
    {
      id: 2,
      name: "Mohéli — Plages et tortues",
      region: "Île de Mohéli (Mwali)",
      description:
        "Mohéli est la plus petite et la moins peuplée des grandes îles comoriennes : son Parc Marin (le seul des Comores) protège les grandes plages où pondent les tortues vertes (de mai à septembre), les dauphins, les dugongs et les baleines à bosse (juillet–septembre). Une île quasi vierge, accessible par petit avion depuis Moroni.",
      wikipedia: "File:Mohéli-Beach.jpg",
      tags: ["Tortues", "Parc Marin", "Baleines", "Vierge"],
      mustSee: [
        { name: "Ponte des tortues vertes (mai–septembre, nuit)", wikipedia: "File:Green sea turtle (Chelonia mydas) Moorea.jpg" },
        { name: "Baleines à bosse (juillet–septembre)", wikipedia: "File:Baleine à bosse et son baleineau 2.jpg" },
        { name: "Plage de Nioumachoua — parc marin snorkeling", wikipedia: "File:Panorama mangrove de nioumachoua.jpg" },
        { name: "Dauphins et dugongs en snorkeling", wikipedia: "File:010_Atlantic_bottlenose_dolphin_jumping_at_Pelican_point_Photo_by_Giles_Laurent.jpg" },
      ],
    },
    {
      id: 3,
      name: "Anjouan — Ylang-Ylang et forêts",
      region: "Île d'Anjouan (Ndzuani)",
      description:
        "Anjouan, la plus parfumée des îles, est l'ile aux fleurs d'ylang-ylang dont l'essence entre dans la composition de Chanel N°5. Elle abrite aussi la forêt de Moya, l'un des derniers refuges du Pigeon bleu des Comores en danger critique. Les falaises de Dzialandzé et la vieille ville de Mutsamudu (architecture swahili-arabe) sont d'autres attraits.",
      wikipedia: "File:Anjouan.jpg",
      tags: ["Parfum", "Forêt", "Architecture", "Ylang-ylang"],
      mustSee: [
        { name: "Distilleries d'ylang-ylang — Chanel N°5 dans sa source", wikipedia: "File:Cananga odorata 02.JPG" },
        { name: "Forêt de Moya — réserve naturelle rare", wikipedia: "File:Anjouan banner.jpg" },
        { name: "Mutsamudu — vieille ville swahili-arabe avec fort portugais", wikipedia: "Mutsamudu" },
      ],
    },
    {
      id: 4,
      name: "Moroni — Médina arabe",
      region: "Grande Comore",
      description:
        "Moroni, capitale des Comores, est une petite ville à l'ambiance swahili-arabe : sa médina de Badjanani avec ses ruelles blanches, ses mosquées aux minarets caractéristiques, le port de boutres (boutre = voilier arabe traditionnel), et le marché animé de la Volo-Volo. Un mélange d'Afrique, d'Arabie et de traditions malgaches.",
      wikipedia: "Moroni,_Comoros",
      tags: ["Médina", "Swahili", "Port", "Culture"],
      mustSee: [
        { name: "Médina de Badjanani — ruelles blanches et mosquées", wikipedia: "File:Ancienne Mosquee du Vendredi (10886895544).jpg" },
        { name: "Port des boutres — voiliers arabes traditionnels", wikipedia: "File:Moroni Friday Mosque Comoros.jpg" },
        { name: "Ancienne mosquée du vendredi (XIIe s.)", wikipedia: "File:Mosque in Moroni, Comoros (3923026238).jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "Les Comores sont abordables mais peu développées touristiquement — l'hébergement de qualité est rare et cher pour ce qu'il offre. Les îles sont desservies par de petits avions inter-îles. La franc comorien est arrimé à l'euro.",
    currency: "KMF",
    exchangeRate: "1€ = 491 KMF (taux fixe)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse / chambre chez l'habitant", price: "20–40 €", detail: "Simple, sans grand confort" },
          { label: "Hôtel 3★ Moroni (Retaj, Itsandra)", price: "80–130 €", detail: "Le meilleur disponible" },
          { label: "Eco-lodge Mohéli / Anjouan", price: "80–150 €", detail: "Demi-pension souvent incluse" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Langouste / poisson grillé restaurant local", price: "8–15 €", detail: "Fruits de mer frais abondants" },
          { label: "Restaurant hôtel Moroni", price: "15–30 €", detail: "Cuisine comorienne et internationale" },
          { label: "Samossas et achards dans la rue", price: "0,50–2 €", detail: "Street food typique" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Vol inter-îles (Moroni–Mohéli ou Anjouan)", price: "50–100 €", detail: "A/R, APCM, ICA — petits avions" },
          { label: "Taxi-brousse local", price: "2–10 €", detail: "Transport entre villages" },
          { label: "Location 4x4 avec chauffeur / journée", price: "50–80 €", detail: "Pour Karthala et les villages" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Ascension Karthala (guide, 2 jours, bivouac)", price: "80–150 €", detail: "Tout compris" },
          { label: "Plongée Mohéli parc marin (2 plongées)", price: "70–100 €", detail: "Bouteilles + guide" },
          { label: "Tour tortues Mohéli (nuit, guide)", price: "20–40 €", detail: "Mai–septembre uniquement" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "50–80 €/j", desc: "Guesthouse + cuisine locale + taxis", color: "#22c55e" },
      { type: "Confort", daily: "120–180 €/j", desc: "Hôtel 3★ + vols inter-îles + excursions guidées", color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: "12 jours",
      route: "Moroni / Grande Comore (4j) → Karthala (2j) → Anjouan (3j) → Mohéli (3j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 800 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Moroni (via Mayotte ou La Réunion)", amount: "600–1 000 €" },
            { label: "Hébergement (12 nuits)", amount: "400–600 €" },
            { label: "Vols inter-îles (2–3 trajets)", amount: "200–400 €" },
            { label: "Nourriture", amount: "250–400 €" },
            { label: "Guides & activités", amount: "200–400 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "3 500 – 5 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Moroni", amount: "700–1 200 €" },
            { label: "Hôtels et lodges (12 nuits)", amount: "900–1 500 €" },
            { label: "Vols inter-îles + 4x4", amount: "400–700 €" },
            { label: "Nourriture & restaurants", amount: "400–700 €" },
            { label: "Plongée, tortues, Karthala", amount: "400–600 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~12h via Mayotte (Air Austral) ou La Réunion + inter-îles, ou via Nairobi/Addis (Ethiopian)" },
    { icon: "🪪", label: "Visa",              value: "Visa à l'arrivée (30€, 45 jours) pour ressortissants français. Passeport obligatoire." },
    { icon: "💰", label: "Monnaie",           value: "Franc comorien (KMF). 1€ = 491 KMF taux fixe. Espèces indispensables — peu de DAB." },
    { icon: "🗣️", label: "Langue",            value: "Comorien (shiKomori) + Arabe. Français compris dans les administrations et hôtels." },
    { icon: "🔌", label: "Prise électrique",  value: "Type C/E (européen) — 220V. Coupures de courant fréquentes." },
    { icon: "💊", label: "Santé",             value: "Antipaludéen indispensable (paludisme présent). Vaccin fièvre jaune recommandé. Eau en bouteille." },
    { icon: "🚰", label: "Eau du robinet",    value: "Non potable — eau en bouteille indispensable." },
    { icon: "📱", label: "Réseau",            value: "Couverture 3G/4G limitée aux zones urbaines. Interîles : couverture aléatoire. SIM Comoros Telecom." },
  ],
};
