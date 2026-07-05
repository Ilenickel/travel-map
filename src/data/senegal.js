export const SENEGAL = {
  code: "SEN",
  numericId: 686,
  name: { fr: "Sénégal", en: "Senegal" },
  emoji: "🇸🇳",
  capital: { fr: "Dakar", en: "Dakar" },
  language: { fr: "Français, Wolof", en: "French, Wolof" },
  currency: { fr: "Franc CFA (XOF)", en: "CFA franc (XOF)" },
  timezone: "UTC",
  filter: {
    budgetMin: 40, budgetMid: 80,
    tripMin: 1200, tripMid: 2500,
  },
  description: {
    fr: "La « Teranga » (hospitalité en wolof) est l'âme du Sénégal. Dakar et son île de Gorée (UNESCO), les plages paradisiaques de la Casamance, le parc de la Niokolo-Koba et les lacs roses surprenants font de ce pays le premier choix pour l'Afrique de l'Ouest francophone.",
    en: "'Teranga' (hospitality in Wolof) is the soul of Senegal. Dakar and its Gorée Island (UNESCO), the idyllic beaches of Casamance, Niokolo-Koba National Park and the surprising pink lakes make this country the top choice for French-speaking West Africa.",
  },

  bestPeriods: [
    {
      months: { fr: "Novembre – Mai", en: "November – May" },
      label: { fr: "Saison sèche", en: "Dry season" },
      color: "#22c55e",
      description: {
        fr: "Saison sèche et fraîche (harmattan), idéale pour le tourisme. Les parcs ont leur meilleure visibilité, pas de pluie, températures agréables.",
        en: "Dry, cool season (harmattan), ideal for tourism. The parks offer the best visibility, no rain, pleasant temperatures.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Juillet – Octobre", en: "July – October" },
      label: { fr: "Saison des pluies", en: "Rainy season" },
      color: "#3b82f6",
      description: {
        fr: "Saison verte, végétation luxuriante, moins de touristes et tarifs réduits. La Casamance est superbe.",
        en: "Green season, lush vegetation, fewer tourists and lower prices. Casamance is stunning.",
      },
      icon: "🌿",
    },
  ],

  weatherCities: [
    {
      id: "dakar",
      name: "Dakar",
      region: { fr: "Dakar", en: "Dakar" },
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
      name: { fr: "Île de Gorée", en: "Gorée Island" },
      region: { fr: "Dakar", en: "Dakar" },
      description: {
        fr: "L'île de Gorée, inscrite à l'UNESCO, est le symbole de la traite négrière atlantique. La Maison des Esclaves avec sa « Porte du non-retour » est un lieu de mémoire essentiel, au milieu d'une île paisible aux maisons colorées.",
        en: "Gorée Island, a UNESCO World Heritage site, is the symbol of the Atlantic slave trade. The House of Slaves with its 'Door of No Return' is an essential place of remembrance, set on a peaceful island with colourful houses.",
      },
      wikipedia: "File:Côtes de l'île de Gorée au Sénégal 11.jpg",
      tags: ["Histoire", "UNESCO", "Mémoire", "Culture", "Architecture"],
      mustSee: [
        { name: { fr: "Maison des Esclaves — Porte du non-retour", en: "House of Slaves — Door of No Return" }, wikipedia: "House_of_Slaves" },
        { name: { fr: "Fort d'Estrées & musée de Gorée", en: "Fort d'Estrées & Gorée Museum" }, wikipedia: "File:GoréeMuséeHistorique2.JPG" },
        { name: { fr: "Village de pêcheurs de l'île", en: "The island's fishing village" }, wikipedia: "File:Senegal Gorée island harbor.jpg" },
        { name: { fr: "Vue sur Dakar depuis le fort", en: "View of Dakar from the fort" }, wikipedia: "Dakar" },
      ],
    },
    {
      id: 2,
      name: { fr: "Lac Rose (Lac Retba)", en: "Pink Lake (Lake Retba)" },
      region: { fr: "Thiès", en: "Thiès" },
      description: {
        fr: "Le Lac Rose doit sa couleur rose-magenta aux algues halophiles et à la forte salinité (jusqu'à 10 fois la mer). Les pêcheurs de sel, enveloppés de beurre de karité pour se protéger, en récoltent à mains nues.",
        en: "The Pink Lake owes its magenta colour to halophilic algae and its high salinity (up to 10 times that of seawater). Salt harvesters, coated in shea butter for protection, gather it by hand.",
      },
      wikipedia: "File:Lac Rose in Senegal.jpg",
      tags: ["Nature", "Unique", "Photo", "Insolite"],
      mustSee: [
        { name: { fr: "Récolte du sel rose", en: "Pink salt harvesting" }, wikipedia: "File:Lac Rose 017 (39668528723).jpg" },
        { name: { fr: "Baignade dans la saumure (flottaison)", en: "Swimming in the brine (floating)" }, wikipedia: "File:Lac Rose 006 (46633565661).jpg" },
        { name: { fr: "Rallye Dakar (ancienne étape)", en: "Dakar Rally (former stage)" }, wikipedia: "File:Rally Dakar 2006 9-2.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Saly & Saint-Louis", en: "Saly & Saint-Louis" },
      region: { fr: "Thiès / Saint-Louis", en: "Thiès / Saint-Louis" },
      description: {
        fr: "Saly est la station balnéaire numéro 1 du Sénégal. Saint-Louis, ancienne capitale coloniale française inscrite à l'UNESCO, est une île fluviale aux maisons colorées et balcons en fer forgé.",
        en: "Saly is Senegal's number one beach resort. Saint-Louis, the former French colonial capital and a UNESCO World Heritage site, is a river island with colourful houses and wrought-iron balconies.",
      },
      wikipedia: "Saint-Louis,_Senegal",
      tags: ["Plage", "Histoire", "UNESCO", "Colonial", "Ville", "Architecture", "Gastronomie"],
      mustSee: [
        { name: { fr: "Saint-Louis (UNESCO) — île coloniale", en: "Saint-Louis (UNESCO) — colonial island" }, wikipedia: "Saint-Louis,_Senegal" },
        { name: { fr: "Pont Faidherbe", en: "Faidherbe Bridge" }, wikipedia: "Faidherbe_Bridge" },
        { name: { fr: "Parc national des Oiseaux du Djoudj", en: "Djoudj National Bird Sanctuary" }, wikipedia: "Djoudj_National_Bird_Sanctuary" },
        { name: { fr: "Plages de Saly", en: "Saly beaches" }, wikipedia: "File:Saly-beach-01.jpg" },
      ],
    },
    {
      id: 4,
      name: "Casamance",
      region: { fr: "Casamance", en: "Casamance" },
      description: {
        fr: "La Casamance est la région la plus verte et belle du Sénégal : forêts de fromagers, villages animistes en pays diola, rizières aquatiques et plages encore sauvages de Cap Skirring.",
        en: "Casamance is Senegal's greenest and most beautiful region: kapok tree forests, animist villages in Diola country, flooded rice paddies and the still-wild beaches of Cap Skirring.",
      },
      wikipedia: "File:Casamance landscape.jpg",
      tags: ["Nature", "Forêts", "Plage", "Cultures", "Randonnée", "Safari"],
      mustSee: [
        { name: { fr: "Cap Skirring — plage sauvage", en: "Cap Skirring — wild beach" }, wikipedia: "Cap_Skirring" },
        { name: { fr: "Ziguinchor — vieille ville coloniale", en: "Ziguinchor — old colonial town" }, wikipedia: "Ziguinchor" },
        { name: { fr: "Village diola de Kabrousse", en: "Kabrousse Diola village" }, wikipedia: "File:Alyssa K. Barry Enampore, Casamance, Senegal.jpg" },
        { name: { fr: "Basse-Casamance en pirogue", en: "Lower Casamance by canoe" }, wikipedia: "Casamance_River" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "Le Sénégal est accessible économiquement. Dakar est plus chère que les autres villes, mais reste très abordable pour les Européens. La cuisine locale (thiéboudienne, yassa) est excellente.",
      en: "Senegal is affordable overall. Dakar is pricier than other cities, but remains very affordable for Europeans. Local cuisine (thiéboudienne, yassa) is excellent.",
    },
    currency: "XOF",
    exchangeRate: "1€ = 656 XOF (taux fixe)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Auberge / chambre locale", en: "Hostel / local room" }, price: "15–30 €", detail: { fr: "En dehors de Dakar", en: "Outside Dakar" } },
          { label: { fr: "Hôtel 3★ Dakar", en: "3★ hotel in Dakar" }, price: "45–80 €", detail: { fr: "Avec clim et petit-déjeuner", en: "With AC and breakfast" } },
          { label: { fr: "Lodge éco / resort Casamance", en: "Eco-lodge / resort in Casamance" }, price: "70–150 €", detail: { fr: "Dans la nature", en: "In nature" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Thiéboudienne (riz au poisson)", en: "Thiéboudienne (rice with fish)" }, price: "2–4 €", detail: { fr: "Plat national, délicieux", en: "The delicious national dish" } },
          { label: { fr: "Restaurant local (yassa, mafé)", en: "Local restaurant (yassa, mafé)" }, price: "5–10 €", detail: { fr: "Menu complet", en: "Full set menu" } },
          { label: { fr: "Restaurant touristique Dakar", en: "Tourist restaurant in Dakar" }, price: "15–30 €", detail: { fr: "Fruits de mer, terrasse", en: "Seafood, terrace" } },
        ],
      },
      {
        id: "transport",
        icon: "🚐",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Sept-places (taxi intercités)", en: "Sept-place (intercity shared taxi)" }, price: "5–15 €", detail: { fr: "Dakar–Saly–Saint-Louis", en: "Dakar–Saly–Saint-Louis" } },
          { label: { fr: "Pirogue (Casamance)", en: "Canoe (Casamance)" }, price: "10–25 €", detail: { fr: "Entre villages", en: "Between villages" } },
          { label: { fr: "Location 4x4 / jour", en: "4x4 rental / day" }, price: "50–80 €", detail: { fr: "Pour la Casamance ou Ferlo", en: "For Casamance or Ferlo" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Traversée Gorée (aller-retour)", en: "Gorée crossing (round trip)" }, price: "3–5 €", detail: { fr: "Ferry depuis Dakar", en: "Ferry from Dakar" } },
          { label: { fr: "Visite Parc du Djoudj (oiseaux)", en: "Djoudj Park visit (birds)" }, price: "5–10 €", detail: { fr: "Pélicans, flamants", en: "Pelicans, flamingos" } },
          { label: { fr: "Safari Niokolo-Koba", en: "Niokolo-Koba safari" }, price: "30–60 €/j", detail: { fr: "Guide + entrée", en: "Guide + entry fee" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "40–60 €/j", desc: { fr: "Guesthouse + thiéboudienne + sept-places", en: "Guesthouse + thiéboudienne + sept-place" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "80–120 €/j", desc: { fr: "Hôtel 3★ + restos + excursions", en: "3★ hotel + restaurants + excursions" }, color: "#3b82f6" },
      { type: { fr: "Luxe", en: "Luxury" }, daily: "200 €+/j", desc: { fr: "Lodge Casamance + gastronomie + circuit privé", en: "Casamance lodge + fine dining + private tour" }, color: "#f59e0b" },
    ],
    tripEstimate: {
      duration: { fr: "12 jours", en: "12 days" },
      route: {
        fr: "Dakar & Gorée (3j) → Lac Rose & Saly (2j) → Saint-Louis (2j) → Casamance (4j) → Dakar (1j)",
        en: "Dakar & Gorée (3d) → Pink Lake & Saly (2d) → Saint-Louis (2d) → Casamance (4d) → Dakar (1d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 200 – 1 700 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Dakar", en: "Return flight Paris–Dakar" }, amount: "300–500 €" },
            { label: { fr: "Hébergement (12 nuits)", en: "Accommodation (12 nights)" }, amount: "250–400 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "250–350 €" },
            { label: { fr: "Transports locaux", en: "Local transport" }, amount: "150–250 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency" }, amount: "150–250 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "2 500 – 3 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Dakar", en: "Return flight Paris–Dakar" }, amount: "400–700 €" },
            { label: { fr: "Hébergement (12 nuits)", en: "Accommodation (12 nights)" }, amount: "700–1 100 €" },
            { label: { fr: "Nourriture", en: "Food" }, amount: "500–700 €" },
            { label: { fr: "Transport & excursions", en: "Transport & excursions" }, amount: "400–600 €" },
            { label: { fr: "Activités & imprévus", en: "Activities & contingency" }, amount: "300–400 €" },
          ],
        },
        {
          type: { fr: "Luxe", en: "Luxury" },
          color: "#f59e0b",
          total: "6 000 €+",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Dakar (direct)", en: "Return flight Paris–Dakar (direct)" }, amount: "800–1 500 €" },
            { label: { fr: "Lodges & hôtels design (12 nuits)", en: "Design lodges & hotels (12 nights)" }, amount: "2 000–3 500 €" },
            { label: { fr: "Gastronomie & expériences", en: "Fine dining & experiences" }, amount: "800–1 500 €" },
            { label: { fr: "Transport privé & pirogue", en: "Private transport & canoe" }, amount: "500–800 €" },
            { label: { fr: "Extras", en: "Extras" }, amount: "300 €+" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~5,5h (Air Sénégal direct, Transavia, Air France)", en: "~5.5h (Air Sénégal direct, Transavia, Air France)" } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Sans visa pour les Français (90 jours)", en: "Visa-free for French citizens (90 days)" } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Franc CFA (1€ = 656 XOF — taux fixe euros)", en: "CFA franc (1€ = 656 XOF — fixed euro rate)" } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Français (officiel) + Wolof (courant)", en: "French (official) + Wolof (common)" } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type C/E – 220 V", en: "Type C/E — 220V" } },
    { icon: "📱", label: { fr: "Réseau", en: "Network" }, value: { fr: "Bonne couverture Dakar, faible en Casamance", en: "Good coverage in Dakar, weak in Casamance" } },
    { icon: "🚰", label: { fr: "Eau du robinet", en: "Tap water" }, value: { fr: "Non potable — eau en bouteille ou filtrée", en: "Not drinkable — bottled or filtered water" } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Antipaludéen recommandé + fièvre jaune OBLIGATOIRE", en: "Antimalarial recommended + yellow fever MANDATORY" } },
  ],
};
