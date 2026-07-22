import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CityPlanningFieldsButton from './CityPlanningFieldsButton';
import { useScrollIntoViewOnOpen } from '../../hooks/useScrollIntoViewOnOpen';

// Menu "⋯" unique par ville : remplace la rangée d'icônes d'action (sélection
// multiple, renommer, jours & nuits sur place, supprimer) qui restait
// toujours visible dans l'en-tête de CityBlock. Même pattern que le menu
// "Options" d'un voyage dans la sidebar (voir TripCard.jsx : bouton icône +
// dropdown + overlay de fermeture au clic extérieur), réutilisé ici tel quel
// (mêmes classes .pp-dropdown-item) plutôt que d'inventer un nouveau style.
export default function CityMenu({ city, tripStartDate, hasPlaces, selecting, onToggleSelecting, onRename, onUpdatePlanning, onDelete, dateLocked = false, hasPendingContent = false, siblingPendingBaseCitiesCount = 0 }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const dropdownRef = useScrollIntoViewOnOpen(open);

  return (
    <div className="pp-city-menu-wrap" onClick={(e) => e.stopPropagation()}>
      <button
        type="button"
        className={`pp-icon-btn pp-city-menu-btn${open ? ' pp-icon-btn--active' : ''}`}
        onClick={() => setOpen((o) => !o)}
        title={t('city.menuTitle')}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
        </svg>
      </button>
      {open && (
        <>
          <div className="pp-backdrop-overlay" onClick={() => setOpen(false)} />
          <div className="pp-city-menu-dropdown" ref={dropdownRef}>
            {hasPlaces && (
              <button
                className="pp-dropdown-item"
                onClick={() => { onToggleSelecting(); setOpen(false); }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                {selecting ? t('place.exitSelectTitle') : t('place.selectTitle')}
              </button>
            )}
            <button className="pp-dropdown-item" onClick={() => { onRename(); setOpen(false); }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
              </svg>
              {t('city.renameTitle')}
            </button>
            {/* Reste un bouton à popover indépendant (date de début,
                facultative) : il doit pouvoir s'ouvrir SANS refermer ce
                menu-ci — d'où le rendu "ligne de menu" (asMenuItem) plutôt que
                l'icône isolée utilisée ailleurs. Masqué une fois `dateLocked`
                (ville déjà datée ET ses activités déjà réellement placées) :
                changer la date ne ferait plus rien à ce stade (aucun moyen de
                revenir en arrière depuis ce menu de toute façon), un item
                grisé à vie n'apporterait rien — autant ne plus le proposer. */}
            {!dateLocked && (
              <CityPlanningFieldsButton
                city={city}
                tripStartDate={tripStartDate}
                onUpdate={onUpdatePlanning}
                asMenuItem
                hasPendingContent={hasPendingContent}
                siblingPendingBaseCitiesCount={siblingPendingBaseCitiesCount}
              />
            )}
            <button className="pp-dropdown-item pp-dropdown-item--danger" onClick={() => { onDelete(); setOpen(false); }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
              </svg>
              {t('city.deleteTitle')}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
