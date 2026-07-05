export const LATVIA = {
  code: "LVA",
  numericId: 428,
  name: { fr: "Lettonie", en: "Latvia" },
  emoji: "🇱🇻",
  capital: { fr: "Riga", en: "Riga" },
  language: { fr: "Letton", en: "Latvian" },
  currency: { fr: "Euro (EUR)", en: "Euro (EUR)" },
  timezone: "UTC+2 (été UTC+3)",
  filter: {
    budgetMin: 50, budgetMid: 90,
    tripMin: 900, tripMid: 1900,
  },
  description: {
    fr: "La Lettonie est le cœur des États baltes : Riga, sa capitale, possède le plus grand ensemble d'architecture Art Nouveau d'Europe (800 bâtiments classés UNESCO) et une Vieille Ville médiévale hanséatique. Les plages de sable de Jūrmala (35km de côte), les châteaux de Gauja et la forêt primaire de Slītere font de la Lettonie une destination nature et culture abordable.",
    en: "Latvia is the heart of the Baltic states: Riga, its capital, boasts Europe's largest collection of Art Nouveau architecture (800 UNESCO-listed buildings) and a medieval Hanseatic Old Town. The sandy beaches of Jūrmala (35km of coastline), the castles of Gauja and the primeval Slītere forest make Latvia an affordable nature and culture destination.",
  },

  bestPeriods: [
    {
      months: { fr: "Juin – Août", en: "June – August" },
      label: { fr: "Été balte", en: "Baltic summer" },
      color: "#22c55e",
      description: {
        fr: "Longues journées lumineuses (17–22°C), plages de Jūrmala animées, festivals (Jāņi, la Saint-Jean la plus folle d'Europe). Meilleure saison pour Riga.",
        en: "Long bright days (17–22°C), lively Jūrmala beaches, festivals (Jāņi, Europe's wildest Midsummer). The best season for Riga.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Décembre – Janvier", en: "December – January" },
      label: { fr: "Noël balte", en: "Baltic Christmas" },
      color: "#f59e0b",
      description: {
        fr: "Marchés de Noël de Riga (place de la Dôme), fêtes traditionnelles, forêts enneigées. Froid (-5°C) mais atmosphère unique.",
        en: "Riga's Christmas markets (Dome Square), traditional festivities, snowy forests. Cold (-5°C) but a unique atmosphere.",
      },
      icon: "🎄",
    },
  ],

  weatherCities: [
    {
      id: "riga",
      name: "Riga",
      region: { fr: "Côte de la mer Baltique", en: "Baltic Sea coast" },
      data: [
        { month: "Jan", temp: -4, rain: 40,  icon: "❄️" },
        { month: "Fév", temp: -4, rain: 30,  icon: "❄️" },
        { month: "Mar", temp:  0, rain: 35,  icon: "❄️" },
        { month: "Avr", temp:  7, rain: 35,  icon: "⛅" },
        { month: "Mai", temp: 13, rain: 45,  icon: "⛅" },
        { month: "Jun", temp: 16, rain: 65,  icon: "☀️" },
        { month: "Jul", temp: 19, rain: 80,  icon: "☀️" },
        { month: "Aoû", temp: 18, rain: 75,  icon: "☀️" },
        { month: "Sep", temp: 13, rain: 65,  icon: "⛅" },
        { month: "Oct", temp:  8, rain: 60,  icon: "⛅" },
        { month: "Nov", temp:  3, rain: 55,  icon: "⛅" },
        { month: "Déc", temp: -1, rain: 45,  icon: "❄️" },
      ],
    },
    {
      id: "jurmala",
      name: "Jūrmala",
      region: { fr: "Côte du golfe de Riga", en: "Gulf of Riga coast" },
      data: [
        { month: "Jan", temp: -4, rain: 40,  icon: "❄️" },
        { month: "Fév", temp: -4, rain: 30,  icon: "❄️" },
        { month: "Mar", temp:  0, rain: 35,  icon: "❄️" },
        { month: "Avr", temp:  7, rain: 35,  icon: "⛅" },
        { month: "Mai", temp: 12, rain: 40,  icon: "⛅" },
        { month: "Jun", temp: 16, rain: 60,  icon: "☀️" },
        { month: "Jul", temp: 19, rain: 70,  icon: "☀️" },
        { month: "Aoû", temp: 18, rain: 70,  icon: "☀️" },
        { month: "Sep", temp: 13, rain: 60,  icon: "⛅" },
        { month: "Oct", temp:  8, rain: 55,  icon: "⛅" },
        { month: "Nov", temp:  3, rain: 55,  icon: "⛅" },
        { month: "Déc", temp: -1, rain: 45,  icon: "❄️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Riga — Art Nouveau et Hanséatique", en: "Riga — Art Nouveau and Hanseatic" },
      region: { fr: "Capitale", en: "Capital" },
      description: {
        fr: "Riga possède le plus grand ensemble Art Nouveau d'Europe : 800 bâtiments ornés de masques, atlantes et ornements floraux, concentrés dans le quartier Alberta iela. La Vieille Ville médiévale (UNESCO) avec la cathédrale du Dôme (plus grand orgue des pays baltes), la Maison des Têtes Noires et les ruelles pavées est l'une des plus belles du nord de l'Europe.",
        en: "Riga has Europe's largest collection of Art Nouveau buildings: 800 structures adorned with masks, atlantes and floral ornaments, concentrated in the Alberta iela district. The medieval Old Town (UNESCO) with Dome Cathedral (the largest organ in the Baltic states), the House of the Blackheads and cobbled streets is one of the most beautiful in Northern Europe.",
      },
      wikipedia: "Riga",
      tags: ["Art Nouveau", "UNESCO", "Hanséatique", "Orgue", "Ville", "Histoire", "Architecture", "Gastronomie"],
      mustSee: [
        { name: { fr: "Alberta iela — rue Art Nouveau, chef-d'œuvre de Mikhail Eisenstein", en: "Alberta iela — Art Nouveau street, masterpiece by Mikhail Eisenstein" }, wikipedia: "File:Edificio_modernista_en_Alberta_iela_2a,_Riga,_Letonia,_2012-08-07,_DD_02.JPG" },
        { name: { fr: "Maison des Têtes Noires (XVe s.) reconstruite — façade dorée", en: "House of the Blackheads (15th c.), rebuilt — golden façade" }, wikipedia: "File:House of the Blackheads, Riga, Latvia-24June2009.jpg" },
        { name: { fr: "Cathédrale du Dôme et son orgue historique (XIIIe s.)", en: "Dome Cathedral and its historic organ (13th c.)" }, wikipedia: "Riga_Cathedral" },
        { name: { fr: "Marché central de Riga — dans des hangars de zeppelins reconvertis", en: "Riga Central Market — housed in converted zeppelin hangars" }, wikipedia: "Riga_Central_Market" },
      ],
    },
    {
      id: 2,
      name: { fr: "Jūrmala — Plages de sable et villas en bois", en: "Jūrmala — Sandy beaches and wooden villas" },
      region: { fr: "Golfe de Riga", en: "Gulf of Riga" },
      description: {
        fr: "Jūrmala est la station balnéaire historique de la noblesse russe et soviétique : 35km de plages de sable fin sur le golfe de Riga (eau plus chaude que la Baltique ouverte), et un alignement unique de villas en bois sculptées du XIXe siècle dans la pinède. À 30 minutes de train depuis Riga, c'est la sortie estivale incontournable des Rigains.",
        en: "Jūrmala is the historic seaside resort of the Russian and Soviet nobility: 35km of fine sandy beaches on the Gulf of Riga (warmer water than the open Baltic), and a unique row of carved 19th-century wooden villas in the pine forest. Just 30 minutes by train from Riga, it's the essential summer getaway for locals.",
      },
      wikipedia: "Jūrmala",
      tags: ["Plage", "Villas en bois", "Pinède", "Balnéaire"],
      mustSee: [
        { name: { fr: "Plage de Majori — sable blanc et mer chaude du golfe", en: "Majori Beach — white sand and warm gulf waters" }, wikipedia: "File:Jurmala 2017 05.jpg" },
        { name: { fr: "Villas en bois Art Nouveau sculptées dans la pinède", en: "Carved Art Nouveau wooden villas in the pine forest" }, wikipedia: "File:Kāpu iela 80 Jūrmala.jpg" },
        { name: { fr: "Jomas iela — rue piétonne animée avec cafés et marchés", en: "Jomas iela — lively pedestrian street with cafés and markets" }, wikipedia: "File:Jomas Street, Jurmala, Latvia.png" },
      ],
    },
    {
      id: 3,
      name: { fr: "Parc national de Gauja — Châteaux et grès", en: "Gauja National Park — Castles and sandstone" },
      region: { fr: "Vidzeme (nord-est)", en: "Vidzeme (north-east)" },
      description: {
        fr: "Le parc national de Gauja est le plus grand de Lettonie : la rivière Gauja a taillé des falaises de grès rouge et des grottes dans la forêt. Sigulda, surnommée la 'Suisse lettone', est entourée de trois châteaux médiévaux (Sigulda, Turaida, Krimulda) en ruines dans la forêt. Un circuit de deux jours depuis Riga.",
        en: "Gauja National Park is Latvia's largest: the Gauja river has carved red sandstone cliffs and caves into the forest. Sigulda, nicknamed 'Latvian Switzerland', is surrounded by three medieval castle ruins (Sigulda, Turaida, Krimulda) in the woods. A two-day trip from Riga.",
      },
      wikipedia: "Gauja_National_Park",
      tags: ["Forêt", "Châteaux", "Grottes", "Randonnée", "Nature"],
      mustSee: [
        { name: { fr: "Château de Turaida (XIIIe s.) et tour ronde dans la forêt", en: "Turaida Castle (13th c.) and round tower in the forest" }, wikipedia: "File:Turaida_Castle.JPG" },
        { name: { fr: "Grottes de grès de Gutmanis — plus grande grotte des pays baltes", en: "Gutmanis sandstone cave — the largest cave in the Baltic states" }, wikipedia: "File:Gutmana ala3 8sep07.jpg" },
        { name: { fr: "Falaises de grès rouge le long de la Gauja", en: "Red sandstone cliffs along the Gauja" }, wikipedia: "File:Gauja National Park 14.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Rundale — Versailles balte", en: "Rundāle — the Baltic Versailles" },
      region: { fr: "Zemgale (sud)", en: "Zemgale (south)" },
      description: {
        fr: "Le palais de Rundale est le Versailles des pays baltes : conçu par Rastrelli (l'architecte de l'Ermitage de Saint-Pétersbourg) pour le duc de Courlande au XVIIIe siècle, ses 138 pièces rococo et ses jardins à la française sont parmi les plus beaux d'Europe du Nord. À 80km de Riga, c'est une excursion d'une demi-journée.",
        en: "Rundāle Palace is the Versailles of the Baltic states: designed by Rastrelli (architect of the Hermitage in Saint Petersburg) for the Duke of Courland in the 18th century, its 138 rococo rooms and French-style gardens are among the finest in Northern Europe. 80km from Riga, it makes for a half-day excursion.",
      },
      wikipedia: "File:Rundāle Palace 27.jpg",
      tags: ["Palais", "Baroque", "Jardins", "Rococo"],
      mustSee: [
        { name: { fr: "Salle d'or du palais de Rundale — rococo letton parfait", en: "Golden Hall of Rundāle Palace — Latvian rococo at its finest" }, wikipedia: "File:Rundale_Palace_reception_hall.JPG" },
        { name: { fr: "Jardins à la française de Rundale — parterres de roses", en: "Rundāle's French-style gardens — rose beds" }, wikipedia: "File:Le_château_de_Rundal_(Rundal_Pils)_(6).JPG" },
        { name: { fr: "Exposition de la vie de cour du XVIIIe siècle", en: "Exhibition on 18th-century court life" }, wikipedia: "File:Le_château_de_Rundal_(Rundal_Pils)_(9).JPG" },
        { name: { fr: "Village de Bauska et château ruiné à la confluence des rivières", en: "Bauska village and its ruined castle at the confluence of two rivers" }, wikipedia: "File:Bauska, Rīgas iela - panoramio (3).jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Lettonie utilise l'euro depuis 2014. Les prix sont 30–40% inférieurs à ceux de la France. Riga est la plus chère des trois capitales baltes mais reste très abordable. Les transports en commun sont bon marché et efficaces.",
      en: "Latvia has used the euro since 2014. Prices are 30–40% lower than in France. Riga is the most expensive of the three Baltic capitals but remains very affordable. Public transport is cheap and efficient.",
    },
    currency: "EUR",
    exchangeRate: { fr: "1€ = 1€ (zone euro)", en: "1€ = 1€ (eurozone)" },
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Auberge de jeunesse Riga (dortoir ou chambre)", en: "Riga youth hostel (dorm or room)" }, price: "20–40 €", detail: { fr: "Bonne qualité, bien situées", en: "Good quality, well located" } },
          { label: { fr: "Hôtel 3★ Riga Vieille Ville", en: "3★ hotel in Riga Old Town" }, price: "60–110 €", detail: { fr: "Souvent dans des bâtiments historiques", en: "Often in historic buildings" } },
          { label: { fr: "Villa en bois Jūrmala (location)", en: "Wooden villa in Jūrmala (rental)" }, price: "50–100 €", detail: { fr: "Charme soviétique et balnéaire", en: "Soviet-era seaside charm" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Pelēkie zirņi (pois gris au lard) + kvass dans une bodega", en: "Pelēkie zirņi (grey peas with bacon) + kvass at a bodega" }, price: "6–10 €", detail: { fr: "Plats lettons traditionnels", en: "Traditional Latvian dishes" } },
          { label: { fr: "Restaurant mid-range Riga", en: "Mid-range restaurant in Riga" }, price: "12–22 €", detail: { fr: "Cuisine locale et internationale", en: "Local and international cuisine" } },
          { label: { fr: "Marché central — fromage de ferme, pain de seigle, poisson fumé", en: "Central Market — farmhouse cheese, rye bread, smoked fish" }, price: "5–10 €", detail: { fr: "Le meilleur marché des pays baltes", en: "The best market in the Baltic states" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Tram + bus Riga (ticket 24h)", en: "Tram + bus in Riga (24h ticket)" }, price: "5 €", detail: { fr: "Réseau dense et ponctuel", en: "Dense, punctual network" } },
          { label: { fr: "Train Riga–Jūrmala (30 min)", en: "Train Riga–Jūrmala (30 min)" }, price: "2 €", detail: { fr: "Départs toutes les 30 min", en: "Departures every 30 min" } },
          { label: { fr: "Bus Riga–Tallinn ou Vilnius (Lux Express)", en: "Bus Riga–Tallinn or Vilnius (Lux Express)" }, price: "15–30 €", detail: { fr: "Bus confortables inter-capitales", en: "Comfortable inter-capital buses" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Visite palais de Rundale (entrée + jardins)", en: "Rundāle Palace visit (entrance + gardens)" }, price: "10 €", detail: { fr: "Balade dans le parc incluse", en: "Park stroll included" } },
          { label: { fr: "Concert dans la cathédrale du Dôme (orgue)", en: "Organ concert at Dome Cathedral" }, price: "15–25 €", detail: { fr: "Acoustique exceptionnelle", en: "Exceptional acoustics" } },
          { label: { fr: "Tour guidé Art Nouveau Riga (2h à pied)", en: "Guided Art Nouveau walking tour of Riga (2h)" }, price: "15–25 €", detail: { fr: "Guide francophone disponible", en: "French-speaking guide available" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "50–80 €/j", desc: { fr: "Auberge + cuisine locale + transports publics", en: "Hostel + local food + public transport" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "90–160 €/j", desc: { fr: "Hôtel 3★ + restaurants + visites guidées", en: "3★ hotel + restaurants + guided tours" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "7 jours", en: "7 days" },
      route: {
        fr: "Riga (3j) → Gauja / Sigulda (1j) → Jūrmala (1j) → Rundale (1j) → retour (1j)",
        en: "Riga (3d) → Gauja / Sigulda (1d) → Jūrmala (1d) → Rundāle (1d) → return (1d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "900 – 1 400 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Riga (Ryanair, Air Baltic)", en: "Return flight Paris–Riga (Ryanair, Air Baltic)" }, amount: "80–200 €" },
            { label: { fr: "Hébergement (7 nuits)", en: "Accommodation (7 nights)" }, amount: "200–350 €" },
            { label: { fr: "Transports (train + bus)", en: "Transport (train + bus)" }, amount: "80–150 €" },
            { label: { fr: "Nourriture + kvass + marché", en: "Food + kvass + market" }, amount: "220–380 €" },
            { label: { fr: "Activités + Rundale + Gauja", en: "Activities + Rundāle + Gauja" }, amount: "100–200 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "1 900 – 3 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Riga", en: "Return flight Paris–Riga" }, amount: "100–250 €" },
            { label: { fr: "Hôtels 3★ (7 nuits)", en: "3★ hotels (7 nights)" }, amount: "500–900 €" },
            { label: { fr: "Voiture de location + transports", en: "Rental car + transport" }, amount: "250–400 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants" }, amount: "400–700 €" },
            { label: { fr: "Concerts, palais, excursions", en: "Concerts, palace, excursions" }, amount: "250–450 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~3h (Air Baltic direct CDG–Riga, Ryanair Beauvais–Riga). Plusieurs liaisons par semaine.", en: "~3h (Air Baltic direct CDG–Riga, Ryanair Beauvais–Riga). Several flights per week." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Aucun visa — espace Schengen. Carte d'identité française suffisante.", en: "No visa required — Schengen area. French national ID card is sufficient." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Euro (€). Carte bancaire acceptée partout. Espèces utiles dans les marchés et zones rurales.", en: "Euro (€). Cards accepted everywhere. Cash useful in markets and rural areas." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Letton. Anglais bien parlé par les jeunes. Russe compris par tous les plus de 40 ans.", en: "Latvian. English well spoken by young people. Russian understood by everyone over 40." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type C/F (européen) — 230V. Aucun adaptateur nécessaire.", en: "Type C/F (European) — 230V. No adapter needed." } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Aucune précaution. CEAM valide. Tiques dans les forêts — pantalon long recommandé en été.", en: "No special precautions. EHIC valid. Ticks in the forests — long trousers recommended in summer." } },
    { icon: "🌲", label: { fr: "Nature", en: "Nature" }, value: { fr: "55% du territoire est couvert de forêts. Les Lettons ramassent champignons et baies en automne — une pratique nationale. Les forêts sont accessibles librement.", en: "55% of the territory is covered in forest. Latvians pick mushrooms and berries in autumn — a national pastime. Forests are freely accessible." } },
    { icon: "🍺", label: { fr: "Kvass", en: "Kvass" }, value: { fr: "Le kvass est la boisson nationale : une bière légèrement fermentée à base de pain de seigle, peu alcoolisée et rafraîchissante. À essayer au marché central.", en: "Kvass is the national drink: a lightly fermented, low-alcohol, refreshing beverage made from rye bread. Worth trying at the Central Market." } },
  ],
};
