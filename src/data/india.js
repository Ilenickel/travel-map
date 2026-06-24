export const INDIA = {
  code: "IND",
  numericId: 356,
  name: "Inde",
  emoji: "🇮🇳",
  capital: "New Delhi",
  language: "Hindi / Anglais",
  currency: "Roupie (₹)",
  timezone: "UTC+5:30",
  filter: {
    budgetMin: 25, budgetMid: 70,
    tripMin: 1200, tripMid: 2400,
  },
  description:
    "L'Inde est un subcontinent d'une richesse infinie : le Taj Mahal d'Agra, les ghats sacrés de Varanasi, les palais du Rajasthan, les plages de Goa, les backwaters du Kerala et la cuisine aux épices mille et un. Un voyage qui change une vie.",

  bestPeriods: [
    {
      months: "Octobre – Mars",
      label: "Saison sèche (Nord)",
      color: "#22c55e",
      description:
        "Meilleure période pour le nord de l'Inde (Delhi, Rajasthan, Agra). Températures agréables, ciel dégagé.",
      icon: "☀️",
    },
    {
      months: "Novembre – Février",
      label: "Goa & Kerala",
      color: "#3b82f6",
      description:
        "Saison idéale pour Goa et le Kerala : mer calme, températures parfaites (25–28 °C), sans pluie.",
      icon: "🌊",
    },
    {
      months: "Juillet – Septembre",
      label: "Rajasthan désertique",
      color: "#fb923c",
      description:
        "La mousson transforme le Rajasthan en un paysage verdoyant inattendu, avec beaucoup moins de touristes.",
      icon: "🌧",
    },
  ],

  weatherCities: [
    {
      id: "delhi",
      name: "Delhi",
      region: "Nord",
      data: [
        { month: "Jan", temp: 14, rain: 20,  icon: "⛅" },
        { month: "Fév", temp: 17, rain: 20,  icon: "☀️" },
        { month: "Mar", temp: 22, rain: 15,  icon: "☀️" },
        { month: "Avr", temp: 29, rain: 10,  icon: "⛅" },
        { month: "Mai", temp: 33, rain: 18,  icon: "🌡️" },
        { month: "Jun", temp: 33, rain: 65,  icon: "🌡️" },
        { month: "Jul", temp: 30, rain: 210, icon: "🌧️" },
        { month: "Aoû", temp: 29, rain: 180, icon: "🌧️" },
        { month: "Sep", temp: 29, rain: 130, icon: "🌧️" },
        { month: "Oct", temp: 25, rain: 20,  icon: "☀️" },
        { month: "Nov", temp: 19, rain: 8,   icon: "☀️" },
        { month: "Déc", temp: 14, rain: 10,  icon: "⛅" },
      ],
    },
    {
      id: "goa",
      name: "Goa",
      region: "Côte Ouest",
      data: [
        { month: "Jan", temp: 25, rain: 10,  icon: "☀️" },
        { month: "Fév", temp: 26, rain: 5,   icon: "☀️" },
        { month: "Mar", temp: 28, rain: 5,   icon: "⛅" },
        { month: "Avr", temp: 30, rain: 15,  icon: "⛅" },
        { month: "Mai", temp: 31, rain: 90,  icon: "⛅" },
        { month: "Jun", temp: 28, rain: 650, icon: "🌧️" },
        { month: "Jul", temp: 27, rain: 700, icon: "🌧️" },
        { month: "Aoû", temp: 27, rain: 440, icon: "🌧️" },
        { month: "Sep", temp: 28, rain: 250, icon: "🌧️" },
        { month: "Oct", temp: 29, rain: 120, icon: "🌧️" },
        { month: "Nov", temp: 28, rain: 30,  icon: "☀️" },
        { month: "Déc", temp: 26, rain: 15,  icon: "☀️" },
      ],
    },
    {
      id: "mumbai",
      name: "Mumbai",
      region: "Côte Ouest",
      data: [
        { month: "Jan", temp: 24, rain: 1,   icon: "☀️" },
        { month: "Fév", temp: 25, rain: 0,   icon: "☀️" },
        { month: "Mar", temp: 27, rain: 6,   icon: "⛅" },
        { month: "Avr", temp: 29, rain: 7,   icon: "⛅" },
        { month: "Mai", temp: 31, rain: 26,  icon: "⛅" },
        { month: "Jun", temp: 29, rain: 485, icon: "🌧️" },
        { month: "Jul", temp: 27, rain: 840, icon: "🌧️" },
        { month: "Aoû", temp: 29, rain: 340, icon: "🌧️" },
        { month: "Sep", temp: 29, rain: 348, icon: "🌧️" },
        { month: "Oct", temp: 29, rain: 90,  icon: "⛅" },
        { month: "Nov", temp: 28, rain: 5,   icon: "☀️" },
        { month: "Déc", temp: 26, rain: 10,  icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Rajasthan — Triangle d'Or",
      region: "Nord-Ouest",
      description:
        "Le Grand Triangle d'Or Delhi–Agra–Jaipur couvre les incontournables : Taj Mahal, forts moghols et palais roses du Rajasthan avec ses turbans et ses épices.",
      wikipedia: "File:Humayun's_Tomb,_Delhi_(16729263579).jpg",
      tags: ["Histoire", "Culture", "Architecture", "Gastronomie", "UNESCO", "Ville"],
      mustSee: [
        { name: "Taj Mahal — Agra", wikipedia: "Taj_Mahal" },
        { name: "Fort d'Agra", wikipedia: "Agra_Fort" },
        { name: "Palais des Vents — Jaipur", wikipedia: "Hawa_Mahal" },
        { name: "Fort d'Amber", wikipedia: "File:20191219_Fort_Amber,_Amer,_Jaipur_0955_9481.jpg" },
      ],
    },
    {
      id: 2,
      name: "Varanasi",
      region: "Uttar Pradesh",
      description:
        "La ville la plus sacrée de l'Hindouisme, sur les rives du Gange. Les cérémonies Ganga Aarti au crépuscule, les ghats animés et la philosophie du cycle vie-mort sont une expérience spirituelle unique.",
      wikipedia: "Varanasi",
      tags: ["Spiritualité", "Culture", "Histoire", "Unique", "Ville"],
      mustSee: [
        { name: "Ghats du Gange — cérémonie Aarti", wikipedia: "Dashashwamedh_Ghat" },
        { name: "Temple Kashi Vishwanath", wikipedia: "Kashi_Vishwanath_Temple" },
        { name: "Sarnath — premier sermon du Bouddha", wikipedia: "Sarnath" },
        { name: "Balade en barque au lever du soleil", wikipedia: "Varanasi" },
      ],
    },
    {
      id: 3,
      name: "Goa",
      region: "Côte Ouest",
      description:
        "Ancienne colonie portugaise, Goa mêle plages tropicales, architecture baroque, cuisine de fruits de mer et ambiance décontractée. Le meilleur de l'Inde balnéaire.",
      wikipedia: "Goa",
      tags: ["Plage", "Mer", "Culture", "Fête", "Architecture"],
      mustSee: [
        { name: "Vieux Goa — basilique Bom Jesus", wikipedia: "Basilica_of_Bom_Jesus" },
        { name: "Plage de Palolem", wikipedia: "Palolem_Beach" },
        { name: "Plage d'Anjuna", wikipedia: "File:Anjuna_Beach,_Goa,_India,_Legendary_Curlies_beach_shack.jpg" },
      ],
    },
    {
      id: 4,
      name: "Kerala — Backwaters",
      region: "Sud",
      description:
        "Un réseau de canaux, lacs et lagunes longeant la côte de Malabar. Une croisière en houseboat au coucher du soleil dans les backwaters est l'expérience ultime du Kerala.",
      wikipedia: "Kerala_backwaters",
      tags: ["Nature", "Détente", "Culture", "Bateau"],
      mustSee: [
        { name: "Croisière en houseboat (Alleppey)", wikipedia: "Alappuzha" },
        { name: "Munnar — plantations de thé", wikipedia: "Munnar" },
        { name: "Fort Kochi & musée maritime", wikipedia: "Fort_Kochi" },
        { name: "Plage de Varkala", wikipedia: "Varkala" },
      ],
    },
    {
      id: 5,
      name: "Jodhpur & Jaisalmer",
      region: "Rajasthan",
      description:
        "La Ville Bleue de Jodhpur avec le fort imprenable de Mehrangarh, et Jaisalmer la Ville d'Or au cœur du désert du Thar avec ses dunes et ses nuits sous les étoiles.",
      wikipedia: "Jodhpur",
      tags: ["Histoire", "Désert", "Culture", "Paysage", "UNESCO", "Architecture"],
      mustSee: [
        { name: "Fort de Mehrangarh — Jodhpur", wikipedia: "Mehrangarh" },
        { name: "Fort de Jaisalmer en grès doré", wikipedia: "Jaisalmer_Fort" },
        { name: "Nuit sous les étoiles dans le désert du Thar", wikipedia: "Thar_Desert" },
        { name: "Lac Gadsisar — Jaisalmer", wikipedia: "Gadisar_Lake" },
      ],
    },
    {
      id: 6,
      name: "Himalaya & Ladakh",
      region: "Ladakh / Himachal Pradesh",
      description:
        "Perché à plus de 3 000 mètres, le Ladakh est un désert d'altitude bouddhiste aux monastères accrochés à la roche et aux lacs turquoise. Les treks à travers vallées et cols himalayens y sont légendaires. Plus à l'ouest, le Cachemire offre des stations de ski et des panoramas grandioses.",
      wikipedia: "Ladakh",
      tags: ["Randonnée", "Nature", "Désert", "Ski", "UNESCO"],
      mustSee: [
        { name: "Leh & Monastère de Thiksey", wikipedia: "File:Thiksey Monastery, Ladakh 02.jpg" },
        { name: "Trek Markha Valley", wikipedia: "File:Markha Valley1.JPG" },
        { name: "Pangong Lake", wikipedia: "File:Pangong Tso 2.jpg" },
        { name: "Nubra Valley", wikipedia: "File:Nubra Valley 2.jpg" },
        { name: "Gulmarg — ski & téléphérique", wikipedia: "File:Gulmarg 3.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "L'Inde est très accessible financièrement, surtout pour la nourriture et l'hébergement. Les sites touristiques majeurs (Taj Mahal, etc.) ont des tarifs étrangers plus élevés mais restent abordables.",
    currency: "INR (₹)",
    exchangeRate: "~90 ₹ = 1 €",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Dortoir hostel", price: "4–10 €", detail: "Backpacker hostels de bonne qualité" },
          { label: "Guesthouse locale", price: "10–25 €", detail: "Chambre double simple mais propre" },
          { label: "Heritage hôtel (Rajasthan)", price: "40–100 €", detail: "Haveli convertie, ambiance royale" },
          { label: "Hôtel confort", price: "40–90 €", detail: "Chambre double bien équipée" },
          { label: "Palace hôtel (5 étoiles)", price: "200–600 €", detail: "Oberoi, Taj Hotels — expérience maharajah" },
        ],
      },
      {
        id: "food",
        icon: "🍜",
        label: "Nourriture",
        items: [
          { label: "Dal bhat / thali (dhaba)", price: "1–3 €", detail: "Repas complet végétarien — délicieux" },
          { label: "Chai (thé au lait épicé)", price: "0,10–0,30 €", detail: "Incontournable à chaque coin de rue" },
          { label: "Restaurant local (mid-range)", price: "4–10 €", detail: "Butter chicken, palak paneer, biryani" },
          { label: "Restaurant touristique", price: "8–20 €", detail: "Cuisines régionales, menu en anglais" },
          { label: "Cours de cuisine indienne", price: "15–30 €", detail: "Curry, chapati, raita" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Tuk-tuk (auto-rickshaw)", price: "0,50–3 €", detail: "Négocier ou Ola/Uber conseillé" },
          { label: "Train sleeper (2e classe)", price: "5–15 €", detail: "Réseau ferroviaire immense, réservation indispensable" },
          { label: "Train 3A/AC (classe confort)", price: "15–40 €", detail: "Delhi–Agra–Jaipur bien desservi" },
          { label: "Vol intérieur (IndiGo, Air India)", price: "20–70 €", detail: "Très bien desservi, préférable pour longues distances" },
          { label: "Ola / Uber", price: "2–10 €", detail: "Bien plus sûr que le taxi local" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités & Culture",
        items: [
          { label: "Taj Mahal (étrangers)", price: "13–15 €", detail: "Prix pour étrangers — réservation conseillée" },
          { label: "Fort d'Amber (Jaipur)", price: "7–10 €", detail: "Éléphant en option (~15 €)" },
          { label: "Cours de yoga (Rishikesh)", price: "5–15 €/séance", detail: "La capitale mondiale du yoga" },
          { label: "Croisière houseboat (Kerala, 1 nuit)", price: "60–150 €", detail: "Pour 2, repas inclus" },
          { label: "Cérémonie Aarti (bateau, Varanasi)", price: "10–20 €", detail: "Expérience inoubliable" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "25–45 €/j", desc: "Guesthouse + dhabas + train + tuk-tuk", color: "#22c55e" },
      { type: "Confort", daily: "70–120 €/j", desc: "Heritage hôtel + restos + activités", color: "#3b82f6" },
      { type: "Luxe", daily: "250 €+/j", desc: "Palace hôtel + gastronomie + excursions privées", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "2 semaines",
      route: "Delhi (2j) → Agra (1j) → Jaipur (2j) → Jodhpur (2j) → Varanasi (2j) → Goa (5j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 200 – 1 700 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Delhi", amount: "400–650 €" },
            { label: "Trains & vols intérieurs", amount: "100–180 €" },
            { label: "Hébergement (14 nuits)", amount: "200–320 €" },
            { label: "Nourriture", amount: "150–250 €" },
            { label: "Activités (dont Taj Mahal)", amount: "150–280 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 400 – 3 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Delhi", amount: "500–800 €" },
            { label: "Trains AC & vols intérieurs", amount: "200–350 €" },
            { label: "Heritage hôtels (14 nuits)", amount: "700–1 100 €" },
            { label: "Nourriture & restaurants", amount: "500–750 €" },
            { label: "Activités & imprévus", amount: "350–550 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "6 000 € +",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Delhi (business)", amount: "2 000–3 500 €" },
            { label: "Transferts privés & vols", amount: "400–700 €" },
            { label: "Palace hôtels (14 nuits)", amount: "2 000–5 000 €" },
            { label: "Gastronomie & expériences", amount: "700–1 200 €" },
            { label: "Guides privés & imprévus", amount: "500–900 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "~8–9h direct (Air India, Air France) ou escale" },
    { icon: "🪪", label: "Visa", value: "e-Visa obligatoire : 30 jours (~25 $), 1 an (~40 $) ou 5 ans (~80 $). Demande en ligne, délai 3–5 jours." },
    { icon: "💰", label: "Monnaie", value: "Roupie indienne (₹) — retrait DAB, peu de cartes acceptées" },
    { icon: "🗣️", label: "Langue", value: "Hindi + anglais (officiel dans tout le pays)" },
    { icon: "🔌", label: "Prise électrique", value: "Type C/D/M — 230V (adaptateur recommandé)" },
    { icon: "📱", label: "Réseau", value: "SIM locale avec enregistrement (Airtel, Jio — très abordable)" },
    { icon: "🚰", label: "Eau du robinet", value: "Non potable — eau en bouteille uniquement" },
    { icon: "💊", label: "Santé", value: "Vaccins hépatite A/B, typhoïde, fièvre typhoïde recommandés — anti-moustiques" },
  ],
};
