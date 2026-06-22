export const BRAZIL = {
  code: "BRA",
  numericId: 76,
  name: "Brésil",
  emoji: "🇧🇷",
  capital: "Brasília",
  language: "Portugais",
  currency: "Real brésilien (BRL)",
  timezone: "UTC-3 (côtes) / UTC-4 (Amazonie)",
  filter: {
    budgetMin: 35,
    budgetMid: 80,
    tripMin: 1800,
    tripMid: 3500,
  },
  description:
    "Le Brésil est le géant de l'Amérique du Sud, pays de la samba, du carnaval et de l'Amazonie. Ses plages mythiques de Rio, sa forêt tropicale immense, ses chutes d'Iguazú et sa culture afro-brésilienne vibrante en font l'une des destinations les plus riches du monde.",

  bestPeriods: [
    {
      months: "Juin – Septembre",
      label: "Saison sèche (Sud & Nordeste)",
      color: "#fbbf24",
      description:
        "Période idéale pour Rio et le Nordeste : temps ensoleillé, humidité moindre et mer chaude. Températures agréables à Rio (20–25 °C).",
      icon: "☀️",
    },
    {
      months: "Décembre – Mars",
      label: "Carnaval & fêtes",
      color: "#f43f5e",
      description:
        "Le Carnaval (février/mars) est l'événement incontournable de Rio et Salvador. Saison chaude et humide dans le Sud.",
      icon: "🎉",
    },
    {
      months: "Juillet – Novembre",
      label: "Amazonie (saison sèche)",
      color: "#22c55e",
      description:
        "Meilleure période pour explorer l'Amazonie : les eaux baissent, les plages de rivière apparaissent et la faune est plus visible.",
      icon: "🌿",
    },
  ],

  weatherCities: [
    {
      id: "rio-de-janeiro",
      name: "Rio de Janeiro",
      region: "Sud-Est",
      data: [
        { month: "Jan", temp: 27, rain: 130, icon: "🌧️" },
        { month: "Fév", temp: 28, rain: 115, icon: "🌧️" },
        { month: "Mar", temp: 27, rain: 130, icon: "🌧️" },
        { month: "Avr", temp: 25, rain: 110, icon: "☀️" },
        { month: "Mai", temp: 23, rain: 80, icon: "☀️" },
        { month: "Jun", temp: 21, rain: 55, icon: "☀️" },
        { month: "Jul", temp: 21, rain: 45, icon: "☀️" },
        { month: "Aoû", temp: 21, rain: 45, icon: "☀️" },
        { month: "Sep", temp: 22, rain: 80, icon: "☀️" },
        { month: "Oct", temp: 24, rain: 90, icon: "☀️" },
        { month: "Nov", temp: 25, rain: 115, icon: "☀️" },
        { month: "Déc", temp: 26, rain: 125, icon: "☀️" },
      ],
    },
    {
      id: "salvador",
      name: "Salvador",
      region: "Nordeste (Bahia)",
      data: [
        { month: "Jan", temp: 28, rain: 90, icon: "⛅" },
        { month: "Fév", temp: 28, rain: 95, icon: "⛅" },
        { month: "Mar", temp: 28, rain: 135, icon: "🌧️" },
        { month: "Avr", temp: 27, rain: 155, icon: "🌧️" },
        { month: "Mai", temp: 26, rain: 165, icon: "☀️" },
        { month: "Jun", temp: 25, rain: 170, icon: "☀️" },
        { month: "Jul", temp: 24, rain: 130, icon: "☀️" },
        { month: "Aoû", temp: 24, rain: 70, icon: "☀️" },
        { month: "Sep", temp: 25, rain: 50, icon: "☀️" },
        { month: "Oct", temp: 26, rain: 65, icon: "☀️" },
        { month: "Nov", temp: 27, rain: 80, icon: "⛅" },
        { month: "Déc", temp: 28, rain: 90, icon: "⛅" },
      ],
    },
    {
      id: "manaus",
      name: "Manaus",
      region: "Amazonie",
      data: [
        { month: "Jan", temp: 27, rain: 260, icon: "🌧️" },
        { month: "Fév", temp: 27, rain: 290, icon: "🌧️" },
        { month: "Mar", temp: 27, rain: 310, icon: "🌧️" },
        { month: "Avr", temp: 27, rain: 300, icon: "🌧️" },
        { month: "Mai", temp: 28, rain: 245, icon: "🌧️" },
        { month: "Jun", temp: 28, rain: 150, icon: "🌧️" },
        { month: "Jul", temp: 28, rain: 90, icon: "⛅" },
        { month: "Aoû", temp: 29, rain: 60, icon: "⛅" },
        { month: "Sep", temp: 29, rain: 85, icon: "⛅" },
        { month: "Oct", temp: 28, rain: 125, icon: "🌧️" },
        { month: "Nov", temp: 28, rain: 170, icon: "🌧️" },
        { month: "Déc", temp: 27, rain: 230, icon: "🌧️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Rio de Janeiro",
      region: "Sud-Est",
      description:
        "La Cidade Maravilhosa est la carte postale du Brésil avec le Christ Rédempteur, le Pain de Sucre et les plages de Copacabana et Ipanema. Son carnaval annuel est le plus grand spectacle du monde.",
      wikipedia: "Rio_de_Janeiro",
      tags: ["plages", "culture", "carnaval", "panorama"],
      mustSee: [
        { name: "Christ Rédempteur", wikipedia: "Christ_the_Redeemer_(statue)" },
        { name: "Pain de Sucre", wikipedia: "Sugarloaf_Mountain" },
        { name: "Plage de Copacabana", wikipedia: "Copacabana,_Rio_de_Janeiro" },
        { name: "Favela de Santa Marta", wikipedia: "File:Favela santa marta.jpg" },
      ],
    },
    {
      id: 2,
      name: "Salvador de Bahia",
      region: "Nordeste",
      description:
        "Salvador est le cœur de la culture afro-brésilienne : Pelourinho (quartier colonial UNESCO), candomblé, capoeira et musique omniprésente. La cuisine baiana est l'une des plus savoureuses du pays.",
      wikipedia: "Salvador,_Bahia",
      tags: ["culture", "histoire", "musique", "afro-brésilien"],
      mustSee: [
        { name: "Pelourinho", wikipedia: "File:Pelourinho.png" },
        { name: "Igreja do Bonfim", wikipedia: "File:Igreja do Senhor Jesus do Bonfim - Portalegre - Portugal (52894055751).jpg" },
        { name: "Marché São Joaquim", wikipedia: "Salvador,_Bahia" },
        { name: "Lac Itaparica", wikipedia: "File:Centro_itaparica_ba.jpg" },
      ],
    },
    {
      id: 3,
      name: "Amazonie & Manaus",
      region: "Nord",
      description:
        "La plus grande forêt tropicale du monde s'explore depuis Manaus. Les lodges en pleine jungle, les pirogues sur le Rio Negro et la rencontre des eaux (Negro + Solimões) sont des expériences inoubliables.",
      wikipedia: "Amazon_rainforest",
      tags: ["nature", "jungle", "faune", "écotourisme"],
      mustSee: [
        { name: "Rencontre des eaux", wikipedia: "Meeting_of_Waters" },
        { name: "Teatro Amazonas", wikipedia: "Amazon_Theatre" },
        { name: "Parc national de Jau", wikipedia: "File:Jau_National_Park.jpg" },
        { name: "Anavilhanas (archipel)", wikipedia: "Anavilhanas_National_Park" },
      ],
    },
    {
      id: 4,
      name: "Fernando de Noronha",
      region: "Nordeste (île)",
      description:
        "Archipel volcanique à 350 km des côtes, Fernando de Noronha est l'un des plus beaux endroits pour la plongée au monde. Dauphins, tortues marines et eaux cristallines bleu-vert dans un cadre préservé.",
      wikipedia: "Fernando_de_Noronha",
      tags: ["plongée", "île", "faune marine", "nature"],
      mustSee: [
        { name: "Praia do Sancho", wikipedia: "File:Praia_do_Sancho_Noronha.JPG" },
        { name: "Baie des Dauphins", wikipedia: "File:Baia dos Golfinhos - Pipa.jpg" },
        { name: "Parc national marin", wikipedia: "Fernando_de_Noronha_Marine_National_Park" },
        { name: "Pico da Bandeira", wikipedia: "Fernando_de_Noronha" },
      ],
    },
    {
      id: 5,
      name: "Bonito & Pantanal",
      region: "Mato Grosso do Sul",
      description:
        "Bonito est réputée pour ses rivières aux eaux translucides où l'on nage avec des poissons colorés. Le Pantanal voisin est la plus grande zone humide du monde et offre des observations de jaguars inégalées.",
      wikipedia: "Bonito,_Mato_Grosso_do_Sul",
      tags: ["nature", "plongée snorkeling", "faune", "jaguar"],
      mustSee: [
        { name: "Rio da Prata", wikipedia: "File:Rio_de_la_Plata_BA_2.JPG" },
        { name: "Pantanal", wikipedia: "Pantanal" },
        { name: "Gruta do Lago Azul", wikipedia: "File:Gruta_da_Lagoa_Azul.jpg" },
        { name: "Estrada Parque (Pantanal)", wikipedia: "Pantanal" },
      ],
    },
  ],

  costOfLiving: {
    intro:
      "Le Brésil offre un bon rapport qualité-prix, surtout dans le Nordeste. Rio de Janeiro et São Paulo sont plus chères. Les transports intérieurs nécessitent souvent des vols domestiques.",
    currency: "Real brésilien (BRL)",
    exchangeRate: "1€ ≈ 5,5–6 BRL",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Dortoir auberge de jeunesse", price: "10–18 €", detail: "Rio, Salvador, qualité variable" },
          { label: "Pousada double (pension)", price: "30–60 €", detail: "Très courant, souvent avec petit-déj" },
          { label: "Hôtel 4★ en ville", price: "80–160 €", detail: "Rio Copacabana ou Ipanema" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Prato feito (plat du jour)", price: "3–6 €", detail: "Riz, haricots, viande, salade" },
          { label: "Churrascaria (grill à volonté)", price: "15–25 €", detail: "Rodízio, toutes viandes incluses" },
          { label: "Açaí bowl / snack de rue", price: "2–4 €", detail: "Incontournable au Nordeste" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Vol domestique (ex: Rio–Manaus)", price: "50–150 €", detail: "LATAM, GOL, selon réservation" },
          { label: "Bus ville / métro Rio", price: "0,50–1 €", detail: "Tarif local subventionné" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités & Culture",
        items: [
          { label: "Téléphérique Pain de Sucre", price: "18 €", detail: "Aller-retour, vue panoramique" },
          { label: "Excursion Amazonie (3 jours lodge)", price: "150–300 €", detail: "Tout compris depuis Manaus" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "35–55 €/j", desc: "Auberge/pousada, plats locaux, transports en commun", color: "#22c55e" },
      { type: "Confort", daily: "80–130 €/j", desc: "Hôtel 3★, restaurants mid-range, excursions guidées", color: "#3b82f6" },
      { type: "Luxe", daily: "200 €+/j", desc: "Resort 5★, gastronomie, vols intérieurs fréquents", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "2 semaines",
      route: "Rio de Janeiro – Salvador – Manaus (Amazonie)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 800 – 2 300 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Rio de Janeiro", amount: "650–900 €" },
            { label: "Hébergement (14 nuits)", amount: "350–500 €" },
            { label: "Nourriture", amount: "280–400 €" },
            { label: "Transport local + vols intérieurs", amount: "200–350 €" },
            { label: "Activités & imprévus", amount: "150–250 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "3 500 – 4 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Rio de Janeiro", amount: "900–1 200 €" },
            { label: "Hébergement (14 nuits)", amount: "800–1 100 €" },
            { label: "Nourriture", amount: "600–800 €" },
            { label: "Transport + vols intérieurs", amount: "500–700 €" },
            { label: "Activités & imprévus", amount: "400–600 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "8 000 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Rio (Business)", amount: "3 000–5 000 €" },
            { label: "Hébergement (14 nuits)", amount: "2 000–3 000 €" },
            { label: "Nourriture & restaurants", amount: "800–1 200 €" },
            { label: "Transport & excursions privées", amount: "600–900 €" },
            { label: "Activités premium", amount: "400–600 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "~11–12h (Air France direct, Iberia via Madrid)" },
    { icon: "🪪", label: "Visa", value: "Sans visa pour les Français (90 jours)" },
    { icon: "💰", label: "Monnaie", value: "Real brésilien (1€ ≈ 5,5–6 BRL)" },
    { icon: "🗣️", label: "Langue", value: "Portugais brésilien" },
    { icon: "🔌", label: "Prise électrique", value: "Type N – 127/220 V (adaptateur conseillé)" },
    { icon: "📱", label: "Réseau", value: "4G dans les villes, couverture limitée en Amazonie" },
    { icon: "🚰", label: "Eau du robinet", value: "Non potable, eau en bouteille recommandée" },
    { icon: "💊", label: "Santé", value: "Vaccin fièvre jaune recommandé pour l'Amazonie et le Pantanal" },
  ],
};
