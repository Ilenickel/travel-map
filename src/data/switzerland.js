export const SWITZERLAND = {
  code: "CHE",
  numericId: 756,
  name: "Suisse",
  emoji: "🇨🇭",
  capital: "Berne",
  language: "Allemand, Français, Italien, Romanche",
  currency: "Franc suisse (CHF)",
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 130,
    budgetMid: 220,
    tripMin: 1500,
    tripMid: 3000,
  },
  description:
    "La Suisse est l'une des destinations les plus spectaculaires d'Europe, avec ses Alpes grandioses, ses lacs aux eaux limpides et ses villes soignées d'une propreté exemplaire. Pays quadrilingue au carrefour de l'Europe, elle fascine autant par ses paysages — le Cervin, la Jungfrau, le lac Léman — que par sa tradition horlogère, sa gastronomie (fromages, chocolats) et son infrastructure touristique d'excellence. Zurich, Genève, Berne et Lucerne offrent chacune une expérience urbaine unique.",
  bestPeriods: [
    {
      months: "Jun – Sep",
      label: "Idéal (montagne)",
      color: "#22c55e",
      description:
        "Randonnées en haute montagne, fleurs alpines, lacs à leur plus beau. Accès à toutes les attractions ouvertes.",
      icon: "☀️",
    },
    {
      months: "Déc – Mar",
      label: "Ski & hiver",
      color: "#22c55e",
      description:
        "Stations de ski parmi les meilleures du monde : Zermatt, Verbier, Davos, St-Moritz.",
      icon: "⛷️",
    },
    {
      months: "Avr – Mai",
      label: "Printemps",
      color: "#f59e0b",
      description:
        "Villes magnifiques, prix plus bas, mais montagne encore partiellement enneigée.",
      icon: "🌸",
    },
    {
      months: "Oct – Nov",
      label: "Automne",
      color: "#f59e0b",
      description:
        "Couleurs automnales sur les lacs, moins de touristes, certains téléphériques fermés.",
      icon: "🍂",
    },
  ],
  weatherCities: [
    {
      id: "zurich",
      name: "Zurich",
      region: "Plateau suisse — climat continental tempéré",
      data: [
        { month: "Jan", temp: 2, rain: 70, icon: "❄️" },
        { month: "Fév", temp: 3, rain: 65, icon: "❄️" },
        { month: "Mar", temp: 8, rain: 75, icon: "❄️" },
        { month: "Avr", temp: 12, rain: 85, icon: "⛅" },
        { month: "Mai", temp: 16, rain: 100, icon: "☀️" },
        { month: "Jun", temp: 19, rain: 115, icon: "☀️" },
        { month: "Jul", temp: 21, rain: 120, icon: "☀️" },
        { month: "Aoû", temp: 21, rain: 120, icon: "☀️" },
        { month: "Sep", temp: 17, rain: 95, icon: "☀️" },
        { month: "Oct", temp: 12, rain: 80, icon: "⛅" },
        { month: "Nov", temp: 6, rain: 75, icon: "❄️" },
        { month: "Déc", temp: 2, rain: 70, icon: "❄️" },
      ],
    },
    {
      id: "zermatt",
      name: "Zermatt",
      region: "Valais — station alpine, précipitations élevées",
      data: [
        { month: "Jan", temp: -3, rain: 60, icon: "❄️" },
        { month: "Fév", temp: -2, rain: 55, icon: "❄️" },
        { month: "Mar", temp: 2, rain: 65, icon: "❄️" },
        { month: "Avr", temp: 6, rain: 70, icon: "❄️" },
        { month: "Mai", temp: 10, rain: 80, icon: "⛅" },
        { month: "Jun", temp: 14, rain: 100, icon: "⛅" },
        { month: "Jul", temp: 17, rain: 110, icon: "☀️" },
        { month: "Aoû", temp: 17, rain: 120, icon: "☀️" },
        { month: "Sep", temp: 13, rain: 90, icon: "⛅" },
        { month: "Oct", temp: 8, rain: 75, icon: "❄️" },
        { month: "Nov", temp: 2, rain: 65, icon: "❄️" },
        { month: "Déc", temp: -2, rain: 65, icon: "❄️" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: "Zermatt & le Cervin",
      region: "Valais",
      description:
        "Zermatt est une station de montagne sans voitures aux pieds du Cervin (4 478 m), sommet emblématique des Alpes et symbole de la Suisse. L'accès se fait uniquement en train électrique depuis Täsch, ce qui préserve l'atmosphère unique de ce village alpin. Été comme hiver, randonnées, ski et photographies du Cervin à la lumière dorée du couchant font l'essence de cette expérience inoubliable.",
      wikipedia: "Zermatt",
      tags: ["Alpes", "Ski", "Randonnée", "Photographie", "Nature"],
      mustSee: [
        {
          name: "Le Cervin — ascension ou observation depuis Schwarzsee ou Gornergrat",
          wikipedia: "Matterhorn",
        },
        {
          name: "Gornergrat — crête à 3 089 m avec panorama sur 29 sommets de 4 000 m",
          wikipedia: "Gornergrat",
        },
        {
          name: "Glacier Paradise (Klein Matterhorn) — point le plus haut d'Europe accessible en téléphérique",
          wikipedia: "Klein_Matterhorn",
        },
        {
          name: "Bahnhofstrasse de Zermatt — rue principale animée avec boutiques et restaurants",
          wikipedia: "File:Zermatt 20190717 202516.jpg",
        },
      ],
    },
    {
      id: 2,
      name: "Interlaken & Jungfrau",
      region: "Oberland bernois",
      description:
        "Interlaken est le point de départ idéal pour explorer l'Oberland bernois, coincé entre le lac de Thoune et le lac de Brienz. La Jungfrau (4 158 m) est accessible depuis Grindelwald ou Wengen par le célèbre chemin de fer de la Jungfrau, qui grimpe jusqu'au « toit de l'Europe » à 3 454 m. Les cascades de Giessbach, les gorges de Rosenlaui et les villages de Grindelwald et Mürren complètent ce tableau alpin exceptionnel.",
      wikipedia: "Interlaken",
      tags: ["Alpes", "Aventure", "Nature", "Randonnée", "Sports extrêmes", "Ski"],
      mustSee: [
        {
          name: "Jungfraujoch — « toit de l'Europe » à 3 454 m en train à crémaillère",
          wikipedia: "Jungfraujoch",
        },
        {
          name: "Grindelwald — village alpin avec vue sur l'Eiger (3 970 m)",
          wikipedia: "Grindelwald",
        },
        {
          name: "Cascades de Lauterbrunnen — 72 cascades dont la Staubbachfall",
          wikipedia: "Lauterbrunnen",
        },
        {
          name: "Schynige Platte — jardin alpin botanique à 1 967 m d'altitude",
          wikipedia: "Schynige_Platte",
        },
      ],
    },
    {
      id: 3,
      name: "Lucerne & Lac des Quatre-Cantons",
      region: "Lucerne",
      description:
        "Lucerne est l'une des villes les plus pittoresques de Suisse, avec son célèbre Pont de la Chapelle, sa vieille ville médiévale préservée et le majestueux Rigi en arrière-plan. Le lac des Quatre-Cantons offre des croisières panoramiques vers des sites chargés d'histoire comme le Rütli, prairie où fut fondée la Confédération suisse. Les monts Pilate et Rigi, accessibles en bateau et en crémaillère, offrent des vues à 360° sur les Alpes.",
      wikipedia: "Lucerne",
      tags: ["Histoire", "Nature", "Lac", "Architecture", "Croisière", "Ville"],
      mustSee: [
        {
          name: "Pont de la Chapelle — pont en bois du XIVe siècle, symbole de Lucerne",
          wikipedia: "File:Luzern Kapellbruecke.jpg",
        },
        {
          name: "Mont Pilate — « dragon-montagne » à 2 132 m, accès en gondole et crémaillère",
          wikipedia: "File:20201019-1545-pilatus.jpg",
        },
        {
          name: "Musée des Transports — plus visité de Suisse, histoire de la mobilité",
          wikipedia: "File:Train-swiss-museum.jpg",
        },
        {
          name: "Rigi — « reine des montagnes » avec lever de soleil spectaculaire",
          wikipedia: "File:CH.ZG.Zug 2005-03-17 Rigi.jpg",
        },
      ],
    },
    {
      id: 4,
      name: "Genève & Lac Léman",
      region: "Genève / Vaud",
      description:
        "Genève, capitale mondiale de la diplomatie, est une ville cosmopolite au bord du lac Léman avec en toile de fond les sommets du Mont-Blanc. Le Jet d'Eau, icône de la ville, propulse 500 litres d'eau à 140 mètres de hauteur. Le tour du lac Léman permet de découvrir Lausanne, Montreux (festival de jazz), le Château de Chillon et les vignobles en terrasses du Lavaux classés à l'UNESCO.",
      wikipedia: "Geneva",
      tags: ["Diplomatie", "Lac", "UNESCO", "Vin", "Culture", "Ville", "Gastronomie"],
      mustSee: [
        {
          name: "Jet d'Eau — geyser lacustre de 140 m visible de toute la ville",
          wikipedia: "Jet_d'Eau",
        },
        {
          name: "Château de Chillon — château médiéval lacustre près de Montreux",
          wikipedia: "Chillon_Castle",
        },
        {
          name: "Vignoble du Lavaux — terrasses viticoles UNESCO sur les rives du lac",
          wikipedia: "Lavaux",
        },
        {
          name: "Vieille-Ville de Genève & Cathédrale Saint-Pierre — cœur historique de la Réforme",
          wikipedia: "File:Geneve_maison_Turrettini_2011-09-09_12_52_26_PICT4523.JPG",
        },
      ],
    },
  ],
  costOfLiving: {
    intro:
      "La Suisse est l'une des destinations les plus chères du monde. Les prix y sont 60 à 80 % plus élevés qu'en France. Le franc suisse fort amplifie le coût pour les voyageurs européens. Cependant, la qualité des prestations et la fiabilité des transports justifient largement l'investissement.",
    currency: "CHF",
    exchangeRate: "1€ ≈ 0,93 CHF",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          {
            label: "Auberge de jeunesse (dortoir)",
            price: "40–60 €",
            detail: "Les moins chères de Suisse restent onéreuses pour le budget",
          },
          {
            label: "Hôtel 3 étoiles",
            price: "130–200 €",
            detail: "Chambre double à Zurich ou Genève, moins cher en montagne hors saison",
          },
          {
            label: "Hôtel 4 étoiles",
            price: "220–400 €",
            detail: "Hôtels de montagne ou bord de lac avec vue panoramique",
          },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          {
            label: "Supermarché / Coop / Migros",
            price: "8–15 €",
            detail: "Faire ses courses reste l'option la plus économique",
          },
          {
            label: "Restaurant midi (menu du jour)",
            price: "18–28 €",
            detail: "Menu Tagesmenü très répandu, meilleur rapport Q/P",
          },
          {
            label: "Dîner au restaurant",
            price: "35–65 €",
            detail: "Fondue, raclette, rösti — spécialités locales incontournables",
          },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          {
            label: "Swiss Travel Pass (3 jours)",
            price: "230–260 €",
            detail: "Accès illimité trains, bus, bateaux et transports urbains",
          },
          {
            label: "Téléphérique Jungfraujoch",
            price: "220–230 €",
            detail: "Aller-retour depuis Interlaken, coûteux mais unique",
          },
          {
            label: "Train IC Zurich–Genève",
            price: "50–80 €",
            detail: "En 2h40, réductions avec demi-tarif SBB",
          },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          {
            label: "Musée national de Zurich",
            price: "10 €",
            detail: "Histoire suisse sur 6 000 ans, inclus dans Swiss Travel Pass",
          },
          {
            label: "Croisière lac Léman ou lac des 4-Cantons",
            price: "25–40 €",
            detail: "Incluse dans le Swiss Travel Pass",
          },
          {
            label: "Château de Chillon",
            price: "14 €",
            detail: "Visite autonome en 1h30 à 2h",
          },
        ],
      },
    ],
    budgetSummary: [
      {
        type: "Routard",
        daily: "110–140 €/j",
        desc: "Auberge, supermarché et un repas au restaurant, Swiss Travel Pass",
        color: "#22c55e",
      },
      {
        type: "Confort",
        daily: "200–280 €/j",
        desc: "Hôtel 3 étoiles, restaurants mid-range, excursions en montagne",
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: "8 jours",
      route: "Zurich (2j) → Interlaken/Jungfrau (3j) → Zermatt (2j) → Genève (1j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "1 500 – 1 900 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Zurich", amount: "80–150 €" },
            { label: "Hébergement (7 nuits)", amount: "350–490 €" },
            { label: "Swiss Travel Pass (8j)", amount: "290–310 €" },
            { label: "Nourriture + boissons", amount: "560–680 €" },
            { label: "Activités + téléphériques", amount: "200–280 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "3 000 – 4 200 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Zurich", amount: "100–200 €" },
            { label: "Hébergement (7 nuits)", amount: "1 200–1 700 €" },
            { label: "Swiss Travel Pass (8j)", amount: "290–310 €" },
            { label: "Nourriture + boissons", amount: "1 000–1 400 €" },
            { label: "Activités + Jungfraujoch", amount: "400–600 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    {
      icon: "✈️",
      label: "Vol depuis Paris",
      value: "Paris–Zurich : 1h30 de vol. Paris–Genève : 1h. Aussi accessible en TGV Paris–Genève en 3h20.",
    },
    {
      icon: "🪪",
      label: "Visa",
      value: "La Suisse fait partie de l'espace Schengen. Pas de visa pour les citoyens UE. Carte d'identité suffisante.",
    },
    {
      icon: "💰",
      label: "Monnaie",
      value: "Franc suisse (CHF). Les euros sont parfois acceptés à un taux défavorable. Privilégier le CHF.",
    },
    {
      icon: "🗣️",
      label: "Langue",
      value: "Allemand en Suisse centrale, français en Suisse romande (Genève, Lausanne), italien au Tessin.",
    },
    {
      icon: "🔌",
      label: "Prise électrique",
      value: "Type J (spécifique à la Suisse, 3 broches). Adaptateur indispensable depuis la France.",
    },
    {
      icon: "💊",
      label: "Santé",
      value: "Soins de très haute qualité mais très coûteux. Assurance voyage avec rapatriement indispensable.",
    },
    {
      icon: "🚆",
      label: "Swiss Travel Pass",
      value: "Fortement recommandé pour les séjours de plus de 3 jours. Inclut trains, bateaux, bus et accès aux musées.",
    },
    {
      icon: "🏔️",
      label: "Altitude",
      value: "Certaines excursions dépassent 3 000 m. Prévoir des vêtements chauds même en été.",
    },
  ],
};
