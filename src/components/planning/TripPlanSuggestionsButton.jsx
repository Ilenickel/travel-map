import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { callModeration } from '../../lib/moderation';
import { COUNTRIES } from '../../data/index';
import { countryAlpha2FromEmoji, formatDuration } from '../../lib/planningUtils';

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

// Bouton "Suggestion de planning" (planning-modèle communautaire, branche
// planModel) : propose jusqu'à 5 plannings importés d'autres utilisateurs
// pour cette ville et ce nombre de jours (voir api/trip-templates.js),
// triés par popularité. Invisible tant que le nombre de jours de la ville
// n'est pas renseigné, ou si aucun modèle ne correspond.
export default function TripPlanSuggestionsButton({
  tripId, cityId, cityName, countryCode, countryName, plannedDays,
  hasExistingActivities, onImported,
}) {
  const { t } = useTranslation();
  const [templates, setTemplates] = useState(null); // null = pas encore chargé
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [importing, setImporting] = useState(false);
  const [confirming, setConfirming] = useState(false);
  const countryAlpha2 = countryAlpha2FromEmoji(COUNTRIES[countryCode]?.emoji);

  const fetchTemplates = async () => {
    if (!plannedDays) { setTemplates(null); return; }
    const result = await callModeration('trip-templates', {
      action: 'suggest', countryCode, cityName, countryAlpha2, plannedDays,
    });
    setTemplates(result.ok ? (result.templates || []) : []);
    setIndex(0);
  };

  // Chargement discret au montage, pour connaître le nombre de suggestions
  // (bouton masqué si aucune) sans attendre un clic préalable.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (!plannedDays) { setTemplates(null); return; }
      const result = await callModeration('trip-templates', {
        action: 'suggest', countryCode, cityName, countryAlpha2, plannedDays,
      });
      if (cancelled) return;
      setTemplates(result.ok ? (result.templates || []) : []);
      setIndex(0);
    })();
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityName, countryCode, plannedDays]);

  if (!plannedDays || !templates || templates.length === 0) return null;

  const current = templates[index];

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
        {t('tripSuggestions.button', { count: templates.length })}
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

              <div className="pp-trip-suggestions-carousel">
                <button
                  type="button"
                  className="pp-trip-suggestions-nav"
                  onClick={() => setIndex((i) => Math.max(0, i - 1))}
                  disabled={index === 0}
                  aria-label={t('tripSuggestions.prevLabel')}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
                </button>

                <div className="pp-trip-suggestions-card">
                  <div className="pp-trip-suggestions-card-header">
                    {current.daytrips.length > 0 && (
                      <span className="pp-trip-suggestions-daytrips-badge">
                        {t('tripSuggestions.includesDaytrips', { count: current.daytrips.length, names: current.daytrips.map((d) => d.cityName).join(', ') })}
                      </span>
                    )}
                    <span className="pp-trip-suggestions-uses-badge">
                      🔥 {t('tripSuggestions.usesCount', { count: current.usesCount })}
                    </span>
                  </div>
                  {current.days.map((day) => (
                    <div key={day.dayIndex} className="pp-trip-suggestions-day">
                      <div className="pp-trip-suggestions-day-divider">
                        <span className="pp-trip-suggestions-day-pill">{t('tripSuggestions.dayLabel', { count: day.dayIndex })}</span>
                      </div>
                      <div className="pp-trip-suggestions-timeline">
                        {groupBySlot(day.activities).map(({ slot, items }, i, arr) => (
                          <div key={slot} className={`pp-trip-suggestions-slot-row${i === arr.length - 1 ? ' pp-trip-suggestions-slot-row--last' : ''}`}>
                            <div className="pp-trip-suggestions-slot-marker">
                              <span className="pp-trip-suggestions-slot-dot">{SLOT_ICON[slot] || '•'}</span>
                            </div>
                            <div className="pp-trip-suggestions-slot-content">
                              <div className="pp-trip-suggestions-slot-label">{t(`tripSuggestions.timeSlot.${slot}`)}</div>
                              <div className="pp-trip-suggestions-slot-items">
                                {items.map((a) => (
                                  <span key={a.id} className="pp-trip-suggestions-item">
                                    {a.name}
                                    {a.duration_minutes > 0 && (
                                      <span className="pp-trip-suggestions-item-duration" title={t('tripSuggestions.durationTitle')}>
                                        ⏱ {formatDuration(a.duration_minutes)}
                                      </span>
                                    )}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  className="pp-trip-suggestions-nav"
                  onClick={() => setIndex((i) => Math.min(templates.length - 1, i + 1))}
                  disabled={index === templates.length - 1}
                  aria-label={t('tripSuggestions.nextLabel')}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/></svg>
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
                <div className="pp-modal-actions">
                  <button className="pp-btn pp-btn--ghost pp-btn--sm" onClick={closeModal}>
                    {t('common:actions.cancel')}
                  </button>
                  <button className="pp-btn pp-btn--primary pp-btn--sm" onClick={handleImportClick} disabled={importing}>
                    {importing ? <span className="pp-search-busy" /> : t('tripSuggestions.importButton')}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
