export const FINLAND = {
  code: "FIN",
  numericId: 246,
  name: "Finlande",
  emoji: "🇫🇮",
  capital: "Helsinki",
  language: "Finnois, Suédois",
  currency: "Euro (EUR)",
  timezone: "UTC+2 (été UTC+3)",
  filter: {
    budgetMin: 100, budgetMid: 180,
    tripMin: 1500, tripMid: 3000,
  },
  description:
    "La Finlande est le 'pays de mille lacs' (il y en a 188 000) et de la forêt profonde. Helsinki, la capitale la plus au nord de l'UE, est une ville design et multiculturelle. En Laponie, Rovaniemi (ville officielle du Père Noël) et Saariselkä offrent les meilleures aurores boréales et safaris en motoneige d'Europe. Le sauna y est une institution culturelle fondamentale.",

  bestPeriods: [
    {
      months: "Juin – Août",
      label: "Été blanc",
      color: "#22c55e",
      description:
        "Courte mais belle saison : soleil jusqu'à 23h, lacs bleus, festivals (Flow Festival à Helsinki), randonnées en Laponie sans moustiques. Températures 20–26°C à Helsinki.",
      icon: "☀️",
    },
    {
      months: "Décembre – Mars",
      label: "Hiver de Laponie",
      color: "#3b82f6",
      description:
        "Rovaniemi et le Père Noël, aurores boréales magnifiques, safaris en motoneige et traîneaux à rennes. Expérience hivernale unique en Europe.",
      icon: "🌌",
    },
  ],

  weatherCities: [
    {
      id: "helsinki",
      name: "Helsinki",
      region: "Côte sud (Golfe de Finlande)",
      data: [
        { month: "Jan", temp: -4, rain: 45,  icon: "❄️" },
        { month: "Fév", temp: -5, rain: 35,  icon: "❄️" },
        { month: "Mar", temp: -1, rain: 35,  icon: "❄️" },
        { month: "Avr", temp:  5, rain: 35,  icon: "⛅" },
        { month: "Mai", temp: 12, rain: 40,  icon: "⛅" },
        { month: "Jun", temp: 17, rain: 55,  icon: "☀️" },
        { month: "Jul", temp: 21, rain: 65,  icon: "☀️" },
        { month: "Aoû", temp: 20, rain: 70,  icon: "☀️" },
        { month: "Sep", temp: 14, rain: 65,  icon: "⛅" },
        { month: "Oct", temp:  8, rain: 70,  icon: "⛅" },
        { month: "Nov", temp:  3, rain: 60,  icon: "⛅" },
        { month: "Déc", temp: -2, rain: 50,  icon: "❄️" },
      ],
    },
    {
      id: "rovaniemi",
      name: "Rovaniemi (Laponie)",
      region: "Cercle polaire arctique",
      data: [
        { month: "Jan", temp: -14, rain: 30, icon: "❄️" },
        { month: "Fév", temp: -14, rain: 25, icon: "❄️" },
        { month: "Mar", temp:  -8, rain: 25, icon: "❄️" },
        { month: "Avr", temp:  -1, rain: 25, icon: "❄️" },
        { month: "Mai", temp:   7, rain: 35, icon: "⛅" },
        { month: "Jun", temp:  13, rain: 65, icon: "⛅" },
        { month: "Jul", temp:  17, rain: 75, icon: "☀️" },
        { month: "Aoû", temp:  14, rain: 70, icon: "⛅" },
        { month: "Sep", temp:   8, rain: 50, icon: "⛅" },
        { month: "Oct", temp:   1, rain: 45, icon: "⛅" },
        { month: "Nov", temp:  -6, rain: 35, icon: "❄️" },
        { month: "Déc", temp: -12, rain: 35, icon: "❄️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Helsinki — Design nordique et îles",
      region: "Capitale (sud)",
      description:
        "Helsinki est une capitale compacte et élégante sur la mer Baltique : le quartier de Kallio avec ses bars et galeries branchées, le Design District, la cathédrale luthérienne blanche (place du Sénat), le marché couvert de Vanha Kauppahalli, et les îles accessibles en ferry (Suomenlinna, forteresse UNESCO). Une ville qui respire.",
      wikipedia: "Helsinki",
      tags: ["Design", "Îles", "Architecture", "Café", "Ville", "Gastronomie"],
      mustSee: [
        { name: "Suomenlinna — forteresse maritime UNESCO sur une île", wikipedia: "Suomenlinna" },
        { name: "Sauna Löyly — sauna public avec plongée dans la mer Baltique", wikipedia: "Helsinki" },
        { name: "Musée de Design d'Helsinki — design finnois (Marimekko, Iittala)", wikipedia: "File:Designmuseo 2019.jpg" },
        { name: "Marché de Kauppatori et port — herring fumé et baies fraîches", wikipedia: "File:Market Square in Helsinki, Finland, 2024 May.jpg" },
      ],
    },
    {
      id: 2,
      name: "Rovaniemi — Village du Père Noël",
      region: "Laponie finlandaise",
      description:
        "Rovaniemi est officiellement le domicile du Père Noël selon les Nations Unies — Santa Claus Village se trouve exactement sur le cercle polaire arctique. Mais au-delà du mythe, c'est la capitale de la Laponie : base pour les aurores boréales, safaris en motoneige, raquettes à neige dans la forêt de pins, et expéditions dans les parcs nationaux voisins.",
      wikipedia: "File:Santa Land Rovaniemi Arctic Circle2.jpg",
      tags: ["Père Noël", "Aurores", "Laponie", "Motoneige", "Ski"],
      mustSee: [
        { name: "Santa Claus Village — sur le cercle polaire exactement", wikipedia: "Santa_Claus_Village" },
        { name: "Safari en motoneige dans la forêt de Laponie", wikipedia: "File:Santa Land Rovaniemi Arctic Circle2.jpg" },
        { name: "Aurores boréales depuis la campagne (sept–mars)", wikipedia: "File:Frederic Edwin Church - Aurora Borealis - Google Art Project.jpg" },
        { name: "Traîneau à rennes avec éleveur Sami", wikipedia: "File:MHB + renne du Père Noel à Rovaniemi en Finlande.jpg" },
      ],
    },
    {
      id: 3,
      name: "Lacs de Saimaa — Canoë et nature",
      region: "Carélie du Sud",
      description:
        "Le lac Saimaa est le plus grand lac de Finlande et le quatrième d'Europe : son labyrinthe de 14 000 îles est le paradis du canoë et du kayak. La ville de Savonlinna abrite le château médiéval d'Olavinlinna, théâtre du Festival d'Opéra de Savonlinna (juillet) — unique au monde. Le ringed seal de Saimaa (phoque lacustre) est une espèce endémique gravement menacée.",
      wikipedia: "Saimaa",
      tags: ["Lacs", "Canoë", "Opéra", "Phoques", "Nature", "Randonnée"],
      mustSee: [
        { name: "Canoë sur le Saimaa (itinéraire 3–7 jours, île à île)", wikipedia: "Saimaa" },
        { name: "Château médiéval d'Olavinlinna à Savonlinna", wikipedia: "Olavinlinna" },
        { name: "Festival d'Opéra de Savonlinna (juillet, dans la cour du château)", wikipedia: "Savonlinna_Opera_Festival" },
        { name: "Phoque lacustre de Saimaa (Pusa hispida saimensis)", wikipedia: "Saimaa_ringed_seal" },
      ],
    },
    {
      id: 4,
      name: "Archipel de Turku — Mille îles baltiques",
      region: "Côte sud-ouest",
      description:
        "L'archipel de Turku est l'un des plus grands au monde (20 000 îles et îlots) et la partie habitée la plus au sud de la Finlande. Turku, ancienne capitale du pays, conserve son château médiéval et sa cathédrale du XIIIe siècle. Le ferry saisonnier parcourt l'archipel entre Turku et Åland en passant par des dizaines d'îles habitées.",
      wikipedia: "File:Lempisaari, Naantali, Finland..jpg",
      tags: ["Îles", "Ferry", "Médiéval", "Baltique"],
      mustSee: [
        { name: "Château de Turku (XIIIe s.) — musée historique finnois", wikipedia: "Turku_Castle" },
        { name: "Archipel Trail en ferry (Turku → Åland) — paysage unique", wikipedia: "File:Oasis of the seas leaving STX shipyard, Turku, Finland - pic2.JPG" },
        { name: "Visite d'une ferme d'archipel — fromage local et poisson fumé", wikipedia: "File:Finland 2018-07-07 (44299618252).jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "La Finlande est chère mais légèrement moins que les autres pays nordiques. L'euro facilite les comparaisons. Le lunch (ravintola lunch) à 10–15€ est une institution qui rend le déjeuner abordable. La chaîne de supermarchés K-Market et Alepa offre des prix raisonnables.",
    currency: "EUR",
    exchangeRate: "1€ = 1€ (zone euro)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Auberge de jeunesse / hostel Helsinki", price: "30–60 €", detail: "Dortoir ou chambre privée" },
          { label: "Hôtel 3★ Helsinki", price: "100–180 €", detail: "Bon confort dans la capitale" },
          { label: "Chalet de Laponie (Rovaniemi, base aurores)", price: "100–250 €", detail: "Chalet bois avec poêle ou fenêtres boréales" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Lunch (plat + salade + pain + café) en semaine", price: "10–15 €", detail: "Formule disponible partout en Finlande" },
          { label: "Café + pulla (brioche à la cardamome)", price: "4–7 €", detail: "Rituel finlandais plusieurs fois par jour" },
          { label: "Supermarché (K-Market, Lidl) — courses journée", price: "10–20 €", detail: "Large gamme, qualité bonne" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Métro + bus Helsinki (journée)", price: "9 €", detail: "Réseau HSL, très ponctuel" },
          { label: "Train VR Helsinki–Tampere (2h)", price: "15–35 €", detail: "Réservation recommandée" },
          { label: "Vol Helsinki–Rovaniemi (1h)", price: "50–150 €", detail: "Finnair ou Norwegian — très pratique" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Sauna public (Löyly ou Allas Sea Pool) + baignade", price: "20–35 €", detail: "Expérience finlandaise fondamentale" },
          { label: "Safari aurores boréales (Rovaniemi, 3h minibus)", price: "60–100 €", detail: "Sept–mars, selon conditions" },
          { label: "Location canoë lac Saimaa (journée)", price: "40–70 €", detail: "Itinéraire libre entre les îles" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "100–160 €/j", desc: "Auberge + lunch + supermarché + transports publics", color: "#22c55e" },
      { type: "Confort", daily: "180–300 €/j", desc: "Hôtel 3★ + restaurants + excursions guidées", color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Helsinki (3j) → Saimaa / Savonlinna (3j) → Rovaniemi Laponie (4j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 500 – 2 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Helsinki (Finnair, Air France)", amount: "100–250 €" },
            { label: "Hébergement (10 nuits)", amount: "400–700 €" },
            { label: "Transports (trains, vols intérieurs, ferries)", amount: "300–500 €" },
            { label: "Nourriture (lunch + supermarché)", amount: "350–550 €" },
            { label: "Activités (sauna, aurores, canoë)", amount: "250–450 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "3 000 – 5 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Helsinki", amount: "150–400 €" },
            { label: "Hôtels 3★ (10 nuits)", amount: "1 000–1 800 €" },
            { label: "Vols intérieurs + transports", amount: "400–700 €" },
            { label: "Nourriture & restaurants", amount: "600–900 €" },
            { label: "Safaris Laponie + activités", amount: "600–1 000 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~2h30 (Finnair direct CDG–Helsinki). Aussi SAS via Stockholm. Nombreuses liaisons quotidiennes." },
    { icon: "🪪", label: "Visa",              value: "Aucun visa — espace Schengen. Carte d'identité française suffisante." },
    { icon: "💰", label: "Monnaie",           value: "Euro (€). Carte bancaire acceptée partout — contactless universel. Espèces presque inutiles." },
    { icon: "🗣️", label: "Langue",            value: "Finnois (langue très différente des autres langues européennes). Anglais parfaitement parlé partout. Suédois également officiel." },
    { icon: "🔌", label: "Prise électrique",  value: "Type C/F (européen) — 230V. Aucun adaptateur nécessaire." },
    { icon: "💊", label: "Santé",             value: "Aucune précaution particulière. Moustiques abondants en Laponie en juillet (emporter répulsif). CEAM valide." },
    { icon: "🌞", label: "Soleil de minuit",  value: "Soleil de minuit en Laponie en juin–juillet. Nuit polaire en décembre–janvier à Rovaniemi. Lumière continue en été — masque de sommeil recommandé." },
    { icon: "🧖", label: "Sauna",             value: "Le sauna est la religion nationale finlandaise (3 millions de saunas pour 5,5M d'habitants). La règle de base : nu, en silence, entrer dans l'eau froide après." },
  ],
};
