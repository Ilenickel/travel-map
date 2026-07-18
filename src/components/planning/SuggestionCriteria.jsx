import { useTranslation } from 'react-i18next';
import { TRIP_CRITERIA } from '../../lib/planningUtils';

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
      </div>
    </div>
  );
}
