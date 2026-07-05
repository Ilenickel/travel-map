export const COMOROS = {
  code: "COM",
  numericId: 174,
  name: { fr: "Comores", en: "Comoros" },
  emoji: "🇰🇲",
  capital: { fr: "Moroni", en: "Moroni" },
  language: { fr: "Comorien (shiKomori), Arabe, Français", en: "Comorian (shiKomori), Arabic, French" },
  currency: { fr: "Franc comorien (KMF)", en: "Comorian franc (KMF)" },
  timezone: "UTC+3",
  filter: {
    budgetMin: 50, budgetMid: 120,
    tripMin: 1800, tripMid: 3500,
  },
  description: {
    fr: "Les Comores sont un archipel volcanique de l'océan Indien entre Madagascar et le Mozambique : le Karthala (2 361m, l'un des plus grands cratères actifs du monde), les plages de sable blanc et les récifs coralliens préservés, et une culture swahili-arabe unique. L'une des destinations les moins touristiques au monde, encore hors des sentiers battus — une Zanzibar sans les foules.",
    en: "The Comoros are a volcanic archipelago in the Indian Ocean between Madagascar and Mozambique: Karthala (2,361 m, home to one of the world's largest active craters), white-sand beaches, unspoilt coral reefs, and a unique Swahili-Arab culture. One of the least touristy destinations in the world, still far off the beaten track — a Zanzibar without the crowds.",
  },

  bestPeriods: [
    {
      months: { fr: "Mai – Octobre", en: "May – October" },
      label: { fr: "Saison sèche", en: "Dry season" },
      color: "#22c55e",
      description: {
        fr: "Meilleure période : moins de pluie, températures agréables (24–28°C), mer calme côté ouest. Idéal pour plongée et randonnée Karthala.",
        en: "Best time to go: less rain, pleasant temperatures (24–28°C), and calm seas on the western coast. Ideal for diving and hiking on Karthala.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Décembre – Mars", en: "December – March" },
      label: { fr: "Mousson et cyclones", en: "Monsoon and cyclones" },
      color: "#ef4444",
      description: {
        fr: "Pluies abondantes, risque cyclonique, mer parfois houleuse. Températures chaudes mais humides (28–32°C).",
        en: "Heavy rainfall, cyclone risk, and sometimes rough seas. Hot but humid temperatures (28–32°C).",
      },
      icon: "🌀",
    },
  ],

  weatherCities: [
    {
      id: "moroni",
      name: "Moroni",
      region: { fr: "Grande Comore (Ngazidja)", en: "Grande Comore (Ngazidja)" },
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
      name: { fr: "Karthala — Le géant volcanique", en: "Karthala — The volcanic giant" },
      region: { fr: "Grande Comore", en: "Grande Comore" },
      description: {
        fr: "Le Karthala (2 361m) est l'un des plus grands volcans actifs du monde en termes de superficie de caldeira (3 × 4 km). L'ascension de 2 jours traverse forêts tropicales, landes de bruyère géante et aboutit à un cratère fumant de dimensions spectaculaires. La dernière éruption majeure date de 2007. Un trekking peu balisé pour aventuriers.",
        en: "Karthala (2,361 m) is one of the world's largest active volcanoes in terms of caldera size (3 × 4 km). The 2-day ascent crosses tropical forest and giant heather moorland before reaching a smoking crater of spectacular scale. The last major eruption was in 2007. A lightly marked trek for adventurous travellers.",
      },
      wikipedia: "File:Karthala volcano-Comoros.jpg",
      tags: ["Volcan", "Randonnée", "Aventure", "Unique"],
      mustSee: [
        { name: { fr: "Ascension Karthala (2 jours, guide obligatoire)", en: "Karthala ascent (2 days, guide required)" }, wikipedia: "File:Karthala volcano-Comoros.jpg" },
        { name: { fr: "Forêt tropicale humide du flanc du Karthala", en: "Humid tropical forest on Karthala's slopes" }, wikipedia: "File:Hiking to Karthala crater.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Mohéli — Plages et tortues", en: "Mohéli — Beaches and turtles" },
      region: { fr: "Île de Mohéli (Mwali)", en: "Mohéli Island (Mwali)" },
      description: {
        fr: "Mohéli est la plus petite et la moins peuplée des grandes îles comoriennes : son Parc Marin (le seul des Comores) protège les grandes plages où pondent les tortues vertes (de mai à septembre), les dauphins, les dugongs et les baleines à bosse (juillet–septembre). Une île quasi vierge, accessible par petit avion depuis Moroni.",
        en: "Mohéli is the smallest and least populated of the main Comorian islands: its Marine Park (the only one in the country) protects the long beaches where green turtles nest from May to September, as well as dolphins, dugongs and humpback whales (July–September). An almost untouched island, reached by small plane from Moroni.",
      },
      wikipedia: "File:Mohéli-Beach.jpg",
      tags: ["Tortues", "Parc Marin", "Baleines", "Vierge"],
      mustSee: [
        { name: { fr: "Ponte des tortues vertes (mai–septembre, nuit)", en: "Green turtle nesting (May–September, at night)" }, wikipedia: "File:Green sea turtle (Chelonia mydas) Moorea.jpg" },
        { name: { fr: "Baleines à bosse (juillet–septembre)", en: "Humpback whales (July–September)" }, wikipedia: "File:Baleine à bosse et son baleineau 2.jpg" },
        { name: { fr: "Plage de Nioumachoua — parc marin snorkeling", en: "Nioumachoua Beach — marine park snorkelling" }, wikipedia: "File:Panorama mangrove de nioumachoua.jpg" },
        { name: { fr: "Dauphins et dugongs en snorkeling", en: "Snorkelling with dolphins and dugongs" }, wikipedia: "File:010_Atlantic_bottlenose_dolphin_jumping_at_Pelican_point_Photo_by_Giles_Laurent.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Anjouan — Ylang-Ylang et forêts", en: "Anjouan — Ylang-ylang and forests" },
      region: { fr: "Île d'Anjouan (Ndzuani)", en: "Anjouan Island (Ndzuani)" },
      description: {
        fr: "Anjouan, la plus parfumée des îles, est l'ile aux fleurs d'ylang-ylang dont l'essence entre dans la composition de Chanel N°5. Elle abrite aussi la forêt de Moya, l'un des derniers refuges du Pigeon bleu des Comores en danger critique. Les falaises de Dzialandzé et la vieille ville de Mutsamudu (architecture swahili-arabe) sont d'autres attraits.",
        en: "Anjouan, the most fragrant of the islands, is the island of ylang-ylang flowers, whose essence is used in Chanel No. 5. It is also home to the Moya forest, one of the last refuges of the critically endangered Comoros blue pigeon. The cliffs of Dzialandzé and the old town of Mutsamudu (with its Swahili-Arab architecture) are other highlights.",
      },
      wikipedia: "File:Anjouan.jpg",
      tags: ["Parfum", "Forêt", "Architecture", "Ylang-ylang"],
      mustSee: [
        { name: { fr: "Distilleries d'ylang-ylang — Chanel N°5 dans sa source", en: "Ylang-ylang distilleries — Chanel No. 5 at the source" }, wikipedia: "File:Cananga odorata 02.JPG" },
        { name: { fr: "Forêt de Moya — réserve naturelle rare", en: "Moya Forest — a rare nature reserve" }, wikipedia: "File:Anjouan banner.jpg" },
        { name: { fr: "Mutsamudu — vieille ville swahili-arabe avec fort portugais", en: "Mutsamudu — Swahili-Arab old town with a Portuguese fort" }, wikipedia: "Mutsamudu" },
      ],
    },
    {
      id: 4,
      name: { fr: "Moroni — Médina arabe", en: "Moroni — Arab medina" },
      region: { fr: "Grande Comore", en: "Grande Comore" },
      description: {
        fr: "Moroni, capitale des Comores, est une petite ville à l'ambiance swahili-arabe : sa médina de Badjanani avec ses ruelles blanches, ses mosquées aux minarets caractéristiques, le port de boutres (boutre = voilier arabe traditionnel), et le marché animé de la Volo-Volo. Un mélange d'Afrique, d'Arabie et de traditions malgaches.",
        en: "Moroni, the Comorian capital, is a small city with a Swahili-Arab feel: the Badjanani medina with its white lanes, mosques with distinctive minarets, the dhow harbour (a dhow is a traditional Arab sailing vessel), and the lively Volo-Volo market. A blend of Africa, Arabia and Malagasy traditions.",
      },
      wikipedia: "Moroni,_Comoros",
      tags: ["Médina", "Swahili", "Port", "Culture"],
      mustSee: [
        { name: { fr: "Médina de Badjanani — ruelles blanches et mosquées", en: "Badjanani medina — white lanes and mosques" }, wikipedia: "File:Ancienne Mosquee du Vendredi (10886895544).jpg" },
        { name: { fr: "Port des boutres — voiliers arabes traditionnels", en: "Dhow harbour — traditional Arab sailing vessels" }, wikipedia: "File:Moroni Friday Mosque Comoros.jpg" },
        { name: { fr: "Ancienne mosquée du vendredi (XIIe s.)", en: "Old Friday Mosque (12th century)" }, wikipedia: "File:Mosque in Moroni, Comoros (3923026238).jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Les Comores sont abordables mais peu développées touristiquement — l'hébergement de qualité est rare et cher pour ce qu'il offre. Les îles sont desservies par de petits avions inter-îles. La franc comorien est arrimé à l'euro.",
      en: "The Comoros are affordable but still underdeveloped for tourism — quality accommodation is scarce and expensive for what it offers. The islands are served by small inter-island planes. The Comorian franc is pegged to the euro.",
    },
    currency: "KMF",
    exchangeRate: "1€ = 491 KMF (taux fixe)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Guesthouse / chambre chez l'habitant", en: "Guesthouse / homestay room" }, price: "20–40 €", detail: { fr: "Simple, sans grand confort", en: "Simple, with few comforts" } },
          { label: { fr: "Hôtel 3★ Moroni (Retaj, Itsandra)", en: "3★ hotel in Moroni (Retaj, Itsandra)" }, price: "80–130 €", detail: { fr: "Le meilleur disponible", en: "The best available" } },
          { label: { fr: "Eco-lodge Mohéli / Anjouan", en: "Eco-lodge in Mohéli / Anjouan" }, price: "80–150 €", detail: { fr: "Demi-pension souvent incluse", en: "Half board often included" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Langouste / poisson grillé restaurant local", en: "Lobster / grilled fish at a local restaurant" }, price: "8–15 €", detail: { fr: "Fruits de mer frais abondants", en: "Plenty of fresh seafood" } },
          { label: { fr: "Restaurant hôtel Moroni", en: "Hotel restaurant in Moroni" }, price: "15–30 €", detail: { fr: "Cuisine comorienne et internationale", en: "Comorian and international cuisine" } },
          { label: { fr: "Samossas et achards dans la rue", en: "Street samosas and achards" }, price: "0,50–2 €", detail: { fr: "Street food typique", en: "Typical street food" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Vol inter-îles (Moroni–Mohéli ou Anjouan)", en: "Inter-island flight (Moroni–Mohéli or Anjouan)" }, price: "50–100 €", detail: { fr: "A/R, APCM, ICA — petits avions", en: "Return trip, APCM, ICA — small planes" } },
          { label: { fr: "Taxi-brousse local", en: "Local shared bush taxi" }, price: "2–10 €", detail: { fr: "Transport entre villages", en: "Transport between villages" } },
          { label: { fr: "Location 4x4 avec chauffeur / journée", en: "4x4 with driver / day" }, price: "50–80 €", detail: { fr: "Pour Karthala et les villages", en: "For Karthala and village trips" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Ascension Karthala (guide, 2 jours, bivouac)", en: "Karthala ascent (guide, 2 days, bivouac)" }, price: "80–150 €", detail: { fr: "Tout compris", en: "All inclusive" } },
          { label: { fr: "Plongée Mohéli parc marin (2 plongées)", en: "Diving in Mohéli Marine Park (2 dives)" }, price: "70–100 €", detail: { fr: "Bouteilles + guide", en: "Tanks + guide" } },
          { label: { fr: "Tour tortues Mohéli (nuit, guide)", en: "Mohéli turtle tour (night, guide)" }, price: "20–40 €", detail: { fr: "Mai–septembre uniquement", en: "May–September only" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "50–80 €/j", desc: { fr: "Guesthouse + cuisine locale + taxis", en: "Guesthouse + local food + taxis" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "120–180 €/j", desc: { fr: "Hôtel 3★ + vols inter-îles + excursions guidées", en: "3★ hotel + inter-island flights + guided excursions" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "12 jours", en: "12 days" },
      route: {
        fr: "Moroni / Grande Comore (4j) → Karthala (2j) → Anjouan (3j) → Mohéli (3j)",
        en: "Moroni / Grande Comore (4d) → Karthala (2d) → Anjouan (3d) → Mohéli (3d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 800 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Moroni (via Mayotte ou La Réunion)", en: "Return flight Paris–Moroni (via Mayotte or Réunion)" }, amount: "600–1 000 €" },
            { label: { fr: "Hébergement (12 nuits)", en: "Accommodation (12 nights)" }, amount: "400–600 €" },
            { label: { fr: "Vols inter-îles (2–3 trajets)", en: "Inter-island flights (2–3 legs)" }, amount: "200–400 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "250–400 €" },
            { label: { fr: "Guides & activités", en: "Guides & activities" }, amount: "200–400 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "3 500 – 5 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Moroni", en: "Return flight Paris–Moroni" }, amount: "700–1 200 €" },
            { label: { fr: "Hôtels et lodges (12 nuits)", en: "Hotels and lodges (12 nights)" }, amount: "900–1 500 €" },
            { label: { fr: "Vols inter-îles + 4x4", en: "Inter-island flights + 4x4" }, amount: "400–700 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants" }, amount: "400–700 €" },
            { label: { fr: "Plongée, tortues, Karthala", en: "Diving, turtles, Karthala" }, amount: "400–600 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~12h via Mayotte (Air Austral) ou La Réunion + inter-îles, ou via Nairobi/Addis (Ethiopian)", en: "~12h via Mayotte (Air Austral) or Réunion + inter-island hop, or via Nairobi/Addis (Ethiopian)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Visa à l'arrivée (30€, 45 jours) pour ressortissants français. Passeport obligatoire.", en: "Visa on arrival (€30, 45 days) for French citizens. Passport required." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Franc comorien (KMF). 1€ = 491 KMF taux fixe. Espèces indispensables — peu de DAB.", en: "Comorian franc (KMF). €1 = 491 KMF at a fixed rate. Cash is essential — very few ATMs." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Comorien (shiKomori) + Arabe. Français compris dans les administrations et hôtels.", en: "Comorian (shiKomori) + Arabic. French is understood in government offices and hotels." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type C/E (européen) — 220V. Coupures de courant fréquentes.", en: "Type C/E (European) — 220V. Power cuts are frequent." } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Antipaludéen indispensable (paludisme présent). Vaccin fièvre jaune recommandé. Eau en bouteille.", en: "Antimalarial medication is essential (malaria is present). Yellow fever vaccination recommended. Bottled water only." } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Non potable — eau en bouteille indispensable.", en: "Not safe to drink — bottled water is essential." } },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "Couverture 3G/4G limitée aux zones urbaines. Interîles : couverture aléatoire. SIM Comoros Telecom.", en: "3G/4G coverage is mostly limited to urban areas. Between islands, coverage is patchy. Comoros Telecom SIM card." } },
  ],
};
