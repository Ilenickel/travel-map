export const BOSNIA_HERZEGOVINA = {
  code: "BIH",
  numericId: 70,
  name: { fr: "Bosnie-Herzégovine", en: "Bosnia and Herzegovina", es: "Bosnia y Herzegovina", de: "Bosnien und Herzegowina" },
  emoji: "🇧🇦",
  capital: { fr: "Sarajevo", en: "Sarajevo", es: "Sarajevo", de: "Sarajevo" },
  language: { fr: "Bosnien, Serbe, Croate", en: "Bosnian, Serbian, Croatian", es: "Bosnio, serbio, croata", de: "Bosnisch, Serbisch, Kroatisch" },
  currency: { fr: "Mark convertible (BAM)", en: "Convertible mark (BAM)", es: "Marco convertible (BAM)", de: "Konvertible Mark (BAM)" },
  timezone: "UTC+1 (été UTC+2)",
  filter: {
    budgetMin: 35, budgetMid: 65,
    tripMin: 700, tripMid: 1500,
  },
  criteria: {
    unesco: 2,
    nature: 2,
    randonnee: 2,
    gastronomie: 2,
    architecture: 2,
    desert: 0,
    safari: 0,
    ski: 2,
    ville: 1,
    plage: 1,
    plongee: 1,
  },
  description: {
    fr: "La Bosnie-Herzégovine est un carrefour de civilisations unique en Europe : Sarajevo, ville où l'Orient rencontre l'Occident (l'unique capitale européenne avec une mosquée, une cathédrale orthodoxe, une église catholique et une synagogue à 500m les unes des autres), Mostar et son pont ottoman (Stari Most, UNESCO), les chutes de Kravice et les canyons de la Neretva.", en: "Bosnia and Herzegovina is a unique crossroads of civilisations in Europe: Sarajevo, where East meets West (the only European capital with a mosque, an Orthodox cathedral, a Catholic church and a synagogue all within 500 metres of one another), Mostar and its Ottoman bridge (Stari Most, UNESCO), the Kravice waterfalls and the Neretva canyons.", es: "Bosnia y Herzegovina es una encrucijada de civilizaciones única en Europa: Sarajevo, ciudad donde Oriente se encuentra con Occidente (la única capital europea con una mezquita, una catedral ortodoxa, una iglesia católica y una sinagoga a 500 metros unas de otras), Mostar y su puente otomano (Stari Most, UNESCO), las cascadas de Kravice y los cañones del Neretva.", de: "Bosnien-Herzegowina ist ein einzigartiger Knotenpunkt der Zivilisationen in Europa: Sarajevo, eine Stadt, in der der Osten auf den Westen trifft (die einzige europäische Hauptstadt mit einer Moschee, einer orthodoxen Kathedrale, einer katholischen Kirche und einer Synagoge 500 m voneinander entfernt), Mostar und seine osmanische Brücke (Stari Most, UNESCO), die Kravica-Wasserfälle und die Neretva-Schluchten.",
  },

  bestPeriods: [
    {
      months: { fr: "Juin – Septembre", en: "June – September", es: "Junio – Septiembre", de: "Juni – September" },
      label: { fr: "Été balkanique", en: "Balkan summer", es: "Verano balcánico", de: "Balkansommer" },
      color: "#22c55e",
      description: {
        fr: "Mostar et la côte herzégovinienne idéales (25–30°C), Sarajevo agréable (20–25°C), cascades et canyons au maximum. Juillet-août chaud à Mostar mais magnifique.", en: "Ideal for Mostar and the Herzegovinian countryside (25–30°C), with pleasant weather in Sarajevo (20–25°C) and waterfalls and canyons at their best. July and August are hot in Mostar but stunning.", es: "Mostar y la campiña herzegovina en su mejor momento (25–30°C), Sarajevo agradable (20–25°C), cascadas y cañones en su esplendor. Julio y agosto son calurosos en Mostar pero magníficos.", de: "Mostar und die herzegowinische Küste ideal (25–30°C), Sarajevo angenehm (20–25°C), Wasserfälle und Schluchten maximal. Juli-August heiß in Mostar, aber wunderschön.",
      },
      icon: "☀️",
    },
    {
      months: { fr: "Décembre – Mars", en: "December – March", es: "Diciembre – Marzo", de: "Dezember – März" },
      label: { fr: "Ski olympique", en: "Olympic skiing", es: "Esquí olímpico", de: "Olympisches Skifahren" },
      color: "#3b82f6",
      description: {
        fr: "Ski à Jahorina et Bjelašnica (stations des JO 1984). Sarajevo sous la neige — atmosphère unique. Températures -5 à -10°C en montagne.", en: "Skiing in Jahorina and Bjelašnica (the 1984 Olympic resorts). Sarajevo under snow has a one-of-a-kind atmosphere. Temperatures range from -5 to -10°C in the mountains.", es: "Esquí en Jahorina y Bjelašnica (estaciones de los JJ. OO. de 1984). Sarajevo bajo la nieve tiene un ambiente único. Temperaturas de -5 a -10°C en la montaña.", de: "Skifahren in Jahorina und Bjelašnica (Orte der Olympischen Spiele 1984). Sarajevo unter dem Schnee – einzigartige Atmosphäre. Temperaturen -5 bis -10°C in den Bergen.",
      },
      icon: "⛷️",
    },
  ],

  weatherCities: [
    {
      id: "sarajevo",
      name: "Sarajevo",
      region: { fr: "Vallée de la Miljacka (capitale)", en: "Miljacka Valley (capital)", es: "Valle del Miljacka (capital)", de: "Miljacka Valley (Hauptstadt)" },
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
      region: { fr: "Herzégovine (vallée de la Neretva)", en: "Herzegovina (Neretva Valley)", es: "Herzegovina (valle del Neretva)", de: "Herzegowina (Neretva-Tal)" },
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
      name: { fr: "Sarajevo — Carrefour de civilisations", en: "Sarajevo — Crossroads of Civilisations", es: "Sarajevo — Encrucijada de civilizaciones", de: "Sarajevo – Kreuzung der Zivilisationen" },
      region: { fr: "Capitale", en: "Capital", es: "Capital", de: "Hauptstadt" },
      description: {
        fr: "Sarajevo est la seule ville d'Europe où l'on peut entendre l'appel à la prière depuis une mosquée ottomane et les cloches d'une cathédrale catholique au même moment : le quartier ottoman de Baščaršija (bazars, fontaines, artisans de cuivre), le coin de l'assassinat de l'Archiduc François-Ferdinand (1914 — déclencheur de la WWI), et la Bibliothèque Nationale incendiée en 1992 — Sarajevo porte l'histoire d'Europe entière.", en: "Sarajevo is the only city in Europe where you can hear the call to prayer from an Ottoman mosque and the bells of a Catholic cathedral at the same time: from the Ottoman quarter of Baščaršija (bazaars, fountains and copper craftsmen) to the spot where Archduke Franz Ferdinand was assassinated (1914 — the spark that set off World War I) and the National Library burned in 1992, Sarajevo carries the history of Europe as a whole.", es: "Sarajevo es la única ciudad de Europa donde se puede oír la llamada a la oración desde una mezquita otomana y las campanas de una catedral católica al mismo tiempo: el barrio otomano de Baščaršija (bazares, fuentes, artesanos del cobre), el lugar del asesinato del archiduque Francisco Fernando (1914, chispa que desencadenó la Primera Guerra Mundial), y la Biblioteca Nacional incendiada en 1992 — Sarajevo lleva consigo la historia de toda Europa.", de: "Sarajevo ist die einzige Stadt in Europa, in der man gleichzeitig den Gebetsruf einer osmanischen Moschee und die Glocken einer katholischen Kathedrale hören kann: das osmanische Viertel Baščaršija (Basare, Brunnen, Kupferhandwerker), die Ecke des Attentats auf Erzherzog Franz Ferdinand (1914 – Auslöser des Ersten Weltkriegs) und die 1992 niedergebrannte Nationalbibliothek – Sarajevo trägt die Geschichte ganz Europas.",
      },
      wikipedia: "Sarajevo",
      tags: ["Histoire", "Ville", "Architecture", "Gastronomie"],
      mustSee: [
        { name: { fr: "Baščaršija — grand bazar ottoman du XVe siècle", en: "Baščaršija — great 15th-century Ottoman bazaar", es: "Baščaršija — gran bazar otomano del siglo XV", de: "Baščaršija – großer osmanischer Basar aus dem 15. Jahrhundert" }, wikipedia: "Baščaršija" },
        { name: { fr: "Pont Latin — lieu de l'assassinat de François-Ferdinand (28 juin 1914)", en: "Latin Bridge — site of Franz Ferdinand's assassination (28 June 1914)", es: "Puente Latino — lugar del asesinato de Francisco Fernando (28 de junio de 1914)", de: "Pont Latin – Ort der Ermordung von François-Ferdinand (28. Juni 1914)" }, wikipedia: "Latin_Bridge" },
        { name: { fr: "Mosquée Gazi Husrev-beg (1531) — la plus importante des Balkans", en: "Gazi Husrev-beg Mosque (1531) — the most important mosque in the Balkans", es: "Mezquita de Gazi Husrev-beg (1531) — la más importante de los Balcanes", de: "Gazi-Husrev-Beg-Moschee (1531) – die größte auf dem Balkan" }, wikipedia: "Gazi_Husrev-beg_Mosque" },
      ],
    },
    {
      id: 2,
      name: { fr: "Mostar — Stari Most (UNESCO)", en: "Mostar — Stari Most (UNESCO)", es: "Mostar — Stari Most (UNESCO)", de: "Mostar – Stari Most (UNESCO)" },
      region: { fr: "Herzégovine", en: "Herzegovina", es: "Herzegovina", de: "Herzegowina" },
      description: {
        fr: "Mostar est la perle de l'Herzégovine : le Stari Most ('Vieux Pont', UNESCO) est un arc de pierre ottoman de 1566 — détruit en 1993 et reconstruit pierre par pierre en 2004 — symbole de la réconciliation bosniaque. Les plongeons depuis le pont (24m de hauteur) par les Mostari (plongeurs locaux) sont un rituel. Le vieux quartier ottoman (Kujundžiluk) est parfaitement préservé.", en: "Mostar is the jewel of Herzegovina: Stari Most ('Old Bridge', UNESCO) is an Ottoman stone arch from 1566 — destroyed in 1993 and rebuilt stone by stone in 2004 — that has become a symbol of Bosnian reconciliation. Dives from the bridge (24 metres high) by the Mostari, the local divers, are a ritual. The old Ottoman quarter of Kujundžiluk is beautifully preserved.", es: "Mostar es la joya de Herzegovina: el Stari Most ('Puente Viejo', UNESCO) es un arco de piedra otomano de 1566 — destruido en 1993 y reconstruido piedra a piedra en 2004 — símbolo de la reconciliación bosnia. Los saltos desde el puente (24 m de altura) realizados por los Mostari (saltadores locales) son todo un ritual. El antiguo barrio otomano (Kujundžiluk) está perfectamente conservado.", de: "Mostar ist die Perle der Herzegowina: Die Stari Most („Alte Brücke“, UNESCO) ist ein osmanischer Steinbogen aus dem Jahr 1566 – 1993 zerstört und 2004 Stein für Stein wieder aufgebaut – Symbol der bosnischen Versöhnung. Tauchgänge von der Brücke (24 m hoch) durch die Mostari (örtliche Taucher) sind ein Ritual. Das alte osmanische Viertel (Kujundžiluk) ist perfekt erhalten.",
      },
      wikipedia: "Mostar",
      tags: ["UNESCO", "Histoire", "Nature", "Architecture"],
      mustSee: [
        { name: { fr: "Stari Most (Vieux Pont, UNESCO) — arc ottoman de 1566 reconstruit en 2004", en: "Stari Most (Old Bridge, UNESCO) — 1566 Ottoman arch rebuilt in 2004", es: "Stari Most (Puente Viejo, UNESCO) — arco otomano de 1566 reconstruido en 2004", de: "Stari Most (Alte Brücke, UNESCO) – Osmanischer Bogen aus dem Jahr 1566, 2004 rekonstruiert" }, wikipedia: "Stari_Most" },
        { name: { fr: "Plongeons des Mostari depuis le pont (24m, spectacle régulier)", en: "The Mostari's bridge dives (24m, regular spectacle)", es: "Saltos de los Mostari desde el puente (24 m, espectáculo habitual)", de: "Lassen Sie uns Mostari von der Brücke aus tauchen (24 m, regelmäßige Show)" }, wikipedia: "Mostar" },
        { name: { fr: "Kujundžiluk — bazar ottoman, artisans et cafés donnant sur la Neretva", en: "Kujundžiluk — Ottoman bazaar, artisans and cafés overlooking the Neretva", es: "Kujundžiluk — bazar otomano, artesanos y cafés con vistas al Neretva", de: "Kujundžiluk – Osmanischer Basar, Kunsthandwerker und Cafés mit Blick auf die Neretva" }, wikipedia: "File:Mostar BW 2024-10-01 12-51-16.jpg" },
        { name: { fr: "Mosquée Koski Mehmed Pasha — minaret avec vue sur le pont", en: "Koski Mehmed Pasha Mosque — minaret with a view over the bridge", es: "Mezquita Koski Mehmed Pasha — minarete con vistas al puente", de: "Koski-Mehmed-Pascha-Moschee – Minarett mit Blick auf die Brücke" }, wikipedia: "File:Mehmed Koski pašina džamija by Pudelek.jpg" },
      ],
    },
    {
      id: 3,
      name: { fr: "Kravice et canyons de l'Herzégovine", en: "Kravice and the Herzegovina canyons", es: "Kravice y los cañones de Herzegovina", de: "Kravice und Schluchten der Herzegowina" },
      region: { fr: "Herzégovine (ouest)", en: "Western Herzegovina", es: "Herzegovina (oeste)", de: "Herzegowina (Westen)" },
      description: {
        fr: "Les cascades de Kravice sont les chutes les plus impressionnantes des Balkans occidentaux : une demi-lune de 25m de haut sur 120m de large, avec une piscine naturelle turquoise au pied idéale pour la baignade. À proximité : le lac de Jablanica, les canyons de la Neretva, et Počitelj — village fortifié ottoman sur une colline au-dessus du fleuve.", en: "The Kravice waterfalls are the most impressive falls in the western Balkans: a 25-metre-high crescent stretching 120 metres wide, with a turquoise natural pool at the base that is perfect for swimming. Nearby are Lake Jablanica, the Neretva canyons, and Počitelj — an Ottoman fortified village perched on a hill above the river.", es: "Las cascadas de Kravice son las más impresionantes de los Balcanes occidentales: una media luna de 25 m de alto por 120 m de ancho, con una piscina natural turquesa al pie, perfecta para bañarse. Cerca se encuentran el lago de Jablanica, los cañones del Neretva y Počitelj, un pueblo fortificado otomano encaramado en una colina sobre el río.", de: "Die Kravice-Wasserfälle sind die beeindruckendsten Wasserfälle auf dem Westbalkan: ein 25 m hoher und 120 m breiter Halbmond mit einem natürlichen türkisfarbenen Becken am Fuß, das zum Schwimmen einlädt. In der Nähe: Jablanica-See, die Neretva-Schluchten und Počitelj – ein osmanisches befestigtes Dorf auf einem Hügel über dem Fluss.",
      },
      wikipedia: "File:Waterfalls Kravica 5, Bosnia and Herzegovina.jpg",
      tags: ["Nature", "Plage", "Histoire", "Randonnée"],
      mustSee: [
        { name: { fr: "Cascades de Kravice — demi-cercle turquoise de 25m de haut", en: "Kravice waterfalls — a 25-metre-high turquoise semicircle", es: "Cascadas de Kravice — semicírculo turquesa de 25 m de altura", de: "Kravice-Wasserfälle – 25 m hoher türkisfarbener Halbkreis" }, wikipedia: "File:Kravice-kosk9.jpg" },
        { name: { fr: "Počitelj — village fortifié ottoman du XVe siècle", en: "Počitelj — 15th-century Ottoman fortified village", es: "Počitelj — pueblo fortificado otomano del siglo XV", de: "Počitelj – Osmanisches befestigtes Dorf aus dem 15. Jahrhundert" }, wikipedia: "Počitelj" },
        { name: { fr: "Canyon de la Neretva — kayak et rafting depuis Konjic", en: "Neretva Canyon — kayaking and rafting from Konjic", es: "Cañón del Neretva — kayak y rafting desde Konjic", de: "Neretva-Schlucht – Kajakfahren und Rafting von Konjic aus" }, wikipedia: "Neretva" },
        { name: { fr: "Blagaj — source de la Buna sous une falaise avec tekke derviche du XVIe s.", en: "Blagaj — the Buna spring beneath a cliff, with a 16th-century dervish tekke", es: "Blagaj — manantial del Buna al pie de un acantilado, con un tekke derviche del siglo XVI", de: "Blagaj – Buna-Quelle unter einer Klippe mit Derwisch-Tekke aus dem 16. Jahrhundert." }, wikipedia: "File:Blagaj tekke 2020.jpg" },
      ],
    },
    {
      id: 4,
      name: { fr: "Stations olympiques — Jahorina et Bjelašnica", en: "Olympic resorts — Jahorina and Bjelašnica", es: "Estaciones olímpicas — Jahorina y Bjelašnica", de: "Olympische Stationen – Jahorina und Bjelašnica" },
      region: { fr: "Sarajevo (montagne)", en: "Sarajevo Mountains", es: "Sarajevo (montaña)", de: "Sarajevo (Berg)" },
      description: {
        fr: "Jahorina et Bjelašnica sont les deux stations de ski des Jeux Olympiques d'hiver de 1984 — les seuls JO jamais organisés dans un pays qui n'existe plus (Yougoslavie). Certaines infrastructures des JO sont encore visibles (bobsleigh de Trebević, maintenant accessible en télécabine). En été, les montagnes autour de Sarajevo offrent des randonnées dans des prairies alpines.", en: "Jahorina and Bjelašnica are the two ski resorts from the 1984 Winter Olympics — the only Olympics ever held in a country that no longer exists (Yugoslavia). Some Olympic infrastructure is still visible, including the Trebević bobsleigh track, now reached by cable car. In summer, the mountains around Sarajevo offer hikes through alpine meadows.", es: "Jahorina y Bjelašnica son las dos estaciones de esquí de los Juegos Olímpicos de Invierno de 1984 — los únicos Juegos Olímpicos celebrados en un país que ya no existe (Yugoslavia). Aún pueden verse algunas infraestructuras olímpicas, como la pista de bobsleigh de Trebević, hoy accesible en teleférico. En verano, las montañas alrededor de Sarajevo ofrecen senderismo por praderas alpinas.", de: "Jahorina und Bjelašnica sind die beiden Skigebiete der Olympischen Winterspiele 1984 – der einzigen Olympischen Spiele, die jemals in einem Land ausgetragen wurden, das nicht mehr existiert (Jugoslawien). Einige olympische Infrastrukturen sind noch sichtbar (Trebević-Bob, jetzt mit der Seilbahn erreichbar). Im Sommer laden die Berge rund um Sarajevo zum Wandern auf Almwiesen ein.",
      },
      wikipedia: "Jahorina",
      tags: ["Histoire", "Ski", "Randonnée", "Nature"],
      mustSee: [
        { name: { fr: "Piste de bobsleigh des JO 1984 sur Trebević (maintenant sentier graffiti)", en: "1984 Olympic bobsleigh track on Trebević (now a graffiti-covered trail)", es: "Pista de bobsleigh de los JJ. OO. de 1984 en Trebević (hoy un sendero con grafitis)", de: "Olympia-Bobbahn 1984 auf Trebević (heute Graffiti-Pfad)" }, wikipedia: "Trebević" },
        { name: { fr: "Ski à Jahorina (1 900m) — ancienne piste olympique encore fonctionnelle", en: "Skiing in Jahorina (1,900m) — a former Olympic slope still in use", es: "Esquí en Jahorina (1900 m) — antigua pista olímpica todavía en uso", de: "Skifahren in Jahorina (1.900 m) – alte Olympiapiste noch funktionsfähig" }, wikipedia: "Jahorina" },
        { name: { fr: "Bjelašnica (2 067m) — panorama sur Sarajevo et l'Herzégovine", en: "Bjelašnica (2,067m) — views over Sarajevo and Herzegovina", es: "Bjelašnica (2067 m) — panorámica de Sarajevo y Herzegovina", de: "Bjelašnica (2.067 m) – Panorama von Sarajevo und Herzegowina" }, wikipedia: "Bjelašnica" },
        { name: { fr: "Téléphérique de Trebević depuis Sarajevo (rénové en 2018)", en: "Trebević cable car from Sarajevo (renovated in 2018)", es: "Teleférico de Trebević desde Sarajevo (renovado en 2018)", de: "Trebević-Seilbahn von Sarajevo (2018 renoviert)" }, wikipedia: "File:Sarajevo cable car.jpg" },
      ],
    },
  ],

  costOfLiving: {
    intro: {
      fr: "La Bosnie-Herzégovine est l'un des pays les moins chers d'Europe : Sarajevo et Mostar restent très abordables malgré la hausse du tourisme post-COVID. Le mark convertible est arrimé à l'euro (1€ = 1,96 BAM). Les euros ne sont pas acceptés — il faut changer.", en: "Bosnia and Herzegovina is one of the cheapest countries in Europe: Sarajevo and Mostar remain very affordable despite the post-COVID rise in tourism. The convertible mark is pegged to the euro (1€ = 1.96 BAM). Euros are generally not accepted, so you need to exchange money.", es: "Bosnia y Herzegovina es uno de los países más baratos de Europa: Sarajevo y Mostar siguen siendo muy asequibles pese al aumento del turismo tras la COVID. El marco convertible está fijado al euro (1€ = 1,96 BAM). Los euros no suelen aceptarse — hay que cambiar moneda.", de: "Bosnien und Herzegowina ist eines der günstigsten Länder Europas: Sarajevo und Mostar bleiben trotz des Anstiegs des Post-COVID-Tourismus sehr erschwinglich. Die Konvertible Mark ist an den Euro gekoppelt (1€ = 1,96 BAM). Euro werden nicht akzeptiert – Sie müssen wechseln.",
    },
    currency: "BAM",
    exchangeRate: "1€ ≈ 1,96 BAM",
    categories: [
      {
        id: "accommodation",
        icon: "🏨",
        label: { fr: "Hébergement / nuit", en: "Accommodation / night", es: "Alojamiento / noche", de: "Unterkunft / Nacht" },
        items: [
          { label: { fr: "Pension familiale (Sarajevo ou Mostar)", en: "Family guesthouse (Sarajevo or Mostar)", es: "Pensión familiar (Sarajevo o Mostar)", de: "Familienrente (Sarajevo oder Mostar)" }, price: "25–50 €", detail: { fr: "Souvent dans des maisons ottomanes restaurées", en: "Often set in restored Ottoman houses", es: "A menudo en casas otomanas restauradas", de: "Oft in restaurierten osmanischen Häusern" } },
          { label: { fr: "Hôtel 3★ Sarajevo centre", en: "3★ hotel in central Sarajevo", es: "Hotel 3★ en el centro de Sarajevo", de: "Hotel 3★ Zentrum von Sarajevo" }, price: "50–90 €", detail: { fr: "Bon confort, accès facile à Baščaršija", en: "Comfortable, with easy access to Baščaršija", es: "Buen confort, fácil acceso a Baščaršija", de: "Guter Komfort, einfacher Zugang nach Baščaršija" } },
          { label: { fr: "Appartement Airbnb (Mostar)", en: "Airbnb apartment (Mostar)", es: "Apartamento Airbnb (Mostar)", de: "Airbnb-Wohnung (Mostar)" }, price: "35–70 €", detail: { fr: "Vue sur la Neretva dans les bonnes adresses", en: "Good options often come with Neretva views", es: "Las mejores opciones tienen vistas al Neretva", de: "Blick auf die Neretva an den richtigen Stellen" } },
        ],
      },
      {
        id: "food",
        icon: "🍽️",
        label: { fr: "Nourriture", en: "Food", es: "Comida", de: "Essen" },
        items: [
          { label: { fr: "Ćevapi (10 pièces) + somun (pain) dans une ćevabdžinica", en: "Ćevapi (10 pieces) + somun bread in a ćevabdžinica", es: "Ćevapi (10 piezas) + somun (pan) en una ćevabdžinica", de: "Ćevapi (10 Stück) + Somun (Brot) in einer ćevabdžinica" }, price: "4–8 €", detail: { fr: "Le plat national de Bosnie, partout excellent", en: "Bosnia's national dish, and excellent almost everywhere", es: "El plato nacional de Bosnia, excelente en todas partes", de: "Das Nationalgericht Bosniens, überall hervorragend" } },
          { label: { fr: "Restaurant turc-bosnien (Baščaršija)", en: "Turkish-Bosnian restaurant (Baščaršija)", es: "Restaurante turco-bosnio (Baščaršija)", de: "Türkisch-bosnisches Restaurant (Baščaršija)" }, price: "10–20 €", detail: { fr: "Burek, klepe (raviolis), dolma", en: "Burek, klepe dumplings and dolma", es: "Burek, klepe (raviolis) y dolma", de: "Burek, Klepe (Knödel), Dolma" } },
          { label: { fr: "Baklava + café bosnien sur le bazar", en: "Baklava + Bosnian coffee in the bazaar", es: "Baklava + café bosnio en el bazar", de: "Baklava + bosnischer Kaffee auf dem Basar" }, price: "3–5 €", detail: { fr: "Tradition ottomane incontournable", en: "An essential Ottoman-era tradition", es: "Una tradición otomana imprescindible", de: "Wesentliche osmanische Tradition" } },
        ],
      },
      {
        id: "transport",
        icon: "🚌",
        label: { fr: "Transport", en: "Transport", es: "Transporte", de: "Transport" },
        items: [
          { label: { fr: "Bus Sarajevo–Mostar (2h30)", en: "Sarajevo–Mostar bus (2h30)", es: "Autobús Sarajevo–Mostar (2h30)", de: "Bus Sarajevo–Mostar (2 Std. 30 Min.)" }, price: "8–12 €", detail: { fr: "Plusieurs départs par jour", en: "Several departures a day", es: "Varias salidas al día", de: "Mehrere Abfahrten pro Tag" } },
          { label: { fr: "Tramway Sarajevo (ticket)", en: "Sarajevo tram (ticket)", es: "Tranvía de Sarajevo (billete)", de: "Straßenbahn Sarajevo (Fahrkarte)" }, price: "1 €", detail: { fr: "Réseau historique des années 1880", en: "Historic network dating back to the 1880s", es: "Red histórica de la década de 1880", de: "Historisches Netz der 1880er Jahre" } },
          { label: { fr: "Taxi Sarajevo (course courte)", en: "Sarajevo taxi (short ride)", es: "Taxi en Sarajevo (trayecto corto)", de: "Taxi Sarajevo (kurze Fahrt)" }, price: "3–8 €", detail: { fr: "Très abordable, appli Bolt disponible", en: "Very affordable, with Bolt available", es: "Muy asequible, con la app Bolt disponible", de: "Sehr erschwinglich, Bolt-App verfügbar" } },
        ],
      },
      {
        id: "activities",
        icon: "🎭",
        label: { fr: "Activités", en: "Activities", es: "Actividades", de: "Aktivitäten" },
        items: [
          { label: { fr: "Musée du tunnel de la guerre (Sarajevo)", en: "War Tunnel Museum (Sarajevo)", es: "Museo del túnel de la guerra (Sarajevo)", de: "Kriegstunnelmuseum (Sarajevo)" }, price: "5–8 €", detail: { fr: "Incontournable sur le siège 1992–1995", en: "Essential for understanding the 1992–1995 siege", es: "Imprescindible sobre el asedio de 1992–1995", de: "Unverzichtbar auf dem Sitz 1992–1995" } },
          { label: { fr: "Excursion Kravice depuis Mostar (avec transport)", en: "Kravice excursion from Mostar (with transport)", es: "Excursión a Kravice desde Mostar (con transporte)", de: "Kravice-Ausflug ab Mostar (mit Transport)" }, price: "20–35 €", detail: { fr: "Demi-journée, baignade incluse", en: "Half-day trip, swimming included", es: "Media jornada, baño incluido", de: "Halber Tag, Schwimmen inklusive" } },
          { label: { fr: "Tour guidé Sarajevo historique (3h)", en: "Historic Sarajevo guided tour (3h)", es: "Tour guiado por el Sarajevo histórico (3h)", de: "Geführte Tour durch das historische Sarajevo (3 Stunden)" }, price: "15–25 €", detail: { fr: "Guide francophone disponible", en: "French-speaking guide available", es: "Guía en francés disponible", de: "Französischsprachiger Reiseführer verfügbar" } },
        ],
      },
    ],
    budgetSummary: [
      { type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" }, daily: "35–60 €/j", desc: { fr: "Pension + ćevapi + tramway", en: "Guesthouse + ćevapi + tram", es: "Pensión + ćevapi + tranvía", de: "Pension + ćevapi + Straßenbahn" }, color: "#22c55e" },
      { type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" }, daily: "65–120 €/j", desc: { fr: "Hôtel 3★ + restaurants + excursions", en: "3★ hotel + restaurants + excursions", es: "Hotel 3★ + restaurantes + excursiones", de: "3★ Hotel + Restaurants + Ausflüge" }, color: "#3b82f6" },
    ],
    tripEstimate: {
      duration: { fr: "8 jours", en: "8 days", es: "8 días", de: "8 Tage" },
      route: {
        fr: "Sarajevo (4j) → Mostar (2j) → Kravice + Blagaj (1j) → Počitelj (1j)", en: "Sarajevo (4d) → Mostar (2d) → Kravice + Blagaj (1d) → Počitelj (1d)", es: "Sarajevo (4d) → Mostar (2d) → Kravice + Blagaj (1d) → Počitelj (1d)", de: "Sarajevo (4 Tage) → Mostar (2 Tage) → Kravice + Blagaj (1 Tag) → Počitelj (1 Tag)",
      },
      budgets: [
        {
          type: { fr: "Routard", en: "Backpacker", es: "Mochilero", de: "Backpacker" },
          color: "#22c55e",
          total: "700 – 1 200 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Sarajevo (Wizz Air, Turkish Airlines via Istanbul)", en: "Return flight Paris–Sarajevo (Wizz Air, Turkish Airlines via Istanbul)", es: "Vuelo ida y vuelta París–Sarajevo (Wizz Air, Turkish Airlines vía Estambul)", de: "Hin- und Rückflug Paris–Sarajevo (Wizz Air, Turkish Airlines über Istanbul)" }, amount: "100–250 €" },
            { label: { fr: "Hébergement (8 nuits)", en: "Accommodation (8 nights)", es: "Alojamiento (8 noches)", de: "Unterkunft (8 Nächte)" }, amount: "200–370 €" },
            { label: { fr: "Transports (bus + tramway)", en: "Transport (bus + tram)", es: "Transporte (autobús + tranvía)", de: "Transport (Bus + Straßenbahn)" }, amount: "60–110 €" },
            { label: { fr: "Nourriture + cafés + baklava", en: "Food + coffee + baklava", es: "Comida + cafés + baklava", de: "Essen + Kaffee + Baklava" }, amount: "200–350 €" },
            { label: { fr: "Activités + musée tunnel + Kravice", en: "Activities + tunnel museum + Kravice", es: "Actividades + museo del túnel + Kravice", de: "Aktivitäten + Tunnelmuseum + Kravice" }, amount: "80–150 €" },
          ],
        },
        {
          type: { fr: "Confort", en: "Comfort", es: "Confort", de: "Komfort" },
          color: "#3b82f6",
          total: "1 500 – 2 800 €",
          includesFlights: true,
          breakdown: [
            { label: { fr: "Vol A/R Paris–Sarajevo", en: "Return flight Paris–Sarajevo", es: "Vuelo ida y vuelta París–Sarajevo", de: "Hin- und Rückflug Paris–Sarajevo" }, amount: "150–300 €" },
            { label: { fr: "Hôtels 3★ (8 nuits)", en: "3★ hotels (8 nights)", es: "Hoteles 3★ (8 noches)", de: "3★ Hotels (8 Nächte)" }, amount: "450–800 €" },
            { label: { fr: "Voiture de location + bus", en: "Rental car + bus", es: "Coche de alquiler + autobús", de: "Mietwagen + Bus" }, amount: "250–400 €" },
            { label: { fr: "Nourriture & restaurants", en: "Food & restaurants", es: "Comida y restaurantes", de: "Essen & Restaurants" }, amount: "350–600 €" },
            { label: { fr: "Excursions + stations + sorties", en: "Excursions + resorts + outings", es: "Excursiones + estaciones + salidas", de: "Ausflüge + Resorts + Ausflüge" }, amount: "200–400 €" },
          ],
        },
      ],
    },
  },

  practicalities: [
    { icon: "✈️", label: { fr: "Vol depuis Paris", en: "Flight from Paris", es: "Vuelo desde París", de: "Flug ab Paris" }, value: { fr: "~2h30 direct (Wizz Air Beauvais–Sarajevo). Sinon via Istanbul (Turkish Airlines) ou Vienne (Austrian Airlines).", en: "About 2h30 nonstop (Wizz Air Beauvais–Sarajevo). Otherwise via Istanbul (Turkish Airlines) or Vienna (Austrian Airlines).", es: "Unas 2h30 directo (Wizz Air Beauvais–Sarajevo). También vía Estambul (Turkish Airlines) o Viena (Austrian Airlines).", de: "ca. 2 Std. 30 Min. direkt (Wizz Air Beauvais–Sarajevo). Ansonsten über Istanbul (Turkish Airlines) oder Wien (Austrian Airlines)." } },
    { icon: "🪪", label: { fr: "Visa", en: "Visa", es: "Visado", de: "Visum" }, value: { fr: "Aucun visa pour les Français (90 jours). Passeport ou carte d'identité acceptés. Pas dans l'UE (candidat).", en: "No visa required for French citizens (90 days). Passport or national ID card accepted. Not in the EU (candidate country).", es: "Sin visado para ciudadanos franceses (90 días). Se acepta pasaporte o DNI. No pertenece a la UE (país candidato).", de: "Kein Visum für Franzosen (90 Tage). Reisepass oder Personalausweis werden akzeptiert. Nicht in der EU (Kandidat)." } },
    { icon: "💰", label: { fr: "Monnaie", en: "Currency", es: "Moneda", de: "Währung" }, value: { fr: "Mark convertible (BAM, arrimé à l'euro à 1,96). Euros non acceptés en général — changer à l'arrivée. Carte bancaire acceptée en ville.", en: "Convertible mark (BAM, pegged to the euro at 1.96). Euros are generally not accepted, so exchange money on arrival. Bank cards are accepted in towns and cities.", es: "Marco convertible (BAM, fijado al euro a 1,96). Los euros generalmente no se aceptan — cambiar moneda a la llegada. Tarjeta bancaria aceptada en las ciudades.", de: "Wandelbare Mark (BAM, gekoppelt an den Euro bei 1,96). Euro werden im Allgemeinen nicht akzeptiert – Wechseln Sie bei der Ankunft. Kreditkarte wird in der Stadt akzeptiert." } },
    { icon: "🗣️", label: { fr: "Langue", en: "Language", es: "Idioma", de: "Sprache" }, value: { fr: "Bosnien/Serbe/Croate (mutuellement intelligibles). Anglais parlé par les jeunes. Les guides touristiques parlent souvent français.", en: "Bosnian/Serbian/Croatian (mutually intelligible). English is spoken by many younger people. Tourist guides often speak French.", es: "Bosnio/serbio/croata (mutuamente inteligibles). El inglés lo hablan muchos jóvenes. Los guías turísticos suelen hablar francés.", de: "Bosnisch/Serbisch/Kroatisch (für beide Seiten verständlich). Englisch wird von jungen Leuten gesprochen. Reiseleiter sprechen oft Französisch." } },
    { icon: "🔌", label: { fr: "Prise électrique", en: "Power outlet", es: "Enchufe", de: "Steckdose" }, value: { fr: "Type C/F (européen) — 230V. Aucun adaptateur nécessaire.", en: "Type C/F (European) — 230V. No adapter needed.", es: "Tipo C/F (europeo) — 230V. No se necesita adaptador.", de: "Typ C/F (europäisch) – 230 V. Kein Adapter erforderlich." } },
    { icon: "💊", label: { fr: "Santé", en: "Health", es: "Salud", de: "Gesundheit" }, value: { fr: "Pas de précautions particulières. Assurance voyage recommandée (hors UE). Soins médicaux corrects à Sarajevo.", en: "No special precautions required. Travel insurance is recommended (outside the EU). Medical care is decent in Sarajevo.", es: "Sin precauciones especiales. Se recomienda seguro de viaje (fuera de la UE). Atención médica correcta en Sarajevo.", de: "Keine besonderen Vorsichtsmaßnahmen. Reiseversicherung empfohlen (Nicht-EU). Richtige medizinische Versorgung in Sarajevo." } },
    { icon: "🕌", label: { fr: "Religions", en: "Religions", es: "Religiones", de: "Religion" }, value: { fr: "Sarajevo est une ville de trois religions : musulmane (Bosniaques), orthodoxe (Serbes), catholique (Croates). Respecter les codes dans les mosquées (couvrir les épaules, retirer chaussures).", en: "Sarajevo is a city of three religions: Muslim (Bosniaks), Orthodox (Serbs) and Catholic (Croats). Respect local customs in mosques (cover your shoulders and remove your shoes).", es: "Sarajevo es una ciudad de tres religiones: musulmana (bosnios), ortodoxa (serbios) y católica (croatas). Respetar las normas en las mezquitas (cubrir los hombros, quitarse los zapatos).", de: "Sarajevo ist eine Stadt mit drei Religionen: Muslime (Bosnier), Orthodoxe (Serben), Katholiken (Kroaten). Respektieren Sie die Verhaltensregeln in Moscheen (Schultern bedecken, Schuhe ausziehen)." } },
    { icon: "⚠️", label: { fr: "Mines", en: "Landmines", es: "Minas", de: "Bergbau" }, value: { fr: "Des zones rurales isolées (forêts de montagne) sont encore minées depuis 1992–1995. Rester sur les sentiers balisés et ne pas s'aventurer hors des zones touristiques sans guide local.", en: "Some isolated rural areas (especially mountain forests) are still mined because of the 1992–1995 war. Stay on marked trails and do not venture outside tourist areas without a local guide.", es: "Algunas zonas rurales aisladas (bosques de montaña) siguen minadas desde 1992–1995. Permanecer en los senderos señalizados y no aventurarse fuera de las zonas turísticas sin guía local.", de: "Isolierte ländliche Gebiete (Bergwälder) werden seit 1992–1995 weiterhin vermint. Bleiben Sie auf markierten Wegen und verlassen Sie Touristengebiete nicht ohne einen ortskundigen Führer." } },
  ],
};
