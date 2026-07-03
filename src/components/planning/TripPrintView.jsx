import { COUNTRIES } from '../../data/index';
import {
  ACTIVITY_CATEGORIES, TRANSPORT_MODES,
  getDaysBetween, formatDayLabel, formatDate, formatTimeShort, formatDuration,
  todayLocalStr, getDayModeStatus, getCarriedOverActivities, formatCarriedOverLabel,
  lodgingsForNight,
} from '../../lib/planningUtils';

// Ligne "où l'on dort cette nuit" sous le titre d'un jour — même règle que le
// bandeau de la vue par jour (check_in <= jour < check_out).
function LodgingNightLine({ lodging, cityName }) {
  return (
    <div className="pp-print-lodging">
      <span className="pp-print-lodging-icon">🏨</span>
      <span className="pp-print-lodging-text">
        Nuit à <strong>{lodging.name}</strong>
        {cityName ? ` · ${cityName}` : ''}
        {lodging.address ? ` — ${lodging.address}` : ''}
      </span>
    </div>
  );
}

// Rendu uniquement visible à l'impression (voir .pp-print-view dans App.css) :
// invisible à l'écran, il n'a donc pas besoin de suivre le style du reste de
// l'appli — priorité à la lisibilité papier plutôt qu'à la cohérence visuelle.
// `label` (optionnel) : puce "Depuis hier"/"Depuis le ..." pour une activité
// reportée d'un jour précédent (voir TodayPrintSection) — par activité et non
// par section, une carte report/étirement pouvant venir de jours différents.
function ActivityLine({ act, cityName, label }) {
  const cat = ACTIVITY_CATEGORIES[act.category] || ACTIVITY_CATEGORIES.other;
  const isTransport = act.category === 'transport';
  const icon = isTransport ? (TRANSPORT_MODES[act.transport_mode]?.icon || cat.icon) : cat.icon;
  return (
    <div className={`pp-print-activity${act.is_done ? ' pp-print-activity--done' : ''}`} style={{ '--cat-color': cat.color }}>
      <div className="pp-print-activity-icon">{act.is_done ? '✓' : icon}</div>
      <div className="pp-print-activity-body">
        <div className="pp-print-activity-head">
          <span className="pp-print-activity-name">{act.name}</span>
          {act.visit_time && <span className="pp-print-activity-time">{formatTimeShort(act.visit_time)}</span>}
        </div>
        <div className="pp-print-activity-meta">
          {label && <span className="pp-print-activity-carried">↳ {label}</span>}
          {cityName && <span className="pp-print-activity-city">📍 {cityName}</span>}
          {act.duration_minutes ? <span className="pp-print-activity-duration">{formatDuration(act.duration_minutes)}</span> : null}
        </div>
        {act.description?.trim() && <p className="pp-print-activity-note">{act.description.trim()}</p>}
      </div>
    </div>
  );
}

// Version imprimée du mode Jour J : ne montre que la journée en cours, pas tout
// le voyage — cohérent avec ce qu'on regarde à l'écran quand on imprime depuis
// ce mode (voir TripEditor, isDayModeView). Reprend les mêmes règles que
// TripDayModeView (activités du jour + reportées depuis hier via duration_minutes),
// via les fonctions partagées de planningUtils pour ne jamais diverger de l'écran.
function TodayPrintSection({ trip, cities, activities, lodgings }) {
  const cityById = {};
  cities.forEach(c => { cityById[c.id] = c; });
  const today = todayLocalStr();
  const { hasDates, datesInverted, inRange, beforeTrip, afterTrip } = getDayModeStatus(trip, today);

  if (!hasDates || !inRange) {
    return (
      <p className="pp-print-notes">
        {!hasDates && "Dates du voyage non définies."}
        {datesInverted && "Dates du voyage incohérentes (retour avant le départ)."}
        {beforeTrip && `Ce voyage n'a pas encore commencé (départ le ${formatDate(trip.start_date)}).`}
        {afterTrip && `Ce voyage est terminé (retour le ${formatDate(trip.end_date)}).`}
      </p>
    );
  }

  const todayActs = activities.filter(a => a.visit_date === today);
  const carriedOver = getCarriedOverActivities(activities, today);
  const timed = todayActs.filter(a => a.visit_time).sort((a, b) => a.visit_time.localeCompare(b.visit_time));
  const allDayActs = todayActs.filter(a => !a.visit_time).sort((a, b) => a.position - b.position);
  const tonightLodgings = lodgingsForNight(lodgings, today);

  if (carriedOver.length === 0 && todayActs.length === 0 && tonightLodgings.length === 0) {
    return <p className="pp-print-notes">Aucune activité prévue aujourd'hui.</p>;
  }

  return (
    <section className="pp-print-day">
      {tonightLodgings.map(l => (
        <LodgingNightLine key={l.id} lodging={l} cityName={cityById[l.city_id]?.name} />
      ))}
      {carriedOver.map(({ act, daysBetween }) => (
        <ActivityLine
          key={act.id} act={act} cityName={cityById[act.city_id]?.name}
          label={formatCarriedOverLabel(daysBetween, act.visit_date)}
        />
      ))}
      {timed.map(act => (
        <ActivityLine key={act.id} act={act} cityName={cityById[act.city_id]?.name} />
      ))}
      {allDayActs.length > 0 && (
        <>
          <h3 className="pp-print-unplanned-country">Toute la journée</h3>
          {allDayActs.map(act => (
            <ActivityLine key={act.id} act={act} cityName={cityById[act.city_id]?.name} />
          ))}
        </>
      )}
    </section>
  );
}

export default function TripPrintView({ trip, destinations, cities, activities, lodgings = [], focusToday = false }) {
  const cityById = {};
  cities.forEach(c => { cityById[c.id] = c; });

  const days = getDaysBetween(trip?.start_date, trip?.end_date);
  const planned = activities.filter(a => a.visit_date);
  const unplanned = activities.filter(a => !a.visit_date);

  const sortedDests = [...destinations].sort((a, b) => a.position - b.position);

  if (focusToday) {
    return (
      <div className="pp-print-view">
        <header className="pp-print-header">
          <h1 className="pp-print-title">✈️ {trip?.title || 'Mon voyage'}</h1>
          <p className="pp-print-dates">{formatDayLabel(todayLocalStr())}</p>
        </header>
        <TodayPrintSection trip={trip} cities={cities} activities={activities} lodgings={lodgings} />
      </div>
    );
  }

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
        const nightLodgings = lodgingsForNight(lodgings, day);
        // Un jour sans activité mais où l'on dort quelque part mérite quand même
        // sa section (savoir où l'on dort fait partie de l'itinéraire imprimé)
        if (dayActs.length === 0 && nightLodgings.length === 0) return null;
        return (
          <section key={day} className="pp-print-day">
            <h2 className="pp-print-day-title">{formatDayLabel(day)}</h2>
            {dayActs.map(act => (
              <ActivityLine key={act.id} act={act} cityName={cityById[act.city_id]?.name} />
            ))}
            {nightLodgings.map(l => (
              <LodgingNightLine key={l.id} lodging={l} cityName={cityById[l.city_id]?.name} />
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
