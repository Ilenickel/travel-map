import { Fragment, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { callModeration } from '../../lib/moderation';
import { COUNTRIES } from '../../data/index';
import { countryAlpha2FromEmoji, formatDuration, TRIP_CRITERIA } from '../../lib/planningUtils';
import { CriteriaFilterChips, CriteriaIndicators } from './SuggestionCriteria';
import { useActivityNameTranslations, useCityNameTranslations } from '../../lib/translateContent';
import { useActivityPhoto } from '../../hooks/useActivityPhoto';
import { useCityImages } from '../../hooks/useCityImages';
import { scrollIntoViewSoon } from '../../hooks/useScrollIntoViewOnOpen';
import ActivityPhotoIndicator from './ActivityPhotoIndicator';
import DaysStepper from './DaysStepper';
import CitySearchInput from './CitySearchInput';
import { useToast } from '../../context/ToastContext';

// ─── Fenêtre de suggestions unifiée ───────────────────────────────────────
// Fusionne les anciens TripPlanSuggestionsButton.jsx (suggestions de planning
// par ville) et TripFullSuggestions.jsx (planning complet du pays) en UNE
// SEULE vraie popup modale (recouvrant tout l'écran), avec deux onglets. Le
// menu "Manuel / Suggestions de voyages" de DestinationBlock disparaît : la
// vue manuelle (liste des villes) reste toujours affichée, ce bouton-ci ouvre
// juste cette fenêtre par-dessus, sans jamais rien modifier tant qu'un import
// n'a pas été explicitement confirmé.
//
// Les "lieux conseillés" individuels (PlaceSuggestionsButton) ne vivent PAS
// ici : cette fenêtre ne propose que des plannings (multi-jours), jamais un
// lieu isolé — le bouton dédié reste directement sous chaque ville dans la
// vue manuelle (voir CityBlock.jsx).

const SLOT_ICON = { matin: '🌅', 'apres-midi': '☀️', soir: '🌆' };
const SLOT_ORDER = ['matin', 'apres-midi', 'soir'];

// Contexte pays passé à useCityImages (voir docs/city-images-integration.md) :
// nom anglais + alpha2 dérivés de COUNTRIES pour affiner la résolution Unsplash
// d'une ville pas encore en cache. sourceLanguage 'fr' : les noms de villes des
// suggestions éditoriales sont stockés en français (nom SOURCE), quel que soit
// l'affichage.
function cityImageContext(countryCode) {
  const country = COUNTRIES[countryCode];
  return {
    countryCode,
    countryName: country?.name?.en || null,
    countryAlpha2: countryAlpha2FromEmoji(country?.emoji),
    sourceLanguage: 'fr',
  };
}

// Habillage visuel d'une ville : sa photo si résolue, sinon un fond neutre
// (gradient + initiale) — JAMAIS de photo de remplacement générique (décision
// produit ferme, voir docs/city-images-integration.md §1/§5). `variant`
// contrôle juste la taille/forme via le CSS.
// `thumbUrl` (vignette Unsplash légère, ~200px de large) suffit pour les
// petites cartes de la grille "Villes" ; étirée sur le hero pleine largeur
// (ou les grandes cartes "en attente d'import") elle rendait floue — ces deux
// formats utilisent donc `imageUrl` (pleine résolution, voir docs/city-images-
// integration.md §2 : "image_url pour un affichage en grand").
const LARGE_MEDIA_VARIANTS = new Set(['hero', 'featured']);

function CityMedia({ image, name, variant = 'card', children }) {
  const initial = (name || '?').trim().charAt(0).toUpperCase();
  const src = image ? (LARGE_MEDIA_VARIANTS.has(variant) ? (image.imageUrl || image.thumbUrl) : image.thumbUrl) : null;
  return (
    <div className={`pp-citymedia pp-citymedia--${variant}${image ? '' : ' pp-citymedia--empty'}`}>
      {src
        ? <img className="pp-citymedia-img" src={src} alt="" loading="lazy" />
        : <span className="pp-citymedia-initial" aria-hidden="true">{initial}</span>}
      {children}
    </div>
  );
}

function groupBySlot(activities) {
  return SLOT_ORDER
    .map((slot) => ({ slot, items: activities.filter((a) => a.time_slot === slot) }))
    .filter((g) => g.items.length > 0);
}

// Clé de panier stable pour une ville du catalogue (qui n'a pas forcément
// d'id de voyage tant qu'elle n'a pas été créée) — nom normalisé en minuscule,
// pas l'id, voir 3d du cahier des charges.
function cityKeyFor(cityName) {
  return (cityName || '').trim().toLowerCase();
}

function DayTimelineBlock({ day, dayNumber, getActivityName, getActivityImage }) {
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
                {items.map((a) => {
                  const img = getActivityImage?.(a);
                  return (
                    <span key={a.id} className="pp-trip-suggestions-item">
                      {getActivityName(a)}
                      {a.duration_minutes > 0 && (
                        <span className="pp-trip-suggestions-item-duration" title={t('tripSuggestions.durationTitle')}>
                          ⏱ {formatDuration(a.duration_minutes)}
                        </span>
                      )}
                      {img && <ActivityPhotoIndicator img={img} name={getActivityName(a)} />}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function collectTemplateActivities(template, cityName) {
  if (!template) return [];
  return [
    ...template.days.flatMap((d) => d.activities.map((a) => ({ ...a, _cityName: cityName }))),
    ...template.daytrips.flatMap((dt) => dt.days.flatMap((d) => d.activities.map((a) => ({ ...a, _cityName: dt.cityName })))),
  ];
}

function buildCityTimeline(template) {
  const entries = [
    ...template.days.map((day) => ({ dayNumber: day.dayIndex, day, daytrip: null })),
    ...template.daytrips.flatMap((dt) =>
      dt.days.map((day) => ({ dayNumber: (dt.dayOffset ?? 0) + day.dayIndex, day, daytrip: dt }))
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

// ─── Onglet "Villes" — sous-vue détail d'une ville (carrousel de plannings) ──
// Les filtres (durée, critères) sont en state LOCAL à ce sous-composant (3c
// du cahier des charges) : ils ne doivent PAS être partagés entre les villes
// — changer de ville doit repartir de filtres vides, la durée souhaitée à
// Tokyo n'est pas forcément celle souhaitée à Osaka.
function CityTemplatesBrowser({
  dest, cityName, representativeTemplateId, cityIsEditorial, hasExistingActivities, cartEntry, onChooseTemplate, onBack,
}) {
  const { t, i18n } = useTranslation();
  const toast = useToast();
  const [nbDays, setNbDays] = useState(null);
  // ±1 jour de tolérance sur la durée (voir handleSuggest côté serveur) :
  // activé par défaut (c'était déjà systématiquement le cas avant ce
  // toggle), désactivable pour ne voir que les plannings de la durée exacte.
  const [flex, setFlex] = useState(true);
  const [criteria, setCriteria] = useState([]);
  const [templates, setTemplates] = useState(null);
  const [index, setIndex] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const countryAlpha2 = countryAlpha2FromEmoji(COUNTRIES[dest.country_code]?.emoji);

  // Nom de ville AFFICHÉ, traduit dans la langue du visiteur (ex. "Beijing"
  // pour un visiteur anglophone là où l'auteur du modèle a tapé "Pékin") —
  // `cityName` brut reste ce qui est envoyé au serveur (action 'suggest'
  // ci-dessous), jamais la version traduite, pour rester cohérent avec ce qui
  // est réellement stocké en base.
  const getCityDisplayName = useCityNameTranslations(
    representativeTemplateId ? [{ id: representativeTemplateId, name: cityName, isEditorial: cityIsEditorial }] : [],
    i18n.language
  );
  const displayCityName = representativeTemplateId
    ? getCityDisplayName({ id: representativeTemplateId, name: cityName, isEditorial: cityIsEditorial })
    : cityName;

  const [searching, setSearching] = useState(false);
  // Ancrage pour le défilement automatique vers les résultats après une
  // recherche (voir fetchTemplates) — sans lui, sur mobile où le bouton
  // "Rechercher" reste en haut de l'écran une fois le clavier des filtres
  // refermé, les premiers résultats apparaissaient hors du cadre visible :
  // rien ne semblait s'être passé tant qu'on n'avait pas pensé à scroller
  // soi-même (signalé le 2026-07-22).
  const resultsRef = useRef(null);

  // Jeton de requête : sans lui, changer `flex`/`nbDays`/`criteria` pendant
  // qu'un `loadMore` est en vol pouvait faire résoudre ce dernier APRÈS la
  // nouvelle recherche déclenchée par le changement — ses résultats
  // (obtenus avec l'ANCIENNE valeur des filtres) s'ajoutaient alors à la
  // liste affichée, la mélangeant avec des résultats incohérents entre eux.
  const requestIdRef = useRef(0);

  // `overrides` : mêmes filtres que l'état actuel sauf ceux explicitement
  // remplacés — sert à relancer une recherche déjà lancée avec une valeur
  // de critère qui vient tout juste de changer, avant que le re-render qui
  // mettrait `criteria` à jour n'ait eu lieu (voir handleToggleCriterion,
  // même raisonnement que FullTripTab.runSearch ci-dessous).
  const fetchTemplates = async (overrides = {}) => {
    const params = { nbDays, flex, criteria, ...overrides };
    const myRequestId = ++requestIdRef.current;
    setSearching(true);
    const result = await callModeration('trip-templates', {
      action: 'suggest', countryCode: dest.country_code, cityName, countryAlpha2, plannedDays: params.nbDays, nbDaysFlex: params.flex, criteria: params.criteria,
    });
    // Vérifié AVANT setSearching(false) : sinon une réponse périmée (une
    // recherche plus récente déjà lancée entre-temps) pouvait éteindre le
    // spinner alors que CETTE recherche plus récente est encore en vol —
    // trouvé en TNR le 2026-07-23. Une requête périmée laisse `searching`
    // tel quel (toujours à true si la nouvelle recherche est en cours,
    // celle-ci gère elle-même son propre passage à false à sa résolution).
    if (myRequestId !== requestIdRef.current) return; // une recherche plus récente a pris le relais
    setSearching(false);
    if (!result.ok) toast?.error(result.reason || t('tripSuggestions.loadError'));
    setTemplates(result.ok ? (result.templates || []) : []);
    setHasMore(result.ok ? !!result.hasMore : false);
    setIndex(0);
    scrollIntoViewSoon(resultsRef);
  };

  // Recherche déclenchée EXPLICITEMENT par un bouton (voir le rendu plus
  // bas), plus automatiquement à l'ouverture — l'ancien comportement partait
  // chercher TOUS les plannings de la ville dès l'ouverture, avant même que
  // le visiteur ait pu choisir une durée ou un critère. Une fois une première
  // recherche lancée, cocher/décocher un critère relance automatiquement
  // (comme le fait déjà l'onglet "Planning complet", voir FullTripTab.
  // handleToggleCriterion) — seuls durée/tolérance nécessitent de recliquer
  // sur "Rechercher", pour éviter une requête à chaque clic sur le stepper.
  const toggleCriterion = (key) => {
    const next = criteria.includes(key) ? criteria.filter((k) => k !== key) : [...criteria, key];
    setCriteria(next);
    if (templates !== null) fetchTemplates({ criteria: next });
  };

  const loadMore = async () => {
    // Pas d'incrément ici : "charger plus" prolonge la recherche EN COURS,
    // ce n'en est pas une nouvelle — seul fetchTemplates doit faire avancer
    // le jeton.
    const myRequestId = requestIdRef.current;
    setLoadingMore(true);
    const result = await callModeration('trip-templates', {
      action: 'suggest', countryCode: dest.country_code, cityName, countryAlpha2, plannedDays: nbDays, nbDaysFlex: flex, criteria, offset: templates.length,
    });
    setLoadingMore(false);
    if (myRequestId !== requestIdRef.current) return 0; // filtres changés entre-temps : ces résultats ne correspondent plus à ce qui est affiché
    if (!result.ok) { toast?.error(result.reason || t('tripSuggestions.loadError')); return 0; }
    const added = result.templates || [];
    setTemplates((prev) => [...(prev || []), ...added]);
    setHasMore(!!result.hasMore);
    return added.length;
  };

  const handleNext = async () => {
    if (index < templates.length - 1) { setIndex(index + 1); return; }
    if (!hasMore || loadingMore) return;
    const prevLen = templates.length;
    const added = await loadMore();
    if (added > 0) setIndex(prevLen);
  };
  const handlePrev = () => setIndex((i) => Math.max(0, i - 1));

  const touchStart = useRef(null);
  const SWIPE_THRESHOLD_PX = 40;
  const handleTouchStart = (e) => {
    const t0 = e.touches[0];
    touchStart.current = { x: t0.clientX, y: t0.clientY };
  };
  const handleTouchEnd = (e) => {
    if (!touchStart.current) return;
    const t0 = e.changedTouches[0];
    const dx = t0.clientX - touchStart.current.x;
    const dy = t0.clientY - touchStart.current.y;
    touchStart.current = null;
    if (Math.abs(dx) < SWIPE_THRESHOLD_PX || Math.abs(dx) < Math.abs(dy)) return;
    if (dx < 0) handleNext();
    else handlePrev();
  };

  const current = templates && templates.length > 0 ? templates[index] : null;
  const getActivityName = useActivityNameTranslations(collectTemplateActivities(current, cityName), i18n.language);
  const { getActivityImage, loading: photosLoading } = useActivityPhoto(collectTemplateActivities(current, cityName), dest.country_code, i18n.language);

  return (
    <div className="pp-trip-suggestions-citybrowser">
      <button type="button" className="pp-suggestions-back-btn" onClick={onBack}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"/></svg>
        {t('tripSuggestions.backToCities')}
      </button>

      <h4 className="pp-trip-suggestions-city-heading">{t('tripSuggestions.modalTitle', { city: displayCityName })}</h4>

      {/* Bandeau "filtres facultatifs" repositionné juste au-dessus des
          filtres eux-mêmes (durée + critères) plutôt qu'en haut de la
          fenêtre, où il n'avait aucun rapport visuel avec ce qu'il décrit. */}
      <p className="pp-fulltrip-optional-banner">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/></svg>
        {t('tripSuggestionsModal.filtersOptionalHint')}
      </p>

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
      <CriteriaFilterChips selected={criteria} onToggle={toggleCriterion} />

      {/* Recherche déclenchée à la demande (pas automatiquement à l'ouverture) :
          laisse le temps de choisir une durée/des critères avant de lancer la
          requête, plutôt que de renvoyer d'emblée TOUS les plannings partagés
          de la ville — voir fetchTemplates ci-dessus. Reste visible même après
          une première recherche : c'est ce qui permet de relancer après avoir
          changé la durée (seuls les critères se relancent tout seuls, voir
          toggleCriterion). */}
      <button type="button" className="pp-fulltrip-search-btn" onClick={() => fetchTemplates()} disabled={searching}>
        {searching ? <span className="pp-search-busy" /> : (
          <>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
            {t('fullTripSuggestions.searchButton')}
          </>
        )}
      </button>

      {templates === null ? null : templates.length === 0 ? (
        <div className="pp-trip-suggestions-filtered-empty" ref={resultsRef}>
          <p>{t('tripSuggestions.filteredEmptyText')}</p>
        </div>
      ) : (
        <>
          {/* Bandeau "planning" repositionné ici, juste avant les plannings
              qu'il décrit, plutôt qu'en haut de la fenêtre où il pouvait
              s'afficher même sur des écrans sans aucun planning visible
              (ex. l'écran de confirmation panier de CitiesTab). Porte aussi
              la réf de défilement automatique (resultsRef) : premier élément
              visible juste après une recherche, voir fetchTemplates. */}
          <p className="pp-trip-suggestions-disclaimer" ref={resultsRef}>{t('tripSuggestions.disclaimer')}</p>
          {photosLoading && (
            <p className="pp-trip-suggestions-photos-loading">
              <span className="pp-search-busy" /> {t('tripSuggestions.photosLoading')}
            </p>
          )}
          <div className="pp-trip-suggestions-carousel" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <button type="button" className="pp-trip-suggestions-nav" onClick={handlePrev} disabled={index === 0} aria-label={t('tripSuggestions.prevLabel')}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
            </button>

            <div className="pp-trip-suggestions-card">
              <div className="pp-trip-suggestions-card-header">
                <span className="pp-fulltrip-days-badge">📅 {t('fullTripSuggestions.totalDays', { count: current.nbDays })}</span>
                {current.daytrips.length > 0 && (
                  <span className="pp-trip-suggestions-daytrips-badge">
                    {t('tripSuggestions.includesDaytrips', { count: current.daytrips.length, names: current.daytrips.map((d) => d.cityName).join(', ') })}
                  </span>
                )}
                <span className="pp-trip-suggestions-uses-badge">🔥 {t('tripSuggestions.usesCount', { count: current.usesCount })}</span>
              </div>
              {current.isEditorial && (
                <div className="pp-editorial-notice">
                  <span className="pp-editorial-notice-icon" aria-hidden="true">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
                  </span>
                  <span className="pp-editorial-notice-texts">
                    <span className="pp-editorial-notice-title">{t('tripSuggestions.editorialNoticeTitle')}</span>
                    <span className="pp-editorial-notice-text">{t('tripSuggestions.editorialNoticeText')}</span>
                  </span>
                </div>
              )}
              <CriteriaIndicators templateCriteria={current.criteria} selectedCriteria={criteria} />
              {buildCityTimeline(current).map((group, gi) => (
                group.daytrip ? (
                  <div key={`daytrip-${group.daytrip.id}-${gi}`} className="pp-fulltrip-daytrip">
                    <div className="pp-fulltrip-daytrip-name">
                      <span aria-hidden="true">🧭</span>
                      {group.daytrip.cityName}
                      <span className="pp-fulltrip-daytrip-tag">{t('daytrip.badge')}</span>
                    </div>
                    {group.entries.map((e) => (
                      <DayTimelineBlock key={e.dayNumber} day={e.day} dayNumber={e.dayNumber} getActivityName={getActivityName} getActivityImage={getActivityImage} />
                    ))}
                  </div>
                ) : (
                  <Fragment key={`base-${gi}`}>
                    {group.entries.map((e) => (
                      <DayTimelineBlock key={e.dayNumber} day={e.day} dayNumber={e.dayNumber} getActivityName={getActivityName} getActivityImage={getActivityImage} />
                    ))}
                  </Fragment>
                )
              ))}
            </div>

            <button
              type="button"
              className="pp-trip-suggestions-nav"
              onClick={handleNext}
              disabled={(index === templates.length - 1 && !hasMore) || loadingMore}
              aria-label={t('tripSuggestions.nextLabel')}
            >
              {loadingMore && index === templates.length - 1
                ? <span className="pp-search-busy" />
                : <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/></svg>}
            </button>
          </div>

          {templates.length > 1 && (
            <div className="pp-trip-suggestions-dots">
              {templates.map((tpl, i) => (
                <button key={tpl.id} type="button" className={`pp-trip-suggestions-dot${i === index ? ' active' : ''}`} onClick={() => setIndex(i)} aria-label={t('tripSuggestions.goToLabel', { count: i + 1 })} />
              ))}
            </div>
          )}

          <div className="pp-modal-actions pp-trip-suggestions-choose-row">
            {/* Remplacement silencieux, pas de confirmation bloquante (3e) : le
                clic sur "Choisir ce planning" reste l'unique action — cette
                note est juste informative, affirmative (pas une question). */}
            {hasExistingActivities && (
              <p className="pp-fulltrip-notice pp-trip-suggestions-replace-notice">
                {t('tripSuggestions.replaceNoticeText', { city: displayCityName })}
              </p>
            )}
            {/* Toujours en évidence (fond plein), même avant sélection — l'ancien
                style "ghost" par défaut le faisait passer pour une action
                secondaire alors que c'est l'action principale de cet écran. */}
            <button
              type="button"
              className={`pp-btn pp-btn--sm pp-trip-suggestions-choose-btn${cartEntry?.templateId === current.id ? ' pp-trip-suggestions-choose-btn--chosen' : ''}`}
              onClick={() => onChooseTemplate(cityName, current, displayCityName)}
            >
              {cartEntry?.templateId === current.id ? `✓ ${t('tripSuggestions.chosenLabel')}` : t('tripSuggestions.chooseButton')}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

// ─── Onglet "Villes" ───────────────────────────────────────────────────────
// Liste TOUTES les villes ayant au moins un planning partagé pour ce pays
// (action 'list-cities'), pas seulement les villes déjà présentes dans le
// voyage (3b du cahier des charges) — la résolution "déjà dans votre voyage"
// (existingCityId) se fait entièrement côté serveur par géocodage (voir
// handleListCities, api/trip-templates.js), pas par comparaison locale avec
// les villes du voyage — ce composant n'a donc pas besoin de les recevoir.
function CitiesTab({ dest, activities, cart, onChooseTemplate, onRemoveFromCart, importing, onImportCart }) {
  const { t, i18n } = useTranslation();
  const toast = useToast();
  const [citiesList, setCitiesList] = useState(null); // null = pas encore chargé
  const [selectedCity, setSelectedCity] = useState(null); // objet cluster entier (voir list-cities), pas juste le nom
  const [justChosenCityKey, setJustChosenCityKey] = useState(null);
  const countryAlpha2 = countryAlpha2FromEmoji(COUNTRIES[dest.country_code]?.emoji);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      // destinationId : permet au serveur de résoudre "déjà dans votre
      // voyage" par géocodage (voir handleListCities) — sans lui, ce champ
      // reviendrait toujours absent, jamais une comparaison de texte de
      // repli côté client (le client n'a pas accès au géocodage).
      const result = await callModeration('trip-templates', {
        action: 'list-cities', countryCode: dest.country_code, countryAlpha2, destinationId: dest.id,
      });
      if (cancelled) return;
      // Sans ce toast, un échec (session expirée, réseau, 500) se montrait
      // exactement comme "aucun planning partagé n'existe encore" — un
      // utilisateur déconnecté-sans-le-savoir ne pouvait pas distinguer
      // "il n'y a rien" de "ça n'a pas pu charger", pour un pays qui a
      // pourtant du contenu.
      if (!result.ok) toast?.error(result.reason || t('tripSuggestions.loadError'));
      setCitiesList(result.ok ? (result.cities || []) : []);
    })();
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dest.country_code, dest.id]);

  // Nom AFFICHÉ de chaque ville suggérée, traduit dans la langue du visiteur
  // — voir CityTemplatesBrowser pour la même logique appliquée au détail
  // d'une ville. `cityName` brut (non traduit) reste ce qui identifie la
  // ville pour le reste du flux (choix, panier, import).
  const getCityDisplayName = useCityNameTranslations(
    (citiesList || []).map((c) => ({ id: c.representativeTemplateId, name: c.cityName, isEditorial: c.isEditorial })),
    i18n.language
  );

  // Photos des villes : nom SOURCE brut (c.cityName, jamais le libellé
  // traduit) + lat/lng connus (renvoyés par list-cities) → cache Supabase
  // quasi instantané, voir docs/city-images-integration.md.
  const { getCityImage } = useCityImages(
    (citiesList || []).map((c) => ({ cityName: c.cityName, lat: c.lat, lng: c.lng })),
    cityImageContext(dest.country_code)
  );

  const handleChoose = (cityName, template, displayName) => {
    const cityKey = onChooseTemplate(cityName, template, selectedCity?.existingCityId || null, displayName);
    setJustChosenCityKey(cityKey);
    setSelectedCity(null);
  };

  if (justChosenCityKey && !selectedCity) {
    const cityName = cart[justChosenCityKey]?.cityName;
    return (
      <div className="pp-trip-suggestions-confirm pp-trip-suggestions-confirm--cart">
        <span className="pp-trip-suggestions-confirm-icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2l-3.5-3.5L4 14.2 9 19.2 20 8.2l-1.5-1.5z"/></svg>
        </span>
        <p>{t('tripSuggestions.addedToCartText', { city: cityName })}</p>
        {/* "Continuer" en avant (primaire) : le flux panier encourage à choisir
            plusieurs villes avant d'importer, "importer maintenant" reste
            possible mais ne doit pas être l'action visuellement dominante. */}
        <div className="pp-modal-actions">
          <button className="pp-btn pp-btn--ghost pp-btn--sm" onClick={onImportCart} disabled={importing}>
            {importing ? <span className="pp-search-busy" /> : t('tripSuggestions.importNowButton')}
          </button>
          <button className="pp-btn pp-btn--primary pp-btn--sm" onClick={() => setJustChosenCityKey(null)} disabled={importing}>
            {t('tripSuggestions.continueOtherCitiesButton')}
          </button>
        </div>
      </div>
    );
  }

  if (selectedCity) {
    const cityKey = cityKeyFor(selectedCity.cityName);
    return (
      <CityTemplatesBrowser
        dest={dest}
        cityName={selectedCity.cityName}
        representativeTemplateId={selectedCity.representativeTemplateId}
        cityIsEditorial={selectedCity.isEditorial}
        hasExistingActivities={selectedCity.existingCityId ? activities.some((a) => a.city_id === selectedCity.existingCityId) : false}
        cartEntry={cart[cityKey]}
        onChooseTemplate={handleChoose}
        onBack={() => setSelectedCity(null)}
      />
    );
  }

  // Villes déjà en attente d'import (dans le panier) remontées en tête de
  // liste, dans une section à part — plus facile à retrouver que mélangées
  // au reste, et ça donne une trace visuelle immédiate de ce qui a déjà été
  // choisi avant de continuer à parcourir les autres villes.
  const chosenCities = (citiesList || []).filter((c) => !!cart[cityKeyFor(c.cityName)]);
  const otherCities = (citiesList || []).filter((c) => !cart[cityKeyFor(c.cityName)]);

  // Carte-photo d'une ville : la photo (ou habillage neutre) porte le nom en
  // surimpression ; l'état (choisie / déjà dans le voyage) est indiqué par un
  // médaillon coché et un pied de carte. `featured` = grande carte de la
  // section "en attente d'import" (voir maquette "Cartes interactives").
  //
  // Structure en DEUX boutons distincts (pas un seul englobant tout) : le
  // HTML interdit un <button> à l'intérieur d'un autre <button> — nécessaire
  // ici car une ville déjà choisie a maintenant sa propre croix de retrait
  // (pp-citycard-remove), qui doit rester cliquable indépendamment du reste
  // de la carte (qui ouvre le détail de la ville) sans déclencher les deux à
  // la fois.
  const renderCityCard = (c, featured) => {
    const cityKey = cityKeyFor(c.cityName);
    const chosen = !!cart[cityKey];
    const alreadyInTrip = !!c.existingCityId;
    const image = getCityImage(c.cityName);
    const displayName = getCityDisplayName({ id: c.representativeTemplateId, name: c.cityName, isEditorial: c.isEditorial });
    return (
      <div
        key={c.cityName}
        className={`pp-citycard${featured ? ' pp-citycard--featured' : ''}${chosen ? ' pp-citycard--chosen' : ''}`}
      >
        <button type="button" className="pp-citycard-open" onClick={() => setSelectedCity(c)}>
          <CityMedia image={image} name={displayName} variant={featured ? 'featured' : 'card'}>
            <span className="pp-citymedia-scrim" aria-hidden="true" />
            <span className="pp-citycard-name">{displayName}</span>
          </CityMedia>
          <span className="pp-citycard-foot">
            {chosen ? (
              <span className="pp-citycard-status pp-citycard-status--chosen">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 16.2l-3.5-3.5L4 14.2 9 19.2 20 8.2l-1.5-1.5z"/></svg>
                {t('tripSuggestions.citySelectedBadge')}
              </span>
            ) : alreadyInTrip ? (
              <span className="pp-citycard-status pp-citycard-status--already">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>
                {t('tripSuggestions.alreadyInTrip')}
              </span>
            ) : (
              <span className="pp-citycard-status pp-citycard-status--go">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/></svg>
              </span>
            )}
          </span>
        </button>
        {chosen && (
          <span className="pp-citycard-check" title={t('tripSuggestions.citySelectedBadge')} aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2l-3.5-3.5L4 14.2 9 19.2 20 8.2l-1.5-1.5z"/></svg>
          </span>
        )}
        {chosen && (
          // Retire la ville du panier SANS ouvrir son détail (stopPropagation
          // inutile ici : ce bouton est un FRÈRE de pp-citycard-open, pas un
          // enfant, les deux clics ne peuvent déjà pas se déclencher l'un
          // l'autre) — voir handleRemoveFromCart (composant racine), qui met
          // à jour `cart` partagé entre les deux onglets.
          <button
            type="button"
            className="pp-citycard-remove"
            onClick={() => onRemoveFromCart(cityKey)}
            title={t('tripSuggestions.removeFromCartTitle', { city: displayName })}
            aria-label={t('tripSuggestions.removeFromCartTitle', { city: displayName })}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="pp-trip-suggestions-cities-tab">
      <p className="pp-trip-suggestions-disclaimer">{t('tripSuggestions.disclaimer')}</p>
      {chosenCities.length > 0 && (
        <div className="pp-trip-suggestions-city-group">
          <span className="pp-trip-suggestions-city-group-label">{t('tripSuggestions.selectedCitiesHeading', { count: chosenCities.length })}</span>
          <div className="pp-citycards-grid pp-citycards-grid--featured">{chosenCities.map((c) => renderCityCard(c, true))}</div>
        </div>
      )}
      <div className="pp-trip-suggestions-city-group">
        {chosenCities.length > 0 && otherCities.length > 0 && (
          <span className="pp-trip-suggestions-city-group-label">{t('tripSuggestions.otherCitiesHeading')}</span>
        )}
        {citiesList === null ? (
          <p className="pp-trip-suggestions-city-list-empty"><span className="pp-search-busy" /> {t('common:loading')}</p>
        ) : citiesList.length === 0 ? (
          <p className="pp-trip-suggestions-city-list-empty">{t('tripSuggestions.noCitiesYet')}</p>
        ) : (
          <div className="pp-citycards-grid">{otherCities.map((c) => renderCityCard(c, false))}</div>
        )}
      </div>
    </div>
  );
}

// Chaîne de villes en surimpression sur le hero, sur une seule ligne qui
// défile horizontalement (voir FullTripTab plus bas pour le contexte complet
// de ce choix). Isolée dans son propre composant car elle a besoin de
// MESURER le DOM (scrollWidth/scrollLeft vs largeur visible) pour savoir
// dans quel sens elle peut défiler — les chevrons ne doivent s'afficher QUE
// quand ils servent à quelque chose : ni au repos sur une chaîne qui tient
// déjà entièrement (trompeur, laisse croire à des villes manquantes), ni du
// mauvais côté une fois qu'on a commencé à glisser.
//
// Les chevrons sont de VRAIS boutons cliquables (scrollBy programmatique),
// pas seulement un indice visuel : au doigt (mobile), glisser directement
// sur la photo fonctionne nativement, mais à la souris (PC) rien ne permet
// de faire défiler une rangée horizontale sans molette Maj ni trackpad —
// sans bouton cliquable, le chevron n'était qu'une promesse non tenue
// (signalé le 2026-07-22 : "ça ne fait rien sur PC").
function HeroChainScroll({ group, getCityDisplayName, t }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    // 1px de marge : sur certains navigateurs, un contenu qui tient tout
    // juste peut renvoyer scrollWidth = clientWidth + 1 par arrondi de
    // sous-pixel, faisant apparaître un chevron pour rien.
    const measure = () => {
      setCanScrollLeft(el.scrollLeft > 1);
      setCanScrollRight(el.scrollWidth > el.scrollLeft + el.clientWidth + 1);
    };

    // Double requestAnimationFrame (pas measure() synchrone dans l'effet) :
    // sur ordinateur, la modale (.pp-suggestions-modal) et les cartes
    // (.pp-fulltrip-card) ont des animations d'entrée CSS et une mise en page
    // plus complexe (grille de champs, largeurs en %) qu'un simple écran
    // mobile plein cadre — mesurer AU MONTAGE, avant que ce premier reflow ne
    // soit totalement stabilisé, pouvait renvoyer un clientWidth pas encore
    // définitif (chevron jamais affiché même quand ça débordait vraiment,
    // signalé le 2026-07-22 : "marche sur mobile, pas sur PC"). Deux rAF
    // laissent le temps à TOUT le layout de la frame précédente de se poser
    // avant de mesurer — un seul peut encore tomber pendant le même cycle de
    // rendu sur certains navigateurs.
    let raf2 = null;
    const raf1 = requestAnimationFrame(() => { raf2 = requestAnimationFrame(measure); });

    // ResizeObserver : la largeur de la carte peut changer après le premier
    // rendu (redimensionnement de la fenêtre, rotation mobile, ouverture/
    // fermeture du panneau carte à côté de la modale). "scroll" : glisser au
    // doigt sur mobile doit aussi faire réapparaître/disparaître les
    // chevrons en cours de route, pas seulement au montage.
    let ro;
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(measure);
      ro.observe(el);
    }
    el.addEventListener('scroll', measure, { passive: true });

    return () => {
      cancelAnimationFrame(raf1);
      if (raf2 != null) cancelAnimationFrame(raf2);
      ro?.disconnect();
      el.removeEventListener('scroll', measure);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [group.cities.length]);

  // Avance/recule d'à peu près la largeur visible du bandeau (moins une
  // marge pour garder la ville coupée en bord d'écran visible au pas
  // suivant, repère utile pour se situer dans la chaîne).
  //
  // Animation JS maison (requestAnimationFrame + easing), PAS
  // `scrollBy({behavior:'smooth'})` : le lissage natif du navigateur s'est
  // révélé peu fiable d'un navigateur à l'autre — Safari ne l'anime pas
  // toujours quand il est déclenché depuis un clic JS (saut instantané), et
  // sa durée n'est de toute façon pas réglable (signalé le 2026-07-22 : "ça
  // ne fait pas glisser… en cliquant"). Une animation manuelle garantit le
  // même rendu, sur PC comme sur mobile, quel que soit le navigateur.
  const scrollAnimRef = useRef(null);
  const scrollByStep = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    if (scrollAnimRef.current) cancelAnimationFrame(scrollAnimRef.current);

    const DURATION_MS = 380;
    const start = el.scrollLeft;
    const delta = dir * (el.clientWidth - 60);
    // Bornes réelles du scroll : évite de demander une position au-delà de ce
    // qui existe (scrollLeft se clampe tout seul en fin d'anim, mais borner
    // ici évite une fin d'animation qui "cogne" contre la limite).
    const max = el.scrollWidth - el.clientWidth;
    const target = Math.max(0, Math.min(max, start + delta));
    const startTime = performance.now();
    // ease-in-out cubique — accélère puis ralentit, plus naturel qu'une
    // vitesse constante pour un déplacement aussi court.
    const easeInOutCubic = (p) => (p < 0.5 ? 4 * p * p * p : 1 - (-2 * p + 2) ** 3 / 2);

    const step = (now) => {
      const progress = Math.min(1, (now - startTime) / DURATION_MS);
      el.scrollLeft = start + (target - start) * easeInOutCubic(progress);
      if (progress < 1) scrollAnimRef.current = requestAnimationFrame(step);
      else scrollAnimRef.current = null;
    };
    scrollAnimRef.current = requestAnimationFrame(step);
  };

  // Anime en cours annulée si le composant se démonte (changement d'onglet
  // en plein clic) — sinon requestAnimationFrame continuerait d'écrire sur
  // un élément DOM détaché sans que personne ne l'arrête.
  useEffect(() => () => { if (scrollAnimRef.current) cancelAnimationFrame(scrollAnimRef.current); }, []);

  return (
    <>
      {canScrollLeft && (
        <button
          type="button"
          className="pp-fulltrip-hero-fade pp-fulltrip-hero-fade--left"
          onClick={() => scrollByStep(-1)}
          aria-label={t('tripSuggestions.scrollCitiesLeftLabel')}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
        </button>
      )}
      <div className="pp-fulltrip-hero-chain" ref={scrollRef}>
        {group.cities.map((city, i) => (
          <Fragment key={city.templateId}>
            {i > 0 && <span className="pp-fulltrip-hero-arrow" aria-hidden="true">→</span>}
            <span className="pp-fulltrip-hero-city">
              <span className="pp-fulltrip-hero-city-name">{getCityDisplayName({ id: city.templateId, name: city.cityName, isEditorial: group.isEditorial })}</span>
              <span className="pp-fulltrip-hero-city-days">{t('fullTripSuggestions.cityDays', { count: city.nbDays })}</span>
              {city.daytrips.length > 0 && (
                // Le nom de l'excursion est affiché directement (pas juste
                // un compteur "🧭 1") : le visiteur voit de quoi il s'agit
                // sans avoir à déplier le détail jour par jour.
                <span className="pp-fulltrip-hero-city-daytrips" title={t('tripSuggestions.includesDaytrips', { count: city.daytrips.length, names: city.daytrips.map((d) => d.cityName).join(', ') })}>
                  🧭 {city.daytrips.map((d) => getCityDisplayName({ id: d.id, name: d.cityName, isEditorial: group.isEditorial })).join(', ')}
                </span>
              )}
            </span>
          </Fragment>
        ))}
      </div>
      {canScrollRight && (
        <button
          type="button"
          className="pp-fulltrip-hero-fade pp-fulltrip-hero-fade--right"
          onClick={() => scrollByStep(1)}
          aria-label={t('tripSuggestions.scrollCitiesRightLabel')}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/></svg>
        </button>
      )}
    </>
  );
}

// ─── Onglet "Planning complet" — reprend TripFullSuggestions.jsx à l'identique ──
function FullTripTab({ dest, tripId, baseCitiesCount, hasAnyDates, onImported, requestDiscardCart }) {
  const { t, i18n } = useTranslation();
  const toast = useToast();
  const countryAlpha2 = countryAlpha2FromEmoji(COUNTRIES[dest.country_code]?.emoji);

  const [nbDays, setNbDays] = useState(null);
  const [flex, setFlex] = useState(true);
  const [mustCities, setMustCities] = useState([]);
  const [pickingCity, setPickingCity] = useState(false);
  const [criteria, setCriteria] = useState([]);
  const [groups, setGroups] = useState(null);
  const [searchedNbDays, setSearchedNbDays] = useState(null);
  const [searchedMustCities, setSearchedMustCities] = useState([]);
  const [mustCitiesResolved, setMustCitiesResolved] = useState([]);
  const [searching, setSearching] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [expandedId, setExpandedId] = useState(null);
  const [confirmingId, setConfirmingId] = useState(null);
  const [importing, setImporting] = useState(false);
  const [formCollapsed, setFormCollapsed] = useState(false);
  // Même correctif que CityTemplatesBrowser ci-dessus : défilement automatique
  // vers les résultats après une recherche, sinon rien ne semble s'être passé
  // sur un écran mobile qui n'a pas déjà les résultats dans le cadre visible.
  const resultsRef = useRef(null);

  const expandedGroup = (groups || []).find((g) => g.id === expandedId) || null;
  const collectGroupActivities = (group) => (group?.cities || []).flatMap((city) => [
    ...city.days.flatMap((d) => d.activities.map((a) => ({ ...a, _cityName: city.name }))),
    ...city.daytrips.flatMap((dt) => dt.days.flatMap((d) => d.activities.map((a) => ({ ...a, _cityName: dt.cityName })))),
  ]);
  const getActivityName = useActivityNameTranslations(collectGroupActivities(expandedGroup), i18n.language);
  const { getActivityImage, loading: photosLoading } = useActivityPhoto(collectGroupActivities(expandedGroup), dest.country_code, i18n.language);
  // Nom de ville AFFICHÉ, traduit dans la langue du visiteur — même logique
  // que CitiesTab/CityTemplatesBrowser ci-dessus, appliquée à toutes les
  // villes de tous les groupes affichés (pas seulement le groupe déplié : la
  // chaîne de villes est visible sur CHAQUE carte, avant même de la déplier).
  // Inclut aussi les villes d'excursion (daytrips), pas seulement les villes
  // de base : leur nom est affiché tel quel dans le badge du hero (voir plus
  // bas), il doit donc être traduit lui aussi, pas juste celui des villes
  // principales de la chaîne.
  // isEditorial vit sur le GROUPE (pas sur chaque ville membre — non renvoyé
  // par suggest-trip) : un groupe éditorial n'a que des membres éditoriaux et
  // inversement (même auteur, même partage), c'est donc un indicateur fiable
  // par ville — voir needsCityTranslation, src/lib/translateContent.js.
  const allGroupCities = (groups || []).flatMap((g) => g.cities.flatMap((c) => [
    { id: c.templateId, name: c.cityName, isEditorial: g.isEditorial },
    ...c.daytrips.map((d) => ({ id: d.id, name: d.cityName, isEditorial: g.isEditorial })),
  ]));
  const getCityDisplayName = useCityNameTranslations(allGroupCities, i18n.language);

  // Photo d'en-tête (hero) de chaque itinéraire : celle de sa 1re ville, nom
  // SOURCE brut (jamais le libellé traduit). suggest-trip ne renvoie pas de
  // lat/lng dans le payload → on ne les fournit pas, le backend géocode (villes
  // éditoriales quasi toujours déjà en cache). Voir docs/city-images-integration.md.
  const heroCities = (groups || []).map((g) => g.cities[0]).filter(Boolean).map((c) => ({ cityName: c.cityName }));
  const { getCityImage } = useCityImages(heroCities, cityImageContext(dest.country_code));

  const toggleCriterion = (key) => {
    setCriteria((prev) => prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]);
  };

  const runSearch = async (overrides = {}) => {
    const params = { nbDays, flex, mustCities, criteria, ...overrides };
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
    if (!result.ok) toast?.error(result.reason || t('tripSuggestions.loadError'));
    setGroups(result.ok ? (result.groups || []) : []);
    setHasMore(result.ok ? !!result.hasMore : false);
    setSearchedNbDays(params.nbDays);
    setSearchedMustCities(params.mustCities);
    setMustCitiesResolved(result.ok ? (result.mustCitiesResolved || []) : []);
    setExpandedId(null);
    scrollIntoViewSoon(resultsRef);
  };

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
    if (!result.ok) { toast?.error(result.reason || t('tripSuggestions.loadError')); return; }
    setGroups((prev) => [...(prev || []), ...(result.groups || [])]);
    setHasMore(!!result.hasMore);
  };

  const handleToggleCriterion = (key) => {
    toggleCriterion(key);
    const next = criteria.includes(key) ? criteria.filter((k) => k !== key) : [...criteria, key];
    if (groups !== null) runSearch({ criteria: next });
  };

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
    // Noms de ville traduits dans la langue du visiteur (ex. "Beijing"),
    // envoyés en override du nom brut de l'auteur du planning ("Pékin") —
    // sinon les villes CRÉÉES par cet import (celles qui ne remplacent pas
    // une ville existante, voir handleImportTrip) prendraient toujours le nom
    // brut, différent de ce qui vient d'être affiché à l'écran.
    const cityNameOverrides = {};
    for (const c of group.cities) cityNameOverrides[c.templateId] = getCityDisplayName({ id: c.templateId, name: c.cityName, isEditorial: group.isEditorial });
    const result = await callModeration('trip-templates', {
      // countryAlpha2 : nécessaire au géocodage des villes existantes pour le
      // remplacement cross-langue côté serveur (voir handleImportTrip).
      action: 'import-trip', tripId, destinationId: dest.id, groupId: group.id, countryAlpha2, cityNameOverrides,
    });
    setImporting(false);
    setConfirmingId(null);
    // Sans ce toast, un échec (session expirée, réseau, 500) ne montrait
    // absolument rien : ni erreur, ni fermeture — l'utilisateur restait sur
    // l'écran de confirmation sans comprendre pourquoi rien ne se passait.
    if (result.ok) onImported?.();
    else toast?.error(result.reason || t('tripSuggestions.loadError'));
  };

  const dayMismatchFor = (group) =>
    searchedNbDays != null && group.totalDays !== searchedNbDays
      ? group.totalDays - searchedNbDays
      : 0;

  // `requestDiscardCart` (du composant racine) doit s'exécuter AVANT
  // l'import, pas après — l'ancienne version le posait sur le `onImported`
  // transmis en prop, qui ne se déclenche qu'APRÈS un import déjà réussi
  // côté serveur : "Annuler" sur l'avertissement n'annulait alors rien du
  // tout (l'import était déjà écrit en base), juste la fermeture de la
  // fenêtre — trompeur. Averti avant, comme pour un vrai choix.
  const handleImportClick = (group) => {
    if (baseCitiesCount > 0 || dayMismatchFor(group) !== 0 || !hasAnyDates) setConfirmingId(group.id);
    else requestDiscardCart(() => runImport(group));
  };

  const unresolvedMustCities = mustCitiesResolved.filter((c) => !c.resolved).map((c) => c.name);
  const noneMatchesMustCity = searchedMustCities.length > unresolvedMustCities.length
    && (groups || []).length > 0 && !(groups || []).some((g) => g.matchedMustCities.length > 0);

  return (
    <div className="pp-fulltrip-modal-body">
      {formCollapsed && groups !== null ? (
        <div className="pp-fulltrip-summary">
          <span className="pp-fulltrip-summary-text">
            🔍 {[
              searchedNbDays != null
                ? t('fullTripSuggestions.summaryDays', { count: searchedNbDays })
                : t('fullTripSuggestions.summaryAnyDuration'),
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
          <p className="pp-fulltrip-optional-banner">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/></svg>
            {t('tripSuggestionsModal.filtersOptionalHint')}
          </p>
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
                      <button type="button" className="pp-fulltrip-mustcity-clear" onClick={() => removeMustCity(city)} title={t('fullTripSuggestions.clearMustCityTitle')}>✕</button>
                    </span>
                  ))}
                  {pickingCity ? (
                    <div className="pp-fulltrip-mustcity-input">
                      <CitySearchInput onSelect={addMustCity} onManual={addMustCity} placeholder={t('city.searchPlaceholderDefault')} autoFocus />
                      <button className="pp-btn pp-btn--ghost pp-btn--sm" onClick={() => setPickingCity(false)}>{t('common:actions.cancel')}</button>
                    </div>
                  ) : (
                    <>
                      <button type="button" className="pp-fulltrip-mustcity-add" onClick={() => setPickingCity(true)}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
                        {t('fullTripSuggestions.addMustCityButton').replace(/^\+\s*/, '')}
                      </button>
                      {mustCities.length === 0 && <span className="pp-fulltrip-fieldbox-hint">{t('fullTripSuggestions.mustCityHint')}</span>}
                    </>
                  )}
                </div>
              </div>

              <div className="pp-fulltrip-fieldbox">
                <CriteriaFilterChips selected={criteria} onToggle={handleToggleCriterion} />
              </div>
            </div>

            <button className="pp-fulltrip-search-btn" onClick={async () => { await runSearch(); setFormCollapsed(true); }} disabled={searching}>
              {searching ? <span className="pp-search-busy" /> : (
                <>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                  {t('fullTripSuggestions.searchButton')}
                </>
              )}
            </button>
          </div>
        </>
      )}

      {groups !== null && !searching && (
        groups.length === 0 ? (
          <div className="pp-fulltrip-empty" ref={resultsRef}>
            <span className="pp-fulltrip-empty-icon">🗺️</span>
            <p>{searchedNbDays != null ? t('fullTripSuggestions.emptyText', { days: searchedNbDays }) : t('fullTripSuggestions.emptyTextAnyDuration')}</p>
            {unresolvedMustCities.map((city) => (<p key={city} className="pp-fulltrip-empty-sub">{t('fullTripSuggestions.mustCityNotFound', { city })}</p>))}
          </div>
        ) : (
          <div className="pp-fulltrip-results" ref={resultsRef}>
            <p className="pp-trip-suggestions-disclaimer">{t('tripSuggestions.disclaimer')}</p>
            {unresolvedMustCities.map((city) => (<p key={city} className="pp-fulltrip-notice">{t('fullTripSuggestions.mustCityNotFound', { city })}</p>))}
            {noneMatchesMustCity && <p className="pp-fulltrip-notice">{t('fullTripSuggestions.noneWithMustCity', { city: searchedMustCities.join(', ') })}</p>}
            {groups.map((group) => (
              <div key={group.id} className="pp-fulltrip-card">
                <div className="pp-fulltrip-card-header">
                  <span className="pp-fulltrip-days-badge">📅 {t('fullTripSuggestions.totalDays', { count: group.totalDays })}</span>
                  {/* Nombre de villes TOUJOURS visible ici, hors de la photo — la
                      chaîne en surimpression défile sur une seule ligne (voir plus
                      bas) et rien n'indiquait qu'il y avait plus de villes à voir
                      sans repérer que "2j + 2j" ne totalisait pas la durée
                      affichée : ce badge donne le compte total d'un coup d'œil,
                      sans dépendre de faire défiler quoi que ce soit. */}
                  {group.cities.length > 1 && (
                    <span className="pp-fulltrip-days-badge">🏙 {t('destination.citiesCount', { count: group.cities.length })}</span>
                  )}
                  <span className="pp-trip-suggestions-uses-badge">🔥 {t('tripSuggestions.usesCount', { count: group.usesCount })}</span>
                  {group.matchedMustCities.length > 0 && (
                    <span className="pp-fulltrip-mustcity-badge">✓ {t('fullTripSuggestions.containsCity', { city: group.matchedMustCities.join(', ') })}</span>
                  )}
                </div>

                <CriteriaIndicators templateCriteria={group.criteria} selectedCriteria={criteria} />

                {group.isEditorial && (
                  <div className="pp-editorial-notice">
                    <span className="pp-editorial-notice-icon" aria-hidden="true">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
                    </span>
                    <span className="pp-editorial-notice-texts">
                      <span className="pp-editorial-notice-title">{t('tripSuggestions.editorialNoticeTitle')}</span>
                      <span className="pp-editorial-notice-text">{t('tripSuggestions.editorialNoticeText')}</span>
                    </span>
                  </div>
                )}

                {/* Hero : photo de la 1re ville (habillage neutre si aucune),
                    chaîne d'itinéraire en surimpression — SUR UNE SEULE LIGNE
                    qui défile horizontalement (jamais de retour à la ligne) :
                    un itinéraire à 6 villes et plus provoquait des
                    chevauchements et des flèches orphelines en fin de ligne
                    dès qu'on repassait à plusieurs lignes (voir capture
                    terrain 2026-07-22) — une seule ligne qui glisse, façon
                    rangée horizontale, n'a jamais ce problème quel que soit
                    le nombre de villes. Voir HeroChainScroll pour le chevron
                    d'indice, affiché seulement quand ça déborde réellement. */}
                <div className="pp-fulltrip-hero">
                  <CityMedia
                    image={getCityImage(group.cities[0]?.cityName)}
                    name={group.cities[0] ? getCityDisplayName({ id: group.cities[0].templateId, name: group.cities[0].cityName, isEditorial: group.isEditorial }) : ''}
                    variant="hero"
                  >
                    <span className="pp-citymedia-scrim pp-citymedia-scrim--strong" aria-hidden="true" />
                    <HeroChainScroll group={group} getCityDisplayName={getCityDisplayName} t={t} />
                  </CityMedia>
                </div>

                <div className="pp-fulltrip-actions-row">
                  <button type="button" className={`pp-fulltrip-expand-btn${expandedId === group.id ? ' pp-fulltrip-expand-btn--open' : ''}`} onClick={() => setExpandedId((id) => (id === group.id ? null : group.id))}>
                    {expandedId === group.id ? t('fullTripSuggestions.hideDetail') : t('fullTripSuggestions.showDetail')}
                  </button>
                  {confirmingId !== group.id && (
                    <button className="pp-btn pp-btn--primary pp-btn--sm pp-fulltrip-import-btn" onClick={() => handleImportClick(group)} disabled={importing}>
                      {importing ? <span className="pp-search-busy" /> : (
                        <>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
                          {t('fullTripSuggestions.importButton')}
                        </>
                      )}
                    </button>
                  )}
                </div>

                {expandedId === group.id && (
                  <div className="pp-fulltrip-detail">
                    {photosLoading && (
                      <p className="pp-trip-suggestions-photos-loading"><span className="pp-search-busy" /> {t('tripSuggestions.photosLoading')}</p>
                    )}
                    {group.cities.map((city) => (
                      <div key={city.templateId} className="pp-fulltrip-detail-city">
                        <div className="pp-fulltrip-detail-city-name">
                          <span className="pp-fulltrip-detail-city-icon" aria-hidden="true">🏙</span>
                          <span className="pp-fulltrip-detail-city-label">{getCityDisplayName({ id: city.templateId, name: city.cityName, isEditorial: group.isEditorial })}</span>
                          {city.dayOffset > 0 && <span className="pp-fulltrip-detail-offset">{t('fullTripSuggestions.fromDay', { day: city.dayOffset + 1 })}</span>}
                        </div>
                        {buildCityTimeline(city).map((dayGroup, gi) => (
                          dayGroup.daytrip ? (
                            <div key={`daytrip-${dayGroup.daytrip.id}-${gi}`} className="pp-fulltrip-daytrip">
                              <div className="pp-fulltrip-daytrip-name">
                                <span aria-hidden="true">🧭</span>
                                {dayGroup.daytrip.cityName}
                                <span className="pp-fulltrip-daytrip-tag">{t('daytrip.badge')}</span>
                              </div>
                              {dayGroup.entries.map((e) => (
                                <DayTimelineBlock key={e.dayNumber} day={e.day} dayNumber={e.dayNumber} getActivityName={getActivityName} getActivityImage={getActivityImage} />
                              ))}
                            </div>
                          ) : (
                            <Fragment key={`base-${gi}`}>
                              {dayGroup.entries.map((e) => (
                                <DayTimelineBlock key={e.dayNumber} day={e.day} dayNumber={e.dayNumber} getActivityName={getActivityName} getActivityImage={getActivityImage} />
                              ))}
                            </Fragment>
                          )
                        ))}
                      </div>
                    ))}
                  </div>
                )}

                {confirmingId === group.id && (
                  <div className="pp-trip-suggestions-confirm">
                    {dayMismatchFor(group) !== 0 && (
                      <p className="pp-fulltrip-notice">
                        {dayMismatchFor(group) > 0
                          ? t('fullTripSuggestions.confirmMoreDaysText', { count: dayMismatchFor(group) })
                          : t('fullTripSuggestions.confirmFewerDaysText', { count: -dayMismatchFor(group) })}
                      </p>
                    )}
                    {baseCitiesCount > 0 && (
                      <p className="pp-fulltrip-notice pp-fulltrip-notice--danger">⚠️ {t('fullTripSuggestions.confirmReplaceText', { count: baseCitiesCount })}</p>
                    )}
                    {!hasAnyDates && <p className="pp-fulltrip-notice">🗓️ {t('fullTripSuggestions.confirmNoDatesText')}</p>}
                    <div className="pp-modal-actions">
                      <button className="pp-btn pp-btn--ghost pp-btn--sm" onClick={() => setConfirmingId(null)} disabled={importing}>{t('common:actions.cancel')}</button>
                      <button className="pp-btn pp-btn--primary pp-btn--sm" onClick={() => requestDiscardCart(() => runImport(group))} disabled={importing}>
                        {importing ? <span className="pp-search-busy" /> : (baseCitiesCount > 0 ? t('fullTripSuggestions.confirmReplaceButton') : t('fullTripSuggestions.confirmImportButton'))}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
            {hasMore && (
              <button type="button" className="pp-fulltrip-loadmore-btn" onClick={loadMore} disabled={loadingMore}>
                {loadingMore ? <span className="pp-search-busy" /> : t('fullTripSuggestions.loadMoreButton')}
              </button>
            )}
          </div>
        )
      )}
    </div>
  );
}

// ─── Composant principal ───────────────────────────────────────────────────
export default function TripSuggestionsModal({
  dest, tripId, baseCitiesCount, activities, hasAnyDates, onAddCity, onClose, onImported,
  initialTab = 'villes',
}) {
  const { t } = useTranslation();
  const toast = useToast();
  const [tab, setTab] = useState(initialTab);
  // Panier soulevé au niveau de la modale (pas de CitiesTab) : la barre panier
  // doit être un vrai pied de modale fixe, rendu ICI en dehors du corps
  // scrollable, voir 5a du cahier des charges.
  const [cart, setCart] = useState({}); // { [cityKey]: { cityName, templateId, nbDays, existingCityId } }
  const [importing, setImporting] = useState(false);

  const cartEntries = Object.entries(cart);
  const cartCount = cartEntries.length;

  // Le panier ne vit que dans cette modale (state local, jamais persisté) —
  // sans ce garde-fou, changer d'onglet vers "Planning complet" et y importer
  // referme la fenêtre (onImported force onClose) et efface silencieusement
  // les villes déjà choisies dans l'onglet "Villes", sans avertissement.
  // `pendingDiscardAction` porte l'action à exécuter si l'utilisateur confirme
  // — un dialogue intégré à la modale plutôt qu'un window.confirm() natif
  // (moche, hors charte, jamais utilisé ailleurs dans l'app).
  const [pendingDiscardAction, setPendingDiscardAction] = useState(null);
  const requestDiscardCart = (onConfirm) => {
    if (cartCount === 0) { onConfirm(); return; }
    setPendingDiscardAction(() => onConfirm);
  };
  const confirmDiscard = () => { pendingDiscardAction?.(); setPendingDiscardAction(null); };
  const cancelDiscard = () => setPendingDiscardAction(null);

  const handleClose = () => requestDiscardCart(() => onClose?.());

  // Échap ferme la modale (comme les modales existantes du projet), en plus
  // du clic sur le scrim et du bouton ✕ ci-dessous — sauf si le dialogue de
  // confirmation est déjà ouvert, où Échap doit l'annuler lui d'abord.
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key !== 'Escape') return;
      if (pendingDiscardAction) cancelDiscard();
      else handleClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart, pendingDiscardAction]);

  // `existingCityId` résolu par CitiesTab (null si la ville n'est pas encore
  // dans le voyage) — renvoie la cityKey utilisée, pour que CitiesTab puisse
  // afficher l'écran "ajouté au panier" juste après.
  // `displayName` (nom traduit dans la langue du visiteur, ex. "Beijing")
  // devient le nom stocké pour cette entrée du panier — donc aussi celui
  // réellement écrit en base à l'import (voir handleImportCart, onAddCity) :
  // sans ça, la ville créée portait toujours le nom brut tapé par l'auteur du
  // planning (souvent en français, ex. "Pékin"), différent de ce que le
  // visiteur venait de voir et choisir à l'écran. `cityName` (brut) reste
  // utilisé pour la clé de dédoublonnage du panier (cityKeyFor), stable
  // quelle que soit la langue d'affichage.
  const handleChooseTemplate = (cityName, template, existingCityId, displayName) => {
    const cityKey = cityKeyFor(cityName);
    setCart((prev) => ({
      ...prev,
      [cityKey]: { cityName: displayName || cityName, templateId: template.id, nbDays: template.nbDays, existingCityId: existingCityId || null },
    }));
    return cityKey;
  };

  // Retire une ville du panier sans quitter la fenêtre (croix sur la carte,
  // voir CitiesTab) — auparavant la seule façon de "changer d'avis" sur une
  // ville déjà choisie était de fermer TOUTE la popup, ce qui perdait aussi
  // les autres villes déjà sélectionnées. `cart` vit ici (pas dans CitiesTab),
  // donc ce retrait est immédiatement visible dans les DEUX onglets et
  // survit à un aller-retour entre eux, comme un ajout au panier.
  const handleRemoveFromCart = (cityKey) => {
    setCart((prev) => {
      const next = { ...prev };
      delete next[cityKey];
      return next;
    });
  };

  const handleImportCart = async () => {
    setImporting(true);
    // Import séquentiel (pas Promise.all) : plusieurs imports concurrents sur
    // des villes différentes du MÊME voyage écrivent tous dans trip_cities /
    // trip_activities via des upserts distincts par ville — rien ne garantit
    // que ces écritures restent indépendantes côté serveur (voir
    // api/trip-templates.js action 'import'), on reste donc prudent plutôt
    // que de risquer des écritures concurrentes sur le même voyage. Même
    // raisonnement pour la création préalable de ville (onAddCity) : elle
    // doit être terminée AVANT l'import qui la remplit.
    //
    // `failedCities` : sans ça, un échec (session expirée, réseau, ville non
    // créée) passait totalement inaperçu — la fenêtre se fermait comme en
    // cas de succès complet, laissant croire à un import réussi alors que
    // rien n'avait été écrit pour cette ville.
    const failedCities = [];
    for (const entry of Object.values(cart)) {
      let cityId = entry.existingCityId;
      if (!cityId) {
        const city = await onAddCity(tripId, dest.id, entry.cityName);
        cityId = city?.id;
      }
      if (!cityId) { failedCities.push(entry.cityName); continue; } // création de ville échouée : on n'interrompt pas les imports suivants
      const result = await callModeration('trip-templates', { action: 'import', tripId, cityId, templateId: entry.templateId });
      if (!result.ok) failedCities.push(entry.cityName);
    }
    setImporting(false);
    if (failedCities.length > 0) {
      toast?.error(t('tripSuggestions.importCartError', { cities: failedCities.join(', ') }));
    }
    onClose?.();
    onImported?.();
  };

  // Changer d'onglet NE touche PAS au panier — `cart` vit dans CE composant
  // (TripSuggestionsModal), pas dans CitiesTab, donc il survit tel quel au
  // changement d'onglet. Aucune confirmation à demander ici (il y en a eu
  // une par erreur avant cette correction) : seule une action qui ferme
  // vraiment la fenêtre (✕, Échap, clic extérieur, ou un import réussi
  // depuis "Planning complet" — voir onImported plus bas) perd le panier
  // pour de bon, et passe donc par requestDiscardCart.
  const handleTabSwitch = (nextTab) => setTab(nextTab);

  return (
    <div className="pp-modal-overlay" onClick={(e) => e.target === e.currentTarget && handleClose()}>
      <div className="pp-modal pp-suggestions-modal">
        <div className="pp-modal-header">
          <h3 className="pp-modal-title">{t('tripSuggestionsModal.title', { country: dest.country_name })}</h3>
          <button className="pp-icon-btn" onClick={handleClose}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
          </button>
        </div>

        <div className="pp-modal-tabs">
          <button type="button" className={`pp-modal-tab${tab === 'villes' ? ' active' : ''}`} onClick={() => handleTabSwitch('villes')}>
            {t('tripSuggestionsModal.citiesTab')}
          </button>
          <button type="button" className={`pp-modal-tab${tab === 'planning' ? ' active' : ''}`} onClick={() => handleTabSwitch('planning')}>
            {t('tripSuggestionsModal.fullTripTab')}
          </button>
        </div>

        {/* Corps scrollable — hauteur contrainte (voir .pp-modal-body), la
            barre panier ci-dessous vit EN DEHORS, comme un vrai pied de
            modale fixe (5a). Les bandeaux "filtres facultatifs"/"disclaimer"
            ne vivent plus ici : affichés une fois pour toute la fenêtre, ils
            apparaissaient même sur des écrans sans rapport (ex. la
            confirmation panier) — chacun vit désormais au plus près de ce
            qu'il décrit, voir CitiesTab/CityTemplatesBrowser/FullTripTab. */}
        <div className="pp-modal-body pp-suggestions-modal-body">
          {tab === 'villes' ? (
            <CitiesTab
              dest={dest}
              activities={activities}
              cart={cart}
              onChooseTemplate={handleChooseTemplate}
              onRemoveFromCart={handleRemoveFromCart}
              importing={importing}
              onImportCart={handleImportCart}
            />
          ) : (
            <FullTripTab
              dest={dest}
              tripId={tripId}
              baseCitiesCount={baseCitiesCount}
              hasAnyDates={hasAnyDates}
              // L'avertissement "panier perdu" se pose maintenant AVANT
              // l'import (voir handleImportClick/requestDiscardCart dans
              // FullTripTab) — une fois ici, l'import a déjà réussi, il n'y
              // a plus lieu de redemander : fermer et rafraîchir sans condition.
              onImported={() => { onClose?.(); onImported?.(); }}
              requestDiscardCart={requestDiscardCart}
            />
          )}
        </div>

        {/* Pied de modale FIXE (non scrollable), affiché seulement sur
            l'onglet "Villes" — voir 5a du cahier des charges. */}
        {tab === 'villes' && (
          <div className="pp-modal-footer pp-trip-suggestions-cart-bar">
            <span className="pp-trip-suggestions-cart-summary">
              {cartCount === 0
                ? t('tripSuggestions.cartEmpty')
                : t('tripSuggestions.cartSummary', {
                  count: cartCount,
                  list: cartEntries.map(([, v]) => `${v.cityName} (${v.nbDays}j)`).join(', '),
                })}
            </span>
            <button type="button" className="pp-btn pp-btn--primary pp-btn--sm" onClick={handleImportCart} disabled={cartCount === 0 || importing}>
              {importing ? <span className="pp-search-busy" /> : t('tripSuggestions.finishImportButton')}
            </button>
          </div>
        )}

        {/* Dialogue de confirmation "panier perdu" — intégré à la charte de
            l'app plutôt qu'un window.confirm() natif. Empilé au-dessus du
            reste de CETTE modale (scrim propre à lui, z-index supérieur),
            jamais rendu ailleurs. */}
        {pendingDiscardAction && (
          <div className="pp-modal-overlay pp-discard-confirm-overlay" onClick={(e) => e.target === e.currentTarget && cancelDiscard()}>
            <div className="pp-modal pp-discard-confirm-modal">
              <p className="pp-discard-confirm-text">
                {t('tripSuggestions.confirmLoseCart', { list: cartEntries.map(([, v]) => v.cityName).join(', ') })}
              </p>
              <div className="pp-modal-actions">
                <button type="button" className="pp-btn pp-btn--ghost pp-btn--sm" onClick={cancelDiscard}>
                  {t('common:actions.cancel')}
                </button>
                <button type="button" className="pp-btn pp-btn--primary pp-btn--sm" onClick={confirmDiscard}>
                  {t('tripSuggestions.confirmLoseCartButton')}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
