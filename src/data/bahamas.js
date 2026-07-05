export const BAHAMAS = {
  code: "BHS",
  numericId: 44,
  name: { fr: "Bahamas", en: "Bahamas" },
  emoji: "🇧🇸",
  capital: { fr: "Nassau", en: "Nassau" },
  language: { fr: "Anglais", en: "English" },
  currency: { fr: "Dollar des Bahamas (BSD)", en: "Bahamian dollar (BSD)" },
  timezone: "UTC-5",
  filter: { budgetMin: 100, budgetMid: 200, tripMin: 1800, tripMid: 3500 },
  description: {
    fr: "L'archipel des Bahamas s'étend sur plus de 700 îles et îlots dispersés entre la Floride et Cuba, offrant certaines des eaux les plus transparentes et les plus colorées du monde, des bleus électriques aux turquoises éclatants. Nassau, la capitale animée, mêle resorts luxueux, culture junkanoo et histoire coloniale, tandis que les îles extérieures (Out Islands) comme les Exumas ou Eleuthera offrent une solitude paradisiaque à quelques minutes d'avion. Les Bahamas sont aussi réputées pour leur faune marine exceptionnelle : requins des récifs, raies, dauphins sauvages et les célèbres cochons nageurs d'Exuma.",
    en: "The Bahamian archipelago stretches across more than 700 islands and cays scattered between Florida and Cuba, offering some of the clearest and most vividly coloured waters in the world, from electric blues to dazzling turquoise. Nassau, the lively capital, blends luxury resorts, Junkanoo culture and colonial history, while the Out Islands such as the Exumas and Eleuthera offer blissful seclusion just a short flight away. The Bahamas are also renowned for their exceptional marine life: reef sharks, rays, wild dolphins and Exuma's famous swimming pigs.",
  },
  bestPeriods: [
    {
      months: { fr: "Déc – Mai", en: "December – May" },
      label: { fr: "Haute saison", en: "High season" },
      color: "#22c55e",
      description: {
        fr: "Temps sec et ensoleillé, eaux calmes, températures idéales — réserver longtemps à l'avance",
        en: "Dry, sunny weather, calm waters and ideal temperatures — book well in advance",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Jun – Nov", en: "June – November" },
      label: { fr: "Saison cyclonique", en: "Hurricane season" },
      color: "#f59e0b",
      description: {
        fr: "Prix réduits, moins de touristes, mais risque significatif d'ouragans — vérifier les prévisions",
        en: "Lower prices and fewer tourists, but a significant hurricane risk — check forecasts carefully",
      },
      icon: "🌀",
    },
  ],
  weatherCities: [
    {
      id: "nassau",
      name: "Nassau",
      region: { fr: "New Providence", en: "New Providence" },
      data: [
        { month: "Jan", temp: 22, rain: 40, icon: "☀️" },
        { month: "Fév", temp: 22, rain: 38, icon: "☀️" },
        { month: "Mar", temp: 23, rain: 40, icon: "☀️" },
        { month: "Avr", temp: 24, rain: 55, icon: "☀️" },
        { month: "Mai", temp: 26, rain: 100, icon: "⛅" },
        { month: "Jun", temp: 27, rain: 110, icon: "🌧️" },
        { month: "Jul", temp: 28, rain: 120, icon: "🌧️" },
        { month: "Aoû", temp: 28, rain: 130, icon: "🌧️" },
        { month: "Sep", temp: 27, rain: 170, icon: "🌧️" },
        { month: "Oct", temp: 26, rain: 140, icon: "🌧️" },
        { month: "Nov", temp: 24, rain: 65, icon: "☀️" },
        { month: "Déc", temp: 23, rain: 50, icon: "☀️" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: { fr: "Nassau & Paradise Island", en: "Nassau & Paradise Island" },
      region: { fr: "New Providence", en: "New Providence" },
      description: {
        fr: "Nassau, capitale des Bahamas, est une ville animée où les demeures coloniales pastel côtoient les casinos et les bateaux de croisière géants. Le quartier historique offre des rues colorées, le marché artisanal de Straw Market et les fortifications britanniques du XVIIIe siècle. Paradise Island, reliée par pont, abrite l'Atlantis Resort avec son parc aquatique spectaculaire, ses aquariums ouverts et ses plages de sable blanc.",
        en: "Nassau, the capital of the Bahamas, is a lively city where pastel colonial mansions sit alongside casinos and giant cruise ships. The historic district features colourful streets, the Straw Market craft market and 18th-century British fortifications. Connected by bridge, Paradise Island is home to Atlantis Resort, with its spectacular water park, open-air aquariums and white-sand beaches.",
      },
      wikipedia: "Nassau,_Bahamas",
      tags: ["Plage", "Culture", "Casino", "Histoire coloniale"],
      mustSee: [
        {
          name: { fr: "Fort Fincastle et Queen's Staircase — escalier taillé dans le corail", en: "Fort Fincastle and Queen's Staircase — staircase carved into coral" },
          wikipedia: "File:Bahamas - Nassau, Queens Staircase - panoramio.jpg",
        },
        {
          name: { fr: "Cable Beach — plage urbaine avec hôtels en bord de mer", en: "Cable Beach — urban beach lined with seafront hotels" },
          wikipedia: "File:Cable Beach, Torndirrup National Park, April 2022 04.jpg",
        },
        {
          name: { fr: "Atlantis Paradise Island — resort aquatique spectaculaire", en: "Atlantis Paradise Island — spectacular water resort" },
          wikipedia: "Atlantis_Paradise_Island",
        },
        {
          name: { fr: "Bay Street — shopping colonial et marché artisanal", en: "Bay Street — colonial shopping street and craft market" },
          wikipedia: "Nassau,_Bahamas",
        },
      ],
    },
    {
      id: 2,
      name: "Exuma Cays",
      region: { fr: "Exumas", en: "Exumas" },
      description: {
        fr: "Les Exumas sont un archipel d'îlots sauvages aux eaux d'un bleu irréel, mondialement célèbre pour ses cochons nageurs de Big Major Cay, ses requins nourrices de Compass Cay et ses raies géantes de Stingray City. L'Exuma Land and Sea Park, l'un des premiers parcs marins protégés de l'Atlantique, abrite des coraux en excellent état et une biodiversité marine exceptionnelle. George Town, chef-lieu paisible, est un point de départ idéal pour explorer l'archipel en catamaran.",
        en: "The Exumas are an archipelago of wild cays with unreal blue waters, world-famous for the swimming pigs of Big Major Cay, the nurse sharks of Compass Cay and the giant rays of Stingray City. Exuma Land and Sea Park, one of the Atlantic's first protected marine parks, is home to healthy coral and outstanding marine biodiversity. The peaceful town of George Town is an ideal base for exploring the archipelago by catamaran.",
      },
      wikipedia: "File:Emerald bay great exuma bahamas.jpg",
      tags: ["Plage", "Snorkeling", "Faune marine", "Kayak"],
      mustSee: [
        {
          name: { fr: "Cochons nageurs de Big Major Cay — unique au monde", en: "Big Major Cay swimming pigs — one of a kind" },
          wikipedia: "File:Pigs and gulls on the beach.jpg",
        },
        {
          name: { fr: "Exuma Land and Sea Park — premier parc marin protégé de l'Atlantique", en: "Exuma Land and Sea Park — the Atlantic's first protected marine park" },
          wikipedia: "Exuma_Cays_Land_and_Sea_Park",
        },
        { name: "Thunderball Grotto", wikipedia: "File:Mary_938.JPG" },
      ],
    },
    {
      id: 3,
      name: { fr: "Eleuthera & Harbour Island", en: "Eleuthera & Harbour Island" },
      region: { fr: "Eleuthera", en: "Eleuthera" },
      description: {
        fr: "Eleuthera est une île longue et fine réputée pour ses plages de sable rose, phénomène naturel dû aux foraminifères microscopiques brisés par les vagues. Harbour Island, minuscule îlot accessible en water taxi, est considérée comme l'une des plus belles adresses des Caraïbes avec sa célèbre Pink Sand Beach et ses maisons en bois pastel. Glass Window Bridge, point le plus étroit de l'île, offre la vue saisissante de l'Atlantique sombre d'un côté et des eaux turquoise des Caraïbes de l'autre.",
        en: "Eleuthera is a long, slender island famed for its pink-sand beaches, a natural phenomenon caused by microscopic foraminifera broken up by the waves. Harbour Island, a tiny islet reached by water taxi, is considered one of the Caribbean's most beautiful hideaways, with its famous Pink Sand Beach and pastel wooden houses. Glass Window Bridge, the island's narrowest point, offers a striking view of the dark Atlantic on one side and the turquoise Caribbean waters on the other.",
      },
      wikipedia: "File:Eleuthera.jpg",
      tags: ["Plage rose", "Luxe discret", "Snorkeling", "Photographie"],
      mustSee: [
        {
          name: { fr: "Pink Sand Beach (Harbour Island) — sable rose unique", en: "Pink Sand Beach (Harbour Island) — uniquely pink sand" },
          wikipedia: "File:Beachsunsetdog.jpg",
        },
        {
          name: { fr: "Dunmore Town — village colonial aux maisons de couleur", en: "Dunmore Town — colonial village with colourful houses" },
          wikipedia: "File:Bahamas_1989_(339)_Eleuthera_Dunmore_Town,_Harbour_Island_(24293986816).jpg",
        },
        {
          name: { fr: "Current Cut — passage rapide pour plongée en dérive", en: "Current Cut — swift channel for drift diving" },
          wikipedia: "File:Eleuthera.jpg",
        },
      ],
    },
    {
      id: 4,
      name: { fr: "Grand Bahama & Freeport", en: "Grand Bahama & Freeport" },
      region: { fr: "Grand Bahama", en: "Grand Bahama" },
      description: {
        fr: "Grand Bahama est la quatrième île en superficie de l'archipel et la plus accessible depuis la Floride, à seulement 90 km de Palm Beach. Le Lucayan National Park abrite l'un des plus longs systèmes de grottes sous-marines du monde, ainsi que des mangroves préservées. Les centres de plongée de Freeport proposent des excursions vers des épaves et des récifs coralliens en excellente santé, avec une forte présence de dauphins sauvages.",
        en: "Grand Bahama is the archipelago's fourth-largest island and the easiest to reach from Florida, just 90 km from Palm Beach. Lucayan National Park contains one of the world's longest underwater cave systems as well as unspoiled mangroves. Freeport's dive centres offer trips to wrecks and coral reefs in excellent condition, with frequent sightings of wild dolphins.",
      },
      wikipedia: "Grand_Bahama",
      tags: ["Plongée", "Nature", "Accessible", "Grottes"],
      mustSee: [
        {
          name: { fr: "Lucayan National Park — grottes sous-marines et mangroves", en: "Lucayan National Park — underwater caves and mangroves" },
          wikipedia: "Lucayan_National_Park",
        },
        {
          name: { fr: "UNEXSO — centre de plongée avec dauphins sauvages", en: "UNEXSO — dive centre with wild dolphins" },
          wikipedia: "File:Grand Bahama Island (Little Bahama Bank) 4.jpg",
        },
        {
          name: { fr: "Gold Rock Beach — plage isolée aux eaux cristallines", en: "Gold Rock Beach — secluded beach with crystal-clear water" },
          wikipedia: "File:Gold_Rock_Beach_Grand_Bahama_Island.jpg",
        },
        {
          name: { fr: "Freeport International Bazaar — marché artisanal couvert", en: "Freeport International Bazaar — covered craft market" },
          wikipedia: "Freeport,_Bahamas",
        },
      ],
    },
  ],
  costOfLiving: {
    intro: {
      fr: "Les Bahamas font partie des destinations caribéennes les plus chères, notamment en raison de leur proximité avec les États-Unis et de leur économie orientée vers le tourisme de luxe. Les îles extérieures (Out Islands) sont souvent moins onéreuses que Nassau.",
      en: "The Bahamas are among the Caribbean's most expensive destinations, largely because of their proximity to the United States and an economy geared towards luxury tourism. The Out Islands are often less expensive than Nassau.",
    },
    currency: "BSD",
    exchangeRate: "1€ ≈ 1,08 BSD (parité quasi-fixe avec le dollar américain)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Petit hôtel / guesthouse", en: "Small hotel / guesthouse" }, price: "80–130 €" },
          { label: { fr: "Hôtel de confort intermédiaire", en: "Mid-range hotel" }, price: "150–250 €" },
          { label: { fr: "Resort balnéaire haut de gamme", en: "High-end beach resort" }, price: "300–600 €" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Fish fry local (langouste grillée, conch)", en: "Local fish fry (grilled lobster, conch)" }, price: "12–20 €" },
          { label: { fr: "Restaurant intermédiaire", en: "Mid-range restaurant" }, price: "25–45 €" },
          { label: { fr: "Dîner gastronomique dans un resort", en: "Fine-dining dinner in a resort" }, price: "60–120 €" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Jitney (bus local à Nassau)", en: "Jitney (local bus in Nassau)" }, price: "1–2 €" },
          { label: { fr: "Vol inter-îles (Nassau–Exuma)", en: "Inter-island flight (Nassau–Exuma)" }, price: "80–200 € A/R" },
          { label: { fr: "Location de voiture / jour", en: "Car rental / day" }, price: "50–100 €" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Excursion cochons nageurs (Exuma, journée)", en: "Swimming pigs excursion (Exuma, full day)" }, price: "80–150 €" },
          { label: { fr: "Plongée (2 bouteilles + équipement)", en: "Diving (2 tanks + gear)" }, price: "80–120 €" },
          { label: { fr: "Bateau privatisé pour snorkeling", en: "Private boat for snorkelling" }, price: "100–200 €" },
        ],
      },
    ],
    budgetSummary: [
      {
        type: { fr: "Routard", en: "Backpacker" },
        daily: "100–150 €/j",
        desc: { fr: "Guesthouse, fish fry local, jitneys et ferrys, snorkeling sans guide", en: "Guesthouse, local fish fry, jitneys and ferries, unguided snorkelling" },
        color: "#22c55e",
      },
      {
        type: { fr: "Confort", en: "Comfort" },
        daily: "200–400 €/j",
        desc: { fr: "Resort en bord de mer, restaurants variés, excursions guidées, vols inter-îles", en: "Seafront resort, varied restaurants, guided excursions, inter-island flights" },
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days" },
      route: {
        fr: "Nassau (3j) → Exumas (4j, cochons nageurs + snorkeling) → Eleuthera/Harbour Island (3j)",
        en: "Nassau (3d) → Exumas (4d, swimming pigs + snorkelling) → Eleuthera/Harbour Island (3d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 800 – 2 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Nassau", en: "Return flight Paris–Nassau" }, amount: "600–900 €" },
            { label: { fr: "Hébergement (9 nuits)", en: "Accommodation (9 nights)" }, amount: "720–1 170 €" },
            { label: { fr: "Vols inter-îles + ferrys", en: "Inter-island flights + ferries" }, amount: "200–350 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "180–300 €" },
            { label: { fr: "Activités + excursions", en: "Activities + excursions" }, amount: "200–350 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "3 500 – 5 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Nassau", en: "Return flight Paris–Nassau" }, amount: "900–1 300 €" },
            { label: { fr: "Hébergement (9 nuits, resorts)", en: "Accommodation (9 nights, resorts)" }, amount: "1 800–3 000 €" },
            { label: { fr: "Transports + vols inter-îles", en: "Transport + inter-island flights" }, amount: "350–600 €" },
            { label: { fr: "Nourriture + restaurants", en: "Food + restaurants" }, amount: "400–700 €" },
            { label: { fr: "Activités guidées + plongée", en: "Guided activities + diving" }, amount: "300–500 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    {
      icon: "✈️",
      label: { fr: "Vol depuis Paris", en: "Flight from Paris" },
      value: { fr: "10–13h avec escale (Miami, New York ou Atlanta — American Airlines, Delta, Air France)", en: "10–13h with a stopover (Miami, New York or Atlanta — American Airlines, Delta, Air France)" },
    },
    {
      icon: "🪪",
      label: { fr: "Visa", en: "Visa" },
      value: { fr: "Pas de visa requis pour les Français (séjour ≤ 90 jours) — passeport valide 6 mois minimum", en: "No visa required for French citizens (stay ≤ 90 days) — passport valid for at least 6 months" },
    },
    {
      icon: "💰",
      label: { fr: "Monnaie", en: "Currency" },
      value: { fr: "Dollar bahamien (BSD, parité 1:1 avec le USD) — USD accepté partout, cartes bancaires généralisées", en: "Bahamian dollar (BSD, 1:1 peg with the US dollar) — USD accepted everywhere, card payments widely used" },
    },
    {
      icon: "🗣️",
      label: { fr: "Langue", en: "Language" },
      value: { fr: "Anglais (officiel) — créole bahamien dans les milieux locaux", en: "English (official) — Bahamian Creole in local communities" },
    },
    {
      icon: "🔌",
      label: { fr: "Prise électrique", en: "Power outlet" },
      value: { fr: "Type A/B (120V, 60Hz) — adaptateur nécessaire pour les Européens", en: "Type A/B (120V, 60Hz) — adapter needed for European travellers" },
    },
    {
      icon: "💊",
      label: { fr: "Santé", en: "Health" },
      value: { fr: "Pas de vaccins tropicaux requis. Dengue présente — protection anti-moustiques recommandée. Crème solaire biodégradable conseillée pour préserver les récifs.", en: "No tropical vaccines required. Dengue is present — mosquito protection is recommended. Reef-safe sunscreen is advised to help preserve the coral reefs." },
    },
    {
      icon: "🌀",
      label: { fr: "Cyclones", en: "Hurricanes" },
      value: { fr: "Saison cyclonique juin–novembre — risque réel, éviter ou souscrire une assurance annulation solide", en: "Hurricane season runs from June to November — the risk is real, so either avoid this period or take out strong cancellation cover" },
    },
    {
      icon: "🐠",
      label: { fr: "Plongée", en: "Diving" },
      value: { fr: "Certains sites interdisent les crèmes solaires chimiques — utiliser des protections minérales pour protéger les coraux", en: "Some sites ban chemical sunscreens — use mineral protection to help safeguard the coral" },
    },
  ],
};
