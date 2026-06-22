export const ERITREA = {
  code: "ERI",
  numericId: 232,
  name: "Érythrée",
  emoji: "🇪🇷",
  capital: "Asmara",
  language: "Tigrigna, Arabe, Anglais",
  currency: "Nakfa érythréen (ERN)",
  timezone: "UTC+3",
  filter: {
    budgetMin: 30, budgetMid: 80,
    tripMin: 1200, tripMid: 2500,
  },
  description:
    "L'Érythrée est l'une des destinations les plus isolées du monde : Asmara la capitale a été classée UNESCO en 2017 pour son incroyable concentration d'architecture Art déco et Futuriste italienne (années 1930), préservée à l'identique comme un musée à ciel ouvert. La côte mer Rouge (Massawa, Dahlak) et les hauts plateaux du Tigrigna complètent un pays mystérieux, peu touristique, à l'hospitalité préservée.",

  bestPeriods: [
    {
      months: "Octobre – Avril",
      label: "Saison fraîche et sèche",
      color: "#22c55e",
      description:
        "Meilleure période : Asmara agréable (15–24°C), mer Rouge accessible (30°C). Plongée et snorkeling excellents dans l'archipel de Dahlak.",
      icon: "☀️",
    },
    {
      months: "Juin – Août",
      label: "Saison des pluies (hauts plateaux)",
      color: "#f59e0b",
      description:
        "Pluies sur les hauts plateaux d'Asmara (60–90mm). Côte (Massawa) très chaude (38–42°C). Meilleure période évitée.",
      icon: "⛅",
    },
  ],

  weatherCities: [
    {
      id: "asmara",
      name: "Asmara",
      region: "Hauts plateaux (altitude 2 325m)",
      data: [
        { month: "Jan", temp: 14, rain: 5,   icon: "⛅" },
        { month: "Fév", temp: 15, rain: 10,  icon: "⛅" },
        { month: "Mar", temp: 17, rain: 15,  icon: "⛅" },
        { month: "Avr", temp: 18, rain: 25,  icon: "⛅" },
        { month: "Mai", temp: 19, rain: 20,  icon: "⛅" },
        { month: "Jun", temp: 18, rain: 30,  icon: "⛅" },
        { month: "Jul", temp: 17, rain: 90,  icon: "⛅" },
        { month: "Aoû", temp: 17, rain: 80,  icon: "⛅" },
        { month: "Sep", temp: 18, rain: 30,  icon: "⛅" },
        { month: "Oct", temp: 18, rain: 10,  icon: "☀️" },
        { month: "Nov", temp: 16, rain: 5,   icon: "☀️" },
        { month: "Déc", temp: 14, rain: 5,   icon: "⛅" },
      ],
    },
    {
      id: "massawa",
      name: "Massawa",
      region: "Côte mer Rouge",
      data: [
        { month: "Jan", temp: 26, rain: 5,   icon: "☀️" },
        { month: "Fév", temp: 27, rain: 5,   icon: "⛅" },
        { month: "Mar", temp: 29, rain: 5,   icon: "⛅" },
        { month: "Avr", temp: 32, rain: 0,   icon: "🌡️" },
        { month: "Mai", temp: 34, rain: 0,   icon: "🌡️" },
        { month: "Jun", temp: 37, rain: 0,   icon: "🌡️" },
        { month: "Jul", temp: 38, rain: 5,   icon: "🌡️" },
        { month: "Aoû", temp: 38, rain: 5,   icon: "🌡️" },
        { month: "Sep", temp: 35, rain: 5,   icon: "🌡️" },
        { month: "Oct", temp: 31, rain: 5,   icon: "⛅" },
        { month: "Nov", temp: 28, rain: 5,   icon: "⛅" },
        { month: "Déc", temp: 26, rain: 5,   icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Asmara — Art déco unique (UNESCO)",
      region: "Hauts plateaux",
      description:
        "Asmara a été classée au patrimoine mondial UNESCO en 2017 pour son exceptionnelle architecture italienne des années 1930 : le Cinema Impero (futuriste, 1937), la station-service FIAT Tagliero (avion en béton sans piliers, 1938), l'opéra, les immeubles art déco de la Harnet Avenue. Une ville figée dans les années 30 italiens, sans publicités ni néons — un musée vivant.",
      wikipedia: "File:Asmara-Night Panorama.jpeg",
      tags: ["Art déco", "UNESCO", "Architecture", "Italie coloniale"],
      mustSee: [
        { name: "Cinema Impero (1937) — chef-d'œuvre du futurisme", wikipedia: "Cinema_Impero" },
        { name: "Station FIAT Tagliero (1938) — avion en béton sans piliers", wikipedia: "Fiat_Tagliero_Building" },
        { name: "Harnet Avenue — promenade art déco", wikipedia: "File:Harnet Avenue (8352530432).jpg" },
      ],
    },
    {
      id: 2,
      name: "Massawa — Cité des coraux et de l'histoire",
      region: "Côte mer Rouge",
      description:
        "Massawa est le principal port eritréen sur la mer Rouge : son centre historique (Taulud Island) avec ses maisons ottomanes à moucharabieh, ses mosquées et ses souks a survécu aux guerres. Les ruines du palais d'Hailé Sélassié et les chars de guerre abandonnés rappellent la brutale libération de 1990. La mer est cristalline et les poissons abondants.",
      wikipedia: "Massawa",
      tags: ["Port", "Ottoman", "Histoire", "Mer Rouge"],
      mustSee: [
        { name: "Vieille ville de Taulud — maisons ottomanes et moucharabieh", wikipedia: "File:Massawa Island Causeway (8529061280).jpg" },
        { name: "Chars de guerre devant la gare — mémorial de libération", wikipedia: "File:Three Tanks (8529065894).jpg" },
        { name: "Palais impérial d'Hailé Sélassié en ruines", wikipedia: "File:Massawa,_Eritrea_-_City_Administration_Building_(8527951359).jpg" },
        { name: "Plage de Gurgusum — mer Rouge et récifs coralliens", wikipedia: "File:Bay of Taulud (8527951431).jpg" },
      ],
    },
    {
      id: 3,
      name: "Archipel de Dahlak — Plongée mer Rouge",
      region: "Mer Rouge (au large de Massawa)",
      description:
        "L'archipel de Dahlak comprend 209 îles coralliennes (seulement 4 habitées) sur les plus riches récifs de la mer Rouge. Les eaux sont parmi les moins polluées et les moins fréquentées de la planète : dauphins, raies manta, requins-baleines, tortues et coraux préservés. L'accès se fait depuis Massawa par bateau charter.",
      wikipedia: "Dahlak_Archipelago",
      tags: ["Plongée", "Récifs", "Îles", "Isolé"],
      mustSee: [
        { name: "Plongée récifs de Dahlak — coraux 40m de profondeur", wikipedia:  "File:Coral reef on Dahlak Island (Eritrea), Red Sea.jpg" },
        { name: "Dauphins et raies manta dans les canaux inter-îles", wikipedia: "File:ISS016-E-11489 - View of Eritrea.jpg" },
        { name: "Plage déserte blanche sur île non-habitée", wikipedia: "File:Dahlak Marine Nataional Park banner.jpg" },
        { name: "Epaves de la 2e guerre mondiale (navires italiens)", wikipedia: "File:Высадка на остров Нокра.jpg" },
      ],
    },
    
  ],

  costOfLiving: {
    intro: "L'Érythrée est l'une des destinations les plus abordables au monde, mais le pays impose des règles strictes aux voyageurs (guide officiel obligatoire, permis pour quitter Asmara). Le nakfa n'est pas convertible à l'étranger — prévoir dollars ou euros en espèces.",
    currency: "ERN",
    exchangeRate: "1€ ≈ 17 ERN (officiel)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Pension / guesthouse à Asmara", price: "15–35 €", detail: "Simple mais propre, chambre privée" },
          { label: "Hôtel 3★ Asmara (Ambassador, Intercontinental)", price: "60–120 €", detail: "Architecture italienne préservée" },
          { label: "Lodge côtier Massawa ou Dahlak", price: "50–100 €", detail: "Bungalows face à la mer Rouge" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Injera + zigni (ragoût de viande) dans un tefera", price: "3–8 €", detail: "Cuisine habesha typique" },
          { label: "Café érythréen (cérémonial, 3 tasses)", price: "1–2 €", detail: "Rituel incontournable" },
          { label: "Restaurant d'Asmara — pizza et pasta italienne", price: "8–15 €", detail: "Héritage culinaire italien visible partout" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Bus Asmara–Massawa", price: "5–8 €", detail: "3h de route spectaculaire" },
          { label: "Guide officiel obligatoire (hors Asmara)", price: "30–60 €/j", detail: "Requis par la loi pour visiter le pays" },
          { label: "Taxi en ville Asmara", price: "1–3 €", detail: "Négocier le prix avant de monter" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Visite guidée architecture art déco Asmara", price: "20–40 €", detail: "Guide obligatoire, 3h" },
          { label: "Charter bateau Dahlak (journée plongée)", price: "100–200 €", detail: "À diviser entre participants" },
          { label: "Voyage en train Asmara–Nefasit (week-end)", price: "20–40 €", detail: "Sur réservation, train à vapeur" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "30–55 €/j", desc: "Guesthouse + cuisine locale + transports + guide", color: "#22c55e" },
      { type: "Confort", daily: "80–150 €/j", desc: "Hôtel 3★ + restaurants + excursions privées", color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: "8 jours",
      route: "Asmara art déco (3j) → Train spectaculaire (1j) → Massawa + Dahlak (3j) → retour (1j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 200 – 2 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Asmara (Turkish, Ethiopian)", amount: "600–900 €" },
            { label: "Hébergement (8 nuits)", amount: "200–350 €" },
            { label: "Guide officiel (obligatoire, 6 jours)", amount: "180–360 €" },
            { label: "Nourriture", amount: "120–200 €" },
            { label: "Transports + bateau Dahlak", amount: "150–250 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 500 – 4 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Asmara", amount: "700–1 000 €" },
            { label: "Hôtels 3★ (8 nuits)", amount: "600–1 000 €" },
            { label: "Guide privé + véhicule", amount: "500–800 €" },
            { label: "Nourriture & restaurants", amount: "300–500 €" },
            { label: "Plongée Dahlak + train", amount: "250–500 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~9–12h via Istanbul (Turkish), Addis-Abeba (Ethiopian) ou Dubaï (flydubai). Aucun direct." },
    { icon: "🪪", label: "Visa",              value: "Visa obligatoire, à demander à l'ambassade d'Érythrée à Paris. Pas de visa à l'arrivée. Délai : 2–4 semaines." },
    { icon: "💰", label: "Monnaie",           value: "Nakfa (ERN). Non convertible à l'étranger. Prévoir dollars USD ou euros en espèces. Aucun distributeur accessible aux étrangers." },
    { icon: "🗣️", label: "Langue",            value: "Tigrigna (principale), Arabe et Anglais (officiels). Français peu parlé. Guide bilingue très utile." },
    { icon: "🔌", label: "Prise électrique",  value: "Type C/L (européen + italien) — 230V. Adaptateur européen standard fonctionne." },
    { icon: "🪪", label: "Guide obligatoire", value: "Un guide officiel agréé est requis pour quitter Asmara. Prévoir ce coût dans le budget. L'agence de voyage organise cela." },
    { icon: "💊", label: "Santé",             value: "Antipaludéen nécessaire sur la côte (Massawa). Vaccins standard Afrique recommandés. Eau en bouteille." },
    { icon: "📵", label: "Internet",          value: "Accès Internet très limité et lent. Réseaux sociaux parfois bloqués. Prévoir un déconnecté assumé." },
  ],
};
