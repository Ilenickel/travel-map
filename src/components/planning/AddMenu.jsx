import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Menu "+ Ajouter" unique : regroupe les actions d'ajout d'un bloc ville ou
// excursion (lieu, hébergement, excursion à la journée, trajet) derrière un
// seul bouton, au lieu d'une pile de boutons colorés toujours visibles qui
// alourdissait chaque bloc.
// `items` : [{ key, tone, icon, label, desc, onSelect }] — tone pilote le
// dégradé de la tuile d'icône et le halo de l'option (indigo/emerald/amber/
// blue), cohérent avec les couleurs historiques de chaque type d'ajout.
export default function AddMenu({ items }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <div className="pp-add-menu">
      <button
        className={`pp-add-menu-btn${open ? ' pp-add-menu-btn--open' : ''}`}
        onClick={() => setOpen(o => !o)}
      >
        <span className="pp-add-menu-btn-plus" aria-hidden="true">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
          </svg>
        </span>
        {t('addMenu.button')}
        <svg
          width="12" height="12" viewBox="0 0 24 24" fill="currentColor"
          className="pp-add-menu-chevron"
          style={{ transform: open ? 'rotate(180deg)' : 'none' }}
        >
          <path d="M7 10l5 5 5-5z"/>
        </svg>
      </button>

      {open && (
        <>
          <div className="pp-backdrop-overlay" onClick={() => setOpen(false)} />
          <div className="pp-add-menu-dropdown">
            {items.map(item => (
              <button
                key={item.key}
                className={`pp-add-menu-opt pp-add-menu-opt--${item.tone}`}
                onClick={() => { setOpen(false); item.onSelect(); }}
              >
                <span className="pp-add-menu-opt-icon">{item.icon}</span>
                <span className="pp-add-menu-opt-text">
                  <span className="pp-add-menu-opt-label">{item.label}</span>
                  <span className="pp-add-menu-opt-desc">{item.desc}</span>
                </span>
                <svg
                  className="pp-add-menu-opt-arrow"
                  width="14" height="14" viewBox="0 0 24 24" fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
                </svg>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
