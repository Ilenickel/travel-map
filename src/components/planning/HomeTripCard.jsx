import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { COUNTRIES } from '../../data/index';
import { formatDate, tripDurationDays } from '../../lib/planningUtils';
import CountryFlag from './CountryFlag';

// Palette de repli quand le pays n'a pas (encore) de photo en cache — même
// idée que l'ancien TripCard : une couleur stable dérivée de l'id du voyage,
// pour que chaque carte reste reconnaissable même sans image de fond.
const TRIP_COLORS = ['#6366f1', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#3b82f6', '#06b6d4'];
function getTripColor(tripId) {
  let hash = 0;
  for (let i = 0; i < tripId.length; i++) hash = (hash + tripId.charCodeAt(i)) % TRIP_COLORS.length;
  return TRIP_COLORS[hash];
}

// Couleur de la barre d'avancement dérivée du % d'activités faites (pas de la
// couleur du voyage) : un signal visuel immédiat de "où en est ce voyage",
// lisible même sans lire les chiffres — paliers volontairement tranchés
// (pas un dégradé continu) pour rester identifiable en un coup d'œil.
function progressColor(pct) {
  if (pct >= 85) return '#10b981'; // vert — terminé
  if (pct >= 50) return '#3b82f6'; // bleu — bien avancé
  if (pct >= 20) return '#f59e0b'; // ambre — en cours
  return '#ef4444'; // rouge — à peine commencé
}

// Une carte de voyage de l'écran d'accueil (grille « Mes voyages »). Cliquer
// la carte ouvre le voyage en plein écran (onSelect). Image de fond = photo du
// pays de la 1ère destination (résolue en amont par la grille, passée via
// `image`) ; à défaut, dégradé coloré stable. Les infos absentes ne sont pas
// affichées (dates, barre d'avancement) — voir la demande produit.
export default function HomeTripCard({ trip, stats, image, userId, onSelect, onDelete, onLeaveTrip, onDuplicate }) {
  const { t } = useTranslation();
  const [confirmDel, setConfirmDel] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const duration = tripDurationDays(trip.start_date, trip.end_date);
  const color = getTripColor(trip.id);
  const isOwner = trip.user_id === userId;

  const countries = stats?.countries || [];
  const citiesCount = stats?.cities || 0;
  const cityNames = stats?.cityNames || [];
  const activitiesTotal = stats?.activities || 0;
  const activitiesDone = stats?.done || 0;
  const progress = activitiesTotal > 0 ? Math.round((activitiesDone / activitiesTotal) * 100) : 0;

  // Jusqu'à 3 pays affichés en pastilles (le 1er = celui de l'image), le reste
  // condensé en « +N » pour ne pas déborder — « gérer la place » (demande).
  const MAX_CHIPS = 3;
  const shownCountries = countries.slice(0, MAX_CHIPS);
  const extraCountries = countries.length - shownCountries.length;

  // Idem pour la liste des villes : au-delà de 3, on condense en « +N » plutôt
  // que de laisser l'ellipsis CSS couper le texte en plein milieu d'un nom
  // (ex. "Chengdu, Guilin, Cant…") — un compte lisible est plus utile qu'un nom
  // de ville tronqué illisible. 3 (pas 4) : laisse assez de marge pour que les
  // noms affichés tiennent en entier sur une carte de largeur normale, plutôt
  // que d'afficher À LA FOIS un nom coupé au milieu ET un « +N » juste après
  // (double signal de troncature, signalé le 2026-07-23).
  const MAX_CITY_NAMES = 3;
  const shownCityNames = cityNames.slice(0, MAX_CITY_NAMES);
  const extraCityNames = cityNames.length - shownCityNames.length;
  const cityNamesText = shownCityNames.join(', ');

  const handleDelete = (e) => {
    e.stopPropagation();
    if (confirmDel) {
      isOwner ? onDelete(trip.id) : onLeaveTrip(trip.id);
      setShowMenu(false);
    } else {
      setConfirmDel(true);
      setTimeout(() => setConfirmDel(false), 2500);
    }
  };

  const handleDuplicate = (e) => {
    e.stopPropagation();
    onDuplicate(trip.id);
    setShowMenu(false);
  };

  const mediaStyle = image?.imageUrl
    ? { backgroundImage: `url(${image.imageUrl})` }
    : { background: `linear-gradient(135deg, ${color}, ${color}cc)` };

  return (
    <div
      className="pp-home-card"
      onClick={() => onSelect(trip.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelect(trip.id); } }}
      style={{ '--trip-color': color }}
    >
      <div className={`pp-home-card-media${image?.imageUrl ? ' has-image' : ''}`} style={mediaStyle}>
        <div className="pp-home-card-media-shade" />

        {countries.length > 0 && (
          <div className="pp-home-card-countries">
            {shownCountries.map((c) => (
              <span key={c.code} className="pp-home-card-country">
                <CountryFlag emoji={COUNTRIES[c.code]?.emoji || '🌍'} size={15} />
                <span className="pp-home-card-country-name">{c.name}</span>
              </span>
            ))}
            {extraCountries > 0 && (
              <span className="pp-home-card-country pp-home-card-country--more">+{extraCountries}</span>
            )}
          </div>
        )}
      </div>

      {/* Menu ⋯ hors du média : le média est en overflow:hidden (arrondi de
          l'image), un dropdown à l'intérieur y serait rogné. Placé en enfant
          direct de la carte (position:relative, overflow visible), il peut
          déborder librement. Pas de z-index sur le wrap pour ne pas créer de
          contexte d'empilement qui piégerait le dropdown sous le backdrop. */}
      <div className="pp-home-card-menu-wrap" onClick={e => e.stopPropagation()}>
        <button
          className="pp-home-card-menu-btn"
          onClick={() => setShowMenu(m => !m)}
          title={t('tripCard.optionsTitle')}
          aria-label={t('tripCard.optionsTitle')}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
        </button>
        {showMenu && (
          <>
            <div className="pp-backdrop-overlay" onClick={() => setShowMenu(false)} />
            <div className="pp-home-card-dropdown">
              <button className="pp-dropdown-item" onClick={handleDuplicate}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                </svg>
                {t('common:actions.duplicate')}
              </button>
              <button className={`pp-dropdown-item pp-dropdown-item--danger${confirmDel ? ' confirming' : ''}`} onClick={handleDelete}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                </svg>
                {isOwner
                  ? (confirmDel ? t('tripCard.confirmDeleteButton') : t('common:actions.delete'))
                  : (confirmDel ? t('common:actions.confirm') : t('tripCard.leaveTripButton'))}
              </button>
            </div>
          </>
        )}
      </div>

      <div className="pp-home-card-body">
        <h3 className="pp-home-card-title">{trip.title}</h3>

        {(trip.start_date || trip.end_date) && (
          <p className="pp-home-card-dates">
            {trip.start_date ? formatDate(trip.start_date) : '?'}
            <span className="pp-home-card-dates-sep">→</span>
            {trip.end_date ? formatDate(trip.end_date) : '?'}
            {duration && <span className="pp-home-card-dur">{t('tripCard.durationAbbrev', { count: duration })}</span>}
          </p>
        )}

        {citiesCount > 0 && (
          // Liste des villes (limitée à 4, le reste condensé en « +N ») —
          // liste complète en title (info au survol PC). Le « +N » est un
          // élément SÉPARÉ du texte tronqué (pas concaténé dans la même
          // chaîne) : sinon, sur une carte étroite où même la liste réduite
          // déborde, l'ellipsis CSS coupe la chaîne AVANT d'atteindre le
          // suffixe « +N » et celui-ci disparaît complètement — corrigé le
          // 2026-07-23 (signalé : "le +4 marche pas tout le temps"). Ici le
          // suffixe a flex-shrink:0, il reste donc toujours visible ; seule la
          // partie noms se réduit avec l'ellipsis.
          <p className="pp-home-card-cities" title={cityNames.join(', ')}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>
            <span className="pp-home-card-cities-text">{cityNamesText}</span>
            {extraCityNames > 0 && <span className="pp-home-card-cities-extra">+{extraCityNames}</span>}
          </p>
        )}

        {activitiesTotal > 0 && (
          <p className="pp-home-card-stat">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
            {t('home.activitiesProgress', { done: activitiesDone, total: activitiesTotal })}
          </p>
        )}

        {activitiesTotal > 0 && (
          <div className="pp-home-card-progress" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
            <div
              className="pp-home-card-progress-fill"
              style={{ width: `${progress}%`, '--progress-color': progressColor(progress) }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
