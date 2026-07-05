export const ISRAEL = {
  code: "ISR",
  numericId: 376,
  name: { fr: "Israël", en: "Israel" },
  emoji: "🇮🇱",
  capital: { fr: "Jérusalem", en: "Jerusalem" },
  language: { fr: "Hébreu", en: "Hebrew" },
  currency: { fr: "Shekel (ILS)", en: "Shekel (ILS)" },
  timezone: "UTC+2 (UTC+3 été)",
  filter: {
    budgetMin: 60, budgetMid: 130,
    tripMin: 2000, tripMid: 3800,
  },
  description: {
    fr: "Israël concentre en un territoire minuscule trois des lieux saints les plus importants de l'humanité (Jérusalem), la mer Morte à −430 m, les plages de Tel Aviv, le désert du Néguev et des sites archéologiques uniques. Une destination d'une richesse culturelle exceptionnelle.",
    en: "Israel packs into a tiny territory three of humanity's most important holy sites (in Jerusalem), the Dead Sea at 430 metres below sea level, Tel Aviv's beaches, the Negev Desert and a remarkable range of archaeological sites. It is an exceptionally rich cultural destination.",
  },

  bestPeriods: [
    {
      months: { fr: "Mars – Mai", en: "March – May" },
      label: { fr: "Printemps", en: "Spring" },
      color: "#22c55e",
      description: {
        fr: "Températures idéales (16–25 °C), fleurs du désert (négué), Pessah, idéal pour Jérusalem et les randonnées.",
        en: "Ideal temperatures (16–25°C), desert wildflowers in the Negev, Passover season and excellent conditions for Jerusalem and hiking.",
      },
      icon: "🌸",
    },
    {
      months: { fr: "Septembre – Novembre", en: "September – November" },
      label: { fr: "Automne", en: "Autumn" },
      color: "#fb923c",
      description: {
        fr: "Après la chaleur estivale, températures agréables (22–28 °C). Roch Hachana et fêtes juives en septembre-octobre.",
        en: "After the summer heat, temperatures are pleasantly warm (22–28°C). Rosh Hashanah and the autumn Jewish holidays also fall in this period.",
      },
      icon: "🍂",
    },
    {
      months: { fr: "Juin – Août", en: "June – August" },
      label: { fr: "Été balnéaire", en: "Beach season" },
      color: "#3b82f6",
      description: {
        fr: "Mer parfaite, Tel Aviv animée, Eilat et Mer Rouge accessibles. Chaud mais sec (sec < 30% humidité sur la côte).",
        en: "Perfect sea conditions, lively Tel Aviv, and easy access to Eilat and the Red Sea. Hot but dry, with coastal humidity usually under 30%.",
      },
      icon: "🏖️",
    },
  ],

  weatherCities: [
    {
      id: "tel_aviv",
      name: "Tel Aviv",
      region: { fr: "Centre", en: "Central Israel" },
      data: [
        { month: "Jan", temp: 13, rain: 130, icon: "⛅" },
        { month: "Fév", temp: 14, rain: 90,  icon: "⛅" },
        { month: "Mar", temp: 16, rain: 55,  icon: "☀️" },
        { month: "Avr", temp: 21, rain: 20,  icon: "☀️" },
        { month: "Mai", temp: 25, rain: 3,   icon: "☀️" },
        { month: "Jun", temp: 28, rain: 0,   icon: "⛅" },
        { month: "Jul", temp: 31, rain: 0,   icon: "⛅" },
        { month: "Aoû", temp: 31, rain: 0,   icon: "⛅" },
        { month: "Sep", temp: 29, rain: 0,   icon: "⛅" },
        { month: "Oct", temp: 26, rain: 10,  icon: "☀️" },
        { month: "Nov", temp: 21, rain: 65,  icon: "☀️" },
        { month: "Déc", temp: 15, rain: 110, icon: "⛅" },
      ],
    },
    {
      id: "eilat",
      name: "Eilat",
      region: { fr: "Mer Rouge", en: "Red Sea" },
      data: [
        { month: "Jan", temp: 15, rain: 5,   icon: "☀️" },
        { month: "Fév", temp: 17, rain: 5,   icon: "☀️" },
        { month: "Mar", temp: 21, rain: 5,   icon: "☀️" },
        { month: "Avr", temp: 26, rain: 0,   icon: "☀️" },
        { month: "Mai", temp: 31, rain: 0,   icon: "⛅" },
        { month: "Jun", temp: 34, rain: 0,   icon: "🌡️" },
        { month: "Jul", temp: 37, rain: 0,   icon: "🌡️" },
        { month: "Aoû", temp: 36, rain: 0,   icon: "🌡️" },
        { month: "Sep", temp: 33, rain: 0,   icon: "🌡️" },
        { month: "Oct", temp: 28, rain: 0,   icon: "⛅" },
        { month: "Nov", temp: 22, rain: 3,   icon: "☀️" },
        { month: "Déc", temp: 17, rain: 5,   icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Jérusalem", en: "Jerusalem" },
      region: { fr: "Jérusalem", en: "Jerusalem" },
      description: {
        fr: "Ville sainte pour les trois grandes religions monothéistes, avec la vieille ville classée à l'UNESCO : le Mur occidental, l'Esplanade des Mosquées (Dôme du Rocher, Al-Aqsa), le Saint-Sépulcre et le quartier juif.",
        en: "A holy city for the three major monotheistic religions, with an UNESCO-listed Old City: the Western Wall, the Temple Mount and Mosque Esplanade (Dome of the Rock, Al-Aqsa), the Church of the Holy Sepulchre and the Jewish Quarter.",
      },
      wikipedia: "Jerusalem",
      tags: ["Histoire", "Religion", "UNESCO", "Archéologie", "Ville", "Architecture"],
      mustSee: [
        { name: { fr: "Mur occidental (Kotel)", en: "Western Wall (Kotel)" }, wikipedia: "Western_Wall" },
        { name: { fr: "Dôme du Rocher & al-Aqsa", en: "Dome of the Rock & Al-Aqsa" }, wikipedia: "Dome_of_the_Rock" },
        { name: { fr: "Saint-Sépulcre", en: "Church of the Holy Sepulchre" }, wikipedia: "Church_of_the_Holy_Sepulchre" },
        { name: { fr: "Vieille ville — marchés et ruelles", en: "Old City — markets and alleys" }, wikipedia: "Old_City_of_Jerusalem" },
      ],
    },
    {
      id: 2,
      name: { fr: "Tel Aviv", en: "Tel Aviv" },
      region: { fr: "Gush Dan", en: "Gush Dan" },
      description: {
        fr: "Ville ultramoderne, branchée et tolérante, avec la plus grande concentration d'architecture Bauhaus au monde (Ville Blanche UNESCO), des plages de sable fin et une scène culinaire mondialement reconnue.",
        en: "A hyper-modern, stylish and tolerant city, home to the world's largest concentration of Bauhaus architecture (the UNESCO-listed White City), sandy beaches and a globally recognised food scene.",
      },
      wikipedia: "Tel_Aviv",
      tags: ["Plage", "Culture", "Gastronomie", "Architecture", "Ville"],
      mustSee: [
        { name: { fr: "Ville Blanche — architecture Bauhaus (UNESCO)", en: "White City — Bauhaus architecture (UNESCO)" }, wikipedia: "File:PikiWiki Israel 9168 White City of Tel Aviv.JPG" },
        { name: { fr: "Jaffa — vieille ville portuaire", en: "Jaffa — the old port city" }, wikipedia: "Jaffa" },
        { name: { fr: "Marché Carmel", en: "Carmel Market" }, wikipedia: "Carmel_Market" },
      ],
    },
    {
      id: 3,
      name: { fr: "Mer Morte", en: "Dead Sea" },
      region: { fr: "District Sud", en: "Southern District" },
      description: {
        fr: "Le point le plus bas de la Terre (−430 m), avec une eau à 34% de sel où l'on flotte sans effort. Les boues minérales noires ont des propriétés thérapeutiques reconnues.",
        en: "The lowest point on Earth (430 metres below sea level), with water so salty that you float effortlessly. Its black mineral muds are widely valued for their therapeutic properties.",
      },
      wikipedia: "Dead_Sea",
      tags: ["Nature", "Bien-être", "Unique", "Désert", "Randonnée"],
      mustSee: [
        { name: { fr: "Masada — forteresse hérodienne", en: "Masada — a Herodian fortress" }, wikipedia: "Masada" },
        { name: { fr: "Bain flottant mer Morte", en: "Floating bath in the Dead Sea" }, wikipedia: "Dead_Sea" },
        { name: { fr: "Grottes de Qumrân (manuscrits)", en: "Qumran caves (Dead Sea Scrolls)" }, wikipedia: "Qumran" },
      ],
    },
    {
      id: 4,
      name: { fr: "Eilat & Mer Rouge", en: "Eilat & the Red Sea" },
      region: { fr: "District Sud", en: "Southern District" },
      description: {
        fr: "Station balnéaire à la pointe du Néguev, où la mer Rouge offre une plongée exceptionnelle (coraux, poissons tropicaux, dauphins) et un soleil garanti 360 jours par an.",
        en: "A seaside resort at the tip of the Negev, where the Red Sea offers exceptional diving — coral reefs, tropical fish and dolphins — plus sunshine virtually year-round.",
      },
      wikipedia: "Eilat",
      tags: ["Plongée", "Plage", "Nature", "Désert"],
      mustSee: [
        { name: { fr: "Coral Beach Reserve (snorkeling)", en: "Coral Beach Reserve (snorkelling)" }, wikipedia: "File:Gulf of Aqaba - Gulf von Akaba.jpg" },
        { name: { fr: "Plongée avec dauphins", en: "Diving with dolphins" }, wikipedia: "File:Eilat Dolphin Reef (3).jpg" },
        { name: { fr: "Désert du Néguev — Makhtesh Ramon", en: "Negev Desert — Makhtesh Ramon" }, wikipedia: "Makhtesh_Ramon" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Israël est une destination onéreuse, comparable aux grandes capitales européennes. Tel Aviv est régulièrement citée comme l'une des villes les plus chères du monde.",
      en: "Israel is an expensive destination, comparable to the major capitals of Western Europe. Tel Aviv is regularly listed among the most expensive cities in the world.",
    },
    currency: "ILS",
    exchangeRate: "1€ ≈ 4,10 ILS",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Auberge de jeunesse / hostel", en: "Hostel / youth hostel" }, price: "20–40 €", detail: { fr: "Dortoir Tel Aviv ou Jérusalem", en: "Shared dorm in Tel Aviv or Jerusalem" } },
          { label: { fr: "Hôtel 3★", en: "3-star hotel" }, price: "70–120 €", detail: { fr: "Correct, souvent inclus breakfast", en: "Comfortable, often with breakfast included" } },
          { label: { fr: "Hôtel 4–5★ design", en: "4–5 star design hotel" }, price: "180–400 €", detail: { fr: "Tel Aviv bord de mer ou Jérusalem", en: "Seafront Tel Aviv or Jerusalem" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Houmous + falafel au marché", en: "Hummus and falafel at the market" }, price: "3–7 €", detail: { fr: "Marché Machane Yehuda ou Carmel", en: "Mahane Yehuda or Carmel Market" } },
          { label: { fr: "Restaurant local (shakshuka, sabich)", en: "Local restaurant (shakshuka, sabich)" }, price: "12–20 €", detail: { fr: "Bon rapport qualité-prix", en: "Good value for money" } },
          { label: { fr: "Restaurant gastronomique Tel Aviv", en: "Fine-dining in Tel Aviv" }, price: "40–80 €", detail: { fr: "Scène culinaire world class", en: "World-class food scene" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Bus / Train inter-cités", en: "Intercity bus / train" }, price: "5–15 €", detail: { fr: "Tel Aviv–Jérusalem ~1h (train direct)", en: "Tel Aviv–Jerusalem takes about 1 hour by direct train" } },
          { label: { fr: "Métro léger Tel Aviv (Ligne Rouge)", en: "Tel Aviv light rail (Red Line)" }, price: "1,50 €", detail: { fr: "Réseau en expansion", en: "Network still expanding" } },
          { label: { fr: "Location voiture / jour", en: "Car rental per day" }, price: "40–70 €", detail: { fr: "Utile pour Néguev et Nord", en: "Useful for the Negev and the north" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Musée d'Israël (Jérusalem)", en: "Israel Museum (Jerusalem)" }, price: "12–16 €", detail: { fr: "Rouleaux de la Mer Morte", en: "Dead Sea Scrolls" } },
          { label: { fr: "Tour guidé vieille ville Jérusalem", en: "Guided tour of Jerusalem's Old City" }, price: "20–40 €", detail: { fr: "Guide anglophone 3h", en: "3-hour English-speaking guide" } },
          { label: { fr: "Plongée Eilat (2 plongées)", en: "Eilat diving (2 dives)" }, price: "60–90 €", detail: { fr: "Équipement inclus", en: "Equipment included" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "60–90 €/j", desc: { fr: "Hostel + marchés + transports en commun", en: "Hostels, markets and public transport" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "130–200 €/j", desc: { fr: "Hôtel 3★ + restos mid-range + excursions", en: "3-star hotels, mid-range restaurants and excursions" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury" }, daily: "300 €/j+", desc: { fr: "Hôtel design + gastronomie + guide privé", en: "Design hotel, fine dining and private guide" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days" },
      route: {
        fr: "Tel Aviv (3j) → Jérusalem (3j) → Mer Morte + Masada (2j) → Eilat (2j)",
        en: "Tel Aviv (3d) → Jerusalem (3d) → Dead Sea + Masada (2d) → Eilat (2d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "2 000 – 2 700 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Tel Aviv", en: "Return flight Paris–Tel Aviv" }, amount: "350–550 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "300–500 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "400–600 €" },
            { label: { fr: "Transport local", en: "Local transport" }, amount: "200–300 €" },
            { label: { fr: "Activités & entrées", en: "Activities & entry fees" }, amount: "300–450 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "3 800 – 5 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Tel Aviv", en: "Return flight Paris–Tel Aviv" }, amount: "450–700 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "900–1 500 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "800–1 200 €" },
            { label: { fr: "Transport & location voiture", en: "Transport & car rental" }, amount: "400–600 €" },
            { label: { fr: "Activités & guides", en: "Activities & guides" }, amount: "400–700 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury" },
          color: "#f59e0b",
          total: "8 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Tel Aviv (Business)", en: "Return flight Paris–Tel Aviv (business)" }, amount: "1 500–3 000 €" },
            { label: { fr: "Hôtels design (10 nuits)", en: "Design hotels (10 nights)" }, amount: "2 500–4 500 €" },
            { label: { fr: "Gastronomie & wine", en: "Fine dining & wine" }, amount: "1 500–2 500 €" },
            { label: { fr: "Transport privé", en: "Private transport" }, amount: "600–1 000 €" },
            { label: { fr: "Expériences privées", en: "Private experiences" }, amount: "500 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~4–5h direct (Air France, El Al, Transavia)", en: "~4–5 hours direct (Air France, El Al, Transavia)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Sans visa pour les Français (90 jours)", en: "No visa required for French citizens (90 days)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Shekel (1€ ≈ 4,10 ILS)", en: "Shekel (1€ ≈ 4.10 ILS)" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Hébreu et arabe (anglais très répandu)", en: "Hebrew and Arabic, with English widely spoken" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type H (spécifique) – 230 V (adaptateur universel)", en: "Type H (specific plug) – 230V (universal adapter recommended)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "Excellente couverture, e-SIM disponible", en: "Excellent coverage, eSIM available" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Potable (eau dessalinisée de bonne qualité)", en: "Drinkable (high-quality desalinated water)" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Aucun vaccin obligatoire, soins excellents", en: "No mandatory vaccines, excellent healthcare" } },
  ],
};
