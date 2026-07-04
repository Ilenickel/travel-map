import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { COUNTRIES } from '../../data/index';
import {
  ACTIVITY_CATEGORIES, TRANSPORT_MODES,
  getDaysBetween, formatDayLabel, formatDate, formatTimeShort, formatDuration,
  todayLocalStr, getDayModeStatus, getCarriedOverActivities, formatCarriedOverLabel,
  lodgingsForNight, sumCosts, formatPrice, buildTravelSegments, formatTravelDistance,
  sortActivitiesByTimeThenPosition,
} from '../../lib/planningUtils';

// Distance à vol d'oiseau entre deux activités consécutives — même donnée que
// le connecteur affiché à l'écran (voir TravelConnector), jamais un temps de
// trajet (voir estimateTravel dans planningUtils pour le pourquoi).
function PrintTravelLine({ segment }) {
  const { t } = useTranslation();
  const { from, est } = segment;
  return (
    <p className="pp-print-travel">
      {t('print.travelLine', { distance: formatTravelDistance(est.distanceKm), place: from.name })}
      {est.far ? t('print.travelFarSuffix') : ''}
    </p>
  );
}

// Ligne "où l'on dort cette nuit" sous le titre d'un jour — même règle que le
// bandeau de la vue par jour (check_in <= jour < check_out).
function LodgingNightLine({ lodging, cityName }) {
  const { t } = useTranslation();
  return (
    <div className="pp-print-lodging">
      <span className="pp-print-lodging-icon">🏨</span>
      <span className="pp-print-lodging-text">
        {t('dayView.nightAt')} <strong>{lodging.name}</strong>
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
          {act.cost != null && <span className="pp-print-activity-cost">{formatPrice(act.cost)}</span>}
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
  const { t } = useTranslation();
  const cityById = {};
  cities.forEach(c => { cityById[c.id] = c; });
  const today = todayLocalStr();
  const { hasDates, datesInverted, inRange, beforeTrip, afterTrip } = getDayModeStatus(trip, today);

  if (!hasDates || !inRange) {
    return (
      <p className="pp-print-notes">
        {!hasDates && t('print.statusNoDates')}
        {datesInverted && t('print.statusDatesInverted')}
        {beforeTrip && t('print.statusBeforeTrip', { date: formatDate(trip.start_date) })}
        {afterTrip && t('print.statusAfterTrip', { date: formatDate(trip.end_date) })}
      </p>
    );
  }

  const todayActs = activities.filter(a => a.visit_date === today);
  const carriedOver = getCarriedOverActivities(activities, today);
  // Même tri que TripDayModeView à l'écran (heure puis position) — sinon le
  // papier pourrait contredire l'ordre affiché pour deux activités à égalité
  // d'heure.
  const timed = sortActivitiesByTimeThenPosition(todayActs.filter(a => a.visit_time));
  const allDayActs = todayActs.filter(a => !a.visit_time).sort((a, b) => a.position - b.position);
  const tonightLodgings = lodgingsForNight(lodgings, today);

  if (carriedOver.length === 0 && todayActs.length === 0 && tonightLodgings.length === 0) {
    return <p className="pp-print-notes">{t('dayMode.noActivityToday')}</p>;
  }

  // Coût du jour : uniquement les activités qui démarrent aujourd'hui — les
  // reportées d'un jour précédent ont déjà été comptées à leur jour de début
  // (même règle que les totaux par jour de la vue par jour à l'écran).
  const todayCost = sumCosts(todayActs);
  const travelSegments = buildTravelSegments(timed);

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
        <Fragment key={act.id}>
          {travelSegments[act.id] && <PrintTravelLine segment={travelSegments[act.id]} />}
          <ActivityLine act={act} cityName={cityById[act.city_id]?.name} />
        </Fragment>
      ))}
      {allDayActs.length > 0 && (
        <>
          <h3 className="pp-print-unplanned-country">{t('activity.allDayChip')}</h3>
          {allDayActs.map(act => (
            <ActivityLine key={act.id} act={act} cityName={cityById[act.city_id]?.name} />
          ))}
        </>
      )}
      {todayCost != null && (
        <p className="pp-print-day-total">{t('print.dayTotalPrefix')} <strong>{formatPrice(todayCost)}</strong></p>
      )}
    </section>
  );
}

