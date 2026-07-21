# Photos de villes — guide d'intégration front

Ce document décrit un backend déjà écrit et fonctionnel (cache Supabase +
résolution Unsplash à la volée) pour récupérer une photo représentative
d'une ville. Il est destiné à quelqu'un qui n'a **pas** participé à son
écriture et doit uniquement brancher le front dessus — pas de logique de
résolution à réécrire, juste un appel HTTP à faire au bon moment avec les
bons paramètres.

**Ne pas modifier le backend décrit ici sans comprendre l'ensemble** (voir
section "Limites connues" en bas) — plusieurs choix contre-intuitifs sont
volontaires et documentés.

## 1. Vue d'ensemble

- Chaque ville a au plus **une** photo en cache dans la table Supabase
  `city_images` (clé `(city_name_key généré, country_code)`).
- Le cache est alimenté :
  - **à l'avance** pour les 325 villes des suggestions éditoriales
    (`trip_templates.is_editorial = true`), via `scripts/fetch-city-images.mjs`
    (déjà exécuté) ;
  - **à la demande** pour toute ville ajoutée manuellement par un utilisateur
    (planif libre), via l'action serveur `get-city-image` décrite ci-dessous —
    c'est la seule pièce qu'un front doit appeler.
- **Une ville sans photo valide ne doit JAMAIS recevoir de photo de
  remplacement générique** (ni photo du pays, ni photo aléatoire) — décision
  produit ferme (2026-07-22) : mieux vaut n'afficher aucune photo (habillage
  visuel neutre — gradient, initiale, icône — à faire côté front, pas encore
  fait) qu'une photo qui ne représente pas le lieu.

## 2. Appeler l'action `get-city-image`

Route existante : `api/trip-templates.js` (action-dispatch, PAS un nouveau
fichier — le projet est sur Vercel Hobby, déjà à 12/12 fonctions serverless).

### Requête

**Ne PAS faire un `fetch` brut** — le front a déjà un helper partagé pour
tous les appels à ce fichier, `callModeration` (`src/lib/moderation.js`),
utilisé par tous les autres écrans (voir `TripSuggestionsModal.jsx` pour un
exemple avec l'action `suggest`). Il récupère automatiquement le token de
session Supabase et l'ajoute au payload — pas besoin de le gérer à la main :

```js
import { callModeration } from '../lib/moderation';

const result = await callModeration('trip-templates', {
  action: 'get-city-image',
  cities: [
    {
      cityName: 'Pékin',
      countryCode: 'CHN',
      countryName: 'China',
      countryAlpha2: 'CN',
      sourceLanguage: 'fr',
      lat: 39.9042,
      lng: 116.4074,
    },
  ],
});
```

(`callModeration('trip-templates', payload)` fait `POST /api/trip-templates`
avec `{ ...payload, authToken }` — c'est un détail d'implémentation du
helper, pas quelque chose à reproduire à la main.)

Auth requise comme toutes les autres actions de ce fichier (anti-abus —
`verifyUser` avant dispatch, déjà en place, gérée automatiquement par
`callModeration`).

**Batch jusqu'à 8 villes par appel** (`MAX_CITY_IMAGE_BATCH`), résolues en
parallèle côté serveur. Si un écran a besoin de plus de 8 photos (ex: liste
de suggestions de villes), découper en plusieurs appels de 8.

### Champs de chaque entrée `cities[]`

| Champ           | Obligatoire | Description |
|-----------------|-------------|--------------|
| `cityName`      | oui | **Le nom SOURCE brut**, pas le libellé traduit affiché à l'écran. Pour les suggestions éditoriales : toujours le français, tel que stocké dans `trip_templates.city_name` (ex: "Pékin", jamais "Beijing" même si l'utilisateur voit "Beijing" en anglais sur son écran). Pour une ville tapée à la main par un utilisateur : le texte tel qu'il l'a tapé. **Voir section 4 — c'est la règle la plus facile à casser par erreur.** |
| `countryCode`   | oui | Code pays alpha-3 utilisé partout ailleurs dans l'app (ex: "CHN"). |
| `countryName`   | recommandé | Nom du pays **en anglais** (ex: "China"). Déjà disponible via `COUNTRIES` dans `src/data/index.js`. Améliore fortement la pertinence de la recherche Unsplash si la ville n'est pas encore en cache. Pas résolu côté serveur (les fichiers `src/data/*.js` utilisent des imports sans extension, incompatibles avec l'exécution Node hors Vite). |
| `countryAlpha2` | recommandé | Code pays alpha-2 (ex: "CN"), affine le géocodage si la ville n'est pas encore en cache. |
| `sourceLanguage`| non (défaut `'fr'`) | Langue du `cityName` fourni — indice pour la traduction de repli si le géocodage échoue. Mettre la langue active du site pour une ville tapée par un utilisateur. |
| `lat` / `lng`   | non | Coordonnées déjà connues (cas des villes éditoriales, via `trip_templates.city_lat/city_lng`) — évite un géocodage si fournies. Omettre si inconnues, le backend géocode lui-même. |

