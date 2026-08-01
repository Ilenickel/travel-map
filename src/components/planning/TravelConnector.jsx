import { useTranslation } from 'react-i18next';
import { formatTravelDistance, formatTravelDuration } from '../../lib/planningUtils';

// Connecteur affiché entre deux activités horodatées consécutives d'une même
// journée (vue par jour et mode Jour J). Il se recalcule tout seul à chaque
// déplacement d'activité, changement d'heure ou de lieu : tout ce qu'il affiche
// est dérivé de ses props.
//
// Une seule règle, qui décide de tout :
//   • marche sous 45 min → on affiche le temps de marche réel et la distance du
//     chemin ;
//   • au-delà (ou routage indisponible, ou calcul en cours) → distance à vol
//     d'oiseau, et RIEN sur le mode motorisé.
//
// Ce silence est le cœur de la décision. Entre deux lieux éloignés, la personne
// prendra la voiture ici, le métro à Kyoto, un taxi ailleurs : rien dans les
// données ne permet de le savoir, et une version précédente qui affichait
// « 24 min en voiture » en plein Kyoto donnait un conseil que personne ne
// suivrait. Une distance à vol d'oiseau n'affirme rien de faux ; elle laisse la
// personne juger du mode elle-même.
export default function TravelConnector({ segment, route }) {
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

  const walk = route?.walk || null;

  if (!walk) {
    return (
      <div
        className={`pp-travel-connector${route?.loading ? ' pp-travel-connector--pending' : ''}`}
        title={t('trajet.fallbackTitle', { place: from.name })}
      >
        <span className="pp-travel-label">
          <span className="pp-travel-icon">🧭</span>
          {t('trajet.fallbackLabel', { distance })}
        </span>
      </div>
    );
  }

  const walkDistance = formatTravelDistance(walk.distanceM / 1000);

  return (
    <div className="pp-travel-connector pp-travel-connector--routed">
      <span
        className="pp-travel-label"
        title={t('trajet.walkTitle', { place: from.name, distance: walkDistance })}
      >
        <span className="pp-travel-icon">🚶</span>
        {t('trajet.walkLabel', { duration: formatTravelDuration(walk.durationS) })}
        {/* La distance réelle du chemin (et non plus celle à vol d'oiseau) reste
            affichée à côté du temps : c'est elle qui permet de juger si la
            marche est agréable ou pénible, ce qu'une durée seule ne dit pas. */}
        <span className="pp-travel-secondary">· {walkDistance}</span>
      </span>
    </div>
  );
}
