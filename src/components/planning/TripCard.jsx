import { useState } from 'react';
import { formatDate, tripDurationDays } from '../../lib/planningUtils';

const TRIP_COLORS = ['#6366f1', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#3b82f6', '#06b6d4'];

function getTripColor(tripId) {
  let hash = 0;
  for (let i = 0; i < tripId.length; i++) hash = (hash + tripId.charCodeAt(i)) % TRIP_COLORS.length;
  return TRIP_COLORS[hash];
}

export default function TripCard({ trip, selected, userId, onSelect, onDelete, onLeaveTrip, onDuplicate }) {
  const [confirmDel, setConfirmDel] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const duration = tripDurationDays(trip.start_date, trip.end_date);
  const color = getTripColor(trip.id);
  const isOwner = trip.user_id === userId;

  const handleDelete = (e) => {
    e.stopPropagation();
    if (confirmDel) {
      // Ne ferme le menu qu'ici (action confirmée) : le fermer aussi sur le premier
      // clic (qui ne fait qu'armer la confirmation) cachait immédiatement le bouton
      // "Confirmer la suppression" avant que l'utilisateur ne puisse cliquer dessus,
      // donnant l'impression que le bouton ne faisait rien.
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

  return (
    <div
      className={`pp-trip-card${selected ? ' pp-trip-card--selected' : ''}`}
      onClick={() => onSelect(trip.id)}
      style={{ '--trip-color': color }}
    >
      <div className="pp-trip-card-accent" />
      <div className="pp-trip-card-body">
        <p className="pp-trip-card-title">{trip.title}</p>
        {(trip.start_date || trip.end_date) ? (
          <p className="pp-trip-card-dates">
            {trip.start_date ? formatDate(trip.start_date) : '?'}
            <span className="pp-trip-card-dates-sep">→</span>
            {trip.end_date ? formatDate(trip.end_date) : '?'}
            {duration && <span className="pp-trip-card-dur">{duration}j</span>}
          </p>
        ) : (
          <p className="pp-trip-card-nodates">Pas de dates définies</p>
        )}
      </div>
      <div className="pp-trip-card-menu-wrap" onClick={e => e.stopPropagation()}>
        <button
          className="pp-icon-btn pp-trip-card-menu-btn"
          onClick={() => setShowMenu(m => !m)}
          title="Options"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
        </button>
        {showMenu && (
          <>
            <div className="pp-backdrop-overlay" onClick={() => setShowMenu(false)} />
            <div className="pp-trip-card-dropdown">
              <button className="pp-dropdown-item" onClick={handleDuplicate}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                </svg>
                Dupliquer
              </button>
              <button className={`pp-dropdown-item pp-dropdown-item--danger${confirmDel ? ' confirming' : ''}`} onClick={handleDelete}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                </svg>
                {isOwner
                  ? (confirmDel ? 'Confirmer la suppression' : 'Supprimer')
                  : (confirmDel ? 'Confirmer' : 'Quitter le voyage')}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
