import { useState, useLayoutEffect, useCallback } from 'react';

// Position d'un panneau déroulant rendu dans un PORTAIL vers <body>.
//
// Raison d'être : un panneau en `position: absolute` est rogné par le premier
// ancêtre à débordement limité. Dans la modale d'ajout d'un restaurant, la liste
// des catégories était coupée net par le bas de la modale (`overflow: hidden`)
// — signalé le 2026-07-29. Le portail sort le panneau de cette hiérarchie, au
// prix d'une position à calculer soi-même, ce que fait ce hook.
//
// Il gère aussi le basculement vers le HAUT quand la place manque en dessous,
// et borne la hauteur à l'espace réellement disponible : un panneau qui déborde
// sous la fenêtre est aussi inutilisable qu'un panneau rogné.
//
// Même technique que PlaceSuggestionsButton, factorisée ici puisque deux
// composants de filtre en ont désormais besoin.

const VIEWPORT_MARGIN = 8;
const MIN_USABLE_HEIGHT = 180;

export default function useAnchoredPanel(triggerRef, open, { width, maxHeight = 340, gap = 5 } = {}) {
  const [style, setStyle] = useState(null);

  const compute = useCallback(() => {
    const el = triggerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();

    const spaceBelow = window.innerHeight - rect.bottom - gap - VIEWPORT_MARGIN;
    const spaceAbove = rect.top - gap - VIEWPORT_MARGIN;
    // On ne bascule vers le haut que si le bas est vraiment trop juste ET que le
    // haut fait mieux : ouvrir vers le haut sans raison est déroutant.
    const openUp = spaceBelow < MIN_USABLE_HEIGHT && spaceAbove > spaceBelow;
    const available = Math.max(MIN_USABLE_HEIGHT, openUp ? spaceAbove : spaceBelow);
    const height = Math.min(maxHeight, available);

    // Largeur : celle du déclencheur par défaut (champ de formulaire), sinon la
    // largeur demandée. Bornée à la fenêtre pour les petits écrans.
    const panelWidth = Math.min(width || rect.width, window.innerWidth - VIEWPORT_MARGIN * 2);
    // Aligné à gauche du déclencheur, ramené dans la fenêtre s'il déborde.
    const left = Math.max(
      VIEWPORT_MARGIN,
      Math.min(rect.left, window.innerWidth - panelWidth - VIEWPORT_MARGIN)
    );

    setStyle({
      position: 'fixed',
      left,
      top: openUp ? undefined : rect.bottom + gap,
      bottom: openUp ? window.innerHeight - rect.top + gap : undefined,
      width: panelWidth,
      maxHeight: height,
    });
  }, [triggerRef, width, maxHeight, gap]);

  // `useLayoutEffect` : la position est appliquée avant la peinture, sinon le
  // panneau apparaît une frame en haut à gauche avant de sauter à sa place.
  useLayoutEffect(() => {
    if (!open) { setStyle(null); return undefined; }
    compute();
    // `capture: true` sur le défilement : le conteneur qui défile est souvent un
    // ancêtre (corps de modale, panneau de la fiche pays), pas la fenêtre.
    window.addEventListener('scroll', compute, true);
    window.addEventListener('resize', compute);
    return () => {
      window.removeEventListener('scroll', compute, true);
      window.removeEventListener('resize', compute);
    };
  }, [open, compute]);

  return style;
}
