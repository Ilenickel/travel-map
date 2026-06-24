export const MONTENEGRO = {
  code: "MNE",
  numericId: 499,
  name: "Monténégro",
  emoji: "🇲🇪",
  capital: "Podgorica",
  language: "Monténégrin, Serbe, Albanais",
  currency: "Euro (EUR)",
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 45, budgetMid: 85,
    tripMin: 800, tripMid: 1800,
  },
  description:
    "Le Monténégro est la destination surprenante des Balkans : la baie de Kotor (UNESCO, fjord méditerranéen avec vieille ville médiévale vénitienne), les plages de Budva et Sveti Stefan, le parc national de Durmitor (UNESCO, canyons et lacs glaciaires), et Podgorica — une capitale abordable entre mer et montagne. Petit pays entre Croatie et Albanie, encore préservé des foules.",

  bestPeriods: [
    {
      months: "Juin – Septembre",
      label: "Été adriatique",
      color: "#22c55e",
      description:
        "Côte ensoleillée (24–28°C), mer chaude (26°C), idéal pour la plage et Kotor. Juillet-août très fréquentés sur la côte. Durmitor accessible tout l'été.",
      icon: "☀️",
    },
    {
      months: "Décembre – Mars",
      label: "Ski Durmitor",
      color: "#3b82f6",
      description:
        "Ski au Žabljak (station la plus haute des Balkans, 1 456m). Canyon de Tara enneigé. Températures -10°C en montagne, 8°C sur la côte.",
      icon: "⛷️",
    },
  ],

  weatherCities: [
    {
      id: "kotor",
      name: "Kotor",
      region: "Baie de Kotor (côte adriatique)",
      data: [
        { month: "Jan", temp:  7, rain: 190, icon: "🌧️" },
        { month: "Fév", temp:  8, rain: 150, icon: "⛅" },
        { month: "Mar", temp: 11, rain: 120, icon: "⛅" },
        { month: "Avr", temp: 14, rain: 100, icon: "⛅" },
        { month: "Mai", temp: 18, rain: 75,  icon: "⛅" },
        { month: "Jun", temp: 22, rain: 50,  icon: "☀️" },
        { month: "Jul", temp: 26, rain: 20,  icon: "☀️" },
        { month: "Aoû", temp: 26, rain: 25,  icon: "☀️" },
        { month: "Sep", temp: 22, rain: 80,  icon: "☀️" },
        { month: "Oct", temp: 17, rain: 130, icon: "⛅" },
        { month: "Nov", temp: 12, rain: 180, icon: "⛅" },
        { month: "Déc", temp:  8, rain: 210, icon: "🌧️" },
      ],
    },
    {
      id: "durmitor",
      name: "Žabljak (Durmitor)",
      region: "Montagnes du nord (1 456m)",
      data: [
        { month: "Jan", temp: -7, rain: 120, icon: "❄️" },
        { month: "Fév", temp: -6, rain: 110, icon: "❄️" },
        { month: "Mar", temp: -1, rain: 110, icon: "❄️" },
        { month: "Avr", temp:  5, rain: 115, icon: "⛅" },
        { month: "Mai", temp: 10, rain: 120, icon: "⛅" },
        { month: "Jun", temp: 14, rain: 120, icon: "⛅" },
        { month: "Jul", temp: 17, rain: 90,  icon: "☀️" },
        { month: "Aoû", temp: 17, rain: 85,  icon: "☀️" },
        { month: "Sep", temp: 12, rain: 110, icon: "⛅" },
        { month: "Oct", temp:  7, rain: 120, icon: "⛅" },
        { month: "Nov", temp:  1, rain: 130, icon: "⛅" },
        { month: "Déc", temp: -5, rain: 130, icon: "❄️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Baie de Kotor — Fjord UNESCO",
      region: "Côte adriatique",
      description:
        "La baie de Kotor (UNESCO) est le seul fjord de la Méditerranée : des parois de 1 800m plongeant dans une eau vert-bleu, avec la vieille ville vénitienne de Kotor (XIIe-XVIe s.) au pied des remparts. La montée aux remparts (1 350 marches) offre un panorama époustouflant. L'île Notre-Dame-des-Rochers (construite à la main par des pêcheurs depuis le XVe s.) est accessible en barque.",
      wikipedia: "Bay_of_Kotor",
      tags: ["Fjord", "UNESCO", "Vénitien", "Remparts", "Ville", "Histoire", "Architecture"],
      mustSee: [
        { name: "Vieille ville de Kotor et ses remparts vénitiens (UNESCO)", wikipedia: "Kotor" },
        { name: "Montée aux remparts (1 350 marches) — panorama sur le fjord", wikipedia: "File:Castillo_de_San_Juan,_Kotor,_Bahía_de_Kotor,_Montenegro,_2014-04-19,_DD_16.JPG" },
        { name: "Île Notre-Dame-des-Rochers — église baroque construite à la main", wikipedia: "File:Monasterio_de_San_Jorge,_Perast,_Bahía_de_Kotor,_Montenegro,_2014-04-19,_DD_21.JPG" },
        { name: "Château de Sveti Ivan (San Giovanni) — vue au coucher du soleil", wikipedia: "File:Kotor Bay 5253-5255mod.jpg" },
      ],
    },
    {
      id: 2,
      name: "Budva et Sveti Stefan — Côte dorée",
      region: "Riviera monténégrine",
      description:
        "Budva est la capitale balnéaire du Monténégro : vieille ville vénitienne sur un promontoire rocheux et plages de galets et de sable autour. Sveti Stefan est une ancienne île-village de pêcheurs transformée en hôtel de luxe Aman — sa silhouette sur la mer est l'image la plus emblématique du pays. La plage publique face à l'île est gratuite et magnifique.",
      wikipedia: "Budva",
      tags: ["Plage", "Vénitien", "Riviera", "Luxe", "Ville"],
      mustSee: [
        { name: "Vieille ville de Budva — remparts et ruelles vénitiennes", wikipedia: "File:Budva old town 1.jpg" },
        { name: "Vue sur Sveti Stefan depuis la route (l'image du Monténégro)", wikipedia: "Sveti_Stefan" },
        { name: "Plage Mogren — plage cachée sous les falaises de Budva", wikipedia: "Budva" },
        { name: "Plage de Jaz — grande plage de festival (EXIT de Budva en août)", wikipedia: "Jaz_Beach" },
      ],
    },
    {
      id: 3,
      name: "Parc national du Durmitor — Canyon et lacs",
      region: "Montagnes du nord (UNESCO)",
      description:
        "Le Durmitor (UNESCO) est le parc national le plus sauvage des Balkans occidentaux : le canyon de Tara (1 300m de profondeur — le plus profond d'Europe après le Grand Canyon) avec son rafting de classe mondiale, le lac Noir (Crno Jezero) au pied des sommets de 2 500m, et 18 glaciations ont sculpté 48 lacs de montagne.",
      wikipedia: "Durmitor",
      tags: ["Canyon", "UNESCO", "Rafting", "Lacs", "Randonnée", "Ski", "Nature"],
      mustSee: [
        { name: "Rafting dans le canyon de Tara (35km, niveau débutant possible)", wikipedia: "Tara_River_Canyon" },
        { name: "Canyon de Tara depuis le pont Đurđevića (150m au-dessus)", wikipedia: "Đurđevića_Tara_Bridge" },
        { name: "Lac Noir (Crno Jezero) — randonnée 3h autour du lac", wikipedia: "Durmitor" },
        { name: "Ski à Žabljak (station la plus haute des Balkans, jan–mars)", wikipedia: "Žabljak" },
      ],
    },
    {
      id: 4,
      name: "Ostrog — Monastère miraculeux",
      region: "Montagnes du centre",
      description:
        "Le monastère d'Ostrog est incrusté dans une falaise verticale à 900m d'altitude — l'un des lieux de pèlerinage les plus visités des Balkans, toutes religions confondues (chrétiens et musulmans). Fondé au XVIIe siècle par saint Basile d'Ostrog, ses fresques du XVIIe siècle dans la roche calcaire et son atmosphère spirituelle intense en font un lieu unique.",
      wikipedia: "Ostrog_Monastery",
      tags: ["Monastère", "Falaise", "Pèlerinage", "Spirituel", "Histoire", "Architecture"],
      mustSee: [
        { name: "Monastère supérieur d'Ostrog — dans la falaise à 900m", wikipedia: "File:Pogled na Ostrog izdaleka 2019.jpg" },
        { name: "Reliques de Saint Basile — vénérées par toutes religions", wikipedia: "File:Ostrog Monastery, Montenegro.jpg" },
        { name: "Vue sur la vallée de la Zeta depuis le monastère", wikipedia: "File:Montenegro - view down from Ostrog monastery.JPG" },
        { name: "Randonnée à pied depuis le monastère inférieur (45 min)", wikipedia: "File:Monasterio de Ostrog, Montenegro, 2014-04-14, DD 13.JPG" },
      ],
    },
  ],

  costOfLiving: {
    intro: "Le Monténégro utilise l'euro sans être dans la zone euro (unilateralement). Les prix sont similaires à la Croatie sur la côte en été, mais l'intérieur (Durmitor) est beaucoup moins cher. La saison touristique est courte — hors juillet-août, les prix baissent de 30–50%.",
    currency: "EUR",
    exchangeRate: "1€ = 1€ (euro utilisé unilatéralement)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Sobe / pension à Kotor ou Budva (hors saison)", price: "30–60 €", detail: "Charme local, souvent terrasse" },
          { label: "Hôtel 3★ côte monténégrine (haute saison)", price: "80–160 €", detail: "Vue mer, piscine en été" },
          { label: "Chalet Žabljak (Durmitor)", price: "30–60 €", detail: "Demi-pension disponible, nature sauvage" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Ćevapi + kajmak dans un restaurant local", price: "6–12 €", detail: "Cuisine balkanique typique" },
          { label: "Poisson grillé (brancin, lubina) sur la côte", price: "15–28 €", detail: "Pêche du matin, très frais" },
          { label: "Palačinke (crêpes) au dessert", price: "3–5 €", detail: "Incontournable dans les cafés" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Bus côtier Kotor–Budva (45 min)", price: "3–5 €", detail: "Fréquent, route panoramique sur la falaise" },
          { label: "Location de voiture (Podgorica, journée)", price: "30–60 €", detail: "Indispensable pour le Durmitor" },
          { label: "Ferry Kotor–Lepetane (traversée de la baie, 5 min)", price: "5 €", detail: "Évite 35km de route" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Rafting canyon de Tara (journée, équipement inclus)", price: "50–90 €", detail: "Transport + guide + déjeuner" },
          { label: "Kayak de mer dans la baie de Kotor (demi-journée)", price: "30–50 €", detail: "Visite de Perast et Notre-Dame-des-Rochers" },
          { label: "Forfait ski Žabljak (journée)", price: "25–35 €", detail: "Petite station, ambiance authentique" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "45–75 €/j", desc: "Pension + cuisine locale + bus", color: "#22c55e" },
      { type: "Confort", daily: "85–160 €/j", desc: "Hôtel 3★ + restaurants + activités", color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: "8 jours",
      route: "Kotor + Baie (3j) → Budva + Sveti Stefan (2j) → Durmitor / Canyon (3j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "800 – 1 400 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Podgorica (Ryanair, Montenegro Airlines)", amount: "100–250 €" },
            { label: "Hébergement (8 nuits)", amount: "280–530 €" },
            { label: "Voiture de location + bus", amount: "200–350 €" },
            { label: "Nourriture + vins locaux", amount: "200–350 €" },
            { label: "Rafting + kayak + activités", amount: "150–300 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "1 800 – 3 200 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Podgorica", amount: "150–350 €" },
            { label: "Hôtels 3★ (8 nuits)", amount: "700–1 350 €" },
            { label: "Voiture de location (8 jours)", amount: "280–450 €" },
            { label: "Nourriture & restaurants", amount: "400–700 €" },
            { label: "Excursions + rafting + ski", amount: "300–550 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~2h30 (Ryanair direct vers Podgorica ou Tivat en saison, via Rome ou Ljubljana hors saison)." },
    { icon: "🪪", label: "Visa",              value: "Aucun visa pour les Français (90 jours sans visa). Passeport ou carte d'identité acceptés. Pas encore dans l'UE." },
    { icon: "💰", label: "Monnaie",           value: "Euro (€, utilisé depuis 2002 sans être dans la zone euro). Carte bancaire bien acceptée sur la côte. Espèces indispensables dans l'intérieur." },
    { icon: "🗣️", label: "Langue",            value: "Monténégrin (très proche du serbe). Anglais parlé sur la côte. Moins courant dans les montagnes." },
    { icon: "🔌", label: "Prise électrique",  value: "Type C/F (européen) — 230V. Aucun adaptateur nécessaire." },
    { icon: "💊", label: "Santé",             value: "Aucune précaution particulière. Pas de CEAM (hors UE) — assurance voyage recommandée." },
    { icon: "🚗", label: "Routes",            value: "Les routes de montagne (Durmitor, Lovćen) sont spectaculaires mais sinueuses. La route Kotor–Lovćen (25 virages en épingle) est à couper le souffle. Préférer une voiture à transmission automatique." },
    { icon: "🏖️", label: "Fréquentation",    value: "La côte est saturée en juillet-août (surtout Budva). Venir en juin ou septembre pour moitié moins de monde. Le Durmitor est agréable même au cœur de l'été." },
  ],
};
