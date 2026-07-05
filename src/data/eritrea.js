export const ERITREA = {
  code: "ERI",
  numericId: 232,
  name: { fr: "Érythrée", en: "Eritrea" },
  emoji: "🇪🇷",
  capital: { fr: "Asmara", en: "Asmara" },
  language: { fr: "Tigrigna, Arabe, Anglais", en: "Tigrinya, Arabic, English" },
  currency: { fr: "Nakfa érythréen (ERN)", en: "Eritrean nakfa (ERN)" },
  timezone: "UTC+3",
  filter: {
    budgetMin: 30, budgetMid: 80,
    tripMin: 1200, tripMid: 2500,
  },
  description: {
    fr: "L'Érythrée est l'une des destinations les plus isolées du monde : Asmara la capitale a été classée UNESCO en 2017 pour son incroyable concentration d'architecture Art déco et Futuriste italienne (années 1930), préservée à l'identique comme un musée à ciel ouvert. La côte mer Rouge (Massawa, Dahlak) et les hauts plateaux du Tigrigna complètent un pays mystérieux, peu touristique, à l'hospitalité préservée.",
    en: "Eritrea is one of the most isolated destinations in the world: its capital Asmara was listed as a UNESCO World Heritage Site in 2017 for its extraordinary concentration of Italian Art Deco and Futurist architecture from the 1930s, preserved almost unchanged like an open-air museum. The Red Sea coast (Massawa, Dahlak) and the Tigrinya highlands complete a mysterious, little-visited country with deeply preserved hospitality.",
  },

  bestPeriods: [
    {
      months: { fr: "Octobre – Avril", en: "October – April" },
      label: { fr: "Saison fraîche et sèche", en: "Cool dry season" },
      color: "#22c55e",
      description: {
        fr: "Meilleure période : Asmara agréable (15–24°C), mer Rouge accessible (30°C). Plongée et snorkeling excellents dans l'archipel de Dahlak.",
        en: "Best time to go: pleasant weather in Asmara (15–24°C), and the Red Sea is accessible (30°C). Diving and snorkelling are excellent in the Dahlak archipelago.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Juin – Août", en: "June – August" },
      label: { fr: "Saison des pluies (hauts plateaux)", en: "Rainy season (highlands)" },
      color: "#f59e0b",
      description: {
        fr: "Pluies sur les hauts plateaux d'Asmara (60–90mm). Côte (Massawa) très chaude (38–42°C). Meilleure période évitée.",
        en: "Rain falls over Asmara's highlands (60–90 mm). The coast (Massawa) is extremely hot (38–42°C). Best avoided.",
      },
      icon: "⛅",
    },
  ],

  weatherCities: [
    {
      id: "asmara",
      name: "Asmara",
      region: { fr: "Hauts plateaux (altitude 2 325m)", en: "Highlands (2,325 m altitude)" },
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
      region: { fr: "Côte mer Rouge", en: "Red Sea coast" },
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
      name: { fr: "Asmara — Art déco unique (UNESCO)", en: "Asmara — Unique Art Deco city (UNESCO)" },
      region: { fr: "Hauts plateaux", en: "Highlands" },
      description: {
        fr: "Asmara a été classée au patrimoine mondial UNESCO en 2017 pour son exceptionnelle architecture italienne des années 1930 : le Cinema Impero (futuriste, 1937), la station-service FIAT Tagliero (avion en béton sans piliers, 1938), l'opéra, les immeubles art déco de la Harnet Avenue. Une ville figée dans les années 30 italiens, sans publicités ni néons — un musée vivant.",
        en: "Asmara was listed as a UNESCO World Heritage Site in 2017 for its exceptional Italian architecture from the 1930s: Cinema Impero (Futurist, 1937), the FIAT Tagliero service station (a concrete airplane with no pillars, 1938), the opera house, and the Art Deco buildings along Harnet Avenue. A city frozen in the Italian 1930s, with no billboards or neon signs — a living museum.",
      },
      wikipedia: "File:Asmara-Night Panorama.jpeg",
      tags: ["Art déco", "UNESCO", "Architecture", "Italie coloniale"],
      mustSee: [
        { name: { fr: "Cinema Impero (1937) — chef-d'œuvre du futurisme", en: "Cinema Impero (1937) — a Futurist masterpiece" }, wikipedia: "Cinema_Impero" },
        { name: { fr: "Station FIAT Tagliero (1938) — avion en béton sans piliers", en: "FIAT Tagliero station (1938) — a pillarless concrete airplane" }, wikipedia: "Fiat_Tagliero_Building" },
        { name: { fr: "Harnet Avenue — promenade art déco", en: "Harnet Avenue — Art Deco promenade" }, wikipedia: "File:Harnet Avenue (8352530432).jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Massawa — Cité des coraux et de l'histoire", en: "Massawa — City of coral and history" },
      region: { fr: "Côte mer Rouge", en: "Red Sea coast" },
      description: {
        fr: "Massawa est le principal port eritréen sur la mer Rouge : son centre historique (Taulud Island) avec ses maisons ottomanes à moucharabieh, ses mosquées et ses souks a survécu aux guerres. Les ruines du palais d'Hailé Sélassié et les chars de guerre abandonnés rappellent la brutale libération de 1990. La mer est cristalline et les poissons abondants.",
        en: "Massawa is Eritrea's main Red Sea port: its historic centre (Taulud Island), with its Ottoman houses with mashrabiya balconies, mosques and souks, survived the wars. The ruins of Haile Selassie's palace and abandoned war tanks recall the brutal liberation of 1990. The sea is crystal clear and fish are plentiful.",
      },
      wikipedia: "Massawa",
      tags: ["Port", "Ottoman", "Histoire", "Mer Rouge"],
      mustSee: [
        { name: { fr: "Vieille ville de Taulud — maisons ottomanes et moucharabieh", en: "Taulud old town — Ottoman houses and mashrabiya balconies" }, wikipedia: "File:Massawa Island Causeway (8529061280).jpg" },
        { name: { fr: "Chars de guerre devant la gare — mémorial de libération", en: "War tanks in front of the station — liberation memorial" }, wikipedia: "File:Three Tanks (8529065894).jpg" },
        { name: { fr: "Palais impérial d'Hailé Sélassié en ruines", en: "Ruins of Haile Selassie's imperial palace" }, wikipedia: "File:Massawa,_Eritrea_-_City_Administration_Building_(8527951359).jpg" },
        { name: { fr: "Plage de Gurgusum — mer Rouge et récifs coralliens", en: "Gurgusum Beach — Red Sea and coral reefs" }, wikipedia: "File:Bay of Taulud (8527951431).jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Archipel de Dahlak — Plongée mer Rouge", en: "Dahlak Archipelago — Red Sea diving" },
      region: { fr: "Mer Rouge (au large de Massawa)", en: "Red Sea (off Massawa)" },
      description: {
        fr: "L'archipel de Dahlak comprend 209 îles coralliennes (seulement 4 habitées) sur les plus riches récifs de la mer Rouge. Les eaux sont parmi les moins polluées et les moins fréquentées de la planète : dauphins, raies manta, requins-baleines, tortues et coraux préservés. L'accès se fait depuis Massawa par bateau charter.",
        en: "The Dahlak archipelago includes 209 coral islands (only 4 are inhabited) on some of the richest reefs in the Red Sea. Its waters are among the least polluted and least visited on the planet: dolphins, manta rays, whale sharks, turtles and remarkably preserved coral thrive here. Access is from Massawa by charter boat.",
      },
      wikipedia: "Dahlak_Archipelago",
      tags: ["Plongée", "Récifs", "Îles", "Isolé"],
      mustSee: [
        { name: { fr: "Plongée récifs de Dahlak — coraux 40m de profondeur", en: "Dahlak reef diving — coral down to 40 m deep" }, wikipedia: "File:Coral reef on Dahlak Island (Eritrea), Red Sea.jpg" },
        { name: { fr: "Dauphins et raies manta dans les canaux inter-îles", en: "Dolphins and manta rays in the channels between the islands" }, wikipedia: "File:ISS016-E-11489 - View of Eritrea.jpg" },
        { name: { fr: "Plage déserte blanche sur île non-habitée", en: "Deserted white beach on an uninhabited island" }, wikipedia: "File:Dahlak Marine Nataional Park banner.jpg" },
        { name: { fr: "Epaves de la 2e guerre mondiale (navires italiens)", en: "Second World War wrecks (Italian ships)" }, wikipedia: "File:Высадка на остров Нокра.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "L'Érythrée est l'une des destinations les plus abordables au monde, mais le pays impose des règles strictes aux voyageurs (guide officiel obligatoire, permis pour quitter Asmara). Le nakfa n'est pas convertible à l'étranger — prévoir dollars ou euros en espèces.",
      en: "Eritrea is one of the most affordable destinations in the world, but the country imposes strict rules on travellers (official guide required, permit needed to leave Asmara). The nakfa cannot be exchanged abroad — bring US dollars or euros in cash.",
    },
    currency: "ERN",
    exchangeRate: "1€ ≈ 17 ERN (officiel)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Pension / guesthouse à Asmara", en: "Guesthouse / pension in Asmara" }, price: "15–35 €", detail: { fr: "Simple mais propre, chambre privée", en: "Simple but clean, private room" } },
          { label: { fr: "Hôtel 3★ Asmara (Ambassador, Intercontinental)", en: "3★ hotel in Asmara (Ambassador, Intercontinental)" }, price: "60–120 €", detail: { fr: "Architecture italienne préservée", en: "Well-preserved Italian architecture" } },
          { label: { fr: "Lodge côtier Massawa ou Dahlak", en: "Coastal lodge in Massawa or Dahlak" }, price: "50–100 €", detail: { fr: "Bungalows face à la mer Rouge", en: "Bungalows facing the Red Sea" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Injera + zigni (ragoût de viande) dans un tefera", en: "Injera + zigni (meat stew) in a tefera" }, price: "3–8 €", detail: { fr: "Cuisine habesha typique", en: "Typical Habesha cuisine" } },
          { label: { fr: "Café érythréen (cérémonial, 3 tasses)", en: "Eritrean coffee ceremony (3 cups)" }, price: "1–2 €", detail: { fr: "Rituel incontournable", en: "An unmissable ritual" } },
          { label: { fr: "Restaurant d'Asmara — pizza et pasta italienne", en: "Asmara restaurant — Italian pizza and pasta" }, price: "8–15 €", detail: { fr: "Héritage culinaire italien visible partout", en: "Italian culinary heritage visible everywhere" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Bus Asmara–Massawa", en: "Asmara–Massawa bus" }, price: "5–8 €", detail: { fr: "3h de route spectaculaire", en: "3 hours on a spectacular road" } },
          { label: { fr: "Guide officiel obligatoire (hors Asmara)", en: "Mandatory official guide (outside Asmara)" }, price: "30–60 €/j", detail: { fr: "Requis par la loi pour visiter le pays", en: "Legally required to visit the country" } },
          { label: { fr: "Taxi en ville Asmara", en: "Taxi within Asmara" }, price: "1–3 €", detail: { fr: "Négocier le prix avant de monter", en: "Negotiate the fare before getting in" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Visite guidée architecture art déco Asmara", en: "Guided Art Deco architecture tour in Asmara" }, price: "20–40 €", detail: { fr: "Guide obligatoire, 3h", en: "Guide required, 3 hours" } },
          { label: { fr: "Charter bateau Dahlak (journée plongée)", en: "Dahlak boat charter (diving day trip)" }, price: "100–200 €", detail: { fr: "À diviser entre participants", en: "To be split between participants" } },
          { label: { fr: "Voyage en train Asmara–Nefasit (week-end)", en: "Asmara–Nefasit train trip (weekend)" }, price: "20–40 €", detail: { fr: "Sur réservation, train à vapeur", en: "Advance booking required, steam train" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "30–55 €/j", desc: { fr: "Guesthouse + cuisine locale + transports + guide", en: "Guesthouse + local food + transport + guide" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "80–150 €/j", desc: { fr: "Hôtel 3★ + restaurants + excursions privées", en: "3★ hotel + restaurants + private excursions" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "8 jours", en: "8 days" },
      route: {
        fr: "Asmara art déco (3j) → Train spectaculaire (1j) → Massawa + Dahlak (3j) → retour (1j)",
        en: "Art Deco Asmara (3d) → Scenic train ride (1d) → Massawa + Dahlak (3d) → return (1d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 200 – 2 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Asmara (Turkish, Ethiopian)", en: "Return flight Paris–Asmara (Turkish, Ethiopian)" }, amount: "600–900 €" },
            { label: { fr: "Hébergement (8 nuits)", en: "Accommodation (8 nights)" }, amount: "200–350 €" },
            { label: { fr: "Guide officiel (obligatoire, 6 jours)", en: "Official guide (mandatory, 6 days)" }, amount: "180–360 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "120–200 €" },
            { label: { fr: "Transports + bateau Dahlak", en: "Transport + Dahlak boat" }, amount: "150–250 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "2 500 – 4 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Asmara", en: "Return flight Paris–Asmara" }, amount: "700–1 000 €" },
            { label: { fr: "Hôtels 3★ (8 nuits)", en: "3★ hotels (8 nights)" }, amount: "600–1 000 €" },
            { label: { fr: "Guide privé + véhicule", en: "Private guide + vehicle" }, amount: "500–800 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants" }, amount: "300–500 €" },
            { label: { fr: "Plongée Dahlak + train", en: "Dahlak diving + train" }, amount: "250–500 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~9–12h via Istanbul (Turkish), Addis-Abeba (Ethiopian) ou Dubaï (flydubai). Aucun direct.", en: "~9–12h via Istanbul (Turkish), Addis Ababa (Ethiopian) or Dubai (flydubai). No direct flights." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Visa obligatoire, à demander à l'ambassade d'Érythrée à Paris. Pas de visa à l'arrivée. Délai : 2–4 semaines.", en: "Visa required, to be requested from the Eritrean embassy in Paris. No visa on arrival. Processing time: 2–4 weeks." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Nakfa (ERN). Non convertible à l'étranger. Prévoir dollars USD ou euros en espèces. Aucun distributeur accessible aux étrangers.", en: "Nakfa (ERN). Cannot be exchanged abroad. Bring US dollars or euros in cash. No ATMs are accessible to foreigners." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Tigrigna (principale), Arabe et Anglais (officiels). Français peu parlé. Guide bilingue très utile.", en: "Tigrinya (main language), Arabic and English (official). French is rarely spoken. A bilingual guide is very useful." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type C/L (européen + italien) — 230V. Adaptateur européen standard fonctionne.", en: "Type C/L (European + Italian) — 230V. A standard European adapter works." } },
    { icon: "🪪", label: { fr: "Guide obligatoire", en: "Mandatory guide" }, value: { fr: "Un guide officiel agréé est requis pour quitter Asmara. Prévoir ce coût dans le budget. L'agence de voyage organise cela.", en: "An approved official guide is required to leave Asmara. Factor this cost into your budget. Your travel agency usually arranges it." } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Antipaludéen nécessaire sur la côte (Massawa). Vaccins standard Afrique recommandés. Eau en bouteille.", en: "Malaria prophylaxis is needed on the coast (Massawa). Standard Africa travel vaccinations are recommended. Drink bottled water." } },
    { icon: "📵", label: { fr: "Internet", en: "Internet" }, value: { fr: "Accès Internet très limité et lent. Réseaux sociaux parfois bloqués. Prévoir un déconnecté assumé.", en: "Internet access is very limited and slow. Social media is sometimes blocked. Expect an intentionally unplugged trip." } },
  ],
};
