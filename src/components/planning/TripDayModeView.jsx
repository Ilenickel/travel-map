import { Fragment } from 'react';
import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import { useTranslation } from 'react-i18next';
import {
  formatDayLabel, formatDate, todayLocalStr, timeToMinutes, getDayModeStatus,
  getCarriedOverActivities, formatCarriedOverLabel, lodgingsForNight, buildTravelSegments,
  sortActivitiesByTimeThenPosition,
} from '../../lib/planningUtils';
import ActivityItem from './ActivityItem';
import TravelConnector from './TravelConnector';

function nowMinutes() {
  const d = new Date();
  return d.getHours() * 60 + d.getMinutes();
}

export default function TripDayModeView({
  trip, cities, destinations, groups = [], activities, lodgings = [],
  onRemoveActivity, onUpdateActivity, onDuplicateActivity, onAssignActivityToGroup,
  // standalone=true (mode Jour J plein écran, ordinateur) : ce composant est alors
  // seul monté, il doit fournir son propre DragDropContext puisqu'aucun autre
  // n'existe autour de lui. standalone=false (page du pager mobile, entre Jours et
  // Carte) : il est imbriqué dans le DragDropContext DÉJÀ ouvert par TripEditor
  // pour le reste du planning — en ouvrir un second ici serait invalide
  // (@hello-pangea/dnd n'accepte pas de DragDropContext imbriqués).
  standalone = true,
}) {
  const { t } = useTranslation();
  const today = todayLocalStr();
  const { hasDates, datesInverted, inRange, beforeTrip, afterTrip } = getDayModeStatus(trip, today);

  if (!hasDates || !inRange) {
    return (
      <div className="pp-day-mode">
        <div className="pp-day-mode-empty">
          <div className="pp-day-mode-empty-icon">🧭</div>
          {!hasDates && <p>{t('dayMode.noDates')}</p>}
          {datesInverted && <p>{t('dayMode.datesInverted')}</p>}
          {beforeTrip && <p>{t('dayMode.beforeTrip', { date: formatDate(trip.start_date) })}</p>}
          {afterTrip && <p>{t('dayMode.afterTrip', { date: formatDate(trip.end_date) })}</p>}
        </div>
      </div>
    );
  }

  const todayActs = activities.filter(a => a.visit_date === today);
  const carriedOver = getCarriedOverActivities(activities, today);
  // Hébergement : où l'on dort ce soir, et duquel on part ce matin (check-out
  // aujourd'hui) — les deux peuvent coexister un jour de changement d'hôtel.
  const tonightLodgings = lodgingsForNight(lodgings, today);
  const checkoutLodgings = (lodgings || []).filter(l => l.check_out === today);

  // Même tri (heure puis position) que la vue par jour à l'écran : sinon deux
  // activités à égalité d'heure pourraient s'afficher dans un ordre différent
  // ici qu'en vue par jour, alors que l'utilisateur vient justement de choisir
  // leur ordre par glisser-déposer dans cette dernière.
  const timed = sortActivitiesByTimeThenPosition(todayActs.filter(a => a.visit_time));
  const allDayActs = todayActs.filter(a => !a.visit_time).sort((a, b) => a.position - b.position);
  const now = nowMinutes();
  // Temps de trajet entre activités consécutives du jour — même logique
  // (planningUtils) que la vue par jour, jamais dupliquée.
  const travelSegments = buildTravelSegments(timed);

  // Sans durée renseignée, on borne la fin "En cours" au début de l'activité
  // suivante (ou, faute de suivante, une heure par défaut) — sinon l'activité
  // basculerait en "Passée" à la minute pile de son heure de début, ce qui ne
  // laisse jamais le temps de la voir affichée comme "en cours".
  const statusOf = (act, idx) => {
    const start = timeToMinutes(act.visit_time);
    if (start == null) return null;
    let end;
    if (act.duration_minutes) {
      end = start + act.duration_minutes;
    } else {
      const next = timed[idx + 1];
      const nextStart = next ? timeToMinutes(next.visit_time) : null;
      end = (nextStart != null && nextStart > start) ? nextStart : start + 60;
    }
    if (now < start) return 'upcoming';
    if (now < end) return 'ongoing';
    return 'past';
  };

  const STATUS_LABEL = { ongoing: t('dayMode.statusOngoing'), upcoming: t('dayMode.statusUpcoming'), past: t('dayMode.statusPast') };

  const list = (
    <Droppable droppableId="day-mode-list">
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          {carriedOver.map(({ act, daysBetween }, idx) => {
            const endInTodayMinutes = timeToMinutes(act.visit_time) + act.duration_minutes - daysBetween * 1440;
            const status = now < endInTodayMinutes ? 'ongoing' : 'past';
            return (
              <div key={act.id} className={`pp-day-mode-card pp-day-mode-card--${status}`}>
                <span className="pp-day-mode-badge">↳ {formatCarriedOverLabel(daysBetween, act.visit_date)} · {STATUS_LABEL[status]}</span>
                <ActivityItem
                  act={act} index={idx} variant="day" draggableIdPrefix="daymode:" dragDisabled
                  cities={cities} destinations={destinations} groups={groups} tripStartDate={trip.start_date}
                  onRemove={onRemoveActivity} onUpdate={onUpdateActivity} onDuplicate={onDuplicateActivity} onAssignToGroup={onAssignActivityToGroup}
                />
              </div>
            );
          })}
          {timed.map((act, idx) => {
            const status = statusOf(act, idx);
            return (
              <Fragment key={act.id}>
                {travelSegments[act.id] && <TravelConnector segment={travelSegments[act.id]} />}
                <div className={`pp-day-mode-card${status ? ` pp-day-mode-card--${status}` : ''}`}>
                  {status && <span className="pp-day-mode-badge">{STATUS_LABEL[status]}</span>}
                  <ActivityItem
                    act={act} index={carriedOver.length + idx} variant="day" draggableIdPrefix="daymode:" dragDisabled
                    cities={cities} destinations={destinations} groups={groups} tripStartDate={trip.start_date}
                    onRemove={onRemoveActivity} onUpdate={onUpdateActivity} onDuplicate={onDuplicateActivity} onAssignToGroup={onAssignActivityToGroup}
                  />
                </div>
              </Fragment>
            );
          })}
          {allDayActs.length > 0 && (
            <div className="pp-day-mode-allday-label">{t('activity.allDayChip')}</div>
          )}
          {allDayActs.map((act, idx) => (
            <div key={act.id} className="pp-day-mode-card">
              <ActivityItem
                act={act} index={carriedOver.length + timed.length + idx} variant="day" draggableIdPrefix="daymode:" dragDisabled
                cities={cities} destinations={destinations} groups={groups} tripStartDate={trip.start_date}
                onRemove={onRemoveActivity} onUpdate={onUpdateActivity} onDuplicate={onDuplicateActivity} onAssignToGroup={onAssignActivityToGroup}
              />
            </div>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );

  return (
    <div className="pp-day-mode">
      <div className="pp-day-mode-date">{formatDayLabel(today)}</div>

      {(checkoutLodgings.length > 0 || tonightLodgings.length > 0) && (
        <div className="pp-day-mode-lodging">
          {checkoutLodgings.map(l => (
            <div key={`out-${l.id}`} className="pp-day-mode-lodging-row pp-day-mode-lodging-row--checkout">
              <span className="pp-day-mode-lodging-icon">🧳</span>
              {t('dayMode.checkoutPrefix')} <strong>{l.name}</strong> {t('dayMode.checkoutSuffix')}
            </div>
          ))}
          {tonightLodgings.map(l => (
            <div key={`in-${l.id}`} className="pp-day-mode-lodging-row" title={l.address || undefined}>
              <span className="pp-day-mode-lodging-icon">🏨</span>
              {t('dayMode.tonightPrefix')} <strong>{l.name}</strong>
              {l.check_in === today && <span className="pp-day-mode-lodging-tag">{t('dayMode.checkinTodayTag')}</span>}
              {l.address && <span className="pp-day-mode-lodging-addr">📍 {l.address}</span>}
            </div>
          ))}
        </div>
      )}

      {todayActs.length === 0 && carriedOver.length === 0 ? (
        <div className="pp-day-mode-empty">
          <div className="pp-day-mode-empty-icon">☕</div>
          <p>{t('dayMode.noActivityToday')}</p>
        </div>
      ) : standalone ? (
        <DragDropContext onDragEnd={() => {}}>{list}</DragDropContext>
      ) : list}
    </div>
  );
}
