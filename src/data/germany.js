export const GERMANY = {
  code: "DEU",
  numericId: 276,
  name: { fr: "Allemagne", en: "Germany" },
  emoji: "🇩🇪",
  capital: { fr: "Berlin", en: "Berlin" },
  language: { fr: "Allemand", en: "German" },
  currency: { fr: "Euro (EUR)", en: "Euro (EUR)" },
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 70,
    budgetMid: 140,
    tripMin: 950,
    tripMid: 1900,
  },
  description: {
    fr: "L'Allemagne est un pays d'une grande diversité culturelle et paysagère, alliant métropoles dynamiques, forêts profondes, châteaux féeriques et villages médiévaux préservés. Berlin, capitale réunifiée, incarne à elle seule l'histoire tourmentée et le renouveau créatif du XXe siècle. La Bavière, avec ses Alpes imposantes, ses bières légendaires et son architecture baroque, offre un contraste saisissant avec le nord industriel et la vallée du Rhin.",
    en: "Germany is a country of remarkable cultural and scenic diversity, blending dynamic metropolises, deep forests, fairy-tale castles and preserved medieval villages. Berlin, the reunified capital, embodies on its own the turbulent history and creative renewal of the 20th century. Bavaria, with its imposing Alps, legendary beers and baroque architecture, offers a striking contrast with the industrial north and the Rhine valley.",
  },
  bestPeriods: [
    {
      months: { fr: "Mai – Sep", en: "May – Sep" },
      label: { fr: "Idéal", en: "Ideal" },
      color: "#22c55e",
      description: {
        fr: "Temps ensoleillé, jardins en fleurs, festivals de plein air et biergärten animés.",
        en: "Sunny weather, gardens in bloom, outdoor festivals and lively beer gardens.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Oct", en: "Oct" },
      label: { fr: "Oktoberfest", en: "Oktoberfest" },
      color: "#22c55e",
      description: {
        fr: "Munich accueille la célèbre fête de la bière, forêts aux couleurs automnales splendides.",
        en: "Munich hosts the famous beer festival, and forests display splendid autumn colours.",
      },
      icon: "🍺",
    },
    {
      months: { fr: "Nov – Mar", en: "Nov – Mar" },
      label: { fr: "Marchés de Noël", en: "Christmas markets" },
      color: "#f59e0b",
      description: {
        fr: "Les marchés de Noël d'Allemagne sont parmi les plus beaux d'Europe, mais le froid est vif.",
        en: "Germany's Christmas markets are among the finest in Europe, but the cold is sharp.",
      },
      icon: "🎄",
    },
  ],
  weatherCities: [
    {
      id: "berlin",
      name: "Berlin",
      region: { fr: "Nord-Est — climat continental tempéré", en: "Northeast — temperate continental climate" },
      data: [
        { month: "Jan", temp: 1, rain: 45, icon: "❄️" },
        { month: "Fév", temp: 2, rain: 40, icon: "❄️" },
        { month: "Mar", temp: 6, rain: 45, icon: "❄️" },
        { month: "Avr", temp: 11, rain: 40, icon: "⛅" },
        { month: "Mai", temp: 16, rain: 55, icon: "☀️" },
        { month: "Jun", temp: 19, rain: 65, icon: "☀️" },
        { month: "Jul", temp: 21, rain: 55, icon: "☀️" },
        { month: "Aoû", temp: 21, rain: 60, icon: "☀️" },
        { month: "Sep", temp: 17, rain: 45, icon: "☀️" },
        { month: "Oct", temp: 12, rain: 40, icon: "⛅" },
        { month: "Nov", temp: 6, rain: 45, icon: "❄️" },
        { month: "Déc", temp: 2, rain: 50, icon: "❄️" },
      ],
    },
    {
      id: "hamburg",
      name: "Hamburg",
      region: { fr: "Nord — climat océanique tempéré", en: "North — temperate oceanic climate" },
      data: [
        { month: "Jan", temp:  2, rain: 65,  icon: "❄️" },
        { month: "Fév", temp:  3, rain: 55,  icon: "❄️" },
        { month: "Mar", temp:  6, rain: 65,  icon: "⛅" },
        { month: "Avr", temp: 10, rain: 55,  icon: "⛅" },
        { month: "Mai", temp: 15, rain: 60,  icon: "☀️" },
        { month: "Jun", temp: 18, rain: 75,  icon: "☀️" },
        { month: "Jul", temp: 20, rain: 80,  icon: "☀️" },
        { month: "Aoû", temp: 20, rain: 80,  icon: "☀️" },
        { month: "Sep", temp: 16, rain: 75,  icon: "☀️" },
        { month: "Oct", temp: 11, rain: 70,  icon: "⛅" },
        { month: "Nov", temp:  6, rain: 75,  icon: "⛅" },
        { month: "Déc", temp:  3, rain: 70,  icon: "❄️" },
      ],
    },
    {
      id: "munich",
      name: "Munich",
      region: { fr: "Bavière — climat continental, été plus chaud", en: "Bavaria — continental climate, warmer summer" },
      data: [
        { month: "Jan", temp: 0, rain: 55, icon: "❄️" },
        { month: "Fév", temp: 2, rain: 50, icon: "❄️" },
        { month: "Mar", temp: 7, rain: 60, icon: "❄️" },
        { month: "Avr", temp: 12, rain: 70, icon: "⛅" },
        { month: "Mai", temp: 16, rain: 95, icon: "☀️" },
        { month: "Jun", temp: 20, rain: 120, icon: "☀️" },
        { month: "Jul", temp: 22, rain: 115, icon: "☀️" },
        { month: "Aoû", temp: 22, rain: 110, icon: "☀️" },
        { month: "Sep", temp: 18, rain: 85, icon: "☀️" },
        { month: "Oct", temp: 12, rain: 65, icon: "⛅" },
        { month: "Nov", temp: 5, rain: 60, icon: "❄️" },
        { month: "Déc", temp: 1, rain: 60, icon: "❄️" },
      ],
    },
  ],
  destinations: [
    {
      id: 1,
      name: "Berlin",
      region: { fr: "Brandebourg", en: "Brandenburg" },
      description: {
        fr: "Berlin est une ville en perpétuelle réinvention, marquée par les cicatrices de l'Histoire et animée d'une créativité artistique unique en Europe. Le vestige du Mur, le Reichstag, l'île aux Musées et le mémorial de l'Holocauste témoignent d'un passé dense et complexe. La capitale allemande est aussi réputée pour sa scène musicale underground, ses galeries d'art contemporain et sa vie nocturne légendaire.",
        en: "Berlin is a city in constant reinvention, marked by the scars of history and animated by an artistic creativity unique in Europe. The remnants of the Wall, the Reichstag, Museum Island and the Holocaust Memorial bear witness to a dense and complex past. The German capital is also renowned for its underground music scene, contemporary art galleries and legendary nightlife.",
      },
      wikipedia: "Berlin",
      tags: ["Histoire", "Culture", "Art", "Musées", "Vie nocturne", "Ville", "Architecture"],
      mustSee: [
        {
          name: { fr: "Mur de Berlin & Checkpoint Charlie — symboles de la Guerre froide", en: "Berlin Wall & Checkpoint Charlie — symbols of the Cold War" },
          wikipedia: "Berlin_Wall",
        },
        {
          name: { fr: "Reichstag — siège du Parlement allemand avec dôme de verre panoramique", en: "Reichstag — seat of the German Parliament with a panoramic glass dome" },
          wikipedia: "Reichstag_building",
        },
        {
          name: { fr: "Île aux Musées — ensemble de 5 musées classé au patrimoine UNESCO", en: "Museum Island — a group of 5 museums listed as a UNESCO World Heritage site" },
          wikipedia: "Museum_Island",
        },
        {
          name: { fr: "Mémorial de l'Holocauste — installation sobre et puissante de 2 711 stèles", en: "Holocaust Memorial — a sober and powerful installation of 2,711 stelae" },
          wikipedia: "Memorial_to_the_Murdered_Jews_of_Europe",
        },
      ],
    },
    {
      id: 2,
      name: { fr: "Bavière & Munich", en: "Bavaria & Munich" },
      region: { fr: "Bavière", en: "Bavaria" },
      description: {
        fr: "La Bavière est la région la plus touristique d'Allemagne, avec Munich comme capitale festive et culturelle. La Marienplatz et la Residenz témoignent de la splendeur des Wittelsbach, tandis que les Alpes bavaroises toutes proches offrent randonnées et stations de ski. Le château de Neuschwanstein, perché sur son rocher, est l'un des sites les plus visités d'Europe.",
        en: "Bavaria is Germany's most popular tourist region, with Munich as its festive and cultural capital. Marienplatz and the Residenz showcase the splendour of the Wittelsbach dynasty, while the nearby Bavarian Alps offer hiking and ski resorts. Neuschwanstein Castle, perched on its rock, is one of the most visited sites in Europe.",
      },
      wikipedia: "File:Bavaria Statue and Ruhmeshalle Munich, April 2019 -01.jpg",
      tags: ["Culture", "Alpes", "Gastronomie", "Châteaux", "Oktoberfest", "Ski", "Ville"],
      mustSee: [
        {
          name: { fr: "Château de Neuschwanstein — château de conte de fées de Louis II de Bavière", en: "Neuschwanstein Castle — the fairy-tale castle of Ludwig II of Bavaria" },
          wikipedia: "Neuschwanstein_Castle",
        },
        {
          name: { fr: "Marienplatz & Rathaus à Munich — cœur animé de la capitale bavaroise", en: "Marienplatz & Rathaus in Munich — the lively heart of the Bavarian capital" },
          wikipedia: "Marienplatz",
        },
        {
          name: { fr: "Englischer Garten — l'un des plus grands parcs urbains du monde", en: "Englischer Garten — one of the largest urban parks in the world" },
          wikipedia: "File:Monopteros, Englischer Garten, Munich, 20251110 0835 6028.jpg",
        },
        {
          name: { fr: "Zugspitze — point culminant d'Allemagne à 2 962 m", en: "Zugspitze — Germany's highest peak at 2,962 m" },
          wikipedia: "Zugspitze",
        },
      ],
    },
    {
      id: 3,
      name: { fr: "Vallée du Rhin Romantique", en: "Romantic Rhine Valley" },
      region: { fr: "Rhénanie-Palatinat", en: "Rhineland-Palatinate" },
      description: {
        fr: "Le Rhin romantique entre Bingen et Coblence offre l'un des paysages les plus pittoresques d'Europe, avec ses vignobles en terrasses, ses châteaux médiévaux perchés et ses villages aux maisons à colombages. La Loreley, rocher légendaire surplombant le fleuve, cristallise toute la poésie de cette région inscrite au patrimoine mondial de l'UNESCO. Une croisière fluviale permet d'apprécier ce panorama unique.",
        en: "The Romantic Rhine between Bingen and Koblenz offers one of the most picturesque landscapes in Europe, with its terraced vineyards, perched medieval castles and half-timbered villages. The Loreley, a legendary rock overlooking the river, embodies all the poetry of this region, a UNESCO World Heritage site. A river cruise is the best way to take in this unique panorama.",
      },
      wikipedia: "Rhine_Gorge",
      tags: ["Nature", "Vin", "UNESCO", "Randonnée", "Croisière", "Architecture"],
      mustSee: [
        {
          name: { fr: "Rocher de la Loreley — site légendaire aux 130 m de hauteur sur le Rhin", en: "Loreley Rock — legendary 130 m outcrop above the Rhine" },
          wikipedia: "Lorelei",
        },
        {
          name: { fr: "Château de Rheinfels — imposante forteresse médiévale du XIIIe siècle", en: "Rheinfels Castle — an imposing 13th-century medieval fortress" },
          wikipedia: "Rheinfels_Castle",
        },
        {
          name: { fr: "Rüdesheim am Rhein — village viticole avec sa célèbre Drosselgasse", en: "Rüdesheim am Rhein — a wine village with its famous Drosselgasse" },
          wikipedia: "Rüdesheim_am_Rhein",
        },
        {
          name: { fr: "Coblence & Deutsches Eck — confluent monumental du Rhin et de la Moselle", en: "Koblenz & Deutsches Eck — the monumental confluence of the Rhine and the Moselle" },
          wikipedia: "Koblenz",
        },
      ],
    },
    {
      id: 4,
      name: { fr: "Forêt-Noire & Heidelberg", en: "Black Forest & Heidelberg" },
      region: { fr: "Bade-Wurtemberg", en: "Baden-Württemberg" },
      description: {
        fr: "La Forêt-Noire est un massif forestier d'une beauté sauvage, parsemé de villages traditionnels aux toits de chaume, de cascades et de lacs glaciaires. Tout proche, Heidelberg est l'une des plus belles villes médiévales d'Allemagne, dominée par son château en ruines romantiques et traversée par la Neckar. Les gâteaux Schwarzwälder Kirschtorte et les horloges à coucou sont les emblèmes gastronomiques et artisanaux de la région.",
        en: "The Black Forest is a wild and beautiful mountain range, dotted with traditional thatched-roof villages, waterfalls and glacial lakes. Nearby, Heidelberg is one of Germany's most beautiful medieval towns, dominated by its romantic ruined castle and crossed by the Neckar. Schwarzwälder Kirschtorte cakes and cuckoo clocks are the region's culinary and craft emblems.",
      },
      wikipedia: "Black_Forest",
      tags: ["Nature", "Randonnée", "Histoire", "Gastronomie", "Vélo"],
      mustSee: [
        {
          name: { fr: "Château de Heidelberg — ruines romantiques dominant la ville et le Neckar", en: "Heidelberg Castle — romantic ruins overlooking the town and the Neckar" },
          wikipedia: "Heidelberg_Castle",
        },
        {
          name: { fr: "Triberg — village des cascades et capitale des horloges à coucou", en: "Triberg — village of waterfalls and capital of cuckoo clocks" },
          wikipedia: "Triberg_im_Schwarzwald",
        },
        {
          name: { fr: "Titisee — lac glaciaire au cœur de la Forêt-Noire", en: "Titisee — a glacial lake at the heart of the Black Forest" },
          wikipedia: "Titisee",
        },
        {
          name: { fr: "Fribourg-en-Brisgau — ville universitaire avec sa magnifique cathédrale gothique", en: "Freiburg im Breisgau — a university town with its magnificent Gothic cathedral" },
          wikipedia: "Freiburg_im_Breisgau",
        },
      ],
    },
    {
      id: 5,
      name: "Hamburg",
      region: { fr: "Nord", en: "North" },
      description: {
        fr: "Deuxième ville d'Allemagne, Hamburg est une métropole portuaire fière de son passé hanséatique et de son architecture de briques rouges. La Speicherstadt, entrepôts du XIXe siècle reconvertis en musées et galeries, est classée UNESCO. Le Reeperbahn est le quartier de divertissement le plus animé d'Europe du Nord, et le port — le 3e plus grand d'Europe — se visite en bateau. C'est aussi la ville des Beatles, qui y ont fait leurs débuts.",
        en: "Germany's second city, Hamburg is a port metropolis proud of its Hanseatic past and red-brick architecture. The Speicherstadt, 19th-century warehouses converted into museums and galleries, is a UNESCO World Heritage site. The Reeperbahn is northern Europe's liveliest entertainment district, and the port — the 3rd largest in Europe — can be explored by boat. It is also the city of the Beatles, who got their start here.",
      },
      wikipedia: "Hamburg",
      tags: ["Ville", "Culture", "Architecture", "UNESCO", "Histoire", "Musique"],
      mustSee: [
        {
          name: { fr: "Speicherstadt — entrepôts en briques rouges classés UNESCO", en: "Speicherstadt — UNESCO-listed red-brick warehouses" },
          wikipedia: "File:Hamburg,_Speicherstadt,_Wasserschloss_--_2016_--_3223-9.jpg",
        },
        {
          name: { fr: "Elbphilharmonie — salle de concert au design spectaculaire sur l'Elbe", en: "Elbphilharmonie — a concert hall with spectacular design on the Elbe" },
          wikipedia: "Elbphilharmonie",
        },
        {
          name: { fr: "Port de Hamburg — croisière en bateau dans le 3e plus grand port d'Europe", en: "Port of Hamburg — a boat cruise through Europe's 3rd largest port" },
          wikipedia: "Port_of_Hamburg",
        },
        {
          name: { fr: "Reeperbahn & quartier de St. Pauli — où les Beatles ont débuté", en: "Reeperbahn & St. Pauli district — where the Beatles got their start" },
          wikipedia: "Reeperbahn",
        },
      ],
    },
  ],
  costOfLiving: {
    intro: {
      fr: "L'Allemagne offre un bon rapport qualité-prix pour l'Europe de l'Ouest. Berlin est l'une des capitales les moins chères d'Europe occidentale. Munich et Francfort sont plus onéreuses, mais restent abordables comparées à Paris ou Londres.",
      en: "Germany offers good value for money within Western Europe. Berlin is one of the cheapest capitals in Western Europe. Munich and Frankfurt are pricier, but remain affordable compared to Paris or London.",
    },
    currency: "EUR",
    exchangeRate: "1€ = 1€",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          {
            label: { fr: "Auberge de jeunesse (dortoir)", en: "Youth hostel (dorm)" },
            price: "20–35 €",
            detail: { fr: "Très développé dans toutes les grandes villes", en: "Widely available in all major cities" },
          },
          {
            label: { fr: "Hôtel 2–3 étoiles", en: "2–3 star hotel" },
            price: "65–120 €",
            detail: { fr: "Chambre double, petit-déjeuner souvent inclus", en: "Double room, breakfast often included" },
          },
          {
            label: { fr: "Hôtel 4 étoiles", en: "4 star hotel" },
            price: "120–220 €",
            detail: { fr: "Plus cher à Munich et Francfort", en: "Pricier in Munich and Frankfurt" },
          },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          {
            label: { fr: "Bratwurst / kebab / bakery", en: "Bratwurst / kebab / bakery" },
            price: "3–7 €",
            detail: { fr: "Street food très développé et de qualité", en: "Street food is widespread and of good quality" },
          },
          {
            label: { fr: "Déjeuner au restaurant", en: "Lunch at a restaurant" },
            price: "10–16 €",
            detail: { fr: "Plat du jour, souvent très copieux", en: "Daily special, often very generous" },
          },
          {
            label: { fr: "Dîner restaurant traditionnel", en: "Dinner at a traditional restaurant" },
            price: "18–35 €",
            detail: { fr: "Avec bière incluse dans les brasseries", en: "Beer included in brewery restaurants" },
          },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          {
            label: { fr: "Ticket métro / bus (aller simple)", en: "Metro / bus ticket (one-way)" },
            price: "2–3,50 €",
            detail: { fr: "Pass journée très avantageux (7–10 €)", en: "Day pass is great value (7–10 €)" },
          },
          {
            label: { fr: "Train IC/ICE Berlin–Munich", en: "IC/ICE train Berlin–Munich" },
            price: "30–90 €",
            detail: { fr: "En 4h, tarif Sparpreis dès 17 € si réservé tôt", en: "4h journey, Sparpreis fares from 17 € if booked early" },
          },
          {
            label: { fr: "FlixBus longue distance", en: "Long-distance FlixBus" },
            price: "10–30 €",
            detail: { fr: "Alternative économique au train pour les longues distances", en: "A cheap alternative to the train for long distances" },
          },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          {
            label: { fr: "Musée à Berlin (île aux Musées)", en: "Museum in Berlin (Museum Island)" },
            price: "12–19 €",
            detail: { fr: "Pass combiné disponible pour plusieurs musées", en: "Combined pass available for several museums" },
          },
          {
            label: { fr: "Château de Neuschwanstein", en: "Neuschwanstein Castle" },
            price: "17 €",
            detail: { fr: "Réservation obligatoire en ligne en haute saison", en: "Online booking required in high season" },
          },
          {
            label: { fr: "Tour guidé à vélo", en: "Guided bike tour" },
            price: "15–25 €",
            detail: { fr: "Berlin propose d'excellentes visites à vélo", en: "Berlin offers excellent bike tours" },
          },
        ],
      },
    ],
    budgetSummary: [
      {
        type: { fr: "Routard", en: "Backpacker" },
        daily: "60–80 €/j",
        desc: { fr: "Auberge, street food et plats du jour, transports en commun", en: "Hostel, street food and daily specials, public transport" },
        color: "#22c55e",
      },
      {
        type: { fr: "Confort", en: "Comfort" },
        daily: "120–180 €/j",
        desc: { fr: "Hôtel 3 étoiles, restaurants mid-range, activités culturelles", en: "3-star hotel, mid-range restaurants, cultural activities" },
        color: "#3b82f6",
      },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days" },
      route: { fr: "Berlin (4j) → Vallée du Rhin (2j) → Munich & Bavière (4j)", en: "Berlin (4d) → Rhine Valley (2d) → Munich & Bavaria (4d)" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "950 – 1 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Berlin", en: "Return flight Paris–Berlin" }, amount: "80–150 €" },
            { label: { fr: "Hébergement (9 nuits)", en: "Accommodation (9 nights)" }, amount: "220–315 €" },
            { label: { fr: "Transports locaux + trains", en: "Local transport + trains" }, amount: "130–180 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "380–450 €" },
            { label: { fr: "Activités + musées", en: "Activities + museums" }, amount: "70–100 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "1 900 – 2 600 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Berlin", en: "Return flight Paris–Berlin" }, amount: "100–200 €" },
            { label: { fr: "Hébergement (9 nuits)", en: "Accommodation (9 nights)" }, amount: "800–1 100 €" },
            { label: { fr: "Transports locaux + trains", en: "Local transport + trains" }, amount: "200–280 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "600–750 €" },
            { label: { fr: "Activités + musées", en: "Activities + museums" }, amount: "130–200 €" },
          ],
        },
      ],
    },
  },
  practicalities: [
    {
      icon: "✈️",
      label: { fr: "Vol depuis Paris", en: "Flight from Paris" },
      value: { fr: "Paris–Berlin : 1h30 de vol. Nombreuses compagnies low-cost (easyJet, Transavia). Aussi accessible en train de nuit.", en: "Paris–Berlin: 1h30 flight. Many low-cost airlines (easyJet, Transavia). Also accessible by night train." },
    },
    {
      icon: "🪪",
      label: { fr: "Visa", en: "Visa" },
      value: { fr: "Pas de visa pour les citoyens UE/Schengen. Carte d'identité suffisante.", en: "No visa for EU/Schengen citizens. An ID card is sufficient." },
    },
    {
      icon: "💰",
      label: { fr: "Monnaie", en: "Currency" },
      value: { fr: "Euro (€). Attention : de nombreux restaurants et commerces en Allemagne sont encore cash only.", en: "Euro (€). Note: many restaurants and shops in Germany are still cash only." },
    },
    {
      icon: "🗣️",
      label: { fr: "Langue", en: "Language" },
      value: { fr: "Allemand. Anglais très bien parlé dans les grandes villes et les zones touristiques.", en: "German. English is very widely spoken in major cities and tourist areas." },
    },
    {
      icon: "🔌",
      label: { fr: "Prise électrique", en: "Power outlet" },
      value: { fr: "Type F (Schuko, 2 broches rondes). 230V / 50Hz. Compatible avec les prises françaises.", en: "Type F (Schuko, 2 round pins). 230V / 50Hz. Compatible with French plugs." },
    },
    {
      icon: "💊",
      label: { fr: "Santé", en: "Health" },
      value: { fr: "Soins médicaux excellents. Carte Européenne d'Assurance Maladie valable pour les ressortissants UE.", en: "Excellent medical care. European Health Insurance Card valid for EU nationals." },
    },
    {
      icon: "🚲",
      label: { fr: "Mobilité", en: "Mobility" },
      value: { fr: "Excellent réseau cyclable dans toutes les grandes villes. Transports en commun très ponctuels.", en: "Excellent cycling network in all major cities. Public transport is very punctual." },
    },
    {
      icon: "🏪",
      label: { fr: "Commerces", en: "Shops" },
      value: { fr: "Fermés le dimanche dans la quasi-totalité du pays. Planifier les courses en conséquence.", en: "Closed on Sundays across almost the entire country. Plan your shopping accordingly." },
    },
  ],
};
