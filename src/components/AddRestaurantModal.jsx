import { useState, useEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import { callModeration } from '../lib/moderation';
import RestaurantPickerMap from './RestaurantPickerMap';
import { restaurantNames } from '../lib/restaurants';
import useCuisineTags, { registerCuisineTags } from '../hooks/useCuisineTags';
import CuisineTagPicker from './CuisineTagPicker';
import useEscapeLayer from '../hooks/useEscapeLayer';
import useIsMobile from '../hooks/useIsMobile';
import { useModalHistory } from '../hooks/useModalHistory';

// Ajout communautaire d'un restaurant, en deux temps.
//
// 1. Le membre cherche l'établissement par son nom ; la recherche Geoapify est
//    bornée à un cercle autour de la ville (voir api/restaurant-search.js) et il
//    choisit le bon résultat, carte à l'appui.
// 2. Il complète budget et catégories, la position retenue restant affichée.
//    Plus de photo : une image malheureuse choisie par un contributeur nuisait
//    durablement au restaurant sans que personne ne puisse la retirer. Les
//    photos passent désormais par les avis, comme sur les applications de cartes.
//
// EN MODALE, sur ordinateur comme sur mobile. Intégré au fil de la page, le
// formulaire n'occupait qu'une bande étroite : la carte y était minuscule et le
// choix entre plusieurs adresses d'une même enseigne quasi impossible. Une
// modale donne la place nécessaire — liste à gauche, carte à droite sur
// ordinateur ; carte puis liste, chacune à hauteur fixe, sur mobile.
//
// Pourquoi ce détour plutôt qu'une simple saisie libre géocodée en silence après
// publication : « Chez Marie » existe dans toutes les villes, et une résolution
// a posteriori planterait régulièrement le mauvais établissement sur la carte
// sans que personne ne le remarque. Ici, les coordonnées, l'adresse et
// l'identifiant Geoapify sont figés au moment du choix.

const BUDGET_OPTIONS = [
  { level: 1, symbol: '€' },
  { level: 2, symbol: '€€' },
  { level: 3, symbol: '€€€' },
];

export default function AddRestaurantModal({
  destType, destinationId, staticDestId,
  countryCode, countryName, countryAlpha2, destName, cityName,
  onCancel, onAdded,
}) {
  const { t, i18n } = useTranslation('app');
  // Plein écran sur mobile — décidé par le même test que partout ailleurs, pas
  // par une media query parallèle (voir RestaurantsModal).
  const isMobile = useIsMobile(1024);

  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null); // null = pas encore cherché
  const [searching, setSearching] = useState(false);
  const [cityUnresolved, setCityUnresolved] = useState(false);
  // Ville autour de laquelle le serveur a réellement cherché. Affichée dès
  // qu'elle diffère du libellé de la destination : c'est le seul garde-fou
  // contre une résolution silencieusement décalée sur une commune voisine.
  const [searchCity, setSearchCity] = useState(null);
  const [picked, setPicked] = useState(null);
  // Résultat mis en avant sur la carte avant validation : survoler ou toucher
  // une ligne (ou son repère) suffit à voir où elle se trouve, sans engager le
  // choix. C'est ce qui départage deux adresses d'une même enseigne.
  const [highlightedId, setHighlightedId] = useState(null);

  const [budget, setBudget] = useState(2);
  // Types de cuisine sous forme de tags (voir src/lib/cuisineTags.js).
  const [cuisineTags, setCuisineTags] = useState([]);
  const communityTags = useCuisineTags();
  // Types créés à l'instant par le contributeur, avec leur libellé saisi : ils
  // n'existent nulle part ailleurs tant que le formulaire n'est pas envoyé.
  const [createdTags, setCreatedTags] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Chaque frappe ne doit pas déclencher un appel Geoapify : la recherche part
  // 450 ms après la dernière touche. La réf de requête écarte en plus une
  // réponse lente qui arriverait après une recherche plus récente.
  const requestIdRef = useRef(0);
  // Dernier texte réellement envoyé au serveur : revenir de l'étape 2 vers
  // l'étape 1 (« Changer ») relance cet effet sans que la recherche ait changé.
  const lastSearchedRef = useRef(null);

  useEffect(() => {
    if (picked) return undefined;
    const text = query.trim();
    if (text.length < 2) { setResults(null); lastSearchedRef.current = null; return undefined; }
    if (text === lastSearchedRef.current) return undefined;

    const id = ++requestIdRef.current;
    const timer = setTimeout(async () => {
      setSearching(true);
      const res = await callModeration('restaurant-search', {
        cityName, countryCode, countryAlpha2, text, lang: i18n.language,
      });
      if (id !== requestIdRef.current) return;
      // Mémorisé seulement en cas de succès : après un échec réseau, retaper la
      // même chose doit pouvoir relancer la recherche.
      if (res.ok) lastSearchedRef.current = text;
      setCityUnresolved(!!res.cityUnresolved);
      // Conservé d'une frappe à l'autre : le serveur ne renvoie la ville qu'au
      // tout premier géocodage d'une destination, les appels suivants lisent le
      // cache et ne la connaissent plus (voir searchCity dans
      // api/restaurant-search.js). L'effacer alors ferait clignoter l'indication.
      if (res.searchCity) setSearchCity(res.searchCity);
      setResults(res.ok ? (res.results || []) : []);
      setHighlightedId(null);
      setSearching(false);
    }, 450);

    return () => clearTimeout(timer);
  }, [query, picked, cityName, countryCode, countryAlpha2, i18n.language]);

  // Fermeture directe : appuyer sur la croix, sur « Annuler » ou sur Échap sont
  // des gestes délibérés. Le seul geste accidentel à neutraliser est le clic à
  // côté de la fenêtre, traité sur le voile plus bas.
  const requestClose = () => {
    if (submitting) return;
    onCancel();
  };

  // La modale couvre tout l'écran sur mobile : laisser Échap sans effet
  // piégerait l'utilisateur au clavier. Échap passe par la même confirmation
  // que la croix — une touche mal visée ne doit pas effacer une recherche.
  useEscapeLayer(requestClose);

  // Bouton retour du téléphone : il referme CE formulaire, pas l'application.
  // Sans entrée d'historique à dépiler, il quittait la planification entière —
  // et la saisie en cours avec elle. La pile de useModalHistory garantit que le
  // retour s'adresse à la couche du dessus : ce formulaire d'abord, l'explorateur
  // qui le contient ensuite.
  useModalHistory(requestClose);

  // L'adresse et l'état « déjà proposé » accompagnent chaque point : la bulle
  // du repère doit suffire à décider, sans redescendre dans la liste.
  const mapPoints = useMemo(
    () => (results || []).map((r) => ({
      id: r.geoapifyPlaceId,
      name: restaurantNames(r, i18n.language).primary,
      address: r.address || null,
      alreadyAdded: !!r.alreadyAdded,
      lat: r.lat,
      lng: r.lng,
    })),
    [results, i18n.language]
  );

  // Repère unique de l'étape 2. Mémorisé pour la même raison : en tableau
  // littéral, chaque frappe dans le nom, le budget ou les tags recadrait la
  // carte et annulait le déplacement que l'utilisateur venait d'y faire.
  const pickedPoints = useMemo(
    () => (picked?.lat != null && picked?.lng != null
      ? [{
        id: picked.geoapifyPlaceId,
        name: restaurantNames(picked, i18n.language).primary,
        lat: picked.lat,
        lng: picked.lng,
      }]
      : []),
    [picked, i18n.language]
  );

  function handlePick(result) {
    setPicked(result);
    setHighlightedId(result.geoapifyPlaceId);
    // Geoapify ne renvoie pas de sous-type exploitable : les tags restent au
    // choix du contributeur (voir api/restaurant-search.js).
    setCuisineTags([]);
    setBudget(result.suggestedBudget || 2);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!picked || submitting) return;
    setSubmitting(true);
    setError('');

    const result = await callModeration('places', {
      action: 'add',
      destType,
      category: 'restaurant',
      placeName: picked.name,
      nameLatin: picked.nameLatin || null,
      countryCode, countryName, destName,
      cuisineTags,
      // Types que le contributeur vient de créer : le serveur modère leur libellé
      // puis les enregistre dans place_cuisine_tags (voir api/places.js). Filtré
      // sur la sélection finale — un type créé puis décoché ne doit pas être créé.
      newTags: createdTags.filter((tg) => cuisineTags.includes(tg.slug)),
      budgetLevel: budget,
      address: picked.address,
      geoapifyPlaceId: picked.geoapifyPlaceId,
      lat: picked.lat,
      lng: picked.lng,
      ...(destType === 'community' ? { destinationId } : { staticDestId: String(staticDestId) }),
    });

    if (!result.ok) {
      setError(result.reason || t('placesList.publicationFailedError'));
      setSubmitting(false);
      return;
    }
    if (result.merged) {
      setError(t('restaurants.alreadyListed', { name: result.matchedName }));
      setSubmitting(false);
      return;
    }

    // Les catégories créées viennent d'être enregistrées côté serveur : on les
    // injecte dans le cache partagé, sinon la fiche tout juste publiée les
    // afficherait sous leur identifiant (« cuisine-creole ») au lieu du libellé
    // saisi, jusqu'au prochain rechargement de la page.
    registerCuisineTags(createdTags.filter((tg) => cuisineTags.includes(tg.slug)));

    onAdded();
  }

  // ─── Étape 1 : recherche ────────────────────────────────────────────────
  const step1 = (
    <>
      <div className="resto-modal-search">
        <label className="resto-form-label" htmlFor="resto-search">
          {t('restaurants.searchLabel', { city: cityName })}
        </label>
        <input
          id="resto-search"
          className="add-place-name-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t('restaurants.searchPlaceholder')}
          maxLength={80}
          autoFocus
        />
      </div>

      {cityUnresolved && <div className="add-place-error">⚠ {t('restaurants.cityUnresolved')}</div>}

      {/* Uniquement si la ville retenue diffère du libellé de la destination :
          sur « Kyoto » l'indication n'apprendrait rien, sur « Mont-Saint-Michel
          & Bretagne » elle dit autour de quoi on cherche vraiment. */}
      {searchCity && searchCity !== cityName && (
        <div className="resto-form-hint">{t('restaurants.searchAround', { city: searchCity })}</div>
      )}

      {/* Deux volets : la liste à gauche, la carte à droite sur ordinateur.
          Sur mobile ils s'empilent, carte en premier (voir CSS). */}
      <div className="resto-modal-panes">
        <div className="resto-modal-list-pane">
          {searching && <div className="resto-form-hint">{t('restaurants.searching')}</div>}

          {!searching && results === null && (
            <div className="resto-modal-placeholder">{t('restaurants.searchPrompt')}</div>
          )}

          {!searching && results !== null && results.length === 0 && !cityUnresolved && (
            <div className="resto-modal-placeholder">{t('restaurants.noSearchResult')}</div>
          )}

          {results !== null && results.length > 0 && (
            <>
              {results.length > 1 && (
                <p className="resto-form-hint">{t('restaurants.multipleResultsHint')}</p>
              )}
              <ul className="resto-search-results">
                {results.map((r, idx) => (
                  <li
                    key={r.geoapifyPlaceId}
                    className={`resto-search-result${highlightedId === r.geoapifyPlaceId ? ' resto-search-result--highlighted' : ''}`}
                    onMouseEnter={() => setHighlightedId(r.geoapifyPlaceId)}
                    onClick={() => setHighlightedId(r.geoapifyPlaceId)}
                  >
                    {/* Numéro repris à l'identique sur le repère de la carte :
                        c'est le lien visuel entre la ligne et sa position. */}
                    <span className="resto-search-result-index" aria-hidden="true">{idx + 1}</span>
                    <div className="resto-search-result-text">
                      <span className="resto-search-result-name">{restaurantNames(r, i18n.language).primary}</span>
                      {restaurantNames(r, i18n.language).secondary && (
                        <span className="resto-search-result-local">{restaurantNames(r, i18n.language).secondary}</span>
                      )}
                      <span className="resto-search-result-addr">
                        {r.address || t('restaurants.noAddress')}
                      </span>
                      {/* OpenStreetMap ne dit pas de quel type de commerce il
                          s'agit : on le signale plutôt que de le taire. */}
                      {r.categoryUnconfirmed && (
                        <span className="resto-search-result-warn">{t('restaurants.typeUnconfirmed')}</span>
                      )}
                    </div>
                    <button
                      type="button"
                      className="resto-search-result-pick"
                      disabled={r.alreadyAdded}
                      onClick={(e) => { e.stopPropagation(); handlePick(r); }}
                    >
                      {r.alreadyAdded ? t('restaurants.alreadyInList') : t('restaurants.pickButton')}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        <div className="resto-modal-map-pane">
          {mapPoints.length > 0 ? (
            <RestaurantPickerMap
              className="resto-modal-map"
              points={mapPoints}
              selectedId={highlightedId}
              onSelect={setHighlightedId}
              onPick={(placeId) => {
                const found = (results || []).find((r) => r.geoapifyPlaceId === placeId);
                if (found && !found.alreadyAdded) handlePick(found);
              }}
            />
          ) : (
            <div className="resto-modal-map resto-modal-map--empty">
              {t('restaurants.mapWaiting')}
            </div>
          )}
        </div>
      </div>
    </>
  );

  // ─── Étape 2 : détails ──────────────────────────────────────────────────
  const step2 = (
    <form className="resto-modal-step2" onSubmit={handleSubmit}>
      <div className="resto-modal-panes">
        <div className="resto-modal-list-pane">
          <div className="resto-form-picked">
            <div className="resto-form-picked-text">
              <span className="resto-search-result-name">{restaurantNames(picked, i18n.language).primary}</span>
              {restaurantNames(picked, i18n.language).secondary && (
                <span className="resto-search-result-local">{restaurantNames(picked, i18n.language).secondary}</span>
              )}
              {picked?.address && <span className="resto-search-result-addr">{picked.address}</span>}
            </div>
            <button
              type="button"
              className="resto-form-change"
              // La liste de résultats est conservée : après « Changer », on
              // retrouve les mêmes adresses sans avoir à retaper la recherche.
              onClick={() => { setPicked(null); setHighlightedId(null); }}
            >
              {t('restaurants.changeSelection')}
            </button>
          </div>

          <label className="resto-form-label">{t('restaurants.budgetLabel')}</label>
          <div className="resto-budget-row">
            {BUDGET_OPTIONS.map((b) => (
              <button
                key={b.level}
                type="button"
                className={`resto-budget-btn${budget === b.level ? ' resto-budget-btn--active' : ''}`}
                onClick={() => setBudget(b.level)}
              >
                {b.symbol}
              </button>
            ))}
          </div>

          {/* Tags plutôt qu'un champ libre : c'est ce qui rend le filtre de la
              liste possible. Une saisie libre produisait « Sushi », « sushis »
              et « japonais - sushi » pour la même chose, donc rien de
              filtrable. Le sélecteur autorise la création d'un type absent, qui
              devient ensuite disponible pour tout le monde. */}
          <label className="resto-form-label">{t('restaurants.tagsLabel')}</label>
          {/* Une ligne d'explication : rien n'indiquait qu'on pouvait — et qu'on
              devait — en choisir plusieurs, ni de quelle nature. */}
          <p className="resto-form-sublabel">{t('restaurants.tagsHint')}</p>
          <CuisineTagPicker
            selected={cuisineTags}
            onChange={setCuisineTags}
            communityTags={communityTags}
            allowCreate
            createdTags={createdTags}
            onCreateTag={(tag) => setCreatedTags((prev) => [...prev, tag])}
            inlineSelection
            triggerLabel={t('restaurants.tagsAdd')}
            className="resto-filter--block"
          />

          {error && <div className="add-place-error">⚠ {error}</div>}
        </div>

        <div className="resto-modal-map-pane">
          {/* La position retenue reste sous les yeux pendant la saisie : c'est le
              dernier moment où une erreur de choix se rattrape sans frais. */}
          {picked?.lat != null && picked?.lng != null && (
            <RestaurantPickerMap
              className="resto-modal-map"
              points={pickedPoints}
              selectedId={picked.geoapifyPlaceId}
              numbered={false}
            />
          )}
        </div>
      </div>

      <div className="resto-modal-footer">
        <button type="button" className="add-place-cancel" onClick={requestClose} disabled={submitting}>
          {t('placesList.cancelButton')}
        </button>
        <button type="submit" className="add-place-submit" disabled={submitting}>
          {submitting ? t('placesList.publishing') : t('placesList.publishButton')}
        </button>
      </div>
    </form>
  );

  return createPortal(
    // Le clic sur le fond ne ferme JAMAIS cette fenêtre : c'est le seul geste
    // qu'on peut faire sans le vouloir, et il suffisait à effacer une recherche
    // et un établissement déjà sélectionné (signalé le 2026-07-29). Pour fermer,
    // la croix, « Annuler » et Échap restent disponibles.
    // `resto-modal-overlay--nested` : cette fenêtre s'ouvre TOUJOURS par-dessus
    // un fond déjà assombri — celui de la fiche pays (`.panel-overlay`) ou celui
    // de l'explorateur en planification (`.resto-modal-overlay` de
    // RestaurantsModal). Son propre voile s'additionnait au premier et rendait
    // le fond quasi noir (signalé le 2026-07-31) ; ce modificateur le retire,
    // le relief venant du seul contour/ombre de `.resto-modal`.
    // Taille : gabarit NORMAL (`.resto-modal`, pas `--explorer`) — le vide
    // observé sous la liste/carte n'était pas un manque de hauteur de fenêtre
    // mais un défaut de mise en page interne, corrigé dans le CSS.
    <div className={`resto-modal-overlay resto-modal-overlay--nested${isMobile ? ' resto-modal-overlay--full' : ''}`}>
      <div className="resto-modal" role="dialog" aria-modal="true">
        <div className="resto-modal-header">
          <h3 className="resto-modal-title">{t('restaurants.addButton')}</h3>
          <button className="resto-modal-close" onClick={requestClose} aria-label={t('restaurants.closeSheet')}>✕</button>
        </div>

        <div className="resto-modal-body">
          {picked ? step2 : step1}
        </div>

        {!picked && (
          <div className="resto-modal-footer">
            <button type="button" className="add-place-cancel" onClick={requestClose}>
              {t('placesList.cancelButton')}
            </button>
          </div>
        )}

      </div>
    </div>,
    document.body
  );
}
