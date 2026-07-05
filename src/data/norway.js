export const NORWAY = {
  code: "NOR",
  numericId: 578,
  name: { fr: "Norvège", en: "Norway" },
  emoji: "🇳🇴",
  capital: { fr: "Oslo", en: "Oslo" },
  language: { fr: "Norvégien (bokmål, nynorsk), Same", en: "Norwegian (Bokmål, Nynorsk), Sami" },
  currency: { fr: "Couronne norvégienne (NOK)", en: "Norwegian krone (NOK)" },
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 150, budgetMid: 250,
    tripMin: 2000, tripMid: 4500,
  },
  description: {
    fr: "La Norvège est la reine des fjords : Geirangerfjord et Nærøyfjord (UNESCO), les aurores boréales de Tromsø et des Lofoten, le Cap Nord et le soleil de minuit, les villages de pêcheurs rouges suspendus sur l'Atlantique. L'une des natures les plus spectaculaires d'Europe — et l'une des plus chères. Le pays des trolls, des trolleys, et de l'huile de poisson.",
    en: "Norway is the queen of fjords: the UNESCO-listed Geirangerfjord and Nærøyfjord, the northern lights over Tromsø and the Lofoten Islands, the North Cape and the midnight sun, red fishing villages perched over the Atlantic. One of the most spectacular natural landscapes in Europe — and one of the most expensive. The land of trolls, trams, and fish oil.",
  },

  bestPeriods: [
    {
      months: { fr: "Juin – Août", en: "June – August" },
      label: { fr: "Été — fjords et soleil de minuit", en: "Summer — fjords and midnight sun" },
      color: "#22c55e",
      description: {
        fr: "Randonnées (Trolltunga, Preikestolen), fjords accessibles par kayak et ferry, soleil de minuit au-dessus du cercle polaire. Températures 18–24°C à Oslo.",
        en: "Hiking (Trolltunga, Preikestolen), fjords accessible by kayak and ferry, midnight sun above the Arctic Circle. Temperatures 18–24°C in Oslo.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Décembre – Mars", en: "December – March" },
      label: { fr: "Hiver — aurores boréales", en: "Winter — northern lights" },
      color: "#3b82f6",
      description: {
        fr: "Aurores boréales à Tromsø et aux Lofoten (meilleur oct–mars). Ski alpin et nordique. Nuit polaire (polarnatt) fascinante.",
        en: "Northern lights in Tromsø and the Lofoten Islands (best Oct–Mar). Alpine and cross-country skiing. Fascinating polar night (polarnatt).",
      },
      icon: "🌌",
    },
    {
      months: { fr: "Septembre – Octobre", en: "September – October" },
      label: { fr: "Automne — couleurs et tranquillité", en: "Autumn — colours and quiet" },
      color: "#f59e0b",
      description: {
        fr: "Feuillages spectaculaires, fjords sans touristes, premières aurores. Températures fraîches (8–14°C). Idéal pour la randonnée avant la neige.",
        en: "Spectacular foliage, fjords without crowds, first northern lights. Cool temperatures (8–14°C). Ideal for hiking before the snow.",
      },
      icon: "🍂",
    },
  ],

  weatherCities: [
    {
      id: "oslo",
      name: "Oslo",
      region: { fr: "Fjord d'Oslo (sud-est)", en: "Oslofjord (south-east)" },
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
      region: { fr: "Arctique (69°N, au-dessus du cercle polaire)", en: "Arctic (69°N, above the Arctic Circle)" },
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
      name: { fr: "Fjords — Geirangerfjord et Nærøyfjord (UNESCO)", en: "Fjords — Geirangerfjord and Nærøyfjord (UNESCO)" },
      region: { fr: "More og Romsdal / Vestland", en: "Møre og Romsdal / Vestland" },
      description: {
        fr: "Les fjords de l'ouest norvégien sont classés UNESCO : le Geirangerfjord avec ses cascades des Sept Sœurs, et le Nærøyfjord (le plus étroit au monde, 250m) sont les plus photographiés de Scandinavie. Le ferry panoramique, les kayaks dans les eaux turquoise entre des parois à 1 400m, et les villages de montagne constituent l'expérience norvégienne par excellence.",
        en: "The fjords of western Norway are UNESCO-listed: Geirangerfjord with its Seven Sisters waterfalls, and the Nærøyfjord (the narrowest in the world, 250m) are the most photographed in Scandinavia. The panoramic ferry, kayaking in turquoise waters between 1,400m cliffs, and mountain villages make up the quintessential Norwegian experience.",
      },
      wikipedia: "Geirangerfjord",
      tags: ["Fjords", "UNESCO", "Kayak", "Panoramique", "Nature"],
      mustSee: [
        { name: { fr: "Croisière Geirangerfjord — Cascades des Sept Sœurs", en: "Geirangerfjord cruise — Seven Sisters waterfalls" }, wikipedia: "Geirangerfjord" },
        { name: { fr: "Kayak dans le Nærøyfjord (journée)", en: "Kayaking in the Nærøyfjord (day trip)" }, wikipedia: "Nærøyfjord" },
        { name: { fr: "Panorama depuis Dalsnibba (1 500m au-dessus du fjord)", en: "View from Dalsnibba (1,500m above the fjord)" }, wikipedia: "Dalsnibba" },
        { name: { fr: "Ferry Flåm–Gudvangen (route des fjords de Sognefjord)", en: "Flåm–Gudvangen ferry (Sognefjord fjord route)" }, wikipedia: "File:Flåmsbahn 172230.jpg" },
      ],
    },
    {
      id: 2,
      name: { fr: "Lofoten — Archipel de la lumière", en: "Lofoten — Islands of light" },
      region: { fr: "Nordland (cercle polaire)", en: "Nordland (Arctic Circle)" },
      description: {
        fr: "Les Lofoten sont un archipel de pics granitiques surgissant de l'Atlantique Nord : villages de pêcheurs rouges sur pilotis (rorbuer), plages de sable blanc dans un décor arctique, aurores boréales en hiver et soleil de minuit en été. C'est le lieu le plus photographié de Norvège — et l'un des plus beaux d'Europe.",
        en: "The Lofoten Islands are an archipelago of granite peaks rising from the North Atlantic: red fishing villages on stilts (rorbuer), white sand beaches in an Arctic setting, northern lights in winter and midnight sun in summer. It's the most photographed place in Norway — and one of the most beautiful in Europe.",
      },
      wikipedia: "File:Vågakallen_from_Storvågan,_Austvågøya,_Lofoten,_Norway,_2015_April.jpg",
      tags: ["Archipel", "Aurores", "Pêche", "Spectaculaire", "Nature", "Plage"],
      mustSee: [
        { name: { fr: "Village de Reine — le plus photographié de Norvège", en: "Reine village — the most photographed in Norway" }, wikipedia: "File:Houses_of_Reine_by_Gravdalsbukta,_Moskenes,_Nordland,_Norway,_2022_June.jpg" },
        { name: { fr: "Aurores boréales sur les rorbuer (oct–mars)", en: "Northern lights over the rorbuer (Oct–Mar)" }, wikipedia: "File:Lofoten, Norway (Unsplash).jpg" },
        { name: { fr: "Randonnée Ryten — vue sur la plage de Kvalvika", en: "Ryten hike — view over Kvalvika beach" }, wikipedia: "File:Kvalvika-Lofoten-2014.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Trolltunga et Preikestolen — Randonnées iconiques", en: "Trolltunga and Preikestolen — Iconic hikes" },
      region: { fr: "Hordaland / Rogaland", en: "Hordaland / Rogaland" },
      description: {
        fr: "Trolltunga ('la langue du troll') est un rocher suspendu 700m au-dessus du lac Ringedalsvatnet — l'une des randonnées les plus populaires (et exigeantes) d'Europe. Preikestolen ('Rocher de la Chaire') offre un à-pic de 604m sur le Lysefjord avec une vue iconique. Ces deux randonnées se font en autonomie ou avec guide.",
        en: "Trolltunga ('the troll's tongue') is a rock jutting out 700m above Lake Ringedalsvatnet — one of the most popular (and demanding) hikes in Europe. Preikestolen ('Pulpit Rock') offers a 604m sheer drop over the Lysefjord with an iconic view. Both hikes can be done independently or with a guide.",
      },
      wikipedia: "Trolltunga",
      tags: ["Randonnée", "Vertige", "Panoramique", "Incontournable"],
      mustSee: [
        { name: { fr: "Trolltunga (23km A/R, 1 100m dénivelé) — 2 jours reco.", en: "Trolltunga (23km round trip, 1,100m elevation) — 2 days recommended" }, wikipedia: "Trolltunga" },
        { name: { fr: "Preikestolen — 3 800m A/R, vue sur le Lysefjord", en: "Preikestolen — 3,800m round trip, view over the Lysefjord" }, wikipedia: "Preikestolen" },
        { name: { fr: "Kjeragbolten — rocher coincé dans une fissure à 1 000m", en: "Kjeragbolten — boulder wedged in a crevasse at 1,000m" }, wikipedia: "Kjerag" },
        { name: { fr: "Aurlandsfjord depuis Stegastein — belvédère suspendu", en: "Aurlandsfjord from Stegastein — suspended viewpoint" }, wikipedia: "Aurlandsfjord" },
      ],
    },
    {
      id: 4,
      name: { fr: "Oslo — Culture et Vikings", en: "Oslo — Culture and Vikings" },
      region: { fr: "Fjord d'Oslo", en: "Oslofjord" },
      description: {
        fr: "Oslo est une capitale dynamique dans un cadre naturel exceptionnel : le musée des Bateaux Vikings (trois drakkars originaux du IXe siècle), le quartier de Bygdøy avec ses musées, l'opéra moderne au bord du fjord (on monte sur le toit), et Vigeland Park avec ses 200 sculptures en granit. Une ville qui conjugue nature et culture à vélo.",
        en: "Oslo is a dynamic capital in an exceptional natural setting: the Viking Ship Museum (three original 9th-century longships), the Bygdøy district with its museums, the modern opera house by the fjord (you can walk on the roof), and Vigeland Park with its 200 granite sculptures. A city that combines nature and culture, best explored by bike.",
      },
      wikipedia: "Oslo",
      tags: ["Ville", "Vikings", "Musées", "Opéra", "Histoire", "Gastronomie", "Architecture"],
      mustSee: [
        { name: { fr: "Musée des Bateaux Vikings (Vikingskipshuset) — drakkars originaux", en: "Viking Ship Museum (Vikingskipshuset) — original longships" }, wikipedia: "File:Vikingskipshuset november 2016.jpg" },
        { name: { fr: "Opéra d'Oslo — marcher sur le toit de marbre blanc", en: "Oslo Opera House — walk on the white marble roof" }, wikipedia: "File:Oslo Opera house (2015)(2).jpg" },
        { name: { fr: "Vigeland Park — 200 sculptures en granit en plein air", en: "Vigeland Park — 200 outdoor granite sculptures" }, wikipedia: "File:NOR-2016-Frogner_Park-Vigeland_Installation-View_from_the_monolith.jpg" },
        { name: { fr: "Île de Bygdøy — musées + plage en été (ferry depuis Oslo)", en: "Bygdøy Island — museums + beach in summer (ferry from Oslo)" }, wikipedia: "File:Bygdøy Oslo.jpg" },
      ],
    },
    {
      id: 5,
      name: { fr: "Stations de ski — Geilo, Hemsedal & Voss", en: "Ski resorts — Geilo, Hemsedal & Voss" },
      region: { fr: "Viken / Vestland", en: "Viken / Vestland" },
      description: {
        fr: "Entre Oslo et Bergen, les montagnes norvégiennes abritent des stations de ski conviviales surnommées la Suisse norvégienne. Hemsedal, Geilo et Voss offrent pistes alpines, ski de fond et sports extrêmes dans des décors de fjords. En toute saison, le train de Flåm relie ces sommets aux eaux du Hardangerfjord.",
        en: "Between Oslo and Bergen, the Norwegian mountains host friendly ski resorts nicknamed the Norwegian Switzerland. Hemsedal, Geilo and Voss offer alpine slopes, cross-country skiing and extreme sports amid fjord scenery. Year-round, the Flåm railway connects these peaks to the waters of the Hardangerfjord.",
      },
      wikipedia: "Hemsedal",
      tags: ["Ski", "Nature", "Randonnée"],
      mustSee: [
        { name: { fr: "Hemsedal — la Suisse norvégienne", en: "Hemsedal — the Norwegian Switzerland" }, wikipedia: "File:Hemsedal nordre imre gaard IMG 1403.JPG" },
        { name: { fr: "Voss — ski et sports extrêmes", en: "Voss — skiing and extreme sports" }, wikipedia: "File:Voss_Gondol_Passenger_lift_cableway_(taubane)_to_Hanguren_View_from_gondola_cabin_towards_Vossavangen_Vangsvatnet_November_afternoon_sunset_Snow_etc_Voss_Norway_2019-11-20_0583.jpg" },
        { name: { fr: "Geilo — station familiale", en: "Geilo — family resort" }, wikipedia: "File:Winter View over Geilo, Norway.jpg" },
        { name: { fr: "Myrdal & Flåm Railway", en: "Myrdal & Flåm Railway" }, wikipedia: "File:Flåmsbana MLR.jpg" },
        { name: { fr: "Hardangerfjord en été", en: "Hardangerfjord in summer" }, wikipedia: "File:190_Kilometer_lang_und_bis_zu_893_tief_ist_der_Hardangerfjord._02.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Norvège est l'une des destinations les plus chères du monde. La bière en bar coûte 10–12€, un repas au restaurant 25–40€ minimum. Les transports (trains, ferries) sont chers mais efficaces et spectaculaires. Le camping sauvage est légal (allemensretten).",
      en: "Norway is one of the most expensive destinations in the world. A beer in a bar costs 10–12€, a restaurant meal at least 25–40€. Transport (trains, ferries) is expensive but efficient and spectacular. Wild camping is legal (allemensretten).",
    },
    currency: "NOK",
    exchangeRate: "1€ ≈ 11,5 NOK",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Camping / DNT (refuges de randonnée)", en: "Camping / DNT (hiking huts)" }, price: "20–50 €", detail: { fr: "Cabanes non gardées en montagne", en: "Unstaffed mountain cabins" } },
          { label: { fr: "Auberge / guesthouse (dortoir ou chambre double)", en: "Hostel / guesthouse (dorm or double room)" }, price: "60–120 €", detail: { fr: "Villes et fjords", en: "Towns and fjords" } },
          { label: { fr: "Hôtel 3★ Oslo ou Bergen", en: "3★ hotel in Oslo or Bergen" }, price: "110–200 €", detail: { fr: "Confort standard", en: "Standard comfort" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Sandwich / kebab / supermarché (Rema 1000, Kiwi)", en: "Sandwich / kebab / supermarket (Rema 1000, Kiwi)" }, price: "8–15 €", detail: { fr: "Option économique indispensable", en: "Essential budget option" } },
          { label: { fr: "Restaurant mid-range (burger, pizza)", en: "Mid-range restaurant (burger, pizza)" }, price: "20–45 €", detail: { fr: "Repas simple en ville, dîner à table dès 30–40 €", en: "Simple meal in town, sit-down dinner from 30–40 €" } },
          { label: { fr: "Scampis grillées au marché de Bergen (Fisketorget)", en: "Grilled prawns at Bergen's fish market (Fisketorget)" }, price: "15–25 €", detail: { fr: "Fruits de mer locaux frais", en: "Fresh local seafood" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Train Oslo–Bergen (Bergensbanen, 7h)", en: "Oslo–Bergen train (Bergensbanen, 7h)" }, price: "30–80 €", detail: { fr: "L'un des plus beaux voyages en train du monde", en: "One of the most beautiful train journeys in the world" } },
          { label: { fr: "Ferry côtier Hurtigruten (tronçon journée)", en: "Hurtigruten coastal ferry (day segment)" }, price: "80–200 €", detail: { fr: "Expérience côtière incontournable", en: "A must-do coastal experience" } },
          { label: { fr: "T-Bane + bus Oslo (ticket journée)", en: "T-Bane + bus in Oslo (day ticket)" }, price: "10 €", detail: { fr: "Réseau excellent en ville", en: "Excellent city network" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Kayak dans un fjord (journée guidée)", en: "Kayaking in a fjord (guided day trip)" }, price: "80–150 €", detail: { fr: "Nærøyfjord ou Geirangerfjord", en: "Nærøyfjord or Geirangerfjord" } },
          { label: { fr: "Chasse aux aurores boréales Tromsø (minibus, 5h)", en: "Northern lights hunt in Tromsø (minibus, 5h)" }, price: "80–130 €", detail: { fr: "Oct–mars, selon météo", en: "Oct–Mar, weather dependent" } },
          { label: { fr: "Randonnée guidée Preikestolen ou Trolltunga", en: "Guided hike to Preikestolen or Trolltunga" }, price: "60–120 €", detail: { fr: "Guide + navette depuis Bergen/Stavanger", en: "Guide + shuttle from Bergen/Stavanger" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "150–220 €/j", desc: { fr: "Camping + supermarché + transports publics", en: "Camping + supermarket + public transport" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "250–400 €/j", desc: { fr: "Hôtel 3★ + restaurants + excursions guidées", en: "3★ hotel + restaurants + guided excursions" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days" },
      route: {
        fr: "Oslo (2j) → Train Bergen (1j) → Fjords Flåm/Gudvangen (3j) → Lofoten (4j)",
        en: "Oslo (2d) → Train to Bergen (1d) → Flåm/Gudvangen fjords (3d) → Lofoten (4d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "2 000 – 3 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Oslo (Norwegian, Air France)", en: "Return flight Paris–Oslo (Norwegian, Air France)" }, amount: "100–300 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)" }, amount: "600–1 200 €" },
            { label: { fr: "Transports intérieurs (train, ferry, bus)", en: "Domestic transport (train, ferry, bus)" }, amount: "500–800 €" },
            { label: { fr: "Nourriture (supermarché + quelques restos)", en: "Food (supermarket + a few restaurants)" }, amount: "400–600 €" },
            { label: { fr: "Activités & entrées musées", en: "Activities & museum entries" }, amount: "300–500 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "4 500 – 7 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Oslo", en: "Return flight Paris–Oslo" }, amount: "200–500 €" },
            { label: { fr: "Hôtels 3★ (10 nuits)", en: "3★ hotels (10 nights)" }, amount: "1 500–2 800 €" },
            { label: { fr: "Transports + Hurtigruten tronçon", en: "Transport + Hurtigruten segment" }, amount: "800–1 200 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants" }, amount: "700–1 200 €" },
            { label: { fr: "Excursions guidées + kayak + aurores", en: "Guided excursions + kayak + northern lights" }, amount: "600–1 000 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~2h (Norwegian, SAS, Air France direct CDG–Oslo Gardermoen). Nombreux vols quotidiens.", en: "~2h (Norwegian, SAS, direct Air France CDG–Oslo Gardermoen). Many daily flights." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Aucun visa — espace Schengen. Carte d'identité française suffisante.", en: "No visa required — Schengen area. A French ID card is sufficient." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Couronne norvégienne (NOK). Carte bancaire acceptée partout (même les marchés). Espèces quasi inutiles.", en: "Norwegian krone (NOK). Cards accepted everywhere (even markets). Cash is almost never needed." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Norvégien. Anglais parlé par quasi tous les Norvégiens — communication parfaite.", en: "Norwegian. English is spoken by almost all Norwegians — communication is easy." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type C/F (européen) — 230V. Aucun adaptateur nécessaire.", en: "Type C/F (European) — 230V. No adapter needed." } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Pas de précautions particulières. Tiques dans les zones forestières (été). Carte européenne d'assurance maladie (CEAM) valide.", en: "No particular precautions needed. Ticks in forested areas (summer). European Health Insurance Card (EHIC) valid." } },
    { icon: "🌞", label: { fr: "Soleil de minuit", en: "Midnight sun" }, value: { fr: "Au-dessus du cercle polaire (Tromsø, Lofoten) : soleil de minuit de mai à août. Nuit polaire de novembre à janvier.", en: "Above the Arctic Circle (Tromsø, Lofoten): midnight sun from May to August. Polar night from November to January." } },
    { icon: "🏕️", label: { fr: "Droit de passage", en: "Right to roam" }, value: { fr: "L'Allemensretten permet de camper n'importe où dans la nature (>150m d'une maison) et de randonner librement sur toutes les terres. Règle fondamentale norvégienne.", en: "The Allemensretten allows camping anywhere in nature (>150m from a house) and hiking freely on all land. A fundamental Norwegian rule." } },
  ],
};
