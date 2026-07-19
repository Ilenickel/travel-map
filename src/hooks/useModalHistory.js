import { useEffect, useRef } from 'react';

// Pile des modales actuellement ouvertes (une entrée par instance montée,
// dans l'ORDRE D'OUVERTURE) — source de vérité indépendante de
// `history.state`, qui s'est révélé mutable par des tiers (React Router
// retouche l'entrée courante lors d'un retour arrière, y compris pour y
// ajouter son propre suivi d'index) : s'appuyer dessus pour savoir "à qui
// appartient cette entrée" n'est pas fiable. La pile JS ci-dessous, elle,
// n'est modifiée que par ce fichier.
let stack = [];
let nextId = 0;
// Compte les history.back() déclenchés par CE hook lui-même (fermeture
// normale d'une modale, pas via le bouton retour) dont le popstate résultant
// n'a pas encore été consommé — sert à distinguer un "vrai" retour arrière
// utilisateur d'un simple écho de notre propre dépilement programmatique.
let selfInflictedPop = 0;
let listenerInstalled = false;

function ensureListener() {
  if (listenerInstalled) return;
  listenerInstalled = true;
  window.addEventListener('popstate', () => {
    if (selfInflictedPop > 0) {
      // Écho d'une fermeture normale (✕, clic extérieur, etc.) d'UNE
      // modale — jamais un vrai retour utilisateur. La modale concernée a
      // déjà été retirée de la pile par son propre cleanup ; les modales
      // encore ouvertes en dessous ne doivent PAS se refermer pour ça
      // (c'est précisément le bug LIFO que ce mécanisme corrige).
      selfInflictedPop -= 1;
      return;
    }
    // Retour arrière réel : seule la modale tout en haut de la pile se
    // referme (LIFO) — jamais toutes celles actuellement montées.
    const top = stack[stack.length - 1];
    if (!top) return;
    stack.pop();
    top.pushedRef.current = false;
    top.onCloseRef.current();
  });
}

// Pousse une entrée d'historique à l'ouverture d'une modale/panneau et appelle
// onClose au retour arrière (bouton retour Android matériel, geste navigateur,
// et l'équivalent Capacitor App.addListener('backButton', ...) — qui invoque
// history.back() s'il existe une entrée à dépiler avant de quitter l'app).
// Sans ça, ces modales (montées/démontées en pur useState, jamais via une
// route) n'ont rien à intercepter et le bouton retour quitte l'app entière.
// `consumeEntry()` (valeur de retour) : à appeler AVANT une navigation "réelle"
// (react-router) déclenchée par la même action que la fermeture — ex. accepter
// une invitation depuis NotificationPanel, qui doit à la fois fermer le panneau
// ET amener sur /planifier?trip=... Sans lui, le cleanup normal du démontage
// (ci-dessous) fait un history.back() différé d'un micro-tick ; comme un
// navigate({replace:true}) modifie l'entrée COURANTE (celle poussée par ce hook
// à l'ouverture) plutôt que d'en empiler une nouvelle, ce back() ultérieur
// annule silencieusement la navigation en revenant à l'entrée D'AVANT
// l'ouverture du panneau — jamais à la page visée. consumeEntry() retire
// l'entrée de la pile ET marque pushedRef à false AVANT que le cleanup ne
// s'exécute, pour qu'il constate qu'il n'y a plus rien à dépiler et s'abstienne
// du history.back(). Idempotent (no-op si déjà consommée ou déjà dépilée par un
// vrai retour arrière).
export function useModalHistory(onClose) {
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;
  const idRef = useRef(null);
  if (idRef.current == null) idRef.current = ++nextId;
  // Portent l'état à travers un DOUBLE mount→cleanup→mount synchrone (React
  // StrictMode, y compris en build de production — vérifié empiriquement,
  // pas seulement en dev) : sans ça, le cleanup du 1er montage dépile
  // (history.back(), asynchrone) l'entrée que le 2e montage vient de
  // repousser, et le popstate qui en résulte referme la modale ~20ms après
  // son ouverture (bug concret observé sur le bouton "Carnet"). `pushedRef`
  // survit au double-invoke (même instance de ref, pas recréée) : le 2e
  // montage la voit déjà à true et ne pousse pas de 2e entrée ni de 2e
  // entrée dans `stack` ; `mountGenRef` permet au dépilement (différé d'un
  // micro-tick) de savoir si un remount a eu lieu entre-temps, auquel cas il
  // doit s'abstenir — seul le DERNIER cleanup réel (celui qu'aucun remount
  // ne suit) dépile pour de bon.
  const pushedRef = useRef(false);
  const mountGenRef = useRef(0);

  useEffect(() => {
    ensureListener();
    mountGenRef.current += 1;
    const myGen = mountGenRef.current;
    const myId = idRef.current;

    if (!pushedRef.current) {
      history.pushState({}, '');
      pushedRef.current = true;
      stack.push({ id: myId, onCloseRef, pushedRef });
    }

    return () => {
      if (!pushedRef.current) return; // déjà dépilé par un retour arrière
      queueMicrotask(() => {
        // Un remount a eu lieu avant ce tick (double-invoke) : ce n'est pas
        // le dernier cleanup, l'entrée reste à celui-ci de la dépiler.
        if (mountGenRef.current !== myGen) return;
        if (!pushedRef.current) return;
        pushedRef.current = false;
        const i = stack.findIndex((e) => e.id === myId);
        if (i !== -1) stack.splice(i, 1);
        selfInflictedPop += 1;
        history.back();
      });
    };
  }, []); // volontairement [] : ne pousser/dépiler qu'une fois par montage logique, onCloseRef porte la valeur à jour.

  return {
    consumeEntry: () => {
      if (!pushedRef.current) return; // déjà consommée ou dépilée par un retour arrière
      pushedRef.current = false;
      const i = stack.findIndex((e) => e.id === idRef.current);
      if (i !== -1) stack.splice(i, 1);
      // Pas de history.back() ici, contrairement au cleanup normal : l'entrée
      // reste en place pour que le navigate() qui suit (côté appelant) puisse
      // la réutiliser (replace) sans qu'un back() différé ne l'efface ensuite.
    },
  };
}
