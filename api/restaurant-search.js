// Recherche d'un restaurant PAR SON NOM via Geoapify, bornée à un cercle autour
// de la ville concernée. Appelée uniquement par le formulaire de contribution
// (AddRestaurantForm) : la liste affichée aux visiteurs, elle, vient de la base
// — Geoapify n'est donc interrogé qu'une fois par restaurant, au moment où
// quelqu'un le propose, jamais à la consultation.
//
// ATTENTION au choix d'endpoint. La Places API (/v2/places), qui semblait
// l'évidence puisqu'elle sait filtrer par catégorie `catering.*`, s'est révélée
// inutilisable pour une recherche par nom : testée sur Paris le 2026-07-28,
// `name=tasty crousty` renvoyait ZÉRO résultat alors que six établissements de
// cette enseigne existent bel et bien dans OpenStreetMap, et `name=Crousty Up`
// renvoyait tantôt un résultat tantôt aucun d'un appel à l'autre. Son paramètre
// `name` ne fait pas de correspondance fiable sur plusieurs mots.
// L'autocomplétion géocodante (/v1/geocode/autocomplete) trouve les six, avec
// leur catégorie et leur adresse — c'est un index de recherche textuelle, ce que
// nous voulons ici. Le filtre `circle` la borne exactement comme la Places API.
// Ne pas « revenir à la Places API parce que c'est celle des lieux » sans
// refaire ce test.
//
// Pourquoi une recherche explicite plutôt qu'un géocodage silencieux après
// publication (comme pour les lieux de visite, voir geocode-place.js) : un
// restaurant se distingue mal par son seul nom (« Chez Marie » existe partout),
// et une résolution a posteriori placerait régulièrement le mauvais
// établissement sur la carte sans que personne ne s'en aperçoive. Ici, c'est le
// contributeur qui choisit le bon résultat, et l'on conserve immédiatement son
// place_id, ses coordonnées, son adresse et ses cuisines.
//
// Le cercle de 12 km ne définit pas ce qu'on va chercher, il BORNE la recherche :
// sans lui, « Chez Marie » saisi pour Lyon pourrait remonter un homonyme à
// Marseille.
//
// Aucun résultat n'est écrit en base ici : la ligne n'est créée qu'au moment de
// la publication (api/places.js, action 'add'), avec les coordonnées choisies.
import { getAdminClient, verifyUser } from './_lib/supabaseAdmin.js';
import { resolveCityCoordinatesForLabel } from './_lib/cityGeocode.js';

const GEOAPIFY_API_KEY = process.env.VITE_GEOAPIFY_API_KEY;

// Rayon de recherche autour du centre-ville. 12 km couvre une grande
// agglomération sans déborder sur la ville voisine (SAME_CITY_RADIUS_KM vaut
// 15 km : au-delà, deux villes sont déjà considérées comme distinctes).
const SEARCH_RADIUS_M = 12000;

// Catégories Geoapify considérées comme « endroit où l'on mange ».
const CATERING_PREFIX = 'catering.';

// Pas d'extraction de cuisine ici : l'autocomplétion ne renvoie que des
// catégories à deux niveaux (`catering.restaurant`, `catering.fast_food`),
// jamais le sous-type `catering.restaurant.italian` de la Places API — vérifié
// le 2026-07-28 sur « sushi », « trattoria » et « Le Petit Cambodge », tous
// renvoyés sans sous-type. Le champ cuisine est donc saisi par le contributeur,
// ce qui reste de toute façon plus juste qu'un libellé OSM approximatif.

// Un nom écrit hors alphabet latin est-il présent ? (idéogrammes, kana,
// hangul, cyrillique, grec, arabe…). Sert à décider s'il vaut la peine de
// chercher une forme latine — un restaurant français n'en a évidemment pas
// besoin.
// La classe capture « les caractères qui SONT des lettres et NE SONT PAS
// latins » : la ponctuation, les chiffres et les espaces ne comptent pas.
const NON_LATIN_LETTER = /[^\P{L}\p{Script=Latin}]/u;

