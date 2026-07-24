import { useEffect, useRef } from 'react';

// Fait défiler l'élément référencé dans le cadre visible dès qu'il s'ouvre
// (menu déroulant "⋯", popover, résultats qui apparaissent…) — règle
// générale demandée le 2026-07-22 : "quand on ouvre un menu déroulant ou
// autre le focus devrait être dessus". Sur mobile surtout, un menu ouvert
// près du bas de l'écran restait souvent partiellement caché : il fallait
// fermer le menu, scroller soi-même, puis rouvrir pour enfin cliquer.
//
// `block: 'nearest'` (pas 'center'/'start') : ne scrolle QUE si nécessaire,
// et seulement du minimum requis — un menu déjà entièrement visible ne fait
// sauter la page nulle part, contrairement à 'center' qui aurait recentré à
// chaque ouverture même quand ce n'était pas nécessaire.
//
// Usage : `const dropdownRef = useScrollIntoViewOnOpen(open);` puis
// `<div ref={dropdownRef}>...</div>` sur l'élément qui vient d'apparaître.
export function useScrollIntoViewOnOpen(isOpen) {
  const ref = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const el = ref.current;
    if (!el) return;
    // requestAnimationFrame : laisse le temps à l'élément de se poser dans
    // le DOM/layout (surtout s'il vient d'apparaître via une condition de
    // rendu juste avant ce même render) avant de mesurer sa position réelle
    // — mesurer trop tôt peut donner des coordonnées pas encore définitives.
    const raf = requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
    return () => cancelAnimationFrame(raf);
  }, [isOpen]);

  return ref;
}

// Version impérative (pas liée à un état "ouvert/fermé" via useEffect) pour
// les cas déclenchés depuis une fonction async (ex. après une recherche) :
// appeler juste après avoir posé les nouveaux résultats en state.
//
// Double requestAnimationFrame (pas setTimeout(0)) : un seul frame pouvait
// tomber avant que la mise en page du nouveau contenu (résultats de
// recherche, souvent plus complexe qu'un simple menu — champs, cartes,
// images) ne soit totalement stabilisée, surtout sur mobile où le layout est
// plus contraint — mesuré trop tôt, le scroll partait d'une position pas
// encore définitive et n'avançait presque pas (constaté le 2026-07-22 : la
// vue restait quasiment sur les filtres après "Rechercher des voyages").
// Même leçon déjà appliquée à HeroChainScroll (TripSuggestionsModal.jsx).
export function scrollIntoViewSoon(ref, options = { behavior: 'smooth', block: 'start' }) {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      ref.current?.scrollIntoView(options);
    });
  });
}
