import { formatTravelDistance } from '../../lib/planningUtils';

// Connecteur affiché entre deux activités horodatées consécutives d'une même
// journée (vue par jour et mode Jour J) : distance à vol d'oiseau, purement
// dérivée des props — il se recalcule donc tout seul à chaque déplacement
// d'activité, changement d'heure ou de lieu. Volontairement une distance et
// pas un temps de trajet : convertir en minutes suppose un mode de transport
// et une vitesse qu'aucune formule ne peut deviner à la place de l'utilisateur.
export default function TravelConnector({ segment }) {
  const { from, est } = segment;

  if (est.far) {
    return (
      <div
        className="pp-travel-connector pp-travel-connector--far"
        title={`Environ ${formatTravelDistance(est.distanceKm)} à vol d'oiseau depuis « ${from.name} » — pensez à planifier un trajet (train, avion…)`}
      >
        <span className="pp-travel-label">
          <span className="pp-travel-icon">🛤️</span>
          ~{formatTravelDistance(est.distanceKm)} — prévoir un transport
        </span>
      </div>
    );
  }

  return (
    <div
      className="pp-travel-connector"
      title={`Distance à vol d'oiseau depuis « ${from.name} » — approximative (ne tient pas compte du terrain ni du mode de transport)`}
    >
      <span className="pp-travel-label">
        <span className="pp-travel-icon">🧭</span>
        ~{formatTravelDistance(est.distanceKm)} à vol d'oiseau
      </span>
    </div>
  );
}
