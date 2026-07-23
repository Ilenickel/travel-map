import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { COUNTRIES } from '../../data/index';
import { useCountryImages } from '../../hooks/useCountryImages';
import HomeTripCard from './HomeTripCard';

// Écran d'accueil de la planification : grille « Mes voyages ». Remplace
// l'ancienne sidebar permanente — cliquer une carte ouvre le voyage en plein
// écran (voir PlanningPage). Les photos de fond des cartes (pays de la 1ère
// destination) sont résolues EN UN SEUL lot ici (useCountryImages batché),
// puis distribuées à chaque carte, plutôt qu'un appel réseau par carte.
export default function TripsHome({ trips, tripStats, userId, onSelect, onCreate, onDelete, onLeaveTrip, onDuplicate }) {
  const { t } = useTranslation();

  // Pays de la 1ère destination de chaque voyage → requête d'images groupée.
  const firstCountries = trips
    .map((trip) => tripStats[trip.id]?.countries?.[0])
    .filter(Boolean)
    .map((c) => ({ countryCode: c.code, countryName: COUNTRIES[c.code]?.name?.en || null }));
  const { getCountryImage } = useCountryImages(firstCountries);

  return (
    <div className="pp-home">
      <div className="pp-home-header">
        <div className="pp-home-header-titles">
          <h1 className="pp-home-title">{t('sidebar.title')}</h1>
          {trips.length > 0 && (
            <p className="pp-home-subtitle">{t('home.subtitle', { count: trips.length })}</p>
          )}
        </div>
        {/* Retour à la carte du site — visible sur mobile uniquement (la topbar,
            qui porte ce lien sur ordinateur, y est masquée ; sans lui l'utilisateur
            resterait bloqué dans la planification, l'ancien lien vivait dans la
            sidebar désormais supprimée). */}
        <Link to="/" className="pp-home-topbar-link" aria-label={t('topbar.homeButton')}>
          <svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
        </Link>
      </div>

      {trips.length === 0 ? (
        <div className="pp-home-empty">
          <div className="pp-home-empty-icon">✈️</div>
          <p className="pp-home-empty-title">{t('sidebar.emptyTitle')}</p>
          <p className="pp-home-empty-sub">{t('sidebar.emptySub')}</p>
          <button className="pp-btn pp-btn--primary" onClick={onCreate}>{t('sidebar.createButton')}</button>
        </div>
      ) : (
        <div className="pp-home-grid">
          {trips.map((trip) => {
            const primary = tripStats[trip.id]?.countries?.[0];
            return (
              <HomeTripCard
                key={trip.id}
                trip={trip}
                stats={tripStats[trip.id]}
                image={primary ? getCountryImage(primary.code) : null}
                userId={userId}
                onSelect={onSelect}
                onDelete={onDelete}
                onLeaveTrip={onLeaveTrip}
                onDuplicate={onDuplicate}
              />
            );
          })}

          <button type="button" className="pp-home-add-card" onClick={onCreate}>
            <span className="pp-home-add-card-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
              </svg>
            </span>
            <span className="pp-home-add-card-label">{t('home.newTrip')}</span>
          </button>
        </div>
      )}
    </div>
  );
}
