import { useEffect, useRef } from 'react';

// Touche Échap partagée entre couches superposées (modales, feuilles, panneaux
// déroulants).
//
// Problème résolu : chaque couche posait son propre écouteur sur `window`, et
// TOUTES réagissaient à la même frappe. Depuis la planification sur ordinateur,
// Échap dans la modale d'ajout d'un restaurant fermait aussi l'explorateur qui
// la contient — donc démontait la modale et jetait la saisie en cours, malgré
// la demande de confirmation.
//
// `e.defaultPrevented` ne suffisait pas : les écouteurs `window` se déclenchent
// dans leur ordre d'ENREGISTREMENT, et la couche parente, montée en premier,
// réagissait avant que l'enfant ait pu marquer l'événement.
//
// D'où cette pile : seule la dernière couche ouverte reçoit Échap.
const stack = [];

export default function useEscapeLayer(handler, enabled = true) {
  // La réf évite de désinscrire/réinscrire la couche à chaque rendu — ce qui la
  // ferait remonter au sommet de la pile et volerait Échap à ses enfants.
  const handlerRef = useRef(handler);
  handlerRef.current = handler;

  useEffect(() => {
    if (!enabled) return undefined;

    const layer = { run: (e) => handlerRef.current?.(e) };
    stack.push(layer);

    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      // Un seul écouteur global suffirait, mais chaque couche installe le sien :
      // on ne réagit donc que si l'on est effectivement au sommet.
      if (stack[stack.length - 1] !== layer) return;
      layer.run(e);
    };
    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('keydown', onKey);
      const i = stack.indexOf(layer);
      if (i !== -1) stack.splice(i, 1);
    };
  }, [enabled]);
}
