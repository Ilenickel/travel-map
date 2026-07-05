export const ANGOLA = {
  code: "AGO",
  numericId: 24,
  name: { fr: "Angola", en: "Angola" },
  emoji: "🇦🇴",
  capital: { fr: "Luanda", en: "Luanda" },
  language: { fr: "Portugais", en: "Portuguese" },
  currency: { fr: "Kwanza (AOA)", en: "Kwanza (AOA)" },
  timezone: "UTC+1",
  filter: {
    budgetMin: 60, budgetMid: 130,
    tripMin: 1200, tripMid: 2800,
  },
  description: {
    fr: "L'Angola est un pays d'une richesse naturelle extraordinaire : chutes de Kalandula parmi les plus grandes d'Afrique, désert du Namibe au sud, parc national de Kissama et architecture coloniale portugaise de Luanda. Après des décennies de guerre civile terminée en 2002, le pays reconstruit peu à peu son infrastructure touristique.",
    en: "Angola is a country of extraordinary natural wealth: the Kalandula Falls, among the largest in Africa, the Namibe Desert in the south, Kissama National Park and Luanda's Portuguese colonial architecture. After decades of civil war that ended in 2002, the country is gradually rebuilding its tourism infrastructure.",
  },

  bestPeriods: [
    {
      months: { fr: "Mai – Octobre", en: "May – October" },
      label: { fr: "Saison sèche", en: "Dry season" },
      color: "#22c55e",
      description: {
        fr: "Saison sèche sur la côte et dans les basses terres. Températures agréables à Luanda (20–24°C), ciels clairs et idéal pour les parcs nationaux. Les hauts plateaux sont frais et verdoyants.",
        en: "Dry season along the coast and lowlands. Pleasant temperatures in Luanda (20–24°C), clear skies and ideal for national parks. The highlands are cool and lush.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Novembre – Avril", en: "November – April" },
      label: { fr: "Saison des pluies", en: "Rainy season" },
      color: "#f59e0b",
      description: {
        fr: "Les pluies rendent les routes secondaires difficiles mais les paysages sont luxuriants. Les chutes de Kalandula sont à leur maximum. La côte atlantique reste fréquentable.",
        en: "The rains make secondary roads difficult but the scenery is lush. The Kalandula Falls are at their most powerful. The Atlantic coast remains pleasant to visit.",
      },
      icon: "🌧️",
    },
  ],

  weatherCities: [
    {
      id: "luanda",
      name: "Luanda",
      region: { fr: "Luanda (côte)", en: "Luanda (coast)" },
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
      region: { fr: "Hauts Plateaux", en: "Highlands" },
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
      region: { fr: "Province de Luanda", en: "Luanda Province" },
      description: {
        fr: "La capitale angolaise est une ville de contrastes saisissants, mêlant gratte-ciels modernes et quartiers coloniaux portugais restaurés comme la Ilha do Cabo. Le Museu Nacional de Antropologia et la Fortaleza de São Miguel témoignent du riche passé lusophone du pays. Luanda est l'une des villes les plus chères d'Afrique en raison de son économie pétrolière.",
        en: "Angola's capital is a city of striking contrasts, blending modern skyscrapers with restored Portuguese colonial districts such as Ilha do Cabo. The Museu Nacional de Antropologia and the Fortaleza de São Miguel bear witness to the country's rich Lusophone past. Luanda is one of the most expensive cities in Africa due to its oil-driven economy.",
      },
      wikipedia: "Luanda",
      tags: ["Ville", "Culture", "Architecture", "Histoire"],
      mustSee: [
        { name: { fr: "Fortaleza de São Miguel — forteresse portugaise du XVIe siècle", en: "Fortaleza de São Miguel — 16th-century Portuguese fortress" }, wikipedia: "File:Luanda-SMiguelFort2.jpg" },
        { name: { fr: "Ilha do Cabo — presqu'île aux restaurants de fruits de mer", en: "Ilha do Cabo — peninsula with seafood restaurants" }, wikipedia: "File:Luanda Bay and Ilha de Luanda.jpg" },
        { name: { fr: "Museu Nacional de Antropologia — collections ethnographiques", en: "Museu Nacional de Antropologia — ethnographic collections" }, wikipedia: "File:Pic stock-geo ph-mm-manila-ermita-rizal park-old finance bldg. (national museum annex) (2014) a0001.JPG" },
        { name: { fr: "Marginal de Luanda — promenade en bord de mer rénovée", en: "Marginal de Luanda — renovated seafront promenade" }, wikipedia: "Luanda" },
      ],
    },
    {
      id: 2,
      name: { fr: "Chutes de Kalandula", en: "Kalandula Falls" },
      region: { fr: "Province de Malanje", en: "Malanje Province" },
      description: {
        fr: "Les chutes de Kalandula sont parmi les plus grandes d'Afrique par volume d'eau, tombant de 105 mètres de haut sur une largeur de 400 mètres. Entourées d'une forêt tropicale luxuriante, elles sont accessibles depuis Malanje via une route pittoresque à travers les collines angolaises. C'est l'un des sites naturels les plus impressionnants du continent.",
        en: "The Kalandula Falls are among the largest in Africa by water volume, dropping 105 metres over a width of 400 metres. Surrounded by lush tropical forest, they are accessible from Malanje via a scenic road through the Angolan hills. They are one of the most impressive natural sites on the continent.",
      },
      wikipedia: "Kalandula_Falls",
      tags: ["Nature", "Chutes", "Randonnée", "Photographie"],
      mustSee: [
        { name: { fr: "Belvédère principal — vue panoramique sur les chutes", en: "Main viewpoint — panoramic view of the falls" }, wikipedia: "Kalandula_Falls" },
        { name: { fr: "Piscines naturelles — baignade en aval des chutes", en: "Natural pools — swimming downstream of the falls" }, wikipedia: "Kalandula_Falls" },
        { name: { fr: "Forêt riveraine — biodiversité remarquable", en: "Riverine forest — remarkable biodiversity" }, wikipedia: "Kalandula_Falls" },
        { name: { fr: "Malanje — ville de départ avec marché local animé", en: "Malanje — starting town with a lively local market" }, wikipedia: "Malanje" },
      ],
    },
    {
      id: 3,
      name: { fr: "Parc National de Kissama", en: "Kissama National Park" },
      region: { fr: "Province de Bengo", en: "Bengo Province" },
      description: {
        fr: "Le parc national de Kissama, à seulement 70 km au sud de Luanda, est le parc animalier le plus accessible d'Angola. Il abrite éléphants, buffles, zèbres et une riche avifaune grâce à un programme de réintroduction post-guerre soutenu par le Zimbabwe et l'Afrique du Sud. Le parc longe l'Atlantique, offrant des paysages uniques de savane côtière.",
        en: "Kissama National Park, just 70 km south of Luanda, is Angola's most accessible wildlife park. It is home to elephants, buffalo, zebras and a rich birdlife thanks to a post-war reintroduction programme supported by Zimbabwe and South Africa. The park runs along the Atlantic, offering unique coastal savanna landscapes.",
      },
      wikipedia: "Quiçama_National_Park",
      tags: ["Safari", "Faune", "Nature", "Éléphants"],
      mustSee: [
        { name: { fr: "Zone des éléphants — troupeaux réintroduits", en: "Elephant zone — reintroduced herds" }, wikipedia: "Quiçama_National_Park" },
        { name: { fr: "Rivière Kwanza — croisières et pêche", en: "Kwanza River — cruises and fishing" }, wikipedia: "Cuanza_River" },
        { name: { fr: "Côte atlantique du parc — paysages de savane littorale", en: "The park's Atlantic coast — coastal savanna landscapes" }, wikipedia: "Quiçama_National_Park" },
        { name: { fr: "Camping Muanza — base de safari dans le parc", en: "Muanza Camp — safari base within the park" }, wikipedia: "Quiçama_National_Park" },
      ],
    },
    {
      id: 4,
      name: { fr: "Tunda Vala & Namibe", en: "Tunda Vala & Namibe" },
      region: { fr: "Province de Huíla / Namibe", en: "Huíla / Namibe Province" },
      description: {
        fr: "La fissure de Tunda Vala est un escarpement spectaculaire de 1000 mètres de haut dominant les plaines du Namibe, offrant l'un des panoramas les plus saisissants d'Angola. Lubango, la ville voisine, possède une réplique du Christ Rédempteur de Rio. Plus au sud, le désert du Namibe rejoint le désert du Namib namibien, créant des paysages désertiques de toute beauté.",
        en: "The Tunda Vala Gap is a spectacular 1,000-metre-high escarpment overlooking the Namibe plains, offering one of Angola's most striking panoramas. The nearby town of Lubango has a replica of Rio's Christ the Redeemer. Further south, the Namibe Desert meets Namibia's Namib Desert, creating stunningly beautiful desert landscapes.",
      },
      wikipedia: "Tundavala_Gap",
      tags: ["Panorama", "Désert", "Paysage", "Randonnée"],
      mustSee: [
        { name: { fr: "Fissure de Tunda Vala — escarpement vertigineux de 1000m", en: "Tunda Vala Gap — dizzying 1,000m escarpment" }, wikipedia: "Tundavala_Gap" },
        { name: { fr: "Cristo Rei de Lubango — réplique du monument de Rio", en: "Cristo Rei de Lubango — replica of Rio's monument" }, wikipedia: "Lubango" },
        { name: { fr: "Désert du Namibe — dunes et paysages désertiques", en: "Namibe Desert — dunes and desert landscapes" }, wikipedia: "File:Sossusvlei Dunes Namib.jpg" },
        { name: { fr: "Arco — formation rocheuse naturelle en bord de mer", en: "Arco — natural rock formation by the sea" }, wikipedia: "File:Namib Desert surface.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "L'Angola est une destination relativement chère pour l'Afrique subsaharienne, principalement en raison de son économie pétrolière qui gonfle les prix à Luanda. En dehors de la capitale, les coûts sont plus abordables. Le kwanza a connu une forte dévaluation, ce qui peut rendre certains achats avantageux pour les voyageurs payant en euros.",
      en: "Angola is a relatively expensive destination for sub-Saharan Africa, mainly due to its oil-driven economy which inflates prices in Luanda. Outside the capital, costs are more affordable. The kwanza has undergone a sharp devaluation, which can make certain purchases advantageous for travellers paying in euros.",
    },
    currency: "AOA",
    exchangeRate: "1€ ≈ 950 AOA",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Auberge / chambre simple", en: "Guesthouse / simple room" }, price: "20–40 €" },
          { label: { fr: "Hôtel milieu de gamme", en: "Mid-range hotel" }, price: "60–100 €" },
          { label: { fr: "Hôtel de luxe (Luanda)", en: "Luxury hotel (Luanda)" }, price: "150–300 €" },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Restaurant local (muamba de galinha)", en: "Local restaurant (muamba de galinha)" }, price: "5–10 €" },
          { label: { fr: "Restaurant milieu de gamme", en: "Mid-range restaurant" }, price: "15–30 €" },
          { label: { fr: "Supermarché / marché (repas)", en: "Supermarket / market (meal)" }, price: "3–7 €" },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Taxi en ville (Luanda)", en: "City taxi (Luanda)" }, price: "5–15 €" },
          { label: { fr: "Bus interurbain (ex. Luanda–Malanje)", en: "Intercity bus (e.g. Luanda–Malanje)" }, price: "10–20 €" },
          { label: { fr: "Location voiture 4x4", en: "4x4 car rental" }, price: "80–150 €/j" },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Entrée parc Kissama", en: "Kissama park entry" }, price: "10–20 €" },
          { label: { fr: "Safari guidé (demi-journée)", en: "Guided safari (half-day)" }, price: "40–80 €" },
          { label: { fr: "Excursion chutes de Kalandula", en: "Kalandula Falls excursion" }, price: "30–60 €" },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "60–90 €/j", desc: { fr: "Hébergement simple, restaurants locaux, transports en commun", en: "Simple accommodation, local restaurants, public transport" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "130–200 €/j", desc: { fr: "Hôtel milieu de gamme, restaurant convenable, taxi et excursions", en: "Mid-range hotel, decent restaurants, taxi and excursions" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days" },
      route: {
        fr: "Luanda → Kissama → Malanje (Kalandula) → Lubango (Tunda Vala) → Namibe",
        en: "Luanda → Kissama → Malanje (Kalandula) → Lubango (Tunda Vala) → Namibe",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "1 200 – 1 600 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Luanda", en: "Return flight Paris–Luanda" }, amount: "500–700 €" },
            { label: { fr: "Hébergement (9 nuits)", en: "Accommodation (9 nights)" }, amount: "180–360 €" },
            { label: { fr: "Transports locaux", en: "Local transport" }, amount: "120–200 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "200–300 €" },
            { label: { fr: "Activités + entrées", en: "Activities + entry fees" }, amount: "150–250 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "2 800 – 4 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Luanda", en: "Return flight Paris–Luanda" }, amount: "600–800 €" },
            { label: { fr: "Hébergement (9 nuits)", en: "Accommodation (9 nights)" }, amount: "540–900 €" },
            { label: { fr: "Location 4x4", en: "4x4 rental" }, amount: "700–1 200 €" },
            { label: { fr: "Nourriture + boissons", en: "Food + drinks" }, amount: "400–600 €" },
            { label: { fr: "Activités + guides", en: "Activities + guides" }, amount: "400–600 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "Vol direct TAAG depuis Paris-CDG (~8h). Connexions via Lisbonne (TAP), Addis-Abeba (Ethiopian) ou Doha (Qatar Airways).", en: "Direct TAAG flight from Paris-CDG (~8h). Connections via Lisbon (TAP), Addis Ababa (Ethiopian) or Doha (Qatar Airways)." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Visa obligatoire. E-visa disponible en ligne avant le départ (environ 80€). Délai de traitement : 3–7 jours ouvrés.", en: "Visa required. E-visa available online before departure (around €80). Processing time: 3–7 business days." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Kwanza angolais (AOA). Espèces en dollars USD ou euros recommandées. Distributeurs disponibles à Luanda mais rares en province.", en: "Angolan kwanza (AOA). Cash in US dollars or euros recommended. ATMs available in Luanda but scarce in the provinces." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Portugais (langue officielle). Langues nationales : umbundu, kimbundu, kikongo. Peu d'anglais parlé.", en: "Portuguese (official language). National languages: Umbundu, Kimbundu, Kikongo. Little English spoken." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type C (européenne ronde) et Type F. Tension 220V. Coupures de courant fréquentes, prévoyez une batterie externe.", en: "Type C (round European) and Type F. 220V voltage. Frequent power outages — bring a portable charger." } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Vaccin fièvre jaune obligatoire. Paludisme présent toute l'année : chimioprophylaxie recommandée. Hépathite A/B, typhoïde conseillés. Eau en bouteille uniquement.", en: "Yellow fever vaccination required. Malaria present year-round: chemoprophylaxis recommended. Hepatitis A/B and typhoid advised. Bottled water only." } },
    { icon: "⚠️", label: { fr: "Sécurité", en: "Safety" }, value: { fr: "Situation générale stable. Luanda : vigilance contre le vol à la tire. Éviter les déplacements de nuit et les quartiers périphériques. Mines terrestres encore possibles sur certaines pistes rurales reculées.", en: "Generally stable situation. Luanda: watch out for pickpocketing. Avoid travelling at night and outlying districts. Landmines still possible on some remote rural tracks." } },
    { icon: "🚗", label: { fr: "Déplacements", en: "Getting around" }, value: { fr: "4x4 indispensable hors des grands axes. Pistes difficiles en saison des pluies. Des vols intérieurs desservent Huambo, Lubango, Malanje.", en: "4x4 essential off main roads. Tracks are difficult during the rainy season. Domestic flights serve Huambo, Lubango, and Malanje." } },
  ],
};
