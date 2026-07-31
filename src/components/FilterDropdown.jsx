import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import useAnchoredPanel from '../hooks/useAnchoredPanel';
import useEscapeLayer from '../hooks/useEscapeLayer';

// Liste déroulante de filtre à choix unique.
//
// Remplace les rangées de pastilles alignées côte à côte : avec trois familles
// de filtres (origine, budget, catégories), les pastilles occupaient toute la
// largeur et l'utilisateur devait lire une quinzaine d'étiquettes pour
// comprendre ce qui était actif. Une liste déroulante par famille montre en un
// coup d'œil la valeur retenue, comme partout ailleurs.
//
// Panneau rendu dans un PORTAIL : la barre de filtres vit dans des conteneurs à
// débordement limité (corps de modale, panneau de la fiche pays) qui le
// rogneraient — voir useAnchoredPanel.
//
// `options` : [{ value, label }] — la valeur `null` sert d'entrée « tous ».

export default function FilterDropdown({ label, value, options, onChange, className = '' }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const panelRef = useRef(null);
  const panelStyle = useAnchoredPanel(rootRef, open, { width: 220, maxHeight: 300 });

  // Fermeture au clic extérieur et à Échap : une liste déroulante qui reste
  // ouverte quand on clique ailleurs est un piège classique. Le panneau étant
  // portalé, il n'est PAS un descendant DOM de `rootRef` — il faut le tester
  // séparément, sans quoi cliquer une option refermerait avant de la choisir.
  useEffect(() => {
    if (!open) return undefined;
    const onDown = (e) => {
      if (rootRef.current?.contains(e.target) || panelRef.current?.contains(e.target)) return;
      setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    return () => {
      document.removeEventListener('mousedown', onDown);
    };
  }, [open]);

  // Échap ferme le panneau SEUL : ouvert depuis une modale, il en était la
  // couche supérieure et une frappe fermait les deux (voir useEscapeLayer).
  useEscapeLayer(() => setOpen(false), open);

  const selected = options.find((o) => o.value === value);
  const isDefault = value === null || value === undefined;

  return (
    <div className={`resto-filter ${className}`.trim()} ref={rootRef}>
      <button
        type="button"
        className={`resto-filter-btn${!isDefault ? ' resto-filter-btn--set' : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={label}
      >
        <span className="resto-filter-btn-label">{selected?.label ?? label}</span>
        <svg className="resto-filter-btn-chevron" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M7 10l5 5 5-5z" />
        </svg>
      </button>

      {open && panelStyle && createPortal(
        <div ref={panelRef} className="resto-filter-panel" style={panelStyle} role="listbox">
          {options.map((o) => (
            <button
              key={String(o.value)}
              type="button"
              role="option"
              aria-selected={o.value === value}
              className={`resto-filter-option${o.value === value ? ' resto-filter-option--active' : ''}`}
              onClick={() => { onChange(o.value); setOpen(false); }}
            >
              <span>{o.label}</span>
              {o.value === value && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              )}
            </button>
          ))}
        </div>,
        document.body
      )}
    </div>
  );
}
