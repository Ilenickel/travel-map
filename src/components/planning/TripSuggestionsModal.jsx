import { Fragment, useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { callModeration } from '../../lib/moderation';
import { COUNTRIES } from '../../data/index';
import { countryAlpha2FromEmoji, formatDuration, TRIP_CRITERIA } from '../../lib/planningUtils';
import { CriteriaFilterChips, CriteriaIndicators } from './SuggestionCriteria';
import { useActivityNameTranslations } from '../../lib/translateContent';
import { useActivityPhoto } from '../../hooks/useActivityPhoto';
import ActivityPhotoIndicator from './ActivityPhotoIndicator';
import PlaceSuggestionsButton from './PlaceSuggestionsButton';
import DaysStepper from './DaysStepper';
import CitySearchInput from './CitySearchInput';

// ─── Fenêtre de suggestions unifiée ───────────────────────────────────────
// Fusionne les anciens TripPlanSuggestionsButton.jsx (suggestions de planning
// par ville) et TripFullSuggestions.jsx (planning complet du pays) en UNE
// SEULE vraie popup modale (recouvrant tout l'écran), avec deux onglets. Le
// menu "Manuel / Suggestions de voyages" de DestinationBlock disparaît : la
// vue manuelle (liste des villes) reste toujours affichée, ce bouton-ci ouvre
// juste cette fenêtre par-dessus, sans jamais rien modifier tant qu'un import
// n'a pas été explicitement confirmé.

const SLOT_ICON = { matin: '🌅', 'apres-midi': '☀️', soir: '🌆' };
const SLOT_ORDER = ['matin', 'apres-midi', 'soir'];

function groupBySlot(activities) {
  return SLOT_ORDER
    .map((slot) => ({ slot, items: activities.filter((a) => a.time_slot === slot) }))
    .filter((g) => g.items.length > 0);
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
function CityTemplatesBrowser({
  dest, city, nbDays, criteria, tripId, activities, existingActivityNames,
  cartEntry, onChooseTemplate, onAddActivity, onBack,
}) {
  const { t, i18n } = useTranslation();
  const [templates, setTemplates] = useState(null);
  const [index, setIndex] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const countryAlpha2 = countryAlpha2FromEmoji(COUNTRIES[dest.country_code]?.emoji);
  const hasExistingActivities = activities.some((a) => a.city_id === city.id);

  const fetchTemplates = async () => {
    setTemplates(null);
    const result = await callModeration('trip-templates', {
      action: 'suggest', countryCode: dest.country_code, cityName: city.name, countryAlpha2, plannedDays: nbDays, criteria,
    });
    setTemplates(result.ok ? (result.templates || []) : []);
    setHasMore(result.ok ? !!result.hasMore : false);
    setIndex(0);
  };

  useEffect(() => {
    fetchTemplates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city.id, nbDays, criteria]);

  const loadMore = async () => {
    setLoadingMore(true);
    const result = await callModeration('trip-templates', {
      action: 'suggest', countryCode: dest.country_code, cityName: city.name, countryAlpha2, plannedDays: nbDays, criteria, offset: templates.length,
    });
    setLoadingMore(false);
    if (!result.ok) return 0;
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
  const getActivityName = useActivityNameTranslations(collectTemplateActivities(current, city.name), i18n.language);
  const { getActivityImage, loading: photosLoading } = useActivityPhoto(collectTemplateActivities(current, city.name), dest.country_code, i18n.language);

  return (
    <div className="pp-trip-suggestions-citybrowser">
      <button type="button" className="pp-suggestions-back-btn" onClick={onBack}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"/></svg>
        {t('tripSuggestions.backToCities')}
      </button>

      <h4 className="pp-trip-suggestions-city-heading">{t('tripSuggestions.modalTitle', { city: city.name })}</h4>

      {/* Lieux individuels conseillés (communautaires + éditoriaux) : logique
          inchangée de l'ancien bouton dédié (PlaceSuggestionsButton), réutilisée
          telle quelle plutôt que ré-écrite — complémentaire des plannings
          complets ci-dessous (ajout direct d'un seul lieu, pas d'une journée). */}
      <div className="pp-trip-suggestions-places-row">
        <PlaceSuggestionsButton
          cityName={city.name}
          countryCode={dest.country_code}
          countryName={dest.country_name}
          tripId={tripId}
          cityId={city.id}
          existingActivityNames={existingActivityNames}
          onAddActivity={onAddActivity}
        />
      </div>

      {templates === null ? (
        <p className="pp-trip-suggestions-photos-loading"><span className="pp-search-busy" /> {t('common:loading')}</p>
      ) : templates.length === 0 ? (
        <div className="pp-trip-suggestions-filtered-empty">
          <p>{t('tripSuggestions.filteredEmptyText')}</p>
        </div>
      ) : (
        <>
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

          {hasExistingActivities && (
            <p className="pp-fulltrip-notice">{t('tripSuggestions.confirmReplaceText')}</p>
          )}

          <div className="pp-modal-actions">
            <button
              type="button"
              className={`pp-btn pp-btn--sm${cartEntry?.templateId === current.id ? ' pp-btn--primary' : ' pp-btn--ghost'}`}
              onClick={() => onChooseTemplate(city, current)}
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
function CitiesTab({ dest, tripId, baseCities, activities, onAddActivity, onImportCart }) {
  const { t } = useTranslation();
  const [nbDays, setNbDays] = useState(null);
  const [criteria, setCriteria] = useState([]);
  const [selectedCityId, setSelectedCityId] = useState(null);
  const [cart, setCart] = useState({}); // { [cityId]: { templateId, nbDays, cityName } }
  const [justChosenCityId, setJustChosenCityId] = useState(null);
  const [importing, setImporting] = useState(false);

  const toggleCriterion = (key) => {
    setCriteria((prev) => prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]);
  };

  const selectedCity = baseCities.find((c) => c.id === selectedCityId) || null;

  const handleChooseTemplate = (city, template) => {
    setCart((prev) => ({ ...prev, [city.id]: { templateId: template.id, nbDays: template.nbDays, cityName: city.name } }));
    setJustChosenCityId(city.id);
    setSelectedCityId(null);
  };

  const cartEntries = Object.entries(cart);
  const cartCount = cartEntries.length;

  const runImportCart = async () => {
    setImporting(true);
    await onImportCart(cart);
    setImporting(false);
  };

  if (justChosenCityId && !selectedCityId) {
    const cityName = cart[justChosenCityId]?.cityName;
    return (
      <div className="pp-trip-suggestions-confirm pp-trip-suggestions-confirm--cart">
        <p>{t('tripSuggestions.addedToCartText', { city: cityName })}</p>
        <div className="pp-modal-actions">
          <button className="pp-btn pp-btn--ghost pp-btn--sm" onClick={() => setJustChosenCityId(null)} disabled={importing}>
            {t('tripSuggestions.continueOtherCitiesButton')}
          </button>
          <button className="pp-btn pp-btn--primary pp-btn--sm" onClick={runImportCart} disabled={importing}>
            {importing ? <span className="pp-search-busy" /> : t('tripSuggestions.importNowButton')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pp-trip-suggestions-cities-tab">
      {selectedCity ? (
        <CityTemplatesBrowser
          dest={dest}
          city={selectedCity}
          nbDays={nbDays}
          criteria={criteria}
          tripId={tripId}
          activities={activities}
          existingActivityNames={activities.filter((a) => a.city_id === selectedCity.id).map((a) => a.name)}
          cartEntry={cart[selectedCity.id]}
          onChooseTemplate={handleChooseTemplate}
          onAddActivity={onAddActivity}
          onBack={() => setSelectedCityId(null)}
        />
      ) : (
        <>
          <div className="pp-fulltrip-fieldbox">
            <span className="pp-fulltrip-fieldbox-label">📅 {t('fullTripSuggestions.nbDaysLabel')}</span>
            <div className="pp-fulltrip-fieldbox-body">
              <DaysStepper value={nbDays} onChange={setNbDays} placeholder={t('city.plannedDaysPlaceholder')} />
            </div>
          </div>
          <CriteriaFilterChips selected={criteria} onToggle={toggleCriterion} />

          <ul className="pp-trip-suggestions-city-list">
            {baseCities.map((city) => (
              <li key={city.id}>
                <button type="button" className="pp-trip-suggestions-city-item" onClick={() => setSelectedCityId(city.id)}>
                  <span className="pp-trip-suggestions-city-item-name">{city.name}</span>
                  {cart[city.id] && <span className="pp-trip-suggestions-city-item-check">✓ {t('tripSuggestions.chosenLabel')}</span>}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" opacity=".5"><path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/></svg>
                </button>
              </li>
            ))}
            {baseCities.length === 0 && (
              <li className="pp-trip-suggestions-city-list-empty">{t('tripSuggestions.noCitiesYet')}</li>
            )}
          </ul>
        </>
      )}

      {/* Barre panier — visible en permanence sur cet onglet */}
      <div className="pp-trip-suggestions-cart-bar">
        <span className="pp-trip-suggestions-cart-summary">
          {cartCount === 0
            ? t('tripSuggestions.cartEmpty')
            : t('tripSuggestions.cartSummary', {
              count: cartCount,
              list: cartEntries.map(([, v]) => `${v.cityName} (${v.nbDays}j)`).join(', '),
            })}
        </span>
        <button type="button" className="pp-btn pp-btn--primary pp-btn--sm" onClick={runImportCart} disabled={cartCount === 0 || importing}>
          {importing ? <span className="pp-search-busy" /> : t('tripSuggestions.finishImportButton')}
        </button>
      </div>
    </div>
  );
}

// ─── Onglet "Planning complet" — reprend TripFullSuggestions.jsx à l'identique ──
function FullTripTab({ dest, tripId, baseCitiesCount, hasAnyDates, onImported }) {
  const { t, i18n } = useTranslation();
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

  const expandedGroup = (groups || []).find((g) => g.id === expandedId) || null;
  const collectGroupActivities = (group) => (group?.cities || []).flatMap((city) => [
    ...city.days.flatMap((d) => d.activities.map((a) => ({ ...a, _cityName: city.name }))),
    ...city.daytrips.flatMap((dt) => dt.days.flatMap((d) => d.activities.map((a) => ({ ...a, _cityName: dt.cityName })))),
  ]);
  const getActivityName = useActivityNameTranslations(collectGroupActivities(expandedGroup), i18n.language);
  const { getActivityImage, loading: photosLoading } = useActivityPhoto(collectGroupActivities(expandedGroup), dest.country_code, i18n.language);

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
    setGroups(result.ok ? (result.groups || []) : []);
    setHasMore(result.ok ? !!result.hasMore : false);
    setSearchedNbDays(params.nbDays);
    setSearchedMustCities(params.mustCities);
    setMustCitiesResolved(result.ok ? (result.mustCitiesResolved || []) : []);
    setExpandedId(null);
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
    if (!result.ok) return;
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
    const result = await callModeration('trip-templates', {
      action: 'import-trip', tripId, destinationId: dest.id, groupId: group.id,
    });
    setImporting(false);
    setConfirmingId(null);
    if (result.ok) onImported?.();
  };

  const dayMismatchFor = (group) =>
    searchedNbDays != null && group.totalDays !== searchedNbDays
      ? group.totalDays - searchedNbDays
      : 0;

  const handleImportClick = (group) => {
    if (baseCitiesCount > 0 || dayMismatchFor(group) !== 0 || !hasAnyDates) setConfirmingId(group.id);
    else runImport(group);
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
          <div className="pp-fulltrip-empty">
            <span className="pp-fulltrip-empty-icon">🗺️</span>
            <p>{searchedNbDays != null ? t('fullTripSuggestions.emptyText', { days: searchedNbDays }) : t('fullTripSuggestions.emptyTextAnyDuration')}</p>
            {unresolvedMustCities.map((city) => (<p key={city} className="pp-fulltrip-empty-sub">{t('fullTripSuggestions.mustCityNotFound', { city })}</p>))}
          </div>
        ) : (
          <div className="pp-fulltrip-results">
            <p className="pp-trip-suggestions-disclaimer">{t('tripSuggestions.disclaimer')}</p>
            {unresolvedMustCities.map((city) => (<p key={city} className="pp-fulltrip-notice">{t('fullTripSuggestions.mustCityNotFound', { city })}</p>))}
            {noneMatchesMustCity && <p className="pp-fulltrip-notice">{t('fullTripSuggestions.noneWithMustCity', { city: searchedMustCities.join(', ') })}</p>}
            {groups.map((group) => (
              <div key={group.id} className="pp-fulltrip-card">
                <div className="pp-fulltrip-card-header">
                  <span className="pp-fulltrip-days-badge">📅 {t('fullTripSuggestions.totalDays', { count: group.totalDays })}</span>
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

                <button type="button" className={`pp-fulltrip-expand-btn${expandedId === group.id ? ' pp-fulltrip-expand-btn--open' : ''}`} onClick={() => setExpandedId((id) => (id === group.id ? null : group.id))}>
                  {expandedId === group.id ? t('fullTripSuggestions.hideDetail') : t('fullTripSuggestions.showDetail')}
                </button>

                {expandedId === group.id && (
                  <div className="pp-fulltrip-detail">
                    {photosLoading && (
                      <p className="pp-trip-suggestions-photos-loading"><span className="pp-search-busy" /> {t('tripSuggestions.photosLoading')}</p>
                    )}
                    {group.cities.map((city) => (
                      <div key={city.templateId} className="pp-fulltrip-detail-city">
                        <div className="pp-fulltrip-detail-city-name">
                          <span className="pp-fulltrip-detail-city-icon" aria-hidden="true">🏙</span>
                          <span className="pp-fulltrip-detail-city-label">{city.cityName}</span>
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

                {confirmingId === group.id ? (
                  <div className="pp-trip-suggestions-confirm">
                    {dayMismatchFor(group) !== 0 && (
                      <p className="pp-fulltrip-notice">
                        {dayMismatchFor(group) > 0
                          ? t('fullTripSuggestions.confirmMoreDaysText', { count: dayMismatchFor(group) })
                          : t('fullTripSuggestions.confirmFewerDaysText', { count: -dayMismatchFor(group) })}
                      </p>
                    )}
                    {baseCitiesCount > 0 && <p>{t('fullTripSuggestions.confirmAppendText', { count: baseCitiesCount })}</p>}
                    {!hasAnyDates && <p className="pp-fulltrip-notice">🗓️ {t('fullTripSuggestions.confirmNoDatesText')}</p>}
                    <div className="pp-modal-actions">
                      <button className="pp-btn pp-btn--ghost pp-btn--sm" onClick={() => setConfirmingId(null)} disabled={importing}>{t('common:actions.cancel')}</button>
                      <button className="pp-btn pp-btn--primary pp-btn--sm" onClick={() => runImport(group)} disabled={importing}>
                        {importing ? <span className="pp-search-busy" /> : t('fullTripSuggestions.confirmAppendButton')}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="pp-fulltrip-card-actions">
                    <button className="pp-btn pp-btn--primary pp-btn--sm" onClick={() => handleImportClick(group)} disabled={importing}>
                      {importing ? <span className="pp-search-busy" /> : t('fullTripSuggestions.importButton')}
                    </button>
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
  dest, tripId, baseCities, baseCitiesCount, activities, hasAnyDates, onAddActivity, onClose, onImported,
}) {
  const { t } = useTranslation();
  const [tab, setTab] = useState('villes');

  // Échap ferme la modale (comme les modales existantes du projet), en plus
  // du clic sur le scrim et du bouton ✕ ci-dessous.
  useEffect(() => {
    const handleEscape = (e) => { if (e.key === 'Escape') onClose?.(); };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const handleImportCart = async (cart) => {
    // Import séquentiel (pas Promise.all) : plusieurs imports concurrents sur
    // des villes différentes du MÊME voyage écrivent tous dans trip_cities /
    // trip_activities via des upserts distincts par ville — rien ne garantit
    // que ces écritures restent indépendantes côté serveur (voir
    // api/trip-templates.js action 'import'), on reste donc prudent plutôt
    // que de risquer des écritures concurrentes sur le même voyage.
    for (const [cityId, entry] of Object.entries(cart)) {
      await callModeration('trip-templates', { action: 'import', tripId, cityId, templateId: entry.templateId });
    }
    onClose?.();
    onImported?.();
  };

  return (
    <div className="pp-modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose?.()}>
      <div className="pp-modal pp-suggestions-modal">
        <div className="pp-modal-header">
          <h3 className="pp-modal-title">{t('tripSuggestionsModal.title', { country: dest.country_name })}</h3>
          <button className="pp-icon-btn" onClick={onClose}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
          </button>
        </div>

        <div className="pp-modal-tabs">
          <button type="button" className={`pp-modal-tab${tab === 'villes' ? ' active' : ''}`} onClick={() => setTab('villes')}>
            {t('tripSuggestionsModal.citiesTab')}
          </button>
          <button type="button" className={`pp-modal-tab${tab === 'planning' ? ' active' : ''}`} onClick={() => setTab('planning')}>
            {t('tripSuggestionsModal.fullTripTab')}
          </button>
        </div>

        <div className="pp-modal-body pp-suggestions-modal-body">
          <p className="pp-fulltrip-optional-banner">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/></svg>
            {t('tripSuggestionsModal.filtersOptionalHint')}
          </p>
          <p className="pp-trip-suggestions-disclaimer">{t('tripSuggestions.disclaimer')}</p>

          {tab === 'villes' ? (
            <CitiesTab
              dest={dest}
              tripId={tripId}
              baseCities={baseCities}
              activities={activities}
              onAddActivity={onAddActivity}
              onImportCart={handleImportCart}
            />
          ) : (
            <FullTripTab
              dest={dest}
              tripId={tripId}
              baseCitiesCount={baseCitiesCount}
              hasAnyDates={hasAnyDates}
              onImported={() => { onClose?.(); onImported?.(); }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