### Réponse

```json
{
  "ok": true,
  "images": [
    {
      "cityName": "Pékin",
      "countryCode": "CHN",
      "image": {
        "fromCache": true,
        "image_url": "https://images.unsplash.com/...",
        "thumb_url": "https://images.unsplash.com/...",
        "author_name": "...",
        "author_url": "...",
        "likes": 843,
        "notFound": false
      }
    }
  ]
}
```

Cas possibles pour `image` :
- **Photo trouvée** : `image_url` + `thumb_url` non nuls, `notFound: false`.
  Utiliser `thumb_url` pour les vignettes/cartes, `image_url` pour un affichage
  en grand.
- **Aucune photo exploitable** (`notFound: true`, `image_url`/`thumb_url`
  nuls) : afficher l'habillage neutre (gradient/initiale — voir section 5),
  **jamais** de photo de repli.
- **Erreur transitoire** (`error: true`, `notFound: true`, éventuellement
  `rateLimited: true`) : Unsplash indisponible ou quota atteint au moment de
  l'appel — rien n'a été mis en cache, un appel ultérieur retentera. Traiter
  comme `notFound` côté affichage (habillage neutre), pas d'erreur bloquante.

`author_name`/`author_url` sont déjà en base et dans la réponse (attribution
Unsplash) mais **jamais affichés actuellement** — à activer un jour si
décision produit de créditer les photographes.

## 3. Où appeler ça côté front

Deux familles d'écrans concernées (voir maquettes "Cartes immersives" /
"Cartes interactives" du 2026-07-20, non détaillées ici) :

1. **Suggestions éditoriales** (pays/villes déjà connues) : `lat`/`lng`
   connus via les données existantes → toujours les fournir, évite un
   géocodage inutile côté serveur.
2. **Planif libre** (ville ajoutée à la main par un utilisateur, voir
   `src/hooks/useTrips.js` → `addCity`) : `lat`/`lng` inconnus au moment de
   l'ajout (l'insertion actuelle ne géocode rien) → ne pas les fournir, le
   backend s'en charge (géocodage + mise en cache automatiques au premier
   appel).

Dans les deux cas, appeler `get-city-image` au moment de l'affichage (pas à
l'ajout de la ville) — c'est un appel cache-first, quasi instantané dès que
la ville a déjà été vue une fois par n'importe quel visiteur.

## 4. Piège n°1 : ne jamais envoyer le nom traduit/affiché

Le cache est indexé par nom source + coordonnées, PAS par le libellé que
l'utilisateur voit à l'écran. Un visiteur qui voit "Beijing" (site en
anglais) doit quand même déclencher un appel avec `cityName: "Pékin"` (le nom
source français stocké en base), sinon :
- le cache par nom exact rate (les deux chaînes sont différentes) ;
- dans le pire cas, ça déclenche une recherche Unsplash inutile pour une
  ville déjà en cache sous son nom source, potentiellement une photo
  DIFFÉRENTE de celle déjà servie aux autres visiteurs (le matching par
  coordonnées géographiques rattrape ce cas si `lat`/`lng` sont fournis, mais
  autant ne pas en dépendre).

Concrètement : utiliser la même variable que celle envoyée aux actions
`suggest`/`list-cities` existantes (le nom source), jamais le résultat d'un
`t('city.beijing')` ou équivalent i18n.

## 5. Reste à faire côté front (pas commencé)

- Appeler `get-city-image` depuis les écrans concernés (voir section 3).
- CSS/visuel de l'habillage neutre pour `notFound: true` — gradient + initiale
  de la ville, ou icône générique. **Ne jamais** remplacer par une photo (pays
  ou autre) — décision produit ferme, voir section 1.
- Décider si affichage du crédit photographe (`author_name`/`author_url`).

## 6. Fichiers concernés (ne pas dupliquer la logique ailleurs)

- `api/_lib/cityImages.js` — **module central**, toute la logique de
  résolution (cache → géocodage → Unsplash → cascade de repli → filtre de
  pertinence des légendes). Un seul endroit qui décide comment une photo est
  choisie, réutilisé à l'identique par la route serveur et le script bulk.
- `api/_lib/cityGeocode.js` — géocodage Geoapify (coordonnées + nom anglais
  canonique), cache permanent `city_geocache`.
- `api/_lib/cityNameOverrides.js` — corrections manuelles connues de noms de
  ville mal traduits automatiquement.
