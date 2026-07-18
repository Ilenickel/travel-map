import { useEffect, useRef } from 'react';

// Pousse une entrée d'historique à l'ouverture d'une modale/panneau et appelle
// onClose au retour arrière (bouton retour Android matériel, geste navigateur,
// et l'équivalent Capacitor App.addListener('backButton', ...) — qui invoque
// history.back() s'il existe une entrée à dépiler avant de quitter l'app).
// Sans ça, ces modales (montées/démontées en pur useState, jamais via une
// route) n'ont rien à intercepter et le bouton retour quitte l'app entière.
export function useModalHistory(onClose) {
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;
  const closingFromPopRef = useRef(false);

  useEffect(() => {
    history.pushState({ __modal: true }, '');

    const handlePopState = () => {
      closingFromPopRef.current = true;
      onCloseRef.current();
    };
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      // Fermeture "normale" (pas via le bouton retour) : on dépile nous-mêmes
      // l'entrée pour ne pas laisser une entrée d'historique morte derrière.
      if (!closingFromPopRef.current) history.back();
    };
  }, []); // volontairement [] : ne pousser/dépiler qu'une fois par montage, onCloseRef porte la valeur à jour.
}
