export const BELIZE = {
  code: "BLZ",
  numericId: 84,
  name: { fr: "Belize", en: "Belize" },
  emoji: "🇧🇿",
  capital: { fr: "Belmopan", en: "Belmopan" },
  language: { fr: "Anglais, Espagnol, Kriol", en: "English, Spanish, Kriol" },
  currency: { fr: "Dollar bélizien (BZD)", en: "Belize dollar (BZD)" },
  timezone: "UTC-6",
  filter: {
    budgetMin: 60, budgetMid: 120,
    tripMin: 1800, tripMid: 3800,
  },
  description: {
    fr: "Le Belize est la perle de la Mésoamérique : le Great Blue Hole, trou bleu légendaire classé UNESCO, et la deuxième barrière de corail au monde. Jungle maya, jaguars du parc Cockscomb, ruines de Caracol et atolls caraïbes paradisiaques composent un pays-nature à taille humaine.",
    en: "Belize is the jewel of Mesoamerica: home to the legendary UNESCO-listed Great Blue Hole and the world's second-largest barrier reef. Maya jungle, jaguars in Cockscomb Park, the ruins of Caracol and idyllic Caribbean atolls make up a compact country devoted to nature.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Avril", en: "November – April" },
      label: { fr: "Saison sèche", en: "Dry season" },
      color: "#22c55e",
      description: {
        fr: "Meilleure période : mer calme, visibilité parfaite pour la plongée et le snorkel. Bonne saison pour les ruines mayas et la jungle.",
        en: "Best time to go: calm seas and perfect visibility for diving and snorkelling. Also a great season for Maya ruins and the jungle.",
      },
      icon: "🐠",
    },
    {
      months: { fr: "Juillet – Août", en: "July – August" },
      label: { fr: "Veranillo", en: "Veranillo" },
      color: "#fb923c",
      description: {
        fr: "Pause sèche relative en pleine saison des pluies. Moins de monde, tarifs réduits, jungle verte.",
        en: "A relatively dry break in the middle of the rainy season. Fewer crowds, lower prices and lush green jungle.",
      },
      icon: "🌿",
    },
  ],

  weatherCities: [
    {
      id: "belize_city",
      name: "Belize City",
      region: { fr: "Côte", en: "Coast" },
      data: [
        { month: "Jan", temp: 24, rain: 90,  icon: "☀️" },
        { month: "Fév", temp: 25, rain: 50,  icon: "☀️" },
        { month: "Mar", temp: 26, rain: 35,  icon: "☀️" },
        { month: "Avr", temp: 28, rain: 45,  icon: "⛅" },
        { month: "Mai", temp: 29, rain: 120, icon: "🌧️" },
        { month: "Jun", temp: 29, rain: 200, icon: "🌧️" },
        { month: "Jul", temp: 28, rain: 170, icon: "🌧️" },
        { month: "Aoû", temp: 28, rain: 170, icon: "🌧️" },
        { month: "Sep", temp: 28, rain: 230, icon: "🌧️" },
        { month: "Oct", temp: 27, rain: 250, icon: "🌧️" },
        { month: "Nov", temp: 26, rain: 140, icon: "☀️" },
        { month: "Déc", temp: 24, rain: 100, icon: "☀️" },
      ],
    },
    {
      id: "cayo",
      name: "Cayo",
      region: { fr: "Ouest", en: "West" },
      data: [
        { month: "Jan", temp: 23, rain: 80,  icon: "☀️" },
        { month: "Fév", temp: 24, rain: 40,  icon: "☀️" },
        { month: "Mar", temp: 26, rain: 30,  icon: "☀️" },
        { month: "Avr", temp: 28, rain: 40,  icon: "⛅" },
        { month: "Mai", temp: 28, rain: 100, icon: "🌧️" },
        { month: "Jun", temp: 27, rain: 180, icon: "🌧️" },
        { month: "Jul", temp: 27, rain: 150, icon: "🌧️" },
        { month: "Aoû", temp: 27, rain: 150, icon: "🌧️" },
        { month: "Sep", temp: 26, rain: 200, icon: "⛅" },
        { month: "Oct", temp: 25, rain: 220, icon: "⛅" },
        { month: "Nov", temp: 24, rain: 110, icon: "☀️" },
        { month: "Déc", temp: 23, rain: 80,  icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Great Blue Hole & Atolls", en: "Great Blue Hole & Atolls" },
      region: { fr: "Mer des Caraïbes", en: "Caribbean Sea" },
      description: {
        fr: "Le Great Blue Hole, cratère sous-marin de 300 m de diamètre et 125 m de profondeur, est l'une des merveilles naturelles mondiales inscrites à l'UNESCO. Entouré du Lighthouse Reef, il offre l'une des plongées les plus mythiques de la planète, avec stalactites géantes et requins.",
        en: "The Great Blue Hole, an underwater sinkhole 300 m across and 125 m deep, is one of the world's UNESCO-listed natural wonders. Surrounded by Lighthouse Reef, it offers one of the most legendary dives on the planet, with giant stalactites and sharks.",
      },
      wikipedia: "Great_Blue_Hole",
      tags: ["UNESCO", "Plongée", "Snorkel", "Nature"],
      mustSee: [
        { name: { fr: "Plongée dans le Great Blue Hole (−40 m)", en: "Dive in the Great Blue Hole (−40 m)" }, wikipedia: "Lighthouse_Reef" },
        { name: { fr: "Half Moon Caye — fous à pieds rouges", en: "Half Moon Caye — red-footed boobies" }, wikipedia: "Half_Moon_Caye" },
        { name: { fr: "Turneffe Atoll — snorkel récifs", en: "Turneffe Atoll — reef snorkelling" }, wikipedia: "Turneffe_Atoll" },
        { name: { fr: "Requins de récif et tortues vertes", en: "Reef sharks and green turtles" }, wikipedia: "Nurse_shark" },
      ],
    },
    {
      id: 2,
      name: "Ambergris Caye",
      region: { fr: "Caraïbes Nord", en: "Northern Caribbean" },
      description: {
        fr: "Ambergris Caye est la plus grande île du Belize et la plus populaire : San Pedro, village de plage animé, la réserve marine Hol Chan et Shark Ray Alley où l'on nage avec raies pastenagues et requins citrons en toute sécurité.",
        en: "Ambergris Caye is Belize's largest and most popular island: home to San Pedro, a lively beach town, the Hol Chan Marine Reserve, and Shark Ray Alley where you can safely swim with stingrays and nurse sharks.",
      },
      wikipedia: "Ambergris_Caye",
      tags: ["Île", "Plage", "Snorkel", "Vie nocturne"],
      mustSee: [
        { name: { fr: "Hol Chan Marine Reserve — snorkel coraux", en: "Hol Chan Marine Reserve — coral snorkelling" }, wikipedia: "Hol_Chan_Marine_Reserve" },
        { name: { fr: "Shark Ray Alley — nage avec raies & requins", en: "Shark Ray Alley — swim with rays & sharks" }, wikipedia: "File:Nurse Shark (Ginglymostoma cirratum) (36552532791).jpg" },
        { name: { fr: "Caye Caulker — plage No Shoes, No Shirts", en: "Caye Caulker — laid-back “No Shoes, No Shirts” beach vibe" }, wikipedia: "Caye_Caulker" },
        { name: { fr: "San Pedro — vie nocturne & fruits de mer", en: "San Pedro — nightlife & seafood" }, wikipedia: "File:Barrier Reef Drive, San Pedro Town, Belize.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Caracol & Ruines Mayas", en: "Caracol & Maya Ruins" },
      region: { fr: "Ouest (Cayo)", en: "West (Cayo)" },
      description: {
        fr: "Caracol est la plus grande cité maya du Belize, cachée dans la forêt de la réserve Chiquibul. Sa pyramide Caana (Sky Palace, 43 m) surpasse Belmopan en hauteur. Jaguars, tapirs et singes hurleurs côtoient les archéologues.",
        en: "Caracol is Belize's largest Maya city, hidden in the forests of the Chiquibul Reserve. Its Caana pyramid (Sky Palace, 43 m) rises higher than Belmopan. Jaguars, tapirs and howler monkeys share the area with archaeologists.",
      },
      wikipedia: "File:Caana, top view, Caracol, Chiquibul Forest Reserve, Belize.jpg",
      tags: ["Mayas", "Jungle", "Archéologie", "Faune"],
      mustSee: [
        { name: { fr: "Pyramide Caana (Sky Palace) — panorama jungle", en: "Caana Pyramid (Sky Palace) — jungle panorama" }, wikipedia: "File:Caracol-Temple.jpg" },
        { name: { fr: "Stèles et autels mayas sculptés", en: "Carved Maya stelae and altars" }, wikipedia: "File:Stone Stela, Caana, Caracol, Belize.jpg" },
        { name: { fr: "Réserve Chiquibul — jaguars & tapirs", en: "Chiquibul Reserve — jaguars & tapirs" }, wikipedia: "File:Coringa Reserve Forest from the Watch Tower (02).jpg" },
        { name: { fr: "Xunantunich — site maya accessible", en: "Xunantunich — easily accessible Maya site" }, wikipedia: "Xunantunich" },
      ],
    },
    {
      id: 4,
      name: { fr: "Cayo & Grottes d'Actun Tunichil Muknal", en: "Cayo & Actun Tunichil Muknal Caves" },
      region: { fr: "Ouest", en: "West" },
      description: {
        fr: "Le Cayo District est le cœur aventure du Belize : les grottes ATM (Actun Tunichil Muknal), sanctuaire maya rempli de squelettes et céramiques sacrées, les chutes de San Ignacio et la forêt primaire de la Mountain Pine Ridge.",
        en: "The Cayo District is Belize's adventure heartland: the ATM caves (Actun Tunichil Muknal), a Maya sanctuary filled with skeletons and sacred pottery, the waterfalls near San Ignacio, and the primary forest of Mountain Pine Ridge.",
      },
      wikipedia: "File:Belize mountians, Cayo district Laslovarga002.JPG",
      tags: ["Grottes", "Aventure", "Nature", "Mayas"],
      mustSee: [
        { name: { fr: "Grottes ATM — squelettes mayas in situ", en: "ATM caves — Maya skeletons in situ" }, wikipedia: "Actun_Tunichil_Muknal" },
        { name: { fr: "Mountain Pine Ridge — chutes & piscines", en: "Mountain Pine Ridge — waterfalls & pools" }, wikipedia: "Mountain_Pine_Ridge_Forest_Reserve" },
        { name: { fr: "Cockscomb Basin — sanctuaire jaguar", en: "Cockscomb Basin — jaguar sanctuary" }, wikipedia: "Cockscomb_Basin_Wildlife_Sanctuary" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Belize est relativement cher pour l'Amérique centrale car beaucoup de produits sont importés. Le dollar bélizien est arrimé au dollar américain (2 BZD = 1 USD). Les îles coûtent plus cher que le continent.",
      en: "Belize is relatively expensive for Central America because many products are imported. The Belize dollar is pegged to the US dollar (2 BZD = 1 USD). The islands are pricier than the mainland.",
    },
    currency: "BZD",
    exchangeRate: "1€ ≈ 2,2 USD (2 BZD = 1 USD)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Hostel continental (Cayo)", en: "Mainland hostel (Cayo)" }, price: "20–35 €", detail: { fr: "Dortoir ou chambre simple", en: "Dorm bed or simple room" } },
          { label: { fr: "Guesthouse Ambergris Caye", en: "Ambergris Caye guesthouse" }, price: "60–120 €", detail: { fr: "Chambre avec ventilateur", en: "Room with fan" } },
          { label: { fr: "Resort balnéaire", en: "Beach resort" }, price: "200–500 €", detail: { fr: "Front de mer, tout-inclus", en: "Beachfront, all-inclusive" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Rice & beans + poulet (local)", en: "Rice & beans + chicken (local)" }, price: "4–7 €", detail: { fr: "Plat national, partout", en: "National dish, found everywhere" } },
          { label: { fr: "Fruits de mer (Ambergris Caye)", en: "Seafood (Ambergris Caye)" }, price: "15–25 €", detail: { fr: "Langouste, crevettes", en: "Lobster, shrimp" } },
          { label: { fr: "Restaurant avec vue mer", en: "Sea-view restaurant" }, price: "25–45 €", detail: { fr: "Poissons frais & cocktails", en: "Fresh fish & cocktails" } },
        ],
      },
      {
        id: "transport",
        icon: "🚤",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Ferry Belize City–Ambergris Caye", en: "Belize City–Ambergris Caye ferry" }, price: "15–20 €", detail: { fr: "1h15 en bateau express", en: "1h15 by express boat" } },
          { label: { fr: "Bus continent (Cayo–Belize City)", en: "Mainland bus (Cayo–Belize City)" }, price: "5–8 €", detail: { fr: "Confortable, régulier", en: "Comfortable, frequent" } },
          { label: { fr: "Excursion Great Blue Hole", en: "Great Blue Hole excursion" }, price: "250–350 €", detail: { fr: "Journée complète en avion + bateau", en: "Full-day trip by plane + boat" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Plongée (2 plongées)", en: "Diving (2 dives)" }, price: "60–90 €", detail: { fr: "Guide + équipement", en: "Guide + equipment" } },
          { label: { fr: "Grottes ATM (guide obligatoire)", en: "ATM caves (guide required)" }, price: "60–80 €", detail: { fr: "Demi-journée, inoubliable", en: "Half-day, unforgettable" } },
          { label: { fr: "Snorkel Hol Chan (demi-journée)", en: "Hol Chan snorkelling (half-day)" }, price: "25–40 €", detail: { fr: "Bateau + guide + masque", en: "Boat + guide + mask" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "60–90 €/j", desc: { fr: "Hostel continent + cuisine locale + bus", en: "Mainland hostel + local food + buses" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "120–200 €/j", desc: { fr: "Guesthouse île + restos + plongée", en: "Island guesthouse + restaurants + diving" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury" }, daily: "350 €+/j", desc: { fr: "Resort front de mer + Blue Hole + guide privé", en: "Beachfront resort + Blue Hole + private guide" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days" },
      route: {
        fr: "Belize City (1j) → Ambergris Caye / Blue Hole (4j) → Cayo & Caracol (3j) → Cockscomb & côte (2j)",
        en: "Belize City (1d) → Ambergris Caye / Blue Hole (4d) → Cayo & Caracol (3d) → Cockscomb & coast (2d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 800 – 2 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Belize City", en: "Return flight Paris–Belize City" }, amount: "600–900 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "400–600 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "300–450 €" },
            { label: { fr: "Ferries & transports", en: "Ferries & transport" }, amount: "200–300 €" },
            { label: { fr: "Activités (snorkel, grottes)", en: "Activities (snorkelling, caves)" }, amount: "200–350 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "3 800 – 5 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Belize City", en: "Return flight Paris–Belize City" }, amount: "700–1 100 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "1 000–1 600 €" },
            { label: { fr: "Nourriture & cocktails", en: "Food & cocktails" }, amount: "500–750 €" },
            { label: { fr: "Plongées & excursions", en: "Dives & excursions" }, amount: "700–1 000 €" },
            { label: { fr: "Transports & imprévus", en: "Transport & contingency" }, amount: "400–600 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury" },
          color: "#f59e0b",
          total: "9 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris (Business)", en: "Return flight Paris (Business)" }, amount: "2 500–4 000 €" },
            { label: { fr: "Resorts front de mer (10 nuits)", en: "Beachfront resorts (10 nights)" }, amount: "3 000–5 000 €" },
            { label: { fr: "Plongée Blue Hole + excursions privées", en: "Blue Hole dive + private excursions" }, amount: "800–1 500 €" },
            { label: { fr: "Gastronomie & spa", en: "Fine dining & spa" }, amount: "600–1 000 €" },
            { label: { fr: "Transfers privés & extras", en: "Private transfers & extras" }, amount: "400 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~12h avec escale (via Miami ou Houston)", en: "~12h with a layover (via Miami or Houston)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Sans visa 30 jours (Français), extensible sur place", en: "No visa for 30 days (French citizens), extendable locally" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Dollar bélizien (2 BZD = 1 USD) — USD acceptés partout", en: "Belize dollar (2 BZD = 1 USD) — USD accepted everywhere" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Anglais (officiel), Espagnol, Kriol bélizien", en: "English (official), Spanish, Belizean Kriol" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type A/B/G – 110 V", en: "Type A/B/G – 110 V" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "Couverture correcte sur les îles, limitée en jungle", en: "Good coverage on the islands, limited in the jungle" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Non potable — eau en bouteille ou filtrée", en: "Not drinkable — bottled or filtered water" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Antipaludéen recommandé en zone continentale et jungle", en: "Antimalarial medication recommended on the mainland and in the jungle" } },
  ],
};
