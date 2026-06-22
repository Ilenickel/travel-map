export const NIGER = {
  code: "NER",
  numericId: 562,
  name: "Niger",
  emoji: "🇳🇪",
  capital: "Niamey",
  language: "Français, Haoussa, Zarma",
  currency: "Franc CFA (XOF)",
  timezone: "UTC+1",
  filter: {
    budgetMin: 30, budgetMid: 60,
    tripMin: 750, tripMid: 1500,
  },
  description:
    "Le Niger était l'une des destinations d'aventure les plus fascinantes du Sahara : Agadez, cité médiévale classée à l'UNESCO, les montagnes de l'Aïr et le désert du Ténéré avec ses dunes monumentales, et le parc W pour la faune sahélienne. Suite au coup d'état militaire de juillet 2023 et à l'instabilité sécuritaire persistante, le pays est actuellement déconseillé aux voyageurs.",

  bestPeriods: [
    {
      months: "Novembre – Février",
      label: "Saison fraîche (pré-coup d'état)",
      color: "#22c55e",
      description:
        "Avant le coup d'état de 2023, c'était la seule période praticable : températures supportables (18–30°C), pistes du désert accessibles en 4x4, nuits fraîches et étoilées dans le Ténéré.",
      icon: "🏜️",
    },
    {
      months: "Juillet – Septembre",
      label: "Saison des pluies (Sahel)",
      color: "#f59e0b",
      description:
        "Pluies au sud (Niamey, parc W), verdoyant mais routes difficiles. Le nord reste sec et torride (40°C+). Période de la fête du Sultan d'Agadez (Sultanat de l'Aïr).",
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "niamey",
      name: "Niamey",
      region: "Capitale (Sahel, fleuve Niger)",
      data: [
        { month: "Jan", temp: 22, rain: 0,   icon: "☀️" },
        { month: "Fév", temp: 25, rain: 0,   icon: "☀️" },
        { month: "Mar", temp: 31, rain: 2,   icon: "⛅" },
        { month: "Avr", temp: 36, rain: 10,  icon: "🌡️" },
        { month: "Mai", temp: 38, rain: 30,  icon: "🌡️" },
        { month: "Jun", temp: 35, rain: 55,  icon: "🌡️" },
        { month: "Jul", temp: 32, rain: 85,  icon: "🌡️" },
        { month: "Aoû", temp: 31, rain: 100, icon: "🌧️" },
        { month: "Sep", temp: 30, rain: 70,  icon: "⛅" },
        { month: "Oct", temp: 32, rain: 20,  icon: "🌡️" },
        { month: "Nov", temp: 27, rain: 2,   icon: "⛅" },
        { month: "Déc", temp: 22, rain: 0,   icon: "☀️" },
      ],
    },
    {
      id: "agadez",
      name: "Agadez",
      region: "Aïr (désert, 500m)",
      data: [
        { month: "Jan", temp: 19, rain: 0,  icon: "☀️" },
        { month: "Fév", temp: 23, rain: 0,  icon: "☀️" },
        { month: "Mar", temp: 29, rain: 0,  icon: "⛅" },
        { month: "Avr", temp: 35, rain: 2,  icon: "🌡️" },
        { month: "Mai", temp: 39, rain: 5,  icon: "🌡️" },
        { month: "Jun", temp: 39, rain: 10, icon: "🌡️" },
        { month: "Jul", temp: 36, rain: 30, icon: "🌡️" },
        { month: "Aoû", temp: 33, rain: 55, icon: "🌡️" },
        { month: "Sep", temp: 33, rain: 25, icon: "🌡️" },
        { month: "Oct", temp: 32, rain: 5,  icon: "🌡️" },
        { month: "Nov", temp: 25, rain: 0,  icon: "☀️" },
        { month: "Déc", temp: 19, rain: 0,  icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Agadez — Cité du Désert",
      region: "Région d'Agadez (centre-nord)",
      description:
        "Agadez est l'une des grandes villes caravanières du Sahara, classée au patrimoine mondial de l'UNESCO. Sa Grande Mosquée avec son minaret de terre et de bois est l'un des édifices les plus emblématiques d'Afrique de l'Ouest. La vieille ville en adobe aux ruelles labyrinthiques témoigne de cinq siècles d'histoire touareg, commerce trans-saharien et culture nomade. Avant la crise sécuritaire, c'était la principale porte d'entrée vers le Ténéré.",
      wikipedia: "Agadez",
      tags: ["UNESCO", "Culture touareg", "Architecture", "Désert"],
      mustSee: [
        { name: "Grande Mosquée d'Agadez — minaret de terre et de bois (27m), symbole de la ville", wikipedia: "File:Niger, Agadez (43), Grand Mosque.jpg" },
        { name: "Vieille ville (médina) d'Agadez — ruelles en adobe et palais du Sultan", wikipedia: "Agadez" },
        { name: "Palais du Sultan de l'Aïr — siège du pouvoir touareg", wikipedia: "File:Pałac_wodza_Tuaregów_-_Agades_-_001189s.jpg" },
        { name: "Marché artisanal touareg — argent ciselé, cuir et instruments", wikipedia: "File:Esprit nomade.JPG" },
      ],
    },
    {
      id: 2,
      name: "Montagnes de l'Aïr & Désert du Ténéré",
      region: "Région d'Agadez (nord)",
      description:
        "Le massif de l'Aïr et le désert du Ténéré forment une réserve naturelle classée à l'UNESCO de plus de 7 millions d'hectares, l'une des plus grandes au monde. Les montagnes volcaniques de l'Aïr abritent des vallées verdoyantes (oasis), des gravures rupestres néolithiques et les célèbres addax, antilopes sahariennes. Le Ténéré, « désert dans le désert », offre des paysages de sable et d'ergs d'une beauté absolue, dominés par l'Arbre du Ténéré (aujourd'hui disparu).",
      wikipedia: "File:Montagnes Bleus1.jpg",
      tags: ["UNESCO", "Sahara", "Gravures rupestres", "Faune"],
      mustSee: [
        { name: "Erg du Ténéré — mer de sable monumentale", wikipedia: "Ténéré" },
        { name: "Gravures rupestres de l'Aïr — art néolithique saharien", wikipedia: "File:Fondazione Passaré V27 230.jpg" },
        { name: "Oasis de Timia — palmeraie dans les montagnes de l'Aïr", wikipedia: "Timia" },
        { name: "Massif de l'Arakao — dunes rouges spectaculaires", wikipedia: "File:Michael martin wüste (49).jpg" },
      ],
    },
    {
      id: 3,
      name: "Parc National du W",
      region: "Région de Dosso / Tillabéri (sud-ouest)",
      description:
        "Le parc du W (ainsi nommé pour les méandres en W du fleuve Niger à ses frontières) est un parc transfrontalier classé à l'UNESCO partagé entre le Niger, le Bénin et le Burkina Faso. Il abrite lions, éléphants, buffles, hippopotames et une avifaune remarquable dans une savane sahélienne caractéristique. C'est la destination de safari la plus accessible depuis Niamey, à environ 150 km.",
      wikipedia: "W_National_Park",
      tags: ["Safari", "UNESCO", "Lions", "Éléphants"],
      mustSee: [
        { name: "Mares d'hippopotames — nombreux dans le fleuve Niger", wikipedia: "File:La_boule_du_monde,_Chutes_de_koudou,_Parc_W,_Benin.jpg" },
        { name: "Troupeaux d'éléphants — migration entre les trois pays", wikipedia: "File:Elephants bath park w wide 2006.jpg" },
        { name: "Panoramas sur le fleuve Niger", wikipedia: "File:Niger_Safari.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro:
      "Le Niger est l'une des destinations les moins chères de la région, mais les coûts d'expédition vers le désert (4x4 obligatoire, carburant, guide) représentent l'essentiel du budget. Suite au coup d'état de 2023, la situation économique et sécuritaire a considérablement affecté l'accès aux sites touristiques.",
    currency: "XOF",
    exchangeRate: "1€ ≈ 655 XOF",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Auberge / guesthouse basique", range: "8–20 €" },
          { label: "Hôtel milieu de gamme (Niamey)", range: "30–60 €" },
          { label: "Camp désert (Ténéré, tente)", range: "20–40 €" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Riz, millet ou pâtes au marché local", range: "1–3 €" },
          { label: "Restaurant en ville", range: "5–12 €" },
          { label: "Thé touareg (cérémonie des 3 thés)", range: "1–2 €" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Bush taxi (Niamey–Dosso)", range: "3–8 €" },
          { label: "Location 4x4 avec chauffeur-guide", range: "100–180 €/j" },
          { label: "Carburant supplémentaire pour désert", range: "50–100 € par expédition" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Entrée parc du W", range: "5–10 €" },
          { label: "Guide culturel à Agadez (demi-journée)", range: "15–30 €" },
          { label: "Promenade à dromadaire (Ténéré)", range: "20–40 €/j" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "30–50 €/j", desc: "Hors logistique désert. Hébergement basique, nourriture locale.", color: "#22c55e" },
      { type: "Confort", daily: "60–120 €/j", desc: "Hôtel correct + expédition Ténéré avec 4x4 et guide.", color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Niamey → Parc W → Dosso → Agadez → Aïr & Ténéré",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "750 – 1 100 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Niamey", amount: "350–500 €" },
            { label: "Hébergement (9 nuits)", amount: "90–180 €" },
            { label: "Transports locaux + bush taxi", amount: "80–150 €" },
            { label: "Nourriture + boissons", amount: "100–180 €" },
            { label: "Activités + guides", amount: "100–180 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "1 500 – 2 200 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Niamey", amount: "400–600 €" },
            { label: "Hébergement (9 nuits)", amount: "270–540 €" },
            { label: "Location 4x4 + carburant désert", amount: "450–700 €" },
            { label: "Nourriture + boissons", amount: "200–350 €" },
            { label: "Activités + guides", amount: "150–300 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "Vols avec Air France ou via Casablanca (Royal Air Maroc) et Abidjan (Air Côte d'Ivoire). Durée ~6–10h selon connexion." },
    { icon: "🪪", label: "Visa", value: "Visa obligatoire. Obtention en ambassade à Paris. Les formalités peuvent être perturbées selon la situation politique actuelle." },
    { icon: "💰", label: "Monnaie", value: "Franc CFA UEMOA (XOF). Espèces indispensables dans tout le pays. Quelques distributeurs à Niamey seulement." },
    { icon: "🗣️", label: "Langue", value: "Français (officiel), haoussa et zarma (langues véhiculaires), tamachek (langue touareg). Le français est compris dans les villes." },
    { icon: "🔌", label: "Prise électrique", value: "Type C et Type E (comme en France). Tension 220V. Coupures de courant très fréquentes à Niamey." },
    { icon: "💊", label: "Santé", value: "Vaccin fièvre jaune obligatoire. Paludisme présent dans le sud : prophylaxie indispensable. Méningite recommandée (ceinture de la méningite). Chaleur extrême : hydratation vitale." },
    { icon: "⚠️", label: "Sécurité — AVERTISSEMENT", value: "🚫 Le Niger est classé en zone rouge par le MEAE depuis le coup d'état militaire de juillet 2023. Risque d'enlèvements, attaques jihadistes (zones frontalières Mali, Burkina). Consulter impérativement conseils-aux-voyageurs.gouv.fr avant tout projet." },
    { icon: "🏜️", label: "Logistique désert", value: "Toute expédition dans l'Aïr ou le Ténéré nécessite au minimum 2 véhicules 4x4, guide touareg homologué, carburant pour 1 000+ km, GPS et communication satellite." },
  ],
};
