import { useEffect, useRef, useState } from 'react';

// Masque un bloc d'en-tête (photo/titre/onglets) en scrollant vers le bas,
// le réaffiche en scrollant vers le haut ou en arrivant en haut — même
// pattern que la fiche pays (CountryPanel.jsx, "on utilise déjà ça pour la
// fiche pays", demande du 2026-07-23) : pas de PC ici, cette mécanique ne
// sert qu'aux écrans de détail plein écran mobile (ville/excursion) où le
// bouton retour vit DANS ce bloc — sans nav basse persistante sur cet écran
// (voir TripEditor), remonter fait réapparaître le moyen de revenir en arrière.
//
// Seuil (SCROLL_HIDE_THRESHOLD) : ignore les micro-scrolls (rebond iOS...).
//
// Usage : `const { hidden, onScroll, containerRef } = useHeaderScrollHide();`
// puis `<div className={hidden ? 'is-hidden' : ''}>` sur l'en-tête et
// `ref={containerRef} onScroll={onScroll}` sur le conteneur scrollable.
const SCROLL_HIDE_THRESHOLD = 8;

export function useHeaderScrollHide() {
  const [hidden, setHidden] = useState(false);
  const lastScrollTopRef = useRef(0);
  const elRef = useRef(null);

  // Si le contenu ne déborde pas (rien à scroller — liste courte, ou
  // rétrécie après suppression d'éléments), aucun scroll ne se produira
  // JAMAIS pour redéclencher `top <= 0` : un masquage resté actif depuis un
  // état précédent (ex. liste plus longue, ou revenu d'un sous-écran) ne se
  // serait alors jamais réaffiché — la barre restait invisible en
  // permanence bien que rien ne soit scrollé (signalé le 2026-07-23,
  // "toujours de l'espace noir en bas"). Un ResizeObserver corrige l'état à
  // chaque changement de taille du contenu, pas seulement au scroll.
  const evaluate = (el) => {
    if (el && el.scrollHeight <= el.clientHeight + 1) {
      setHidden(false);
      lastScrollTopRef.current = 0;
    }
  };

  const containerRef = (el) => {
    elRef.current = el;
    evaluate(el);
  };

  useEffect(() => {
    const el = elRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return undefined;
    const ro = new ResizeObserver(() => evaluate(elRef.current));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const onScroll = (e) => {
    const top = e.currentTarget.scrollTop;
    const delta = top - lastScrollTopRef.current;
    if (top <= 0) {
      setHidden(false);
      lastScrollTopRef.current = top;
    } else if (delta > SCROLL_HIDE_THRESHOLD) {
      setHidden(true);
      lastScrollTopRef.current = top;
    } else if (delta < -SCROLL_HIDE_THRESHOLD) {
      setHidden(false);
      lastScrollTopRef.current = top;
    }
  };

  return { hidden, onScroll, containerRef };
}
