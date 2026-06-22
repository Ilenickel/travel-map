export const ANGOLA = {
  code: "AGO",
  numericId: 24,
  name: "Angola",
  emoji: "🇦🇴",
  capital: "Luanda",
  language: "Portugais",
  currency: "Kwanza (AOA)",
  timezone: "UTC+1",
  filter: {
    budgetMin: 60, budgetMid: 130,
    tripMin: 1200, tripMid: 2800,
  },
  description:
    "L'Angola est un pays d'une richesse naturelle extraordinaire : chutes de Kalandula parmi les plus grandes d'Afrique, désert du Namibe au sud, parc national de Kissama et architecture coloniale portugaise de Luanda. Après des décennies de guerre civile terminée en 2002, le pays reconstruit peu à peu son infrastructure touristique.",

  bestPeriods: [
    {
      months: "Mai – Octobre",
      label: "Saison sèche",
      color: "#22c55e",
      description:
        "Saison sèche sur la côte et dans les basses terres. Températures agréables à Luanda (20–24°C), ciels clairs et idéal pour les parcs nationaux. Les hauts plateaux sont frais et verdoyants.",
      icon: "☀️",
    },
    {
      months: "Novembre – Avril",
      label: "Saison des pluies",
      color: "#f59e0b",
      description:
        "Les pluies rendent les routes secondaires difficiles mais les paysages sont luxuriants. Les chutes de Kalandula sont à leur maximum. La côte atlantique reste fréquentable.",
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "luanda",
      name: "Luanda",
      region: "Luanda (côte)",
      data: [
        { month: "Jan", temp: 28, rain: 35,  icon: "⛅" },
        { month: "Fév", temp: 28, rain: 30,  icon: "⛅" },
        { month: "Mar", temp: 28, rain: 50,  icon: "⛅" },
        { month: "Avr", temp: 27, rain: 80,  icon: "⛅" },
        { month: "Mai", temp: 24, rain: 20,  icon: "☀️" },
        { month: "Jun", temp: 20, rain: 5,   icon: "☀️" },
        { month: "Jul", temp: 19, rain: 0,   icon: "☀️" },
        { month: "Aoû", temp: 20, rain: 0,   icon: "☀️" },
        { month: "Sep", temp: 22, rain: 5,   icon: "☀️" },
        { month: "Oct", temp: 24, rain: 10,  icon: "☀️" },
        { month: "Nov", temp: 26, rain: 25,  icon: "☀️" },
        { month: "Déc", temp: 27, rain: 45,  icon: "⛅" },
      ],
    },
    {
      id: "huambo",
      name: "Huambo",
      region: "Hauts Plateaux",
      data: [
        { month: "Jan", temp: 20, rain: 210, icon: "🌧️" },
        { month: "Fév", temp: 20, rain: 190, icon: "⛅" },
        { month: "Mar", temp: 20, rain: 200, icon: "🌧️" },
        { month: "Avr", temp: 19, rain: 100, icon: "☀️" },
        { month: "Mai", temp: 18, rain: 20,  icon: "☀️" },
        { month: "Jun", temp: 16, rain: 0,   icon: "☀️" },
        { month: "Jul", temp: 15, rain: 0,   icon: "☀️" },
        { month: "Aoû", temp: 16, rain: 0,   icon: "☀️" },
        { month: "Sep", temp: 19, rain: 10,  icon: "☀️" },
        { month: "Oct", temp: 22, rain: 55,  icon: "☀️" },
        { month: "Nov", temp: 21, rain: 120, icon: "☀️" },
        { month: "Déc", temp: 20, rain: 195, icon: "⛅" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Luanda",
      region: "Province de Luanda",
      description:
        "La capitale angolaise est une ville de contrastes saisissants, mêlant gratte-ciels modernes et quartiers coloniaux portugais restaurés comme la Ilha do Cabo. Le Museu Nacional de Antropologia et la Fortaleza de São Miguel témoignent du riche passé lusophone du pays. Luanda est l'une des villes les plus chères d'Afrique en raison de son économie pétrolière.",
      wikipedia: "Luanda",
      tags: ["Capitale", "Culture", "Architecture", "Histoire"],
      mustSee: [
        { name: "Fortaleza de São Miguel — forteresse portugaise du XVIe siècle", wikipedia: "File:Luanda-SMiguelFort2.jpg" },
        { name: "Ilha do Cabo — presqu'île aux restaurants de fruits de mer", wikipedia: "File:Luanda Bay and Ilha de Luanda.jpg" },
        { name: "Museu Nacional de Antropologia — collections ethnographiques", wikipedia: "File:Pic stock-geo ph-mm-manila-ermita-rizal park-old finance bldg. (national museum annex) (2014) a0001.JPG" },
        { name: "Marginal de Luanda — promenade en bord de mer rénovée", wikipedia: "Luanda" },
      ],
    },
    {
      id: 2,
      name: "Chutes de Kalandula",
      region: "Province de Malanje",
      description:
        "Les chutes de Kalandula sont parmi les plus grandes d'Afrique par volume d'eau, tombant de 105 mètres de haut sur une largeur de 400 mètres. Entourées d'une forêt tropicale luxuriante, elles sont accessibles depuis Malanje via une route pittoresque à travers les collines angolaises. C'est l'un des sites naturels les plus impressionnants du continent.",
      wikipedia: "Kalandula_Falls",
      tags: ["Nature", "Chutes", "Randonnée", "Photographie"],
      mustSee: [
        { name: "Belvédère principal — vue panoramique sur les chutes", wikipedia: "Kalandula_Falls" },
        { name: "Piscines naturelles — baignade en aval des chutes", wikipedia: "Kalandula_Falls" },
        { name: "Forêt riveraine — biodiversité remarquable", wikipedia: "Kalandula_Falls" },
        { name: "Malanje — ville de départ avec marché local animé", wikipedia: "Malanje" },
      ],
    },
    {
      id: 3,
      name: "Parc National de Kissama",
      region: "Province de Bengo",
      description:
        "Le parc national de Kissama, à seulement 70 km au sud de Luanda, est le parc animalier le plus accessible d'Angola. Il abrite éléphants, buffles, zèbres et une riche avifaune grâce à un programme de réintroduction post-guerre soutenu par le Zimbabwe et l'Afrique du Sud. Le parc longe l'Atlantique, offrant des paysages uniques de savane côtière.",
      wikipedia: "Quiçama_National_Park",
      tags: ["Safari", "Faune", "Nature", "Éléphants"],
      mustSee: [
        { name: "Zone des éléphants — troupeaux réintroduits", wikipedia: "Quiçama_National_Park" },
        { name: "Rivière Kwanza — croisières et pêche", wikipedia: "Cuanza_River" },
        { name: "Côte atlantique du parc — paysages de savane littorale", wikipedia: "Quiçama_National_Park" },
        { name: "Camping Muanza — base de safari dans le parc", wikipedia: "Quiçama_National_Park" },
      ],
    },
    {
      id: 4,
      name: "Tunda Vala & Namibe",
      region: "Province de Huíla / Namibe",
      description:
        "La fissure de Tunda Vala est un escarpement spectaculaire de 1000 mètres de haut dominant les plaines du Namibe, offrant l'un des panoramas les plus saisissants d'Angola. Lubango, la ville voisine, possède une réplique du Christ Rédempteur de Rio. Plus au sud, le désert du Namibe rejoint le désert du Namib namibien, créant des paysages désertiques de toute beauté.",
      wikipedia: "Tundavala_Gap",
      tags: ["Panorama", "Désert", "Paysage", "Randonnée"],
      mustSee: [
        { name: "Fissure de Tunda Vala — escarpement vertigineux de 1000m", wikipedia: "Tundavala_Gap" },
        { name: "Cristo Rei de Lubango — réplique du monument de Rio", wikipedia: "Lubango" },
        { name: "Désert du Namibe — dunes et paysages désertiques", wikipedia: "File:Sossusvlei Dunes Namib.jpg" },
        { name: "Arco — formation rocheuse naturelle en bord de mer", wikipedia: "File:Namib Desert surface.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro:
      "L'Angola est une destination relativement chère pour l'Afrique subsaharienne, principalement en raison de son économie pétrolière qui gonfle les prix à Luanda. En dehors de la capitale, les coûts sont plus abordables. Le kwanza a connu une forte dévaluation, ce qui peut rendre certains achats avantageux pour les voyageurs payant en euros.",
    currency: "AOA",
    exchangeRate: "1€ ≈ 950 AOA",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Auberge / chambre simple", range: "20–40 €" },
          { label: "Hôtel milieu de gamme", range: "60–100 €" },
          { label: "Hôtel de luxe (Luanda)", range: "150–300 €" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Restaurant local (muamba de galinha)", range: "5–10 €" },
          { label: "Restaurant milieu de gamme", range: "15–30 €" },
          { label: "Supermarché / marché (repas)", range: "3–7 €" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Taxi en ville (Luanda)", range: "5–15 €" },
          { label: "Bus interurbain (ex. Luanda–Malanje)", range: "10–20 €" },
          { label: "Location voiture 4x4", range: "80–150 €/j" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Entrée parc Kissama", range: "10–20 €" },
          { label: "Safari guidé (demi-journée)", range: "40–80 €" },
          { label: "Excursion chutes de Kalandula", range: "30–60 €" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "60–90 €/j", desc: "Hébergement simple, restaurants locaux, transports en commun", color: "#22c55e" },
      { type: "Confort", daily: "130–200 €/j", desc: "Hôtel milieu de gamme, restaurant convenable, taxi et excursions", color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Luanda → Kissama → Malanje (Kalandula) → Lubango (Tunda Vala) → Namibe",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 200 – 1 600 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Luanda", amount: "500–700 €" },
            { label: "Hébergement (9 nuits)", amount: "180–360 €" },
            { label: "Transports locaux", amount: "120–200 €" },
            { label: "Nourriture + boissons", amount: "200–300 €" },
            { label: "Activités + entrées", amount: "150–250 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "2 800 – 4 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Luanda", amount: "600–800 €" },
            { label: "Hébergement (9 nuits)", amount: "540–900 €" },
            { label: "Location 4x4", amount: "700–1 200 €" },
            { label: "Nourriture + boissons", amount: "400–600 €" },
            { label: "Activités + guides", amount: "400–600 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "Vol direct TAAG depuis Paris-CDG (~8h). Connexions via Lisbonne (TAP), Addis-Abeba (Ethiopian) ou Doha (Qatar Airways)." },
    { icon: "🪪", label: "Visa", value: "Visa obligatoire. E-visa disponible en ligne avant le départ (environ 80€). Délai de traitement : 3–7 jours ouvrés." },
    { icon: "💰", label: "Monnaie", value: "Kwanza angolais (AOA). Espèces en dollars USD ou euros recommandées. Distributeurs disponibles à Luanda mais rares en province." },
    { icon: "🗣️", label: "Langue", value: "Portugais (langue officielle). Langues nationales : umbundu, kimbundu, kikongo. Peu d'anglais parlé." },
    { icon: "🔌", label: "Prise électrique", value: "Type C (européenne ronde) et Type F. Tension 220V. Coupures de courant fréquentes, prévoyez une batterie externe." },
    { icon: "💊", label: "Santé", value: "Vaccin fièvre jaune obligatoire. Paludisme présent toute l'année : chimioprophylaxie recommandée. Hépathite A/B, typhoïde conseillés. Eau en bouteille uniquement." },
    { icon: "⚠️", label: "Sécurité", value: "Situation générale stable. Luanda : vigilance contre le vol à la tire. Éviter les déplacements de nuit et les quartiers périphériques. Mines terrestres encore possibles sur certaines pistes rurales reculées." },
    { icon: "🚗", label: "Déplacements", value: "4x4 indispensable hors des grands axes. Pistes difficiles en saison des pluies. Des vols intérieurs desservent Huambo, Lubango, Malanje." },
  ],
};
