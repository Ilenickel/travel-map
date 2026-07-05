export const CROATIA = {
  code: "HRV",
  numericId: 191,
  name: { fr: "Croatie", en: "Croatia" },
  emoji: "🇭🇷",
  capital: { fr: "Zagreb", en: "Zagreb" },
  language: { fr: "Croate", en: "Croatian" },
  currency: { fr: "Euro (EUR)", en: "Euro (EUR)" },
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 65, budgetMid: 120,
    tripMin: 1000, tripMid: 2500,
  },
  description: {
    fr: "La Croatie est une révélation adriatique : 1 778km de côte avec des eaux turquoise cristallines, plus de 1 000 îles dont Hvar, Brač et Korčula, la vieille ville de Dubrovnik (UNESCO, 'la perle de l'Adriatique'), les lacs de Plitvice (UNESCO, cascades turquoise en forêt), et Split avec le palais de Dioclétien habité depuis 1 700 ans. La destination méditerranéenne la plus en vogue d'Europe.",
    en: "Croatia is an Adriatic revelation: 1,778 km of coastline with crystal-clear turquoise waters, more than 1,000 islands including Hvar, Brač and Korčula, Dubrovnik's old town (UNESCO, the 'Pearl of the Adriatic'), the Plitvice Lakes (UNESCO, turquoise waterfalls in the forest), and Split with Diocletian's Palace still inhabited after 1,700 years. Europe's trendiest Mediterranean destination.",
  },

  bestPeriods: [
    {
      months: { fr: "Juin – Septembre", en: "June – September" },
      label: { fr: "Été adriatique", en: "Adriatic summer" },
      color: "#22c55e",
      description: {
        fr: "Côte et îles en pleine saison : eaux chaudes (26°C), soleil garanti. Juin et septembre idéaux (moins de foules que juillet-août). Dubrovnik très chargé en juillet-août.",
        en: "Coast and islands at peak season: warm waters (26°C) and guaranteed sunshine. June and September are ideal (with fewer crowds than July-August). Dubrovnik gets very busy in July and August.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Avril – Mai", en: "April – May" },
      label: { fr: "Printemps", en: "Spring" },
      color: "#f59e0b",
      description: {
        fr: "Plitvice à son plus beau (cascades au maximum), côte déserte, températures agréables (16–22°C). Idéal pour l'intérieur.",
        en: "Plitvice at its best (waterfalls at full flow), quiet coastline, pleasant temperatures (16–22°C). Ideal for inland areas.",
      },
      icon: "🌸",
    },
  ],

  weatherCities: [
    {
      id: "split",
      name: "Split",
      region: { fr: "Dalmatie centrale", en: "Central Dalmatia" },
      data: [
        { month: "Jan", temp:  8, rain: 90,  icon: "⛅" },
        { month: "Fév", temp:  9, rain: 75,  icon: "⛅" },
        { month: "Mar", temp: 12, rain: 70,  icon: "⛅" },
        { month: "Avr", temp: 15, rain: 65,  icon: "⛅" },
        { month: "Mai", temp: 19, rain: 55,  icon: "☀️" },
        { month: "Jun", temp: 24, rain: 35,  icon: "☀️" },
        { month: "Jul", temp: 27, rain: 25,  icon: "⛅" },
        { month: "Aoû", temp: 27, rain: 30,  icon: "⛅" },
        { month: "Sep", temp: 23, rain: 65,  icon: "☀️" },
        { month: "Oct", temp: 18, rain: 95,  icon: "⛅" },
        { month: "Nov", temp: 13, rain: 120, icon: "⛅" },
        { month: "Déc", temp:  9, rain: 110, icon: "⛅" },
      ],
    },
    {
      id: "zagreb",
      name: "Zagreb",
      region: { fr: "Plaine pannonnienne (capitale)", en: "Pannonian Plain (capital)" },
      data: [
        { month: "Jan", temp:  1, rain: 45,  icon: "❄️" },
        { month: "Fév", temp:  3, rain: 40,  icon: "❄️" },
        { month: "Mar", temp:  8, rain: 55,  icon: "⛅" },
        { month: "Avr", temp: 13, rain: 65,  icon: "⛅" },
        { month: "Mai", temp: 17, rain: 80,  icon: "⛅" },
        { month: "Jun", temp: 20, rain: 85,  icon: "☀️" },
        { month: "Jul", temp: 23, rain: 70,  icon: "☀️" },
        { month: "Aoû", temp: 23, rain: 70,  icon: "☀️" },
        { month: "Sep", temp: 18, rain: 70,  icon: "⛅" },
        { month: "Oct", temp: 12, rain: 70,  icon: "⛅" },
        { month: "Nov", temp:  6, rain: 75,  icon: "⛅" },
        { month: "Déc", temp:  2, rain: 55,  icon: "❄️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Dubrovnik — La Perle de l'Adriatique", en: "Dubrovnik — the Pearl of the Adriatic" },
      region: { fr: "Dalmatie du Sud", en: "Southern Dalmatia" },
      description: {
        fr: "Dubrovnik (UNESCO) est une des villes les plus belles du monde : ses remparts médiévaux du XVe siècle (2km de tour complet au-dessus de la mer) dominent une vieille ville de marbre blanc parfaitement préservée. La Stradun (rue principale), les palais gothiques, les fontaines de la Renaissance et la vue sur les îles Élaphites depuis les murailles sont inoubliables. Cadre de Game of Thrones.",
        en: "Dubrovnik (UNESCO) is one of the most beautiful cities in the world: its 15th-century medieval walls (a full 2 km circuit above the sea) overlook a perfectly preserved old town of white marble. The Stradun, Gothic palaces, Renaissance fountains and the view of the Elaphiti Islands from the ramparts are unforgettable. It was also a filming location for Game of Thrones.",
      },
      wikipedia: "Dubrovnik",
      tags: ["Remparts", "UNESCO", "Adriatique", "Game of Thrones", "Ville", "Histoire", "Architecture"],
      mustSee: [
        { name: { fr: "Tour des remparts médiévaux (2km) vue sur l'Adriatique", en: "Walk the medieval walls (2 km) with views over the Adriatic" }, wikipedia: "Walls_of_Dubrovnik" },
        { name: { fr: "Stradun — rue de marbre principal de la Vieille Ville", en: "Stradun — the Old Town's main marble street" }, wikipedia: "File:Stradun rano ujutro.jpg" },
        { name: { fr: "Île de Lokrum en ferry (10 min) — jardins et paons", en: "Lokrum Island by ferry (10 min) — gardens and peacocks" }, wikipedia: "Lokrum" },
        { name: { fr: "Téléphérique Srđ — panorama à 412m sur Dubrovnik", en: "Srđ cable car — panoramic views over Dubrovnik from 412 m" }, wikipedia: "File:Dubrovnik Cable Car Station.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Lacs de Plitvice — Cascades UNESCO", en: "Plitvice Lakes — UNESCO waterfalls" },
      region: { fr: "Lika (intérieur)", en: "Lika (inland)" },
      description: {
        fr: "Le parc national des lacs de Plitvice (UNESCO) est l'une des merveilles naturelles de Croatie : 16 lacs en cascade reliés par 90 cascades dans une forêt de hêtres et de sapins. L'eau est d'un turquoise surnaturel grâce aux dépôts de travertin. Les passerelles en bois au-dessus des cascades et la Grande Cascade (78m) créent un spectacle unique.",
        en: "Plitvice Lakes National Park (UNESCO) is one of Croatia's natural wonders: 16 cascading lakes linked by 90 waterfalls in a forest of beech and fir trees. The water has an almost unreal turquoise colour thanks to travertine deposits. The wooden boardwalks above the falls and the Great Waterfall (78 m) create a truly unique spectacle.",
      },
      wikipedia: "Plitvice_Lakes_National_Park",
      tags: ["Cascades", "UNESCO", "Turquoise", "Forêt", "Nature", "Randonnée"],
      mustSee: [
        { name: { fr: "Grande Cascade (Veliki Slap, 78m) — la plus haute de Croatie", en: "Great Waterfall (Veliki Slap, 78 m) — the highest in Croatia" }, wikipedia: "File:Plitvice Lakes1.jpg" },
        { name: { fr: "Passerelles en bois entre les lacs du niveau inférieur", en: "Wooden boardwalks between the lower lakes" }, wikipedia: "File:A bridge in Plitvice lakes national park, Croatia.jpg" },
        { name: { fr: "Lac Kozjak en bateau électrique (le plus grand lac)", en: "Lake Kozjak by electric boat (the largest lake)" }, wikipedia: "File:Plitvice Lakes National Park BW 2014-10-13 12-27-16.jpg" },
        { name: { fr: "Grotte des oiseaux (Šupljara) — déversoir dans la falaise", en: "Šupljara Cave — a cliffside opening above the falls" }, wikipedia: "File:Plitvice 12.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Split — Palais de Dioclétien habité", en: "Split — inhabited Diocletian's Palace" },
      region: { fr: "Dalmatie centrale", en: "Central Dalmatia" },
      description: {
        fr: "Split est une ville unique au monde : son centre historique (UNESCO) EST le palais de l'empereur Dioclétien (305 apr. J.-C.) — 3 000 personnes vivent encore à l'intérieur des murs antiques. Les caves du palais, le mausolée transformé en cathédrale, et les ruelles animées de bars et restaurants font de Split une des villes les plus vivantes de l'Adriatique.",
        en: "Split is unique in the world: its historic centre (UNESCO) IS Emperor Diocletian's Palace (305 AD) — and 3,000 people still live within its ancient walls. The palace cellars, the mausoleum turned cathedral, and the lively alleys packed with bars and restaurants make Split one of the Adriatic's most vibrant cities.",
      },
      wikipedia: "Split,_Croatia",
      tags: ["Palais romain", "UNESCO", "Vivant", "Dioclétien", "Ville", "Histoire", "Architecture"],
      mustSee: [
        { name: { fr: "Caves du palais de Dioclétien (IVe s.) — sous la ville", en: "Diocletian's Palace cellars (4th century) — beneath the city" }, wikipedia: "Diocletian's_Palace" },
        { name: { fr: "Cathédrale Saint-Domnius — mausolée impérial transformé en église", en: "Saint Domnius Cathedral — an imperial mausoleum turned church" }, wikipedia: "Cathedral_of_Saint_Domnius" },
        { name: { fr: "Promenade de la Riva au coucher du soleil", en: "Sunset stroll along the Riva promenade" }, wikipedia: "Split,_Croatia" },
        { name: { fr: "Ferry vers les îles Brač, Hvar ou Korčula", en: "Ferry to the islands of Brač, Hvar or Korčula" }, wikipedia: "File:J32 807 Brač, Leuchtturm Rt Ražanj.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Hvar — L'île la plus ensoleillée d'Europe", en: "Hvar — Europe's sunniest island" },
      region: { fr: "Dalmatie — Adriatique", en: "Dalmatia — Adriatic" },
      description: {
        fr: "Hvar est l'île la plus longue (68km) et la plus ensoleillée de Croatie (2 724h de soleil/an — parmi les plus élevées d'Europe). Sa forteresse espagnole domine la vieille ville blanche et son théâtre du XVIe siècle (l'un des plus anciens d'Europe). L'intérieur est couvert de lavande (juillet) et de vignobles produisant le Plavac Mali, l'un des meilleurs vins rouges de Croatie.",
        en: "Hvar is Croatia's longest island (68 km) and its sunniest (2,724 hours of sunshine a year — among the highest totals in Europe). Its Spanish fortress overlooks the white old town and its 16th-century theatre, one of the oldest in Europe. Inland, lavender fields bloom in July alongside vineyards producing Plavac Mali, one of Croatia's finest red wines.",
      },
      wikipedia: "Hvar",
      tags: ["Île", "Lavande", "Forteresse", "Vin", "Plage", "Nature"],
      mustSee: [
        { name: { fr: "Forteresse espagnole Španjola — vue panoramique sur l'archipel", en: "Španjola Fortress — panoramic views over the archipelago" }, wikipedia: "File:Spanjola.JPG" },
        { name: { fr: "Champs de lavande de Brusje (juillet — floraison)", en: "Brusje lavender fields (July — bloom season)" }, wikipedia: "File:Brusje_-_panoramio_(1).jpg" },
        { name: { fr: "Îles Pakleni — eaux turquoise en bateau taxi", en: "Pakleni Islands — turquoise waters by water taxi" }, wikipedia: "Pakleni_Islands" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Croatie a adopté l'euro en 2023. Les prix sont montés, surtout sur la côte en juillet-août où la demande dépasse l'offre. Dubrovnik est devenue chère. L'intérieur (Zagreb, Plitvice) reste abordable. Voyager en mai-juin ou septembre permet d'économiser 30–40%.",
      en: "Croatia adopted the euro in 2023. Prices have gone up, especially on the coast in July and August when demand outstrips supply. Dubrovnik has become expensive. Inland areas (Zagreb, Plitvice) remain affordable. Travelling in May-June or September can save you 30-40%.",
    },
    currency: "EUR",
    exchangeRate: "1€ = 1€ (zone euro depuis 2023)",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Sobe (chambre chez l'habitant) sur la côte", en: "Sobe (guest room in a local home) on the coast" }, price: "40–80 €", detail: { fr: "Charmant et abordable, souvent avec cuisine", en: "Charming and affordable, often with a kitchen" } },
          { label: { fr: "Hôtel 3★ Split ou Zagreb", en: "3★ hotel in Split or Zagreb" }, price: "80–150 €", detail: { fr: "Bon confort, proche de la vieille ville", en: "Good comfort, close to the old town" } },
          { label: { fr: "Hôtel 3★ Dubrovnik (haute saison)", en: "3★ hotel in Dubrovnik (high season)" }, price: "150–280 €", detail: { fr: "Très demandé, réserver 3–6 mois à l'avance", en: "Very popular, book 3-6 months in advance" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Ćevapi (saucisses grillées) + ajvar dans une konoba", en: "Ćevapi (grilled sausages) + ajvar in a konoba" }, price: "8–15 €", detail: { fr: "Cuisine dalmate typique", en: "Typical Dalmatian cuisine" } },
          { label: { fr: "Peka (agneau ou poulpe sous la cloche) en restaurant côtier", en: "Peka (lamb or octopus slow-cooked under a bell) in a coastal restaurant" }, price: "18–30 €", detail: { fr: "Plat traditionnel à commander à l'avance", en: "Traditional dish that usually needs to be ordered in advance" } },
          { label: { fr: "Pizza napolitaine sur la promenade", en: "Neapolitan pizza on the waterfront promenade" }, price: "8–14 €", detail: { fr: "Influence italienne évidente", en: "The Italian influence is obvious" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Ferry Split–Hvar (Jadrolinija)", en: "Split–Hvar ferry (Jadrolinija)" }, price: "6–12 €", detail: { fr: "Liaisons quotidiennes, billet à l'avance", en: "Daily crossings, buy your ticket in advance" } },
          { label: { fr: "Bus Zagreb–Split (5h, FlixBus, Flixbus)", en: "Zagreb–Split bus (5h, FlixBus)" }, price: "15–30 €", detail: { fr: "Réseau dense et fiable", en: "Dense and reliable network" } },
          { label: { fr: "Location de scooter (île de Hvar, journée)", en: "Scooter rental (Hvar Island, per day)" }, price: "30–50 €", detail: { fr: "Le meilleur moyen de visiter les îles", en: "The best way to explore the island" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Entrée parc de Plitvice (haute saison)", en: "Plitvice park entry (high season)" }, price: "40 €", detail: { fr: "Inclut bateau et bus dans le parc", en: "Includes the boat and shuttle bus inside the park" } },
          { label: { fr: "Tour des remparts de Dubrovnik", en: "Dubrovnik city walls walk" }, price: "35 €", detail: { fr: "Incontournable, faire tôt le matin", en: "A must-do, best early in the morning" } },
          { label: { fr: "Excursion kayak mer depuis Dubrovnik (demi-journée)", en: "Sea kayaking excursion from Dubrovnik (half day)" }, price: "50–80 €", detail: { fr: "Grotte Bleue + plage secrète", en: "Blue Cave + secret beach" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "65–100 €/j", desc: { fr: "Sobe + konoba + ferry + bus", en: "Sobe + konoba + ferry + bus" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "120–220 €/j", desc: { fr: "Hôtel 3★ + restaurants + activités", en: "3★ hotel + restaurants + activities" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days" },
      route: {
        fr: "Zagreb (1j) → Plitvice (2j) → Split (3j) → Hvar (2j) → Dubrovnik (2j)",
        en: "Zagreb (1d) → Plitvice (2d) → Split (3d) → Hvar (2d) → Dubrovnik (2d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 000 – 1 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Zagreb ou Split (Ryanair, Air France)", en: "Return flight Paris–Zagreb or Split (Ryanair, Air France)" }, amount: "80–200 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "400–750 €" },
            { label: { fr: "Ferries + bus + transports", en: "Ferries + buses + transport" }, amount: "150–280 €" },
            { label: { fr: "Nourriture + vin local", en: "Food + local wine" }, amount: "300–500 €" },
            { label: { fr: "Plitvice + remparts + activités", en: "Plitvice + city walls + activities" }, amount: "150–280 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "2 500 – 4 500 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Split ou Dubrovnik", en: "Return flight Paris–Split or Dubrovnik" }, amount: "100–300 €" },
            { label: { fr: "Hôtels 3★ (10 nuits)", en: "3★ hotels (10 nights)" }, amount: "1 000–2 000 €" },
            { label: { fr: "Ferries + voiture + scooter", en: "Ferries + car + scooter" }, amount: "350–600 €" },
            { label: { fr: "Nourriture & peka + vin", en: "Food, peka + wine" }, amount: "500–900 €" },
            { label: { fr: "Kayak, sorties, activités", en: "Kayaking, outings + activities" }, amount: "400–700 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flights from Paris" }, value: { fr: "~2h (Croatia Airlines, Ryanair, Air France direct CDG–Zagreb ou Split). Vols directs vers Dubrovnik en saison.", en: "~2h (Croatia Airlines, Ryanair, Air France direct from CDG to Zagreb or Split). Direct flights to Dubrovnik in season." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Aucun visa — espace Schengen (depuis 2023). Carte d'identité française suffisante.", en: "No visa required — Schengen Area (since 2023). A French national ID card is enough." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Euro (€, depuis jan. 2023). Carte bancaire très bien acceptée. Espèces utiles dans les marchés ruraux.", en: "Euro (€ since Jan. 2023). Cards are widely accepted. Cash is still useful at rural markets." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Croate. Anglais très bien parlé partout sur la côte. Italien compris en Dalmatie.", en: "Croatian. English is widely spoken all along the coast. Italian is understood in Dalmatia." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type C/F (européen) — 230V. Aucun adaptateur nécessaire.", en: "Type C/F (European) — 230V. No adapter needed." } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Aucune précaution. CEAM valide. Méduses possibles sur certaines plages en été.", en: "No special precautions. The EHIC is valid. Jellyfish can appear on some beaches in summer." } },
    { icon: "🚢", label: { fr: "Ferries", en: "Ferries" }, value: { fr: "Jadrolinija opère toutes les lignes côtières. Réserver à l'avance en juillet-août (complets des semaines avant). Arriver tôt pour les ferries avec voitures.", en: "Jadrolinija runs all coastal routes. Book ahead in July and August (sailings can sell out weeks in advance). Arrive early for car ferries." } },
    { icon: "☀️", label: { fr: "Haute saison", en: "High season" }, value: { fr: "Juillet-août : foules extrêmes à Dubrovnik et Hvar, prix au maximum. Préférer juin et septembre pour 30% moins cher et deux fois moins de monde.", en: "July-August: extreme crowds in Dubrovnik and Hvar, with peak prices. June and September are better: about 30% cheaper and roughly half the crowds." } },
  ],
};
