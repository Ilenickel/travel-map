export const DENMARK = {
  code: "DNK",
  numericId: 208,
  name: "Danemark",
  emoji: "🇩🇰",
  capital: "Copenhague",
  language: "Danois",
  currency: "Couronne danoise (DKK)",
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 110, budgetMid: 190,
    tripMin: 1500, tripMid: 3000,
  },
  description:
    "Le Danemark est le pays du 'hygge' (bien-être douillet), du design scandinave, de Noma (plusieurs fois meilleur restaurant du monde), et de Hamlet (château d'Elseneur). Copenhague est la capitale vélo d'Europe, avec ses canaux de Nyhavn, ses marchés de street food de Reffen, ses musées de design et le parc de Tivoli. Le Danemark inclut aussi les Îles Féroé et le Groenland.",

  bestPeriods: [
    {
      months: "Juin – Août",
      label: "Été danois",
      color: "#22c55e",
      description:
        "Meilleure période : 18–23°C à Copenhague, longues journées lumineuses, festivals (Roskilde Festival), terrasses, marchés et archipels. L'été danois est court mais intense.",
      icon: "☀️",
    },
    {
      months: "Décembre",
      label: "Noël scandinave",
      color: "#f59e0b",
      description:
        "Marchés de Noël parmi les plus beaux d'Europe, Tivoli illuminé, hygge dans les cafés, vin chaud (gløgg) et æbleskiver. Températures froides (0–5°C) mais atmosphère unique.",
      icon: "🎄",
    },
  ],

  weatherCities: [
    {
      id: "copenhagen",
      name: "Copenhague",
      region: "Capitale (île de Sjælland)",
      data: [
        { month: "Jan", temp:  2, rain: 55,  icon: "❄️" },
        { month: "Fév", temp:  2, rain: 40,  icon: "❄️" },
        { month: "Mar", temp:  5, rain: 45,  icon: "⛅" },
        { month: "Avr", temp:  9, rain: 40,  icon: "⛅" },
        { month: "Mai", temp: 14, rain: 45,  icon: "⛅" },
        { month: "Jun", temp: 17, rain: 55,  icon: "☀️" },
        { month: "Jul", temp: 20, rain: 65,  icon: "☀️" },
        { month: "Aoû", temp: 20, rain: 65,  icon: "☀️" },
        { month: "Sep", temp: 15, rain: 65,  icon: "⛅" },
        { month: "Oct", temp: 10, rain: 65,  icon: "⛅" },
        { month: "Nov", temp:  6, rain: 65,  icon: "⛅" },
        { month: "Déc", temp:  3, rain: 55,  icon: "❄️" },
      ],
    },
    {
      id: "aarhus",
      name: "Aarhus",
      region: "Jutland (péninsule principale)",
      data: [
        { month: "Jan", temp:  1, rain: 55,  icon: "❄️" },
        { month: "Fév", temp:  1, rain: 45,  icon: "❄️" },
        { month: "Mar", temp:  4, rain: 40,  icon: "⛅" },
        { month: "Avr", temp:  8, rain: 40,  icon: "⛅" },
        { month: "Mai", temp: 13, rain: 50,  icon: "⛅" },
        { month: "Jun", temp: 16, rain: 55,  icon: "☀️" },
        { month: "Jul", temp: 19, rain: 70,  icon: "☀️" },
        { month: "Aoû", temp: 19, rain: 75,  icon: "☀️" },
        { month: "Sep", temp: 15, rain: 70,  icon: "⛅" },
        { month: "Oct", temp: 10, rain: 70,  icon: "⛅" },
        { month: "Nov", temp:  5, rain: 65,  icon: "⛅" },
        { month: "Déc", temp:  2, rain: 60,  icon: "❄️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Copenhague — Vélos et canaux",
      region: "Sjælland",
      description:
        "Copenhague est régulièrement élue ville la plus cyclable du monde (400km de pistes cyclables). Nyhavn, ses maisons colorées du XVIIe siècle au bord de l'eau, est l'image de la ville. La Petite Sirène (sculpture d'Andersen), les ruelles de Christiania (commune libre), et la scène gastronomique (Noma, Geranium, Kadeau) font de Copenhague une capitale européenne de premier rang.",
      wikipedia: "Copenhagen",
      tags: ["Vélo", "Design", "Gastronomie", "Canaux", "Ville", "Architecture"],
      mustSee: [
        { name: "Nyhavn — maisons colorées et bateaux historiques", wikipedia: "Nyhavn" },
        { name: "Tivoli Gardens — parc d'attractions depuis 1843", wikipedia: "File:Tivoli Lake Parterrehaven.jpg" },
        { name: "Musée National et Statens Museum for Kunst", wikipedia: "File:Statens Museum for Kunst, København.jpg" },
        { name: "Christiania — commune libre et culture alternative", wikipedia: "Freetown_Christiania" },
      ],
    },
    {
      id: 2,
      name: "Château de Kronborg — Hamlet's Castle",
      region: "Helsingør (Elseneur)",
      description:
        "Le château de Kronborg à Helsingør (à 45min de train de Copenhague) est classé UNESCO : c'est le château d'Elseneur de la pièce de Shakespeare 'Hamlet'. Construit en 1574, il contrôle le détroit de l'Øresund entre le Danemark et la Suède. Ses donjons abritent la statue du Viking légendaire Holger Danske, endormi jusqu'au jour où le Danemark aura besoin de lui.",
      wikipedia: "Kronborg",
      tags: ["Château", "Shakespeare", "UNESCO", "Histoire"],
      mustSee: [
        { name: "Château de Kronborg — décor de Hamlet (UNESCO)", wikipedia: "Kronborg" },
        { name: "Donjons avec la statue de Holger Danske", wikipedia: "File:Holger Danske, Kronborg 2023.jpg" },
        { name: "Vue sur l'Øresund et la Suède à 4km", wikipedia: "Helsingør" },
        { name: "Musée maritime danois (M/S Museet for Søfart)", wikipedia: "File:Maritime Museum of Denmark April 2026 01.jpg" },
      ],
    },
    {
      id: 3,
      name: "Legoland et Jutland — Dunes et patrimoine",
      region: "Jutland (ouest)",
      description:
        "Billund abrite le Legoland original (créé en 1968) — le plus grand parc Lego du monde. Mais le Jutland réserve bien d'autres trésors : les dunes de Råbjerg Mile (la dune migratrice), les plages sauvages de la mer du Nord, et les tumulus vikings de Jelling (runes royales du Xe siècle, UNESCO) — le berceau du christianisme danois.",
      wikipedia: "File:Jutland Street - geograph.org.uk - 7939998.jpg",
      tags: ["Legoland", "Dunes", "UNESCO", "Plage", "Nature"],
      mustSee: [
        { name: "Legoland Billund — le parc Lego original (depuis 1968)", wikipedia: "File:LegoBillundTowerView.jpg" },
        { name: "Tumulus de Jelling — runes royales du Xe siècle (UNESCO)", wikipedia: "File:Jelling, cemetery July 2015.jpg" },
        { name: "Dune migratrice de Råbjerg Mile — désert de sable en Scandinavie", wikipedia: "Råbjerg_Mile" },
        { name: "Plages sauvages de Skagen — pointe nord du Jutland", wikipedia: "Skagen" },
      ],
    },
    {
      id: 4,
      name: "Bornholm — Île fumée de harengs",
      region: "Mer Baltique",
      description:
        "Bornholm est une île danoise en mer Baltique (plus proche de la Suède et de la Pologne que du Danemark) : ses roundkirker (églises-forteresses rondes du XIIe siècle, uniques en Europe), ses fumeries de harengs de Hasle et Nexø, ses plages de sable blanc, et ses rochers de granite font d'elle la perle cachée de Scandinavie.",
      wikipedia: "Bornholm",
      tags: ["Île", "Fumoirs", "Médiéval", "Baltique", "Nature", "Plage"],
      mustSee: [
        { name: "Roundkirker (églises rondes forteresses) — uniques en Europe", wikipedia: "File:Nylars Round Church on Bornholm.jpg" },
        { name: "Rocher de Hammershus — ruines de château le plus grand de Scandinavie", wikipedia: "File:Bornholm Hammershus 01.jpg" },
        { name: "Plages de sable blanc de Dueodde (côte sud)", wikipedia: "File:Stormy Baltic sea on Bornholm.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "Le Danemark est parmi les pays les plus chers d'Europe. Les taxes (TVA à 25%) sont élevées mais incluses dans les prix affichés. Copenhague rivalise avec Zürich et Oslo en termes de coût de la vie. Le vélo permet d'économiser sur les transports.",
    currency: "DKK",
    exchangeRate: "1€ ≈ 7,45 DKK",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Auberge de jeunesse / hostel Copenhague", price: "35–70 €", detail: "Dortoir ou chambre privée" },
          { label: "Hôtel 3★ Copenhague", price: "130–220 €", detail: "Confort standard en capitale" },
          { label: "Camping Danemark (réseau officiel)", price: "15–30 €", detail: "Qualité excellente, emplacements ombragés" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Smørrebrød (tartines ouvertes danoises) dans un café", price: "12–20 €", detail: "Déjeuner typique danois" },
          { label: "Street food marché de Torvehallerne ou Reffen", price: "10–18 €", detail: "Halles + conteneurs sur la rive" },
          { label: "Supermarché Netto ou Aldi — courses journée", price: "15–25 €", detail: "Option économique essentielle" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Métro + bus Copenhague (ticket 24h, zones 1–4)", price: "14 €", detail: "Réseau excellent et ponctuel" },
          { label: "Train Copenhague–Aarhus (3h, DSB)", price: "25–55 €", detail: "Réservation recommandée en été" },
          { label: "Location vélo Copenhague (journée)", price: "15–25 €", detail: "Le meilleur moyen de découvrir la ville" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Tivoli Gardens (entrée)", price: "18 €", detail: "Manèges en supplément (pass disponible)" },
          { label: "Musée national danois (entrée gratuite)", price: "0 €", detail: "Collections vikings et médiévales" },
          { label: "Tour en kayak des canaux de Copenhague", price: "30–50 €", detail: "Guidé ou location libre (2h)" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "110–170 €/j", desc: "Hostel + smørrebrød + supermarché + vélo", color: "#22c55e" },
      { type: "Confort", daily: "190–320 €/j", desc: "Hôtel 3★ + restaurants + musées + excursions", color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: "8 jours",
      route: "Copenhague (4j) → Helsingør / Kronborg (1j) → Bornholm (2j) → retour (1j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 500 – 2 300 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Copenhague (SAS, Air France, EasyJet)", amount: "80–200 €" },
            { label: "Hébergement (8 nuits)", amount: "400–650 €" },
            { label: "Transports (train + ferry + vélo)", amount: "200–350 €" },
            { label: "Nourriture (smørrebrød + supermarché)", amount: "350–500 €" },
            { label: "Activités & entrées", amount: "200–350 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "3 000 – 5 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Copenhague", amount: "100–300 €" },
            { label: "Hôtels 3★ (8 nuits)", amount: "1 000–1 800 €" },
            { label: "Transports + ferry Bornholm", amount: "300–500 €" },
            { label: "Nourriture & restaurants (gastronomie)", amount: "700–1 200 €" },
            { label: "Activités, musées, tours", amount: "400–700 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~2h (SAS, Air France, EasyJet direct CDG–Copenhague CPH). Nombreux vols quotidiens." },
    { icon: "🪪", label: "Visa",              value: "Aucun visa — espace Schengen. Carte d'identité française suffisante." },
    { icon: "💰", label: "Monnaie",           value: "Couronne danoise (DKK). Carte bancaire acceptée partout. Euros parfois acceptés (change défavorable). Espèces quasi inutiles." },
    { icon: "🗣️", label: "Langue",            value: "Danois. Anglais quasi-universel — tous les Danois parlent un anglais excellent." },
    { icon: "🔌", label: "Prise électrique",  value: "Type C/F/K (européen + type K danois à 3 broches rondes) — 230V. La plupart des prises françaises fonctionnent directement." },
    { icon: "💊", label: "Santé",             value: "Aucune précaution. Carte européenne d'assurance maladie (CEAM) valide. Système de santé parmi les meilleurs du monde." },
    { icon: "🚲", label: "Vélo",              value: "Copenhague est la capitale mondiale du vélo : 380km de pistes, priorité absolue aux cyclistes. Louer un vélo est le meilleur moyen de visiter." },
    { icon: "😊", label: "Hygge",             value: "Le hygge désigne l'art danois du bien-être douillet : bougies, plaid, café chaud et bonne compagnie. C'est une philosophie de vie, surtout en hiver." },
  ],
};
