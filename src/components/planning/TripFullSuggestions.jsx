import { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { callModeration } from '../../lib/moderation';
import { COUNTRIES } from '../../data/index';
import { countryAlpha2FromEmoji, TRIP_CRITERIA } from '../../lib/planningUtils';
import DaysStepper from './DaysStepper';
import CitySearchInput from './CitySearchInput';

// Critères d'un modèle/groupe vus à travers les filtres sélectionnés :
// 'met' / 'unmet', ou 'unknown' pour un modèle partagé avant la v8
// (criteria = NULL, jamais renseigné) — à distinguer d'un vrai "non".
export function criterionState(templateCriteria, key) {
  if (templateCriteria == null) return 'unknown';
  return templateCriteria.includes(key) ? 'met' : 'unmet';
}

// Indicateurs affichés sur une carte de suggestion : UNIQUEMENT pour les
// critères que l'utilisateur a sélectionnés comme filtres ("montrer, pas
// écrire") — une coche verte si le voyage y répond, une chip barrée sinon,
// un "?" neutre si le voyage n'a pas renseigné ses critères.
export function CriteriaIndicators({ templateCriteria, selectedCriteria }) {
  const { t } = useTranslation();
  if (!selectedCriteria?.length) return null;
  return (
    <div className="pp-criteria-indicators">
      {selectedCriteria.map((key) => {
        const state = criterionState(templateCriteria, key);
        const c = TRIP_CRITERIA[key];
        if (!c) return null;
        return (
          <span
            key={key}
            className={`pp-criteria-indicator pp-criteria-indicator--${state}`}
            title={t(`tripCriteria.indicator.${state}`, { label: c.label })}
          >
            {state === 'met' ? '✓' : state === 'unmet' ? '✕' : '?'} {c.icon} {c.label}
          </span>
        );
      })}
    </div>
  );
}

// Rangée de filtres critères au-dessus des suggestions ("j'ai des enfants,
// propose-moi en priorité des voyages avec enfants") — partagée entre la
// suggestion par ville (TripPlanSuggestionsButton) et le mode voyage entier.
export function CriteriaFilterChips({ selected, onToggle }) {
  const { t } = useTranslation();
  return (
    <div className="pp-criteria-filter">
      <span className="pp-criteria-filter-label">{t('tripCriteria.filterLabel')}</span>
      <div className="pp-criteria-chips">
        {Object.entries(TRIP_CRITERIA).map(([key, c]) => (
          <button
            key={key}
            type="button"
            className={`pp-criteria-chip${selected.includes(key) ? ' active' : ''}`}
            onClick={() => onToggle(key)}
            aria-pressed={selected.includes(key)}
          >
            <span aria-hidden="true">{c.icon}</span> {c.label}
            {selected.includes(key) && <span className="pp-criteria-chip-check">✓</span>}
          </button>
        ))}
      </div>
    </div>
  );
}

const SLOT_ICON = { matin: '🌅', 'apres-midi': '☀️', soir: '🌆' };
const SLOT_ORDER = ['matin', 'apres-midi', 'soir'];

function groupBySlot(activities) {
  return SLOT_ORDER
    .map((slot) => ({ slot, items: activities.filter((a) => a.time_slot === slot) }))
    .filter((g) => g.items.length > 0);
}

// Un jour du détail développé (pastille "Jour N" + timeline matin/après-midi/
// soir) — factorisé pour être réutilisé identiquement par une ville de base
// ET par ses excursions (voir daytrips ci-dessous), plutôt que de dupliquer
// le rendu de la timeline une 2e fois.
function DayTimelineBlock({ day, dayNumber }) {
  const { t } = useTranslation();
  return (
    <div className="pp-trip-suggestions-day">
      <div className="pp-trip-suggestions-day-divider">
        <span className="pp-trip-suggestions-day-pill">{t('tripSuggestions.dayLabel', { count: dayNumber })}</span>
      </div>
      <div className="pp-trip-suggestions-timeline">
        {groupBySlot(day.activities).map(({ slot, items }, i, arr) => (
          <div key={slot} className={`pp-trip-suggestions-slot-row pp-trip-suggestions-slot-row--${slot}${i === arr.length - 1 ? ' pp-trip-suggestions-slot-row--last' : ''}`}>
            <div className="pp-trip-suggestions-slot-marker">
              <span className="pp-trip-suggestions-slot-dot">{SLOT_ICON[slot] || '•'}</span>
            </div>
            <div className="pp-trip-suggestions-slot-content">
              <div className="pp-trip-suggestions-slot-label">{t(`tripSuggestions.timeSlot.${slot}`)}</div>
              <div className="pp-trip-suggestions-slot-items">
                {items.map((a) => (
                  <span key={a.id} className="pp-trip-suggestions-item">{a.name}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Fusionne les jours de la ville de base ET de ses excursions en UNE SEULE
// séquence triée par jour absolu du voyage, plutôt que d'afficher tous les
// jours de la ville puis toutes les excursions à la suite — une excursion
// survenant AVANT le dernier jour de la ville (ex. jour 5 sur un séjour de
// 8 jours) apparaissait sinon après le jour 8, dans le désordre. Les jours
// consécutifs d'une même excursion restent regroupés sous un seul en-tête
// (pas un badge "EXCURSION" répété à chaque jour si elle en dure plusieurs).
function buildCityTimeline(city) {
  // ?? 0 : group_day_offset/day_offset sont des colonnes INTEGER nullables
  // (voir planning_modele_v5.sql/v8.sql, sans contrainte NOT NULL) — un
  // modèle historique où elles n'auraient jamais été renseignées ne doit pas
  // produire un tri silencieusement faux (traiter un NULL comme un vrai 0 ici
  // reste le repli le plus sûr : le jour part au pire du tout début plutôt
  // que de planter le tri ou de dériver vers NaN).
  const cityOffset = city.dayOffset ?? 0;
  const entries = [
    ...city.days.map((day) => ({ dayNumber: cityOffset + day.dayIndex, day, daytrip: null })),
    ...city.daytrips.flatMap((dt) =>
      dt.days.map((day) => ({ dayNumber: cityOffset + (dt.dayOffset ?? 0) + day.dayIndex, day, daytrip: dt }))
    ),
  ].sort((a, b) => a.dayNumber - b.dayNumber);

  const groups = [];
  for (const entry of entries) {
    const last = groups[groups.length - 1];
    const sameGroup = last && (last.daytrip?.id ?? null) === (entry.daytrip?.id ?? null);
    if (sameGroup) last.entries.push(entry);
    else groups.push({ daytrip: entry.daytrip, entries: [entry] });
  }
  return groups;
}

// Mode "Suggestions de voyages" d'une destination (pays) du planning : au
// lieu de planifier ville par ville, propose des voyages ENTIERS partagés
// par d'autres utilisateurs (groupes de modèles, action 'suggest-trip' de
// api/trip-templates.js) correspondant à la durée voulue (±1 jour si
// autorisé), avec conditions optionnelles : ville imposée ("je sais que je
// veux aller à Rome") et critères (avec enfants, en couple…). L'import crée
// les villes À LA SUITE des villes existantes — il ne remplace jamais rien.
export default function TripFullSuggestions({
  dest, tripId, baseCitiesCount, defaultNbDays, onClose, onImported,
}) {
  const { t } = useTranslation();
  const countryAlpha2 = countryAlpha2FromEmoji(COUNTRIES[dest.country_code]?.emoji);

  const [nbDays, setNbDays] = useState(defaultNbDays ?? null);
  const [flex, setFlex] = useState(true);
  // Plusieurs villes "à ne pas manquer" possibles (pas une seule) : le
  // classement fait remonter en priorité les voyages ayant le PLUS de ces
  // villes en commun — même raisonnement côté serveur qu'avec une seule,
  // voir handleSuggestTrip / matchedMustCitiesFor.
  const [mustCities, setMustCities] = useState([]);
  const [pickingCity, setPickingCity] = useState(false);
  const [criteria, setCriteria] = useState([]);
  const [groups, setGroups] = useState(null); // null = pas encore cherché
  // Nombre de jours réellement demandé lors de la DERNIÈRE recherche —
  // distinct de `nbDays` (qui peut avoir été modifié dans le champ sans
  // relancer de recherche) : sert à détecter un décalage de durée (flex
  // ±1 jour) sur les groupes retournés, voir handleImportClick.
  const [searchedNbDays, setSearchedNbDays] = useState(null);
  // Même chose pour les villes imposées : `mustCities` change en direct dès
  // qu'on ajoute/retire une ville, mais `group.matchedMustCities` (renvoyé
  // par le serveur) reste calculé sur l'ancienne liste tant qu'on n'a pas
  // relancé la recherche — sans cette copie figée, le badge "✓ Passe par…"
  // affichait la ville tout juste ajoutée alors que les résultats affichés
  // avaient été matchés sur l'ancienne liste.
  const [searchedMustCities, setSearchedMustCities] = useState([]);
  const [mustCitiesResolved, setMustCitiesResolved] = useState([]); // [{name, resolved}]
  const [searching, setSearching] = useState(false);
  // Résultats chargés au-delà des 5 premiers ("Voir plus") : distinct de
  // `searching`, qui masquerait toute la liste déjà affichée pendant le
  // chargement d'une page suivante — voir loadMore.
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [expandedId, setExpandedId] = useState(null);
  const [confirmingId, setConfirmingId] = useState(null);
  const [importing, setImporting] = useState(false);
  // Formulaire réduit à un résumé compact une fois la recherche lancée (via
  // le bouton "Rechercher", pas les ajustements de filtres ci-dessous) : sur
  // une popup à hauteur limitée, il prenait toute la place et laissait les
  // résultats collés au bord bas. "Modifier" le rouvre sans perdre les
  // filtres déjà choisis.
  const [formCollapsed, setFormCollapsed] = useState(false);

  const toggleCriterion = (key) => {
    setCriteria((prev) => prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]);
  };

  const runSearch = async (overrides = {}) => {
    const params = { nbDays, flex, mustCities, criteria, ...overrides };
    if (!params.nbDays) return;
    setSearching(true);
    setConfirmingId(null);
    const result = await callModeration('trip-templates', {
      action: 'suggest-trip',
      countryCode: dest.country_code,
      countryAlpha2,
      nbDays: params.nbDays,
      nbDaysFlex: params.flex,
      mustCityNames: params.mustCities,
      criteria: params.criteria,
    });
    setSearching(false);
    setGroups(result.ok ? (result.groups || []) : []);
    setHasMore(result.ok ? !!result.hasMore : false);
    setSearchedNbDays(params.nbDays);
    setSearchedMustCities(params.mustCities);
    setMustCitiesResolved(result.ok ? (result.mustCitiesResolved || []) : []);
    setExpandedId(null);
  };

  // "Voir plus" : même requête (mêmes filtres, mêmes searchedXxx figés),
  // juste un offset avancé de la page suivante — le classement (critères >
  // durée > popularité) ne change pas, seule la fenêtre affichée s'étend,
  // voir api/trip-templates.js handleSuggestTrip. On ADDITIONNE aux
  // résultats déjà là plutôt que de les remplacer.
  const loadMore = async () => {
    setLoadingMore(true);
    const result = await callModeration('trip-templates', {
      action: 'suggest-trip',
      countryCode: dest.country_code,
      countryAlpha2,
      nbDays: searchedNbDays,
      nbDaysFlex: flex,
      mustCityNames: searchedMustCities,
      criteria,
      offset: (groups || []).length,
    });
    setLoadingMore(false);
    if (!result.ok) return;
    setGroups((prev) => [...(prev || []), ...(result.groups || [])]);
    setHasMore(!!result.hasMore);
  };

  // Changer un filtre critère relance la recherche si une liste est déjà
  // affichée : le tri par critères se fait côté serveur, avant la limite de
  // 5 résultats (voir api/trip-templates.js).
  const handleToggleCriterion = (key) => {
    const next = criteria.includes(key) ? criteria.filter((k) => k !== key) : [...criteria, key];
    setCriteria(next);
    if (groups !== null) runSearch({ criteria: next });
  };

  // Ajouter/retirer une ville imposée relance la recherche si une liste est
  // déjà affichée — même logique que les critères ci-dessus, pour ne pas
  // laisser des résultats obsolètes affichés à côté d'une condition qu'ils
  // ne reflètent plus (voir aussi searchedMustCities plus haut).
  const addMustCity = (name) => {
    setPickingCity(false);
    if (!name || mustCities.includes(name)) return;
    const next = [...mustCities, name];
    setMustCities(next);
    if (groups !== null) runSearch({ mustCities: next });
  };
  const removeMustCity = (name) => {
    const next = mustCities.filter((c) => c !== name);
    setMustCities(next);
    if (groups !== null) runSearch({ mustCities: next });
  };

  const runImport = async (group) => {
    setImporting(true);
    const result = await callModeration('trip-templates', {
      action: 'import-trip', tripId, destinationId: dest.id, groupId: group.id,
    });
    setImporting(false);
    setConfirmingId(null);
    if (result.ok) onImported?.();
  };

  // Décalage entre la durée demandée et la durée réelle du groupe : possible
  // uniquement avec la tolérance flex (±1 jour, voir api/trip-templates.js
  // handleSuggestTrip). Prévenir avant import plutôt qu'importer en silence :
  // le voyage est importé tel quel (aucun jour tronqué ni caché), à
  // l'utilisateur ensuite d'ajuster l'organisation si besoin.
  const dayMismatchFor = (group) =>
    searchedNbDays != null && group.totalDays !== searchedNbDays
      ? group.totalDays - searchedNbDays
      : 0;

  const handleImportClick = (group) => {
    if (baseCitiesCount > 0 || dayMismatchFor(group) !== 0) setConfirmingId(group.id);
    else runImport(group);
  };

  const unresolvedMustCities = mustCitiesResolved.filter((c) => !c.resolved).map((c) => c.name);
  const noneMatchesMustCity = searchedMustCities.length > unresolvedMustCities.length
    && (groups || []).length > 0 && !(groups || []).some((g) => g.matchedMustCities.length > 0);

  return (
    <div className="pp-modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose?.()}>
      <div className="pp-modal pp-fulltrip-modal">
        <div className="pp-modal-header">
          <div className="pp-fulltrip-modal-headtexts">
            <span className="pp-fulltrip-conditions-glyph" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l1.9 5.7L19.6 9.6 13.9 11.5 12 17.2 10.1 11.5 4.4 9.6 10.1 7.7 12 2zM19 14l.95 2.85L22.8 17.8l-2.85.95L19 21.6l-.95-2.85-2.85-.95 2.85-.95L19 14z"/>
              </svg>
            </span>
            <div>
              <h3 className="pp-modal-title">{t('fullTripSuggestions.panelTitle')}</h3>
              <p className="pp-fulltrip-conditions-sub">{t('fullTripSuggestions.panelSubtitle')}</p>
            </div>
          </div>
          <button className="pp-icon-btn" onClick={onClose}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
          </button>
        </div>

        <div className="pp-modal-body pp-fulltrip-modal-body">
        {formCollapsed && groups !== null ? (
          <div className="pp-fulltrip-summary">
            <span className="pp-fulltrip-summary-text">
              🔍 {[
                t('fullTripSuggestions.summaryDays', { count: searchedNbDays }),
                mustCities.length > 0 && mustCities.join(', '),
                criteria.length > 0 && criteria.map((k) => TRIP_CRITERIA[k]?.label).filter(Boolean).join(', '),
              ].filter(Boolean).join(' · ')}
            </span>
            <button type="button" className="pp-fulltrip-summary-edit" onClick={() => setFormCollapsed(false)}>
              {t('fullTripSuggestions.editSearchButton')}
            </button>
          </div>
        ) : (
        <>
        {/* ── Conditions au-dessus des propositions ── */}
        <div className="pp-fulltrip-conditions">
        <div className="pp-fulltrip-fields">
          <div className="pp-fulltrip-fieldbox">
            <span className="pp-fulltrip-fieldbox-label">📅 {t('fullTripSuggestions.nbDaysLabel')}</span>
            <div className="pp-fulltrip-fieldbox-body">
              <DaysStepper value={nbDays} onChange={setNbDays} placeholder={t('city.plannedDaysPlaceholder')} />
              <label className="pp-fulltrip-flex">
                <span className="profile-toggle">
                  <input type="checkbox" checked={flex} onChange={(e) => setFlex(e.target.checked)} />
                  <span className="profile-toggle-track"><span className="profile-toggle-thumb" /></span>
                </span>
                <span>{t('fullTripSuggestions.flexLabel')}</span>
              </label>
            </div>
          </div>

          <div className="pp-fulltrip-fieldbox">
            <span className="pp-fulltrip-fieldbox-label">📍 {t('fullTripSuggestions.mustCityLabel')}</span>
            <div className="pp-fulltrip-fieldbox-body pp-fulltrip-mustcity-body">
              {mustCities.map((city) => (
                <span key={city} className="pp-fulltrip-mustcity-chip">
                  📍 {city}
                  <button
                    type="button"
                    className="pp-fulltrip-mustcity-clear"
                    onClick={() => removeMustCity(city)}
                    title={t('fullTripSuggestions.clearMustCityTitle')}
                  >✕</button>
                </span>
              ))}
              {pickingCity ? (
                <div className="pp-fulltrip-mustcity-input">
                  <CitySearchInput
                    onSelect={addMustCity}
                    onManual={addMustCity}
                    placeholder={t('city.searchPlaceholderDefault')}
                    autoFocus
                  />
                  <button className="pp-btn pp-btn--ghost pp-btn--sm" onClick={() => setPickingCity(false)}>
                    {t('common:actions.cancel')}
                  </button>
                </div>
              ) : (
                <>
                  <button type="button" className="pp-fulltrip-mustcity-add" onClick={() => setPickingCity(true)}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
                    {t('fullTripSuggestions.addMustCityButton').replace(/^\+\s*/, '')}
                  </button>
                  {mustCities.length === 0 && (
                    <span className="pp-fulltrip-fieldbox-hint">{t('fullTripSuggestions.mustCityHint')}</span>
                  )}
                </>
              )}
            </div>
          </div>

          <div className="pp-fulltrip-fieldbox">
            <CriteriaFilterChips selected={criteria} onToggle={handleToggleCriterion} />
          </div>
        </div>

        <button
          className="pp-fulltrip-search-btn"
          onClick={async () => { await runSearch(); setFormCollapsed(true); }}
          disabled={!nbDays || searching}
          title={!nbDays ? t('fullTripSuggestions.needDaysTitle') : undefined}
        >
          {searching ? <span className="pp-search-busy" /> : (
            <>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
              {t('fullTripSuggestions.searchButton')}
            </>
          )}
        </button>
      </div>
      </>
      )}

      {/* ── Résultats ── */}
      {groups !== null && !searching && (
        groups.length === 0 ? (
          <div className="pp-fulltrip-empty">
            <span className="pp-fulltrip-empty-icon">🗺️</span>
            <p>{t('fullTripSuggestions.emptyText', { days: nbDays })}</p>
            {unresolvedMustCities.map((city) => (
              <p key={city} className="pp-fulltrip-empty-sub">{t('fullTripSuggestions.mustCityNotFound', { city })}</p>
            ))}
          </div>
        ) : (
          <div className="pp-fulltrip-results">
            <p className="pp-trip-suggestions-disclaimer">{t('tripSuggestions.disclaimer')}</p>
            {unresolvedMustCities.map((city) => (
              <p key={city} className="pp-fulltrip-notice">{t('fullTripSuggestions.mustCityNotFound', { city })}</p>
            ))}
            {noneMatchesMustCity && (
              <p className="pp-fulltrip-notice">{t('fullTripSuggestions.noneWithMustCity', { city: searchedMustCities.join(', ') })}</p>
            )}
            {groups.map((group) => (
              <div key={group.id} className="pp-fulltrip-card">
                <div className="pp-fulltrip-card-header">
                  <span className="pp-fulltrip-days-badge">
                    📅 {t('fullTripSuggestions.totalDays', { count: group.totalDays })}
                  </span>
                  <span className="pp-trip-suggestions-uses-badge">
                    🔥 {t('tripSuggestions.usesCount', { count: group.usesCount })}
                  </span>
                  {group.matchedMustCities.length > 0 && (
                    <span className="pp-fulltrip-mustcity-badge">
                      ✓ {t('fullTripSuggestions.containsCity', { city: group.matchedMustCities.join(', ') })}
                    </span>
                  )}
                </div>

                <CriteriaIndicators templateCriteria={group.criteria} selectedCriteria={criteria} />

                {/* Chaîne des villes du voyage, dans l'ordre */}
                <div className="pp-fulltrip-cities">
                  {group.cities.map((city, i) => (
                    <Fragment key={city.templateId}>
                    {i > 0 && <span className="pp-fulltrip-city-arrow">→</span>}
                    <span className="pp-fulltrip-city">
                      <span className="pp-fulltrip-city-name">{city.cityName}</span>
                      <span className="pp-fulltrip-city-days">{t('fullTripSuggestions.cityDays', { count: city.nbDays })}</span>
                      {city.daytrips.length > 0 && (
                        <span className="pp-fulltrip-city-daytrips" title={t('tripSuggestions.includesDaytrips', { count: city.daytrips.length, names: city.daytrips.map((d) => d.cityName).join(', ') })}>
                          🧭 {city.daytrips.length}
                        </span>
                      )}
                    </span>
                    </Fragment>
                  ))}
                </div>

                <button
                  type="button"
                  className={`pp-fulltrip-expand-btn${expandedId === group.id ? ' pp-fulltrip-expand-btn--open' : ''}`}
                  onClick={() => setExpandedId((id) => (id === group.id ? null : group.id))}
                >
                  {expandedId === group.id ? t('fullTripSuggestions.hideDetail') : t('fullTripSuggestions.showDetail')}
                </button>

                {expandedId === group.id && (
                  <div className="pp-fulltrip-detail">
                    {group.cities.map((city) => (
                      <div key={city.templateId} className="pp-fulltrip-detail-city">
                        <div className="pp-fulltrip-detail-city-name">
                          <span className="pp-fulltrip-detail-city-icon" aria-hidden="true">🏙</span>
                          <span className="pp-fulltrip-detail-city-label">{city.cityName}</span>
                          {city.dayOffset > 0 && (
                            <span className="pp-fulltrip-detail-offset">{t('fullTripSuggestions.fromDay', { day: city.dayOffset + 1 })}</span>
                          )}
                        </div>
                        {/* Jour du VOYAGE (city.dayOffset + day.dayIndex), pas jour de la
                            ville seule : "Jour 1" pour Rome alors qu'on est au jour 3 du
                            voyage complet induisait en erreur — voir le badge "à partir
                            du jour X" ci-dessus, calculé avec le même city.dayOffset. Fusionné
                            avec les excursions (buildCityTimeline) et trié par jour absolu :
                            une excursion tombant AVANT le dernier jour de la ville (ex. jour 5
                            sur un séjour de 8 jours) doit apparaître à sa place, pas après
                            coup — voir buildCityTimeline ci-dessus. */}
                        {buildCityTimeline(city).map((dayGroup, gi) => (
                          dayGroup.daytrip ? (
                            <div key={`daytrip-${dayGroup.daytrip.id}-${gi}`} className="pp-fulltrip-daytrip">
                              <div className="pp-fulltrip-daytrip-name">
                                <span aria-hidden="true">🧭</span>
                                {dayGroup.daytrip.cityName}
                                <span className="pp-fulltrip-daytrip-tag">{t('daytrip.badge')}</span>
                              </div>
                              {dayGroup.entries.map((e) => (
                                <DayTimelineBlock key={e.dayNumber} day={e.day} dayNumber={e.dayNumber} />
                              ))}
                            </div>
                          ) : (
                            <Fragment key={`base-${gi}`}>
                              {dayGroup.entries.map((e) => (
                                <DayTimelineBlock key={e.dayNumber} day={e.day} dayNumber={e.dayNumber} />
                              ))}
                            </Fragment>
                          )
                        ))}
                      </div>
                    ))}
                  </div>
                )}

                {confirmingId === group.id ? (
                  <div className="pp-trip-suggestions-confirm">
                    {dayMismatchFor(group) !== 0 && (
                      <p className="pp-fulltrip-notice">
                        {dayMismatchFor(group) > 0
                          ? t('fullTripSuggestions.confirmMoreDaysText', { count: dayMismatchFor(group) })
                          : t('fullTripSuggestions.confirmFewerDaysText', { count: -dayMismatchFor(group) })}
                      </p>
                    )}
                    {baseCitiesCount > 0 && (
                      <p>{t('fullTripSuggestions.confirmAppendText', { count: baseCitiesCount })}</p>
                    )}
                    <div className="pp-modal-actions">
                      <button className="pp-btn pp-btn--ghost pp-btn--sm" onClick={() => setConfirmingId(null)} disabled={importing}>
                        {t('common:actions.cancel')}
                      </button>
                      <button className="pp-btn pp-btn--primary pp-btn--sm" onClick={() => runImport(group)} disabled={importing}>
                        {importing ? <span className="pp-search-busy" /> : t('fullTripSuggestions.confirmAppendButton')}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="pp-fulltrip-card-actions">
                    <button
                      className="pp-btn pp-btn--primary pp-btn--sm"
                      onClick={() => handleImportClick(group)}
                      disabled={importing}
                    >
                      {importing ? <span className="pp-search-busy" /> : t('fullTripSuggestions.importButton')}
                    </button>
                  </div>
                )}
              </div>
            ))}
            {hasMore && (
              <button
                type="button"
                className="pp-fulltrip-loadmore-btn"
                onClick={loadMore}
                disabled={loadingMore}
              >
                {loadingMore ? <span className="pp-search-busy" /> : t('fullTripSuggestions.loadMoreButton')}
              </button>
            )}
          </div>
        )
      )}
        </div>
      </div>
    </div>
  );
}
