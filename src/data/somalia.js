export const SOMALIA = {
  code: "SOM",
  numericId: 706,
  name: { fr: "Somalie", en: "Somalia" },
  emoji: "🇸🇴",
  capital: { fr: "Mogadiscio", en: "Mogadishu" },
  language: { fr: "Somali, Arabe", en: "Somali, Arabic" },
  currency: { fr: "Shilling somalien (SOS)", en: "Somali shilling (SOS)" },
  timezone: "UTC+3",
  filter: {
    budgetMin: 60, budgetMid: 120,
    tripMin: 1200, tripMid: 2500,
  },
  description: {
    fr: "La Somalie abrite des merveilles souvent ignorées : les peintures rupestres de Laas Geel, parmi les mieux conservées au monde, la côte du Somaliland avec ses plages immaculées, et Berbera, ancien port caravanier. Le Somaliland (autoproclamé indépendant depuis 1991) est la partie la plus accessible et la plus sûre du pays, tandis que Mogadiscio se reconstruit timidement après des décennies de conflit.",
    en: "Somalia is home to often-overlooked wonders: the Laas Geel rock paintings, among the best preserved in the world, the Somaliland coast with its pristine beaches, and Berbera, a former caravan port. Somaliland (self-declared independent since 1991) is the most accessible and safest part of the country, while Mogadishu is tentatively rebuilding after decades of conflict.",
  },

  bestPeriods: [
    {
      months: { fr: "Décembre – Mars", en: "December – March" },
      label: { fr: "Saison sèche (Jilaal)", en: "Dry season (Jilaal)" },
      color: "#22c55e",
      description: {
        fr: "Meilleure période pour le Somaliland : températures clémentes (25–30°C), mer calme à Berbera, pistes praticables. Idéal pour Laas Geel et les sites côtiers.",
        en: "Best time for Somaliland: mild temperatures (25–30°C), calm sea in Berbera, passable tracks. Ideal for Laas Geel and coastal sites.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Juin – Août", en: "June – August" },
      label: { fr: "Petite saison sèche (Hagaa)", en: "Short dry season (Hagaa)" },
      color: "#f59e0b",
      description: {
        fr: "Seconde fenêtre favorable. Vent d'est à Berbera, idéal pour la planche à voile. Températures supportables grâce à la brise maritime.",
        en: "A second favourable window. East wind in Berbera, ideal for windsurfing. Bearable temperatures thanks to the sea breeze.",
      },
      icon: "🌊",
    },
  ],

  weatherCities: [
    {
      id: "mogadishu",
      name: "Mogadiscio",
      region: { fr: "Banadir (côte sud)", en: "Banadir (south coast)" },
      data: [
        { month: "Jan", temp: 27, rain: 15,  icon: "⛅" },
        { month: "Fév", temp: 27, rain: 10,  icon: "⛅" },
        { month: "Mar", temp: 28, rain: 25,  icon: "⛅" },
        { month: "Avr", temp: 28, rain: 75,  icon: "⛅" },
        { month: "Mai", temp: 27, rain: 80,  icon: "⛅" },
        { month: "Jun", temp: 26, rain: 55,  icon: "☀️" },
        { month: "Jul", temp: 25, rain: 50,  icon: "☀️" },
        { month: "Aoû", temp: 25, rain: 55,  icon: "☀️" },
        { month: "Sep", temp: 26, rain: 50,  icon: "☀️" },
        { month: "Oct", temp: 27, rain: 90,  icon: "⛅" },
        { month: "Nov", temp: 27, rain: 65,  icon: "⛅" },
        { month: "Déc", temp: 27, rain: 30,  icon: "⛅" },
      ],
    },
    {
      id: "hargeisa",
      name: "Hargeisa",
      region: { fr: "Somaliland (nord, altitude 1300m)", en: "Somaliland (north, 1,300m altitude)" },
      data: [
        { month: "Jan", temp: 20, rain: 5,   icon: "☀️" },
        { month: "Fév", temp: 22, rain: 5,   icon: "☀️" },
        { month: "Mar", temp: 24, rain: 25,  icon: "☀️" },
        { month: "Avr", temp: 24, rain: 50,  icon: "☀️" },
        { month: "Mai", temp: 22, rain: 65,  icon: "☀️" },
        { month: "Jun", temp: 22, rain: 35,  icon: "☀️" },
        { month: "Jul", temp: 21, rain: 55,  icon: "☀️" },
        { month: "Aoû", temp: 21, rain: 45,  icon: "☀️" },
        { month: "Sep", temp: 22, rain: 20,  icon: "☀️" },
        { month: "Oct", temp: 24, rain: 30,  icon: "☀️" },
        { month: "Nov", temp: 22, rain: 25,  icon: "☀️" },
        { month: "Déc", temp: 20, rain: 10,  icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Laas Geel — Peintures rupestres", en: "Laas Geel — Rock paintings" },
      region: { fr: "Somaliland, région de Hargeisa", en: "Somaliland, Hargeisa region" },
      description: {
        fr: "Laas Geel est l'un des sites d'art rupestre les mieux conservés du monde entier. Découvertes par une mission française en 2002, ces peintures vieilles de 5 000 à 11 000 ans représentent des bovins aux cornes décorées, des pasteurs et des animaux sauvages avec des couleurs d'une fraîcheur saisissante. Le site, situé à 50 km de Hargeisa, est accessible en une journée et constitue la principale raison de visiter le Somaliland.",
        en: "Laas Geel is one of the best-preserved rock art sites in the entire world. Discovered by a French mission in 2002, these 5,000 to 11,000-year-old paintings depict cattle with decorated horns, herders and wild animals, with colours of striking freshness. The site, 50 km from Hargeisa, can be visited in a day and is the main reason to visit Somaliland.",
      },
      wikipedia: "Laas_Geel",
      tags: ["Art rupestre", "Préhistoire", "UNESCO candidat", "Archéologie"],
      mustSee: [
        { name: { fr: "Grottes principales — panneaux de peintures aux couleurs vives", en: "Main caves — vividly coloured painting panels" }, wikipedia: "File:Laas Geel.jpg" },
        { name: { fr: "Bovins néolithiques peints — représentations uniques au monde", en: "Painted Neolithic cattle — depictions unique in the world" }, wikipedia: "File:Laas Geel single cow.jpg" },
        { name: { fr: "Paysage de vallée — cadre naturel autour du confluent", en: "Valley landscape — natural setting around the confluence" }, wikipedia: "File:Laas Geel rock.jpg" },
        { name: { fr: "Site de Dhagah Kure — peintures rupestres secondaires proches", en: "Dhagah Kure site — nearby secondary rock paintings" }, wikipedia: "File:Laas Geel, 2024.jpg" },
      ],
    },
    {
      id: 2,
      name: "Berbera",
      region: { fr: "Somaliland, côte du Golfe d'Aden", en: "Somaliland, Gulf of Aden coast" },
      description: {
        fr: "Berbera est le principal port du Somaliland et une ville d'une grande valeur historique, ancien comptoir caravanier sur la route de l'encens et des esclaves. Ses plages de sable blanc bordées de palmiers et ses eaux translucides du golfe d'Aden en font une station balnéaire confidentielle et authentique. Les ruines ottomanes, les vieilles maisons de corail et le marché animé témoignent de son passé commerçant.",
        en: "Berbera is Somaliland's main port and a town of great historical value, a former caravan trading post on the incense and slave route. Its palm-lined white sand beaches and translucent Gulf of Aden waters make it an off-the-radar, authentic seaside town. Ottoman ruins, old coral houses and a lively market bear witness to its trading past.",
      },
      wikipedia: "Berbera",
      tags: ["Plage", "Histoire", "Port", "Plongée"],
      mustSee: [
        { name: { fr: "Plage de Berbera — plages immaculées sur le golfe d'Aden", en: "Berbera beach — pristine beaches on the Gulf of Aden" }, wikipedia: "File:Clean of berbera beach.jpg" },
        { name: { fr: "Vieux quartier colonial", en: "Old colonial quarter" }, wikipedia: "File:Berbera Somaliland view northeast.JPG" },
        { name: { fr: "Port de Berbera — activité portuaire et pêche traditionnelle", en: "Port of Berbera — port activity and traditional fishing" }, wikipedia: "File:Port_de_Berbera.jpg" },
        { name: { fr: "Récifs coralliens du golfe d'Aden — snorkeling et plongée", en: "Gulf of Aden coral reefs — snorkelling and diving" }, wikipedia: "Gulf_of_Aden" },
      ],
    },
    {
      id: 3,
      name: "Hargeisa",
      region: { fr: "Somaliland, capitale", en: "Somaliland, capital" },
      description: {
        fr: "Hargeisa est la capitale du Somaliland, région autonome autoproclamée depuis 1991 qui fonctionne comme un état indépendant de facto avec ses propres institutions, monnaie et passeport. La ville est relativement sûre et animée, avec un marché central coloré, des mosquées historiques et le monument de l'avion de guerre transformé en symbole de résistance. C'est la porte d'entrée pour tous les voyageurs souhaitant explorer le Somaliland.",
        en: "Hargeisa is the capital of Somaliland, a self-declared autonomous region since 1991 that functions as a de facto independent state with its own institutions, currency and passport. The city is relatively safe and lively, with a colourful central market, historic mosques and the war-plane monument turned symbol of resistance. It's the gateway for any traveller wishing to explore Somaliland.",
      },
      wikipedia: "Hargeisa",
      tags: ["Ville", "Culture", "Marché", "Politique"],
      mustSee: [
        { name: { fr: "Avion-monument de la guerre civile — symbole de la résistance du Somaliland", en: "Civil war plane monument — symbol of Somaliland's resistance" }, wikipedia: "File:New rebuilt of Hargeisa War Memorial.jpg" },
        { name: { fr: "Marché central — épices, tissus et vie locale", en: "Central market — spices, textiles and local life" }, wikipedia: "File:Street Market Hargeisa, Somaliland (29322262370).jpg" },
      ],
    },
    {
      id: 4,
      name: "Mogadiscio",
      region: { fr: "Banadir (capitale fédérale)", en: "Banadir (federal capital)" },
      description: {
        fr: "Mogadiscio, l'une des plus anciennes villes de la Corne de l'Afrique, se reconstruit progressivement après des décennies de guerre civile. Sa vieille ville (Hamarweyne) avec ses maisons arabes et ses mosquées médiévales reprend vie, et quelques hôtels de luxe accueillent les visiteurs avec une sécurité privée renforcée. La visite reste réservée aux voyageurs expérimentés avec guide et sécurité privée, en raison des risques d'attentats.",
        en: "Mogadishu, one of the oldest cities in the Horn of Africa, is gradually being rebuilt after decades of civil war. Its old town (Hamarweyne), with its Arab houses and medieval mosques, is coming back to life, and a few luxury hotels welcome visitors with reinforced private security. A visit remains reserved for experienced travellers with a guide and private security, due to the risk of attacks.",
      },
      wikipedia: "Mogadishu",
      tags: ["Histoire", "Architecture", "Urbanisme", "Précaution"],
      mustSee: [
        { name: { fr: "Cathédrale de Mogadiscio — édifice colonial en ruines partielles", en: "Mogadishu Cathedral — partially ruined colonial building" }, wikipedia: "Mogadishu_Cathedral" },
        { name: { fr: "Plage de Lido — front de mer qui renaît peu à peu", en: "Lido Beach — a seafront gradually coming back to life" }, wikipedia: "Mogadishu" },
        { name: { fr: "Marché Bakara — grand marché animé (avec précautions)", en: "Bakara Market — large lively market (with precautions)" }, wikipedia: "File:Bakaara Market.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le coût de la vie en Somalie varie fortement selon la région. Le Somaliland est relativement abordable avec des prix similaires à l'Éthiopie voisine. Mogadiscio est plus chère en raison des frais de sécurité importants. Le dollar américain est largement accepté aux côtés du shilling somalien.",
      en: "The cost of living in Somalia varies greatly by region. Somaliland is relatively affordable, with prices similar to neighbouring Ethiopia. Mogadishu is pricier due to significant security costs. The US dollar is widely accepted alongside the Somali shilling.",
    },
    currency: "SOS",
    exchangeRate: "1€ ≈ 640 SOS (Somaliland: shilling du Somaliland)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Guesthouse simple (Hargeisa)", en: "Simple guesthouse (Hargeisa)" }, range: "15–30 €" },
          { label: { fr: "Hôtel milieu de gamme", en: "Mid-range hotel" }, range: "40–80 €" },
          { label: { fr: "Hôtel sécurisé (Mogadiscio)", en: "Secured hotel (Mogadishu)" }, range: "100–200 €" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Canjeero (crêpes) + viande, restaurant local", en: "Canjeero (flatbread) + meat, local restaurant" }, range: "3–7 €" },
          { label: { fr: "Restaurant milieu de gamme", en: "Mid-range restaurant" }, range: "10–20 €" },
          { label: { fr: "Thé somalien (shaax) + gâteaux", en: "Somali tea (shaax) + pastries" }, range: "1–2 €" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Taxi en ville (Hargeisa)", en: "Taxi in town (Hargeisa)" }, range: "2–5 €" },
          { label: { fr: "Minibus Hargeisa–Berbera", en: "Minibus Hargeisa–Berbera" }, range: "5–10 €" },
          { label: { fr: "Guide + véhicule pour Laas Geel", en: "Guide + vehicle for Laas Geel" }, range: "40–80 €/j" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Entrée site de Laas Geel", en: "Laas Geel site entry" }, range: "10–20 €" },
          { label: { fr: "Sécurité privée Mogadiscio (obligatoire)", en: "Private security in Mogadishu (mandatory)" }, range: "150–300 €/j" },
          { label: { fr: "Sortie snorkeling Berbera", en: "Snorkelling trip in Berbera" }, range: "20–40 €" },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "60–90 €/j", desc: { fr: "Somaliland uniquement : guesthouse, nourriture locale, transports publics", en: "Somaliland only: guesthouse, local food, public transport" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "120–250 €/j", desc: { fr: "Hôtel correct, guide, sécurité à Mogadiscio si nécessaire", en: "Decent hotel, guide, security in Mogadishu if needed" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "8 jours", en: "8 days" },
      route: { fr: "Hargeisa → Laas Geel → Berbera → Hargeisa", en: "Hargeisa → Laas Geel → Berbera → Hargeisa" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 200 – 1 600 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Hargeisa (via Addis ou Dubaï)", en: "Return flight Paris–Hargeisa (via Addis Ababa or Dubai)" }, amount: "600–900 €" },
            { label: { fr: "Hébergement (7 nuits)", en: "Accommodation (7 nights)" }, amount: "105–210 €" },
            { label: { fr: "Transports locaux", en: "Local transport" }, amount: "100–150 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "150–250 €" },
            { label: { fr: "Activités + entrées", en: "Activities + entry fees" }, amount: "100–200 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "2 500 – 3 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Hargeisa (via Dubaï)", en: "Return flight Paris–Hargeisa (via Dubai)" }, amount: "700–1 000 €" },
            { label: { fr: "Hébergement (7 nuits)", en: "Accommodation (7 nights)" }, amount: "280–560 €" },
            { label: { fr: "Location véhicule + guide", en: "Vehicle rental + guide" }, amount: "700–1 000 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "300–500 €" },
            { label: { fr: "Activités + entrées", en: "Activities + entry fees" }, amount: "250–400 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "Vols via Dubaï (flydubai vers Hargeisa), Addis-Abeba (Ethiopian Airlines) ou Nairobi (Kenya Airways). Pas de vol direct Paris–Somaliland.", en: "Flights via Dubai (flydubai to Hargeisa), Addis Ababa (Ethiopian Airlines) or Nairobi (Kenya Airways). No direct flight Paris–Somaliland." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Somaliland : visa à l'arrivée à l'aéroport de Hargeisa (20–30 USD). Somalie fédérale : visa difficile à obtenir, formalités complexes.", en: "Somaliland: visa on arrival at Hargeisa airport ($20–30). Federal Somalia: visa difficult to obtain, complex procedures." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Dollar américain (USD) largement accepté. Shilling du Somaliland en usage local. Pas de carte bancaire internationale acceptée.", en: "US dollar (USD) widely accepted. Somaliland shilling used locally. No international bank cards accepted." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Somali (langue nationale), arabe (deuxième langue). Anglais compris dans les milieux commerciaux du Somaliland.", en: "Somali (national language), Arabic (second language). English understood in Somaliland's business circles." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type G (britannique à 3 broches). Tension 220V. Générateurs fréquents, coupures habituelles.", en: "Type G (British 3-pin). 220V. Generators common, power cuts frequent." } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Vaccin fièvre jaune recommandé (peut être exigé). Paludisme dans les zones basses. Méningite, hépatites A/B conseillés. Eau en bouteille impérative.", en: "Yellow fever vaccine recommended (may be required). Malaria in low-lying areas. Meningitis, hepatitis A/B advised. Bottled water essential." } },
    { icon: "⚠️", label: { fr: "Sécurité — Somaliland", en: "Safety — Somaliland" }, value: { fr: "Le Somaliland est relativement stable. Laas Geel et Berbera sont accessibles avec un guide local. Respecter les règles locales (tenue, photographies des sites militaires interdites).", en: "Somaliland is relatively stable. Laas Geel and Berbera are accessible with a local guide. Follow local rules (dress code, photographing military sites forbidden)." } },
    { icon: "🚫", label: { fr: "Sécurité — Somalie fédérale", en: "Safety — Federal Somalia" }, value: { fr: "Mogadiscio et le reste de la Somalie fédérale sont classés en zone rouge absolue par le MEAE. Risque élevé d'attentats (Al-Shabaab), enlèvements et violence. Sécurité privée obligatoire si déplacement professionnel indispensable.", en: "Mogadishu and the rest of federal Somalia are classified as an absolute no-go zone by official travel advisories. High risk of attacks (Al-Shabaab), kidnappings and violence. Private security mandatory if essential business travel is required." } },
  ],
};
