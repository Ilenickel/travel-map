export const MOROCCO = {
  code: "MAR",
  numericId: 504,
  name: "Maroc",
  emoji: "🇲🇦",
  capital: "Rabat",
  language: "Arabe / Berbère",
  currency: "Dirham (MAD)",
  timezone: "UTC+1",
  filter: {
    budgetMin: 30, budgetMid: 70,
    tripMin: 1100, tripMid: 2200,
  },
  description:
    "Le Maroc est un royaume de contrastes saisissants : les médinas millénaires de Fès et Marrakech, les dunes dorées du Sahara, les vallées verdoyantes du Haut Atlas, les plages d'Essaouira et la cuisine aux épices envoûtantes. À seulement 3h de Paris.",

  bestPeriods: [
    {
      months: "Mars – Mai",
      label: "Printemps",
      color: "#22c55e",
      description:
        "La meilleure saison : températures idéales (20–26 °C), fleurs dans les vallées, avant la chaleur estivale. Idéal pour Marrakech, Fès et le désert.",
      icon: "🌸",
    },
    {
      months: "Octobre – Novembre",
      label: "Automne",
      color: "#fb923c",
      description:
        "Excellente période pour tout le pays. Désert du Sahara confortable, côte agréable, moins de touristes.",
      icon: "🌅",
    },
    {
      months: "Décembre – Février",
      label: "Hiver doux",
      color: "#93c5fd",
      description:
        "Douceur climatique dans les villes côtières et Marrakech (15–18 °C). Parfait pour les randonnées dans l'Atlas avec la neige en fond de décor.",
      icon: "⛰",
    },
  ],

  weatherCities: [
    {
      id: "marrakech",
      name: "Marrakech",
      region: "Centre-Sud",
      data: [
        { month: "Jan", temp: 13, rain: 24,  icon: "⛅" },
        { month: "Fév", temp: 15, rain: 29,  icon: "⛅" },
        { month: "Mar", temp: 18, rain: 25,  icon: "☀️" },
        { month: "Avr", temp: 19, rain: 35,  icon: "☀️" },
        { month: "Mai", temp: 22, rain: 9,   icon: "☀️" },
        { month: "Jun", temp: 26, rain: 3,   icon: "☀️" },
        { month: "Jul", temp: 29, rain: 2,   icon: "⛅" },
        { month: "Aoû", temp: 29, rain: 3,   icon: "⛅" },
        { month: "Sep", temp: 25, rain: 9,   icon: "☀️" },
        { month: "Oct", temp: 22, rain: 21,  icon: "☀️" },
        { month: "Nov", temp: 17, rain: 24,  icon: "☀️" },
        { month: "Déc", temp: 14, rain: 24,  icon: "⛅" },
      ],
    },
    {
      id: "essaouira",
      name: "Essaouira",
      region: "Côte Atlantique",
      data: [
        { month: "Jan", temp: 14, rain: 50,  icon: "⛅" },
        { month: "Fév", temp: 14, rain: 45,  icon: "⛅" },
        { month: "Mar", temp: 16, rain: 30,  icon: "☀️" },
        { month: "Avr", temp: 17, rain: 25,  icon: "☀️" },
        { month: "Mai", temp: 20, rain: 15,  icon: "☀️" },
        { month: "Jun", temp: 22, rain: 3,   icon: "☀️" },
        { month: "Jul", temp: 23, rain: 1,   icon: "☀️" },
        { month: "Aoû", temp: 23, rain: 1,   icon: "☀️" },
        { month: "Sep", temp: 22, rain: 5,   icon: "☀️" },
        { month: "Oct", temp: 20, rain: 25,  icon: "☀️" },
        { month: "Nov", temp: 17, rain: 55,  icon: "⛅" },
        { month: "Déc", temp: 15, rain: 65,  icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Marrakech",
      region: "Centre-Sud",
      description:
        "La Ville Rose envoûte avec la place Jemaa el-Fna, ses souks labyrinthiques, ses riads aux jardins secrets, le jardin Majorelle et les restaurants en terrasse.",
      wikipedia: "Marrakesh",
      tags: ["Culture", "Shopping", "Gastronomie", "Artisanat"],
      mustSee: [
        { name: "Place Jemaa el-Fna", wikipedia: "Jemaa_el-Fnaa" },
        { name: "Jardins Majorelle", wikipedia: "Majorelle_Garden" },
        { name: "Médina de Marrakech", wikipedia: "File:Medina of Marrakesh Sept2022 091.jpg" },
        { name: "Palais de la Bahia", wikipedia: "Bahia_Palace" },
      ],
    },
    {
      id: 2,
      name: "Fès",
      region: "Nord-Est",
      description:
        "La plus ancienne ville impériale, dont la médina classée UNESCO est la plus grande zone piétonne au monde. Tanneries de cuir, médersa Bou Inania et souks médiévaux.",
      wikipedia: "File:Minaret_of_the_Zawiya_of_Moulay_Idris_II_shrine,_Fès_El_Bali,_Morocco_2005.jpg",
      tags: ["Histoire", "UNESCO", "Culture", "Artisanat"],
      mustSee: [
        { name: "Médina de Fès el-Bali", wikipedia: "File:Fes Bab Bou Jeloud 2011.jpg" },
        { name: "Tanneries Chouara", wikipedia: "Chouara_Tannery" },
        { name: "Médersa Bou Inania", wikipedia: "Bou_Inania_Madrasa" },
        { name: "Musée Dar Batha", wikipedia: "File:Batha Museum (4317468784).jpg" },
      ],
    },
    {
      id: 3,
      name: "Désert du Sahara — Merzouga",
      region: "Sud-Est",
      description:
        "Les erg Chebbi, dunes dorées pouvant atteindre 150 m de hauteur, offrent une nuit sous les étoiles dans un camp berbère et un lever de soleil inoubliable.",
      wikipedia: "Erg_Chebbi",
      tags: ["Nature", "Aventure", "Paysage", "Culture berbère"],
      mustSee: [
        { name: "Dunes de l'Erg Chebbi", wikipedia: "Erg_Chebbi" },
        { name: "Nuit dans un camp sous les étoiles", wikipedia: "File:Merzouga.20200114.1.jpg" },
        { name: "Randonnée à dos de dromadaire", wikipedia: "File:Cavalier_de_chameaux_au_passage_dans_une_dune_de_sable_au_Maroc.jpg" },
        { name: "Ksar d'Aït-Ben-Haddou", wikipedia: "Aït_Benhaddou" },
      ],
    },
    {
      id: 4,
      name: "Essaouira",
      region: "Côte Atlantique",
      description:
        "Ville côtière aux remparts bleus et blancs, battue par les vents de l'Atlantique. Ancienne cité des corsaires, aujourd'hui paradis des surfeurs et des artistes.",
      wikipedia: "Essaouira",
      tags: ["Plage", "Mer", "Culture", "Kitesurf"],
      mustSee: [
        { name: "Remparts de la Sqala", wikipedia: "File:Qasba Sqala of Oudaïa.jpg" },
        { name: "Médina et Mellah", wikipedia: "File:Seaward_Walls_of_the_Medina_of_Essaouira,_Morocco.jpg" },
        { name: "Plage d'Essaouira — kitesurf", wikipedia: "File:Qasba_Sqala_of_Oudaïa_3.jpg" },
        { name: "Port de pêche", wikipedia: "File:Fishing Boats at Port of Essaouira Sqala.jpg" },
      ],
    },
    {
      id: 5,
      name: "Chefchaouen",
      region: "Nord",
      description:
        "La Ville Bleue, nichée dans le massif du Rif, est l'une des plus photogéniques du Maroc avec ses ruelles peintes en bleu et blanc, ses fontaines et son ambiance hors du temps.",
      wikipedia: "Chefchaouen",
      tags: ["Paysage", "Culture", "Photographie", "Randonnée"],
      mustSee: [
        { name: "Médina — ruelles bleues", wikipedia: "File:2018 01 (Blue) - Chaouen.jpg" },
        { name: "Plaza Uta el-Hammam", wikipedia: "File:Plaza Uta Hamam 04.jpg" },
        { name: "Cascade Ras el-Maa", wikipedia: "File:Akchour, Chefchaouen.jpg" },
        { name: "Randonnée dans le Rif", wikipedia: "File:RifMountainsInTheChefchaouenProvince.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "Le Maroc est très abordable pour les voyageurs européens. Les riads offrent un excellent confort pour un prix modique, et les tajines de rue sont délicieux et bon marché.",
    currency: "MAD (د.م.)",
    exchangeRate: "~11 MAD = 1 €",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Dortoir hostel", price: "6–12 €", detail: "Bonne qualité dans les grandes médinas" },
          { label: "Riad (chambre double)", price: "30–70 €", detail: "Maison traditionnelle avec patio et fontaine" },
          { label: "Riad confort", price: "70–150 €", detail: "Piscine, terrasse sur les toits, petit-déj inclus" },
          { label: "Camp dans le désert", price: "40–80 €", detail: "Dîner berbère + nuit sous les étoiles inclus" },
          { label: "Riad de luxe", price: "200–500 €", detail: "Décoration raffinée, service personnalisé, spa" },
        ],
      },
      {
        id: "food",
        icon: "🍜",
        label: "Nourriture",
        items: [
          { label: "Tajine / couscous (gargote)", price: "2–5 €", detail: "Les meilleures saveurs à bas prix" },
          { label: "Harira + msemen (marché)", price: "1–2 €", detail: "Soupe traditionnelle + crêpes berbères" },
          { label: "Restaurant touristique (terrasse)", price: "8–15 €", detail: "Pastilla, tajine agneau-pruneaux" },
          { label: "Jus de fruits frais", price: "0,80–1,50 €", detail: "Orange, avocat, grenade — incroyable !" },
          { label: "Restaurant gastronomique (riad)", price: "25–60 €", detail: "Cuisine marocaine raffinée" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Petit taxi (en ville)", price: "1–3 €", detail: "Négocier ou demander le compteur" },
          { label: "Grand taxi (inter-villes)", price: "3–10 €", detail: "Partagé entre 6 passagers" },
          { label: "CTM / Supratours (bus)", price: "5–20 €", detail: "Réseau national fiable et confortable" },
          { label: "Train ONCF", price: "10–30 €", detail: "Casablanca–Marrakech en 3h30" },
          { label: "Location de voiture", price: "20–50 €/j", detail: "Idéal pour le désert et l'Atlas" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités & Culture",
        items: [
          { label: "Palais de la Bahia", price: "Gratuit – 2 €", detail: "La plupart des palais sont très abordables" },
          { label: "Hammam traditionnel", price: "3–8 €", detail: "Gommage + savon beldi — expérience unique" },
          { label: "Cours de cuisine marocaine", price: "25–50 €", detail: "Tajine, bastilla, couscous" },
          { label: "Excursion désert 2j/1n", price: "60–120 €", detail: "Depuis Marrakech ou Fès, tout inclus" },
          { label: "Visite tanneries + souk (guide)", price: "10–20 €", detail: "Guide local recommandé à Fès" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "30–50 €/j", desc: "Hostel + gargotes + petits taxis", color: "#22c55e" },
      { type: "Confort", daily: "70–120 €/j", desc: "Riad + restos + activités", color: "#3b82f6" },
      { type: "Luxe", daily: "200 €+/j", desc: "Riad de luxe + gastronomie + excursions privées", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "2 semaines",
      route: "Marrakech (4j) → Sahara/Merzouga (3j) → Fès (3j) → Chefchaouen (2j) → Essaouira (2j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 100 – 1 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Marrakech", amount: "100–250 €" },
            { label: "Transports intérieurs (bus + taxis)", amount: "80–150 €" },
            { label: "Hébergement (14 nuits)", amount: "300–500 €" },
            { label: "Nourriture", amount: "250–400 €" },
            { label: "Activités (dont désert)", amount: "200–350 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 200 – 3 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Marrakech", amount: "150–350 €" },
            { label: "Transports & location voiture", amount: "200–350 €" },
            { label: "Hébergement riads (14 nuits)", amount: "800–1 200 €" },
            { label: "Nourriture & restaurants", amount: "550–800 €" },
            { label: "Activités & imprévus", amount: "350–500 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "4 500 € +",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Marrakech", amount: "200–600 €" },
            { label: "Transferts privés", amount: "300–600 €" },
            { label: "Riads de luxe (14 nuits)", amount: "2 000–4 000 €" },
            { label: "Gastronomie & spa hammam", amount: "700–1 200 €" },
            { label: "Excursions privées & imprévus", amount: "500–800 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "~3h direct (Royal Air Maroc, Air France, Transavia)" },
    { icon: "🪪", label: "Visa", value: "Pas de visa pour les Français (90 jours)" },
    { icon: "💰", label: "Monnaie", value: "Dirham (MAD) — retrait DAB conseillé, argent liquide indispensable" },
    { icon: "🗣️", label: "Langue", value: "Arabe et berbère — français très largement parlé" },
    { icon: "🔌", label: "Prise électrique", value: "Type C/E — 220V (même qu'en France)" },
    { icon: "📱", label: "Réseau", value: "SIM locale bon marché (Maroc Telecom, Inwi, Orange)" },
    { icon: "🚰", label: "Eau du robinet", value: "Non potable — eau en bouteille recommandée" },
    { icon: "💊", label: "Santé", value: "Vaccin hépatite A recommandé, soins corrects dans les villes" },
  ],
};
