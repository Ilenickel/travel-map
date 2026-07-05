import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import { callModeration } from '../../lib/moderation';
import { COUNTRIES } from '../../data/index';
import { localizeField } from '../../lib/localizeCountry';
import { normalizeStr, countryAlpha2FromEmoji } from '../../lib/planningUtils';

// Comparaison stricte (exacte ou sous-chaîne, pas de tolérance Levenshtein) —
// utilisée pour le matching ville↔destination et la détection "déjà ajouté",
// où une comparaison trop permissive risquerait de faux positifs entre deux
// lieux réels différents mais orthographiquement proches (ex. "Grand Palace"
// à Bangkok vs "Grand Place" à Bruxelles). La confiance de géocodage (plus
// tolérante, avec repli IA) est gérée côté serveur — voir api/geocode-place.js
// et api/_lib/geocodeConfidence.js.
function namesMatch(a, b) {
  const na = normalizeStr(a || '');
  const nb = normalizeStr(b || '');
  if (!na || !nb) return false;
  return na === nb || na.includes(nb) || nb.includes(na);
}

// Bouton "X lieux conseillés" affiché après l'ajout d'une ville en planification.
// Interroge les lieux communautaires + statiques déjà connus pour la
// destination correspondante (voir api/get-place-suggestions.js), plus les
// lieux éditoriaux figés (mustSee, écrits en dur dans src/data/<pays>.js) de
// cette même destination, et permet d'en ajouter directement à la ville en
// cours de planification. La géolocalisation est résolue à la volée
// (Geoapify) au moment de l'ajout, best-effort : le lieu reste ajoutable même
// si elle échoue.

// Un nom de destination statique peut être une chaîne brute ou un objet bilingue { fr, en }.
function staticDestNames(name) {
  if (name && typeof name === 'object') return [name.fr, name.en].filter(Boolean);
  return [name].filter(Boolean);
}

// Matching des destinations statiques (src/data/<pays>.js) fait ici, côté
// client, où ces ~186 fichiers sont déjà chargés : les importer depuis une
// fonction serverless échouerait (imports sans extension non résolus par le
// loader ESM strict de Node, contrairement au bundler Vite utilisé ici).
function matchingStaticDestinations(cityName, countryCode) {
  const country = COUNTRIES[countryCode];
  return (country?.destinations || [])
    .filter((d) => staticDestNames(d.name).some((n) => namesMatch(n, cityName)));
}

// Lieux éditoriaux (mustSee) des destinations statiques correspondantes : déjà
// bilingues { fr, en } dans le JSON, donc simple localizeField — pas besoin de
// passer par le cache de traduction Google (ni de coût associé).
// `labelFr`/`labelEn` transmis tous les deux au serveur (voir api/geocode-place.js) :
// Geoapify/OSM connaît souvent bien mieux un lieu sous son nom anglais que sa
// traduction française (constaté empiriquement : "The Bund" trouve le lieu,
// "Le Bund" renvoie un résultat sans rapport en Mongolie ; "Shanghai Tower"
// trouve la tour, "tour de Shanghai" renvoie une école de langue). `labelFr`
// reste la clé de cache stable (editorial_place_geocache), peu importe quelle
// langue a fini par le géocoder avec succès.
function editorialPlacesFor(matchedDests, countryCode, lang) {
  return matchedDests.flatMap((d) =>
    (d.mustSee || []).map((m, idx) => {
      const bilingual = m?.name && typeof m.name === 'object';
      const labelFr = bilingual ? m.name.fr : m?.name;
      const labelEn = bilingual ? m.name.en : null;
      return {
        id: `editorial:${countryCode}:${d.id}:${idx}`,
        type: 'editorial',
        staticDestId: String(d.id),
        labelFr: labelFr || labelEn,
        labelEn: labelEn || labelFr,
        name: localizeField(m.name, lang),
        lat: null,
        lng: null,
      };
    })
  );
}

