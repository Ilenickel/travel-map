import { useTranslation } from 'react-i18next';
import { formatTravelDistance } from '../../lib/planningUtils';

// Connecteur affiché entre deux activités horodatées consécutives d'une même
// journée (vue par jour et mode Jour J) : distance à vol d'oiseau, purement
// dérivée des props — il se recalcule donc tout seul à chaque déplacement
// d'activité, changement d'heure ou de lieu. Volontairement une distance et
// pas un temps de trajet : convertir en minutes suppose un mode de transport
// et une vitesse qu'aucune formule ne peut deviner à la place de l'utilisateur.
export default function TravelConnector({ segment }) {
  const { t } = useTranslation();
  const { from, est } = segment;
  const distance = formatTravelDistance(est.distanceKm);

  if (est.far) {
    return (
      <div
        className="pp-travel-connector pp-travel-connector--far"
        title={t('trajet.farTitle', { distance, place: from.name })}
      >
        <span className="pp-travel-label">
          <span className="pp-travel-icon">🛤️</span>
          {t('trajet.farLabel', { distance })}
        </span>
      </div>
    );
  }

  return (
    <div
      className="pp-travel-connector"
      title={t('trajet.nearTitle', { place: from.name })}
    >
      <span className="pp-travel-label">
        <span className="pp-travel-icon">🧭</span>
        {t('trajet.nearLabel', { distance })}
      </span>
    </div>
  );
}
