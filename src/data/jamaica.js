export const JAMAICA = {
  code: "JAM",
  numericId: 388,
  name: { fr: "Jamaïque", en: "Jamaica" },
  emoji: "🇯🇲",
  capital: { fr: "Kingston", en: "Kingston" },
  language: { fr: "Anglais, Créole jamaïcain", en: "English, Jamaican Creole" },
  currency: { fr: "Dollar jamaïcain (JMD)", en: "Jamaican dollar (JMD)" },
  timezone: "UTC-5",
  filter: {
    budgetMin: 60, budgetMid: 130,
    tripMin: 1800, tripMid: 4000,
  },
  description: {
    fr: "La Jamaïque est l'âme des Caraïbes : berceau du reggae et de Bob Marley, des Blue Mountains (le meilleur café du monde), des couchers de soleil légendaires de Negril et des plages animées de Montego Bay. Une île vibrante, colorée et profondément musicale qui définit la culture caribéenne.",
    en: "Jamaica is the soul of the Caribbean: the birthplace of reggae and Bob Marley, home to the Blue Mountains and their world-class coffee, Negril's legendary sunsets and the lively beaches of Montego Bay. It is a vibrant, colourful and deeply musical island that defines Caribbean culture.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Avril", en: "November – April" },
      label: { fr: "Saison sèche", en: "Dry season" },
      color: "#22c55e",
      description: {
        fr: "Meilleure période : températures idéales (26–28 °C), pas de cyclones, mer calme, festivals musicaux (Reggae Sumfest en juillet mais après la saison sèche).",
        en: "The best time to go: ideal temperatures (26–28°C), no hurricanes, calm seas and a relaxed island rhythm. Major music events such as Reggae Sumfest happen later in July, outside the dry season.",
      },
      icon: "🎵",
    },
    {
      months: { fr: "Juillet – Août", en: "July – August" },
      label: { fr: "Été chaud", en: "Hot summer" },
      color: "#ef4444",
      description: {
        fr: "Chaleur (30–32 °C) et humidité, risque de cyclones. Reggae Sumfest en juillet — ambiance unique pour les fans de musique.",
        en: "Hot and humid (30–32°C), with a hurricane risk. Reggae Sumfest in July brings a one-of-a-kind atmosphere for music lovers.",
      },
      icon: "🌡️",
    },
  ],

  weatherCities: [
    {
      id: "montego_bay",
      name: "Montego Bay",
      region: { fr: "Nord-Ouest", en: "North-west" },
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
      region: { fr: "Sud-Est", en: "South-east" },
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
      name: { fr: "Montego Bay & Doctor's Cave", en: "Montego Bay & Doctor's Cave" },
      region: { fr: "Nord-Ouest", en: "North-west" },
      description: {
        fr: "Montego Bay est la capitale touristique de la Jamaïque : Doctor's Cave Beach, plage historique aux eaux claires, les chutes de Dunn's River à Ocho Ríos (1h30 de route), et Rose Hall Great House avec sa légende de la « Sorcière Blanche ». Hub de tous les circuits île.",
        en: "Montego Bay is Jamaica's tourism capital: Doctor's Cave Beach with its clear historic waters, Dunn's River Falls in Ocho Ríos (about 1h30 away by road), and Rose Hall Great House with its White Witch legend. It is also the island's main hub for excursions.",
      },
      wikipedia: "Montego_Bay",
      tags: ["Plage", "Resort", "Excursions", "Point de départ"],
      mustSee: [
        { name: { fr: "Doctor's Cave Beach — eaux cristallines historiques", en: "Doctor's Cave Beach — historic crystal-clear waters" }, wikipedia: "File:Doctors-Cave-Beach.jpg" },
        { name: { fr: "Chutes de Dunn's River (Ocho Ríos)", en: "Dunn's River Falls (Ocho Ríos)" }, wikipedia: "Dunn's_River_Falls" },
        { name: { fr: "Rose Hall Great House — légende de la Sorcière Blanche", en: "Rose Hall Great House — the White Witch legend" }, wikipedia: "File:Rose Hall Jamaica Photo Don Ramey Logan.jpg" },
        { name: { fr: "Snorkel à Coral Gardens (Montego Bay)", en: "Snorkelling at Coral Gardens (Montego Bay)" }, wikipedia: "File:Montego bay-1001.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Blue Mountains", en: "Blue Mountains" },
      region: { fr: "Est", en: "East" },
      description: {
        fr: "Les Blue Mountains, parc national classé UNESCO, culminent à 2 256 m et produisent le café Blue Mountain, l'un des plus chers et réputés du monde. Le trek jusqu'au Blue Mountain Peak (départ 2h du matin pour le lever de soleil) est une expérience inoubliable au-dessus des nuages.",
        en: "The Blue Mountains, a UNESCO-listed national park, rise to 2,256 metres and produce Blue Mountain coffee, one of the world's most prized and expensive coffees. The trek to Blue Mountain Peak, often starting around 2 a.m. for sunrise, is an unforgettable walk above the clouds.",
      },
      wikipedia: "File:JM Blue Mountain Peak 1010 (12) (17257070915).jpg",
      tags: ["UNESCO", "Randonnée", "Café", "Nature"],
      mustSee: [
        { name: { fr: "Blue Mountain Peak (2 256 m) — lever de soleil", en: "Blue Mountain Peak (2,256 m) — sunrise" }, wikipedia: "Blue_Mountain_Peak" },
        { name: { fr: "Plantation de café — torréfaction artisanale", en: "Coffee plantation — small-batch roasting" }, wikipedia: "File:Fog_hangs_over_the_village_of_Section_in_the_Blue_Mountains_of_Portland_Parish,_Jamaica.jpg" },
        { name: { fr: "Forêt nuageuse — oiseaux endémiques", en: "Cloud forest — endemic birds" }, wikipedia: "File:JM Blue Mountain Peak 1010 (12) (17257070915).jpg" },
        { name: { fr: "Mavis Bank — village café authentique", en: "Mavis Bank — an authentic coffee village" }, wikipedia: "File:Mavis bank.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Negril", en: "Negril" },
      region: { fr: "Ouest", en: "West" },
      description: {
        fr: "Negril est la capitale des couchers de soleil de la Jamaïque : Seven Mile Beach (l'une des plus longues des Caraïbes), Rick's Café où les locaux plongent depuis les falaises de corail, et la récente réputation de Negril comme haut lieu du reggae et de la vie nocturne décontractée.",
        en: "Negril is Jamaica's sunset capital: Seven Mile Beach, one of the longest beaches in the Caribbean, Rick's Café where locals dive from coral cliffs, and a newfound reputation as a laid-back reggae and nightlife hotspot.",
      },
      wikipedia: "Negril",
      tags: ["Plage", "Coucher de soleil", "Falaises", "Vie nocturne"],
      mustSee: [
        { name: { fr: "Seven Mile Beach — 11 km de sable doré", en: "Seven Mile Beach — 11 km of golden sand" }, wikipedia: "File:Jamaica, Negril - Flickr - VV Nincic.jpg" },
        { name: { fr: "Plongée récifs coralliens (Throne Room Cave)", en: "Coral reef diving (Throne Room Cave)" }, wikipedia: "File:Yellow stingray (Urobatis jamaicensis).jpg" },
        { name: { fr: "Coucher de soleil légendaire de Negril", en: "Negril's legendary sunset" }, wikipedia: "File:Jamaica - Negril - 036.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Kingston — Berceau du Reggae", en: "Kingston — Birthplace of Reggae" },
      region: { fr: "Est", en: "East" },
      description: {
        fr: "Kingston est la capitale culturelle de la Jamaïque : le Bob Marley Museum (ancienne maison du chanteur), le quartier Trench Town où est né le reggae, la National Gallery of Jamaica et Devon House avec ses glaces artisanales légendaires composent un circuit culturel unique.",
        en: "Kingston is Jamaica's cultural capital: the Bob Marley Museum in the singer's former home, Trench Town where reggae was born, the National Gallery of Jamaica and Devon House with its legendary ice cream make for a uniquely rich cultural route.",
      },
      wikipedia: "Kingston,_Jamaica",
      tags: ["Culture", "Reggae", "Musée", "Art"],
      mustSee: [
        { name: { fr: "Bob Marley Museum (9 Hope Road)", en: "Bob Marley Museum (9 Hope Road)" }, wikipedia: "Bob_Marley_Museum" },
        { name: { fr: "Trench Town — berceau du reggae (visite guidée)", en: "Trench Town — birthplace of reggae (guided tour)" }, wikipedia: "File:Shop in Trench Town (4547356620).jpg" },
        { name: { fr: "National Gallery of Jamaica (art caribéen)", en: "National Gallery of Jamaica (Caribbean art)" }, wikipedia: "National_Gallery_of_Jamaica" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Jamaïque est modérément chère dans les zones touristiques. Les resorts all-inclusive représentent une bonne valeur. En dehors des circuits touristiques, la vie locale est très accessible. Les taxis non officiels sont à négocier.",
      en: "Jamaica is moderately expensive in the main tourist areas. All-inclusive resorts can be good value, while local life outside the tourist circuit is much more affordable. Unofficial taxis should be negotiated before departure.",
    },
    currency: "JMD",
    exchangeRate: "1€ ≈ 175 JMD",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Guesthouse / B&B (Kingston ou Negril)", en: "Guesthouse / B&B (Kingston or Negril)" }, price: "30–60 €", detail: { fr: "Chambres avec ventilateur ou clim", en: "Rooms with fan or air conditioning" } },
          { label: { fr: "Hôtel 3★ Montego Bay", en: "3-star hotel in Montego Bay" }, price: "80–150 €", detail: { fr: "Piscine, plage à proximité", en: "Pool, beach nearby" } },
          { label: { fr: "Resort all-inclusive Negril", en: "All-inclusive resort in Negril" }, price: "200–400 €/pers", detail: { fr: "Tout inclus, front de mer", en: "All inclusive, beachfront" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Jerk chicken (cuisine de rue)", en: "Jerk chicken (street food)" }, price: "3–6 €", detail: { fr: "Incontournable jamaïcain", en: "A Jamaican essential" } },
          { label: { fr: "Ackee & saltfish (petit-déjeuner national)", en: "Ackee & saltfish (national breakfast)" }, price: "5–10 €", detail: { fr: "Plat national officiel", en: "The official national dish" } },
          { label: { fr: "Restaurant touristique (Blue Mountains café)", en: "Tourist restaurant (Blue Mountains café)" }, price: "15–30 €", detail: { fr: "Fruits tropicaux, rum cake", en: "Tropical fruit, rum cake" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Minibus public (route nord)", en: "Public minibus (north coast route)" }, price: "3–8 €", detail: { fr: "Montego Bay–Negril (2h)", en: "Montego Bay–Negril (2h)" } },
          { label: { fr: "Taxi touristique (négocié)", en: "Tourist taxi (negotiated)" }, price: "15–30 €", detail: { fr: "Trajet entre villes", en: "Intercity ride" } },
          { label: { fr: "Location voiture (indispensable Blue Mountains)", en: "Car rental (useful for the Blue Mountains)" }, price: "50–80 €/j", detail: { fr: "Prudence — conduite à gauche", en: "Drive carefully — traffic keeps left" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Bob Marley Museum (Kingston)", en: "Bob Marley Museum (Kingston)" }, price: "20–25 €", detail: { fr: "Visite guidée 1h30", en: "1h30 guided tour" } },
          { label: { fr: "Chutes Dunn's River (escalade)", en: "Dunn's River Falls (climb)" }, price: "20–25 €", detail: { fr: "Entrée + guide", en: "Entry + guide" } },
          { label: { fr: "Trek Blue Mountain Peak (guide requis)", en: "Blue Mountain Peak trek (guide required)" }, price: "40–70 €", detail: { fr: "Départ 2h du matin", en: "Departure around 2 a.m." } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "60–90 €/j", desc: { fr: "Guesthouse + jerk chicken + minibus", en: "Guesthouse + jerk chicken + minibus" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "130–200 €/j", desc: { fr: "Hôtel 3★ + restos + excursions guidées", en: "3-star hotel + restaurants + guided excursions" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury" }, daily: "400 €/j+", desc: { fr: "Resort all-inclusive 5★ + guide privé + spa", en: "5-star all-inclusive resort + private guide + spa" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days" },
      route: {
        fr: "Montego Bay (3j) → Negril (2j) → Blue Mountains (2j) → Kingston (2j) → Ocho Ríos (1j)",
        en: "Montego Bay (3d) → Negril (2d) → Blue Mountains (2d) → Kingston (2d) → Ocho Ríos (1d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 800 – 2 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Jamaïque", en: "Return flight Paris–Jamaica" }, amount: "500–800 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "400–650 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "300–450 €" },
            { label: { fr: "Transports locaux", en: "Local transport" }, amount: "200–350 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency" }, amount: "200–350 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "4 000 – 5 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Jamaïque", en: "Return flight Paris–Jamaica" }, amount: "600–1 000 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "1 200–2 000 €" },
            { label: { fr: "Nourriture & rhum", en: "Food & rum" }, amount: "600–900 €" },
            { label: { fr: "Location voiture + excursions", en: "Car rental + excursions" }, amount: "700–1 000 €" },
            { label: { fr: "Activités & extras", en: "Activities & extras" }, amount: "500–800 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury" },
          color: "#f59e0b",
          total: "9 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Jamaïque (Business)", en: "Return flight Paris–Jamaica (business)" }, amount: "2 500–4 000 €" },
            { label: { fr: "Resort all-inclusive 5★ (10 nuits)", en: "5-star all-inclusive resort (10 nights)" }, amount: "3 500–6 000 €" },
            { label: { fr: "Gastronomie & spa", en: "Fine dining & spa" }, amount: "800–1 500 €" },
            { label: { fr: "Circuit privé + guide", en: "Private tour + guide" }, amount: "500–800 €" },
            { label: { fr: "Extras", en: "Extras" }, amount: "300 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~10h avec escale (British Airways via Londres, Air France via Miami)", en: "~10h with a layover (British Airways via London, Air France via Miami)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Sans visa 90 jours (Français)", en: "No visa required for French citizens for stays up to 90 days" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Dollar jamaïcain (1€ ≈ 175 JMD) — USD acceptés", en: "Jamaican dollar (1€ ≈ 175 JMD) — USD widely accepted" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Anglais (officiel) + Créole jamaïcain (patois)", en: "English (official) + Jamaican Creole (patois)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type A/B – 110 V (comme USA)", en: "Type A/B – 110V (same as the US)" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "Bonne couverture nationale (Digicel, Flow)", en: "Good national coverage (Digicel, Flow)" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Non potable en général — eau en bouteille recommandée", en: "Generally not drinkable — bottled water recommended" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Pas d'antipaludéen requis. Dengue possible en saison humide.", en: "No malaria prophylaxis required. Dengue is possible during the wet season." } },
  ],
};
