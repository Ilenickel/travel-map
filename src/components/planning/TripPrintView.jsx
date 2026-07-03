import { COUNTRIES } from '../../data/index';
import {
  ACTIVITY_CATEGORIES, TRANSPORT_MODES,
  getDaysBetween, formatDayLabel, formatDate, formatTimeShort, formatDuration,
} from '../../lib/planningUtils';

// Rendu uniquement visible à l'impression (voir .pp-print-view dans App.css) :
// invisible à l'écran, il n'a donc pas besoin de suivre le style du reste de
// l'appli — priorité à la lisibilité papier plutôt qu'à la cohérence visuelle.
function ActivityLine({ act, cityName }) {
  const cat = ACTIVITY_CATEGORIES[act.category] || ACTIVITY_CATEGORIES.other;
  const isTransport = act.category === 'transport';
  const icon = isTransport ? (TRANSPORT_MODES[act.transport_mode]?.icon || cat.icon) : cat.icon;
  return (
    <div className="pp-print-activity" style={{ '--cat-color': cat.color }}>
      <div className="pp-print-activity-icon">{icon}</div>
      <div className="pp-print-activity-body">
        <div className="pp-print-activity-head">
          <span className="pp-print-activity-name">{act.name}</span>
          {act.visit_time && <span className="pp-print-activity-time">{formatTimeShort(act.visit_time)}</span>}
        </div>
        <div className="pp-print-activity-meta">
          {cityName && <span className="pp-print-activity-city">📍 {cityName}</span>}
          {act.duration_minutes ? <span className="pp-print-activity-duration">{formatDuration(act.duration_minutes)}</span> : null}
        </div>
        {act.description?.trim() && <p className="pp-print-activity-note">{act.description.trim()}</p>}
      </div>
    </div>
  );
}

export default function TripPrintView({ trip, destinations, cities, activities }) {
  const cityById = {};
  cities.forEach(c => { cityById[c.id] = c; });

  const days = getDaysBetween(trip?.start_date, trip?.end_date);
  const planned = activities.filter(a => a.visit_date);
  const unplanned = activities.filter(a => !a.visit_date);

  const sortedDests = [...destinations].sort((a, b) => a.position - b.position);

  return (
    <div className="pp-print-view">
      <header className="pp-print-header">
        <h1 className="pp-print-title">✈️ {trip?.title || 'Mon voyage'}</h1>
        {(trip?.start_date || trip?.end_date) && (
          <p className="pp-print-dates">
            {formatDate(trip.start_date) || '?'} → {formatDate(trip.end_date) || '?'}
          </p>
        )}
      </header>
      {trip?.notes?.trim() && <p className="pp-print-notes">📝 {trip.notes.trim()}</p>}

      {days.map(day => {
        const dayActs = planned
          .filter(a => a.visit_date === day)
          .sort((a, b) => {
            if (a.visit_time && b.visit_time) return a.visit_time.localeCompare(b.visit_time);
            if (a.visit_time) return -1;
            if (b.visit_time) return 1;
            return a.position - b.position;
          });
        if (dayActs.length === 0) return null;
        return (
          <section key={day} className="pp-print-day">
            <h2 className="pp-print-day-title">{formatDayLabel(day)}</h2>
            {dayActs.map(act => (
              <ActivityLine key={act.id} act={act} cityName={cityById[act.city_id]?.name} />
            ))}
          </section>
        );
      })}

      {unplanned.length > 0 && (
        <section className="pp-print-day pp-print-unplanned">
          <h2 className="pp-print-day-title">Non planifiées</h2>
          {sortedDests.map(dest => {
            const destCities = cities.filter(c => c.destination_id === dest.id);
            const destUnplanned = unplanned
              .filter(a => destCities.some(c => c.id === a.city_id))
              .sort((a, b) => a.position - b.position);
            if (destUnplanned.length === 0) return null;
            const flag = COUNTRIES[dest.country_code]?.emoji || '🌍';
            return (
              <div key={dest.id} className="pp-print-unplanned-dest">
                <h3 className="pp-print-unplanned-country">{flag} {dest.country_name}</h3>
                {destUnplanned.map(act => (
                  <ActivityLine key={act.id} act={act} cityName={cityById[act.city_id]?.name} />
                ))}
              </div>
            );
          })}
        </section>
      )}
    </div>
  );
}
