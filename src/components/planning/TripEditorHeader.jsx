import { useState, useEffect } from 'react';
import { tripDurationDays } from '../../lib/planningUtils';

export default function TripEditorHeader({
  trip, tripId, destinations, cities, activities,
  onUpdate, mapOpen, onToggleMap, onToggleShare,
  onExportPdf, onExportIcal,
}) {
  const [editingTitle, setEditingTitle] = useState(false);
  const [title, setTitle] = useState(trip?.title || '');
  // Mobile uniquement (le bouton et les règles CSS associées n'existent que sous
  // 768px) : l'en-tête complet (dates, stats, actions, notes) mangeait tout
  // l'écran d'un téléphone — replié par défaut, il se réduit à la ligne du titre.
  const [headerOpen, setHeaderOpen] = useState(false);
  const [showNotes, setShowNotes] = useState(!!(trip?.notes));
  const [notes, setNotes] = useState(trip?.notes || '');
  const [notesTimer, setNotesTimer] = useState(null);

  useEffect(() => {
    setTitle(trip?.title || '');
    setNotes(trip?.notes || '');
    if (trip?.notes) setShowNotes(true);
  }, [trip?.id]);

  const saveTitle = () => {
    const t = title.trim();
    if (t && t !== trip?.title) onUpdate(tripId, { title: t });
    else setTitle(trip?.title || '');
    setEditingTitle(false);
  };

  const handleNotesChange = (val) => {
    setNotes(val);
    clearTimeout(notesTimer);
    setNotesTimer(setTimeout(() => onUpdate(tripId, { notes: val.trim() || null }), 800));
  };

  const duration = tripDurationDays(trip?.start_date, trip?.end_date);
  const totalCities = cities.length;
  // Cohérent avec le compteur "X lieux" affiché par ville : les trajets ne sont pas
  // des lieux, ils ont leur propre section — sinon ce total ne correspondrait plus
  // à la somme des compteurs par ville.
  const totalPlaces = activities.filter(a => a.category !== 'transport').length;
  const totalCountries = destinations.length;
  const plannedCount = activities.filter(a => a.visit_date).length;

  return (
    <div className={`pp-editor-header${headerOpen ? '' : ' pp-editor-header--collapsed'}`}>
      <div className="pp-trip-title-row">
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
          <h2 className="pp-trip-title" onClick={() => setEditingTitle(true)} title="Cliquer pour renommer">
            {trip?.title || 'Mon voyage'}
            <svg className="pp-edit-icon" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
            </svg>
          </h2>
        )}
        <button
          type="button"
          className="pp-header-collapse-btn"
          onClick={() => setHeaderOpen(o => !o)}
          title={headerOpen ? 'Masquer les détails du voyage' : 'Afficher les détails du voyage (dates, partage…)'}
          aria-expanded={headerOpen}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ transform: headerOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
            <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
          </svg>
        </button>
        <div className="pp-header-actions">
          <div className="pp-toolbar-group">
            <button
              className={`pp-toolbar-btn${showNotes ? ' active' : ''}`}
              onClick={() => setShowNotes(n => !n)}
              title="Notes du voyage"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
              </svg>
              Notes
            </button>
            <button
              className={`pp-toolbar-btn${mapOpen ? ' active' : ''}`}
              onClick={onToggleMap}
              title={mapOpen ? 'Fermer la carte' : 'Afficher la carte'}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/>
              </svg>
              Carte
            </button>
            <button
              className="pp-toolbar-btn"
              onClick={onExportPdf}
              title="Exporter l'itinéraire en PDF"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
              </svg>
              PDF
            </button>
            <button
              className="pp-toolbar-btn"
              onClick={onExportIcal}
              disabled={plannedCount === 0}
              title={plannedCount === 0
                ? 'Planifiez au moins un lieu sur une date pour pouvoir l\'exporter vers votre agenda'
                : 'Exporter les lieux planifiés vers votre agenda (fichier .ics, compatible Google Agenda et autres)'}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/>
              </svg>
              Agenda
            </button>
          </div>
          <button
            className="pp-btn pp-btn--share"
            onClick={onToggleShare}
            title="Partager ce voyage"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
            </svg>
            Partager
          </button>
        </div>
      </div>

      {/* Dates */}
      <div className="pp-trip-dates-card">
        <div className="pp-date-group">
          <label className="pp-date-label">Départ</label>
          <input
            type="date"
            className="pp-date-input"
            value={trip?.start_date || ''}
            onChange={e => onUpdate(tripId, { start_date: e.target.value || null })}
          />
        </div>
        <svg className="pp-date-arrow" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
        </svg>
        <div className="pp-date-group">
          <label className="pp-date-label">Retour</label>
          <input
            type="date"
            className="pp-date-input"
            value={trip?.end_date || ''}
            min={trip?.start_date || undefined}
            onChange={e => onUpdate(tripId, { end_date: e.target.value || null })}
          />
        </div>
        {duration && (
          <div className="pp-duration-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
            </svg>
            {duration} jour{duration > 1 ? 's' : ''}
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="pp-trip-stats">
        <span className="pp-stat-pill">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>
          {totalCountries} pays
        </span>
        <span className="pp-stat-pill">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z"/></svg>
          {totalCities} villes
        </span>
        <span className="pp-stat-pill">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
          {totalPlaces} lieux
        </span>
        {activities.filter(a => a.visit_date).length > 0 && (
          <span className="pp-stat-pill pp-stat-pill--accent">
            📅 {activities.filter(a => a.visit_date).length} planifié{activities.filter(a => a.visit_date).length > 1 ? 's' : ''}
          </span>
        )}
      </div>

      {showNotes && (
        <div className="pp-trip-notes">
          <textarea
            className="pp-notes-textarea"
            value={notes}
            onChange={e => handleNotesChange(e.target.value)}
            placeholder="Notes générales du voyage (hôtel, budget, contacts utiles…)"
            rows={3}
          />
        </div>
      )}
    </div>
  );
}
