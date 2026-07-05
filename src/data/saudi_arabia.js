export const SAUDI_ARABIA = {
  code: "SAU",
  numericId: 682,
  name: { fr: "Arabie Saoudite", en: "Saudi Arabia" },
  emoji: "🇸🇦",
  capital: { fr: "Riyad", en: "Riyadh" },
  language: { fr: "Arabe", en: "Arabic" },
  currency: { fr: "Riyal saoudien (SAR)", en: "Saudi riyal (SAR)" },
  timezone: "UTC+3",
  filter: {
    budgetMin: 60, budgetMid: 130,
    tripMin: 2000, tripMid: 4000,
  },
  description: {
    fr: "L'Arabie Saoudite s'ouvre progressivement au tourisme international depuis 2019. Sites nabatéens d'AlUla (Hégra), déserts infinis, vieille Djeddah inscrite à l'UNESCO, modernité de Riyad et douceur de la mer Rouge — un pays qui surprend et dépasse les clichés.",
    en: "Saudi Arabia has been gradually opening up to international tourism since 2019. The Nabataean sites of AlUla (Hegra), endless deserts, UNESCO-listed old Jeddah, the modernity of Riyadh and the mild Red Sea coast — a country that surprises and defies the clichés.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Mars", en: "November – March" },
      label: { fr: "Hiver doux", en: "Mild winter" },
      color: "#22c55e",
      description: {
        fr: "Températures agréables (15–25 °C), idéales pour visiter Riyad, AlUla, la vieille ville de Djeddah et le désert.",
        en: "Pleasant temperatures (15–25 °C), ideal for visiting Riyadh, AlUla, the old town of Jeddah and the desert.",
      },
      icon: "🏛️",
    },
    {
      months: { fr: "Avril – Mai", en: "April – May" },
      label: { fr: "Printemps", en: "Spring" },
      color: "#f59e0b",
      description: {
        fr: "Avant la grande chaleur estivale, températures encore supportables (25–35 °C) pour les sites culturels.",
        en: "Before the peak summer heat, temperatures are still bearable (25–35 °C) for the cultural sites.",
      },
      icon: "🌸",
    },
  ],

  weatherCities: [
    {
      id: "riyadh",
      name: "Riyad",
      region: { fr: "Riyad", en: "Riyadh" },
      data: [
        { month: "Jan", temp: 15, rain: 15,  icon: "☀️" },
        { month: "Fév", temp: 18, rain: 15,  icon: "☀️" },
        { month: "Mar", temp: 23, rain: 25,  icon: "☀️" },
        { month: "Avr", temp: 29, rain: 10,  icon: "⛅" },
        { month: "Mai", temp: 35, rain: 2,   icon: "🌡️" },
        { month: "Jun", temp: 40, rain: 0,   icon: "🌡️" },
        { month: "Jul", temp: 42, rain: 0,   icon: "🌡️" },
        { month: "Aoû", temp: 42, rain: 0,   icon: "🌡️" },
        { month: "Sep", temp: 38, rain: 0,   icon: "🌡️" },
        { month: "Oct", temp: 32, rain: 2,   icon: "🌡️" },
        { month: "Nov", temp: 23, rain: 10,  icon: "☀️" },
        { month: "Déc", temp: 17, rain: 10,  icon: "☀️" },
      ],
    },
    {
      id: "jeddah",
      name: "Djeddah",
      region: { fr: "Mer Rouge", en: "Red Sea" },
      data: [
        { month: "Jan", temp: 23, rain: 10,  icon: "☀️" },
        { month: "Fév", temp: 24, rain: 5,   icon: "☀️" },
        { month: "Mar", temp: 26, rain: 0,   icon: "☀️" },
        { month: "Avr", temp: 30, rain: 0,   icon: "⛅" },
        { month: "Mai", temp: 34, rain: 0,   icon: "🌡️" },
        { month: "Jun", temp: 37, rain: 0,   icon: "🌡️" },
        { month: "Jul", temp: 38, rain: 0,   icon: "🌡️" },
        { month: "Aoû", temp: 38, rain: 0,   icon: "🌡️" },
        { month: "Sep", temp: 36, rain: 0,   icon: "🌡️" },
        { month: "Oct", temp: 33, rain: 5,   icon: "🌡️" },
        { month: "Nov", temp: 28, rain: 10,  icon: "⛅" },
        { month: "Déc", temp: 25, rain: 15,  icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "AlUla & Hégra",
      region: { fr: "Médine", en: "Medina" },
      description: {
        fr: "Site archéologique nabatéen de premier ordre, Hégra (Madain Saleh) est le Pétra saoudien : tombeaux monumentaux taillés dans la roche rouge, inscrits à l'UNESCO depuis 2008.",
        en: "A world-class Nabataean archaeological site, Hegra (Madain Saleh) is Saudi Arabia's own Petra: monumental tombs carved into red rock, UNESCO-listed since 2008.",
      },
      wikipedia: "File:Al Ula old town, Saudi Arabia 2011.jpg",
      tags: ["Histoire", "Archéologie", "UNESCO", "Désert", "Architecture", "Randonnée", "Nature"],
      mustSee: [
        { name: { fr: "Hégra — tombeaux nabatéens (UNESCO)", en: "Hegra — Nabataean tombs (UNESCO)" }, wikipedia: "File:Hegra, Al-Ula, Saudi Arabia.png" },
        { name: "Elephant Rock", wikipedia: "File:Elephant_rock_Al_Ula,_Saudi_Arabia_2011.jpg" },
        { name: { fr: "Oasis de Dedan", en: "Dedan Oasis" }, wikipedia: "File:Al-'Ula oasis (6).jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Djeddah historique", en: "Historic Jeddah" },
      region: { fr: "Djeddah", en: "Jeddah" },
      description: {
        fr: "Al-Balad, le vieux quartier de Djeddah, est inscrit à l'UNESCO : maisons coralliennes à moucharabiehs, ruelles parfumées d'encens et port historique sur la mer Rouge.",
        en: "Al-Balad, Jeddah's old quarter, is UNESCO-listed: coral houses with mashrabiya screens, alleys scented with incense, and a historic port on the Red Sea.",
      },
      wikipedia: "Jeddah",
      tags: ["Histoire", "UNESCO", "Mer Rouge", "Plage", "Ville", "Architecture", "Gastronomie"],
      mustSee: [
        { name: { fr: "Al-Balad — vieille ville (UNESCO)", en: "Al-Balad — old town (UNESCO)" }, wikipedia: "Al-Balad,_Jeddah" },
        { name: { fr: "Fontaine du roi Fahd (305m)", en: "King Fahd's Fountain (305m)" }, wikipedia: "File:King Fahd's Fountain.jpg" },
        { name: { fr: "Corniche de Djeddah", en: "Jeddah Corniche" }, wikipedia: "Jeddah_Corniche" },
      ],
    },
    {
      id: 3,
      name: "Riyad",
      region: { fr: "Riyad", en: "Riyadh" },
      description: {
        fr: "Capitale ultramoderne en pleine transformation : Kingdom Tower, quartier Al-Ula à ciel ouvert (Diriyah), musées de classe mondiale et gastronomie internationale de plus en plus accessible.",
        en: "An ultramodern capital undergoing rapid transformation: the Kingdom Tower, the open-air heritage district of Diriyah, world-class museums and increasingly accessible international dining.",
      },
      wikipedia: "Riyadh",
      tags: ["Ville", "Architecture", "Culture", "Gastronomie"],
      mustSee: [
        { name: { fr: "Diriyah — capitale ottomane (UNESCO)", en: "Diriyah — Ottoman-era capital (UNESCO)" }, wikipedia: "File:At-Turaif District in ad-Dir'iyah (12).jpg" },
        { name: "Kingdom Centre Tower", wikipedia: "Kingdom_Centre" },
        { name: { fr: "Musée national d'Arabie Saoudite", en: "National Museum of Saudi Arabia" }, wikipedia: "National_Museum_of_Saudi_Arabia" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "L'Arabie Saoudite est en transformation touristique. Les prix restent élevés, notamment pour l'hébergement. L'alcool est interdit.",
      en: "Saudi Arabia is undergoing a tourism transformation. Prices remain high, especially for accommodation. Alcohol is prohibited.",
    },
    currency: "SAR",
    exchangeRate: "1€ ≈ 4,05 SAR",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Hôtel 3★", en: "3★ hotel" }, price: "50–80 €", detail: { fr: "Correct, mais peu de budget", en: "Decent, but few budget options" } },
          { label: { fr: "Hôtel 4★", en: "4★ hotel" }, price: "100–180 €", detail: { fr: "Standard touristique", en: "Standard tourist option" } },
          { label: { fr: "Resort luxe AlUla", en: "Luxury resort in AlUla" }, price: "300–600 €", detail: { fr: "Camps de luxe dans le désert", en: "Luxury desert camps" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Kabsa / shawarma local", en: "Local kabsa / shawarma" }, price: "3–8 €", detail: { fr: "Riz au poulet, plat national", en: "Chicken and rice, the national dish" } },
          { label: { fr: "Restaurant mid-range", en: "Mid-range restaurant" }, price: "15–30 €", detail: { fr: "Internationale ou locale", en: "International or local" } },
          { label: { fr: "Gastronomie Riyad/Djeddah", en: "Fine dining in Riyadh/Jeddah" }, price: "40–100 €", detail: { fr: "Restaurants internationaux premium", en: "Premium international restaurants" } },
        ],
      },
      {
        id: "transport",
        icon: "🚗",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Location voiture / jour", en: "Car rental / day" }, price: "35–60 €", detail: { fr: "Indispensable (peu de transports en commun)", en: "Essential (little public transport)" } },
          { label: { fr: "Taxi Uber / Careem", en: "Uber / Careem taxi" }, price: "5–15 €", detail: { fr: "Application recommandée", en: "App recommended" } },
          { label: { fr: "Vol intérieur Riyad–AlUla", en: "Domestic flight Riyadh–AlUla" }, price: "80–150 €", detail: { fr: "Gain de temps", en: "Saves time" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Visite guidée Hégra (AlUla)", en: "Guided tour of Hegra (AlUla)" }, price: "40–80 €", detail: { fr: "Obligatoire sur le site", en: "Mandatory on site" } },
          { label: { fr: "Diriyah Experience", en: "Diriyah Experience" }, price: "20–40 €", detail: { fr: "Reconstitution historique", en: "Historical re-enactment" } },
          { label: { fr: "Desert Safari", en: "Desert Safari" }, price: "60–120 €", detail: { fr: "Nuit sous les étoiles", en: "Night under the stars" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "60–90 €/j", desc: { fr: "Hôtel 3★ + restaurants locaux + location voiture", en: "3★ hotel + local restaurants + car rental" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "130–200 €/j", desc: { fr: "Hôtel 4★ + bonnes tables + excursions", en: "4★ hotel + good restaurants + excursions" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury" }, daily: "400 €+/j", desc: { fr: "Resorts désert + gastronomie + privé", en: "Desert resorts + fine dining + private tours" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days" },
      route: { fr: "Riyad (3j) → AlUla (3j) → Djeddah (3j) → Riyad (1j)", en: "Riyadh (3d) → AlUla (3d) → Jeddah (3d) → Riyadh (1d)" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "2 000 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Riyad", en: "Return flight Paris–Riyadh" }, amount: "400–600 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "500–800 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "300–450 €" },
            { label: { fr: "Location voiture & vols intérieurs", en: "Car rental & domestic flights" }, amount: "400–600 €" },
            { label: { fr: "Activités & entrées", en: "Activities & entry fees" }, amount: "300–500 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "4 000 – 5 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Riyad", en: "Return flight Paris–Riyadh" }, amount: "600–900 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "1 200–2 000 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "600–900 €" },
            { label: { fr: "Transport & vols intérieurs", en: "Transport & domestic flights" }, amount: "600–900 €" },
            { label: { fr: "Activités & guides", en: "Activities & guides" }, amount: "500–800 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury" },
          color: "#f59e0b",
          total: "10 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Riyad (Business)", en: "Return flight Paris–Riyadh (Business)" }, amount: "2 000–4 000 €" },
            { label: { fr: "Resorts AlUla + hôtels luxe", en: "AlUla resorts + luxury hotels" }, amount: "3 000–5 000 €" },
            { label: { fr: "Gastronomie & expériences", en: "Fine dining & experiences" }, amount: "1 500–3 000 €" },
            { label: { fr: "Transport privé", en: "Private transport" }, amount: "800–1 500 €" },
            { label: { fr: "Visites exclusives", en: "Exclusive tours" }, amount: "500 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~6h (Saudia, Air France, Transavia)", en: "~6h (Saudia, Air France, Transavia)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "e-Visa touristique en ligne (~117 USD, valable 1 an entrées multiples)", en: "Online tourist e-Visa (~$117 USD, valid 1 year, multiple entries)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Riyal (1€ ≈ 4,05 SAR)", en: "Riyal (1€ ≈ 4.05 SAR)" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Arabe (anglais dans le tourisme)", en: "Arabic (English in the tourism sector)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type G – 220 V (adaptateur UK)", en: "Type G — 220V (UK-style adapter)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "Très bonne couverture, e-SIM disponible", en: "Very good coverage, e-SIM available" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Non potable — eau en bouteille", en: "Not drinkable — bottled water" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Aucun vaccin obligatoire, soins modernes", en: "No mandatory vaccines, modern healthcare" } },
  ],
};