- `api/trip-templates.js` — action `get-city-image` (`handleGetCityImage`),
  point d'entrée HTTP unique pour le front.
- `scripts/fetch-city-images.mjs` — import initial en masse (déjà exécuté),
  ne pas relancer sans raison (respecte un quota Unsplash de 50 req/h, peut
  tourner plusieurs heures).
- `supabase/city_images_table.sql`, `city_images_geo.sql`,
  `city_images_fallback_tier.sql` — schéma de la table cache, déjà appliqués
  en base.

## 7. Limites connues du système (important, à lire avant de "corriger" quoi que ce soit)

- La recherche Unsplash par mot-clé garantit une photo **géographiquement
  plausible**, PAS une photo **iconique/reconnaissable**. Un filtre écarte les
  sujets évidemment hors-lieu (gros plans de fleurs, objets, intérieurs...)
  mais ne peut pas juger si une photo "ressemble" à la ville pour un humain.
  Un audit manuel du 2026-07-22 sur les 325 villes éditoriales a trouvé un
  taux d'échec significatif (proche d'une photo sur deux dans l'échantillon
  vérifié), y compris sur de grandes villes bien couvertes par Unsplash.
- Une refonte vers Wikipedia (image d'en-tête d'article, choisie par des
  contributeurs humains pour représenter le lieu — bien plus fiable que la
  recherche par mot-clé) a été discutée comme piste sérieuse mais **n'est
  pas implémentée** — si elle est faite un jour, ce fichier et le contrat de
  `get-city-image` devront être mis à jour, mais la réponse HTTP côté front
  peut rester identique (mêmes champs `image_url`/`thumb_url`/`notFound`)
  si l'implémentation est bien isolée dans `cityImages.js`.
- Ne pas prendre le nombre de likes Unsplash comme un gage de qualité — des
  photos à 800+ likes se sont révélées non représentatives, des photos à
  quelques likes se sont révélées excellentes.

## 8. Outil de comparaison Unsplash vs Wikipedia (test, pas branché en prod)

Piste évoquée en section 7 pour juger si Wikipedia serait une meilleure
source qu'Unsplash — pas implémentée, seulement un outil pour comparer à
l'œil avant de trancher.

**`scripts/build-image-comparison.mjs`** génère une page HTML autonome
(images encodées en base64, aucun serveur requis — s'ouvre directement dans
un navigateur, se reconstruit sur n'importe quelle machine après avoir tiré
cette branche et rempli son `.env`) qui affiche, côte à côte, la photo
Unsplash déjà en cache et l'image d'en-tête Wikipedia pour un échantillon de
villes de `city_images`.

```bash
# Les 25 villes avec le PLUS de likes Unsplash (grandes villes, corpus riche)
node scripts/build-image-comparison.mjs --limit=25 --order=desc

# Les 50 villes avec le MOINS de likes Unsplash (petites villes, corpus
# pauvre — le cas qui inquiète le plus pour les villes qu'ajouteront les
# utilisateurs plus tard)
node scripts/build-image-comparison.mjs --limit=50 --order=asc

# Chemin de sortie personnalisé (défaut : scripts/output/image-comparison.html,
# ignoré par git — voir .gitignore)
node scripts/build-image-comparison.mjs --limit=50 --order=asc --out=chemin/vers/page.html
```

Filtre appliqué côté Wikipedia : une image dont la source est un SVG (quasi
toujours un drapeau/blason/carte de localisation, jamais une vraie photo)
est explicitement écartée et affichée comme telle ("écarté (SVG)"), pas
confondue avec un échec de téléchargement.

**Piège vécu à corriger si vous retouchez ce script** : Wikimedia (le CDN
d'images `upload.wikimedia.org`) renvoie très vite un 429 si les
téléchargements sont faits en parallèle ou sans pause, et exige un en-tête
`User-Agent` descriptif sur TOUS les appels (API *et* téléchargement
d'image) sinon certaines requêtes échouent silencieusement. Le script fait
donc les appels **en série** avec des pauses (~1,2s) — ne pas paralléliser
sans retester, un premier essai parallèle le 2026-07-22 a fait échouer 21
téléchargements sur 25 sans erreur explicite (juste une image manquante).
Utilise aussi délibérément `thumbnail.source` (vignette légère) et jamais
`originalimage.source` (pleine résolution) — un essai avec l'original a
aussi déclenché un 429 sur seulement 25 villes.

Reste à faire si Wikipedia est retenu comme source (pas commencé) : décider
si c'est un remplacement total ou un repli intelligent (ex: Wikipedia
d'abord, Unsplash si la page n'a pas de vraie photo), et l'implémenter dans
`api/_lib/cityImages.js` en gardant le même contrat de réponse pour
`get-city-image` (voir section 2) — pas de changement nécessaire côté front
si c'est bien fait.