// Forme en alphabet latin d'un nom écrit dans une autre écriture.
//
// OpenStreetMap nomme les établissements dans leur langue : à Kyoto, `name`
// vaut « 挽肉と米 » ou « マクドナルド ». Geoapify expose les autres graphies dans
// `other_names`, d'où l'on tire « Hikiniku to come » / « McDonald's ».
//
// Deux règles importantes :
//   - on ne touche JAMAIS au nom d'origine, qui reste la valeur de `name` en
//     base. C'est la forme latine qui est stockée à part.
//   - la langue du site N'INTERVIENT PAS ici. Le choix de la graphie à afficher
//     appartient au lecteur, pas au contributeur : le figer à l'écriture
//     donnerait un nom anglais définitif à un restaurant japonais, y compris
//     pour un futur visiteur japonais. On stocke donc les deux formes, et
//     src/lib/restaurants.js tranche à l'affichage.
// La forme retenue est l'anglais, à défaut une romanisation (`name:ja_rm`) :
// ce sont les graphies internationales, indépendantes de qui a contribué.
function latinNameFor(properties) {
  const original = properties.name || properties.address_line1 || '';
  if (!original || !NON_LATIN_LETTER.test(original)) return null;

  const others = properties.other_names;
  if (!others || typeof others !== 'object') return null;

  const candidates = [
    others['name:en'],
    // Romanisations : `name:ja_rm` (japonais), `name:ko_rm` (coréen)…
    ...Object.keys(others).filter((k) => k.endsWith('_rm')).map((k) => others[k]),
  ].filter((v) => typeof v === 'string' && v.trim());

  const latin = candidates.find((v) => !NON_LATIN_LETTER.test(v));
  if (!latin || latin === original) return null;
  return latin.trim().slice(0, 100);
}

// Geoapify n'expose pas de fourchette de prix. Le niveau de budget reste donc
// saisi par le contributeur ; on propose seulement une valeur de départ
// plausible d'après la catégorie (un fast-food n'est jamais à trois symboles).
function suggestBudget(category) {
  if (!category) return 2;
  if (category.startsWith('catering.fast_food')) return 1;
  if (category === 'catering.restaurant.fine_dining') return 3;
  return 2;
}

