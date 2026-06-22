export const ANDORRA = {
  code: "AND",
  numericId: 20,
  name: "Andorre",
  emoji: "🇦🇩",
  capital: "Andorre-la-Vieille",
  language: "Catalan",
  currency: "Euro (EUR)",
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 70, budgetMid: 130,
    tripMin: 900, tripMid: 1700,
  },
  description:
    "Andorre est une principauté co-dirigée par la France et l'Espagne, nichée dans les Pyrénées à plus de 1 000 mètres d'altitude. Malgré sa superficie de 468 km², elle offre un domaine skiable parmi les plus grands de la péninsule ibérique avec Grandvalira, des randonnées estivales spectaculaires et un statut de paradis du shopping hors taxes qui attire des millions de visiteurs chaque année. Des églises romanes du XIe siècle témoignent d'un riche patrimoine médiéval.",

  bestPeriods: [
    {
      months: "Décembre – Mars",
      label: "Saison ski",
      color: "#22c55e",
      description:
        "La haute saison pour le ski avec le domaine Grandvalira et ses 210 km de pistes. Enneigement garanti à haute altitude, villages animés, shopping détaxé et ambiance montagne incomparable dans les Pyrénées.",
      icon: "⛷️",
    },
    {
      months: "Juin – Septembre",
      label: "Randonnée estivale",
      color: "#f59e0b",
      description:
        "L'été dévoile les sommets pyrénéens, les lacs de montagne et des sentiers de grande randonnée à couper le souffle. Le Cirque de Tristaina, les lacs del Pessons et les crêtes frontalières offrent des panoramas exceptionnels.",
      icon: "🥾",
    },
  ],
  weatherCities: [
    {
      id: "andorra_la_vella",
      name: "Andorre-la-Vieille",
      region: "Parròquia d'Andorra la Vella",
      data: [
        { month: "Jan", temp: -1, rain: 60, icon: "❄️" },
        { month: "Fév", temp: 1, rain: 55, icon: "❄️" },
        { month: "Mar", temp: 5, rain: 65, icon: "❄️" },
        { month: "Avr", temp: 9, rain: 80, icon: "⛅" },
        { month: "Mai", temp: 13, rain: 90, icon: "⛅" },
        { month: "Jun", temp: 17, rain: 70, icon: "☀️" },
        { month: "Jul", temp: 20, rain: 55, icon: "☀️" },
        { month: "Aoû", temp: 20, rain: 60, icon: "☀️" },
        { month: "Sep", temp: 16, rain: 75, icon: "☀️" },
        { month: "Oct", temp: 11, rain: 80, icon: "⛅" },
        { month: "Nov", temp: 5, rain: 70, icon: "❄️" },
        { month: "Déc", temp: 1, rain: 65, icon: "❄️" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: "Grandvalira",
      region: "Parròquies d'Encamp et Canillo",
      description:
        "Grandvalira est le plus grand domaine skiable de la péninsule ibérique avec 210 km de pistes réparties sur 6 paroisses et 2 stations (Pas de la Casa et Soldeu). Les pistes bien entretenues, les ESF locales et les nombreux restaurants d'altitude en font une destination ski prisée des familles françaises et espagnoles. L'altitude garantit un bon enneigement de décembre à avril.",
      wikipedia: "File:Grandvalira ski resort, Andorra5.jpg",
      tags: ["Ski", "Sport d'hiver", "Montagne", "Stations"],
      mustSee: [
        { name: "Soldeu — station principale avec pistes débutants et intermédiaires", wikipedia: "Soldeu" },
        { name: "Pas de la Casa — station frontalière avec shopping et nightlife animé", wikipedia: "File:Pas de la Casa (1).jpg" },
        { name: "Grau Roig — secteur tranquille avec belle vue sur les pistes", wikipedia: "Grau_Roig" },
        { name: "Piste géante Avet — slalom géant de Coupe du Monde à Soldeu", wikipedia: "File:Grandvalira ski resort, Andorra6.jpg" },
      ],
    },
    {
      id: 2,
      name: "Andorre-la-Vieille",
      region: "Parròquia d'Andorra la Vella",
      description:
        "La capitale d'Andorre est la plus haute capitale d'Europe à 1 023 m d'altitude. Malgré sa petite taille, elle offre un contraste saisissant entre sa vieille ville médiévale autour de la Casa de la Vall et son centre commercial moderne réputé pour le shopping hors taxes. L'Avinguda Meritxell concentre les grandes marques à des prix défiant toute concurrence.",
      wikipedia: "Andorra_la_Vella",
      tags: ["Capitale", "Shopping", "Médiéval", "Duty-free"],
      mustSee: [
        { name: "Casa de la Vall — Parlement historique du XVIe siècle, monument symbolique", wikipedia: "Casa_de_la_Vall" },
        { name: "Église Sant Esteve — église romane au cœur de la vieille ville", wikipedia: "File:Església de Sant Esteve de Bixessarri - 2.jpg" },
        { name: "Caldea — complexe thermal et spa pyrénéen, plus grand spa d'Europe du Sud", wikipedia: "Caldea" },
        { name: "Avinguda Meritxell — boulevard des shopping duty-free", wikipedia: "File:Andorra la vella felul.jpg" },
      ],
    },
    {
      id: 3,
      name: "Patrimoine roman",
      region: "Parròquies de La Massana et Ordino",
      description:
        "Andorre conserve un remarquable patrimoine d'églises romanes du XIe–XIIIe siècles, témoignages de sa fondation médiévale. Sant Joan de Caselles, Sant Climent de Pal et Sant Martí de la Cortinada ornées de fresques médiévales authentiques sont accessibles facilement. Le musée national de l'art roman de Catalogne (MNAC) à Barcelone conserve les plus belles œuvres déplacées.",
      wikipedia: "File:QUERALBS - St. Jaume.JPG",
      tags: ["Roman", "Patrimoine", "Médiéval", "Fresques"],
      mustSee: [
        { name: "Sant Joan de Caselles — tour roman du XIIe siècle avec retable polychrome", wikipedia: "Sant_Joan_de_Caselles" },
        { name: "Sant Climent de Pal — église romane avec clocher carré typique", wikipedia: "File:Sant Climent de Pal 2017.jpg" },
        { name: "Sant Martí de la Cortinada — fresques romanes conservées in situ", wikipedia: "File:2013._San_Martí_de_La_Cortinada._Andorra_37.jpg" },
        { name: "Musée national de l'Andorre à Ordino — histoire et culture andorrane", wikipedia: "Ordino" },
      ],
    },
    {
      id: 4,
      name: "Randonnées et lacs de montagne",
      region: "Tout le pays",
      description:
        "En été, Andorre se transforme en paradis de la randonnée avec plus de 600 km de sentiers balisés sillonnant les Pyrénées. Le Cirque de Tristaina avec ses trois lacs glaciaires, les lacs del Pessons en cirque grandiose, et le pic de Coma Pedrosa (2 943 m, point culminant) offrent des expériences inoubliables à des niveaux de difficulté variés.",
      wikipedia: "File:Andorra l Vella-20100128-RM-165853.jpg",
      tags: ["Randonnée", "Lacs", "Montagne", "Nature"],
      mustSee: [
        { name: "Cirque de Tristaina — trois lacs glaciaires à 2 300 m, randonnée facile", wikipedia: "File:Tristaina 50 Cirque.jpg" },
        { name: "Lacs del Pessons — cirque de 8 lacs à 2 400 m", wikipedia: "File:Circ dels Pessons (Encamp) - 12.jpg" },
        { name: "Pic de Coma Pedrosa — point culminant d'Andorre (2 943 m)", wikipedia: "Coma_Pedrosa" },
        { name: "Vallée d'Ordino — village typique andorran avec musée de la forêt", wikipedia: "Ordino" },
      ],
    },
  ],
  costOfLiving: {
    intro:
      "Andorre est connue pour son shopping hors taxes sur l'alcool, le tabac, l'électronique et les parfums. Les hébergements sont abordables hors saison ski. En hiver, les stations pratiquent des tarifs élevés. La restauration reste dans des prix raisonnables pour des Pyrénées.",
    currency: "EUR",
    exchangeRate: "1€ = 1€",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Auberge / gîte de montagne (dortoir)", price: "20–35 €", detail: "Refuges et auberges idéaux pour les randonneurs" },
          { label: "Hôtel 2–3 étoiles hors saison", price: "55–90 €", detail: "Bonne offre à Andorre-la-Vieille et dans les paroisses" },
          { label: "Hôtel ski en haute saison (décembre–mars)", price: "100–180 €", detail: "Prix plus élevés en période de neige et week-ends" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Boulangerie ou snack", price: "5–10 €", detail: "Croissants, sandwichs et coca andorrane typiques" },
          { label: "Restaurant montagne, menu midi", price: "12–20 €", detail: "Escudella (pot-au-feu catalan), trinxat, grillades de montagne" },
          { label: "Restaurant dîner ou chalet d'altitude", price: "22–40 €", detail: "Cuisine pyrénéenne, raclette, fondues et charcuteries locales" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Bus depuis Toulouse ou Barcelone", price: "10–25 €", detail: "Navettes régulières depuis les gares TGV les plus proches" },
          { label: "Bus national andorran (L1–L5)", price: "1–3 €", detail: "Réseau couvrant toutes les paroisses de la principauté" },
          { label: "Forfait ski Grandvalira (journée)", price: "39–50 €", detail: "Tarifs réduits en réservant à l'avance en ligne" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Caldea (spa thermal)", price: "35–55 €", detail: "3h d'accès aux bassins thermaux et jacuzzis extérieurs" },
          { label: "Location vélo de montagne (VTT)", price: "25–40 €", detail: "VTT électrique disponible pour les pistes estivales" },
          { label: "Visite distillerie ou cave à vins", price: "8–15 €", detail: "Dégustation de whisky ou vins des Pyrénées" },
        ],
      },
    ],
    budgetSummary: [
      {
        type: "Routard",
        daily: "70–100 €/j",
        desc: "Auberge ou refuge, repas simples, bus national, randonnées gratuites",
        color: "#22c55e",
      },
      {
        type: "Confort",
        daily: "130–190 €/j",
        desc: "Hôtel confort, restaurants de montagne, forfait ski ou spa, shopping",
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: "5 jours",
      route: "Andorre-la-Vieille – Grandvalira – Ordino – Randonnées",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "450 – 650 €",
          includesFlights: true,
          breakdown: [
            { label: "Transport A/R depuis Toulouse ou Barcelone", amount: "30–70 €" },
            { label: "Hébergement (4 nuits)", amount: "80–140 €" },
            { label: "Transports locaux", amount: "15–25 €" },
            { label: "Nourriture + boissons", amount: "160–240 €" },
            { label: "Activités (ski ou randonnée + spa)", amount: "80–140 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "900 – 1 300 €",
          includesFlights: true,
          breakdown: [
            { label: "Transport A/R depuis Paris en voiture ou avion Toulouse", amount: "80–180 €" },
            { label: "Hébergement (4 nuits)", amount: "320–480 €" },
            { label: "Transports locaux", amount: "20–40 €" },
            { label: "Nourriture + boissons", amount: "280–400 €" },
            { label: "Activités (forfait ski + spa Caldea)", amount: "200–280 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris", value: "Pas d'aéroport — accès par route depuis Toulouse (3h) ou Barcelone (3h)" },
    { icon: "🪪", label: "Visa", value: "Aucun visa requis — non membre de l'UE mais accord de libre circulation avec France et Espagne" },
    { icon: "💰", label: "Monnaie", value: "Euro (€) — TVA très réduite, paradis du shopping hors taxes" },
    { icon: "🗣️", label: "Langue", value: "Catalan (officiel) — espagnol et français très largement parlés" },
    { icon: "🔌", label: "Prise électrique", value: "Type C/F (identique à la France) — aucun adaptateur nécessaire" },
    { icon: "💊", label: "Santé", value: "Carte européenne d'assurance maladie non valable — assurance voyage recommandée" },
    { icon: "🛒", label: "Shopping", value: "Alcool, tabac, parfums, électronique et vêtements à prix très réduits hors taxes" },
    { icon: "⛷️", label: "Ski", value: "Grandvalira : 210 km de pistes, 1 900–2 640 m d'altitude, parmi les plus abordables des Pyrénées" },
  ],
};
