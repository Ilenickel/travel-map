export const SENEGAL = {
  code: "SEN",
  numericId: 686,
  name: "Sénégal",
  emoji: "🇸🇳",
  capital: "Dakar",
  language: "Français, Wolof",
  currency: "Franc CFA (XOF)",
  timezone: "UTC",
  filter: {
    budgetMin: 40, budgetMid: 80,
    tripMin: 1200, tripMid: 2500,
  },
  description:
    "La « Teranga » (hospitalité en wolof) est l'âme du Sénégal. Dakar et son île de Gorée (UNESCO), les plages paradisiaques de la Casamance, le parc de la Niokolo-Koba et les lacs roses surprenants font de ce pays le premier choix pour l'Afrique de l'Ouest francophone.",

  bestPeriods: [
    {
      months: "Novembre – Mai",
      label: "Saison sèche",
      color: "#22c55e",
      description:
        "Saison sèche et fraîche (harmattan), idéale pour le tourisme. Les parcs ont leur meilleure visibilité, pas de pluie, températures agréables.",
      icon: "☀️",
    },
    {
      months: "Juillet – Octobre",
      label: "Saison des pluies",
      color: "#3b82f6",
      description:
        "Saison verte, végétation luxuriante, moins de touristes et tarifs réduits. La Casamance est superbe.",
      icon: "🌿",
    },
  ],

  weatherCities: [
    {
      id: "dakar",
      name: "Dakar",
      region: "Dakar",
      data: [
        { month: "Jan", temp: 20, rain: 5,   icon: "☀️" },
        { month: "Fév", temp: 20, rain: 5,   icon: "☀️" },
        { month: "Mar", temp: 21, rain: 0,   icon: "☀️" },
        { month: "Avr", temp: 22, rain: 0,   icon: "☀️" },
        { month: "Mai", temp: 23, rain: 2,   icon: "☀️" },
        { month: "Jun", temp: 27, rain: 30,  icon: "⛅" },
        { month: "Jul", temp: 28, rain: 90,  icon: "⛅" },
        { month: "Aoû", temp: 28, rain: 200, icon: "🌧️" },
        { month: "Sep", temp: 28, rain: 100, icon: "🌧️" },
        { month: "Oct", temp: 28, rain: 30,  icon: "⛅" },
        { month: "Nov", temp: 25, rain: 5,   icon: "☀️" },
        { month: "Déc", temp: 21, rain: 5,   icon: "☀️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Île de Gorée",
      region: "Dakar",
      description:
        "L'île de Gorée, inscrite à l'UNESCO, est le symbole de la traite négrière atlantique. La Maison des Esclaves avec sa « Porte du non-retour » est un lieu de mémoire essentiel, au milieu d'une île paisible aux maisons colorées.",
      wikipedia: "File:Côtes de l'île de Gorée au Sénégal 11.jpg",
      tags: ["Histoire", "UNESCO", "Mémoire", "Culture", "Architecture"],
      mustSee: [
        { name: "Maison des Esclaves — Porte du non-retour", wikipedia: "House_of_Slaves" },
        { name: "Fort d'Estrées & musée de Gorée", wikipedia: "File:GoréeMuséeHistorique2.JPG" },
        { name: "Village de pêcheurs de l'île", wikipedia: "File:Senegal Gorée island harbor.jpg" },
        { name: "Vue sur Dakar depuis le fort", wikipedia: "Dakar" },
      ],
    },
    {
      id: 2,
      name: "Lac Rose (Lac Retba)",
      region: "Thiès",
      description:
        "Le Lac Rose doit sa couleur rose-magenta aux algues halophiles et à la forte salinité (jusqu'à 10 fois la mer). Les pêcheurs de sel, enveloppés de beurre de karité pour se protéger, en récoltent à mains nues.",
      wikipedia: "File:Lac Rose in Senegal.jpg",
      tags: ["Nature", "Unique", "Photo", "Insolite"],
      mustSee: [
        { name: "Récolte du sel rose", wikipedia: "File:Lac Rose 017 (39668528723).jpg" },
        { name: "Baignade dans la saumure (flottaison)", wikipedia: "File:Lac Rose 006 (46633565661).jpg" },
        { name: "Rallye Dakar (ancienne étape)", wikipedia: "File:Rally Dakar 2006 9-2.jpg" },
      ],
    },
    {
      id: 3,
      name: "Saly & Saint-Louis",
      region: "Thiès / Saint-Louis",
      description:
        "Saly est la station balnéaire numéro 1 du Sénégal. Saint-Louis, ancienne capitale coloniale française inscrite à l'UNESCO, est une île fluviale aux maisons colorées et balcons en fer forgé.",
      wikipedia: "Saint-Louis,_Senegal",
      tags: ["Plage", "Histoire", "UNESCO", "Colonial", "Ville", "Architecture", "Gastronomie"],
      mustSee: [
        { name: "Saint-Louis (UNESCO) — île coloniale", wikipedia: "Saint-Louis,_Senegal" },
        { name: "Pont Faidherbe", wikipedia: "Faidherbe_Bridge" },
        { name: "Parc national des Oiseaux du Djoudj", wikipedia: "Djoudj_National_Bird_Sanctuary" },
        { name: "Plages de Saly", wikipedia: "File:Saly-beach-01.jpg" },
      ],
    },
    {
      id: 4,
      name: "Casamance",
      region: "Casamance",
      description:
        "La Casamance est la région la plus verte et belle du Sénégal : forêts de fromagers, villages animistes en pays diola, rizières aquatiques et plages encore sauvages de Cap Skirring.",
      wikipedia: "File:Casamance landscape.jpg",
      tags: ["Nature", "Forêts", "Plage", "Cultures", "Randonnée", "Safari"],
      mustSee: [
        { name: "Cap Skirring — plage sauvage", wikipedia: "Cap_Skirring" },
        { name: "Ziguinchor — vieille ville coloniale", wikipedia: "Ziguinchor" },
        { name: "Village diola de Kabrousse", wikipedia: "File:Alyssa K. Barry Enampore, Casamance, Senegal.jpg" },
        { name: "Basse-Casamance en pirogue", wikipedia: "Casamance_River" },
      ],
    },
  ],

  costOfLiving: {
    intro: "Le Sénégal est accessible économiquement. Dakar est plus chère que les autres villes, mais reste très abordable pour les Européens. La cuisine locale (thiéboudienne, yassa) est excellente.",
    currency: "XOF",
    exchangeRate: "1€ = 656 XOF (taux fixe)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Auberge / chambre locale", price: "15–30 €", detail: "En dehors de Dakar" },
          { label: "Hôtel 3★ Dakar", price: "45–80 €", detail: "Avec clim et petit-déjeuner" },
          { label: "Lodge éco / resort Casamance", price: "70–150 €", detail: "Dans la nature" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Thiéboudienne (riz au poisson)", price: "2–4 €", detail: "Plat national, délicieux" },
          { label: "Restaurant local (yassa, mafé)", price: "5–10 €", detail: "Menu complet" },
          { label: "Restaurant touristique Dakar", price: "15–30 €", detail: "Fruits de mer, terrasse" },
        ],
      },
      {
        id: "transport",
        icon: "🚐",
        label: "Transport",
        items: [
          { label: "Sept-places (taxi intercités)", price: "5–15 €", detail: "Dakar–Saly–Saint-Louis" },
          { label: "Pirogue (Casamance)", price: "10–25 €", detail: "Entre villages" },
          { label: "Location 4x4 / jour", price: "50–80 €", detail: "Pour la Casamance ou Ferlo" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Traversée Gorée (aller-retour)", price: "3–5 €", detail: "Ferry depuis Dakar" },
          { label: "Visite Parc du Djoudj (oiseaux)", price: "5–10 €", detail: "Pélicans, flamants" },
          { label: "Safari Niokolo-Koba", price: "30–60 €/j", detail: "Guide + entrée" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "40–60 €/j", desc: "Guesthouse + thiéboudienne + sept-places", color: "#22c55e" },
      { type: "Confort", daily: "80–120 €/j", desc: "Hôtel 3★ + restos + excursions", color: "#3b82f6" },
      { type: "Luxe", daily: "200 €+/j", desc: "Lodge Casamance + gastronomie + circuit privé", color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: "12 jours",
      route: "Dakar & Gorée (3j) → Lac Rose & Saly (2j) → Saint-Louis (2j) → Casamance (4j) → Dakar (1j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 200 – 1 700 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Dakar", amount: "300–500 €" },
            { label: "Hébergement (12 nuits)", amount: "250–400 €" },
            { label: "Nourriture", amount: "250–350 €" },
            { label: "Transports locaux", amount: "150–250 €" },
            { label: "Activités & imprévus", amount: "150–250 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 500 – 3 500 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Dakar", amount: "400–700 €" },
            { label: "Hébergement (12 nuits)", amount: "700–1 100 €" },
            { label: "Nourriture", amount: "500–700 €" },
            { label: "Transport & excursions", amount: "400–600 €" },
            { label: "Activités & imprévus", amount: "300–400 €" },
          ],
        },
        {
          type: "Luxe",
          color: "#f59e0b",
          total: "6 000 €+",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Dakar (direct)", amount: "800–1 500 €" },
            { label: "Lodges & hôtels design (12 nuits)", amount: "2 000–3 500 €" },
            { label: "Gastronomie & expériences", amount: "800–1 500 €" },
            { label: "Transport privé & pirogue", amount: "500–800 €" },
            { label: "Extras", amount: "300 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~5,5h (Air Sénégal direct, Transavia, Air France)" },
    { icon: "🪪", label: "Visa",              value: "Sans visa pour les Français (90 jours)" },
    { icon: "💰", label: "Monnaie",           value: "Franc CFA (1€ = 656 XOF — taux fixe euros)" },
    { icon: "🗣️", label: "Langue",            value: "Français (officiel) + Wolof (courant)" },
    { icon: "🔌", label: "Prise électrique",  value: "Type C/E – 220 V" },
    { icon: "📱", label: "Réseau",            value: "Bonne couverture Dakar, faible en Casamance" },
    { icon: "🚰", label: "Eau du robinet",    value: "Non potable — eau en bouteille ou filtrée" },
    { icon: "💊", label: "Santé",             value: "Antipaludéen recommandé + fièvre jaune OBLIGATOIRE" },
  ],
};