export default function PlaceSuggestionsButton({ cityName, countryCode, countryName, tripId, cityId, existingActivityNames = [], onAddActivity }) {
  const { t } = useTranslation();
  const [places, setPlaces] = useState(null); // null = pas encore chargé
  const [open, setOpen] = useState(false);
  const [addingId, setAddingId] = useState(null);
  const countryAlpha2 = countryAlpha2FromEmoji(COUNTRIES[countryCode]?.emoji);

  // Chargement discret dès le montage pour connaître le nombre de suggestions
  // (bouton masqué si aucune correspondance) sans attendre un clic préalable.
  useEffect(() => {
    let cancelled = false;
    const lang = i18n.language;
    const matchedStaticDests = matchingStaticDestinations(cityName, countryCode);
    const editorialPlaces = editorialPlacesFor(matchedStaticDests, countryCode, lang);
    (async () => {
      const result = await callModeration('get-place-suggestions', {
        cityName,
        countryCode,
        staticDestIds: matchedStaticDests.map((d) => String(d.id)),
        targetLanguage: lang,
      });
      if (cancelled) return;
      const communityPlaces = result.ok ? (result.places || []) : [];
      setPlaces([...editorialPlaces, ...communityPlaces]);
    })();
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityName, countryCode, i18n.language]);

  const handleAdd = async (place) => {
    setAddingId(place.id);
    let lat = place.lat;
    let lng = place.lng;
    if (lat == null || lng == null) {
      // Géocodage + vérification (lexicale, repli IA) entièrement côté serveur
      // (voir api/geocode-place.js) — y compris pour les lieux éditoriaux
      // (mustSee), mis en cache dans editorial_place_geocache pour ne payer
      // Geoapify/l'IA qu'une seule fois par lieu, jamais deux.
      const geo = await callModeration('geocode-place', {
        placeType: place.type,
        placeId: place.type === 'editorial' ? undefined : place.id,
        staticCountryCode: place.type === 'static' ? countryCode : undefined,
        countryCode: place.type === 'editorial' ? countryCode : undefined,
        staticDestId: place.type === 'editorial' ? place.staticDestId : undefined,
        labelFr: place.type === 'editorial' ? place.labelFr : undefined,
        labelEn: place.type === 'editorial' ? place.labelEn : undefined,
        cityName,
        countryName,
        countryAlpha2,
        lang: i18n.language,
      });
      if (geo.ok && geo.geocoded) { lat = geo.lat; lng = geo.lng; }
    }
    await onAddActivity(tripId, cityId, place.name, {
      place_lat: lat ?? null,
      place_lng: lng ?? null,
    });
    setAddingId(null);
  };

  if (places === null) return null;
  if (places.length === 0) return null;

  return (
    <div className="pp-place-suggestions">
      <button className="pp-place-suggestions-btn" onClick={() => setOpen((o) => !o)}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/>
        </svg>
        {t('placeSuggestions.button', { count: places.length })}
      </button>
      {open && (
        <ul className="pp-search-dropdown pp-place-suggestions-dropdown">
          {places.map((place) => {
            // Source de vérité unique = les activités réellement présentes dans
            // la ville (persiste après un remontage du composant, et redevient
            // ajoutable si l'activité est supprimée ensuite — contrairement à un
            // état local qui resterait bloqué sur "Ajouté" indéfiniment).
            const added = existingActivityNames.some((n) => namesMatch(n, place.name));
            return (
              <li key={place.id} className="pp-search-item pp-place-suggestions-item">
                <div className="pp-search-item-text">
                  <span className="pp-search-item-name">{place.name}</span>
                </div>
                <button
                  className="pp-btn pp-btn--ghost pp-btn--sm"
                  disabled={added || addingId === place.id}
                  onClick={() => handleAdd(place)}
                >
                  {addingId === place.id ? (
                    <span className="pp-search-busy" />
                  ) : added ? (
                    t('placeSuggestions.added')
                  ) : (
                    t('placeSuggestions.addButton')
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
