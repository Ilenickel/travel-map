export const SAUDI_ARABIA = {
  code: "SAU",
  numericId: 682,
  name: { fr: "Arabie Saoudite", en: "Saudi Arabia", es: "Arabia Saudita" },
  emoji: "🇸🇦",
  capital: { fr: "Riyad", en: "Riyadh", es: "Riad" },
  language: { fr: "Arabe", en: "Arabic", es: "Árabe" },
  currency: { fr: "Riyal saoudien (SAR)", en: "Saudi riyal (SAR)", es: "Riyal saudí (SAR)" },
  timezone: "UTC+3",
  filter: {
    budgetMin: 60, budgetMid: 130,
    tripMin: 2000, tripMid: 4000,
  },
  description: {
    fr: "L'Arabie Saoudite s'ouvre progressivement au tourisme international depuis 2019. Sites nabatéens d'AlUla (Hégra), déserts infinis, vieille Djeddah inscrite à l'UNESCO, modernité de Riyad et douceur de la mer Rouge — un pays qui surprend et dépasse les clichés.",
    en: "Saudi Arabia has been gradually opening up to international tourism since 2019. The Nabataean sites of AlUla (Hegra), endless deserts, UNESCO-listed old Jeddah, the modernity of Riyadh and the mild Red Sea coast — a country that surprises and defies the clichés.",
    es: "Arabia Saudita se está abriendo progresivamente al turismo internacional desde 2019. Los yacimientos nabateos de AlUla (Hégra), desiertos infinitos, el casco antiguo de Yeda declarado Patrimonio de la Humanidad, la modernidad de Riad y la suavidad del mar Rojo: un país que sorprende y supera los tópicos.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Mars", en: "November – March", es: "Noviembre – Marzo" },
      label: { fr: "Hiver doux", en: "Mild winter", es: "Invierno suave" },
      color: "#22c55e",
      description: {
        fr: "Températures agréables (15–25 °C), idéales pour visiter Riyad, AlUla, la vieille ville de Djeddah et le désert.",
        en: "Pleasant temperatures (15–25 °C), ideal for visiting Riyadh, AlUla, the old town of Jeddah and the desert.",
        es: "Temperaturas agradables (15–25 °C), ideales para visitar Riad, AlUla, el casco antiguo de Yeda y el desierto.",
      },
      icon: "🏛️",
    },
    {
      months: { fr: "Avril – Mai", en: "April – May", es: "Abril – Mayo" },
      label: { fr: "Printemps", en: "Spring", es: "Primavera" },
      color: "#f59e0b",
      description: {
        fr: "Avant la grande chaleur estivale, températures encore supportables (25–35 °C) pour les sites culturels.",
        en: "Before the peak summer heat, temperatures are still bearable (25–35 °C) for the cultural sites.",
        es: "Antes del gran calor estival, temperaturas aún soportables (25–35 °C) para los sitios culturales.",
      },
      icon: "🌸",
    },
  ],

  weatherCities: [
    {
      id: "riyadh",
      name: "Riyad",
      region: { fr: "Riyad", en: "Riyadh", es: "Riad" },
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
      region: { fr: "Mer Rouge", en: "Red Sea", es: "Mar Rojo" },
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
      region: { fr: "Médine", en: "Medina", es: "Medina" },
      description: {
        fr: "Site archéologique nabatéen de premier ordre, Hégra (Madain Saleh) est le Pétra saoudien : tombeaux monumentaux taillés dans la roche rouge, inscrits à l'UNESCO depuis 2008.",
        en: "A world-class Nabataean archaeological site, Hegra (Madain Saleh) is Saudi Arabia's own Petra: monumental tombs carved into red rock, UNESCO-listed since 2008.",
        es: "Yacimiento arqueológico nabateo de primer orden, Hégra (Madain Saleh) es la Petra saudí: tumbas monumentales talladas en roca roja, Patrimonio de la Humanidad desde 2008.",
      },
      wikipedia: "File:Al Ula old town, Saudi Arabia 2011.jpg",
      tags: ["Histoire", "Archéologie", "UNESCO", "Désert", "Architecture", "Randonnée", "Nature"],
      mustSee: [
        { name: { fr: "Hégra — tombeaux nabatéens (UNESCO)", en: "Hegra — Nabataean tombs (UNESCO)", es: "Hégra — tumbas nabateas (UNESCO)" }, wikipedia: "File:Hegra, Al-Ula, Saudi Arabia.png" },
        { name: "Elephant Rock", wikipedia: "File:Elephant_rock_Al_Ula,_Saudi_Arabia_2011.jpg" },
        { name: { fr: "Oasis de Dedan", en: "Dedan Oasis", es: "Oasis de Dedán" }, wikipedia: "File:Al-'Ula oasis (6).jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Djeddah historique", en: "Historic Jeddah", es: "Yeda histórica" },
      region: { fr: "Djeddah", en: "Jeddah", es: "Yeda" },
      description: {
        fr: "Al-Balad, le vieux quartier de Djeddah, est inscrit à l'UNESCO : maisons coralliennes à moucharabiehs, ruelles parfumées d'encens et port historique sur la mer Rouge.",
        en: "Al-Balad, Jeddah's old quarter, is UNESCO-listed: coral houses with mashrabiya screens, alleys scented with incense, and a historic port on the Red Sea.",
        es: "Al-Balad, el barrio antiguo de Yeda, está declarado Patrimonio de la Humanidad: casas de coral con celosías mashrabiya, callejuelas perfumadas de incienso y puerto histórico en el mar Rojo.",
      },
      wikipedia: "Jeddah",
      tags: ["Histoire", "UNESCO", "Mer Rouge", "Plage", "Ville", "Architecture", "Gastronomie"],
      mustSee: [
        { name: { fr: "Al-Balad — vieille ville (UNESCO)", en: "Al-Balad — old town (UNESCO)", es: "Al-Balad — casco antiguo (UNESCO)" }, wikipedia: "Al-Balad,_Jeddah" },
        { name: { fr: "Fontaine du roi Fahd (305m)", en: "King Fahd's Fountain (305m)", es: "Fuente del rey Fahd (305 m)" }, wikipedia: "File:King Fahd's Fountain.jpg" },
        { name: { fr: "Corniche de Djeddah", en: "Jeddah Corniche", es: "Paseo marítimo de Yeda" }, wikipedia: "Jeddah_Corniche" },
      ],
    },
    {
      id: 3,
      name: "Riyad",
      region: { fr: "Riyad", en: "Riyadh", es: "Riad" },
      description: {
        fr: "Capitale ultramoderne en pleine transformation : Kingdom Tower, quartier Al-Ula à ciel ouvert (Diriyah), musées de classe mondiale et gastronomie internationale de plus en plus accessible.",
        en: "An ultramodern capital undergoing rapid transformation: the Kingdom Tower, the open-air heritage district of Diriyah, world-class museums and increasingly accessible international dining.",
        es: "Capital ultramoderna en plena transformación: la Kingdom Tower, el barrio patrimonial al aire libre de Diriyah, museos de talla mundial y una gastronomía internacional cada vez más accesible.",
      },
      wikipedia: "Riyadh",
      tags: ["Ville", "Architecture", "Culture", "Gastronomie"],
      mustSee: [
        { name: { fr: "Diriyah — capitale ottomane (UNESCO)", en: "Diriyah — Ottoman-era capital (UNESCO)", es: "Diriyah — capital de la era otomana (UNESCO)" }, wikipedia: "File:At-Turaif District in ad-Dir'iyah (12).jpg" },
        { name: "Kingdom Centre Tower", wikipedia: "Kingdom_Centre" },
        { name: { fr: "Musée national d'Arabie Saoudite", en: "National Museum of Saudi Arabia", es: "Museo Nacional de Arabia Saudita" }, wikipedia: "National_Museum_of_Saudi_Arabia" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "L'Arabie Saoudite est en transformation touristique. Les prix restent élevés, notamment pour l'hébergement. L'alcool est interdit.",
      en: "Saudi Arabia is undergoing a tourism transformation. Prices remain high, especially for accommodation. Alcohol is prohibited.",
      es: "Arabia Saudita está en plena transformación turística. Los precios siguen siendo elevados, especialmente en el alojamiento. El alcohol está prohibido.",
    },
    currency: "SAR",
    exchangeRate: "1€ ≈ 4,05 SAR",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche" },
        items: [
          { label: { fr: "Hôtel 3★", en: "3★ hotel", es: "Hotel 3★" }, price: "50–80 €", detail: { fr: "Correct, mais peu de budget", en: "Decent, but few budget options", es: "Correcto, pero pocas opciones económicas" } },
          { label: { fr: "Hôtel 4★", en: "4★ hotel", es: "Hotel 4★" }, price: "100–180 €", detail: { fr: "Standard touristique", en: "Standard tourist option", es: "Estándar turístico" } },
          { label: { fr: "Resort luxe AlUla", en: "Luxury resort in AlUla", es: "Resort de lujo en AlUla" }, price: "300–600 €", detail: { fr: "Camps de luxe dans le désert", en: "Luxury desert camps", es: "Campamentos de lujo en el desierto" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida" },
        items: [
          { label: { fr: "Kabsa / shawarma local", en: "Local kabsa / shawarma", es: "Kabsa / shawarma local" }, price: "3–8 €", detail: { fr: "Riz au poulet, plat national", en: "Chicken and rice, the national dish", es: "Arroz con pollo, plato nacional" } },
          { label: { fr: "Restaurant mid-range", en: "Mid-range restaurant", es: "Restaurante de gama media" }, price: "15–30 €", detail: { fr: "Internationale ou locale", en: "International or local", es: "Internacional o local" } },
          { label: { fr: "Gastronomie Riyad/Djeddah", en: "Fine dining in Riyadh/Jeddah", es: "Alta cocina en Riad/Yeda" }, price: "40–100 €", detail: { fr: "Restaurants internationaux premium", en: "Premium international restaurants", es: "Restaurantes internacionales premium" } },
        ],
      },
      {
        id: "transport",
        icon: "🚗",
        label: { fr: "Transport", en: "Transport", es: "Transporte" },
        items: [
          { label: { fr: "Location voiture / jour", en: "Car rental / day", es: "Alquiler de coche / día" }, price: "35–60 €", detail: { fr: "Indispensable (peu de transports en commun)", en: "Essential (little public transport)", es: "Indispensable (poco transporte público)" } },
          { label: { fr: "Taxi Uber / Careem", en: "Uber / Careem taxi", es: "Taxi Uber / Careem" }, price: "5–15 €", detail: { fr: "Application recommandée", en: "App recommended", es: "Aplicación recomendada" } },
          { label: { fr: "Vol intérieur Riyad–AlUla", en: "Domestic flight Riyadh–AlUla", es: "Vuelo interior Riad–AlUla" }, price: "80–150 €", detail: { fr: "Gain de temps", en: "Saves time", es: "Ahorra tiempo" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades" },
        items: [
          { label: { fr: "Visite guidée Hégra (AlUla)", en: "Guided tour of Hegra (AlUla)", es: "Visita guiada a Hégra (AlUla)" }, price: "40–80 €", detail: { fr: "Obligatoire sur le site", en: "Mandatory on site", es: "Obligatoria en el sitio" } },
          { label: { fr: "Diriyah Experience", en: "Diriyah Experience", es: "Diriyah Experience" }, price: "20–40 €", detail: { fr: "Reconstitution historique", en: "Historical re-enactment", es: "Recreación histórica" } },
          { label: { fr: "Desert Safari", en: "Desert Safari", es: "Desert Safari" }, price: "60–120 €", detail: { fr: "Nuit sous les étoiles", en: "Night under the stars", es: "Noche bajo las estrellas" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero" }, daily: "60–90 €/j", desc: { fr: "Hôtel 3★ + restaurants locaux + location voiture", en: "3★ hotel + local restaurants + car rental", es: "Hotel 3★ + restaurantes locales + alquiler de coche" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort" }, daily: "130–200 €/j", desc: { fr: "Hôtel 4★ + bonnes tables + excursions", en: "4★ hotel + good restaurants + excursions", es: "Hotel 4★ + buenos restaurantes + excursiones" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury", es: "Lujo" }, daily: "400 €+/j", desc: { fr: "Resorts désert + gastronomie + privé", en: "Desert resorts + fine dining + private tours", es: "Resorts en el desierto + gastronomía + privado" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days", es: "10 días" },
      route: { fr: "Riyad (3j) → AlUla (3j) → Djeddah (3j) → Riyad (1j)", en: "Riyadh (3d) → AlUla (3d) → Jeddah (3d) → Riyadh (1d)", es: "Riad (3d) → AlUla (3d) → Yeda (3d) → Riad (1d)" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero" },
          color: "#22c55e",
          total: "2 000 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Riyad", en: "Return flight Paris–Riyadh", es: "Vuelo ida y vuelta Madrid–Riad" }, amount: "400–600 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)" }, amount: "500–800 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida" }, amount: "300–450 €" },
            { label: { fr: "Location voiture & vols intérieurs", en: "Car rental & domestic flights", es: "Alquiler de coche y vuelos interiores" }, amount: "400–600 €" },
            { label: { fr: "Activités & entrées", en: "Activities & entry fees", es: "Actividades y entradas" }, amount: "300–500 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort" },
          color: "#3b82f6",
          total: "4 000 – 5 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Riyad", en: "Return flight Paris–Riyadh", es: "Vuelo ida y vuelta Madrid–Riad" }, amount: "600–900 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)" }, amount: "1 200–2 000 €" },
            { label: { fr: "Nourriture", en: "Food", es: "Comida" }, amount: "600–900 €" },
            { label: { fr: "Transport & vols intérieurs", en: "Transport & domestic flights", es: "Transporte y vuelos interiores" }, amount: "600–900 €" },
            { label: { fr: "Activités & guides", en: "Activities & guides", es: "Actividades y guías" }, amount: "500–800 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury", es: "Lujo" },
          color: "#f59e0b",
          total: "10 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Riyad (Business)", en: "Return flight Paris–Riyadh (Business)", es: "Vuelo ida y vuelta Madrid–Riad (Business)" }, amount: "2 000–4 000 €" },
            { label: { fr: "Resorts AlUla + hôtels luxe", en: "AlUla resorts + luxury hotels", es: "Resorts en AlUla + hoteles de lujo" }, amount: "3 000–5 000 €" },
            { label: { fr: "Gastronomie & expériences", en: "Fine dining & experiences", es: "Gastronomía y experiencias" }, amount: "1 500–3 000 €" },
            { label: { fr: "Transport privé", en: "Private transport", es: "Transporte privado" }, amount: "800–1 500 €" },
            { label: { fr: "Visites exclusives", en: "Exclusive tours", es: "Visitas exclusivas" }, amount: "500 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid" }, value: { fr: "~6h (Saudia, Air France, Transavia)", en: "~6h (Saudia, Air France, Transavia)", es: "~6h (Saudia, Iberia, Vueling)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado" }, value: { fr: "e-Visa touristique en ligne (~117 USD, valable 1 an entrées multiples)", en: "Online tourist e-Visa (~$117 USD, valid 1 year, multiple entries)", es: "e-Visa turístico en línea (~117 USD, válido 1 año, entradas múltiples)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda" }, value: { fr: "Riyal (1€ ≈ 4,05 SAR)", en: "Riyal (1€ ≈ 4.05 SAR)", es: "Riyal (1€ ≈ 4,05 SAR)" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma" }, value: { fr: "Arabe (anglais dans le tourisme)", en: "Arabic (English in the tourism sector)", es: "Árabe (inglés en el sector turístico)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico" }, value: { fr: "Type G – 220 V (adaptateur UK)", en: "Type G — 220V (UK-style adapter)", es: "Tipo G – 220 V (adaptador tipo Reino Unido)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network", es: "Red" }, value: { fr: "Très bonne couverture, e-SIM disponible", en: "Very good coverage, e-SIM available", es: "Muy buena cobertura, e-SIM disponible" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water", es: "Agua del grifo" }, value: { fr: "Non potable — eau en bouteille", en: "Not drinkable — bottled water", es: "No potable — agua embotellada" } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud" }, value: { fr: "Aucun vaccin obligatoire, soins modernes", en: "No mandatory vaccines, modern healthcare", es: "Ninguna vacuna obligatoria, atención médica moderna" } },
  ],
};
