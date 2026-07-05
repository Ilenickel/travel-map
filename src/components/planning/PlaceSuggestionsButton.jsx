import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import { callModeration } from '../../lib/moderation';
import { COUNTRIES } from '../../data/index';
import { localizeField } from '../../lib/localizeCountry';
import { normalizeStr, fetchPlaceSuggestions, countryAlpha2FromEmoji } from '../../lib/planningUtils';

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

function namesMatch(a, b) {
  const na = normalizeStr(a || '');
  const nb = normalizeStr(b || '');
  if (!na || !nb) return false;
  return na === nb || na.includes(nb) || nb.includes(na);
}

// Les libellés éditoriaux (mustSee) sont parfois composés pour la lecture
// humaine ("Pudong — Shanghai Tower", "Old town (Yu Garden)") plutôt qu'un nom
// géocodable tel quel. On tente le libellé complet d'abord, puis les segments
// après un tiret et entre parenthèses, qui portent souvent le nom réel du lieu.
function geocodeCandidates(rawName) {
  const candidates = [rawName];
  const dashParts = rawName.split(/[—–-]/).map((s) => s.trim()).filter(Boolean);
  if (dashParts.length > 1) candidates.push(dashParts[dashParts.length - 1]);
  const parenMatch = rawName.match(/\(([^)]+)\)/);
  if (parenMatch) candidates.push(parenMatch[1].trim());
  return candidates;
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
function editorialPlacesFor(matchedDests, countryCode, lang) {
  return matchedDests.flatMap((d) =>
    (d.mustSee || []).map((m, idx) => ({
      id: `editorial:${countryCode}:${d.id}:${idx}`,
      type: 'editorial',
      name: localizeField(m.name, lang),
      lat: null,
      lng: null,
    }))
  );
}

export default function PlaceSuggestionsButton({ cityName, countryCode, countryName, tripId, cityId, existingActivityNames = [], onAddActivity }) {
  const { t } = useTranslation();
  const [places, setPlaces] = useState(null); // null = pas encore chargé
  const [open, setOpen] = useState(false);
  const [addingId, setAddingId] = useState(null);
  const [addedIds, setAddedIds] = useState(() => new Set());
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
      if (place.type === 'editorial') {
        // Pas de ligne DB pour un lieu éditorial : résolution directe via
        // Geoapify (même fonction que la recherche manuelle de lieu), sans
        // mise en cache — volume négligeable, liste figée et restreinte.
        // Plusieurs candidats essayés dans l'ordre (libellé complet, puis
        // segments après tiret / entre parenthèses) car ces libellés sont
        // parfois composés pour l'affichage plutôt que géocodables tels quels.
        for (const candidate of geocodeCandidates(place.name)) {
          const results = await fetchPlaceSuggestions(candidate, cityName, countryAlpha2);
          const best = results.find((r) => namesMatch(r.name, candidate));
          if (best) { lat = best.lat; lng = best.lng; break; }
        }
      } else {
        const geo = await callModeration('geocode-place', {
          placeType: place.type,
          placeId: place.id,
          staticCountryCode: place.type === 'static' ? countryCode : undefined,
          name: place.name,
          cityName,
          countryName,
          countryAlpha2,
        });
        if (geo.ok && geo.geocoded) { lat = geo.lat; lng = geo.lng; }
      }
    }
    const created = await onAddActivity(tripId, cityId, place.name, {
      place_lat: lat ?? null,
      place_lng: lng ?? null,
    });
    // Ne marque "Ajouté" que si l'insertion a réellement réussi (addActivity
    // renvoie null en cas d'échec) — sinon le bouton affichait "Ajouté" alors
    // que rien n'avait été créé en base.
    if (created) setAddedIds((prev) => new Set(prev).add(place.id));
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
            // Source de vérité = les activités réellement présentes dans la ville
            // (persiste après un remontage du composant, contrairement à
            // addedIds seul) : évite de recréer un doublon en base si l'utilisateur
            // reclique après que le composant se soit remonté (ville repliée/dépliée…).
            const added = addedIds.has(place.id) || existingActivityNames.some((n) => namesMatch(n, place.name));
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
                  {added ? t('placeSuggestions.added') : t('placeSuggestions.addButton')}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