async function searchGeoapify({ text, lat, lng, lang }) {
  if (!GEOAPIFY_API_KEY) return [];
  try {
    const params = new URLSearchParams({
      text,
      filter: `circle:${lng},${lat},${SEARCH_RADIUS_M}`,
      bias: `proximity:${lng},${lat}`,
      limit: '20',
      apiKey: GEOAPIFY_API_KEY,
    });
    if (lang) params.set('lang', lang);

    const res = await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?${params}`, {
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return [];
    const data = await res.json();

    const seen = new Set();
    const out = [];
    for (const f of data.features || []) {
      const p = f.properties || {};
      const name = p.name || p.address_line1;
      // Un établissement sans nom (fréquent dans OSM) n'est pas exploitable :
      // impossible à retrouver, à noter ou à distinguer d'un autre.
      if (!name || p.lat == null || p.lon == null) continue;

      // L'autocomplétion indexe tous les types de lieux : on ne garde que les
      // commerces (`amenity`), pas les rues ni les quartiers. La catégorie
      // ABSENTE est acceptée sciemment — sur les six « Tasty Crousty » de Paris,
      // l'un d'eux n'en porte aucune dans OpenStreetMap, et l'exclure
      // reproduirait exactement le défaut qu'on corrige ici : une franchise
      // affichée incomplète. Le contributeur voit le nom, l'adresse et la
      // position avant de publier.
      const category = typeof p.category === 'string' ? p.category : null;
      if (p.result_type !== 'amenity') continue;
      if (category && !category.startsWith(CATERING_PREFIX)) continue;

      if (!p.place_id || seen.has(p.place_id)) continue;
      seen.add(p.place_id);

      out.push({
        geoapifyPlaceId: p.place_id,
        name: String(name).slice(0, 100),
        nameLatin: latinNameFor(p),
        lat: p.lat,
        lng: p.lon,
        // `address_line2` AVANT `formatted` : `formatted` préfixe l'adresse du
        // nom de l'établissement (« マクドナルド, 大宮通, Kyoto… »), qui est
        // déjà affiché juste au-dessus — on stockait donc le nom en double dans
        // chaque fiche. `address_line2` est l'adresse seule.
        address: p.address_line2 || p.formatted || null,
        cuisine: null,
        suggestedBudget: suggestBudget(category),
        // Sert à prévenir le contributeur qu'OpenStreetMap ne confirme pas la
        // nature de ce lieu : c'est le seul cas où notre filtre laisse passer
        // autre chose qu'un établissement de restauration avéré.
        categoryUnconfirmed: !category,
      });
    }
    return out;
  } catch {
    return [];
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, reason: 'Méthode non autorisée.' });
  }

  let admin;
  try { admin = getAdminClient(); } catch {
    return res.status(500).json({ ok: false, reason: 'Configuration serveur manquante.' });
  }

  const body = typeof req.body === 'string' ? safeParse(req.body) : (req.body || {});
  const { authToken, cityName, countryCode, countryAlpha2, text = '', lang = null } = body;

  // Le nom recherché est obligatoire : un appel sans texte ferait remonter les
  // 20 premiers établissements du cercle, ce qui n'aide personne à retrouver un
  // restaurant précis et consommerait du quota Geoapify pour rien.
  const cleanText = typeof text === 'string' ? text.trim().slice(0, 80) : '';
  if (!cityName || !countryCode || cleanText.length < 2) {
    return res.status(400).json({ ok: false, reason: 'Requête invalide.' });
  }

  // Recherche réservée aux membres connectés : elle ne sert qu'à contribuer, et
  // chaque appel consomme du quota Geoapify.
  const user = await verifyUser(admin, authToken);
  if (!user) {
    return res.status(401).json({ ok: false, reason: 'Session expirée, veuillez vous reconnecter.' });
  }

  // resolveCityCoordinatesForLabel et non resolveCityCoordinates : le nom reçu
  // ici est un LIBELLÉ de destination éditoriale (« Mont-Saint-Michel &
  // Bretagne »), pas un nom de ville. Voir cityGeocode.js pour le détail des
  // deux passes et les mesures qui les justifient.
  const city = await resolveCityCoordinatesForLabel(admin, { countryCode, cityName, countryAlpha2 });
  if (!city) {
    return res.status(200).json({ ok: true, results: [], cityUnresolved: true });
  }

  const results = await searchGeoapify({
    text: cleanText,
    lat: city.lat,
    lng: city.lng,
    // Encodé par URLSearchParams : `lang` vient du corps de la requête et ne
    // doit pas pouvoir injecter d'autres paramètres dans l'URL Geoapify.
    lang: typeof lang === 'string' ? lang.slice(0, 5) : null,
  });

  // Les restaurants déjà enregistrés pour cette ville sont signalés plutôt que
  // masqués : le contributeur comprend pourquoi il ne peut pas le republier, et
  // peut aller le noter au lieu de créer un doublon.
  const ids = results.map((r) => r.geoapifyPlaceId).filter(Boolean);
  const known = new Set();
  if (ids.length) {
    const [{ data: comm }, { data: stat }] = await Promise.all([
      admin.from('destination_places').select('geoapify_place_id').in('geoapify_place_id', ids),
      admin.from('static_destination_places').select('geoapify_place_id').in('geoapify_place_id', ids),
    ]);
    for (const row of [...(comm || []), ...(stat || [])]) known.add(row.geoapify_place_id);
  }

  return res.status(200).json({
    ok: true,
    results: results.map((r) => ({ ...r, alreadyAdded: known.has(r.geoapifyPlaceId) })),
    // Ville RÉELLEMENT utilisée comme centre de recherche, affichée au
    // contributeur : un libellé de destination composé peut se résoudre sur une
    // commune voisine (« Punta Cana » → Higüey), et aucun contrôle automatique
    // ne sait trancher ces cas — autant les rendre visibles plutôt que de
    // laisser chercher dans le vide. Absent quand la réponse vient du cache
    // (le nom n'y est pas stocké) : l'affichage est alors simplement omis.
    searchCity: city.name || null,
  });
}

function safeParse(s) { try { return JSON.parse(s); } catch { return {}; } }
