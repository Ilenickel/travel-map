export const JAMAICA = {
  code: "JAM",
  numericId: 388,
  name: "Jamaïque",
  emoji: "🇯🇲",
  capital: "Kingston",
  language: "Anglais, Créole jamaïcain",
  currency: "Dollar jamaïcain (JMD)",
  timezone: "UTC-5",
  filter: {
    budgetMin: 60, budgetMid: 130,
    tripMin: 1800, tripMid: 4000,
  },
  description:
    "La Jamaïque est l'âme des Caraïbes : berceau du reggae et de Bob Marley, des Blue Mountains (le meilleur café du monde), des couchers de soleil légendaires de Negril et des plages animées de Montego Bay. Une île vibrante, colorée et profondément musicale qui définit la culture caribéenne.",

  bestPeriods: [
    {
      months: "Novembre – Avril",
      label: "Saison sèche",
      color: "#22c55e",
      description:
        "Meilleure période : températures idéales (26–28°C), pas de cyclones, mer calme, festivals musicaux (Reggae Sumfest en juillet mais après la saison sèche).",
      icon: "🎵",
    },
    {
      months: "Juillet – Août",
      label: "Été chaud",
      color: "#ef4444",
      description:
        "Chaleur (30–32°C) et humidité, risque de cyclones. Reggae Sumfest en juillet — ambiance unique pour les fans de musique.",
      icon: "🌡️",
    },
  ],

  weatherCities: [
    {
      id: "montego_bay",
      name: "Montego Bay",
      region: "Nord-Ouest",
      data: [
        { month: "Jan", temp: 26, rain: 15,  icon: "☀️" },
        { month: "Fév", temp: 26, rain: 10,  icon: "☀️" },
        { month: "Mar", temp: 27, rain: 15,  icon: "⛅" },
        { month: "Avr", temp: 28, rain: 30,  icon: "⛅" },
        { month: "Mai", temp: 29, rain: 80,  icon: "⛅" },
        { month: "Jun", temp: 30, rain: 100, icon: "🌧️" },
        { month: "Jul", temp: 30, rain: 80,  icon: "⛅" },
        { month: "Aoû", temp: 30, rain: 90,  icon: "⛅" },
        { month: "Sep", temp: 30, rain: 100, icon: "🌧️" },
        { month: "Oct", temp: 29, rain: 130, icon: "🌧️" },
        { month: "Nov", temp: 28, rain: 50,  icon: "⛅" },
        { month: "Déc", temp: 27, rain: 15,  icon: "☀️" },
      ],
    },
    {
      id: "kingston",
      name: "Kingston",
      region: "Sud-Est",
      data: [
        { month: "Jan", temp: 25, rain: 20,  icon: "☀️" },
        { month: "Fév", temp: 25, rain: 15,  icon: "☀️" },
        { month: "Mar", temp: 26, rain: 20,  icon: "☀️" },
        { month: "Avr", temp: 27, rain: 35,  icon: "⛅" },
        { month: "Mai", temp: 28, rain: 90,  icon: "⛅" },
        { month: "Jun", temp: 29, rain: 80,  icon: "⛅" },
        { month: "Jul", temp: 30, rain: 40,  icon: "⛅" },
        { month: "Aoû", temp: 30, rain: 80,  icon: "⛅" },
        { month: "Sep", temp: 30, rain: 100, icon: "🌧️" },
        { month: "Oct", temp: 29, rain: 120, icon: "🌧️" },
        { month: "Nov", temp: 27, rain: 50,  icon: "⛅" },
        { month: "Déc", temp: 26, rain: 20,  icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Montego Bay & Doctor's Cave",
      region: "Nord-Ouest",
      description:
        "Montego Bay est la capitale touristique de la Jamaïque : Doctor's Cave Beach, plage historique aux eaux claires, les chutes de Dunn's River à Ocho Ríos (1h30 de route), et Rose Hall Great House avec sa légende de la «Sorcière Blanche». Hub de tous les circuits île.",
      wikipedia: "Montego_Bay",
      tags: ["Plage", "Resort", "Excursions", "Hub"],
      mustSee: [
        { name: "Doctor's Cave Beach — eaux cristallines historiques", wikipedia: "File:Doctors-Cave-Beach.jpg" },
        { name: "Chutes de Dunn's River (Ocho Ríos)", wikipedia: "Dunn's_River_Falls" },
        { name: "Rose Hall Great House — légende de la Sorcière Blanche", wikipedia: "File:Rose Hall Jamaica Photo Don Ramey Logan.jpg" },
        { name: "Snorkel à Coral Gardens (Montego Bay)", wikipedia: "File:Montego bay-1001.jpg" },
      ],
    },
    {
      id: 2,
      name: "Blue Mountains",
      region: "Est",
      description:
        "Les Blue Mountains, parc national classé UNESCO, culminent à 2 256 m et produisent le café Blue Mountain, l'un des plus chers et réputés du monde. Le trek jusqu'au Blue Mountain Peak (départ 2h du matin pour le lever de soleil) est une expérience inoubliable au-dessus des nuages.",
      wikipedia: "File:JM Blue Mountain Peak 1010 (12) (17257070915).jpg",
      tags: ["UNESCO", "Randonnée", "Café", "Nature"],
      mustSee: [
        { name: "Blue Mountain Peak (2 256 m) — lever de soleil", wikipedia: "Blue_Mountain_Peak" },
        { name: "Plantation de café — torréfaction artisanale", wikipedia: "File:Fog_hangs_over_the_village_of_Section_in_the_Blue_Mountains_of_Portland_Parish,_Jamaica.jpg" },
        { name: "Forêt nuageuse — oiseaux endémiques", wikipedia: "File:JM Blue Mountain Peak 1010 (12) (17257070915).jpg" },
        { name: "Mavis Bank — village café authentique", wikipedia: "File:Mavis bank.jpg" },
      ],
    },
    {
      id: 3,
      name: "Negril",
      region: "Ouest",
      description:
        "Negril est la capitale des couchers de soleil de la Jamaïque : Seven Mile Beach (l'une des plus longues des Caraïbes), Rick's Café où les locaux plongent depuis les falaises de corail, et la récente réputation de Negril comme haut lieu du reggae et de la vie nocturne décontractée.",
      wikipedia: "Negril",
      tags: ["Plage", "Coucher de soleil", "Falaises", "Vie nocturne"],
      mustSee: [
        { name: "Seven Mile Beach — 11 km de sable doré", wikipedia: "File:Jamaica, Negril - Flickr - VV Nincic.jpg" },
        { name: "Plongée récifs coralliens (Throne Room Cave)", wikipedia: "File:Yellow stingray (Urobatis jamaicensis).jpg" },
        { name: "Coucher de soleil légendaire de Negril", wikipedia: "File:Jamaica - Negril - 036.jpg" },
      ],
    },
    {
      id: 4,
      name: "Kingston — Berceau du Reggae",
      region: "Est",
      description:
        "Kingston est la capitale culturelle de la Jamaïque : le Bob Marley Museum (ancienne maison du chanteur), le quartier Trench Town où est né le reggae, la National Gallery of Jamaica et Devon House avec ses glaces artisanales légendaires composent un circuit culturel unique.",
      wikipedia: "Kingston,_Jamaica",
      tags: ["Culture", "Reggae", "Musée", "Art"],
      mustSee: [
        { name: "Bob Marley Museum (9 Hope Road)", wikipedia: "Bob_Marley_Museum" },
        { name: "Trench Town — berceau du reggae (visite guidée)", wikipedia: "File:Shop in Trench Town (4547356620).jpg" },
        { name: "National Gallery of Jamaica (art caribéen)", wikipedia: "National_Gallery_of_Jamaica" },
      ],
    },
  ],

  costOfLiving: {
    intro: "La Jamaïque est moderément chère dans les zones touristiques. Les resorts all-inclusive représentent une bonne valeur. En dehors des circuits touristiques, la vie locale est très accessible. Les taxis non officiels sont à négocier.",
    currency: "JMD",
    exchangeRate: "1€ ≈ 175 JMD",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Guesthouse / B&B (Kingston ou Negril)", price: "30–60 €", detail: "Chambres avec ventilateur ou clim" },
          { label: "Hôtel 3★ Montego Bay", price: "80–150 €", detail: "Piscine, plage à proximité" },
          { label: "Resort all-inclusive Negril", price: "200–400 €/pers", detail: "Tout inclus, front de mer" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Jerk chicken (cuisine de rue)", price: "3–6 €", detail: "Incontournable jamaïcain" },
          { label: "Ackee & saltfish (petit-déjeuner national)", price: "5–10 €", detail: "Plat national officiel" },
          { label: "Restaurant touristique (Blue Mountains café)", price: "15–30 €", detail: "Fruits tropicaux, rum cake" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Minibus public (route nord)", price: "3–8 €", detail: "Montego Bay–Negril (2h)" },
          { label: "Taxi touristique (négocié)", price: "15–30 €", detail: "Trajet entre villes" },
          { label: "Location voiture (indispensable Blue Mountains)", price: "50–80 €/j", detail: "Prudence — conduite à gauche" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Bob Marley Museum (Kingston)", price: "20–25 €", detail: "Visite guidée 1h30" },
          { label: "Chutes Dunn's River (escalade)", price: "20–25 €", detail: "Entrée + guide" },
          { label: "Trek Blue Mountain Peak (guide requis)", price: "40–70 €", detail: "Départ 2h du matin" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "60–90 €/j", desc: "Guesthouse + jerk chicken + minibus", color: "#22c55e" },
      { type: "Confort", daily: "130–200 €/j", desc: "Hôtel 3★ + restos + excursions guidées", color: "#3b82f6" },
      { type: "Luxe", daily: "400 €+/j", desc: "Resort all-inclusive 5★ + guide privé + spa", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Montego Bay (3j) → Negril (2j) → Blue Mountains (2j) → Kingston (2j) → Ocho Ríos (1j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 800 – 2 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Jamaïque", amount: "500–800 €" },
            { label: "Hébergement (10 nuits)", amount: "400–650 €" },
            { label: "Nourriture", amount: "300–450 €" },
            { label: "Transports locaux", amount: "200–350 €" },
            { label: "Activités & imprévus", amount: "200–350 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "4 000 – 5 800 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Jamaïque", amount: "600–1 000 €" },
            { label: "Hébergement (10 nuits)", amount: "1 200–2 000 €" },
            { label: "Nourriture & rhum", amount: "600–900 €" },
            { label: "Location voiture + excursions", amount: "700–1 000 €" },
            { label: "Activités & extras", amount: "500–800 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "9 000 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Jamaïque (Business)", amount: "2 500–4 000 €" },
            { label: "Resort all-inclusive 5★ (10 nuits)", amount: "3 500–6 000 €" },
            { label: "Gastronomie & spa", amount: "800–1 500 €" },
            { label: "Circuit privé + guide", amount: "500–800 €" },
            { label: "Extras", amount: "300 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~10h avec escale (British Airways via Londres, Air France via Miami)" },
    { icon: "🪪", label: "Visa",              value: "Sans visa 90 jours (Français)" },
    { icon: "💰", label: "Monnaie",           value: "Dollar jamaïcain (1€ ≈ 175 JMD) — USD acceptés" },
    { icon: "🗣️", label: "Langue",            value: "Anglais (officiel) + Créole jamaïcain (patois)" },
    { icon: "🔌", label: "Prise électrique",  value: "Type A/B – 110 V (comme USA)" },
    { icon: "📱", label: "Réseau",            value: "Bonne couverture nationale (Digicel, Flow)" },
    { icon: "🚰", label: "Eau du robinet",    value: "Non potable en général — eau en bouteille recommandée" },
    { icon: "💊", label: "Santé",             value: "Pas d'antipaludéen requis. Dengue possible en saison humide." },
  ],
};
