export const INDONESIA = {
  code: "IDN",
  numericId: 360,
  name: "Indonésie",
  emoji: "🇮🇩",
  capital: "Jakarta",
  language: "Indonésien",
  currency: "Roupie (Rp)",
  timezone: "UTC+7 à UTC+9",
  filter: {
    budgetMin: 20, budgetMid: 60,
    tripMin: 1000, tripMid: 2000,
  },
  description:
    "L'Indonésie est le plus grand archipel du monde avec 17 000 îles. Bali, île des dieux aux temples et rizières en terrasses, Komodo et ses dragons, Lombok et ses plages vierges, et les orangs-outans de Bornéo forment un pays d'une biodiversité époustouflante.",

  bestPeriods: [
    {
      months: "Avril – Octobre",
      label: "Saison sèche (Bali)",
      color: "#22c55e",
      description:
        "Meilleure période pour Bali et les petites îles Sunda (Lombok, Flores, Komodo). Mer calme, soleil garanti.",
      icon: "☀️",
    },
    {
      months: "Mai – Septembre",
      label: "Saison sèche générale",
      color: "#3b82f6",
      description:
        "La saison sèche s'étend sur tout l'archipel (sauf Sulawesi). Idéal pour plonger à Raja Ampat et visiter Bornéo.",
      icon: "🌊",
    },
    {
      months: "Novembre – Mars",
      label: "Saison humide",
      color: "#fb923c",
      description:
        "Java et Bali ont plus de pluie mais restent visitables. Nord de Bali et Flores restent secs. Moins de touristes.",
      icon: "🌧",
    },
  ],

  weatherCities: [
    {
      id: "bali",
      name: "Bali",
      region: "Bali",
      data: [
        { month: "Jan", temp: 27, rain: 300, icon: "🌧️" },
        { month: "Fév", temp: 27, rain: 280, icon: "🌧️" },
        { month: "Mar", temp: 27, rain: 200, icon: "🌧️" },
        { month: "Avr", temp: 27, rain: 80,  icon: "⛅" },
        { month: "Mai", temp: 27, rain: 50,  icon: "⛅" },
        { month: "Jun", temp: 26, rain: 30,  icon: "☀️" },
        { month: "Jul", temp: 26, rain: 20,  icon: "☀️" },
        { month: "Aoû", temp: 26, rain: 15,  icon: "☀️" },
        { month: "Sep", temp: 26, rain: 30,  icon: "☀️" },
        { month: "Oct", temp: 27, rain: 100, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 220, icon: "🌧️" },
        { month: "Déc", temp: 27, rain: 280, icon: "🌧️" },
      ],
    },
    {
      id: "jakarta",
      name: "Jakarta",
      region: "Java",
      data: [
        { month: "Jan", temp: 27, rain: 350, icon: "🌧️" },
        { month: "Fév", temp: 27, rain: 280, icon: "🌧️" },
        { month: "Mar", temp: 27, rain: 210, icon: "🌧️" },
        { month: "Avr", temp: 28, rain: 130, icon: "🌧️" },
        { month: "Mai", temp: 28, rain: 95,  icon: "⛅" },
        { month: "Jun", temp: 28, rain: 80,  icon: "⛅" },
        { month: "Jul", temp: 28, rain: 60,  icon: "⛅" },
        { month: "Aoû", temp: 28, rain: 50,  icon: "⛅" },
        { month: "Sep", temp: 28, rain: 60,  icon: "⛅" },
        { month: "Oct", temp: 28, rain: 90,  icon: "⛅" },
        { month: "Nov", temp: 28, rain: 165, icon: "🌧️" },
        { month: "Déc", temp: 27, rain: 280, icon: "🌧️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Bali",
      region: "Bali",
      description:
        "L'île des dieux, avec ses rizières en terrasses (Tegallalang), ses temples hindous (Tanah Lot, Uluwatu), ses plages de surf et ses villages artisanaux d'Ubud.",
      wikipedia: "File:Sunset,_Kuta,_Bali,_Indonesia,_20220825_1755_0879.jpg",
      tags: ["Plage", "Culture", "Nature", "Spiritualité"],
      mustSee: [
        { name: "Rizières en terrasses de Tegallalang", wikipedia: "File:Rice_terraces,_Bali.jpg" },
        { name: "Temple Tanah Lot au coucher du soleil", wikipedia: "Tanah_Lot" },
        { name: "Temple Uluwatu sur les falaises", wikipedia: "File:Luhur_Uluwatu_Temple,_Bali,_20220826_0953_1016.jpg" },
        { name: "Ubud — cœur culturel de Bali", wikipedia: "Ubud" },
      ],
    },
    {
      id: 2,
      name: "Yogyakarta & Borobudur",
      region: "Java",
      description:
        "Borobudur est le plus grand temple bouddhiste du monde (9e siècle), classé UNESCO. À 70 km se trouve Prambanan, complexe de temples hindous tout aussi spectaculaire.",
      wikipedia: "Borobudur",
      tags: ["Histoire", "UNESCO", "Culture", "Architecture"],
      mustSee: [
        { name: "Borobudur — temple bouddhiste", wikipedia: "Borobudur" },
        { name: "Prambanan — temples hindous", wikipedia: "Prambanan" },
        { name: "Kraton — palais du Sultan", wikipedia: "Kraton_Ngayogyakarta_Hadiningrat" },
        { name: "Mont Merapi (volcan actif)", wikipedia: "Mount_Merapi" },
      ],
    },
    {
      id: 3,
      name: "Île de Komodo",
      region: "Nusa Tenggara",
      description:
        "Les dragons de Komodo, les plus grands lézards du monde, habitent ce parc national UNESCO. Plages roses uniques (Pantai Merah) et snorkeling exceptionnel.",
      wikipedia: "Komodo_National_Park",
      tags: ["Nature", "UNESCO", "Plongée", "Aventure"],
      mustSee: [
        { name: "Dragon de Komodo", wikipedia: "Komodo_dragon" },
        { name: "Plage rose de Pantai Merah", wikipedia: "File:Pantai_Pulau_Merah_Banyuwangi.jpg" },
        { name: "Parc national de Komodo", wikipedia: "Komodo_National_Park" },
        { name: "Manta Point — plongée", wikipedia: "File:Komodo_Island_north_aerial.jpg" },
      ],
    },
    {
      id: 4,
      name: "Raja Ampat",
      region: "Papouasie occidentale",
      description:
        "Le meilleur site de plongée et de snorkeling du monde. 75 % des espèces de coraux de la planète vivent dans ces eaux cristallines entourées d'îles karstiques verdoyantes.",
      wikipedia: "Raja_Ampat_Islands",
      tags: ["Plongée", "Snorkeling", "Nature", "Paysage"],
      mustSee: [
        { name: "Wayag — vue aérienne sur les îles karstiques", wikipedia: "File:Wayag_Island,_Raja_Ampat_(14280693998).jpg" },
        { name: "Pianemo — belvédère iconique", wikipedia: "File:Raja Ampat, West Papua, Indonesia.jpg" },
        { name: "Snorkeling à Arborek", wikipedia: "Raja_Ampat_Islands" },
        { name: "Blue Water Mangroves (kayak)", wikipedia: "File:Pulau Piaynemo, Raja Ampat.jpg" },
      ],
    },
    {
      id: 5,
      name: "Lombok & Îles Gili",
      region: "Nusa Tenggara Ouest",
      description:
        "Lombok, moins touristique que Bali, avec le majestueux volcan Rinjani et les îles Gili — paradis sans voitures pour la plongée, le snorkeling et la fête.",
      wikipedia: "Lombok",
      tags: ["Plage", "Volcan", "Plongée", "Randonnée"],
      mustSee: [
        { name: "Trekking au Volcan Rinjani (3 726 m)", wikipedia: "Mount_Rinjani" },
        { name: "Gili Trawangan — plage & fête", wikipedia: "File:Gili Trawangan (island), Beach restaurant at night, Indonesia.jpg" },
        { name: "Gili Meno — tortues marines", wikipedia: "File:Gili Islands, Brigantine, Bali Sea, Indonesia.jpg" },
        { name: "Plage de Selong Belanak", wikipedia: "Lombok" },
      ],
    },
  ],

  costOfLiving: {
    intro: "L'Indonésie est l'une des destinations les moins chères d'Asie. À Bali, les prix ont augmenté mais restent très accessibles. Java et les îles plus reculées sont encore moins chères.",
    currency: "IDR (Rp)",
    exchangeRate: "~16 500 Rp = 1 €",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Dortoir hostel", price: "4–10 €", detail: "Bonne qualité à Bali et Yogyakarta" },
          { label: "Guesthouse familiale", price: "10–25 €", detail: "Chambre privée avec ventilo ou clim" },
          { label: "Villa Bali avec piscine", price: "40–100 €", detail: "Pour 2 personnes — incroyable rapport Q/P" },
          { label: "Resort confort", price: "80–200 €", detail: "Piscine, spa, bord de mer" },
          { label: "Villa luxe (private pool)", price: "200–600 €", detail: "Villas de rêve avec jardin tropical" },
        ],
      },
      {
        id: "food",
        icon: "🍜",
        label: "Nourriture",
        items: [
          { label: "Nasi goreng / mie goreng (warung)", price: "1–2 €", detail: "La street food de base — délicieuse" },
          { label: "Gado gado / sate (marché)", price: "1,50–3 €", detail: "Plats traditionnels savoureux" },
          { label: "Restaurant local (mid-range Bali)", price: "4–10 €", detail: "Bebek betutu, rendang, rijsttafel" },
          { label: "Restaurant touristique (Seminyak)", price: "10–20 €", detail: "Cuisine internationale ou fusion" },
          { label: "Jus de fruits frais", price: "1–2 €", detail: "Mangue, papaye, ananas — frais !" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Ojek / Go-Jek (moto)", price: "0,50–2 €", detail: "Rapide et économique en ville" },
          { label: "Grab (voiture)", price: "2–8 €", detail: "Pour les trajets plus longs ou en famille" },
          { label: "Scooter en location", price: "4–8 €/j", detail: "Idéal à Bali, permis international recommandé" },
          { label: "Bus DAMRI (aéroport)", price: "2–4 €", detail: "Depuis Bali, Jakarta, Yogyakarta" },
          { label: "Vol intérieur (Lion Air, Citilink)", price: "20–60 €", detail: "Indispensable pour aller de Java à Bali" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités & Culture",
        items: [
          { label: "Entrée Borobudur", price: "25 € (étrangers)", detail: "Lever de soleil disponible (plus cher)" },
          { label: "Cours de cuisine balinaise", price: "20–40 €", detail: "Marché + cuisine + déjeuner inclus" },
          { label: "Rafting (Ayung River, Bali)", price: "25–40 €", detail: "2h sur la rivière, transfert inclus" },
          { label: "Plongée (2 plongées + équip)", price: "40–70 €", detail: "Nusa Penida, Gili, Raja Ampat" },
          { label: "Cérémonie Hindu à Tanah Lot", price: "Gratuit – 3 €", detail: "Entrée + sarong fourni" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "20–40 €/j", desc: "Hostel + warungs + scooter partagé", color: "#22c55e" },
      { type: "Confort", daily: "60–110 €/j", desc: "Villa Bali + restos + activités", color: "#3b82f6" },
      { type: "Luxe", daily: "200 €+/j", desc: "Villa private pool + gastronomie + excursions privées", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "2 semaines",
      route: "Bali — Ubud (3j) → Nusa Penida (2j) → Lombok (3j) → Gili (2j) → Yogyakarta (3j) → Borobudur (1j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 000 – 1 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Bali", amount: "450–700 €" },
            { label: "Ferries & vols intérieurs", amount: "60–100 €" },
            { label: "Hébergement (14 nuits)", amount: "150–250 €" },
            { label: "Nourriture", amount: "150–250 €" },
            { label: "Activités & imprévus", amount: "150–250 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 000 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Bali", amount: "600–900 €" },
            { label: "Ferries & vols intérieurs", amount: "100–180 €" },
            { label: "Hébergement villas (14 nuits)", amount: "500–800 €" },
            { label: "Nourriture & restaurants", amount: "350–600 €" },
            { label: "Activités (plongée, rafting...)", amount: "300–500 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "5 000 € +",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Bali (business)", amount: "2 000–3 500 €" },
            { label: "Transferts privés", amount: "200–400 €" },
            { label: "Villas private pool (14 nuits)", amount: "1 500–3 000 €" },
            { label: "Gastronomie & spa", amount: "600–1 200 €" },
            { label: "Excursions privées & imprévus", amount: "400–700 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "~13–14h avec escale (Singapour, Doha, Dubai)" },
    { icon: "🪪", label: "Visa", value: "Visa à l'arrivée 30 jours (35 $) ou e-Visa en ligne" },
    { icon: "💰", label: "Monnaie", value: "Roupie indonésienne (Rp) — retrait DAB, peu de cartes acceptées" },
    { icon: "🗣️", label: "Langue", value: "Indonésien (Bahasa) — anglais courant à Bali et sites touristiques" },
    { icon: "🔌", label: "Prise électrique", value: "Type C/F — 220V (même qu'en France)" },
    { icon: "📱", label: "Réseau", value: "SIM locale très bon marché (Telkomsel, XL)" },
    { icon: "🚰", label: "Eau du robinet", value: "Non potable — eau en bouteille indispensable" },
    { icon: "💊", label: "Santé", value: "Vaccins hépatite A/B, typhoïde recommandés, anti-moustiques (dengue)" },
  ],
};
