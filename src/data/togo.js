export const TOGO = {
  code: "TGO",
  numericId: 768,
  name: { fr: "Togo", en: "Togo" },
  emoji: "🇹🇬",
  capital: { fr: "Lomé", en: "Lomé" },
  language: { fr: "Français, Ewe, Kabiyé", en: "French, Ewe, Kabiye" },
  currency: { fr: "Franc CFA (XOF)", en: "CFA Franc (XOF)" },
  timezone: "UTC+0",
  filter: {
    budgetMin: 30, budgetMid: 75,
    tripMin: 1100, tripMid: 2200,
  },
  description: {
    fr: "Le Togo est un corridor étroit entre Ghana et Bénin : Lomé et son Grand Marché des Fétiches (vaudou en plein air), les villages perchés des Tamberma sur la route des châteaux de banco (UNESCO), les cascades de Kpalimé dans la forêt tropicale, et les plages de la côte atlantique. Un pays ignoré qui récompense les curieux.",
    en: "Togo is a narrow corridor between Ghana and Benin: Lomé and its Grand Marché des Fétiches (an open-air voodoo market), the perched Tamberma villages along the mud-castle route (UNESCO), Kpalimé's waterfalls in the tropical forest, and the beaches of the Atlantic coast. An overlooked country that rewards the curious.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Mars", en: "November – March" },
      label: { fr: "Saison sèche", en: "Dry season" },
      color: "#22c55e",
      description: {
        fr: "Idéal pour voyager : harmattan frais, ciel dégagé. Routes praticables dans tout le pays. Nord sec et accessible.",
        en: "Ideal for travelling: cool harmattan winds, clear skies. Roads passable throughout the country. The north is dry and accessible.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Juin – Septembre", en: "June – September" },
      label: { fr: "Saison des pluies", en: "Rainy season" },
      color: "#ef4444",
      description: {
        fr: "Pluies régulières au sud, routes de brousse difficiles, nord moins touché mais chaud. Moins favorable.",
        en: "Regular rain in the south, difficult bush roads, the north is less affected but hot. Less favourable.",
      },
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "lome",
      name: { fr: "Lomé", en: "Lomé" },
      region: { fr: "Maritime (côte)", en: "Maritime (coast)" },
      data: [
        { month: "Jan", temp: 27, rain: 10,  icon: "⛅" },
        { month: "Fév", temp: 28, rain: 30,  icon: "⛅" },
        { month: "Mar", temp: 29, rain: 70,  icon: "⛅" },
        { month: "Avr", temp: 29, rain: 100, icon: "🌧️" },
        { month: "Mai", temp: 28, rain: 140, icon: "🌧️" },
        { month: "Jun", temp: 26, rain: 200, icon: "🌧️" },
        { month: "Jul", temp: 25, rain: 70,  icon: "⛅" },
        { month: "Aoû", temp: 25, rain: 30,  icon: "☀️" },
        { month: "Sep", temp: 26, rain: 60,  icon: "⛅" },
        { month: "Oct", temp: 27, rain: 90,  icon: "⛅" },
        { month: "Nov", temp: 27, rain: 30,  icon: "⛅" },
        { month: "Déc", temp: 27, rain: 15,  icon: "⛅" },
      ],
    },
    {
      id: "kara",
      name: { fr: "Kara", en: "Kara" },
      region: { fr: "Kara (nord-centre)", en: "Kara (north-central)" },
      data: [
        { month: "Jan", temp: 28, rain: 0,   icon: "⛅" },
        { month: "Fév", temp: 31, rain: 10,  icon: "⛅" },
        { month: "Mar", temp: 33, rain: 40,  icon: "🌡️" },
        { month: "Avr", temp: 33, rain: 80,  icon: "🌡️" },
        { month: "Mai", temp: 30, rain: 120, icon: "🌧️" },
        { month: "Jun", temp: 28, rain: 150, icon: "🌧️" },
        { month: "Jul", temp: 27, rain: 180, icon: "🌧️" },
        { month: "Aoû", temp: 26, rain: 200, icon: "🌧️" },
        { month: "Sep", temp: 27, rain: 170, icon: "🌧️" },
        { month: "Oct", temp: 28, rain: 80,  icon: "⛅" },
        { month: "Nov", temp: 29, rain: 10,  icon: "⛅" },
        { month: "Déc", temp: 28, rain: 0,   icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Lomé — Marché des Fétiches", en: "Lomé — Fetish Market" },
      region: { fr: "Maritime", en: "Maritime" },
      description: {
        fr: "Le Grand Marché des Fétiches de Lomé (Akodessewa) est le plus grand marché vaudou du monde : des milliers de crânes d'animaux, peaux, plantes médicinales et fétiches utilisés par les guérisseurs. Un spectacle saisissant qui n'existe nulle part ailleurs. Le front de mer de Lomé, la seule capitale africaine directement sur l'Atlantique, complète la visite.",
        en: "Lomé's Grand Marché des Fétiches (Akodessewa) is the largest voodoo market in the world: thousands of animal skulls, skins, medicinal plants and fetishes used by traditional healers. A striking sight found nowhere else. Lomé's seafront, the only African capital directly on the Atlantic, rounds out the visit.",
      },
      wikipedia: "Lomé",
      tags: ["Vaudou", "Marché", "Unique", "Ville"],
      mustSee: [
        { name: { fr: "Marché des Fétiches d'Akodessewa — le plus grand marché vaudou du monde", en: "Akodessewa Fetish Market — the world's largest voodoo market" }, wikipedia: "File:Akodessawa Fetish Market 2016.jpg" },
        { name: { fr: "Front de mer de Lomé — la seule capitale africaine sur l'Atlantique", en: "Lomé seafront — the only African capital on the Atlantic" }, wikipedia: "File:Lome Beach Togo 1.jpg" },
        { name: { fr: "Grand Marché de Lomé — tissus, artisanat", en: "Lomé Grand Market — fabrics, crafts" }, wikipedia: "File:Lomé Grand Market in full swing.jpg" },
        { name: { fr: "Palais des congrès", en: "Palais des Congrès" }, wikipedia: "File:Lomé-Palais des Congrès.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Koutammakou — Châteaux Tamberma", en: "Koutammakou — Tamberma Castles" },
      region: { fr: "Kara", en: "Kara" },
      description: {
        fr: "Le pays Tamberma (UNESCO) dans le nord du Togo est parsemé de tata — des maisons-châteaux en banco à deux étages, construites comme des forteresses avec des tours de guet et des greniers à mil. Cette architecture unique, vieille de plusieurs siècles, reflète la résistance des Tamberma aux razzias esclavagistes. Un paysage hors du commun, habité.",
        en: "The Tamberma country (UNESCO) in northern Togo is dotted with tata — two-storey mud-brick castle-houses, built like fortresses with watchtowers and millet granaries. This unique, centuries-old architecture reflects the Tamberma's resistance to slave raids. An extraordinary, inhabited landscape.",
      },
      wikipedia: "Koutammakou",
      tags: ["UNESCO", "Architecture", "Culture", "Unique"],
      mustSee: [
        { name: { fr: "Village de Nadoba — tatas Tamberma les mieux conservés", en: "Nadoba village — the best-preserved Tamberma tatas" }, wikipedia: "File:Les Tata de koutammakou 03.jpg" },
        { name: { fr: "Paysage de la plaine Tamberma au coucher de soleil", en: "Tamberma plain landscape at sunset" }, wikipedia: "File:Paysage tata 01.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Kpalimé — Forêt et cascades", en: "Kpalimé — Forest and waterfalls" },
      region: { fr: "Plateaux", en: "Plateaux" },
      description: {
        fr: "Kpalimé et sa région constituent le poumon vert du Togo : forêt tropicale dense, cascades de Kpimé et de Wome, fermes de papillons, plantations de café et de cacao. Le mont Agou (986m, point culminant du Togo) s'y trouve. Une région fraîche et verdoyante, idéale pour la randonnée.",
        en: "Kpalimé and its surrounding region form Togo's green lung: dense tropical forest, the Kpimé and Wome waterfalls, butterfly farms, coffee and cocoa plantations. Mount Agou (986 m, Togo's highest point) is located here. A cool, lush region, ideal for hiking.",
      },
      wikipedia: "Kpalimé",
      tags: ["Nature", "Randonnée", "Cascades", "Forêt"],
      mustSee: [
        { name: { fr: "Cascades de Kpimé (1h de Kpalimé)", en: "Kpimé Falls (1h from Kpalimé)" }, wikipedia: "File:Vue de la cascade de Kpimé, Kpalimé 01.jpg" },
        { name: { fr: "Mont Agou (986m) — point culminant du Togo", en: "Mount Agou (986m) — Togo's highest point" }, wikipedia: "Mount_Agou" },
        { name: { fr: "Plantations de café et cacao — balades pédestres", en: "Coffee and cocoa plantations — walking tours" }, wikipedia: "File:Cacao à kpalimé 01.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Togo est l'une des destinations les plus abordables d'Afrique de l'Ouest. Le franc CFA arrimé à l'euro facilite la gestion du budget. Lomé est la plus chère des villes, mais reste très abordable comparée aux standards européens.",
      en: "Togo is one of the most affordable destinations in West Africa. The CFA Franc, pegged to the euro, makes budgeting easy. Lomé is the priciest city, but remains very affordable by European standards.",
    },
    currency: "XOF",
    exchangeRate: "1€ = 655 XOF (taux fixe)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Guesthouse / chambre simple", en: "Guesthouse / simple room" }, price: "10–25 €", detail: { fr: "Ventilateur ou clim basique", en: "Fan or basic AC" } },
          { label: { fr: "Hôtel 3★ confort (Lomé, Kpalimé)", en: "Comfortable 3★ hotel (Lomé, Kpalimé)" }, price: "45–80 €", detail: { fr: "Clim, salle de bain privée, wifi", en: "AC, private bathroom, wifi" } },
          { label: { fr: "Hôtel de luxe Lomé (Radisson, Sarakawa)", en: "Luxury hotel in Lomé (Radisson, Sarakawa)" }, price: "120–200 €", detail: { fr: "Standard international", en: "International standard" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Pâte / sauces dans un buvette locale", en: "Pâte / sauces at a local buvette" }, price: "1–3 €", detail: { fr: "Cuisine togolaise typique", en: "Typical Togolese cuisine" } },
          { label: { fr: "Restaurant mid-range Lomé", en: "Mid-range restaurant in Lomé" }, price: "7–15 €", detail: { fr: "Poisson, viande, menu complet", en: "Fish, meat, full menu" } },
          { label: { fr: "Restaurant gastronomique Lomé", en: "Fine dining in Lomé" }, price: "20–40 €", detail: { fr: "Cuisine française et fusion", en: "French and fusion cuisine" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Moto-taxi (zemidjan) — trajet urbain", en: "Motorbike taxi (zemidjan) — urban ride" }, price: "0,30–1 €", detail: { fr: "Transport populaire Lomé", en: "Popular transport in Lomé" } },
          { label: { fr: "Bus / bush taxi (Lomé–Kpalimé, 2h)", en: "Bus / bush taxi (Lomé–Kpalimé, 2h)" }, price: "3–5 €", detail: { fr: "Transport interurbain local", en: "Local intercity transport" } },
          { label: { fr: "Location voiture avec chauffeur / journée", en: "Car rental with driver / day" }, price: "50–80 €", detail: { fr: "Recommandé pour nord Togo", en: "Recommended for northern Togo" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Visite guidée Marché des Fétiches", en: "Guided tour of the Fetish Market" }, price: "5–15 €", detail: { fr: "Guide local conseillé", en: "Local guide recommended" } },
          { label: { fr: "Trek vers les cascades de Kpimé (guide)", en: "Trek to Kpimé Falls (guide)" }, price: "10–20 €", detail: { fr: "Demi-journée", en: "Half day" } },
          { label: { fr: "Visite pays Tamberma avec guide", en: "Guided visit of Tamberma country" }, price: "20–40 €", detail: { fr: "Journée depuis Kara", en: "Full day from Kara" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "30–55 €/j", desc: { fr: "Guesthouse + cuisine locale + moto-taxi", en: "Guesthouse + local food + motorbike taxi" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "75–120 €/j", desc: { fr: "Hôtel 3★ + restaurants + excursions guidées", en: "3★ hotel + restaurants + guided excursions" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury" }, daily: "200 €+/j", desc: { fr: "Grand hôtel Lomé + excursions privées", en: "Grand hotel in Lomé + private excursions" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days" },
      route: {
        fr: "Lomé (3j) → Kpalimé (2j) → Atakpamé (1j) → Kara (2j) → Koutammakou (2j)",
        en: "Lomé (3d) → Kpalimé (2d) → Atakpamé (1d) → Kara (2d) → Koutammakou (2d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 100 – 1 700 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Lomé", en: "Return flight Paris–Lomé" }, amount: "500–700 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "200–300 €" },
            { label: { fr: "Transports locaux", en: "Local transport" }, amount: "100–200 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "150–250 €" },
            { label: { fr: "Activités & guides", en: "Activities & guides" }, amount: "100–200 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "2 200 – 3 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Lomé", en: "Return flight Paris–Lomé" }, amount: "550–750 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "600–900 €" },
            { label: { fr: "Location voiture / chauffeur", en: "Car rental / driver" }, amount: "350–550 €" },
            { label: { fr: "Nourriture & sorties", en: "Food & outings" }, amount: "350–550 €" },
            { label: { fr: "Guides & excursions", en: "Guides & excursions" }, amount: "200–350 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~6h (Ethiopian Airlines via Addis, Air France via escale, parfois Corsair)", en: "~6h (Ethiopian Airlines via Addis, Air France via layover, sometimes Corsair)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Visa à l'arrivée possible (30€) ou e-Visa en ligne. Valable 7 à 30 jours.", en: "Visa on arrival possible (30€) or online e-Visa. Valid 7 to 30 days." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Franc CFA (XOF). 1€ = 655 XOF taux fixe. Espèces essentielles hors Lomé.", en: "CFA Franc (XOF). 1€ = 655 XOF fixed rate. Cash essential outside Lomé." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Français (officiel) — communication facile. Ewe au sud, Kabiyé au nord.", en: "French (official) — easy to communicate. Ewe in the south, Kabiye in the north." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type C/E (européen) — 220V.", en: "Type C/E (European) — 220V." } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Vaccin fièvre jaune obligatoire. Antipaludéen indispensable toute l'année.", en: "Yellow fever vaccine mandatory. Malaria prophylaxis essential year-round." } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Non potable — eau en bouteille indispensable.", en: "Not drinkable — bottled water essential." } },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "Couverture 4G à Lomé. Nord du pays : couverture limitée. SIM Togocel locale recommandée.", en: "4G coverage in Lomé. Northern part of the country: limited coverage. Local Togocel SIM recommended." } },
  ],
};
