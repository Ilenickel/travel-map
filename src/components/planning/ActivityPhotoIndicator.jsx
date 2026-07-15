import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import { formatWikiAttribution } from '../../lib/wikiAttribution';

// Icône "photo disponible" à côté d'une activité de planning suggéré, avec
// aperçu grand format au survol (desktop) ou au tap (tactile) — même recette
// visuelle que l'aperçu des suggestions de lieux (PlaceSuggestionsButton),
// mais dans un conteneur dédié : celui des lieux est en z-index 900 avec un
// aperçu masqué sur mobile, or ici on est À L'INTÉRIEUR d'une modale
// (pp-modal-overlay, 1000+) et le tap doit fonctionner — voir
// .pp-trip-suggestions-photo-preview dans PlanningPage.css.
//
// Une vignette 30px en dur rendait la photo illisible à l'œil nu : l'icône
// dit juste "une photo existe", l'aperçu la montre en vrai format.
const PREVIEW_WIDTH = 340;
const PREVIEW_EST_HEIGHT = 320; // image 240px + nom + crédit, pour le clamp vertical

export default function ActivityPhotoIndicator({ img, name }) {
  const { t } = useTranslation();
  const { t: tApp } = useTranslation('app'); // clés wikiCredit.* (voir lib/wikiAttribution.js)
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Sur tactile (pas de survol, donc pas de mouseleave) l'aperçu resterait
  // ouvert indéfiniment : tap ailleurs = fermeture (sans quoi taper une 2e
  // icône empilerait deux aperçus), et le scroll ferme aussi — l'aperçu est
  // en position fixed calculée à l'ouverture, il flotterait au mauvais
  // endroit pendant le défilement. Listeners en capture pour passer avant
  // les stopPropagation des cartes ; le tap sur l'icône elle-même est exclu
  // (c'est le toggle qui gère sa propre fermeture).
  useEffect(() => {
    if (!open) return;
    const closeIfOutside = (e) => {
      if (ref.current?.contains(e.target)) return;
      setOpen(false);
    };
    const close = () => setOpen(false);
    document.addEventListener('click', closeIfOutside, true);
    document.addEventListener('scroll', close, true);
    return () => {
      document.removeEventListener('click', closeIfOutside, true);
      document.removeEventListener('scroll', close, true);
    };
  }, [open]);

  if (!img?.src) return null;

  const toggle = (e) => {
    // L'icône vit dans des cartes/lignes qui ont leurs propres gestes
    // (balayage du carrousel, clic) : le tap ne doit déclencher qu'elle.
    e.preventDefault();
    e.stopPropagation();
    setOpen((o) => !o);
  };

  const renderPreview = () => {
    if (!ref.current) return null;
    const rect = ref.current.getBoundingClientRect();
    const width = Math.min(PREVIEW_WIDTH, window.innerWidth - 16);
    // À droite de l'icône si la place le permet, sinon à gauche — puis
    // clampé dans la fenêtre (petits écrans : il reste simplement visible,
    // quitte à recouvrir la ligne).
    const fitsRight = rect.right + 10 + width <= window.innerWidth;
    const rawLeft = fitsRight ? rect.right + 10 : rect.left - 10 - width;
    const left = Math.min(Math.max(8, rawLeft), window.innerWidth - width - 8);
    const top = Math.min(Math.max(8, rect.top - 40), window.innerHeight - PREVIEW_EST_HEIGHT - 8);
    const credit = formatWikiAttribution(img.meta, tApp);
    return createPortal(
      <div className="pp-trip-suggestions-photo-preview" style={{ left, top, width }} aria-hidden="true">
        {/* L'aperçu disparaît dès que le survol quitte l'icône : un badge
            cliquable y serait inutilisable — le crédit est affiché en clair
            sous le nom, visible tant que la photo l'est (obligation CC-BY). */}
        <img
          src={img.src}
          alt={name}
          className="pp-place-suggestions-preview-img"
          decoding="async"
        />
        <span className="pp-place-suggestions-preview-name">{name}</span>
        {credit && <span className="pp-place-suggestions-preview-credit">{credit}</span>}
      </div>,
      document.body
    );
  };

  // Pas de `title` sur l'icône : le tooltip natif du navigateur s'affichait
  // par-dessus l'aperçu photo lui-même et en cachait la vue — l'aria-label
  // garde l'information pour les lecteurs d'écran.
  return (
    <>
      <span
        ref={ref}
        role="button"
        tabIndex={0}
        className={`pp-trip-suggestions-photo-ind${open ? ' active' : ''}`}
        aria-label={t('tripSuggestions.showPhotoLabel', { name })}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={toggle}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggle(e); }}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
        </svg>
      </span>
      {open && renderPreview()}
    </>
  );
}
