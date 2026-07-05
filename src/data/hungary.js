export const HUNGARY = {
  code: "HUN",
  numericId: 348,
  name: { fr: "Hongrie", en: "Hungary" },
  emoji: "🇭🇺",
  capital: { fr: "Budapest", en: "Budapest" },
  language: { fr: "Hongrois", en: "Hungarian" },
  currency: { fr: "Forint (HUF)", en: "Hungarian forint (HUF)" },
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 45, budgetMid: 85,
    tripMin: 800, tripMid: 1800,
  },
  description: {
    fr: "La Hongrie est dominée par Budapest — l'une des plus belles capitales d'Europe, construite sur les deux rives du Danube : Buda (châteaux et collines) et Pest (grands boulevards et cafés Art Nouveau). Les bains thermaux (Budapest est assise sur 118 sources chaudes), le lac Balaton, la puszta (steppe) et les vins de Tokaj et d'Eger font de la Hongrie une destination riche et abordable.",
    en: "Hungary is dominated by Budapest — one of Europe's most beautiful capitals, built on both banks of the Danube: Buda (castles and hills) and Pest (grand boulevards and Art Nouveau cafés). The thermal baths (Budapest sits on 118 hot springs), Lake Balaton, the puszta (steppe) and the wines of Tokaj and Eger make Hungary a rich and affordable destination.",
  },

  bestPeriods: [
    {
      months: { fr: "Avril – Octobre", en: "April – October" },
      label: { fr: "Saison agréable", en: "Pleasant season" },
      color: "#22c55e",
      description: {
        fr: "Températures idéales (18–28°C), terrasses, festivals (Budapest Summer Festival), lac Balaton animé. Juin–août les plus chauds mais les plus touristiques.",
        en: "Ideal temperatures (18–28°C), café terraces, festivals (Budapest Summer Festival) and a lively Lake Balaton. June–August are the warmest months, but also the busiest.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Décembre", en: "December" },
      label: { fr: "Marchés de Noël", en: "Christmas markets" },
      color: "#f59e0b",
      description: {
        fr: "Les marchés de Noël de Budapest (Vörösmarty tér) sont parmi les plus beaux d'Europe. Vin chaud, kürtőskalács et lumières sur le Danube.",
        en: "Budapest's Christmas markets (Vörösmarty tér) are among the most beautiful in Europe. Mulled wine, kürtőskalács and lights along the Danube.",
      },
      icon: "🎄",
    },
  ],

  weatherCities: [
    {
      id: "budapest",
      name: "Budapest",
      region: { fr: "Centre (rives du Danube)", en: "Central Hungary (Danube banks)" },
      data: [
        { month: "Jan", temp:  0, rain: 35,  icon: "❄️" },
        { month: "Fév", temp:  2, rain: 30,  icon: "❄️" },
        { month: "Mar", temp:  8, rain: 35,  icon: "⛅" },
        { month: "Avr", temp: 13, rain: 45,  icon: "⛅" },
        { month: "Mai", temp: 18, rain: 65,  icon: "⛅" },
        { month: "Jun", temp: 21, rain: 65,  icon: "☀️" },
        { month: "Jul", temp: 25, rain: 50,  icon: "☀️" },
        { month: "Aoû", temp: 25, rain: 55,  icon: "☀️" },
        { month: "Sep", temp: 19, rain: 40,  icon: "⛅" },
        { month: "Oct", temp: 13, rain: 45,  icon: "⛅" },
        { month: "Nov", temp:  6, rain: 50,  icon: "⛅" },
        { month: "Déc", temp:  2, rain: 45,  icon: "❄️" },
      ],
    },
    {
      id: "balaton",
      name: "Lac Balaton",
      region: { fr: "Transdanubie (ouest)", en: "Transdanubia (west)" },
      data: [
        { month: "Jan", temp:  0, rain: 35,  icon: "❄️" },
        { month: "Fév", temp:  2, rain: 30,  icon: "❄️" },
        { month: "Mar", temp:  8, rain: 40,  icon: "⛅" },
        { month: "Avr", temp: 13, rain: 50,  icon: "⛅" },
        { month: "Mai", temp: 18, rain: 70,  icon: "⛅" },
        { month: "Jun", temp: 21, rain: 70,  icon: "☀️" },
        { month: "Jul", temp: 24, rain: 55,  icon: "☀️" },
        { month: "Aoû", temp: 24, rain: 60,  icon: "☀️" },
        { month: "Sep", temp: 18, rain: 50,  icon: "⛅" },
        { month: "Oct", temp: 13, rain: 55,  icon: "⛅" },
        { month: "Nov", temp:  6, rain: 55,  icon: "⛅" },
        { month: "Déc", temp:  2, rain: 45,  icon: "❄️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Budapest — Perle du Danube", en: "Budapest — Pearl of the Danube" },
      region: { fr: "Capitale", en: "Capital" },
      description: {
        fr: "Budapest est divisée en deux par le Danube : Buda avec son château royal (UNESCO), la pêcherie Halászbástya et les collines boisées ; Pest avec ses grands boulevards Art Nouveau, le Parlement néogothique (un des plus grands du monde) et les rues animées du VIIe arrondissement. Le panorama depuis la citadelle au coucher du soleil est inoubliable.",
        en: "Budapest is split in two by the Danube: Buda with its royal castle (UNESCO), Fisherman's Bastion and wooded hills; Pest with its grand Art Nouveau boulevards, neo-Gothic Parliament (one of the largest in the world) and the lively streets of District VII. The sunset panorama from the citadel is unforgettable.",
      },
      wikipedia: "Budapest",
      tags: ["Danube", "UNESCO", "Parlement", "Art Nouveau", "Ville", "Architecture", "Gastronomie"],
      mustSee: [
        { name: { fr: "Parlement de Budapest — le plus grand d'Europe (UNESCO)", en: "Budapest Parliament — the largest in Europe (UNESCO)" }, wikipedia: "Hungarian_Parliament_Building" },
        { name: { fr: "Château de Buda et quartier du château (UNESCO)", en: "Buda Castle and Castle District (UNESCO)" }, wikipedia: "Buda_Castle" },
        { name: { fr: "Pêcherie Halászbástya — panorama sur le Danube et Pest", en: "Fisherman's Bastion — panorama over the Danube and Pest" }, wikipedia: "Fisherman's_Bastion" },
        { name: { fr: "Grande synagogue Dohány — la plus grande d'Europe", en: "Dohány Street Synagogue — the largest in Europe" }, wikipedia: "Dohány_Street_Synagogue" },
      ],
    },
    {
      id: 2,
      name: { fr: "Bains thermaux de Budapest", en: "Budapest thermal baths" },
      region: { fr: "Budapest", en: "Budapest" },
      description: {
        fr: "Budapest est assise sur 118 sources d'eau chaude — la ville thermale la plus riche du monde. Le Széchenyi (1913, le plus grand bain en plein air d'Europe), le Gellért (Art Nouveau palatial), le Rudas (ottoman du XVIe siècle) et le Kiraly sont des monuments architecturaux autant que des lieux de vie. Une expérience culturelle profondément hongroise.",
        en: "Budapest sits on 118 hot springs — the richest spa city in the world. Széchenyi (1913, the largest open-air bath in Europe), Gellért (palatial Art Nouveau), Rudas (16th-century Ottoman) and Kiraly are architectural landmarks as much as living social spaces. A deeply Hungarian cultural experience.",
      },
      wikipedia: "File:Budapest Széchenyi Baths R01.jpg",
      tags: ["Thermes", "Ottoman", "Art Nouveau", "Culture"],
      mustSee: [
        { name: { fr: "Széchenyi — grand bain en plein air Art Nouveau (1913)", en: "Széchenyi — large Art Nouveau open-air baths (1913)" }, wikipedia: "Széchenyi_thermal_bath" },
        { name: { fr: "Gellért — bain de style Sécession viennoise", en: "Gellért — bath in Viennese Secession style" }, wikipedia: "File:Gellért Thermal Baths and Swimming Pool (41147709020).jpg" },
        { name: { fr: "Rudas — bain ottoman du XVIe siècle avec coupole à oculi", en: "Rudas — 16th-century Ottoman bath with an oculus dome" }, wikipedia: "File:Hungary 2010-02-27 (4636717404).jpg" },
        { name: { fr: "Bar à ruines du VIIe arr. — Szimpla Kert", en: "District VII ruin bar — Szimpla Kert" }, wikipedia: "Szimpla_Kert" },
      ],
    },
    {
      id: 3,
      name: { fr: "Lac Balaton — Mer hongroise", en: "Lake Balaton — Hungary's sea" },
      region: { fr: "Transdanubie", en: "Transdanubia" },
      description: {
        fr: "Le lac Balaton (594 km²) est le plus grand lac d'Europe centrale — surnommé 'la mer des Hongrois'. Sa rive nord (Badacsony) est couverte de vignobles volcaniques produisant les meilleurs vins blancs du pays ; la rive sud offre des plages de sable et des villages animés. L'abbaye de Tihany (XIe s.) sur sa presqu'île est l'une des plus anciennes de Hongrie.",
        en: "Lake Balaton (594 km²) is Central Europe's largest lake — nicknamed 'the Hungarians' sea'. Its north shore (Badacsony) is covered with volcanic vineyards producing the country's finest white wines; the south shore offers sandy beaches and lively villages. Tihany Abbey (11th century) on its peninsula is one of Hungary's oldest.",
      },
      wikipedia: "Lake_Balaton",
      tags: ["Lac", "Vin", "Plage", "Abbaye", "Nature"],
      mustSee: [
        { name: { fr: "Abbaye bénédictine de Tihany (XIe s.) sur sa presqu'île", en: "Tihany Benedictine Abbey (11th century) on its peninsula" }, wikipedia: "Tihany_Abbey" },
        { name: { fr: "Vignobles de Badacsony — vins blancs sur sol volcanique", en: "Badacsony vineyards — white wines grown on volcanic soil" }, wikipedia: "Badacsony" },
        { name: { fr: "Baignade dans le lac Balaton (eau chaude en été, 26°C)", en: "Swimming in Lake Balaton (warm water in summer, 26°C)" }, wikipedia: "File:Lake Balaton Sunset, Zamárdi, Hungary.jpg" },
        { name: { fr: "Tour du lac à vélo (210km, piste cyclable dédiée)", en: "Cycling around the lake (210 km, dedicated bike path)" }, wikipedia: "Lake_Balaton" },
      ],
    },
    {
      id: 4,
      name: { fr: "Tokaj et Eger — Routes des vins", en: "Tokaj and Eger — Wine routes" },
      region: { fr: "Hongrie du Nord-Est", en: "Northeastern Hungary" },
      description: {
        fr: "Tokaj (UNESCO) produit le 'vin des rois, roi des vins' selon Louis XIV : l'Aszú, un blanc liquoreux de noble pourriture parmi les plus grands vins du monde. La région viticole de Tokaj est classée patrimoine mondial. Eger, ville baroque sur fond de collines, est célèbre pour son 'Sang de Taureau' rouge et son château résistant aux Ottomans.",
        en: "Tokaj (UNESCO) produces the 'wine of kings, king of wines' according to Louis XIV: Aszú, a noble-rot sweet white among the world's greatest wines. The Tokaj wine region is a World Heritage Site. Eger, a Baroque town set among hills, is famous for its red 'Bull's Blood' and its castle that resisted the Ottomans.",
      },
      wikipedia: "Tokaj_wine_region",
      tags: ["Vin", "UNESCO", "Château", "Baroque", "Gastronomie"],
      mustSee: [
        { name: { fr: "Caves de Tokaj — dégustation d'Aszú dans les caves à moisissures nobles", en: "Tokaj cellars — tasting Aszú in noble-mould cellars" }, wikipedia: "File:Wine Cellar in Slovakian Tokaj.jpg" },
        { name: { fr: "Château d'Eger — résistance héroïque contre les Ottomans (1552)", en: "Eger Castle — heroic resistance against the Ottomans (1552)" }, wikipedia: "Eger_Castle" },
        { name: { fr: "Vallée des Belles Femmes d'Eger — caves troglodytes et vin", en: "Eger's Valley of the Beautiful Women — cave cellars and wine" }, wikipedia: "File:Eger, seen from Lyceum roof - panoramio.jpg" },
        { name: { fr: "Village de Hollókő — village palóc UNESCO intact", en: "Hollókő village — intact UNESCO Palóc village" }, wikipedia: "Hollókő" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Hongrie est l'une des meilleures valeurs d'Europe : les bains thermaux, la nourriture et les hébergements coûtent environ 40–50% moins cher qu'en France. Budapest est la plus chère mais reste très abordable. Le forint fluctue — les paiements en euros sont parfois acceptés (à un taux défavorable).",
      en: "Hungary offers some of the best value in Europe: thermal baths, food and accommodation cost around 40–50% less than in France. Budapest is the most expensive part of the country, but still very affordable. The forint fluctuates — euro payments are sometimes accepted (at an unfavourable rate).",
    },
    currency: "HUF",
    exchangeRate: "1€ ≈ 395 HUF",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night" },
        items: [
          { label: { fr: "Auberge de jeunesse Budapest (dortoir ou chambre)", en: "Budapest hostel (dorm or private room)" }, price: "20–45 €", detail: { fr: "Nombreuses et bien situées", en: "Plenty of options and well located" } },
          { label: { fr: "Hôtel 3★ Budapest ou lac Balaton", en: "3★ hotel in Budapest or Lake Balaton" }, price: "60–110 €", detail: { fr: "Souvent petit-déj inclus", en: "Breakfast often included" } },
          { label: { fr: "Appartement Airbnb Budapest (2 pers.)", en: "Budapest Airbnb apartment (2 people)" }, price: "45–90 €", detail: { fr: "Bien situé en centre-ville", en: "Well located in the city centre" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food" },
        items: [
          { label: { fr: "Gulyás (goulash) ou lángos dans une vendéglő", en: "Gulyás (goulash) or lángos in a vendéglő" }, price: "6–12 €", detail: { fr: "Cuisine hongroise copieuse", en: "Hearty Hungarian cuisine" } },
          { label: { fr: "Restaurant mid-range Budapest", en: "Mid-range restaurant in Budapest" }, price: "14–25 €", detail: { fr: "Paprikás csirke, töltött káposzta", en: "Paprikás csirke, töltött káposzta" } },
          { label: { fr: "Lángos (beignet frit garni) sur le marché", en: "Lángos (topped fried flatbread) at the market" }, price: "2–4 €", detail: { fr: "Street food hongrois typique", en: "Typical Hungarian street food" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport" },
        items: [
          { label: { fr: "Métro + tram Budapest (ticket 24h)", en: "Budapest metro + tram (24h ticket)" }, price: "6 €", detail: { fr: "Réseau étendu et efficace", en: "Extensive and efficient network" } },
          { label: { fr: "Train MÁV Budapest–Eger (2h)", en: "MÁV train Budapest–Eger (2h)" }, price: "8–15 €", detail: { fr: "Liaisons fréquentes", en: "Frequent connections" } },
          { label: { fr: "Billet de bateau sur le Danube Budapest", en: "Budapest Danube boat ticket" }, price: "5–10 €", detail: { fr: "Panorama unique en soirée", en: "Unique evening panorama" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities" },
        items: [
          { label: { fr: "Entrée bains Széchenyi (2h)", en: "Széchenyi Baths entry (2h)" }, price: "22 €", detail: { fr: "Tarif journée en semaine", en: "Weekday day-pass rate" } },
          { label: { fr: "Visite château de Buda + musée", en: "Buda Castle + museum visit" }, price: "10–20 €", detail: { fr: "Vue imprenable sur le Danube", en: "Superb views over the Danube" } },
          { label: { fr: "Dégustation Tokaj Aszú (3 vins)", en: "Tokaj Aszú tasting (3 wines)" }, price: "15–30 €", detail: { fr: "Cave viticole avec guide", en: "Wine cellar with guide" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker" }, daily: "45–75 €/j", desc: { fr: "Auberge + vendéglő + transports publics + thermes", en: "Hostel + vendéglő + public transport + thermal baths" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort" }, daily: "85–160 €/j", desc: { fr: "Hôtel 3★ + restaurants + activités + vin", en: "3★ hotel + restaurants + activities + wine" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "8 jours", en: "8 days" },
      route: { fr: "Budapest (4j) → Lac Balaton (2j) → Eger + Tokaj (2j)", en: "Budapest (4d) → Lake Balaton (2d) → Eger + Tokaj (2d)" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker" },
          color: "#22c55e",
          total: "800 – 1 300 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Budapest (Wizz Air, Ryanair)", en: "Return flight Paris–Budapest (Wizz Air, Ryanair)" }, amount: "80–200 €" },
            { label: { fr: "Hébergement (8 nuits)", en: "Accommodation (8 nights)" }, amount: "200–380 €" },
            { label: { fr: "Transports (train + métro)", en: "Transport (train + metro)" }, amount: "80–150 €" },
            { label: { fr: "Nourriture + vins", en: "Food + wine" }, amount: "250–400 €" },
            { label: { fr: "Thermes + visites", en: "Thermal baths + sightseeing" }, amount: "100–200 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort" },
          color: "#3b82f6",
          total: "1 800 – 3 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Budapest", en: "Return flight Paris–Budapest" }, amount: "100–250 €" },
            { label: { fr: "Hôtels 3★ (8 nuits)", en: "3★ hotels (8 nights)" }, amount: "550–1 000 €" },
            { label: { fr: "Transports + voiture de location", en: "Transport + rental car" }, amount: "200–350 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants" }, amount: "400–700 €" },
            { label: { fr: "Activités, thermes, dégustations", en: "Activities, thermal baths, tastings" }, amount: "250–450 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris" }, value: { fr: "~2h20 (Wizz Air, Ryanair, Air France direct CDG/Beauvais–Budapest). Nombreuses liaisons.", en: "~2h20 (Wizz Air, Ryanair, Air France direct CDG/Beauvais–Budapest). Plenty of connections." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa" }, value: { fr: "Aucun visa — espace Schengen. Carte d'identité française suffisante.", en: "No visa required — Schengen area. A French national ID card is sufficient." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency" }, value: { fr: "Forint (HUF). Carte bancaire très bien acceptée. Eviter les bureaux de change en rue (taux désastreux) — utiliser les DAB des banques.", en: "Forint (HUF). Card payments are widely accepted. Avoid street exchange offices (terrible rates) — use bank ATMs instead." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language" }, value: { fr: "Hongrois (langue isolée, difficile). Anglais bien parlé à Budapest. Moins courant en province. Allemand parfois utile.", en: "Hungarian (an isolated, difficult language). English is widely spoken in Budapest. Less common in the countryside. German can sometimes help." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet" }, value: { fr: "Type C/F (européen) — 230V. Aucun adaptateur nécessaire.", en: "Type C/F (European) — 230V. No adapter needed." } },
    { icon: "💊", label: { fr: "Santé", en: "Health" }, value: { fr: "Aucune précaution particulière. CEAM valide. Bonne qualité médicale.", en: "No special precautions. EHIC valid. Good standard of healthcare." } },
    { icon: "🌊", label: { fr: "Thermes", en: "Thermal baths" }, value: { fr: "Aller aux bains au moins une fois : c'est une institution sociale hongroise, pas seulement touristique. Amener tongs et maillot. Le Széchenyi est ouvert jusqu'à 22h.", en: "Go to the baths at least once: it is a Hungarian social institution, not just a tourist attraction. Bring flip-flops and a swimsuit. Széchenyi stays open until 10 pm." } },
    { icon: "🍷", label: { fr: "Vins", en: "Wines" }, value: { fr: "La Hongrie produit des vins exceptionnels méconnus : Tokaj Aszú (blanc liquoreux), Egri Bikavér (Sang de Taureau, rouge), Villányi (rouge du sud). Les acheter directement en cave.", en: "Hungary produces exceptional underrated wines: Tokaj Aszú (sweet white), Egri Bikavér (Bull's Blood, red) and Villányi (southern red). Buy them directly from the cellars." } },
  ],
};