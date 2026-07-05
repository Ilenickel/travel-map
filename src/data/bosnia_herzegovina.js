export const BOSNIA_HERZEGOVINA = {
  code: "BIH",
  numericId: 70,
  name: { fr: "Bosnie-Herzégovine", en: "Bosnia and Herzegovina" },
  emoji: "🇧🇦",
  capital: { fr: "Sarajevo", en: "Sarajevo" },
  language: { fr: "Bosnien, Serbe, Croate", en: "Bosnian, Serbian, Croatian" },
  currency: { fr: "Mark convertible (BAM)", en: "Convertible mark (BAM)" },
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 35, budgetMid: 65,
    tripMin: 700, tripMid: 1500,
  },
  description: {
    fr: "La Bosnie-Herzégovine est un carrefour de civilisations unique en Europe : Sarajevo, ville où l'Orient rencontre l'Occident (l'unique capitale européenne avec une mosquée, une cathédrale orthodoxe, une église catholique et une synagogue à 500m les unes des autres), Mostar et son pont ottoman (Stari Most, UNESCO), les chutes de Kravice et les canyons de la Neretva.",
    en: "Bosnia and Herzegovina is a unique crossroads of civilisations in Europe: Sarajevo, where East meets West (the only European capital with a mosque, an Orthodox cathedral, a Catholic church and a synagogue all within 500 metres of one another), Mostar and its Ottoman bridge (Stari Most, UNESCO), the Kravice waterfalls and the Neretva canyons.",
  },

  bestPeriods: [
    {
      months: { fr: "Juin – Septembre", en: "June – September" },
      label: { fr: "Été balkanique", en: "Balkan summer" },
      color: "#22c55e",
      description: {
        fr: "Mostar et la côte herzégovinienne idéales (25–30°C), Sarajevo agréable (20–25°C), cascades et canyons au maximum. Juillet-août chaud à Mostar mais magnifique.",
        en: "Ideal for Mostar and the Herzegovinian countryside (25–30°C), with pleasant weather in Sarajevo (20–25°C) and waterfalls and canyons at their best. July and August are hot in Mostar but stunning.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Décembre – Mars", en: "December – March" },
      label: { fr: "Ski olympique", en: "Olympic skiing" },
      color: "#3b82f6",
      description: {
        fr: "Ski à Jahorina et Bjelašnica (stations des JO 1984). Sarajevo sous la neige — atmosphère unique. Températures -5 à -10°C en montagne.",
        en: "Skiing in Jahorina and Bjelašnica (the 1984 Olympic resorts). Sarajevo under snow has a one-of-a-kind atmosphere. Temperatures range from -5 to -10°C in the mountains.",
      },
      icon: "⛷️",
    },
  ],

  weatherCities: [
    {
      id: "sarajevo",
      name: "Sarajevo",
      region: { fr: "Vallée de la Miljacka (capitale)", en: "Miljacka Valley (capital)" },
      data: [
        { month: "Jan", temp: -1, rain: 65,  icon: "❄️" },
        { month: "Fév", temp:  1, rain: 60,  icon: "❄️" },
        { month: "Mar", temp:  6, rain: 75,  icon: "⛅" },
        { month: "Avr", temp: 11, rain: 80,  icon: "⛅" },
        { month: "Mai", temp: 16, rain: 90,  icon: "⛅" },
        { month: "Jun", temp: 18, rain: 90,  icon: "☀️" },
        { month: "Jul", temp: 21, rain: 75,  icon: "☀️" },
        { month: "Aoû", temp: 21, rain: 70,  icon: "☀️" },
        { month: "Sep", temp: 17, rain: 80,  icon: "⛅" },
        { month: "Oct", temp: 11, rain: 80,  icon: "⛅" },
        { month: "Nov", temp:  5, rain: 85,  icon: "⛅" },
        { month: "Déc", temp:  0, rain: 75,  icon: "❄️" },
      ],
    },
    {
      id: "mostar",
      name: "Mostar",
      region: { fr: "Herzégovine (vallée de la Neretva)", en: "Herzegovina (Neretva Valley)" },
      data: [
        { month: "Jan", temp:  5, rain: 140, icon: "⛅" },
        { month: "Fév", temp:  7, rain: 110, icon: "⛅" },
        { month: "Mar", temp: 11, rain: 100, icon: "⛅" },
        { month: "Avr", temp: 15, rain: 90,  icon: "⛅" },
        { month: "Mai", temp: 20, rain: 65,  icon: "☀️" },
        { month: "Jun", temp: 25, rain: 45,  icon: "☀️" },
        { month: "Jul", temp: 28, rain: 30,  icon: "⛅" },
        { month: "Aoû", temp: 28, rain: 35,  icon: "⛅" },
        { month: "Sep", temp: 23, rain: 70,  icon: "☀️" },
        { month: "Oct", temp: 16, rain: 110, icon: "⛅" },
        { month: "Nov", temp: 10, rain: 155, icon: "⛅" },
        { month: "Déc", temp:  6, rain: 175, icon: "🌧️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Sarajevo — Carrefour de civilisations", en: "Sarajevo — Crossroads of Civilisations" },
      region: { fr: "Capitale", en: "Capital" },
      description: {
        fr: "Sarajevo est la seule ville d'Europe où l'on peut entendre l'appel à la prière depuis une mosquée ottomane et les cloches d'une cathédrale catholique au même moment : le quartier ottoman de Baščaršija (bazars, fontaines, artisans de cuivre), le coin de l'assassinat de l'Archiduc François-Ferdinand (1914 — déclencheur de la WWI), et la Bibliothèque Nationale incendiée en 1992 — Sarajevo porte l'histoire d'Europe entière.",
        en: "Sarajevo is the only city in Europe where you can hear the call to prayer from an Ottoman mosque and the bells of a Catholic cathedral at the same time: from the Ottoman quarter of Baščaršija (bazaars, fountains and copper craftsmen) to the spot where Archduke Franz Ferdinand was assassinated (1914 — the spark that set off World War I) and the National Library burned in 1992, Sarajevo carries the history of Europe as a whole.",
      },
      wikipedia: "Sarajevo",
      tags: ["Histoire", "Ottoman", "WWI", "Carrefour", "Ville", "Architecture", "Gastronomie"],
      mustSee: [
        { name: { fr: "Baščaršija — grand bazar ottoman du XVe siècle", en: "Baščaršija — great 15th-century Ottoman bazaar" }, wikipedia: "Baščaršija" },
        { name: { fr: "Pont Latin — lieu de l'assassinat de François-Ferdinand (28 juin 1914)", en: "Latin Bridge — site of Franz Ferdinand's assassination (28 June 1914)" }, wikipedia: "Latin_Bridge" },
        { name: { fr: "Mosquée Gazi Husrev-beg (1531) — la plus importante des Balkans", en: "Gazi Husrev-beg Mosque (1531) — the most important mosque in the Balkans" }, wikipedia: "Gazi_Husrev-beg_Mosque" },
      ],
    },
    {
      id: 2,
      name: { fr: "Mostar — Stari Most (UNESCO)", en: "Mostar — Stari Most (UNESCO)" },
      region: { fr: "Herzégovine", en: "Herzegovina" },
      description: {
        fr: "Mostar est la perle de l'Herzégovine : le Stari Most ('Vieux Pont', UNESCO) est un arc de pierre ottoman de 1566 — détruit en 1993 et reconstruit pierre par pierre en 2004 — symbole de la réconciliation bosniaque. Les plongeons depuis le pont (24m de hauteur) par les Mostari (plongeurs locaux) sont un rituel. Le vieux quartier ottoman (Kujundžiluk) est parfaitement préservé.",
        en: "Mostar is the jewel of Herzegovina: Stari Most ('Old Bridge', UNESCO) is an Ottoman stone arch from 1566 — destroyed in 1993 and rebuilt stone by stone in 2004 — that has become a symbol of Bosnian reconciliation. Dives from the bridge (24 metres high) by the Mostari, the local divers, are a ritual. The old Ottoman quarter of Kujundžiluk is beautifully preserved.",
      },
      wikipedia: "Mostar",
      tags: ["UNESCO", "Pont ottoman", "Réconciliation", "Neretva", "Architecture"],
      mustSee: [
        { name: { fr: "Stari Most (Vieux Pont, UNESCO) — arc ottoman de 1566 reconstruit en 2004", en: "Stari Most (Old Bridge, UNESCO) — 1566 Ottoman arch rebuilt in 2004" }, wikipedia: "Stari_Most" },
        { name: { fr: "Plongeons des Mostari depuis le pont (24m, spectacle régulier)", en: "The Mostari's bridge dives (24m, regular spectacle)" }, wikipedia: "Mostar" },
        { name: { fr: "Kujundžiluk — bazar ottoman, artisans et cafés donnant sur la Neretva", en: "Kujundžiluk — Ottoman bazaar, artisans and cafés overlooking the Neretva" }, wikipedia: "File:Mostar BW 2024-10-01 12-51-16.jpg" },
        { name: { fr: "Mosquée Koski Mehmed Pasha — minaret avec vue sur le pont", en: "Koski Mehmed Pasha Mosque — minaret with a view over the bridge" }, wikipedia: "File:Mehmed Koski pašina džamija by Pudelek.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Kravice et canyons de l'Herzégovine", en: "Kravice and the Herzegovina canyons" },
      region: { fr: "Herzégovine (ouest)", en: "Western Herzegovina" },
      description: {
        fr: "Les cascades de Kravice sont les chutes les plus impressionnantes des Balkans occidentaux : une demi-lune de 25m de haut sur 120m de large, avec une piscine naturelle turquoise au pied idéale pour la baignade. À proximité : le lac de Jablanica, les canyons de la Neretva, et Počitelj — village fortifié ottoman sur une colline au-dessus du fleuve.",
        en: "The Kravice waterfalls are the most impressive falls in the western Balkans: a 25-metre-high crescent stretching 120 metres wide, with a turquoise natural pool at the base that is perfect for swimming. Nearby are Lake Jablanica, the Neretva canyons, and Počitelj — an Ottoman fortified village perched on a hill above the river.",
      },
      wikipedia: "File:Waterfalls Kravica 5, Bosnia and Herzegovina.jpg",
      tags: ["Cascades", "Baignade", "Canyon", "Ottoman", "Nature", "Randonnée"],
      mustSee: [
        { name: { fr: "Cascades de Kravice — demi-cercle turquoise de 25m de haut", en: "Kravice waterfalls — a 25-metre-high turquoise semicircle" }, wikipedia: "File:Kravice-kosk9.jpg" },
        { name: { fr: "Počitelj — village fortifié ottoman du XVe siècle", en: "Počitelj — 15th-century Ottoman fortified village" }, wikipedia: "Počitelj" },
        { name: { fr: "Canyon de la Neretva — kayak et rafting depuis Konjic", en: "Neretva Canyon — kayaking and rafting from Konjic" }, wikipedia: "Neretva" },
        { name: { fr: "Blagaj — source de la Buna sous une falaise avec tekke derviche du XVIe s.", en: "Blagaj — the Buna spring beneath a cliff, with a 16th-century dervish tekke" }, wikipedia: "File:Blagaj tekke 2020.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Stations olympiques — Jahorina et Bjelašnica", en: "Olympic resorts — Jahorina and Bjelašnica" },
      region: { fr: "Sarajevo (montagne)", en: "Sarajevo Mountains" },
      description: {
        fr: "Jahorina et Bjelašnica sont les deux stations de ski des Jeux Olympiques d'hiver de 1984 — les seuls JO jamais organisés dans un pays qui n'existe plus (Yougoslavie). Certaines infrastructures des JO sont encore visibles (bobsleigh de Trebević, maintenant accessible en télécabine). En été, les montagnes autour de Sarajevo offrent des randonnées dans des prairies alpines.",
        en: "Jahorina and Bjelašnica are the two ski resorts from the 1984 Winter Olympics — the only Olympics ever held in a country that no longer exists (Yugoslavia). Some Olympic infrastructure is still visible, including the Trebević bobsleigh track, now reached by cable car. In summer, the mountains around Sarajevo offer hikes through alpine meadows.",
      },
      wikipedia: "Jahorina",
      tags: ["JO 1984", "Ski", "Histoire", "Yougoslavie", "Randonnée", "Nature"],
      mustSee: [
        { name: { fr: "Piste de bobsleigh des JO 1984 sur Trebević (maintenant sentier graffiti)", en: "1984 Olympic bobsleigh track on Trebević (now a graffiti-covered trail)" }, wikipedia: "Trebević" },
        { name: { fr: "Ski à Jahorina (1 900m) — ancienne piste olympique encore fonctionnelle", en: "Skiing in Jahorina (1,900m) — a former Olympic slope still in use" }, wikipedia: "Jahorina" },
        { name: { fr: "Bjelašnica (2 067m) — panorama sur Sarajevo et l'Herzégovine", en: "Bjelašnica (2,067m) — views over Sarajevo and Herzegovina" }, wikipedia: "Bjelašnica" },
        { name: { fr: "Téléphérique de Trebević depuis Sarajevo (rénové en 2018)", en: "Trebević cable car from Sarajevo (renovated in 2018)" }, wikipedia: "File:Sarajevo cable car.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Bosnie-Herzégovine est l'un des pays les moins chers d'Europe : Sarajevo et Mostar restent très abordables malgré la hausse du tourisme post-COVID. Le mark convertible est arrimé à l'euro (1€ = 1,96 BAM). Les euros ne sont pas acceptés — il faut changer.",
      en: "Bosnia and Herzegovina is one of the cheapest countries in Europe: Sarajevo and Mostar remain very affordable despite the post-COVID rise in tourism. The convertible mark is pegged to the euro (1€ = 1.96 BAM). Euros are generally not accepted, so you need to exchange money.",
    },
    currency: "BAM",
    exchangeRate: "1€ ≈ 1,96 BAM",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Pension familiale (Sarajevo ou Mostar)", en: "Family guesthouse (Sarajevo or Mostar)" }, price: "25–50 €", detail: { fr: "Souvent dans des maisons ottomanes restaurées", en: "Often set in restored Ottoman houses" } },
          { label: { fr: "Hôtel 3★ Sarajevo centre", en: "3★ hotel in central Sarajevo" }, price: "50–90 €", detail: { fr: "Bon confort, accès facile à Baščaršija", en: "Comfortable, with easy access to Baščaršija" } },
          { label: { fr: "Appartement Airbnb (Mostar)", en: "Airbnb apartment (Mostar)" }, price: "35–70 €", detail: { fr: "Vue sur la Neretva dans les bonnes adresses", en: "Good options often come with Neretva views" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Ćevapi (10 pièces) + somun (pain) dans une ćevabdžinica", en: "Ćevapi (10 pieces) + somun bread in a ćevabdžinica" }, price: "4–8 €", detail: { fr: "Le plat national de Bosnie, partout excellent", en: "Bosnia's national dish, and excellent almost everywhere" } },
          { label: { fr: "Restaurant turc-bosnien (Baščaršija)", en: "Turkish-Bosnian restaurant (Baščaršija)" }, price: "10–20 €", detail: { fr: "Burek, klepe (raviolis), dolma", en: "Burek, klepe dumplings and dolma" } },
          { label: { fr: "Baklava + café bosnien sur le bazar", en: "Baklava + Bosnian coffee in the bazaar" }, price: "3–5 €", detail: { fr: "Tradition ottomane incontournable", en: "An essential Ottoman-era tradition" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Bus Sarajevo–Mostar (2h30)", en: "Sarajevo–Mostar bus (2h30)" }, price: "8–12 €", detail: { fr: "Plusieurs départs par jour", en: "Several departures a day" } },
          { label: { fr: "Tramway Sarajevo (ticket)", en: "Sarajevo tram (ticket)" }, price: "1 €", detail: { fr: "Réseau historique des années 1880", en: "Historic network dating back to the 1880s" } },
          { label: { fr: "Taxi Sarajevo (course courte)", en: "Sarajevo taxi (short ride)" }, price: "3–8 €", detail: { fr: "Très abordable, appli Bolt disponible", en: "Very affordable, with Bolt available" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Musée du tunnel de la guerre (Sarajevo)", en: "War Tunnel Museum (Sarajevo)" }, price: "5–8 €", detail: { fr: "Incontournable sur le siège 1992–1995", en: "Essential for understanding the 1992–1995 siege" } },
          { label: { fr: "Excursion Kravice depuis Mostar (avec transport)", en: "Kravice excursion from Mostar (with transport)" }, price: "20–35 €", detail: { fr: "Demi-journée, baignade incluse", en: "Half-day trip, swimming included" } },
          { label: { fr: "Tour guidé Sarajevo historique (3h)", en: "Historic Sarajevo guided tour (3h)" }, price: "15–25 €", detail: { fr: "Guide francophone disponible", en: "French-speaking guide available" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "35–60 €/j", desc: { fr: "Pension + ćevapi + tramway", en: "Guesthouse + ćevapi + tram" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "65–120 €/j", desc: { fr: "Hôtel 3★ + restaurants + excursions", en: "3★ hotel + restaurants + excursions" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "8 jours", en: "8 days" },
      route: {
        fr: "Sarajevo (4j) → Mostar (2j) → Kravice + Blagaj (1j) → Počitelj (1j)",
        en: "Sarajevo (4d) → Mostar (2d) → Kravice + Blagaj (1d) → Počitelj (1d)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "700 – 1 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Sarajevo (Wizz Air, Turkish Airlines via Istanbul)", en: "Return flight Paris–Sarajevo (Wizz Air, Turkish Airlines via Istanbul)" }, amount: "100–250 €" },
            { label: { fr: "Hébergement (8 nuits)", en: "Accommodation (8 nights)" }, amount: "200–370 €" },
            { label: { fr: "Transports (bus + tramway)", en: "Transport (bus + tram)" }, amount: "60–110 €" },
            { label: { fr: "Nourriture + cafés + baklava", en: "Food + coffee + baklava" }, amount: "200–350 €" },
            { label: { fr: "Activités + musée tunnel + Kravice", en: "Activities + tunnel museum + Kravice" }, amount: "80–150 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "1 500 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Sarajevo", en: "Return flight Paris–Sarajevo" }, amount: "150–300 €" },
            { label: { fr: "Hôtels 3★ (8 nuits)", en: "3★ hotels (8 nights)" }, amount: "450–800 €" },
            { label: { fr: "Voiture de location + bus", en: "Rental car + bus" }, amount: "250–400 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants" }, amount: "350–600 €" },
            { label: { fr: "Excursions + stations + sorties", en: "Excursions + resorts + outings" }, amount: "200–400 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~2h30 direct (Wizz Air Beauvais–Sarajevo). Sinon via Istanbul (Turkish Airlines) ou Vienne (Austrian Airlines).", en: "About 2h30 nonstop (Wizz Air Beauvais–Sarajevo). Otherwise via Istanbul (Turkish Airlines) or Vienna (Austrian Airlines)." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Aucun visa pour les Français (90 jours). Passeport ou carte d'identité acceptés. Pas dans l'UE (candidat).", en: "No visa required for French citizens (90 days). Passport or national ID card accepted. Not in the EU (candidate country)." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Mark convertible (BAM, arrimé à l'euro à 1,96). Euros non acceptés en général — changer à l'arrivée. Carte bancaire acceptée en ville.", en: "Convertible mark (BAM, pegged to the euro at 1.96). Euros are generally not accepted, so exchange money on arrival. Bank cards are accepted in towns and cities." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Bosnien/Serbe/Croate (mutuellement intelligibles). Anglais parlé par les jeunes. Les guides touristiques parlent souvent français.", en: "Bosnian/Serbian/Croatian (mutually intelligible). English is spoken by many younger people. Tourist guides often speak French." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type C/F (européen) — 230V. Aucun adaptateur nécessaire.", en: "Type C/F (European) — 230V. No adapter needed." } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Pas de précautions particulières. Assurance voyage recommandée (hors UE). Soins médicaux corrects à Sarajevo.", en: "No special precautions required. Travel insurance is recommended (outside the EU). Medical care is decent in Sarajevo." } },
    { icon: "🕌", label: { fr: "Religions", en: "Religions" }, value: { fr: "Sarajevo est une ville de trois religions : musulmane (Bosniaques), orthodoxe (Serbes), catholique (Croates). Respecter les codes dans les mosquées (couvrir les épaules, retirer chaussures).", en: "Sarajevo is a city of three religions: Muslim (Bosniaks), Orthodox (Serbs) and Catholic (Croats). Respect local customs in mosques (cover your shoulders and remove your shoes)." } },
    { icon: "⚠️", label: { fr: "Mines", en: "Landmines" }, value: { fr: "Des zones rurales isolées (forêts de montagne) sont encore minées depuis 1992–1995. Rester sur les sentiers balisés et ne pas s'aventurer hors des zones touristiques sans guide local.", en: "Some isolated rural areas (especially mountain forests) are still mined because of the 1992–1995 war. Stay on marked trails and do not venture outside tourist areas without a local guide." } },
  ],
};
