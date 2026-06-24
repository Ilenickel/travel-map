export const NORWAY = {
  code: "NOR",
  numericId: 578,
  name: "Norvège",
  emoji: "🇳🇴",
  capital: "Oslo",
  language: "Norvégien (bokmål, nynorsk), Same",
  currency: "Couronne norvégienne (NOK)",
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 150, budgetMid: 250,
    tripMin: 2000, tripMid: 4500,
  },
  description:
    "La Norvège est la reine des fjords : Geirangerfjord et Nærøyfjord (UNESCO), les aurores boréales de Tromsø et des Lofoten, le Cap Nord et le soleil de minuit, les villages de pêcheurs rouges suspendus sur l'Atlantique. L'une des natures les plus spectaculaires d'Europe — et l'une des plus chères. Le pays des trolls, des trolleys, et de l'huile de poisson.",

  bestPeriods: [
    {
      months: "Juin – Août",
      label: "Été — fjords et soleil de minuit",
      color: "#22c55e",
      description:
        "Randonnées (Trolltunga, Preikestolen), fjords accessibles par kayak et ferry, soleil de minuit au-dessus du cercle polaire. Températures 18–24°C à Oslo.",
      icon: "☀️",
    },
    {
      months: "Décembre – Mars",
      label: "Hiver — aurores boréales",
      color: "#3b82f6",
      description:
        "Aurores boréales à Tromsø et aux Lofoten (meilleur oct–mars). Ski alpin et nordique. Nuit polaire (polarnatt) fascinante.",
      icon: "🌌",
    },
    {
      months: "Septembre – Octobre",
      label: "Automne — couleurs et tranquillité",
      color: "#f59e0b",
      description:
        "Feuillages spectaculaires, fjords sans touristes, premières aurores. Températures fraîches (8–14°C). Idéal pour la randonnée avant la neige.",
      icon: "🍂",
    },
  ],

  weatherCities: [
    {
      id: "oslo",
      name: "Oslo",
      region: "Fjord d'Oslo (sud-est)",
      data: [
        { month: "Jan", temp: -3, rain: 50,  icon: "❄️" },
        { month: "Fév", temp: -2, rain: 40,  icon: "❄️" },
        { month: "Mar", temp:  2, rain: 50,  icon: "⛅" },
        { month: "Avr", temp:  7, rain: 45,  icon: "⛅" },
        { month: "Mai", temp: 13, rain: 55,  icon: "⛅" },
        { month: "Jun", temp: 17, rain: 70,  icon: "☀️" },
        { month: "Jul", temp: 19, rain: 80,  icon: "☀️" },
        { month: "Aoû", temp: 18, rain: 80,  icon: "☀️" },
        { month: "Sep", temp: 13, rain: 80,  icon: "⛅" },
        { month: "Oct", temp:  8, rain: 85,  icon: "⛅" },
        { month: "Nov", temp:  3, rain: 70,  icon: "⛅" },
        { month: "Déc", temp: -2, rain: 55,  icon: "❄️" },
      ],
    },
    {
      id: "tromso",
      name: "Tromsø",
      region: "Arctique (69°N, au-dessus du cercle polaire)",
      data: [
        { month: "Jan", temp: -4, rain: 90,  icon: "❄️" },
        { month: "Fév", temp: -4, rain: 75,  icon: "❄️" },
        { month: "Mar", temp: -1, rain: 70,  icon: "❄️" },
        { month: "Avr", temp:  3, rain: 55,  icon: "⛅" },
        { month: "Mai", temp:  8, rain: 45,  icon: "⛅" },
        { month: "Jun", temp: 12, rain: 50,  icon: "⛅" },
        { month: "Jul", temp: 14, rain: 65,  icon: "⛅" },
        { month: "Aoû", temp: 13, rain: 75,  icon: "⛅" },
        { month: "Sep", temp:  9, rain: 90,  icon: "⛅" },
        { month: "Oct", temp:  4, rain: 95,  icon: "⛅" },
        { month: "Nov", temp:  0, rain: 90,  icon: "❄️" },
        { month: "Déc", temp: -3, rain: 90,  icon: "❄️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: "Fjords — Geirangerfjord et Nærøyfjord (UNESCO)",
      region: "More og Romsdal / Vestland",
      description:
        "Les fjords de l'ouest norvégien sont classés UNESCO : le Geirangerfjord avec ses cascades des Sept Sœurs, et le Nærøyfjord (le plus étroit au monde, 250m) sont les plus photographiés de Scandinavie. Le ferry panoramique, les kayaks dans les eaux turquoise entre des parois à 1 400m, et les villages de montagne constituent l'expérience norvégienne par excellence.",
      wikipedia: "Geirangerfjord",
      tags: ["Fjords", "UNESCO", "Kayak", "Panoramique", "Nature"],
      mustSee: [
        { name: "Croisière Geirangerfjord — Cascades des Sept Sœurs", wikipedia: "Geirangerfjord" },
        { name: "Kayak dans le Nærøyfjord (journée)", wikipedia: "Nærøyfjord" },
        { name: "Panorama depuis Dalsnibba (1 500m au-dessus du fjord)", wikipedia: "Dalsnibba" },
        { name: "Ferry Flåm–Gudvangen (route des fjords de Sognefjord)", wikipedia: "File:Flåmsbahn 172230.jpg" },
      ],
    },
    {
      id: 2,
      name: "Lofoten — Archipel de la lumière",
      region: "Nordland (cercle polaire)",
      description:
        "Les Lofoten sont un archipel de pics granitiques surgissant de l'Atlantique Nord : villages de pêcheurs rouges sur pilotis (rorbuer), plages de sable blanc dans un décor arctique, aurores boréales en hiver et soleil de minuit en été. C'est le lieu le plus photographié de Norvège — et l'un des plus beaux d'Europe.",
      wikipedia: "File:Vågakallen_from_Storvågan,_Austvågøya,_Lofoten,_Norway,_2015_April.jpg",
      tags: ["Archipel", "Aurores", "Pêche", "Spectaculaire", "Nature", "Plage"],
      mustSee: [
        { name: "Village de Reine — le plus photographié de Norvège", wikipedia: "File:Houses_of_Reine_by_Gravdalsbukta,_Moskenes,_Nordland,_Norway,_2022_June.jpg" },
        { name: "Aurores boréales sur les rorbuer (oct–mars)", wikipedia: "File:Lofoten, Norway (Unsplash).jpg" },
        { name: "Randonnée Ryten — vue sur la plage de Kvalvika", wikipedia: "File:Kvalvika-Lofoten-2014.jpg" },
      ],
    },
    {
      id: 3,
      name: "Trolltunga et Preikestolen — Randonnées iconiques",
      region: "Hordaland / Rogaland",
      description:
        "Trolltunga ('la langue du troll') est un rocher suspendu 700m au-dessus du lac Ringedalsvatnet — l'une des randonnées les plus populaires (et exigeantes) d'Europe. Preikestolen ('Rocher de la Chaire') offre un à-pic de 604m sur le Lysefjord avec une vue iconique. Ces deux randonnées se font en autonomie ou avec guide.",
      wikipedia: "Trolltunga",
      tags: ["Randonnée", "Vertige", "Panoramique", "Incontournable"],
      mustSee: [
        { name: "Trolltunga (23km A/R, 1 100m dénivelé) — 2 jours reco.", wikipedia: "Trolltunga" },
        { name: "Preikestolen — 3 800m A/R, vue sur le Lysefjord", wikipedia: "Preikestolen" },
        { name: "Kjeragbolten — rocher coincé dans une fissure à 1 000m", wikipedia: "Kjerag" },
        { name: "Aurlandsfjord depuis Stegastein — belvédère suspendu", wikipedia: "Aurlandsfjord" },
      ],
    },
    {
      id: 4,
      name: "Oslo — Culture et Vikings",
      region: "Fjord d'Oslo",
      description:
        "Oslo est une capitale dynamique dans un cadre naturel exceptionnel : le musée des Bateaux Vikings (trois drakkars originaux du IXe siècle), le quartier de Bygdøy avec ses musées, l'opéra moderne au bord du fjord (on monte sur le toit), et Vigeland Park avec ses 200 sculptures en granit. Une ville qui conjugue nature et culture à vélo.",
      wikipedia: "Oslo",
      tags: ["Ville", "Vikings", "Musées", "Opéra", "Histoire", "Gastronomie", "Architecture"],
      mustSee: [
        { name: "Musée des Bateaux Vikings (Vikingskipshuset) — drakkars originaux", wikipedia: "File:Vikingskipshuset november 2016.jpg" },
        { name: "Opéra d'Oslo — marcher sur le toit de marbre blanc", wikipedia: "File:Oslo Opera house (2015)(2).jpg" },
        { name: "Vigeland Park — 200 sculptures en granit en plein air", wikipedia: "File:NOR-2016-Frogner_Park-Vigeland_Installation-View_from_the_monolith.jpg" },
        { name: "Île de Bygdøy — musées + plage en été (ferry depuis Oslo)", wikipedia: "File:Bygdøy Oslo.jpg" },
      ],
    },
    {
      id: 5,
      name: "Stations de ski — Geilo, Hemsedal & Voss",
      region: "Viken / Vestland",
      description:
        "Entre Oslo et Bergen, les montagnes norvégiennes abritent des stations de ski conviviales surnommées la Suisse norvégienne. Hemsedal, Geilo et Voss offrent pistes alpines, ski de fond et sports extrêmes dans des décors de fjords. En toute saison, le train de Flåm relie ces sommets aux eaux du Hardangerfjord.",
      wikipedia: "Hemsedal",
      tags: ["Ski", "Nature", "Randonnée"],
      mustSee: [
        { name: "Hemsedal — la Suisse norvégienne", wikipedia: "File:Hemsedal nordre imre gaard IMG 1403.JPG" },
        { name: "Voss — ski et sports extrêmes", wikipedia: "File:Voss_Gondol_Passenger_lift_cableway_(taubane)_to_Hanguren_View_from_gondola_cabin_towards_Vossavangen_Vangsvatnet_November_afternoon_sunset_Snow_etc_Voss_Norway_2019-11-20_0583.jpg" },
        { name: "Geilo — station familiale", wikipedia: "File:Winter View over Geilo, Norway.jpg" },
        { name: "Myrdal & Flåm Railway", wikipedia: "File:Flåmsbana MLR.jpg" },
        { name: "Hardangerfjord en été", wikipedia: "File:190_Kilometer_lang_und_bis_zu_893_tief_ist_der_Hardangerfjord._02.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: "La Norvège est l'une des destinations les plus chères du monde. La bière en bar coûte 10–12€, un repas au restaurant 25–40€ minimum. Les transports (trains, ferries) sont chers mais efficaces et spectaculaires. Le camping sauvage est légal (allemensretten).",
    currency: "NOK",
    exchangeRate: "1€ ≈ 11,5 NOK",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: "Hébergement / nuit",
        items: [
          { label: "Camping / DNT (refuges de randonnée)", price: "20–50 €", detail: "Cabanes non gardées en montagne" },
          { label: "Auberge / guesthouse (dortoir ou chambre double)", price: "60–120 €", detail: "Villes et fjords" },
          { label: "Hôtel 3★ Oslo ou Bergen", price: "150–280 €", detail: "Confort standard" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: "Nourriture",
        items: [
          { label: "Sandwich / kebab / supermarché (Rema 1000, Kiwi)", price: "8–15 €", detail: "Option économique indispensable" },
          { label: "Restaurant mid-range (burger, pizza)", price: "20–35 €", detail: "Repas simple en ville" },
          { label: "Scampis grillées au marché de Bergen (Fisketorget)", price: "15–25 €", detail: "Fruits de mer locaux frais" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: "Transport",
        items: [
          { label: "Train Oslo–Bergen (Bergensbanen, 7h)", price: "30–80 €", detail: "L'un des plus beaux voyages en train du monde" },
          { label: "Ferry côtier Hurtigruten (tronçon journée)", price: "80–200 €", detail: "Expérience côtière incontournable" },
          { label: "T-Bane + bus Oslo (ticket journée)", price: "10 €", detail: "Réseau excellent en ville" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: "Activités",
        items: [
          { label: "Kayak dans un fjord (journée guidée)", price: "80–150 €", detail: "Nærøyfjord ou Geirangerfjord" },
          { label: "Chasse aux aurores boréales Tromsø (minibus, 5h)", price: "80–130 €", detail: "Oct–mars, selon météo" },
          { label: "Randonnée guidée Preikestolen ou Trolltunga", price: "60–120 €", detail: "Guide + navette depuis Bergen/Stavanger" },
        ],
      },
    ],
    budgetSummary: [
      { type: "Routard", daily: "150–220 €/j", desc: "Camping + supermarché + transports publics", color: "#22c55e" },
      { type: "Confort", daily: "250–400 €/j", desc: "Hôtel 3★ + restaurants + excursions guidées", color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: "10 jours",
      route: "Oslo (2j) → Train Bergen (1j) → Fjords Flåm/Gudvangen (3j) → Lofoten (4j)",
      budgets: [
        {
          type: "Routard",
          color: "#22c55e",
          total: "2 000 – 3 200 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Oslo (Norwegian, Air France)", amount: "100–300 €" },
            { label: "Hébergement (10 nuits)", amount: "600–1 200 €" },
            { label: "Transports intérieurs (train, ferry, bus)", amount: "500–800 €" },
            { label: "Nourriture (supermarché + quelques restos)", amount: "400–600 €" },
            { label: "Activités & entrées musées", amount: "300–500 €" },
          ],
        },
        {
          type: "Confort",
          color: "#3b82f6",
          total: "4 500 – 7 000 €",
          includesFlights: true,
          breakdown: [
            { label: "Vol A/R Paris–Oslo", amount: "200–500 €" },
            { label: "Hôtels 3★ (10 nuits)", amount: "1 500–2 800 €" },
            { label: "Transports + Hurtigruten tronçon", amount: "800–1 200 €" },
            { label: "Nourriture & restaurants", amount: "700–1 200 €" },
            { label: "Excursions guidées + kayak + aurores", amount: "600–1 000 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: "Vol depuis Paris",  value: "~2h (Norwegian, SAS, Air France direct CDG–Oslo Gardermoen). Nombreux vols quotidiens." },
    { icon: "🪪", label: "Visa",              value: "Aucun visa — espace Schengen. Carte d'identité française suffisante." },
    { icon: "💰", label: "Monnaie",           value: "Couronne norvégienne (NOK). Carte bancaire acceptée partout (même les marchés). Espèces quasi inutiles." },
    { icon: "🗣️", label: "Langue",            value: "Norvégien. Anglais parlé par quasi tous les Norvégiens — communication parfaite." },
    { icon: "🔌", label: "Prise électrique",  value: "Type C/F (européen) — 230V. Aucun adaptateur nécessaire." },
    { icon: "💊", label: "Santé",             value: "Pas de précautions particulières. Tiques dans les zones forestières (été). Carte européenne d'assurance maladie (CEAM) valide." },
    { icon: "🌞", label: "Soleil de minuit",  value: "Au-dessus du cercle polaire (Tromsø, Lofoten) : soleil de minuit de mai à août. Nuit polaire de novembre à janvier." },
    { icon: "🏕️", label: "Droit de passage",  value: "L'Allemensretten permet de camper n'importe où dans la nature (>150m d'une maison) et de randonner librement sur toutes les terres. Règle fondamentale norvégienne." },
  ],
};
