import { useTranslation } from 'react-i18next';

// Origine d'une adresse : sélection de l'équipe ou contribution d'un membre.
//
// C'est l'information qui pèse le plus dans la confiance accordée à un
// restaurant, et elle était portée par la seule couleur de la pastille — donc
// invisible pour qui ne connaît pas encore le code, et perdue en niveaux de
// gris. Un pictogramme la rend lisible d'un coup d'œil : un sceau pour ce que
// nous recommandons, deux silhouettes pour ce que la communauté propose.
//
// Extrait en composant parce que la pastille apparaît à l'identique dans la
// liste et dans la fiche : les deux avaient déjà divergé une fois.

function EditorialIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l2.6 5.6 6.1.8-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L3.3 8.4l6.1-.8L12 2z" />
    </svg>
  );
}

function CommunityIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm-8 0a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm0 2c-2.3 0-7 1.2-7 3.5V19h8v-2.5c0-.9.4-1.7 1-2.4A12 12 0 0 0 8 13zm8 0c-.3 0-.7 0-1.1.1A4 4 0 0 1 16 16.5V19h7v-2.5c0-2.3-4.7-3.5-7-3.5z" />
    </svg>
  );
}

export default function SourceBadge({ source }) {
  const { t } = useTranslation('app');
  const editorial = source === 'editorial';
  return (
    <span className={`resto-badge resto-badge--${editorial ? 'editorial' : 'community'}`}>
      {editorial ? <EditorialIcon /> : <CommunityIcon />}
      {editorial ? t('restaurants.badgeEditorial') : t('restaurants.badgeCommunity')}
    </span>
  );
}
