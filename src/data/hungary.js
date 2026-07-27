export const HUNGARY = {
  code: "HUN",
  numericId: 348,
  name: { fr: "Hongrie", en: "Hungary", es: "Hungría", de: "Ungarn" },
  emoji: "🇭🇺",
  capital: { fr: "Budapest", en: "Budapest", es: "Budapest", de: "Budapest" },
  language: { fr: "Hongrois", en: "Hungarian", es: "Húngaro", de: "Ungarisch" },
  currency: { fr: "Forint (HUF)", en: "Hungarian forint (HUF)", es: "Forinto húngaro (HUF)", de: "Forint (HUF)" },
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 45, budgetMid: 85,
    tripMin: 800, tripMid: 1800,
  },
  criteria: {
    unesco: 3,
    nature: 2,
    randonnee: 1,
    gastronomie: 2,
    architecture: 2,
    desert: 0,
    safari: 0,
    ski: 0,
    ville: 2,
    plage: 1,
  },
  description: {
    fr: "La Hongrie est dominée par Budapest — l'une des plus belles capitales d'Europe, construite sur les deux rives du Danube : Buda (châteaux et collines) et Pest (grands boulevards et cafés Art Nouveau). Les bains thermaux (Budapest est assise sur 118 sources chaudes), le lac Balaton, la puszta (steppe) et les vins de Tokaj et d'Eger font de la Hongrie une destination riche et abordable.", en: "Hungary is dominated by Budapest — one of Europe's most beautiful capitals, built on both banks of the Danube: Buda (castles and hills) and Pest (grand boulevards and Art Nouveau cafés). The thermal baths (Budapest sits on 118 hot springs), Lake Balaton, the puszta (steppe) and the wines of Tokaj and Eger make Hungary a rich and affordable destination.", es: "Hungría está dominada por Budapest, una de las capitales más bellas de Europa, construida sobre ambas orillas del Danubio: Buda (castillos y colinas) y Pest (grandes bulevares y cafés modernistas). Los baños termales (Budapest se asienta sobre 118 manantiales de agua caliente), el lago Balaton, la puszta (estepa) y los vinos de Tokaj y Eger hacen de Hungría un destino rico y asequible.", de: "Ungarn wird von Budapest dominiert – einer der schönsten Hauptstädte Europas, die an beiden Ufern der Donau liegt: Buda (Burgen und Hügel) und Pest (große Boulevards und Jugendstilcafés). Die Thermalbäder (Budapest verfügt über 118 heiße Quellen), der Plattensee, die Puszta (Steppe) und die Weine von Tokaj und Eger machen Ungarn zu einem reichhaltigen und erschwinglichen Reiseziel.",
  },

  bestPeriods: [
    {
      months: { fr: "Avril – Octobre", en: "April – October", es: "Abril – Octubre", de: "April – Oktober" },
      label: { fr: "Saison agréable", en: "Pleasant season", es: "Estación agradable", de: "Angenehme Jahreszeit" },
      color: "#22c55e",
      description: {
        fr: "Températures idéales (18–28°C), terrasses, festivals (Budapest Summer Festival), lac Balaton animé. Juin–août les plus chauds mais les plus touristiques.", en: "Ideal temperatures (18–28°C), café terraces, festivals (Budapest Summer Festival) and a lively Lake Balaton. June–August are the warmest months, but also the busiest.", es: "Temperaturas ideales (18–28°C), terrazas, festivales (Budapest Summer Festival), lago Balaton animado. Junio–agosto son los meses más calurosos pero también los más turísticos.", de: "Ideale Temperaturen (18–28°C), Terrassen, Festivals (Budapester Sommerfestival), lebhafter Plattensee. Juni–August am heißesten, aber auch am touristischsten.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Décembre", en: "December", es: "Diciembre", de: "Dezember" },
      label: { fr: "Marchés de Noël", en: "Christmas markets", es: "Mercados navideños", de: "Weihnachtsmärkte" },
      color: "#f59e0b",
      description: {
        fr: "Les marchés de Noël de Budapest (Vörösmarty tér) sont parmi les plus beaux d'Europe. Vin chaud, kürtőskalács et lumières sur le Danube.", en: "Budapest's Christmas markets (Vörösmarty tér) are among the most beautiful in Europe. Mulled wine, kürtőskalács and lights along the Danube.", es: "Los mercados navideños de Budapest (Vörösmarty tér) están entre los más bonitos de Europa. Vino caliente, kürtőskalács y luces sobre el Danubio.", de: "Die Budapester Weihnachtsmärkte (Vörösmarty tér) gehören zu den schönsten in Europa. Glühwein, Kürtőskalács und Lichter an der Donau.",
      },
      icon: "🎄",
    },
  ],

  weatherCities: [
    {
      id: "budapest",
      name: "Budapest",
      region: { fr: "Centre (rives du Danube)", en: "Central Hungary (Danube banks)", es: "Centro (orillas del Danubio)", de: "Zentrum (Donauufer)" },
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
      region: { fr: "Transdanubie (ouest)", en: "Transdanubia (west)", es: "Transdanubia (oeste)", de: "Transdanubien (Westen)" },
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
      name: { fr: "Budapest — Perle du Danube", en: "Budapest — Pearl of the Danube", es: "Budapest — Perla del Danubio", de: "Budapest – Perle der Donau" },
      region: { fr: "Capitale", en: "Capital", es: "Capital", de: "Hauptstadt" },
      description: {
        fr: "Budapest est divisée en deux par le Danube : Buda avec son château royal (UNESCO), la pêcherie Halászbástya et les collines boisées ; Pest avec ses grands boulevards Art Nouveau, le Parlement néogothique (un des plus grands du monde) et les rues animées du VIIe arrondissement. Le panorama depuis la citadelle au coucher du soleil est inoubliable.", en: "Budapest is split in two by the Danube: Buda with its royal castle (UNESCO), Fisherman's Bastion and wooded hills; Pest with its grand Art Nouveau boulevards, neo-Gothic Parliament (one of the largest in the world) and the lively streets of District VII. The sunset panorama from the citadel is unforgettable.", es: "Budapest está dividida en dos por el Danubio: Buda, con su castillo real (UNESCO), el Bastión de los Pescadores y las colinas boscosas; Pest, con sus grandes bulevares modernistas, el Parlamento neogótico (uno de los más grandes del mundo) y las animadas calles del distrito VII. El panorama desde la ciudadela al atardecer es inolvidable.", de: "Budapest wird durch die Donau in zwei Teile geteilt: Buda mit seinem Königsschloss (UNESCO), der Halászbástya-Fischerei und den bewaldeten Hügeln; Pest mit seinen großen Jugendstilboulevards, dem neugotischen Parlament (eines der größten der Welt) und den belebten Straßen des 7. Bezirks. Das Panorama von der Zitadelle bei Sonnenuntergang ist unvergesslich.",
      },
      wikipedia: "Budapest",
      tags: ["Nature", "UNESCO", "Architecture", "Ville", "Gastronomie"],
      mustSee: [
        { name: { fr: "Parlement de Budapest — le plus grand d'Europe (UNESCO)", en: "Budapest Parliament — the largest in Europe (UNESCO)", es: "Parlamento de Budapest — el mayor de Europa (UNESCO)", de: "Budapester Parlament – das größte in Europa (UNESCO)" }, wikipedia: "Hungarian_Parliament_Building" },
        { name: { fr: "Château de Buda et quartier du château (UNESCO)", en: "Buda Castle and Castle District (UNESCO)", es: "Castillo de Buda y barrio del Castillo (UNESCO)", de: "Budaer Burg und Burgviertel (UNESCO)" }, wikipedia: "Buda_Castle" },
        { name: { fr: "Pêcherie Halászbástya — panorama sur le Danube et Pest", en: "Fisherman's Bastion — panorama over the Danube and Pest", es: "Bastión de los Pescadores — panorámica sobre el Danubio y Pest", de: "Halászbástya-Fischerei – Panorama der Donau und Pest" }, wikipedia: "Fisherman's_Bastion" },
        { name: { fr: "Grande synagogue Dohány — la plus grande d'Europe", en: "Dohány Street Synagogue — the largest in Europe", es: "Gran Sinagoga de Dohány — la más grande de Europa", de: "Große Synagoge von Dohány – die größte in Europa" }, wikipedia: "Dohány_Street_Synagogue" },
      ],
    },
    {
      id: 2,
      name: { fr: "Bains thermaux de Budapest", en: "Budapest thermal baths", es: "Baños termales de Budapest", de: "Budapester Thermen" },
      region: { fr: "Budapest", en: "Budapest", es: "Budapest", de: "Budapest" },
      description: {
        fr: "Budapest est assise sur 118 sources d'eau chaude — la ville thermale la plus riche du monde. Le Széchenyi (1913, le plus grand bain en plein air d'Europe), le Gellért (Art Nouveau palatial), le Rudas (ottoman du XVIe siècle) et le Kiraly sont des monuments architecturaux autant que des lieux de vie. Une expérience culturelle profondément hongroise.", en: "Budapest sits on 118 hot springs — the richest spa city in the world. Széchenyi (1913, the largest open-air bath in Europe), Gellért (palatial Art Nouveau), Rudas (16th-century Ottoman) and Kiraly are architectural landmarks as much as living social spaces. A deeply Hungarian cultural experience.", es: "Budapest se asienta sobre 118 manantiales de agua caliente — la ciudad termal más rica del mundo. El Széchenyi (1913, el mayor baño al aire libre de Europa), el Gellért (modernista y palaciego), el Rudas (otomano del siglo XVI) y el Kiraly son monumentos arquitectónicos tanto como lugares de vida social. Una experiencia cultural profundamente húngara.", de: "Budapest liegt an 118 heißen Quellen – die reichste Kurstadt der Welt. Das Széchenyi (1913, das größte Freibad Europas), das Gellért (palastartiges Jugendstilbad), das Rudas (osmanisches Bad aus dem 16. Jahrhundert) und das Kiraly sind sowohl architektonische Denkmäler als auch Wohnorte. Ein zutiefst ungarisches Kulturerlebnis.",
      },
      wikipedia: "File:Budapest Széchenyi Baths R01.jpg",
      tags: ["Détente", "Histoire", "Architecture", "Culture"],
      mustSee: [
        { name: { fr: "Széchenyi — grand bain en plein air Art Nouveau (1913)", en: "Széchenyi — large Art Nouveau open-air baths (1913)", es: "Széchenyi — gran baño modernista al aire libre (1913)", de: "Széchenyi – großes Jugendstil-Freibad (1913)" }, wikipedia: "Széchenyi_thermal_bath" },
        { name: { fr: "Gellért — bain de style Sécession viennoise", en: "Gellért — bath in Viennese Secession style", es: "Gellért — baño de estilo Secesión vienesa", de: "Gellért – Bad im Wiener Sezessionsstil" }, wikipedia: "File:Gellért Thermal Baths and Swimming Pool (41147709020).jpg" },
        { name: { fr: "Rudas — bain ottoman du XVIe siècle avec coupole à oculi", en: "Rudas — 16th-century Ottoman bath with an oculus dome", es: "Rudas — baño otomano del siglo XVI con cúpula de óculos", de: "Rudas – osmanisches Bad aus dem 16. Jahrhundert mit Oculi-Kuppel" }, wikipedia: "File:Hungary 2010-02-27 (4636717404).jpg" },
        { name: { fr: "Bar à ruines du VIIe arr. — Szimpla Kert", en: "District VII ruin bar — Szimpla Kert", es: "Bar en ruinas del distrito VII — Szimpla Kert", de: "Bar mit Ruinen aus dem 7. Bezirk. —Szimpla Kert" }, wikipedia: "Szimpla_Kert" },
      ],
    },
    {
      id: 3,
      name: { fr: "Lac Balaton — Mer hongroise", en: "Lake Balaton — Hungary's sea", es: "Lago Balaton — El mar húngaro", de: "Plattensee – Ungarisches Meer" },
      region: { fr: "Transdanubie", en: "Transdanubia", es: "Transdanubia", de: "Transdanubien" },
      description: {
        fr: "Le lac Balaton (594 km²) est le plus grand lac d'Europe centrale — surnommé 'la mer des Hongrois'. Sa rive nord (Badacsony) est couverte de vignobles volcaniques produisant les meilleurs vins blancs du pays ; la rive sud offre des plages de sable et des villages animés. L'abbaye de Tihany (XIe s.) sur sa presqu'île est l'une des plus anciennes de Hongrie.", en: "Lake Balaton (594 km²) is Central Europe's largest lake — nicknamed 'the Hungarians' sea'. Its north shore (Badacsony) is covered with volcanic vineyards producing the country's finest white wines; the south shore offers sandy beaches and lively villages. Tihany Abbey (11th century) on its peninsula is one of Hungary's oldest.", es: "El lago Balaton (594 km²) es el mayor lago de Europa Central — apodado 'el mar de los húngaros'. Su orilla norte (Badacsony) está cubierta de viñedos volcánicos que producen los mejores vinos blancos del país; la orilla sur ofrece playas de arena y pueblos animados. La abadía de Tihany (s. XI), en su península, es una de las más antiguas de Hungría.", de: "Der Plattensee (594 km²) ist der größte See Mitteleuropas und wird auch „das Meer der Ungarn“ genannt. Sein Nordufer (Badacsony) ist mit vulkanischen Weinbergen bedeckt, die die besten Weißweine des Landes hervorbringen; Die Südküste bietet Sandstrände und lebhafte Dörfer. Die Abtei Tihany (11. Jahrhundert) auf ihrer Halbinsel ist eine der ältesten in Ungarn.",
      },
      wikipedia: "Lake_Balaton",
      tags: ["Nature", "Gastronomie", "Plage", "Architecture"],
      mustSee: [
        { name: { fr: "Abbaye bénédictine de Tihany (XIe s.) sur sa presqu'île", en: "Tihany Benedictine Abbey (11th century) on its peninsula", es: "Abadía benedictina de Tihany (s. XI) en su península", de: "Benediktinerabtei Tihany (11. Jahrhundert) auf seiner Halbinsel" }, wikipedia: "Tihany_Abbey" },
        { name: { fr: "Vignobles de Badacsony — vins blancs sur sol volcanique", en: "Badacsony vineyards — white wines grown on volcanic soil", es: "Viñedos de Badacsony — vinos blancos sobre suelo volcánico", de: "Badacsony-Weinberge – Weißweine auf vulkanischem Boden" }, wikipedia: "Badacsony" },
        { name: { fr: "Baignade dans le lac Balaton (eau chaude en été, 26°C)", en: "Swimming in Lake Balaton (warm water in summer, 26°C)", es: "Baño en el lago Balaton (agua cálida en verano, 26°C)", de: "Schwimmen im Plattensee (warmes Wasser im Sommer, 26°C)" }, wikipedia: "File:Lake Balaton Sunset, Zamárdi, Hungary.jpg" },
        { name: { fr: "Tour du lac à vélo (210km, piste cyclable dédiée)", en: "Cycling around the lake (210 km, dedicated bike path)", es: "Vuelta al lago en bici (210 km, carril bici dedicado)", de: "Seerundfahrt mit dem Fahrrad (210 km, eigener Radweg)" }, wikipedia: "Lake_Balaton" },
      ],
    },
    {
      id: 4,
      name: { fr: "Tokaj et Eger — Routes des vins", en: "Tokaj and Eger — Wine routes", es: "Tokaj y Eger — Rutas del vino", de: "Tokaj und Eger – Weinstraßen" },
      region: { fr: "Hongrie du Nord-Est", en: "Northeastern Hungary", es: "Hungría nororiental", de: "Nordostungarn" },
      description: {
        fr: "Tokaj (UNESCO) produit le 'vin des rois, roi des vins' selon Louis XIV : l'Aszú, un blanc liquoreux de noble pourriture parmi les plus grands vins du monde. La région viticole de Tokaj est classée patrimoine mondial. Eger, ville baroque sur fond de collines, est célèbre pour son 'Sang de Taureau' rouge et son château résistant aux Ottomans.", en: "Tokaj (UNESCO) produces the 'wine of kings, king of wines' according to Louis XIV: Aszú, a noble-rot sweet white among the world's greatest wines. The Tokaj wine region is a World Heritage Site. Eger, a Baroque town set among hills, is famous for its red 'Bull's Blood' and its castle that resisted the Ottomans.", es: "Tokaj (UNESCO) produce el 'vino de reyes, rey de los vinos' según Luis XIV: el Aszú, un blanco dulce de podredumbre noble entre los grandes vinos del mundo. La región vinícola de Tokaj está declarada Patrimonio Mundial. Eger, ciudad barroca entre colinas, es célebre por su tinto 'Sangre de Toro' y su castillo que resistió a los otomanos.", de: "Tokaj (UNESCO) produziert nach Ludwig XIV. den „Wein der Könige, König der Weine“: Aszú, ein süßer Weißwein von Edelfäule, einer der größten Weine der Welt. Die Weinregion Tokaj gehört zum Weltkulturerbe. Eger, eine barocke Stadt vor der Kulisse von Hügeln, ist berühmt für ihr rotes „Blut des Stieres“ und ihre Burg, die den Osmanen standhielt.",
      },
      wikipedia: "Tokaj_wine_region",
      tags: ["Gastronomie", "UNESCO", "Architecture"],
      mustSee: [
        { name: { fr: "Caves de Tokaj — dégustation d'Aszú dans les caves à moisissures nobles", en: "Tokaj cellars — tasting Aszú in noble-mould cellars", es: "Bodegas de Tokaj — cata de Aszú en cuevas de moho noble", de: "Tokajer Keller – Verkostung von Aszú in den edlen Schimmelkellern" }, wikipedia: "File:Wine Cellar in Slovakian Tokaj.jpg" },
        { name: { fr: "Château d'Eger — résistance héroïque contre les Ottomans (1552)", en: "Eger Castle — heroic resistance against the Ottomans (1552)", es: "Castillo de Eger — resistencia heroica contra los otomanos (1552)", de: "Burg Eger – heldenhafter Widerstand gegen die Osmanen (1552)" }, wikipedia: "Eger_Castle" },
        { name: { fr: "Vallée des Belles Femmes d'Eger — caves troglodytes et vin", en: "Eger's Valley of the Beautiful Women — cave cellars and wine", es: "Valle de las Bellas Mujeres de Eger — bodegas trogloditas y vino", de: "Tal der schönen Frauen von Eger – Höhlenkeller und Wein" }, wikipedia: "File:Eger, seen from Lyceum roof - panoramio.jpg" },
        { name: { fr: "Village de Hollókő — village palóc UNESCO intact", en: "Hollókő village — intact UNESCO Palóc village", es: "Pueblo de Hollókő — pueblo palóc UNESCO intacto", de: "Hollókő-Dorf – intaktes UNESCO-Palóc-Dorf" }, wikipedia: "Hollókő" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Hongrie est l'une des meilleures valeurs d'Europe : les bains thermaux, la nourriture et les hébergements coûtent environ 40–50% moins cher qu'en France. Budapest est la plus chère mais reste très abordable. Le forint fluctue — les paiements en euros sont parfois acceptés (à un taux défavorable).", en: "Hungary offers some of the best value in Europe: thermal baths, food and accommodation cost around 40–50% less than in France. Budapest is the most expensive part of the country, but still very affordable. The forint fluctuates — euro payments are sometimes accepted (at an unfavourable rate).", es: "Hungría es uno de los destinos con mejor relación calidad-precio de Europa: los baños termales, la comida y el alojamiento cuestan entre un 40–50% menos que en España. Budapest es la parte más cara, pero sigue siendo muy asequible. El forinto fluctúa — a veces se aceptan pagos en euros (a un cambio desfavorable).", de: "Ungarn gehört zu den besten Werten in Europa: Thermalbäder, Verpflegung und Unterkunft kosten rund 40–50 % weniger als in Frankreich. Budapest ist am teuersten, aber immer noch sehr erschwinglich. Der Forint schwankt – manchmal werden Zahlungen in Euro (zu einem ungünstigen Kurs) akzeptiert.",
    },
    currency: "HUF",
    exchangeRate: "1€ ≈ 395 HUF",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Auberge de jeunesse Budapest (dortoir ou chambre)", en: "Budapest hostel (dorm or private room)", es: "Albergue en Budapest (dormitorio o habitación)", de: "Budapester Jugendherberge (Wohnheim oder Zimmer)" }, price: "20–45 €", detail: { fr: "Nombreuses et bien situées", en: "Plenty of options and well located", es: "Numerosos y bien situados", de: "Zahlreiche und gut gelegene" } },
          { label: { fr: "Hôtel 3★ Budapest ou lac Balaton", en: "3★ hotel in Budapest or Lake Balaton", es: "Hotel 3★ en Budapest o lago Balaton", de: "Hotel 3★ Budapest oder Plattensee" }, price: "60–110 €", detail: { fr: "Souvent petit-déj inclus", en: "Breakfast often included", es: "A menudo con desayuno incluido", de: "Oft ist das Frühstück inbegriffen" } },
          { label: { fr: "Appartement Airbnb Budapest (2 pers.)", en: "Budapest Airbnb apartment (2 people)", es: "Apartamento Airbnb en Budapest (2 pers.)", de: "Airbnb Budapest Apartment (2 Personen)" }, price: "45–90 €", detail: { fr: "Bien situé en centre-ville", en: "Well located in the city centre", es: "Bien situado en el centro", de: "Gut gelegen im Stadtzentrum" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Gulyás (goulash) ou lángos dans une vendéglő", en: "Gulyás (goulash) or lángos in a vendéglő", es: "Gulyás (goulash) o lángos en un vendéglő", de: "Gulyás (Gulasch) oder Lángos in einem Vendéglő" }, price: "6–12 €", detail: { fr: "Cuisine hongroise copieuse", en: "Hearty Hungarian cuisine", es: "Cocina húngara contundente", de: "Herzhafte ungarische Küche" } },
          { label: { fr: "Restaurant mid-range Budapest", en: "Mid-range restaurant in Budapest", es: "Restaurante de gama media en Budapest", de: "Mittelklasserestaurant Budapest" }, price: "14–25 €", detail: { fr: "Paprikás csirke, töltött káposzta", en: "Paprikás csirke, töltött káposzta", es: "Paprikás csirke, töltött káposzta", de: "Paprikás csirke, töltött káposzta" } },
          { label: { fr: "Lángos (beignet frit garni) sur le marché", en: "Lángos (topped fried flatbread) at the market", es: "Lángos (masa frita con toppings) en el mercado", de: "Lángos (frittierte Donuts gefüllt) auf dem Markt" }, price: "2–4 €", detail: { fr: "Street food hongrois typique", en: "Typical Hungarian street food", es: "Comida callejera húngara típica", de: "Typisches ungarisches Streetfood" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Métro + tram Budapest (ticket 24h)", en: "Budapest metro + tram (24h ticket)", es: "Metro + tranvía de Budapest (billete 24h)", de: "Budapester U-Bahn + Straßenbahn (24-Stunden-Ticket)" }, price: "6 €", detail: { fr: "Réseau étendu et efficace", en: "Extensive and efficient network", es: "Red extensa y eficaz", de: "Umfangreiches und effizientes Netz" } },
          { label: { fr: "Train MÁV Budapest–Eger (2h)", en: "MÁV train Budapest–Eger (2h)", es: "Tren MÁV Budapest–Eger (2h)", de: "MÁV-Zug Budapest–Eger (2 Std.)" }, price: "8–15 €", detail: { fr: "Liaisons fréquentes", en: "Frequent connections", es: "Conexiones frecuentes", de: "Häufige Verbindungen" } },
          { label: { fr: "Billet de bateau sur le Danube Budapest", en: "Budapest Danube boat ticket", es: "Billete de barco por el Danubio en Budapest", de: "Ticket für die Donau-Budapest-Schifffahrt" }, price: "5–10 €", detail: { fr: "Panorama unique en soirée", en: "Unique evening panorama", es: "Panorama único por la noche", de: "Einzigartiges Abendpanorama" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Entrée bains Széchenyi (2h)", en: "Széchenyi Baths entry (2h)", es: "Entrada a los baños Széchenyi (2h)", de: "Eintritt ins Széchenyi-Heilbad (2 Std.)" }, price: "22 €", detail: { fr: "Tarif journée en semaine", en: "Weekday day-pass rate", es: "Tarifa de día entre semana", de: "Tagessatz unter der Woche" } },
          { label: { fr: "Visite château de Buda + musée", en: "Buda Castle + museum visit", es: "Visita al castillo de Buda + museo", de: "Besuchen Sie die Budaer Burg und das Museum" }, price: "10–20 €", detail: { fr: "Vue imprenable sur le Danube", en: "Superb views over the Danube", es: "Vistas impresionantes del Danubio", de: "Atemberaubender Ausblick auf die Donau" } },
          { label: { fr: "Dégustation Tokaj Aszú (3 vins)", en: "Tokaj Aszú tasting (3 wines)", es: "Cata de Tokaj Aszú (3 vinos)", de: "Verkostung von Tokajer Aszú (3 Weine)" }, price: "15–30 €", detail: { fr: "Cave viticole avec guide", en: "Wine cellar with guide", es: "Bodega con guía", de: "Weinkeller mit Führung" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "45–75 €/j", desc: { fr: "Auberge + vendéglő + transports publics + thermes", en: "Hostel + vendéglő + public transport + thermal baths", es: "Albergue + vendéglő + transporte público + termas", de: "Herberge + Vendéglő + öffentliche Verkehrsmittel + Thermalbad" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "85–160 €/j", desc: { fr: "Hôtel 3★ + restaurants + activités + vin", en: "3★ hotel + restaurants + activities + wine", es: "Hotel 3★ + restaurantes + actividades + vino", de: "3★ Hotel + Restaurants + Aktivitäten + Wein" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "8 jours", en: "8 days", es: "8 días", de: "8 Tage" },
      route: { fr: "Budapest (4j) → Lac Balaton (2j) → Eger + Tokaj (2j)", en: "Budapest (4d) → Lake Balaton (2d) → Eger + Tokaj (2d)", es: "Budapest (4d) → Lago Balaton (2d) → Eger y Tokaj (2d)", de: "Budapest (4 Tage) → Plattensee (2 Tage) → Eger + Tokaj (2 Tage)" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "800 – 1 300 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Budapest (Wizz Air, Ryanair)", en: "Return flight Paris–Budapest (Wizz Air, Ryanair)", es: "Vuelo ida y vuelta Madrid–Budapest (Wizz Air, Ryanair)", de: "Hin- und Rückflug Paris–Budapest (Wizz Air, Ryanair)" }, amount: "80–200 €" },
            { label: { fr: "Hébergement (8 nuits)", en: "Accommodation (8 nights)", es: "Alojamiento (8 noches)", de: "Unterkunft (8 Nächte)" }, amount: "200–380 €" },
            { label: { fr: "Transports (train + métro)", en: "Transport (train + metro)", es: "Transporte (tren + metro)", de: "Transport (Zug + U-Bahn)" }, amount: "80–150 €" },
            { label: { fr: "Nourriture + vins", en: "Food + wine", es: "Comida + vinos", de: "Essen + Wein" }, amount: "250–400 €" },
            { label: { fr: "Thermes + visites", en: "Thermal baths + sightseeing", es: "Termas + visitas", de: "Thermalbäder + Besichtigungen" }, amount: "100–200 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "1 800 – 3 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Budapest", en: "Return flight Paris–Budapest", es: "Vuelo ida y vuelta Madrid–Budapest", de: "Hin- und Rückflug Paris–Budapest" }, amount: "100–250 €" },
            { label: { fr: "Hôtels 3★ (8 nuits)", en: "3★ hotels (8 nights)", es: "Hoteles 3★ (8 noches)", de: "3★ Hotels (8 Nächte)" }, amount: "550–1 000 €" },
            { label: { fr: "Transports + voiture de location", en: "Transport + rental car", es: "Transporte + coche de alquiler", de: "Transport + Mietwagen" }, amount: "200–350 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants", es: "Comida y restaurantes", de: "Essen & Restaurants" }, amount: "400–700 €" },
            { label: { fr: "Activités, thermes, dégustations", en: "Activities, thermal baths, tastings", es: "Actividades, termas, catas", de: "Aktivitäten, Thermalbäder, Verkostungen" }, amount: "250–450 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde Madrid", de: "Flug ab Paris" }, value: { fr: "~2h20 (Wizz Air, Ryanair, Air France direct CDG/Beauvais–Budapest). Nombreuses liaisons.", en: "~2h20 (Wizz Air, Ryanair, Air France direct CDG/Beauvais–Budapest). Plenty of connections.", es: "~2h20 (Wizz Air, Ryanair, Air France directo Madrid–Budapest). Numerosas conexiones.", de: "ca. 2 Std. 20 Min. (Wizz Air, Ryanair, Air France direkt CDG/Beauvais–Budapest). Viele Verbindungen." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Aucun visa — espace Schengen. Carte d'identité française suffisante.", en: "No visa required — Schengen area. A French national ID card is sufficient.", es: "Sin visado — espacio Schengen. DNI español suficiente.", de: "Kein Visum – Schengen-Raum. Ausreichender französischer Personalausweis." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Forint (HUF). Carte bancaire très bien acceptée. Eviter les bureaux de change en rue (taux désastreux) — utiliser les DAB des banques.", en: "Forint (HUF). Card payments are widely accepted. Avoid street exchange offices (terrible rates) — use bank ATMs instead.", es: "Forinto (HUF). Tarjeta muy bien aceptada. Evitar las casas de cambio callejeras (tipo desastroso) — usar cajeros de bancos.", de: "Forint (HUF). Kreditkarte wird sehr gut akzeptiert. Vermeiden Sie Wechselstuben auf der Straße (katastrophale Preise) – nutzen Sie Bankautomaten." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Hongrois (langue isolée, difficile). Anglais bien parlé à Budapest. Moins courant en province. Allemand parfois utile.", en: "Hungarian (an isolated, difficult language). English is widely spoken in Budapest. Less common in the countryside. German can sometimes help.", es: "Húngaro (lengua aislada, difícil). El inglés se habla bien en Budapest. Menos frecuente en provincias. El alemán a veces resulta útil.", de: "Ungarisch (isolierte, schwierige Sprache). In Budapest wird gut Englisch gesprochen. In den Provinzen seltener. Deutsch manchmal nützlich." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type C/F (européen) — 230V. Aucun adaptateur nécessaire.", en: "Type C/F (European) — 230V. No adapter needed.", es: "Tipo C/F (europeo) — 230V. No se necesita adaptador.", de: "Typ C/F (europäisch) – 230 V. Kein Adapter erforderlich." } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Aucune précaution particulière. CEAM valide. Bonne qualité médicale.", en: "No special precautions. EHIC valid. Good standard of healthcare.", es: "Sin precauciones especiales. TSE válida. Buena calidad médica.", de: "Keine besonderen Vorsichtsmaßnahmen. Gültige EHIC. Gute medizinische Qualität." } },
    { icon: "🌊", label: { fr: "Thermes", en: "Thermal baths", es: "Termas", de: "Thermalbäder" }, value: { fr: "Aller aux bains au moins une fois : c'est une institution sociale hongroise, pas seulement touristique. Amener tongs et maillot. Le Széchenyi est ouvert jusqu'à 22h.", en: "Go to the baths at least once: it is a Hungarian social institution, not just a tourist attraction. Bring flip-flops and a swimsuit. Széchenyi stays open until 10 pm.", es: "Ir a los baños al menos una vez: es una institución social húngara, no solo turística. Llevar chanclas y bañador. El Széchenyi abre hasta las 22h.", de: "Ein Besuch in den Thermalbädern gehört unbedingt dazu: Sie sind in Ungarn eine gesellschaftliche Institution und nicht nur eine Touristenattraktion. Badeschuhe und Badebekleidung mitbringen. Das Széchenyi-Bad ist bis 22 Uhr geöffnet." } },
    { icon: "🍷", label: { fr: "Vins", en: "Wines", es: "Vinos", de: "Weine" }, value: { fr: "La Hongrie produit des vins exceptionnels méconnus : Tokaj Aszú (blanc liquoreux), Egri Bikavér (Sang de Taureau, rouge), Villányi (rouge du sud). Les acheter directement en cave.", en: "Hungary produces exceptional underrated wines: Tokaj Aszú (sweet white), Egri Bikavér (Bull's Blood, red) and Villányi (southern red). Buy them directly from the cellars.", es: "Hungría produce vinos excepcionales poco conocidos: Tokaj Aszú (blanco dulce), Egri Bikavér (Sangre de Toro, tinto), Villányi (tinto del sur). Comprarlos directamente en bodega.", de: "Ungarn produziert außergewöhnliche, wenig bekannte Weine: Tokaj Aszú (süßer Weißwein), Egri Bikavér (Stierblut, rot), Villányi (südlicher Rotwein). Kaufen Sie sie direkt im Keller." } },
  ],
};
