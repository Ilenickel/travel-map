export const ALBANIA = {
  code: "ALB",
  numericId: 8,
  name: { fr: "Albanie", en: "Albania", es: "Albania", de: "Albanien" },
  emoji: "🇦🇱",
  capital: { fr: "Tirana", en: "Tirana", es: "Tirana", de: "Tirana" },
  language: { fr: "Albanais", en: "Albanian", es: "Albanés", de: "Albanisch" },
  currency: { fr: "Lek albanais (ALL)", en: "Albanian Lek (ALL)", es: "Lek albanés (ALL)", de: "Albanischer Lek (ALL)" },
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 30, budgetMid: 60,
    tripMin: 600, tripMid: 1200,
  },
  criteria: {
    unesco: 2,
    nature: 2,
    randonnee: 2,
    gastronomie: 2,
    architecture: 1,
    desert: 0,
    safari: 0,
    ski: 2,
    ville: 1,
    plage: 2,
  },
  description: {
    fr: "L'Albanie est la dernière frontière balkanique : une côte adriatique et ionique encore préservée (la Riviera albanaise avec ses eaux turquoise), Berat et Gjirokastër (deux villes ottomanes UNESCO), le lac d'Ohrid partagé avec la Macédoine du Nord, les montagnes maudites (Alpes albanaises) au nord — un pays qui sort d'un isolement de 50 ans et offre une authenticité rare.", en: "Albania is the Balkans' last frontier: a still-unspoiled Adriatic and Ionian coastline (the Albanian Riviera with its turquoise waters), Berat and Gjirokastër (two UNESCO Ottoman towns), Lake Ohrid shared with North Macedonia, and the Accursed Mountains (Albanian Alps) in the north — a country emerging from 50 years of isolation that offers rare authenticity.", es: "Albania es la última frontera de los Balcanes: una costa adriática y jónica todavía preservada (la Riviera albanesa con sus aguas turquesa), Berat y Gjirokastër (dos ciudades otomanas UNESCO), el lago Ohrid compartido con Macedonia del Norte, y las Montañas Malditas (Alpes albaneses) al norte — un país que sale de 50 años de aislamiento y ofrece una autenticidad poco común.", de: "Albanien ist die letzte Balkangrenze: eine noch erhaltene adriatische und ionische Küste (die albanische Riviera mit ihrem türkisfarbenen Wasser), Berat und Gjirokastra (zwei osmanische UNESCO-Städte), der mit Nordmazedonien geteilte Ohridsee, die verfluchten Berge (albanische Alpen) im Norden – ein Land, das aus 50 Jahren Isolation hervorgeht und seltene Authentizität bietet.",
  },

  bestPeriods: [
    {
      months: { fr: "Juin – Septembre", en: "June – September", es: "Junio – Septiembre", de: "Juni – September" },
      label: { fr: "Été adriatique et ionique", en: "Adriatic and Ionian summer", es: "Verano adriático y jónico", de: "Adriatischer und ionischer Sommer" },
      color: "#22c55e",
      description: {
        fr: "Côte idéale (24–30°C, eau chaude, plages peu fréquentées). Juillet-août chaud mais la Riviera reste moins bondée que la Croatie. Juin et septembre parfaits.", en: "Ideal for the coast (24–30°C, warm water, uncrowded beaches). July-August is hot but the Riviera stays less crowded than Croatia. June and September are perfect.", es: "Costa ideal (24–30°C, agua cálida, playas poco concurridas). Julio-agosto caluroso, pero la Riviera sigue menos abarrotada que Croacia. Junio y septiembre son perfectos.", de: "Ideale Küste (24–30°C, warmes Wasser, nicht überfüllte Strände). Juli-August heiß, aber die Riviera bleibt weniger überfüllt als Kroatien. Perfekter Juni und September.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Avril – Mai", en: "April – May", es: "Abril – Mayo", de: "April – Mai" },
      label: { fr: "Printemps montagne", en: "Mountain spring", es: "Primavera de montaña", de: "Bergfrühling" },
      color: "#f59e0b",
      description: {
        fr: "Les Alpes albanaises (Valbonë, Theth) sont magnifiques au printemps. Idéal pour la randonnée et la visite des villes UNESCO de Berat et Gjirokastër.", en: "The Albanian Alps (Valbonë, Theth) are magnificent in spring. Ideal for hiking and visiting the UNESCO towns of Berat and Gjirokastër.", es: "Los Alpes albaneses (Valbonë, Theth) son magníficos en primavera. Ideal para el senderismo y la visita de las ciudades UNESCO de Berat y Gjirokastër.", de: "Die albanischen Alpen (Valbonë, Theth) sind im Frühling großartig. Ideal zum Wandern und zum Besuch der UNESCO-Städte Berat und Gjirokastra.",
      },
      icon: "🌿",
    },
  ],

  weatherCities: [
    {
      id: "tirana",
      name: "Tirana",
      region: { fr: "Plaine centrale (capitale)", en: "Central plain (capital)", es: "Llanura central (capital)", de: "Zentralebene (Hauptstadt)" },
      data: [
        { month: "Jan", temp:  7, rain: 130, icon: "🌧️" },
        { month: "Fév", temp:  8, rain: 120, icon: "⛅" },
        { month: "Mar", temp: 11, rain: 100, icon: "⛅" },
        { month: "Avr", temp: 14, rain: 90,  icon: "⛅" },
        { month: "Mai", temp: 19, rain: 70,  icon: "⛅" },
        { month: "Jun", temp: 23, rain: 35,  icon: "☀️" },
        { month: "Jul", temp: 27, rain: 20,  icon: "⛅" },
        { month: "Aoû", temp: 28, rain: 20,  icon: "⛅" },
        { month: "Sep", temp: 23, rain: 55,  icon: "☀️" },
        { month: "Oct", temp: 17, rain: 95,  icon: "⛅" },
        { month: "Nov", temp: 12, rain: 140, icon: "⛅" },
        { month: "Déc", temp:  8, rain: 155, icon: "🌧️" },
      ],
    },
    {
      id: "saranda",
      name: "Sarandë",
      region: { fr: "Riviera ionique (sud)", en: "Ionian Riviera (south)", es: "Riviera jónica (sur)", de: "Ionische Riviera (Süden)" },
      data: [
        { month: "Jan", temp:  9, rain: 160, icon: "🌧️" },
        { month: "Fév", temp: 10, rain: 130, icon: "⛅" },
        { month: "Mar", temp: 12, rain: 100, icon: "⛅" },
        { month: "Avr", temp: 16, rain: 65,  icon: "⛅" },
        { month: "Mai", temp: 21, rain: 40,  icon: "☀️" },
        { month: "Jun", temp: 25, rain: 15,  icon: "☀️" },
        { month: "Jul", temp: 28, rain: 5,   icon: "⛅" },
        { month: "Aoû", temp: 28, rain: 8,   icon: "⛅" },
        { month: "Sep", temp: 24, rain: 40,  icon: "☀️" },
        { month: "Oct", temp: 19, rain: 90,  icon: "⛅" },
        { month: "Nov", temp: 14, rain: 150, icon: "⛅" },
        { month: "Déc", temp: 10, rain: 185, icon: "🌧️" },
      ],
    },
  ],

  destinations: [
    {
      id: 1,
      name: { fr: "Berat — Ville des mille fenêtres (UNESCO)", en: "Berat — City of a Thousand Windows (UNESCO)", es: "Berat — Ciudad de las mil ventanas (UNESCO)", de: "Berat – Stadt der tausend Fenster (UNESCO)" },
      region: { fr: "Centre", en: "Centre", es: "Centro", de: "Center" },
      description: {
        fr: "Berat (UNESCO) est l'une des mieux préservées des villes ottomanes des Balkans : ses maisons blanches aux centaines de fenêtres identiques s'étagent sur la colline sous la citadelle médiévale du XIIIe siècle. Le quartier de Mangalem (côté musulman) et Gorica (côté chrétien) se font face de part et d'autre de la rivière Osum. Un musée vivant de l'architecture ottomane.", en: "Berat (UNESCO) is one of the best-preserved Ottoman towns in the Balkans: its white houses with hundreds of identical windows climb the hillside beneath the 13th-century medieval citadel. The Mangalem quarter (Muslim side) and Gorica (Christian side) face each other across the Osum River. A living museum of Ottoman architecture.", es: "Berat (UNESCO) es una de las ciudades otomanas mejor conservadas de los Balcanes: sus casas blancas con cientos de ventanas idénticas se escalonan en la colina bajo la ciudadela medieval del siglo XIII. El barrio de Mangalem (lado musulmán) y Gorica (lado cristiano) se enfrentan a ambos lados del río Osum. Un museo vivo de la arquitectura otomana.", de: "Berat (UNESCO) ist eine der am besten erhaltenen osmanischen Städte auf dem Balkan: Ihre weißen Häuser mit Hunderten identischer Fenster verteilen sich auf dem Hügel unterhalb der mittelalterlichen Zitadelle aus dem 13. Jahrhundert. Auf beiden Seiten des Flusses Osum liegen sich die Bezirke Mangalem (muslimische Seite) und Gorica (christliche Seite) gegenüber. Ein lebendiges Museum osmanischer Architektur.",
      },
      wikipedia: "Berat",
      tags: ["UNESCO", "Histoire", "Architecture"],
      mustSee: [
        { name: { fr: "Citadelle de Berat (Kalaja) — habitée depuis le IVe s. av. J.-C.", en: "Berat Citadel (Kalaja) — inhabited since the 4th century BC", es: "Ciudadela de Berat (Kalaja) — habitada desde el siglo IV a. C.", de: "Zitadelle von Berat (Kalaja) – seit dem 4. Jahrhundert bewohnt. av. ANZEIGE" }, wikipedia: "Berat_Castle" },
        { name: { fr: "Quartier de Mangalem — maisons ottomanes aux cents fenêtres", en: "Mangalem quarter — Ottoman houses with hundreds of windows", es: "Barrio de Mangalem — casas otomanas con cientos de ventanas", de: "Bezirk Mangalem – Osmanische Häuser mit hundert Fenstern" }, wikipedia: "Berat" },
        { name: { fr: "Musée des icônes d'Onufri — peintre albanais du XVIe siècle", en: "Onufri Icon Museum — 16th-century Albanian painter", es: "Museo de iconos de Onufri — pintor albanés del siglo XVI", de: "Onufri-Ikonenmuseum – albanischer Maler des 16. Jahrhunderts" }, wikipedia: "Onufri" },
        { name: { fr: "Vue sur la rivière Osum depuis le pont de Gorica", en: "View of the Osum River from the Gorica bridge", es: "Vista del río Osum desde el puente de Gorica", de: "Blick auf den Fluss Osum von der Gorica-Brücke" }, wikipedia: "Berat" },
      ],
    },
    {
      id: 2,
      name: { fr: "Gjirokastër — Cité de pierre (UNESCO)", en: "Gjirokastër — City of Stone (UNESCO)", es: "Gjirokastër — Ciudad de piedra (UNESCO)", de: "Gjirokastra – Stadt aus Stein (UNESCO)" },
      region: { fr: "Sud", en: "South", es: "Sur", de: "Süden" },
      description: {
        fr: "Gjirokastër (UNESCO) est une ville de pierre du XVIIe siècle dans la vallée de Drinos : ses maisons-tours aux toits de pierre grise (ardoise locale) et sa citadelle ottomane sont uniques dans les Balkans. Ville natale d'Enver Hoxha (dictateur communiste) et d'Ismail Kadaré (romancier albanais de réputation mondiale). La prison communiste dans la citadelle est un témoignage historique fort.", en: "Gjirokastër (UNESCO) is a 17th-century stone town in the Drino Valley: its tower houses with grey stone roofs (local slate) and its Ottoman citadel are unique in the Balkans. Birthplace of Enver Hoxha (communist dictator) and Ismail Kadaré (world-renowned Albanian novelist). The communist prison inside the citadel is a powerful historical testimony.", es: "Gjirokastër (UNESCO) es una ciudad de piedra del siglo XVII en el valle del Drino: sus casas-torre con tejados de piedra gris (pizarra local) y su ciudadela otomana son únicas en los Balcanes. Ciudad natal de Enver Hoxha (dictador comunista) y de Ismail Kadaré (novelista albanés de fama mundial). La prisión comunista en la ciudadela es un testimonio histórico contundente.", de: "Gjirokastra (UNESCO) ist eine Steinstadt aus dem 17. Jahrhundert im Drinos-Tal: Ihre Turmhäuser mit grauen Steindächern (lokaler Schiefer) und ihre osmanische Zitadelle sind einzigartig auf dem Balkan. Geburtsort von Enver Hoxha (kommunistischer Diktator) und Ismail Kadaré (weltberühmter albanischer Schriftsteller). Das kommunistische Gefängnis in der Zitadelle ist ein starkes historisches Zeugnis.",
      },
      wikipedia: "Gjirokastër",
      tags: ["UNESCO", "Architecture", "Histoire"],
      mustSee: [
        { name: { fr: "Citadelle de Gjirokastër — avion américain F-86 capturé en 1957", en: "Gjirokastër Citadel — American F-86 aircraft captured in 1957", es: "Ciudadela de Gjirokastër — avión estadounidense F-86 capturado en 1957", de: "Zitadelle von Gjirokastra – 1957 erbeutete amerikanische F-86-Flugzeuge" }, wikipedia: "File:Gjirokastër Castle (by Pudelek) 3.jpg" },
        { name: { fr: "Maison-musée d'Ismail Kadaré — romancier albanais", en: "Ismail Kadaré House-Museum — Albanian novelist", es: "Casa-museo de Ismail Kadaré — novelista albanés", de: "Hausmuseum von Ismail Kadaré – albanischer Schriftsteller" }, wikipedia: "File:Gjirokastër, Albania November 2022 - Winding lane.jpg" },
        { name: { fr: "Village de Labovë e Kryqit — monastère du Xe siècle dans les montagnes", en: "Labovë e Kryqit village — 10th-century monastery in the mountains", es: "Pueblo de Labovë e Kryqit — monasterio del siglo X en las montañas", de: "Dorf Labovë e Kryqit – Kloster aus dem 10. Jahrhundert in den Bergen" }, wikipedia: "File:Gjirokastër, Albania November 2022 - View.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Riviera albanaise — Côte ionique", en: "Albanian Riviera — Ionian Coast", es: "Riviera albanesa — Costa jónica", de: "Albanische Riviera – Ionische Küste" },
      region: { fr: "Sud (côte)", en: "South (coast)", es: "Sur (costa)", de: "Süden (Küste)" },
      description: {
        fr: "La Riviera albanaise (de Vlorë à Sarandë) est la côte méditerranéenne la moins connue d'Europe : eaux ioniques turquoise, falaises calcaires, plages de galets et de sable, villages de pêcheurs accrochés à la falaise (Dhermi, Himara, Lukova). La route panoramique de la Riviera (SH8) est l'une des plus belles d'Europe et reste peu fréquentée.", en: "The Albanian Riviera (from Vlorë to Sarandë) is Europe's least-known Mediterranean coastline: turquoise Ionian waters, limestone cliffs, pebble and sand beaches, fishing villages clinging to the cliffside (Dhermi, Himara, Lukova). The scenic Riviera road (SH8) is one of the most beautiful in Europe and remains uncrowded.", es: "La Riviera albanesa (de Vlorë a Sarandë) es la costa mediterránea menos conocida de Europa: aguas jónicas turquesa, acantilados calcáreos, playas de guijarros y arena, pueblos de pescadores aferrados al acantilado (Dhermi, Himara, Lukova). La carretera panorámica de la Riviera (SH8) es una de las más bellas de Europa y sigue poco frecuentada.", de: "Die albanische Riviera (von Vlorë bis Sarandë) ist die am wenigsten bekannte Mittelmeerküste Europas: türkisfarbenes ionisches Wasser, Kalksteinfelsen, Kies- und Sandstrände, an die Klippe geschmiegte Fischerdörfer (Dhermi, Himara, Lukova). Die Riviera-Panoramastraße (SH8) ist eine der schönsten Europas und nach wie vor wenig befahren.",
      },
      wikipedia: "File:Bunec beach Albanian Riviera.jpg",
      tags: ["Plage", "Panorama", "Rural", "Nature"],
      mustSee: [
        { name: { fr: "Plage de Ksamil — 4 îlots dans l'eau turquoise face à Corfou", en: "Ksamil Beach — 4 islets in turquoise water facing Corfu", es: "Playa de Ksamil — 4 islotes en aguas turquesa frente a Corfú", de: "Ksamil Beach – 4 Inseln im türkisfarbenen Wasser mit Blick auf Korfu" }, wikipedia: "File:Bunec beach Albanian Riviera.jpg" },
        { name: { fr: "Route panoramique SH8 Vlorë–Sarandë — vue sur les îles grecques", en: "SH8 scenic road Vlorë–Sarandë — views of the Greek islands", es: "Carretera panorámica SH8 Vlorë–Sarandë — vistas de las islas griegas", de: "Panoramaroute SH8 Vlorë–Sarandë – Blick auf die griechischen Inseln" }, wikipedia: "File:Road construction at Albanian Riviera.jpg" },
        { name: { fr: "Dhermi — village suspendu au-dessus de la mer ionique", en: "Dhermi — village perched above the Ionian Sea", es: "Dhermi — pueblo suspendido sobre el mar Jónico", de: "Dhermi – Dorf über dem Ionischen Meer" }, wikipedia: "File:Dhermi village.jpg" },
        { name: { fr: "Ruines de Butrint (UNESCO) — cité antique grecque et romaine dans une lagune", en: "Ruins of Butrint (UNESCO) — ancient Greek and Roman city in a lagoon", es: "Ruinas de Butrinto (UNESCO) — ciudad antigua griega y romana en una laguna", de: "Ruinen von Butrint (UNESCO) – antike griechische und römische Stadt in einer Lagune" }, wikipedia: "Butrint" },
      ],
    },
    {
      id: 4,
      name: { fr: "Alpes albanaises — Valbonë et Theth", en: "Albanian Alps — Valbonë and Theth", es: "Alpes albaneses — Valbonë y Theth", de: "Albanische Alpen – Valbonë und Theth" },
      region: { fr: "Nord", en: "North", es: "Norte", de: "Norden" },
      description: {
        fr: "Les Alpes albanaises (aussi appelées 'Montagnes Maudites') au nord de l'Albanie sont l'une des zones les plus sauvages des Balkans : le parc national de Valbonë avec ses pics de 2 700m, la vallée de Theth (village isolé avec sa tour de guet du Bektachisme), et le trek Valbonë-Theth (6h) sont parmi les plus beaux de la région.", en: "The Albanian Alps (also called the 'Accursed Mountains') in northern Albania are one of the wildest areas in the Balkans: Valbonë National Park with its 2,700m peaks, the Theth valley (an isolated village with its Bektashi watchtower), and the Valbonë-Theth trek (6h) are among the most beautiful in the region.", es: "Los Alpes albaneses (también llamados 'Montañas Malditas') al norte de Albania son una de las zonas más salvajes de los Balcanes: el parque nacional de Valbonë con sus picos de 2.700m, el valle de Theth (pueblo aislado con su torre de vigilancia del bektachismo), y el trekking Valbonë-Theth (6h) están entre los más bellos de la región.", de: "Die albanischen Alpen (auch „Verfluchte Berge“ genannt) im Norden Albaniens gehören zu den wildesten Gebieten des Balkans: Der Valbonë-Nationalpark mit seinen 2.700 m hohen Gipfeln, das Theth-Tal (ein abgelegenes Dorf mit seinem Bektachismus-Wachturm) und die Valbonë-Theth-Wanderung (6 Stunden) gehören zu den schönsten in der Region.",
      },
      wikipedia: "File:Albanian Alps from Air.jpg",
      tags: ["Randonnée", "Montagne", "Nature", "Ski"],
      mustSee: [
        { name: { fr: "Trek Valbonë–Theth (6h) — passage montagneux à 1 800m", en: "Valbonë–Theth trek (6h) — mountain pass at 1,800m", es: "Trekking Valbonë–Theth (6h) — paso de montaña a 1.800m", de: "Trek Valbonë–Theth (6 Stunden) – bergige Passage auf 1.800 m" }, wikipedia: "File:Albanian Alps from Air.jpg" },
        { name: { fr: "Cascade de Theth (Grunas) — 30m dans la forêt de pins", en: "Theth Waterfall (Grunas) — 30m in a pine forest", es: "Cascada de Theth (Grunas) — 30m en un bosque de pinos", de: "Theth-Wasserfall (Grunas) – 30 m im Kiefernwald" }, wikipedia: "File:2024-10-14 Theth National Park 18.jpg" },
        { name: { fr: "Kulla (tour de guet) de Theth — architecture du Kanun albanais", en: "Kulla (watchtower) of Theth — architecture of the Albanian Kanun", es: "Kulla (torre de vigilancia) de Theth — arquitectura del Kanun albanés", de: "Kulla (Wachturm) von Theth – Architektur des albanischen Kanun" }, wikipedia: "File:Kisha e Thethit - 2018 (8).jpg" },
        { name: { fr: "Lac de Koman — traversée en ferry dans un paysage de fjord", en: "Lake Koman — ferry crossing through a fjord-like landscape", es: "Lago de Koman — travesía en ferry por un paisaje de fiordo", de: "Koman-See – Fährüberfahrt in einer Fjordlandschaft" }, wikipedia: "File:Ferry Berisha on Lake Komani, September 2022 05.jpg" },
      ],
    },
    {
      id: 5,
      name: "Tirana",
      region: { fr: "Centre de l'Albanie", en: "Central Albania", es: "Centro de Albania", de: "Zentralalbanien" },
      description: {
        fr: "Capitale colorée et en pleine effervescence, Tirana surprend par ses façades multicolores et son énergie jeune. Entre vestiges communistes reconvertis en musées, château ottoman et marchés animés, la ville raconte l'histoire mouvementée de l'Albanie. Cafés branchés et gastronomie locale rythment ses journées.", en: "A colourful, bustling capital, Tirana surprises visitors with its multicoloured facades and youthful energy. Between communist relics turned into museums, an Ottoman castle and lively markets, the city tells Albania's turbulent history. Trendy cafés and local cuisine set the pace of its days.", es: "Capital colorida y en plena efervescencia, Tirana sorprende por sus fachadas multicolores y su energía juvenil. Entre vestigios comunistas convertidos en museos, un castillo otomano y mercados animados, la ciudad narra la agitada historia de Albania. Cafés de moda y gastronomía local marcan el ritmo de sus días.", de: "Als farbenfrohe und geschäftige Hauptstadt überrascht Tirana mit ihren bunten Fassaden und ihrer jungen Energie. Zwischen in Museen umgewandelten kommunistischen Überresten, einem osmanischen Schloss und lebhaften Märkten erzählt die Stadt die bewegte Geschichte Albaniens. Trendige Cafés und lokale Gastronomie prägen seinen Alltag.",
      },
      wikipedia: "Tirana",
      tags: ["Ville", "Architecture", "Gastronomie", "Culture"],
      mustSee: [
        { name: { fr: "Place Skanderbeg", en: "Skanderbeg Square", es: "Plaza Skanderbeg", de: "Skanderbeg-Platz" }, wikipedia: "Skanderbeg_Square" },
        { name: { fr: "Bunk'Art — musée dans un bunker", en: "Bunk'Art — museum in a bunker", es: "Bunk'Art — museo en un búnker", de: "Bunk'Art – Museum im Bunker" }, wikipedia: "File:Bunk'Art 1 Entrance.jpg" },
        { name: { fr: "Château de Tirana", en: "Tirana Castle", es: "Castillo de Tirana", de: "Tirana-Burg" }, wikipedia: "File:Kalaja e Tiranës.jpg" },
        { name: { fr: "Bloc (Le Bloc) — architecture communiste", en: "Blloku (The Block) — communist architecture", es: "Blloku (El Bloque) — arquitectura comunista", de: "Block (Le Bloc) – kommunistische Architektur" }, wikipedia: "File:Former_Enver_Hoxha_House.jpg" },
        { name: { fr: "Marché de Pazari i Ri", en: "Pazari i Ri Market", es: "Mercado de Pazari i Ri", de: "Pazari i Ri Markt" }, wikipedia: "File:New Bazaar (Pazari i Ri), Tirana, Albania.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "L'Albanie est l'un des pays les moins chers des Balkans : les prix restent très bas malgré une hausse du tourisme depuis 2018. La côte est plus chère en juillet-août. Tirana et les villes UNESCO sont très abordables toute l'année.", en: "Albania is one of the cheapest countries in the Balkans: prices remain very low despite a rise in tourism since 2018. The coast is more expensive in July-August. Tirana and the UNESCO towns are very affordable year-round.", es: "Albania es uno de los países más baratos de los Balcanes: los precios siguen siendo muy bajos pese al aumento del turismo desde 2018. La costa es más cara en julio-agosto. Tirana y las ciudades UNESCO son muy asequibles todo el año.", de: "Albanien ist eines der günstigsten Länder auf dem Balkan: Die Preise bleiben trotz eines Anstiegs des Tourismus seit 2018 sehr niedrig. Die Küste ist im Juli und August teurer. Tirana und UNESCO-Städte sind das ganze Jahr über sehr erschwinglich.",
    },
    currency: "ALL",
    exchangeRate: "1€ ≈ 105 ALL",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Guesthouse familiale (Berat, Gjirokastër)", en: "Family guesthouse (Berat, Gjirokastër)", es: "Casa de huéspedes familiar (Berat, Gjirokastër)", de: "Familiengästehaus (Berat, Gjirokastër)" }, price: "20–40 €", detail: { fr: "Petits-déjeuners albanais inclus souvent", en: "Albanian breakfast often included", es: "Desayuno albanés a menudo incluido", de: "Oft ist ein albanisches Frühstück inbegriffen" } },
          { label: { fr: "Hôtel 3★ Tirana centre", en: "3★ hotel, central Tirana", es: "Hotel 3★ centro de Tirana", de: "Hotel 3★ Tirana Zentrum" }, price: "45–80 €", detail: { fr: "Bon confort, proche des Blok", en: "Good comfort, near Blloku", es: "Buen confort, cerca del Blloku", de: "Guter Komfort, in der Nähe des Blok" } },
          { label: { fr: "Bungalow / villa côtière (Ksamil)", en: "Bungalow / coastal villa (Ksamil)", es: "Bungalow / villa costera (Ksamil)", de: "Küstenbungalow/Villa (Ksamil)" }, price: "50–100 €", detail: { fr: "Vue mer, réserver à l'avance en juillet-août", en: "Sea view, book ahead in July-August", es: "Vista al mar, reservar con antelación en julio-agosto", de: "Meerblick, im Juli-August im Voraus buchen" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Byrek (feuillleté à la viande ou épinards)", en: "Byrek (meat or spinach pastry)", es: "Byrek (hojaldre de carne o espinacas)", de: "Byrek (Fleisch- oder Spinatblätterteig)" }, price: "1–3 €", detail: { fr: "Petit-déjeuner albanais universel", en: "Universal Albanian breakfast", es: "Desayuno albanés universal", de: "Universelles albanisches Frühstück" } },
          { label: { fr: "Tavë kosi (agneau au yaourt) dans une taverne locale", en: "Tavë kosi (lamb in yoghurt) at a local tavern", es: "Tavë kosi (cordero al yogur) en una taberna local", de: "Tavë kosi (Lamm mit Joghurt) in einer örtlichen Taverne" }, price: "6–12 €", detail: { fr: "Plat national albanais", en: "Albania's national dish", es: "Plato nacional albanés", de: "Albanisches Nationalgericht" } },
          { label: { fr: "Poisson grillé sur la côte ionique", en: "Grilled fish on the Ionian coast", es: "Pescado a la parrilla en la costa jónica", de: "Gegrillter Fisch an der Ionischen Küste" }, price: "10–20 €", detail: { fr: "Pêche du jour, très frais", en: "Catch of the day, very fresh", es: "Pesca del día, muy fresco", de: "Fang des Tages, sehr frisch" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Furgon (minibus) Tirana–Berat (2h30)", en: "Furgon (minibus) Tirana–Berat (2h30)", es: "Furgon (microbús) Tirana–Berat (2h30)", de: "Furgon (Kleinbus) Tirana–Berat (2 Std. 30 Min.)" }, price: "3–5 €", detail: { fr: "Transport local essentiel", en: "Essential local transport", es: "Transporte local esencial", de: "Unverzichtbarer Nahverkehr" } },
          { label: { fr: "Bus Tirana–Sarandë (4h30)", en: "Bus Tirana–Sarandë (4h30)", es: "Autobús Tirana–Sarandë (4h30)", de: "Bus Tirana – Saranda (4 Std. 30 Min.)" }, price: "8–15 €", detail: { fr: "Compagnies privées, départ fréquent", en: "Private companies, frequent departures", es: "Compañías privadas, salidas frecuentes", de: "Private Unternehmen, häufige Abfahrten" } },
          { label: { fr: "Ferry Sarandë–Corfou (Grèce, 30 min)", en: "Ferry Sarandë–Corfu (Greece, 30 min)", es: "Ferry Sarandë–Corfú (Grecia, 30 min)", de: "Fähre Saranda–Korfu (Griechenland, 30 Min.)" }, price: "20–35 €", detail: { fr: "Liaison quotidienne", en: "Daily crossing", es: "Conexión diaria", de: "Tägliche Verbindung" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Entrée citadelle de Berat ou Gjirokastër", en: "Entry to Berat or Gjirokastër citadel", es: "Entrada a la ciudadela de Berat o Gjirokastër", de: "Eingang zur Zitadelle von Berat oder Gjirokastër" }, price: "2–5 €", detail: { fr: "Très peu cher", en: "Very cheap", es: "Muy barato", de: "Sehr preiswert" } },
          { label: { fr: "Ruines de Butrint (UNESCO)", en: "Ruins of Butrint (UNESCO)", es: "Ruinas de Butrinto (UNESCO)", de: "Ruinen von Butrint (UNESCO)" }, price: "10 €", detail: { fr: "Site antique exceptionnel près de Sarandë", en: "Exceptional ancient site near Sarandë", es: "Sitio antiguo excepcional cerca de Sarandë", de: "Außergewöhnliche antike Stätte in der Nähe von Sarandë" } },
          { label: { fr: "Guide trek Valbonë–Theth (journée)", en: "Valbonë–Theth trek guide (full day)", es: "Guía de trekking Valbonë–Theth (día completo)", de: "Wanderführer Valbonë–Theth (Tag)" }, price: "20–40 €", detail: { fr: "Transport en ferry Koman inclus souvent", en: "Koman ferry transport often included", es: "Transporte en ferry por Koman a menudo incluido", de: "Der Transport mit der Koman-Fähre ist oft inbegriffen" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "30–50 €/j", desc: { fr: "Guesthouse + byrek + furgon", en: "Guesthouse + byrek + furgon", es: "Casa de huéspedes + byrek + furgon", de: "Gästehaus + Byrek + Furgon" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "60–110 €/j", desc: { fr: "Hôtel 3★ + taverne + voiture", en: "3★ hotel + tavern + car", es: "Hotel 3★ + taberna + coche", de: "3★ Hotel + Taverne + Auto" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "10 jours", en: "10 days", es: "10 días", de: "10 Tage" },
      route: { fr: "Tirana (2j) → Berat (2j) → Gjirokastër (2j) → Riviera + Ksamil (3j) → Alpes / Theth (1j)", en: "Tirana (2d) → Berat (2d) → Gjirokastër (2d) → Riviera + Ksamil (3d) → Alps / Theth (1d)", es: "Tirana (2d) → Berat (2d) → Gjirokastër (2d) → Riviera + Ksamil (3d) → Alpes / Theth (1d)", de: "Tirana (2 Tage) → Berat (2 Tage) → Gjirokastër (2 Tage) → Riviera + Ksamil (3 Tage) → Alpen / Theth (1 Tag)" },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "600 – 1 000 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Tirana (Wizz Air, Air Albania)", en: "Return flight Paris–Tirana (Wizz Air, Air Albania)", es: "Vuelo ida y vuelta París–Tirana (Wizz Air, Air Albania)", de: "Hin- und Rückflug Paris–Tirana (Wizz Air, Air Albania)" }, amount: "80–200 €" },
            { label: { fr: "Hébergement (10 nuits)", en: "Accommodation (10 nights)", es: "Alojamiento (10 noches)", de: "Unterkunft (10 Nächte)" }, amount: "200–350 €" },
            { label: { fr: "Transports (furgons + bus)", en: "Transport (furgons + buses)", es: "Transportes (furgons + autobuses)", de: "Transport (Transporter + Busse)" }, amount: "80–130 €" },
            { label: { fr: "Nourriture + cafés + bière locale", en: "Food + coffee + local beer", es: "Comida + cafés + cerveza local", de: "Essen + Cafés + lokales Bier" }, amount: "180–300 €" },
            { label: { fr: "Activités + Butrint + guider", en: "Activities + Butrint + guide", es: "Actividades + Butrinto + guía", de: "Aktivitäten + Butrint + Führer" }, amount: "80–160 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "1 200 – 2 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Tirana", en: "Return flight Paris–Tirana", es: "Vuelo ida y vuelta París–Tirana", de: "Hin- und Rückflug Paris–Tirana" }, amount: "100–250 €" },
            { label: { fr: "Hôtels 3★ (10 nuits)", en: "3★ hotels (10 nights)", es: "Hoteles 3★ (10 noches)", de: "3★ Hotels (10 Nächte)" }, amount: "450–800 €" },
            { label: { fr: "Voiture de location (10 jours)", en: "Rental car (10 days)", es: "Coche de alquiler (10 días)", de: "Mietwagen (10 Tage)" }, amount: "250–400 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants", es: "Comida y restaurantes", de: "Essen & Restaurants" }, amount: "300–550 €" },
            { label: { fr: "Activités, trek, côte", en: "Activities, trekking, coast", es: "Actividades, trekking, costa", de: "Aktivitäten, Wanderung, Küste" }, amount: "150–300 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde París", de: "Flug ab Paris" }, value: { fr: "~2h30 (Wizz Air direct Beauvais/CDG–Tirana, Air Albania). Liaisons régulières.", en: "~2h30 (Wizz Air direct Beauvais/CDG–Tirana, Air Albania). Regular flights.", es: "~2h30 (Wizz Air directo Beauvais/CDG–Tirana, Air Albania). Vuelos regulares.", de: "ca. 2 Std. 30 Min. (Wizz Air direkt Beauvais/CDG–Tirana, Air Albania). Regelmäßige Verbindungen." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Aucun visa pour les Français (90 jours). Passeport ou carte d'identité acceptés. Pas dans l'UE (candidat).", en: "No visa required for French citizens (90 days). Passport or ID card accepted. Not in the EU (candidate country).", es: "Sin visado para ciudadanos europeos (90 días). Se acepta pasaporte o DNI. No pertenece a la UE (país candidato).", de: "Kein Visum für Franzosen (90 Tage). Reisepass oder Personalausweis werden akzeptiert. Nicht in der EU (Kandidat)." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Lek albanais (ALL). Euros acceptés dans les hôtels et sur la côte. Espèces indispensables dans les villages et furgons.", en: "Albanian Lek (ALL). Euros accepted in hotels and along the coast. Cash essential in villages and furgons.", es: "Lek albanés (ALL). Se aceptan euros en hoteles y en la costa. Efectivo imprescindible en pueblos y furgons.", de: "Albanischer Lek (ALLE). Euro werden in Hotels und an der Küste akzeptiert. Unverzichtbare Arten in Dörfern und Furgons." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Albanais (langue unique — ni slave ni romane). Anglais parlé par les jeunes à Tirana et sur la côte. Italien très compris (forte influence TV italienne).", en: "Albanian (a unique language — neither Slavic nor Romance). English spoken by younger people in Tirana and on the coast. Italian widely understood (strong influence of Italian TV).", es: "Albanés (idioma único, ni eslavo ni románico). El inglés lo hablan los jóvenes en Tirana y en la costa. El italiano se entiende bastante (fuerte influencia de la televisión italiana).", de: "Albanisch (eine einzige Sprache – weder Slawisch noch Romanisch). Englisch wird von jungen Leuten in Tirana und an der Küste gesprochen. Sehr gute Italienischkenntnisse (starker italienischer TV-Einfluss)." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe eléctrico", de: "Steckdose" }, value: { fr: "Type C/F (européen) — 230V. Aucun adaptateur nécessaire.", en: "Type C/F (European) — 230V. No adapter needed.", es: "Tipo C/F (europeo) — 230V. No se necesita adaptador.", de: "Typ C/F (europäisch) – 230 V. Kein Adapter erforderlich." } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Pas de précautions particulières. Eau du robinet à éviter dans les zones rurales. Assurance voyage recommandée.", en: "No special precautions needed. Avoid tap water in rural areas. Travel insurance recommended.", es: "Sin precauciones especiales. Evitar el agua del grifo en zonas rurales. Se recomienda seguro de viaje.", de: "Keine besonderen Vorsichtsmaßnahmen. Leitungswasser sollte in ländlichen Gebieten vermieden werden. Reiseversicherung empfohlen." } },
    { icon: "🚗", label: { fr: "Routes", en: "Roads", es: "Carreteras", de: "Straßen" }, value: { fr: "Les routes de montagne (Alpes albanaises) sont parfois en mauvais état. Un 4x4 est recommandé pour Valbonë et Theth. Les furgons locaux connaissent tous les chemins.", en: "Mountain roads (Albanian Alps) can be in poor condition. A 4x4 is recommended for Valbonë and Theth. Local furgons know every route.", es: "Las carreteras de montaña (Alpes albaneses) a veces están en mal estado. Se recomienda un 4x4 para Valbonë y Theth. Los furgons locales conocen todos los caminos.", de: "Bergstraßen (Albanische Alpen) sind teilweise in schlechtem Zustand. Für Valbonë und Theth wird ein Allradfahrzeug empfohlen. Die örtlichen Furgons kennen alle Wege." } },
    { icon: "🏖️", label: { fr: "Riviera", en: "Riviera", es: "Riviera", de: "Riviera" }, value: { fr: "La Riviera albanaise est encore préservée des grandes foules, contrairement à la Croatie voisine. Juillet-août plus fréquenté — préférer juin ou septembre.", en: "The Albanian Riviera is still spared the big crowds, unlike neighbouring Croatia. July-August is busier — June or September is preferable.", es: "La Riviera albanesa todavía se libra de las grandes multitudes, a diferencia de la vecina Croacia. Julio-agosto es más concurrido: se prefiere junio o septiembre.", de: "Im Gegensatz zum benachbarten Kroatien ist die albanische Riviera noch immer von großen Menschenmengen verschont. Von Juli bis August ist es geschäftiger – lieber Juni oder September." } },
  ],
};
