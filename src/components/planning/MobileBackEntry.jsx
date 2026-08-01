import { useModalHistory } from '../../hooks/useModalHistory';

// Pousse une entrée d'historique tant qu'il est monté, et appelle `onBack` au
// retour arrière (bouton matériel Android, geste navigateur, bouton retour de
// Capacitor). N'affiche rien.
//
// Sert aux vues plein écran mobiles de la planification (détail d'une ville,
// détail d'une excursion) qui sont de simples états React, sans route propre :
// sans entrée à dépiler, le bouton retour du téléphone remontait directement à
// l'entrée du voyage et faisait QUITTER le voyage entier depuis une ville
// ouverte — signalé le 2026-08-01.
//
// Pourquoi un composant dédié plutôt qu'un appel à useModalHistory dans
// l'en-tête de détail (MobileDetailHeader, pourtant monté exactement quand une
// vue de détail est ouverte) : CityBlock fait un `return` anticipé sur
// DaytripCard dès qu'une excursion est ouverte, ce qui DÉMONTE l'en-tête de la
// ville alors même que la ville reste « ouverte » derrière. L'entrée de la
// ville aurait donc été dépilée puis repoussée à chaque aller-retour vers une
// excursion, laissant au passage une entrée orpheline dans l'historique (un
// appui sur retour sans effet visible). Monté à côté de l'ÉTAT qui décide de
// l'ouverture, ce composant vit exactement aussi longtemps que la vue qu'il
// représente, quel que soit le sous-arbre effectivement rendu.
//
// L'empilement est géré par useModalHistory (fermeture LIFO) : ville puis
// excursion donnent deux entrées, et deux retours successifs referment
// l'excursion puis la ville, avant que le troisième ne quitte le voyage.
export default function MobileBackEntry({ onBack }) {
  useModalHistory(onBack);
  return null;
}
