export const TIMOR_LESTE = {
  code: "TLS",
  numericId: 626,
  name: "Timor oriental",
  emoji: "🇹🇱",
  capital: "Dili",
  language: "Tétoum, Portugais",
  currency: "Dollar américain (USD)",
  timezone: "UTC+9",
  filter: { budgetMin: 40, budgetMid: 80, tripMin: 900, tripMid: 1900 },
  description:
    "Le Timor oriental est le plus jeune État d'Asie du Sud-Est, ayant acquis son indépendance en 2002 après des décennies d'occupation indonésienne et une guerre de libération douloureuse. Ce petit pays de la mer de Timor recèle pourtant des trésors naturels exceptionnels : ses eaux marines comptent parmi les mieux préservées au monde, avec la plus haute biodiversité de poissons jamais recensée autour de l'île d'Atauro. Authentique et encore peu développé touristiquement, le Timor oriental offre une immersion rare dans un pays en pleine construction.",
  bestPeriods: [
    {
      months: "Juin–Novembre",
      label: "Saison sèche — Idéal",
      color: "#22c55e",
      description: "Temps sec et ensoleillé, mer calme, parfait pour la plongée, les randonnées et les visites.",
      icon: "☀️",
    },
    {
      months: "Décembre–Mai",
      label: "Saison des pluies",
      color: "#f59e0b",
      description: "Pluies tropicales fréquentes, routes difficiles en zone rurale, mais végétation luxuriante.",
      icon: "🌧️",
    },
  ],
  weatherCities: [
    {
      id: "dili",
      name: "Dili",
      region: "Capitale",
      data: [
        { month: "Jan", temp: 28, rain: 130, icon: "🌧️" },
        { month: "Fév", temp: 28, rain: 170, icon: "🌧️" },
        { month: "Mar", temp: 28, rain: 150, icon: "🌧️" },
        { month: "Avr", temp: 28, rain: 150, icon: "🌧️" },
        { month: "Mai", temp: 27, rain: 70, icon: "⛅" },
        { month: "Jun", temp: 25, rain: 10, icon: "☀️" },
        { month: "Jul", temp: 24, rain: 5, icon: "☀️" },
        { month: "Aoû", temp: 25, rain: 10, icon: "☀️" },
        { month: "Sep", temp: 26, rain: 15, icon: "☀️" },
        { month: "Oct", temp: 27, rain: 25, icon: "⛅" },
        { month: "Nov", temp: 27, rain: 60, icon: "⛅" },
        { month: "Déc", temp: 28, rain: 100, icon: "🌧️" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: "Île d'Atauro",
      region: "Mer de Banda",
      description:
        "L'île d'Atauro est un paradis pour les plongeurs et les snorkeleurs, avec la plus haute densité de poissons jamais enregistrée au monde selon une étude de 2016. Située à seulement 25 kilomètres au nord de Dili, cette île volcanique aux villages de pêcheurs préservés offre une immersion totale dans la vie timoraise traditionnelle. Les récifs coralliens immaculés plongent directement dans des eaux cristallines où évoluent tortues marines, requins de récif et dauphins.",
      wikipedia: "File:Dili and Atauro Island.jpg",
      tags: ["Plongée", "Île", "Corail", "Biodiversité"],
      mustSee: [
        { name: "Site de plongée Barry's Place — mur de corail vertigineux", wikipedia: "File:44-EastTimor-Dive_Atauro-Manta_Cove_03_(Diver)-APiazza.JPG" },
        { name: "Village de Beloi — communauté de pêcheurs traditionnels", wikipedia: "File:Atauro 2.jpg" },
        { name: "Randonnée au sommet Manucoco — panorama sur Dili et la mer", wikipedia: "File:View to Mt Manucoco.jpg" },
        { name: "Observation des dauphins — cétacés fréquents dans le détroit", wikipedia: "File:Tursiops truncatus 01.jpg" },
      ],
    },
    {
      id: 2,
      name: "Cristo Rei de Dili",
      region: "Dili",
      description:
        "Le Cristo Rei est une statue du Christ Roi de 27 mètres inaugurée en 1996, offerte par le gouvernement indonésien et perchée sur un promontoire rocheux dominant la mer de Timor et la capitale Dili. La montée par un escalier de 500 marches longeant des stations de la croix récompense le visiteur d'un panorama exceptionnel sur la baie de Dili, les montagnes environnantes et les eaux azurées. La plage au pied de la statue est l'une des plus populaires de la capitale.",
      wikipedia: "File:Cristo Rei of Dili, Timor-Leste.jpg",
      tags: ["Monument", "Panorama", "Religion", "Plage"],
      mustSee: [
        { name: "Escalier des 500 marches — montée avec vue progressive sur la baie", wikipedia: "File:Dili - Christusstatue 'Cristo Rei'.jpg" },
        { name: "Panorama depuis la statue — Dili et les îles au loin", wikipedia: "File:US_Navy_110623-F-HS649-551_The_amphibious_transport_dock_ship_USS_Cleveland_(LPD_7)_is_anchored_in_Dili_Harbor_below_the_statue_of_Cristo_Rei,_or_C.jpg" },
        { name: "Plage de Cristo Rei — baignade et snorkeling accessibles", wikipedia: "File:Cristo Rei beach, Dili, 2018 (04).jpg" },
        { name: "Lever de soleil — lumières dorées sur la mer de Timor", wikipedia: "File:Cristo_Rei_(31988940360).jpg" },
      ],
    },
    {
      id: 3,
      name: "Parc national Nino Konis Santana",
      region: "Nord-est du pays",
      description:
        "Le parc national Nino Konis Santana est la plus grande aire protégée du Timor oriental, couvrant 1 236 km² de forêts tropicales montagneuses, de zones humides côtières et de récifs coralliens dans la région de Tutuala. Ce parc est nommé en l'honneur d'un commandant de la résistance timoraise et abrite des espèces endémiques d'oiseaux et de reptiles dans des écosystèmes encore largement inexplorés par les scientifiques. Les falaises préhistoriques de Ile Kere Kere avec leurs peintures rupestres vieilles de plusieurs millénaires en font un site archéologique majeur.",
      wikipedia: "File:Tutuala_F-33.jpg",
      tags: ["Parc national", "Biodiversité", "Archéologie", "Forêt"],
      mustSee: [
        { name: "Plage de Tutuala — plage isolée aux eaux turquoise dans le parc", wikipedia: "File:Valu beach 2015.jpg" },
        { name: "Ile Kere Kere — grottes avec peintures rupestres préhistoriques", wikipedia: "File:Ile Kére Kére05.jpg" },
        { name: "Lac Ira Lalaro — seul lac naturel permanent du Timor oriental", wikipedia: "File:Flooded Lake Iralalaro view 4.jpg" },
      ],
    },
    {
      id: 4,
      name: "Dili — mémoire et histoire",
      region: "Capitale",
      description:
        "Dili est une capitale en pleine reconstruction, où l'histoire douloureuse de l'occupation indonésienne et la lutte pour l'indépendance sont omniprésentes dans ses monuments et musées. Le Musée de la Résistance retrace avec émotion et précision les 24 années d'occupation et le génocide qui a décimé un tiers de la population timoraise. Le front de mer animé, les marchés colorés et la chaleur légendaire des habitants font de Dili une étape émouvante et profondément humaine.",
      wikipedia: "Dili",
      tags: ["Histoire", "Mémoire", "Culture", "Capitale"],
      mustSee: [
        { name: "Musée de la Résistance — histoire de l'indépendance timoraise", wikipedia: "File:Painel pateo AMRT1.jpg" },
        { name: "Cimetière de Santa Cruz — massacre de 1991 et mémorial", wikipedia: "File:Santa Cruz Cemetery, 2023 (02).jpg" },
        { name: "Front de mer de Dili — promenade au coucher du soleil sur la baie", wikipedia: "File:4K UHD Strand Osttimor 2019-08-01.jpg" },
      ],
    },
  ],
  costOfLiving: {
    intro:
      "Le Timor oriental est relativement cher pour la région en raison de son infrastructure limitée et de sa dépendance aux importations. Le dollar américain est la monnaie officielle depuis l'indépendance.",
    currency: "USD",
    exchangeRate: "1€ ≈ 1,08 USD",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse ou homestay simple", range: "15–30 €" },
          { label: "Hôtel de catégorie moyenne", range: "40–70 €" },
          { label: "Hébergement sur l'île d'Atauro", range: "30–80 €" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Riz, poisson et légumes au marché local", range: "2–4 €" },
          { label: "Restaurant local à Dili", range: "5–10 €" },
          { label: "Restaurant expatrié ou hôtel", range: "12–25 €" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Microlet (minibus local) en ville", range: "0,25–0,50 €" },
          { label: "Ferry Dili–Atauro (aller simple)", range: "3–6 €" },
          { label: "Location 4x4 avec chauffeur / jour", range: "60–100 €" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Plongée avec guide (1 plongée)", range: "30–50 €" },
          { label: "Snorkeling tour organisé", range: "15–30 €" },
          { label: "Trek guidé dans le parc Nino Konis", range: "20–50 €" },
        ],
      },
    ],
    budgetSummary: [
      {
        type: "Routard",
        daily: "35–55 €/j",
        desc: "Guesthouse, repas locaux, microlets, snorkeling autonome.",
        color: "#22c55e",
      },
      {
        type: "Confort",
        daily: "80–130 €/j",
        desc: "Hôtel correct, restaurants expatriés, location voiture, plongées guidées.",
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Dili → Cristo Rei → Atauro (3 nuits) → Tutuala/Nino Konis → Dili",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "900 – 1300 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Dili (via Darwin ou Bali)", amount: "550–800 €" },
            { label: "Hébergement (9 nuits)", amount: "135–270 €" },
            { label: "Transports locaux et ferries", amount: "50–80 €" },
            { label: "Nourriture + boissons", amount: "60–100 €" },
            { label: "Activités (snorkeling, plongée)", amount: "80–150 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "1800 – 2500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Dili (via Singapour ou Bali)", amount: "700–1000 €" },
            { label: "Hébergement (9 nuits)", amount: "400–650 €" },
            { label: "Location 4x4 et transferts", amount: "200–350 €" },
            { label: "Nourriture + restaurants", amount: "150–250 €" },
            { label: "Activités et plongées", amount: "200–350 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "20–26h avec 2 escales (Singapour ou Bali puis Darwin, ou via Kuala Lumpur)" },
    { icon: "🪪", label: "Visa", value: "Visa à l'arrivée (30 USD) ou e-Visa en ligne. Passeport valide 6 mois minimum" },
    { icon: "💰", label: "Monnaie", value: "Dollar américain (USD) monnaie officielle. Peu de distributeurs hors Dili — prévoir des espèces" },
    { icon: "🗣️", label: "Langue", value: "Tétoum et portugais officiels. Indonésien compris par beaucoup. Anglais limité hors Dili" },
    { icon: "🔌", label: "Prise électrique", value: "Type C/F (220V) — adaptateur européen compatible. Coupures fréquentes en zone rurale" },
    { icon: "💊", label: "Santé", value: "Paludisme présent — prophylaxie recommandée. Hépatite A, typhoïde. Soins médicaux limités hors Dili" },
    { icon: "🌊", label: "Plongée", value: "Eaux parmi les meilleures d'Asie du Sud-Est. Visibilité excellente de juin à novembre. Prestataires limités" },
    { icon: "🛣️", label: "Routes", value: "Routes difficiles hors de Dili, souvent non goudronnées. 4x4 avec chauffeur local vivement recommandé" },
  ],
};
