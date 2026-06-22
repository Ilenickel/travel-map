export const MOZAMBIQUE = {
  code: "MOZ",
  numericId: 508,
  name: "Mozambique",
  emoji: "🇲🇿",
  capital: "Maputo",
  language: "Portugais, Makua, Changana, Sena",
  currency: "Metical (MZN)",
  timezone: "UTC+2",
  filter: {
    budgetMin: 35, budgetMid: 75,
    tripMin: 1200, tripMid: 2800,
  },
  description:
    "Le Mozambique déroule 2 500 km de côte sur l'océan Indien : l'archipel de Bazaruto (UNESCO) avec ses dunes et ses dugongs, l'archipel des Quirimbas avec ses dhows et ses récifs préservés, et Vilanculos comme base de plongée. Un pays peu fréquenté au sablé doux, marqué par la culture swahili et une hospitalité sincère. À combiner avec les parcs animaliers du Gorongosa.",

  bestPeriods: [
    {
      months: "Avril – Octobre",
      label: "Saison sèche",
      color: "#22c55e",
      description:
        "Meilleure période : ciel dégagé, mer calme, températures agréables (19–26°C). Plongée optimale et accès aux parcs facilité. Baleines à bosse de juillet à octobre.",
      icon: "☀️",
    },
    {
      months: "Novembre – Mars",
      label: "Saison des pluies / cyclones",
      color: "#ef4444",
      description:
        "Pluies et chaleur (27–32°C). Risque cyclonique sur le nord. Routes de brousse impraticables. Plongée dégradée au nord.",
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "maputo",
      name: "Maputo",
      region: "Sud (capitale)",
      data: [
        { month: "Jan", temp: 27, rain: 130, icon: "🌧️" },
        { month: "Fév", temp: 27, rain: 120, icon: "🌧️" },
        { month: "Mar", temp: 26, rain: 80,  icon: "⛅" },
        { month: "Avr", temp: 23, rain: 35,  icon: "☀️" },
        { month: "Mai", temp: 21, rain: 20,  icon: "☀️" },
        { month: "Jun", temp: 19, rain: 15,  icon: "☀️" },
        { month: "Jul", temp: 18, rain: 10,  icon: "☀️" },
        { month: "Aoû", temp: 19, rain: 15,  icon: "☀️" },
        { month: "Sep", temp: 21, rain: 15,  icon: "☀️" },
        { month: "Oct", temp: 23, rain: 30,  icon: "☀️" },
        { month: "Nov", temp: 25, rain: 70,  icon: "⛅" },
        { month: "Déc", temp: 27, rain: 110, icon: "🌧️" },
      ],
    },
    {
      id: "vilanculos",
      name: "Vilanculos",
      region: "Centre — porte de Bazaruto",
      data: [
        { month: "Jan", temp: 28, rain: 120, icon: "🌧️" },
        { month: "Fév", temp: 28, rain: 110, icon: "🌧️" },
        { month: "Mar", temp: 27, rain: 80,  icon: "🌧️" },
        { month: "Avr", temp: 25, rain: 40,  icon: "⛅" },
        { month: "Mai", temp: 23, rain: 20,  icon: "☀️" },
        { month: "Jun", temp: 21, rain: 10,  icon: "☀️" },
        { month: "Jul", temp: 20, rain: 10,  icon: "☀️" },
        { month: "Aoû", temp: 21, rain: 10,  icon: "☀️" },
        { month: "Sep", temp: 23, rain: 15,  icon: "☀️" },
        { month: "Oct", temp: 25, rain: 30,  icon: "☀️" },
        { month: "Nov", temp: 27, rain: 60,  icon: "⛅" },
        { month: "Déc", temp: 28, rain: 100, icon: "🌧️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Archipel de Bazaruto — Dugongs et récifs",
      region: "Inhambane (centre-sud)",
      description:
        "L'archipel de Bazaruto regroupe cinq îles barrière protégées par un parc national marin (UNESCO) : dunes de sable montant à 100m, récifs coralliens intacts, dugongs (l'une des dernières populations viables d'Afrique orientale), raies manta et dauphins. L'accès depuis Vilanculos se fait en dhow ou en speedboat.",
      wikipedia: "Bazaruto_Archipelago",
      tags: ["Plongée", "Dugongs", "Île", "UNESCO"],
      mustSee: [
        { name: "Plongée Two-Mile Reef — raies manta et tortues", wikipedia: "File:Nausicaa - raie manta 2.jpg" },
        { name: "Nage avec les dugongs (espèce menacée)", wikipedia: "Dugong" },
        { name: "Dunes de l'île Santa Carolina (Ilha do Paraíso)", wikipedia: "File:Bazaruto-Island-banner.jpg" },
      ],
    },
    {
      id: 2,
      name: "Parc national de Gorongosa",
      region: "Sofala (centre)",
      description:
        "Gorongosa était considéré comme le 'Jardin d'Éden' africain avant la guerre civile. Depuis la paix, il est l'objet d'un projet de restauration écologique exceptionnel : lions, éléphants, hippos et buffles ont été réintroduits avec succès. Le Mont Gorongosa (1 863m) abrite une forêt tropicale humide distincte de la savane.",
      wikipedia: "Gorongosa_National_Park",
      tags: ["Safari", "Faune", "Restauration", "Nature"],
      mustSee: [
        { name: "Safari en 4x4 — lions et éléphants de Gorongosa", wikipedia: "Gorongosa_National_Park" },
        { name: "Lac Urema — hippos et oiseaux aquatiques", wikipedia: "File:Mount_Gorongosa,_Gorongosa_National_Park,_Mozambique_(cropped).jpg" },
        { name: "Mont Gorongosa — randonnée en forêt de brouillard", wikipedia: "File:Gorongosa - Gogogo peak. (4403966914).jpg" },
        { name: "Camp de nuit en brousse sous les étoiles", wikipedia: "File:Sunset - Gorongosa National Park, Mozambique.jpg" },
      ],
    },
    {
      id: 3,
      name: "Archipel des Quirimbas — Ibo Island",
      region: "Cabo Delgado (extrême nord)",
      description:
        "Les Quirimbas sont 32 îles coralliennes au nord du Mozambique, dont Ibo Island avec ses forts portugais du XVIe siècle et ses artisans bijoutiers — classée comme l'une des villes les plus préservées d'Afrique. Les récifs des Quirimbas sont parmi les moins altérés de l'océan Indien. Attention aux restrictions de sécurité dans la région depuis 2017.",
      wikipedia: "File:Medjumbe Island Pool Deck.jpg",
      tags: ["Histoire", "Plongée", "Île", "Artisanat"],
      mustSee: [
        { name: "Fort portugais d'Ibo (XVIe s.) et bijoutiers en argent", wikipedia: "File:Ilha do Ibo - sunset-01.jpg" },
        { name: "Plongée récifs des Quirimbas — coraux intacts", wikipedia: "File:Quilalea in Mozambique.JPG" },
        { name: "Balade en dhow au coucher du soleil inter-îles", wikipedia: "File:Ilha do Ibo-sunset-02.jpg" },
      ],
    },
    {
      id: 4,
      name: "Maputo — Art déco et gastronomie",
      region: "Capitale (sud)",
      description:
        "Maputo est une capitale surprenante : architecture art déco et moderniste léguée par le Portugal, marché central avec artisanat et bois de rose, restaurants de fruits de mer exceptionnels (langoustes et camarão fraîche), et une scène culturelle animée. La Fortaleza de Maputo (XVIIIe s.) domine la baie.",
      wikipedia: "Maputo",
      tags: ["Capitale", "Art déco", "Gastronomie", "Marché"],
      mustSee: [
        { name: "Marché central de Maputo — épices et sculptures", wikipedia: "File:Mozambique, Maputo, Zimpeto Market, fruit sellers.jpg" },
        { name: "Fortaleza de Nossa Senhora da Conceição (XVIII s.)", wikipedia: "File:Fortaleza_de_Nossa_Senhora_da_Conceição_(1946)_(4107930945).jpg" },
        { name: "Avenida Julius Nyerere — architecture coloniale art déco", wikipedia: "File:Av. Julius Nyerere in Maputo, Mozambique.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "Le Mozambique est abordable mais l'hébergement de qualité coûte cher sur les îles (accès par speedboat ou avion léger). La côte nord (Quirimbas) est chère ; le centre et le sud restent accessibles. Le metical fluctue — prévoir dollars ou euros en liquide.",
    currency: "MZN",
    exchangeRate: "1€ ≈ 68 MZN",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse / lodge de brousse simple", price: "20–45 €", detail: "Chambre basique, moustiquaire" },
          { label: "Lodge 3★ Vilanculos ou Maputo", price: "60–120 €", detail: "Piscine, vue mer ou jardin" },
          { label: "Island lodge Bazaruto (Anantara, Azura)", price: "400–800 €", detail: "Tout compris, accès exclusif" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Camarão grillé (crevettes locales) dans un restaurante", price: "8–18 €", detail: "Frais du jour, sauce piri-piri" },
          { label: "Restaurant mid-range Maputo", price: "15–30 €", detail: "Fruits de mer, pão com churrasco" },
          { label: "Marché local — matapa, xima, poisson séché", price: "2–6 €", detail: "Cuisine mozambicaine typique" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Chapa (minibus collectif) entre villes", price: "5–15 €", detail: "Lent mais économique" },
          { label: "Bus longue distance (Maputo–Vilanculos)", price: "15–25 €", detail: "8–10h de route" },
          { label: "Speedboat Vilanculos–Bazaruto (A/R)", price: "40–80 €", detail: "30–45 min, obligatoire pour les îles" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Plongée à Bazaruto (2 plongées, équipement)", price: "70–110 €", detail: "Récifs intacts, visibilité 30m+" },
          { label: "Safari Gorongosa (1 jour, 4x4, guide)", price: "50–100 €", detail: "Entrée + accompagnement" },
          { label: "Excursion dhow inter-îles (demi-journée)", price: "30–60 €", detail: "Pique-nique sur plage déserte" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "35–60 €/j", desc: "Guesthouse + cuisine locale + chapa", color: "#22c55e" },
      { type: "Confort", daily: "80–150 €/j", desc: "Lodge 3★ + restaurants + excursions", color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: "12 jours",
      route: "Maputo (2j) → Vilanculos / Bazaruto (5j) → Gorongosa (3j) → Beira ou vol retour (2j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 200 – 2 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Europe–Maputo", amount: "500–800 €" },
            { label: "Hébergement (12 nuits)", amount: "300–500 €" },
            { label: "Transports locaux + speedboats", amount: "200–350 €" },
            { label: "Nourriture", amount: "200–350 €" },
            { label: "Plongée & safaris", amount: "200–400 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 800 – 5 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Europe–Maputo", amount: "600–1 000 €" },
            { label: "Lodges (12 nuits)", amount: "900–2 000 €" },
            { label: "Vols intérieurs + speedboats", amount: "400–700 €" },
            { label: "Nourriture & restaurants", amount: "400–700 €" },
            { label: "Plongée, dhow, safaris", amount: "400–600 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~12–14h via Johannesburg (South African, Kenya Airways) ou Addis-Abeba (Ethiopian). Pas de direct." },
    { icon: "🪪", label: "Visa",              value: "Visa à l'arrivée gratuit (30 jours) pour les Français. Passeport valide 6 mois." },
    { icon: "💰", label: "Monnaie",           value: "Metical (MZN). Dollars et euros acceptés dans les lodges. Espèces indispensables hors Maputo." },
    { icon: "🗣️", label: "Langue",            value: "Portugais (officiel). Anglais parlé dans les zones touristiques. Makua/Changana dans les villages." },
    { icon: "🔌", label: "Prise électrique",  value: "Type C/M (Sud-Africain, 3 broches rondes) — 220V. Adaptateur recommandé." },
    { icon: "💊", label: "Santé",             value: "Antipaludéen indispensable (paludisme présent). Vaccins fièvre jaune, hépatites recommandés. Eau en bouteille." },
    { icon: "🚰", label: "Eau du robinet",    value: "Non potable — eau en bouteille uniquement." },
    { icon: "⚠️", label: "Sécurité",          value: "Cabo Delgado (extrême nord) : zone déconseillée formellement (conflit armé depuis 2017). Consulter les avis du MAE avant tout départ." },
  ],
};
