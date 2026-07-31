import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import useEscapeLayer from '../hooks/useEscapeLayer';
import { useModalHistory } from '../hooks/useModalHistory';
import useIsMobile from '../hooks/useIsMobile';
import '../styles/restaurants.css';

// Coquille de modale pour l'explorateur de restaurants d'une ville, sur la vue
// ordinateur de la planification.
//
// Pourquoi une modale plutôt qu'une section de plus dans le bloc ville : la vue
// ordinateur empile déjà lieux, hébergements, excursions et trajets de CHAQUE
// ville du voyage sur une seule page. Y insérer un explorateur avec sa propre
// carte l'aurait rendue interminable, et l'ancien bouton de repli tranchait avec
// le reste de l'interface. Les restaurants s'ouvrent donc depuis le menu
// « Ajouter », comme les autres contenus de la ville, et disposent d'un espace
// entier.
//
// Utilisée sur MOBILE aussi, depuis le bouton « Ajouter un restaurant » de
// l'onglet Restaurants (elle y occupe tout l'écran, voir .resto-modal sous
// 1024px). L'onglet, lui, se contente de lister les restaurants déjà retenus :
// il était le seul à ouvrir d'emblée son formulaire de recherche, ce que ne
// fait aucun autre onglet du détail d'une ville.

export default function RestaurantsModal({ title, children, onClose }) {
  const { t } = useTranslation('app');
  // Le plein écran est décidé ICI, par le MÊME test que la disposition de
  // l'explorateur qu'elle contient (useIsMobile(1024)), et non par une media
  // query parallèle : les deux systèmes pouvaient diverger, et l'on se
  // retrouvait avec un explorateur en mode mobile dans une fenêtre restée au
  // gabarit ordinateur — d'où la marge, les coins arrondis, et la bande de fond
  // visible en bas de l'écran.
  const isMobile = useIsMobile(1024);

  // Échap ne ferme QUE la couche du dessus : sans ça, une frappe dans la modale
  // d'ajout ouverte par-dessus fermait aussi cet explorateur (voir useEscapeLayer).
  useEscapeLayer(onClose);

  // Bouton retour du téléphone. Indispensable depuis que cet explorateur
  // s'ouvre en plein écran sur mobile : plus rien du contexte n'est visible
  // derrière lui, le geste naturel pour « revenir » est le retour système — qui,
  // sans cette entrée d'historique à dépiler, quittait la planification entière
  // et ramenait sur la carte du monde (signalé le 2026-07-31).
  useModalHistory(onClose);

  return createPortal(
    // Fermeture au clic sur le fond UNIQUEMENT (`e.target === e.currentTarget`),
    // pas sur un clic remonté depuis le contenu. À noter : la modale d'ajout est
    // rendue dans un portail mais reste un descendant de CE composant dans
    // l'arbre React — ses événements remontent donc jusqu'ici, et sans ce test
    // le moindre clic dedans fermerait l'explorateur qui la contient.
    <div
      className={`resto-modal-overlay${isMobile ? ' resto-modal-overlay--full' : ''}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="resto-modal resto-modal--explorer"
        role="dialog"
        aria-modal="true"
      >
        <div className="resto-modal-header">
          {/* Pastille au couvert : le même pictogramme que l'onglet et que les
              repères de la carte. Un en-tête réduit à deux mots gris se lisait
              comme une barre de fenêtre, pas comme l'entrée d'un explorateur. */}
          <span className="resto-modal-icon" aria-hidden="true">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/>
            </svg>
          </span>
          <h3 className="resto-modal-title">
            {t('restaurants.title')}
            <span className="resto-modal-subtitle">{title}</span>
          </h3>
          <button className="resto-modal-close" onClick={onClose} aria-label={t('restaurants.closeSheet')}>✕</button>
        </div>
        <div className="resto-modal-body">{children}</div>
      </div>
    </div>,
    document.body
  );
}
