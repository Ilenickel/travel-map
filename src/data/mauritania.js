export const MAURITANIA = {
  code: "MRT",
  numericId: 478,
  name: { fr: "Mauritanie", en: "Mauritania" },
  emoji: "🇲🇷",
  capital: { fr: "Nouakchott", en: "Nouakchott" },
  language: { fr: "Arabe (officiel), Français, Pulaar, Soninké, Wolof", en: "Arabic (official), French, Pulaar, Soninke, Wolof" },
  currency: { fr: "Ouguiya (MRU)", en: "Ouguiya (MRU)" },
  timezone: "UTC",
  filter: {
    budgetMin: 40, budgetMid: 80,
    tripMin: 850, tripMid: 1700,
  },
  description: {
    fr: "La Mauritanie est un immense pays saharien entre mer et désert, peu visité mais d'une beauté saisissante. Les villes caravanières de Chinguetti et Ouadane (UNESCO), le plateau de l'Adrar avec ses dunes et ses gorges, et le banc d'Arguin (UNESCO), sanctuaire mondial des oiseaux migrateurs, composent un itinéraire inoubliable pour les aventuriers.",
    en: "Mauritania is a vast Saharan country between sea and desert, seldom visited but strikingly beautiful. The caravan towns of Chinguetti and Ouadane (UNESCO), the Adrar plateau with its dunes and gorges, and the Banc d'Arguin (UNESCO), a world sanctuary for migratory birds, form an unforgettable route for adventurers.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Février", en: "November – February" },
      label: { fr: "Saison fraîche idéale", en: "Ideal cool season" },
      color: "#22c55e",
      description: {
        fr: "La meilleure période pour voyager : températures agréables (20–28°C), pas de pluie, ciel bleu. Idéal pour le désert, les randonnées dans l'Adrar et la côte atlantique.",
        en: "The best time to travel: pleasant temperatures (20–28°C), no rain, blue skies. Ideal for the desert, hikes in the Adrar and the Atlantic coast.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Mars – Avril", en: "March – April" },
      label: { fr: "Début de chaleur", en: "Early heat" },
      color: "#f59e0b",
      description: {
        fr: "Températures montant à 30–35°C, quelques vents de sable (harmattan). Encore possible mais inconfortable pour les randonnées prolongées.",
        en: "Temperatures climbing to 30–35°C, occasional sandstorms (harmattan). Still possible but uncomfortable for extended hiking.",
      },
      icon: "⛅",
    },
  ],

  weatherCities: [
    {
      id: "nouakchott",
      name: "Nouakchott",
      region: { fr: "Nouakchott (côte atlantique)", en: "Nouakchott (Atlantic coast)" },
      data: [
        { month: "Jan", temp: 18, rain: 5,  icon: "☀️" },
        { month: "Fév", temp: 20, rain: 3,  icon: "☀️" },
        { month: "Mar", temp: 22, rain: 2,  icon: "☀️" },
        { month: "Avr", temp: 25, rain: 5,  icon: "☀️" },
        { month: "Mai", temp: 28, rain: 3,  icon: "⛅" },
        { month: "Jun", temp: 29, rain: 5,  icon: "⛅" },
        { month: "Jul", temp: 30, rain: 10, icon: "⛅" },
        { month: "Aoû", temp: 33, rain: 15, icon: "🌡️" },
        { month: "Sep", temp: 32, rain: 20, icon: "🌡️" },
        { month: "Oct", temp: 28, rain: 10, icon: "⛅" },
        { month: "Nov", temp: 23, rain: 5,  icon: "☀️" },
        { month: "Déc", temp: 19, rain: 3,  icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Chinguetti & l'Adrar", en: "Chinguetti & the Adrar" },
      region: "Adrar",
      description: {
        fr: "Chinguetti, inscrite au patrimoine mondial de l'UNESCO, est l'une des sept villes saintes de l'Islam et un haut lieu du commerce caravanier transsaharien. Ses bibliothèques de manuscrits anciens et ses maisons en banco se noient dans les dunes de l'erg du Sahara.",
        en: "Chinguetti, a UNESCO World Heritage Site, is one of the seven holy cities of Islam and a major hub of trans-Saharan caravan trade. Its libraries of ancient manuscripts and mud-brick houses are swallowed by the dunes of the Saharan erg.",
      },
      wikipedia: "Chinguetti",
      tags: ["UNESCO", "Désert", "Histoire", "Islam"],
      mustSee: [
        { name: { fr: "Mosquée de Chinguetti — minaret en pierre", en: "Chinguetti Mosque — stone minaret" }, wikipedia: "Chinguetti_Mosque" },
        { name: { fr: "Dunes de l'Erg de Chinguetti — coucher de soleil", en: "Chinguetti Erg dunes — sunset" }, wikipedia: "File:Erg Chebbi.jpeg" },
        { name: { fr: "Atar — ville de l'Adrar, point de départ", en: "Atar — Adrar town, starting point" }, wikipedia: "Atar,_Mauritania" },
      ],
    },
    {
      id: 2,
      name: { fr: "Parc national du Banc d'Arguin", en: "Banc d'Arguin National Park" },
      region: { fr: "Dakhlet Nouadhibou / Inchiri", en: "Dakhlet Nouadhibou / Inchiri" },
      description: {
        fr: "Le banc d'Arguin est l'un des plus importants sanctuaires ornithologiques au monde, inscrit à l'UNESCO. Des millions d'oiseaux migrateurs s'y arrêtent entre l'Europe et l'Afrique sub-saharienne. Les pêcheurs imraguen utilisent encore des pirogues à voile pour pêcher au sein de ce lagon unique.",
        en: "The Banc d'Arguin is one of the world's most important bird sanctuaries, a UNESCO World Heritage Site. Millions of migratory birds stop here between Europe and sub-Saharan Africa. Imraguen fishermen still use sailing canoes to fish within this unique lagoon.",
      },
      wikipedia: "File:ISS058-E-7710 - View of Mauritania.jpg",
      tags: ["UNESCO", "Oiseaux", "Nature", "Pêche traditionnelle"],
      mustSee: [
        { name: { fr: "Pêcheurs imraguen en pirogue à voile", en: "Imraguen fishermen in sailing canoes" }, wikipedia: "File:Banc-dArguin-byRundvald.jpg" },
        { name: { fr: "Plages désertes du parc", en: "The park's deserted beaches" }, wikipedia: "File:PNBA 43.JPG" },
        { name: { fr: "Coucher de soleil sur la lagune", en: "Sunset over the lagoon" }, wikipedia: "File:Banc d'arguin.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Ouadane & l'Églab", en: "Ouadane & the Eglab" },
      region: "Adrar",
      description: {
        fr: "Ouadane, autre cité caravanière inscrite à l'UNESCO, domine une gorge spectaculaire au cœur du plateau de l'Adrar. Les paysages de roches rouges, de palmeraies et de ruines médiévales créent une atmosphère hors du temps pour les amateurs d'aventure saharienne.",
        en: "Ouadane, another UNESCO-listed caravan town, overlooks a spectacular gorge in the heart of the Adrar plateau. Landscapes of red rock, palm groves and medieval ruins create a timeless atmosphere for lovers of Saharan adventure.",
      },
      wikipedia: "Ouadane",
      tags: ["UNESCO", "Désert", "Gorges", "Histoire"],
      mustSee: [
        { name: { fr: "Ancienne ville médiévale de Ouadane", en: "Ouadane's old medieval town" }, wikipedia: "Ouadane" },
        { name: { fr: "Peintures rupestres de l'Adrar", en: "Adrar rock paintings" }, wikipedia: "File:Adrar-Peintures rupestres (4).JPG" },
        { name: { fr: "Randonnée chameau dans le plateau", en: "Camel trek across the plateau" }, wikipedia: "File:Adrar-Camel (1).jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Nouakchott & la côte", en: "Nouakchott & the coast" },
      region: "Nouakchott",
      description: {
        fr: "Nouakchott, capitale née du désert en 1960, est une ville fascinante par ses contrastes : dunes qui avancent vers la mer, marché de poissons de Port de Pêche Artisanale où des pirogues déchargent des tonnes de poissons chaque matin, et quartiers de caravanes.",
        en: "Nouakchott, a capital born from the desert in 1960, is a fascinating city of contrasts: dunes advancing toward the sea, the fish market at the Port de Pêche Artisanale where canoes unload tonnes of fish every morning, and caravan neighbourhoods.",
      },
      wikipedia: "Nouakchott",
      tags: ["Ville", "Marché", "Pêche", "Culture"],
      mustSee: [
        { name: { fr: "Port de Pêche Artisanale — marché au poisson", en: "Port de Pêche Artisanale — fish market" }, wikipedia: "File:Nouakchott beach - fishing boat.jpg" },
        { name: { fr: "Musée national de Mauritanie", en: "National Museum of Mauritania" }, wikipedia: "File:NouakchottNationalMuseum1.jpg" },
        { name: { fr: "Marché Capitale — tissus et artisanat", en: "Marché Capitale — fabrics and crafts" }, wikipedia: "File:Nouakchott,MarcheCapitale1.jpg" },
        { name: { fr: "Plage de Nouakchott au coucher de soleil", en: "Nouakchott beach at sunset" }, wikipedia: "File:Sunset on the Aresquiers beach.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Mauritanie est une destination abordable mais l'infrastructure touristique est limitée, surtout dans les zones désertiques. Les hôtels de milieu de gamme existent principalement dans les grandes villes ; dans l'Adrar, on trouve surtout des campements sahariens.",
      en: "Mauritania is an affordable destination, but tourist infrastructure is limited, especially in desert areas. Mid-range hotels exist mainly in the larger cities; in the Adrar, Saharan camps are the norm.",
    },
    currency: "MRU",
    exchangeRate: "1€ ≈ 38 MRU",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Campement saharien (Adrar)", en: "Saharan camp (Adrar)" }, price: "15–30 €", detail: { fr: "Tente ou chambre simple, repas inclus parfois", en: "Tent or simple room, meals sometimes included" } },
          { label: { fr: "Hôtel 2–3★ Nouakchott / Atar", en: "2–3★ hotel in Nouakchott / Atar" }, price: "30–50 €", detail: { fr: "Clim, eau chaude", en: "Air conditioning, hot water" } },
          { label: { fr: "Hôtel de confort Nouakchott", en: "Comfort hotel in Nouakchott" }, price: "60–100 €", detail: { fr: "Meilleur rapport qualité-prix en capitale", en: "Best value for money in the capital" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Thé à la menthe + pain (rue)", en: "Mint tea + bread (street)" }, price: "0,50–1 €", detail: { fr: "Rituel social mauritanien", en: "A Mauritanian social ritual" } },
          { label: { fr: "Restaurant local (méchoui, couscous)", en: "Local restaurant (méchoui, couscous)" }, price: "4–8 €", detail: { fr: "Repas copieux", en: "Hearty meal" } },
          { label: { fr: "Restaurant touristique Nouakchott", en: "Touristy restaurant in Nouakchott" }, price: "12–25 €", detail: { fr: "Poisson frais, cuisine internationale", en: "Fresh fish, international cuisine" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Taxi collectif Nouakchott–Atar", en: "Shared taxi Nouakchott–Atar" }, price: "15–25 €", detail: { fr: "~450 km, route bitumée", en: "~450 km, paved road" } },
          { label: { fr: "4x4 avec chauffeur-guide / jour", en: "4x4 with driver-guide / day" }, price: "60–100 €", detail: { fr: "Indispensable pour le désert", en: "Essential for the desert" } },
          { label: { fr: "Vol Nouakchott–Atar (Mauritania Airlines)", en: "Flight Nouakchott–Atar (Mauritania Airlines)" }, price: "60–100 €", detail: { fr: "1h de vol, gain de temps", en: "1h flight, saves time" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Randonnée chameau dans les dunes (1j)", en: "Camel trek in the dunes (1 day)" }, price: "40–70 €", detail: { fr: "Guide + chameau + bivouac", en: "Guide + camel + bivouac" } },
          { label: { fr: "Visite bibliothèques de Chinguetti", en: "Chinguetti libraries visit" }, price: "5–10 €", detail: { fr: "Donation recommandée", en: "Donation recommended" } },
          { label: { fr: "Excursion banc d'Arguin (1j)", en: "Banc d'Arguin excursion (1 day)" }, price: "50–80 €", detail: { fr: "Pirogue + guide ornithologique", en: "Canoe + birdwatching guide" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "40–60 €/j", desc: { fr: "Campement + bouffe locale + 4x4 partagé", en: "Camp + local food + shared 4x4" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "80–120 €/j", desc: { fr: "Hôtel 3★ + restos + 4x4 privatif + guides", en: "3★ hotel + restaurants + private 4x4 + guides" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days" },
      route: {
        fr: "Nouakchott (2j) → Banc d'Arguin (1j) → Atar (1j) → Chinguetti (2j) → Ouadane (2j) → Atar → Nouakchott (2j)",
        en: "Nouakchott (2d) → Banc d'Arguin (1d) → Atar (1d) → Chinguetti (2d) → Ouadane (2d) → Atar → Nouakchott (2d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "850 – 1 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Nouakchott", en: "Return flight Paris–Nouakchott" }, amount: "350–500 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "200–280 €" },
            { label: { fr: "Transports locaux + 4x4 partagé", en: "Local transport + shared 4x4" }, amount: "150–220 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "100–150 €" },
            { label: { fr: "Activités + guides", en: "Activities + guides" }, amount: "100–150 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "1 700 – 2 400 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Nouakchott", en: "Return flight Paris–Nouakchott" }, amount: "450–650 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "500–700 €" },
            { label: { fr: "4x4 privatif + chauffeur", en: "Private 4x4 + driver" }, amount: "400–600 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "200–280 €" },
            { label: { fr: "Activités + guides", en: "Activities + guides" }, amount: "200–250 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~5h (Mauritania Airlines direct ou via Casablanca)", en: "~5h (Mauritania Airlines direct or via Casablanca)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Visa obligatoire — obtenu à l'arrivée (25 €) ou e-Visa en ligne", en: "Visa required — obtained on arrival (25 €) or e-Visa online" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Ouguiya MRU — espèces indispensables, peu de DAB en dehors de Nouakchott", en: "Ouguiya (MRU) — cash essential, few ATMs outside Nouakchott" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Arabe hassaniya (courant) + Français compris dans les milieux touristiques", en: "Hassaniya Arabic (common) + French understood in tourist circles" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type C/E — 220 V", en: "Type C/E — 220V" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Antipaludéen recommandé + fièvre jaune recommandée — eau en bouteille uniquement", en: "Antimalarials recommended + yellow fever recommended — bottled water only" } },
    { icon: "🌡️", label: { fr: "Chaleur", en: "Heat" }, value: { fr: "Températures dépassant 45°C en été — voyage juillet-septembre fortement déconseillé", en: "Temperatures exceeding 45°C in summer — travel from July to September strongly discouraged" } },
    { icon: "🔒", label: { fr: "Sécurité", en: "Security" }, value: { fr: "Consulter les avis du Quai d'Orsay — certaines zones frontalières déconseillées", en: "Check your government's travel advisory — some border areas are advised against" } },
  ],
};
