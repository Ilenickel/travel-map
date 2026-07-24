import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollIntoViewOnOpen } from '../../hooks/useScrollIntoViewOnOpen';

// Menu "⋯" d'une ville : uniquement Renommer / Supprimer — deux actions
// rares/destructives qui n'ont pas besoin d'être visibles en permanence.
// La sélection multiple et la détection de zones sont des boutons VISIBLES
// à part (voir CityBlock.jsx, `actions`) : cachées dans ce sous-menu, rien
// n'indiquait qu'elles existaient (demande du 2026-07-24, "montrer que c'est
// possible de faire ça"). Le bouton de date de début n'est plus dupliqué ici
// non plus : sa seule version visible (surlignée quand nécessaire) suffit.
export default function CityMenu({ onRename, onDelete }) {
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
        <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
        </svg>
      </button>
      {open && (
        <>
          <div className="pp-backdrop-overlay" onClick={() => setOpen(false)} />
          <div className="pp-city-menu-dropdown" ref={dropdownRef}>
            <button className="pp-dropdown-item" onClick={() => { onRename(); setOpen(false); }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
              </svg>
              {t('city.renameTitle')}
            </button>
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
