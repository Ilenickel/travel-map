import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import { TRIP_CRITERIA, ACTIVITY_CRITERIA, ALL_CRITERIA } from '../../lib/planningUtils';

// Extrait de l'ancien TripFullSuggestions.jsx (fusionné dans
// TripSuggestionsModal.jsx) : partagé par les DEUX onglets de la fenêtre de
// suggestions ("Villes" et "Planning complet"), chacun avec son propre état
// de filtres — d'où l'extraction dans un fichier à part plutôt que de garder
// ces exports sur un composant de modale qui n'existe plus lui-même.

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
        const c = ALL_CRITERIA[key];
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

// Menu déroulant "Activités" (ski, plongée, randonnée…) : mêmes clés que les
// pastilles ci-dessus (stockées dans le même tableau share_criteria/criteria,
// voir ACTIVITY_CRITERIA), juste regroupées à part pour ne pas allonger la
// rangée principale à chaque nouvelle activité ajoutée. Réutilisable tel quel
// partout où TRIP_CRITERIA est déjà proposé (filtres de suggestions, critères
// de partage d'un voyage…) : mêmes props `selected`/`onToggle` que les chips.
//
// Menu rendu via un portail en position:fixed (comme le popover de partage
// des dépenses, voir TripExpensesPanel.jsx) : le déclencheur est presque
// toujours dans une zone à overflow:hidden/auto (corps de modale, formulaire
// de suggestions…) qui rognait le bas du menu s'il était rendu en place.
export function ActivityCriteriaDropdown({ selected, onToggle }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [menuPos, setMenuPos] = useState(null);
  const triggerRef = useRef(null);
  const menuRef = useRef(null);
  const activeCount = Object.keys(ACTIVITY_CRITERIA).filter((k) => selected.includes(k)).length;

  const toggleOpen = () => {
    if (!open) {
      const r = triggerRef.current.getBoundingClientRect();
      const menuHeight = Object.keys(ACTIVITY_CRITERIA).length * 36 + 12; // estimation avant rendu
      const menuWidth = 170;
      const spaceBelow = window.innerHeight - r.bottom;
      const openUpward = spaceBelow < menuHeight + 12 && r.top > menuHeight + 12;
      const left = Math.min(r.left, window.innerWidth - menuWidth - 8);
      setMenuPos(openUpward
        ? { bottom: window.innerHeight - r.top + 6, left }
        : { top: r.bottom + 6, left });
    }
    setOpen((o) => !o);
  };

  useEffect(() => {
    if (!open) return;
    const closeIfOutside = (e) => {
      if (triggerRef.current?.contains(e.target) || menuRef.current?.contains(e.target)) return;
      setOpen(false);
    };
    document.addEventListener('click', closeIfOutside, true);
    // Ferme le menu dès qu'un défilement a lieu quelque part (capture:true
    // pour aussi détecter le scroll d'un conteneur interne, ex. corps de
    // modale — pas seulement window) : sa position est calculée une seule
    // fois à l'ouverture (voir toggleOpen), donc rien ne la mettait à jour
    // pendant un scroll et le menu se retrouvait décroché du bouton
    // (signalé le 2026-07-25). Se réouvre à la bonne position au clic
    // suivant sur le bouton plutôt que de suivre le scroll en continu.
    const closeOnScroll = () => setOpen(false);
    document.addEventListener('scroll', closeOnScroll, true);
    return () => {
      document.removeEventListener('click', closeIfOutside, true);
      document.removeEventListener('scroll', closeOnScroll, true);
    };
  }, [open]);

  return (
    <div className="pp-activity-dropdown">
      <button
        ref={triggerRef}
        type="button"
        className={`pp-activity-dropdown-trigger${activeCount ? ' active' : ''}`}
        onClick={toggleOpen}
        aria-expanded={open}
      >
        {t('tripCriteria.activitiesLabel')}
        {activeCount > 0 && <span className="pp-activity-dropdown-count">{activeCount}</span>}
        <svg className="pp-activity-dropdown-chevron" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"/>
        </svg>
      </button>
      {open && menuPos && createPortal(
        <div
          ref={menuRef}
          className="pp-activity-dropdown-menu"
          style={{ position: 'fixed', ...menuPos }}
        >
          {Object.entries(ACTIVITY_CRITERIA).map(([key, c]) => {
            const checked = selected.includes(key);
            return (
              <button
                key={key}
                type="button"
                className={`pp-activity-dropdown-item${checked ? ' active' : ''}`}
                onClick={() => onToggle(key)}
                aria-pressed={checked}
              >
                <span aria-hidden="true">{c.icon}</span> {c.label}
                {checked && <span className="pp-criteria-chip-check">✓</span>}
              </button>
            );
          })}
        </div>,
        document.body
      )}
    </div>
  );
}

// Rangée de filtres critères au-dessus des suggestions ("j'ai des enfants,
// propose-moi en priorité des voyages avec enfants") — partagée entre les
// deux onglets de TripSuggestionsModal.
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
        <ActivityCriteriaDropdown selected={selected} onToggle={onToggle} />
      </div>
    </div>
  );
}