export default function TripPrintView({ trip, destinations, cities, activities, lodgings = [], focusToday = false }) {
  const { t } = useTranslation();
  const cityById = {};
  cities.forEach(c => { cityById[c.id] = c; });

  const days = getDaysBetween(trip?.start_date, trip?.end_date);
  const planned = activities.filter(a => a.visit_date);
  const unplanned = activities.filter(a => !a.visit_date);

  // Récapitulatif budget (mode complet) : TOUTES les activités (les non
  // planifiées coûteront aussi) + hébergements — mêmes règles que le pill
  // budget de l'en-tête à l'écran (TripEditorHeader), pour que le papier ne
  // contredise jamais l'écran.
  const activitiesCost = sumCosts(activities);
  const lodgingsCost = sumCosts(lodgings, 'price');
  const tripBudget = activitiesCost == null && lodgingsCost == null
    ? null
    : (activitiesCost ?? 0) + (lodgingsCost ?? 0);

  const sortedDests = [...destinations].sort((a, b) => a.position - b.position);

  if (focusToday) {
    return (
      <div className="pp-print-view">
        <header className="pp-print-header">
          <h1 className="pp-print-title">✈️ {trip?.title || t('header.untitledTrip')}</h1>
          <p className="pp-print-dates">{formatDayLabel(todayLocalStr())}</p>
        </header>
        <TodayPrintSection trip={trip} cities={cities} activities={activities} lodgings={lodgings} />
      </div>
    );
  }

  return (
    <div className="pp-print-view">
      <header className="pp-print-header">
        <h1 className="pp-print-title">✈️ {trip?.title || t('header.untitledTrip')}</h1>
        {(trip?.start_date || trip?.end_date) && (
          <p className="pp-print-dates">
            {formatDate(trip.start_date) || '?'} → {formatDate(trip.end_date) || '?'}
          </p>
        )}
      </header>
      {trip?.notes?.trim() && <p className="pp-print-notes">📝 {trip.notes.trim()}</p>}

      {days.map(day => {
        // Même tri que la vue par jour à l'écran (heure puis position) : les
        // segments ci-dessous DOIVENT être calculés sur ce même ordre, sinon la
        // distance affichée se retrouve associée à la mauvaise paire de cartes
        // (bug déjà rencontré et corrigé une fois entre l'écran et l'ordre
        // affiché — jamais recalculer séparément avec un tri différent).
        const dayActs = sortActivitiesByTimeThenPosition(planned.filter(a => a.visit_date === day));
        const nightLodgings = lodgingsForNight(lodgings, day);
        const dayCost = sumCosts(dayActs);
        const daySegments = buildTravelSegments(dayActs.filter(a => a.visit_time));
        // Un jour sans activité mais où l'on dort quelque part mérite quand même
        // sa section (savoir où l'on dort fait partie de l'itinéraire imprimé)
        if (dayActs.length === 0 && nightLodgings.length === 0) return null;
        return (
          <section key={day} className="pp-print-day">
            <h2 className="pp-print-day-title">{formatDayLabel(day)}</h2>
            {dayCost != null && <span className="pp-print-day-cost">{formatPrice(dayCost)}</span>}
            {dayActs.map(act => (
              <Fragment key={act.id}>
                {daySegments[act.id] && <PrintTravelLine segment={daySegments[act.id]} />}
                <ActivityLine act={act} cityName={cityById[act.city_id]?.name} />
              </Fragment>
            ))}
            {nightLodgings.map(l => (
              <LodgingNightLine key={l.id} lodging={l} cityName={cityById[l.city_id]?.name} />
            ))}
          </section>
        );
      })}

      {unplanned.length > 0 && (
        <section className="pp-print-day pp-print-unplanned">
          <h2 className="pp-print-day-title">{t('dayView.unplannedLabel')}</h2>
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

      {tripBudget != null && (
        <section className="pp-print-day pp-print-budget">
          <h2 className="pp-print-day-title">{t('print.budgetTitle')}</h2>
          <div className="pp-print-budget-rows">
            {activitiesCost != null && (
              <div className="pp-print-budget-row">
                <span>{t('print.activitiesAndTrips')}</span>
                <span>{formatPrice(activitiesCost)}</span>
              </div>
            )}
            {lodgingsCost != null && (
              <div className="pp-print-budget-row">
                <span>{t('lodging.sectionLabel')}</span>
                <span>{formatPrice(lodgingsCost)}</span>
              </div>
            )}
            <div className="pp-print-budget-row pp-print-budget-row--total">
              <span>{t('print.total')}</span>
              <span>{formatPrice(tripBudget)}</span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
