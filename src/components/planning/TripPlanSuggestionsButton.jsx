import { useState, useEffect, useRef, Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { callModeration } from '../../lib/moderation';
import { COUNTRIES } from '../../data/index';
import { countryAlpha2FromEmoji, formatDuration } from '../../lib/planningUtils';
import { CriteriaFilterChips, CriteriaIndicators } from './TripFullSuggestions';
import { useActivityNameTranslations } from '../../lib/translateContent';
import { useActivityWikiImages } from '../../hooks/useActivityWikiImages';
import ActivityPhotoIndicator from './ActivityPhotoIndicator';

// 3 créneaux seulement — alignés sur les 3 créneaux réels du calendrier
// (DayView.jsx SLOTS : matin/apres-midi/soir, 0-12/12-18/18-24), pas 4 : un
// "nuit" séparé ici ferait mentir l'aperçu par rapport à où l'activité
// atterrit réellement une fois importée (voir api/trip-templates.js).
const SLOT_ICON = { matin: '🌅', 'apres-midi': '☀️', soir: '🌆' };
const SLOT_ORDER = ['matin', 'apres-midi', 'soir'];

// Groupe les activités d'un jour par créneau (ordre fixe matin → soir),
// pour que la répartition de la journée reste lisible — un simple icône par
// ligne, sans en-tête de créneau, ne suffisait pas à voir la structure de
// la journée d'un coup d'œil.
function groupBySlot(activities) {
  return SLOT_ORDER
    .map((slot) => ({ slot, items: activities.filter((a) => a.time_slot === slot) }))
    .filter((g) => g.items.length > 0);
}

// Un jour du carrousel (pastille "Jour N" + timeline matin/après-midi/soir) —
// factorisé pour être réutilisé identiquement par la ville suggérée ET par
// ses excursions (voir daytrips ci-dessous), plutôt que de dupliquer le
// rendu de la timeline une 2e fois.
function DayTimelineBlock({ day, dayNumber, t, getActivityName, getActivityImage }) {
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
                  // Photo du lieu (Wikipédia/Commons, licence déjà filtrée
                  // par le hook) : icône indicatrice + aperçu grand format au
                  // survol/tap, UNIQUEMENT si résolue — jamais d'indicateur
                  // pour "le petit resto du coin".
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

// Toutes les activités du template affiché (ville + excursions), pour
// traduction en lot — même raisonnement que TripFullSuggestions : seul le
// template COURANT du carrousel est traduit, pas les autres pages chargées.
function collectTemplateActivities(template) {
  if (!template) return [];
  return [
    ...template.days.flatMap((d) => d.activities),
    ...template.daytrips.flatMap((dt) => dt.days.flatMap((d) => d.activities)),
  ];
}

// Fusionne les jours de la ville suggérée ET de ses excursions en UNE SEULE
// séquence triée par jour absolu, plutôt que d'afficher tous les jours de la
// ville puis toutes les excursions à la suite — une excursion survenant AVANT
// le dernier jour de la ville (ex. jour 5 sur un séjour de 8 jours)
// apparaissait sinon après le jour 8, dans le désordre. Les jours consécutifs
// d'une même excursion restent regroupés sous un seul en-tête.
function buildCityTimeline(template) {
  // ?? 0 : day_offset est une colonne INTEGER nullable (voir
  // planning_modele_v5.sql, sans contrainte NOT NULL) — un modèle historique
  // où elle n'aurait jamais été renseignée ne doit pas produire un tri
  // silencieusement faux (traiter un NULL comme un vrai 0 reste le repli le
  // plus sûr).
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

// Bouton "Suggestion de planning" (planning-modèle communautaire, branche
// planModel) : propose jusqu'à 5 plannings importés d'autres utilisateurs
// pour cette ville (voir api/trip-templates.js), triés par popularité.
// Le nombre de jours de la ville est FACULTATIF : sans lui, TOUS les
// plannings de la ville sont proposés (toutes durées, affichées sur chaque
// carte) — l'utilisateur regarde ce qui existe et décide en fonction combien
// de jours rester ; à l'import, la durée du planning choisi devient alors
// celle de la ville. Invisible seulement si aucun modèle ne correspond.
export default function TripPlanSuggestionsButton({
  tripId, cityId, cityName, countryCode, countryName, plannedDays,
  hasExistingActivities, onImported,
}) {
  const { t, i18n } = useTranslation();
  const [templates, setTemplates] = useState(null); // null = pas encore chargé — résultats COURANTS (filtrés par criteria)
  // Nombre de suggestions SANS filtre, figé au montage (et au changement de
  // ville/pays/durée) : décide seul si le bouton doit exister. Sans cette
  // valeur séparée de `templates`, filtrer sur un critère qu'aucun modèle ne
  // remplit ramenait `templates` à 0 pendant que le composant restait monté
  // (modale ouverte) — le early-return basé sur templates.length faisait
  // alors disparaître le bouton ET la modale entière, sans aucun message,
  // laissant l'utilisateur bloqué (aucun moyen de raviver le bouton disparu
  // sinon en rechargeant la page).
  const [baselineCount, setBaselineCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [importing, setImporting] = useState(false);
  const [confirming, setConfirming] = useState(false);
  // "Charger plus de suggestions" : d'autres pages existent au-delà des 5
  // premières (même classement, voir api/trip-templates.js paginateRanked).
  // loadingMore distinct de tout autre état "chargement" pour ne pas cacher
  // le carrousel déjà affiché pendant qu'on va chercher la page suivante.
  const [hasMore, setHasMore] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  // Filtres critères (avec enfants, en couple… voir TRIP_CRITERIA) : le tri
  // se fait côté serveur avant la limite de 5 résultats, chaque changement
  // de filtre recharge donc les suggestions.
  const [criteria, setCriteria] = useState([]);
  const countryAlpha2 = countryAlpha2FromEmoji(COUNTRIES[countryCode]?.emoji);

  const fetchTemplates = async (wantedCriteria = criteria) => {
    const result = await callModeration('trip-templates', {
      action: 'suggest', countryCode, cityName, countryAlpha2, plannedDays, criteria: wantedCriteria,
    });
    setTemplates(result.ok ? (result.templates || []) : []);
    setHasMore(result.ok ? !!result.hasMore : false);
    setIndex(0);
  };

  const handleToggleCriterion = (key) => {
    const next = criteria.includes(key) ? criteria.filter((k) => k !== key) : [...criteria, key];
    setCriteria(next);
    fetchTemplates(next);
  };

  // Charge la page suivante (5 de plus, même classement) et l'AJOUTE aux
  // suggestions déjà là — jamais un remplacement, contrairement à
  // fetchTemplates. Renvoie le nombre d'éléments effectivement ajoutés, pour
  // que l'appelant sache s'il peut avancer l'index dessus.
  const loadMore = async () => {
    setLoadingMore(true);
    const result = await callModeration('trip-templates', {
      action: 'suggest', countryCode, cityName, countryAlpha2, plannedDays, criteria, offset: templates.length,
    });
    setLoadingMore(false);
    if (!result.ok) return 0;
    const added = result.templates || [];
    setTemplates((prev) => [...(prev || []), ...added]);
    setHasMore(!!result.hasMore);
    return added.length;
  };

  // Flèche "suivant" en bout de carrousel : si d'autres suggestions existent
  // au-delà des 5 déjà chargées, charge la page suivante et avance
  // directement dessus — pas besoin de passer par un onglet dédié pour
  // continuer à défiler naturellement.
  const handleNext = async () => {
    if (index < templates.length - 1) { setIndex(index + 1); return; }
    if (!hasMore || loadingMore) return;
    const prevLen = templates.length;
    const added = await loadMore();
    if (added > 0) setIndex(prevLen);
  };
  const handlePrev = () => setIndex((i) => Math.max(0, i - 1));

  // Balayage tactile gauche/droite (mobile) : même comportement que les
  // flèches ◀▶, y compris le chargement automatique de la page suivante en
  // bout de liste (handleNext). Le seuil et la comparaison |dx| > |dy|
  // évitent de déclencher un changement de suggestion sur un simple scroll
  // vertical du contenu de la carte (elle défile elle-même en hauteur, voir
  // .pp-trip-suggestions-card) — on ne "consomme" le geste que s'il est
  // clairement horizontal.
  const touchStart = useRef(null);
  const SWIPE_THRESHOLD_PX = 40;
  const handleTouchStart = (e) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };
  const handleTouchEnd = (e) => {
    if (!touchStart.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStart.current.x;
    const dy = t.clientY - touchStart.current.y;
    touchStart.current = null;
    if (Math.abs(dx) < SWIPE_THRESHOLD_PX || Math.abs(dx) < Math.abs(dy)) return;
    if (dx < 0) handleNext();
    else handlePrev();
  };

  // Chargement discret au montage, pour connaître le nombre de suggestions
  // (bouton masqué si aucune) sans attendre un clic préalable. TOUJOURS sans
  // filtre (criteria: []), même si l'utilisateur a déjà sélectionné des
  // critères sur une précédente ouverture : c'est la référence qui décide si
  // le bouton doit exister, elle ne doit jamais dépendre d'un filtre courant.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const result = await callModeration('trip-templates', {
        action: 'suggest', countryCode, cityName, countryAlpha2, plannedDays, criteria: [],
      });
      if (cancelled) return;
      const list = result.ok ? (result.templates || []) : [];
      setTemplates(list);
      setBaselineCount(list.length);
      setHasMore(result.ok ? !!result.hasMore : false);
      setIndex(0);
    })();
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityName, countryCode, plannedDays]);

  const current = templates && templates.length > 0 ? templates[index] : null;
  const getActivityName = useActivityNameTranslations(collectTemplateActivities(current), i18n.language);
  // Photos du template COURANT du carrousel uniquement — même retenue que la
  // traduction ci-dessus : pas de résolution pour des pages jamais consultées.
  const { getActivityImage, loading: photosLoading } = useActivityWikiImages(collectTemplateActivities(current), i18n.language);

  if (baselineCount === 0) return null;

  // Recharge à chaque OUVERTURE de la popup (pas seulement au montage du
  // bouton) : sans ça, un partage/import survenu après le premier chargement
  // (ex. l'ajout d'une excursion, un re-partage automatique) restait invisible
  // tant que le composant ne se démontait pas — fermer/rouvrir la popup
  // donnait l'impression à tort d'un rafraîchissement.
  const handleOpen = () => {
    setOpen(true);
    fetchTemplates();
  };

  const runImport = async () => {
    setImporting(true);
    const result = await callModeration('trip-templates', { action: 'import', tripId, cityId, templateId: current.id });
    setImporting(false);
    setConfirming(false);
    if (result.ok) {
      setOpen(false);
      onImported?.();
    }
  };

  const handleImportClick = () => {
    if (hasExistingActivities) setConfirming(true);
    else runImport();
  };

  const closeModal = () => { setOpen(false); setConfirming(false); };

  return (
    <div className="pp-trip-suggestions">
      <button className="pp-place-suggestions-btn" onClick={handleOpen}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
        </svg>
        {t('tripSuggestions.button', { count: baselineCount })}
      </button>

      {open && (
        <div className="pp-modal-overlay" onClick={e => e.target === e.currentTarget && closeModal()}>
          <div className="pp-modal pp-trip-suggestions-modal">
            <div className="pp-modal-header">
              <h3 className="pp-modal-title">{t('tripSuggestions.modalTitle', { city: cityName })}</h3>
              <button className="pp-icon-btn" onClick={closeModal}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
              </button>
            </div>

            <div className="pp-modal-body">
              <p className="pp-trip-suggestions-disclaimer">{t('tripSuggestions.disclaimer')}</p>

              <CriteriaFilterChips selected={criteria} onToggle={handleToggleCriterion} />

              {!current ? (
                // Le(s) critère(s) sélectionné(s) n'éliminent pas la ville de la
                // suggestion (baselineCount > 0 garantit qu'elle a AU MOINS une
                // suggestion sans filtre) — mais aucune des suggestions
                // existantes ne coche ce(s) critère(s) : état vide dédié plutôt
                // que de laisser la modale sans contenu ou la faire disparaître.
                <div className="pp-trip-suggestions-filtered-empty">
                  <p>{t('tripSuggestions.filteredEmptyText')}</p>
                  <button className="pp-btn pp-btn--ghost pp-btn--sm" onClick={() => { setCriteria([]); fetchTemplates([]); }}>
                    {t('tripSuggestions.clearFiltersButton')}
                  </button>
                </div>
              ) : (
                <>
                  {/* La résolution des photos (Wikipédia) prend quelques
                      secondes au premier affichage : sans ce message, l'œil
                      conclut qu'il n'y a pas de photos du tout — les icônes 📷
                      apparaissent au fil des résolutions. */}
                  {photosLoading && (
                    <p className="pp-trip-suggestions-photos-loading">
                      <span className="pp-search-busy" /> {t('tripSuggestions.photosLoading')}
                    </p>
                  )}
                  <div
                    className="pp-trip-suggestions-carousel"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                  >
                    <button
                      type="button"
                      className="pp-trip-suggestions-nav"
                      onClick={handlePrev}
                      disabled={index === 0}
                      aria-label={t('tripSuggestions.prevLabel')}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
                    </button>

                    <div className="pp-trip-suggestions-card">
                      <div className="pp-trip-suggestions-card-header">
                        {/* Durée du planning proposé : c'est l'information qui
                            permet de choisir SANS avoir fixé de nombre de jours
                            au préalable — "ce planning me plaît, je resterai
                            donc X jours". */}
                        <span className="pp-fulltrip-days-badge">
                          📅 {t('fullTripSuggestions.totalDays', { count: current.nbDays })}
                        </span>
                        {current.daytrips.length > 0 && (
                          <span className="pp-trip-suggestions-daytrips-badge">
                            {t('tripSuggestions.includesDaytrips', { count: current.daytrips.length, names: current.daytrips.map((d) => d.cityName).join(', ') })}
                          </span>
                        )}
                        <span className="pp-trip-suggestions-uses-badge">
                          🔥 {t('tripSuggestions.usesCount', { count: current.usesCount })}
                        </span>
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
                      {/* Fusionné avec les excursions (buildCityTimeline) et trié par jour
                          absolu : une excursion tombant AVANT le dernier jour de la ville
                          (ex. jour 5 sur un séjour de 8 jours) doit apparaître à sa place,
                          pas après coup — sans ce bloc, une journée entière du séjour (ex.
                          Grande Muraille depuis Pékin) disparaissait purement et simplement
                          de l'aperçu, seul le badge "Inclut l'excursion…" ci-dessus en
                          laissait deviner l'existence, sans jamais dire QUAND ni CE QUI y
                          est prévu. */}
                      {buildCityTimeline(current).map((group, gi) => (
                        group.daytrip ? (
                          <div key={`daytrip-${group.daytrip.id}-${gi}`} className="pp-fulltrip-daytrip">
                            <div className="pp-fulltrip-daytrip-name">
                              <span aria-hidden="true">🧭</span>
                              {group.daytrip.cityName}
                              <span className="pp-fulltrip-daytrip-tag">{t('daytrip.badge')}</span>
                            </div>
                            {group.entries.map((e) => (
                              <DayTimelineBlock key={e.dayNumber} day={e.day} dayNumber={e.dayNumber} t={t} getActivityName={getActivityName} getActivityImage={getActivityImage} />
                            ))}
                          </div>
                        ) : (
                          <Fragment key={`base-${gi}`}>
                            {group.entries.map((e) => (
                              <DayTimelineBlock key={e.dayNumber} day={e.day} dayNumber={e.dayNumber} t={t} getActivityName={getActivityName} getActivityImage={getActivityImage} />
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
                        <button
                          key={tpl.id}
                          type="button"
                          className={`pp-trip-suggestions-dot${i === index ? ' active' : ''}`}
                          onClick={() => setIndex(i)}
                          aria-label={t('tripSuggestions.goToLabel', { count: i + 1 })}
                        />
                      ))}
                    </div>
                  )}

                  {confirming ? (
                    <div className="pp-trip-suggestions-confirm">
                      <p>{t('tripSuggestions.confirmReplaceText')}</p>
                      <div className="pp-modal-actions">
                        <button className="pp-btn pp-btn--ghost pp-btn--sm" onClick={() => setConfirming(false)} disabled={importing}>
                          {t('common:actions.cancel')}
                        </button>
                        <button className="pp-btn pp-btn--primary pp-btn--sm" onClick={runImport} disabled={importing}>
                          {importing ? <span className="pp-search-busy" /> : t('tripSuggestions.confirmReplaceButton')}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      {/* Ville sans durée renseignée : importer ce planning en
                          fait la durée de la ville (voir handleImport côté
                          serveur) — dit AVANT le clic, pas découvert après.
                          Style info (bleu) distinct des avertissements (ambre) :
                          c'est une conséquence normale de l'import, pas un
                          problème — et séparé visuellement de la carte
                          au-dessus, pas collé dessus. */}
                      {plannedDays == null && (
                        <p className="pp-trip-suggestions-setdays-notice">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M11 7h2v2h-2V7zm0 4h2v6h-2v-6zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
                          {t('tripSuggestions.willSetDaysNotice', { count: current.nbDays })}
                        </p>
                      )}
                      <div className="pp-modal-actions">
                        <button className="pp-btn pp-btn--ghost pp-btn--sm" onClick={closeModal}>
                          {t('common:actions.cancel')}
                        </button>
                        <button className="pp-btn pp-btn--primary pp-btn--sm" onClick={handleImportClick} disabled={importing}>
                          {importing ? <span className="pp-search-busy" /> : t('tripSuggestions.importButton')}
                        </button>
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
