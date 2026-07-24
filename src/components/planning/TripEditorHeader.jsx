import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { tripDurationDays, sumCosts, formatPrice, TRIP_CRITERIA } from '../../lib/planningUtils';
import { useSettings } from '../../context/SettingsContext';

export default function TripEditorHeader({
  trip, tripId, destinations, cities, activities, lodgings = [],
  onUpdate, onToggleShare, onOpenExpenses,
  onExportPdf, onExportIcal,
  onToggleAutoShareTemplate, onBack,
}) {
  const { t } = useTranslation();
  useSettings(); // abonnement devise : formatPrice dépend de la devise choisie
  const [editingTitle, setEditingTitle] = useState(false);
  const [title, setTitle] = useState(trip?.title || '');
  // Replié par défaut, mobile ET ordinateur désormais (demande du 2026-07-24,
  // "laisser plus de marge" à la colonne Villes) : l'en-tête complet — dates,
  // stats, actions, notes — cède sa place tant qu'on n'a pas cliqué sur
  // l'engrenage. Le halo ci-dessous (needsStartDateHighlight) pousse à
  // l'ouvrir tant qu'aucune date n'est renseignée.
  const [headerOpen, setHeaderOpen] = useState(false);
  // Mobile uniquement aussi (bouton "⋯" masqué sur ordinateur) : les actions
  // Partager / Agenda / PDF / Notes vivaient uniquement dans l'en-tête déplié —
  // trop cachées derrière le chevron. Le menu les rend accessibles en un tap,
  // en bottom sheet (habillage pp-modal, transformé en feuille sur mobile).
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNotes, setShowNotes] = useState(!!(trip?.notes));
  const [notes, setNotes] = useState(trip?.notes || '');
  const [notesTimer, setNotesTimer] = useState(null);

  useEffect(() => {
    setTitle(trip?.title || '');
    setNotes(trip?.notes || '');
    if (trip?.notes) setShowNotes(true);
  }, [trip?.id]);

  const saveTitle = () => {
    const trimmed = title.trim();
    if (trimmed && trimmed !== trip?.title) onUpdate(tripId, { title: trimmed });
    else setTitle(trip?.title || '');
    setEditingTitle(false);
  };

  const handleNotesChange = (val) => {
    setNotes(val);
    clearTimeout(notesTimer);
    setNotesTimer(setTimeout(() => onUpdate(tripId, { notes: val.trim() || null }), 800));
  };

  // Halo tant que le voyage n'a pas ses deux dates (départ ET retour) — élargi
  // le 2026-07-24 : avant, seulement après un import en attente d'ancrage
  // (pending_day_offset) ; maintenant tout voyage sans dates pousse à ouvrir
  // le panneau de paramétrage, dates ou pas d'import en cours (la vue par
  // jour comme les zones "à dater" en dépendent de toute façon). Halo sur le
  // champ "Départ" pour l'indiquer — sur mobile ET ordinateur (l'en-tête est
  // replié par défaut sur les deux désormais), sur l'engrenage tant que le
  // panneau est replié (voir CSS, .pp-editor-header--collapsed masque
  // .pp-trip-dates-card), puis sur le champ une fois déplié ; s'il est
  // rerepliée sans avoir choisi de date, le halo revient naturellement sur
  // l'engrenage — aucun état supplémentaire à gérer, seule la visibilité CSS
  // change. Disparaît de lui-même dès que les deux dates sont renseignées.
  const needsStartDateHighlight = !trip?.start_date || !trip?.end_date;

  const duration = tripDurationDays(trip?.start_date, trip?.end_date);
  const totalCities = cities.length;
  // Cohérent avec le compteur "X lieux" affiché par ville : les trajets ne sont pas
  // des lieux, ils ont leur propre section — sinon ce total ne correspondrait plus
  // à la somme des compteurs par ville.
  const totalPlaces = activities.filter(a => a.category !== 'transport').length;
  const totalCountries = destinations.length;
  const plannedCount = activities.filter(a => a.visit_date).length;
  // L'export iCal exclut les activités déjà cochées "faites" (voir exportTrip.js) :
  // un voyage entièrement planifié mais déjà terminé ne doit pas laisser croire
  // qu'il y a encore quelque chose à exporter vers l'agenda. Les hébergements
  // datés (check-in + check-out) sont exportables aussi.
  const icalExportableCount = activities.filter(a => a.visit_date && !a.is_done).length
    + lodgings.filter(l => l.check_in && l.check_out).length;
  // Budget total du voyage = coûts des activités + prix des hébergements : c'est
  // LE chiffre qu'on cherche en regardant l'en-tête ("combien coûte ce voyage ?"),
  // pas seulement la part activités — le détail est dans l'infobulle. Chacun des
  // deux sous-totaux peut être null (rien de renseigné de ce côté-là).
  const activitiesCost = sumCosts(activities);
  const lodgingsCost = sumCosts(lodgings, 'price');
  const tripBudget = activitiesCost == null && lodgingsCost == null
    ? null
    : (activitiesCost ?? 0) + (lodgingsCost ?? 0);
  const tripBudgetTitle = t('header.budgetTitle', { activities: formatPrice(activitiesCost ?? 0), lodgings: formatPrice(lodgingsCost ?? 0) });

  return (
    <div className={`pp-editor-header${headerOpen ? '' : ' pp-editor-header--collapsed'}`}>
      <div className="pp-trip-title-row">
        {onBack && (
          <button
            type="button"
            className="pp-editor-back-btn"
            onClick={onBack}
            title={t('home.backButton')}
            aria-label={t('home.backButton')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
            <span className="pp-editor-back-label">{t('home.backButton')}</span>
          </button>
        )}
        {editingTitle ? (
          <input
            className="pp-trip-title-input"
            value={title}
            onChange={e => setTitle(e.target.value)}
            onBlur={saveTitle}
            onKeyDown={e => {
              if (e.key === 'Enter') saveTitle();
              if (e.key === 'Escape') { setTitle(trip?.title || ''); setEditingTitle(false); }
            }}
            autoFocus
          />
        ) : (
          <h2 className="pp-trip-title" onClick={() => setEditingTitle(true)} title={t('header.renameTitleHint')}>
            {trip?.title || t('header.untitledTrip')}
            <svg className="pp-edit-icon" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
            </svg>
          </h2>
        )}
        {/* Engrenage plutôt qu'un chevron : ce bouton (mobile uniquement) révèle
            le paramétrage du voyage (dates, partage communautaire…) — un ">"
            vers le bas ne disait pas ce qu'il cachait. */}
        <button
          type="button"
          className={`pp-header-collapse-btn${headerOpen ? ' active' : ''}${needsStartDateHighlight && !headerOpen ? ' pp-needs-highlight' : ''}`}
          onClick={() => setHeaderOpen(o => !o)}
          title={headerOpen ? t('header.collapseDetailsTitle') : t('header.expandDetailsTitle')}
          aria-expanded={headerOpen}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
          </svg>
        </button>
        {/* Mobile uniquement (masqué sur ordinateur, comme le chevron) : ouvre
            le menu des actions du voyage — voir menuOpen ci-dessus. */}
        <button
          type="button"
          className="pp-header-menu-btn"
          onClick={() => setMenuOpen(true)}
          title={t('header.menuButtonTitle')}
          aria-label={t('header.menuButtonTitle')}
          aria-haspopup="menu"
          aria-expanded={menuOpen}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
        </button>
        <div className="pp-header-actions">
          {/* Notes/Imprimer/Agenda/Partager à égalité visuelle : plus de
              sous-groupe secondaire pour Imprimer/Agenda (ex pp-toolbar-group),
              et plus de menu "⋯" caché — chaque action reste un bouton direct.
              Carte (désormais automatique, voir TripEditor) et Jour J (déplacé
              dans l'en-tête de la colonne Jours) ne sont plus ici. */}
          <button
            className={`pp-toolbar-btn pp-toolbar-btn--flat pp-toolbar-btn--notes${showNotes ? ' active' : ''}`}
            onClick={() => setShowNotes(n => !n)}
            title={t('header.notesButtonTitle')}
          >
            <span className="pp-toolbar-btn-icon">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
              </svg>
            </span>
            {t('header.notesButton')}
          </button>
          <button
            className="pp-toolbar-btn pp-toolbar-btn--flat pp-toolbar-btn--pdf"
            onClick={onExportPdf}
            title={t('header.exportPdfTitle')}
          >
            <span className="pp-toolbar-btn-icon">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
              </svg>
            </span>
            {t('header.exportPdfButton')}
          </button>
          <button
            className="pp-toolbar-btn pp-toolbar-btn--flat pp-toolbar-btn--agenda"
            onClick={onExportIcal}
            disabled={icalExportableCount === 0}
            title={icalExportableCount === 0
              ? (plannedCount > 0
                ? t('header.icalAllDoneTitle')
                : t('header.icalNoneTitle'))
              : t('header.icalExportTitle')}
          >
            <span className="pp-toolbar-btn-icon">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/>
              </svg>
            </span>
            {t('header.exportIcalButton')}
          </button>
          <button
            className="pp-toolbar-btn pp-toolbar-btn--flat pp-toolbar-btn--expenses"
            onClick={onOpenExpenses}
            title={t('expenses.title')}
          >
            <span className="pp-toolbar-btn-icon">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 3h16a1 1 0 011 1v16.13a.5.5 0 01-.82.38l-1.88-1.57-1.9 1.59a.5.5 0 01-.64 0L14 18.94l-1.76 1.59a.5.5 0 01-.64 0L9.8 18.94l-1.86 1.59a.5.5 0 01-.64 0L5.4 18.94l-1.88 1.57A.5.5 0 013 20.13V4a1 1 0 011-1zm2.5 5h11v2h-11V8zm0 4h11v2h-11v-2zm0 4h7v2h-7v-2z"/>
              </svg>
            </span>
            {t('expenses.navLabel')}
          </button>
          <button
            className="pp-btn pp-btn--share"
            onClick={onToggleShare}
            title={t('header.shareTitle')}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
            </svg>
            {t('header.shareButton')}
          </button>
        </div>
      </div>

      {/* Dates */}
      <div className="pp-trip-dates-card">
        <div className={`pp-date-group${needsStartDateHighlight ? ' pp-needs-highlight' : ''}`}>
          <label className="pp-date-label">{t('header.departureLabel')}</label>
          <input
            type="date"
            className="pp-date-input"
            value={trip?.start_date || ''}
            max={trip?.end_date || undefined}
            onChange={e => {
              const val = e.target.value || null;
              // `max` n'empêche que la sélection dans le calendrier natif, pas une saisie
              // clavier directe des chiffres du champ : sans ce garde-fou JS, un départ
              // après le retour resterait possible et rendrait les dates incohérentes.
              if (val && trip?.end_date && val > trip.end_date) return;
              onUpdate(tripId, { start_date: val });
            }}
          />
        </div>
        <svg className="pp-date-arrow" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
        </svg>
        <div className="pp-date-group">
          <label className="pp-date-label">{t('header.returnLabel')}</label>
          <input
            type="date"
            className="pp-date-input"
            value={trip?.end_date || ''}
            min={trip?.start_date || undefined}
            onChange={e => {
              const val = e.target.value || null;
              if (val && trip?.start_date && val < trip.start_date) return;
              onUpdate(tripId, { end_date: val });
            }}
          />
        </div>
        {duration && (
          <div className="pp-duration-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
            </svg>
            {t('header.durationBadge', { count: duration })}
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="pp-trip-stats">
        <span className="pp-stat-pill">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>
          {t('header.countriesCount', { count: totalCountries })}
        </span>
        <span className="pp-stat-pill">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z"/></svg>
          {t('destination.citiesCount', { count: totalCities })}
        </span>
        <span className="pp-stat-pill">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
          {t('place.count', { count: totalPlaces })}
        </span>
        {activities.filter(a => a.visit_date).length > 0 && (
          <span className="pp-stat-pill pp-stat-pill--accent">
            📅 {t('header.plannedCount', { count: activities.filter(a => a.visit_date).length })}
          </span>
        )}
        {tripBudget != null && (
          <span className="pp-stat-pill pp-stat-pill--budget" title={tripBudgetTitle}>
            💰 {formatPrice(tripBudget)}
          </span>
        )}
      </div>

      <div className={`pp-share-template-section${trip?.auto_share_template ? ' pp-share-template-section--on' : ''}`}>
        <div className="pp-share-template-icon" aria-hidden="true">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
          </svg>
        </div>
        <div className="pp-share-template-content">
        <label className="pp-share-template-row">
          <span className="pp-share-template-texts">
            <span className="pp-share-template-title">{t('shareTemplate.sectionTitle')}</span>
            <span className="pp-share-template-label">{t('shareTemplate.toggleLabel')}</span>
          </span>
          <span className="profile-toggle">
            <input
              type="checkbox"
              checked={!!trip?.auto_share_template}
              onChange={(e) => onToggleAutoShareTemplate(e.target.checked)}
            />
            <span className="profile-toggle-track"><span className="profile-toggle-thumb" /></span>
          </span>
        </label>
        {/* Critères du partage (avec enfants, en couple…) : modifiables à tout
            moment tant que le partage est actif — un critère coché par erreur
            dans la popup de fin de voyage ne doit pas rester figé à vie. Le
            re-partage automatique (TripEditor) recopie la nouvelle valeur sur
            les modèles. */}
        {trip?.auto_share_template && (
          <div className="pp-share-criteria-row">
            <span className="pp-share-criteria-label">{t('shareTemplate.criteriaRowLabel')}</span>
            <div className="pp-criteria-chips">
              {Object.entries(TRIP_CRITERIA).map(([key, c]) => {
                const active = (trip?.share_criteria || []).includes(key);
                return (
                  <button
                    key={key}
                    type="button"
                    className={`pp-criteria-chip${active ? ' active' : ''}`}
                    onClick={() => {
                      const current = trip?.share_criteria || [];
                      onUpdate(tripId, {
                        share_criteria: active ? current.filter((k) => k !== key) : [...current, key],
                      });
                    }}
                    aria-pressed={active}
                  >
                    <span aria-hidden="true">{c.icon}</span> {c.label}
                    {active && <span className="pp-criteria-chip-check">✓</span>}
                  </button>
                );
              })}
            </div>
          </div>
        )}
        <div className="pp-share-template-note">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" opacity=".5">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
          </svg>
          {t('shareTemplate.infoText')}
        </div>
        </div>
      </div>

      {/* Panneau notes dédié (plutôt qu'un simple textarea planqué en bas) :
          même habillage carte que la section "partage communautaire"
          ci-dessus (icône dans un médaillon + titre), pour rester cohérent
          avec le reste de la refonte. */}
      {showNotes && (
        <div className="pp-trip-notes-card">
          <div className="pp-trip-notes-card-icon" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
            </svg>
          </div>
          <div className="pp-trip-notes-card-content">
            <span className="pp-trip-notes-card-title">{t('header.notesButton')}</span>
            <textarea
              className="pp-notes-textarea"
              value={notes}
              onChange={e => handleNotesChange(e.target.value)}
              placeholder={t('header.notesPlaceholder')}
              rows={3}
            />
          </div>
        </div>
      )}

      {/* Menu des actions du voyage (mobile uniquement — le bouton "⋯" qui
          l'ouvre n'existe pas sur ordinateur). Habillage pp-modal : devient
          automatiquement une bottom sheet sous 768px, comme les autres modales
          de l'écran planification. */}
      {menuOpen && (
        <div className="pp-modal-overlay" onClick={e => e.target === e.currentTarget && setMenuOpen(false)}>
          <div className="pp-modal pp-header-menu-sheet">
            <div className="pp-modal-header">
              <h3 className="pp-modal-title">{t('header.menuTitle')}</h3>
              <button className="pp-icon-btn" onClick={() => setMenuOpen(false)}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
              </button>
            </div>
            <div className="pp-modal-body pp-header-menu-body">
              <button
                type="button"
                className="pp-header-menu-item pp-header-menu-item--share"
                onClick={() => { setMenuOpen(false); onToggleShare(); }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
                </svg>
                {t('header.menuShare')}
              </button>
              <button
                type="button"
                className="pp-header-menu-item"
                onClick={() => { setMenuOpen(false); onExportIcal(); }}
                disabled={icalExportableCount === 0}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/>
                </svg>
                {t('header.menuIcal')}
              </button>
              <button
                type="button"
                className="pp-header-menu-item"
                onClick={() => { setMenuOpen(false); onExportPdf(); }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                </svg>
                {t('header.menuPdf')}
              </button>
              <button
                type="button"
                className="pp-header-menu-item"
                onClick={() => { setMenuOpen(false); setShowNotes(true); setHeaderOpen(true); }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                </svg>
                {t('header.menuNotes')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
