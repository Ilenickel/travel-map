import { useState } from 'react';
import { Droppable } from '@hello-pangea/dnd';
import { getDaysBetween, formatDayLabel } from '../../lib/planningUtils';
import ActivityItem from './ActivityItem';

const SLOTS = [
  { key: 'matin',      label: 'Matin',       icon: '🌅', range: [0, 12],  defaultTime: '09:00' },
  { key: 'apres-midi', label: 'Après-midi',  icon: '☀',  range: [12, 18], defaultTime: '14:00' },
  { key: 'soir',       label: 'Soir',        icon: '🌙', range: [18, 24], defaultTime: '20:00' },
];

// Types de données pour le drag-and-drop natif HTML5 (glisser un groupe/excursion
// ENTIER vers un jour). Volontairement indépendant de @hello-pangea/dnd, qui gère
// lui le drag des lieux individuels : les deux systèmes utilisent des événements
// navigateur différents et ne se marchent jamais dessus.
export const NATIVE_GROUP_DRAG_TYPE = 'application/x-triply-group';
export const NATIVE_DAYTRIP_DRAG_TYPE = 'application/x-triply-daytrip';

function useNativeDropTarget(onDropGroup, onDropCity) {
  const [isNativeOver, setIsNativeOver] = useState(false);

  const isRelevant = (e) => {
    const types = e.dataTransfer?.types;
    return !!types && (types.includes(NATIVE_GROUP_DRAG_TYPE) || types.includes(NATIVE_DAYTRIP_DRAG_TYPE));
  };

  return {
    isNativeOver,
    handlers: {
      onDragOver: (e) => {
        if (!isRelevant(e)) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
      },
      onDragEnter: (e) => { if (isRelevant(e)) setIsNativeOver(true); },
      onDragLeave: (e) => { if (isRelevant(e)) setIsNativeOver(false); },
      onDrop: (e) => {
        if (!isRelevant(e)) return;
        e.preventDefault();
        setIsNativeOver(false);
        const groupId = e.dataTransfer.getData(NATIVE_GROUP_DRAG_TYPE);
        const cityId = e.dataTransfer.getData(NATIVE_DAYTRIP_DRAG_TYPE);
        if (groupId) onDropGroup(groupId);
        else if (cityId) onDropCity(cityId);
      },
    },
  };
}

function DaySlot({
  slot, droppableId, acts, cities, destinations, groups, day, tripStartDate,
  onAssignGroupToDay, onAssignCityToDay, onRemoveActivity, onUpdateActivity, onAssignActivityToGroup,
}) {
  const sortByTime = (a, b) => {
    if (a.visit_time && b.visit_time) return a.visit_time.localeCompare(b.visit_time);
    if (a.visit_time) return -1;
    if (b.visit_time) return 1;
    return a.position - b.position;
  };
  const sorted = [...acts].sort(sortByTime);

  const { isNativeOver, handlers } = useNativeDropTarget(
    groupId => onAssignGroupToDay(groupId, day, slot.defaultTime),
    cityId => onAssignCityToDay(cityId, day, slot.defaultTime),
  );

  return (
    <div className={`pp-day-slot pp-day-slot--${slot.key}`}>
      <div className="pp-day-slot-header">
        <span className="pp-day-slot-icon">{slot.icon}</span>
        <span className="pp-day-slot-label">{slot.label}</span>
        {acts.length > 0 && <span className="pp-day-slot-count">{acts.length}</span>}
        <span className="pp-day-slot-hint">{slot.defaultTime}</span>
      </div>
      <Droppable droppableId={droppableId}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            {...handlers}
            className={`pp-day-slot-drop${snapshot.isDraggingOver || isNativeOver ? ' pp-day-slot-drop--over' : ''}${acts.length === 0 ? ' pp-day-slot-drop--empty' : ''}`}
          >
            {acts.length === 0 && !snapshot.isDraggingOver && (
              <div className="pp-day-slot-empty">Glissez ici</div>
            )}
            {sorted.map((act, idx) => (
              <ActivityItem
                key={act.id} act={act} index={idx} variant="day" draggableIdPrefix="dayact:"
                cities={cities} destinations={destinations} groups={groups} tripStartDate={tripStartDate}
                onRemove={onRemoveActivity} onUpdate={onUpdateActivity} onAssignToGroup={onAssignActivityToGroup}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default function DayView({
  trip, destinations, cities, activities, groups = [], onAssignGroupToDay, onAssignCityToDay,
  onRemoveActivity, onUpdateActivity, onAssignActivityToGroup,
}) {
  const days = getDaysBetween(trip.start_date, trip.end_date);
  const hasNoDates = !trip.start_date || !trip.end_date;

  const unplanned = activities.filter(a => !a.visit_date).sort((a, b) => a.position - b.position);

  const unplannedDrop = useNativeDropTarget(
    groupId => onAssignGroupToDay(groupId, null, null),
    cityId => onAssignCityToDay(cityId, null, null),
  );

  if (hasNoDates) {
    return (
      <div className="pp-day-view pp-day-view--no-dates">
        <div className="pp-day-view-notice">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" opacity=".4">
            <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
          </svg>
          <p>Définissez des dates pour voir la vue par jour et planifier vos activités par créneaux.</p>
        </div>
        {activities.length > 0 && (
          <Droppable droppableId="day-unplanned">
            {(provided, snapshot) => (
              <div
                className={`pp-day-section pp-day-section--unplanned${snapshot.isDraggingOver || unplannedDrop.isNativeOver ? ' pp-day-section--over' : ''}`}
                {...unplannedDrop.handlers}
              >
                <div className="pp-day-section-header">
                  <span className="pp-day-label">Activités ({activities.length})</span>
                </div>
                <div className="pp-day-activities" ref={provided.innerRef} {...provided.droppableProps}>
                  {activities.map((act, idx) => (
                    <ActivityItem
                      key={act.id} act={act} index={idx} variant="day" draggableIdPrefix="dayact:"
                      cities={cities} destinations={destinations} groups={groups} tripStartDate={trip.start_date}
                      onRemove={onRemoveActivity} onUpdate={onUpdateActivity} onAssignToGroup={onAssignActivityToGroup}
                    />
                  ))}
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
        )}
      </div>
    );
  }

  return (
    <div className="pp-day-view">
      <div className="pp-day-view-hint">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" opacity=".5">
          <path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/>
        </svg>
        Glissez un lieu vers un créneau (Matin / Après-midi / Soir) pour le planifier — ou glissez un groupe/excursion entier pour tout planifier d'un coup
      </div>

      {days.map((day, dayIdx) => {
        const dayActs = activities.filter(a => a.visit_date === day);
        const totalDay = dayActs.length;

        const slotActs = {
          'matin':      dayActs.filter(a => a.visit_time && parseInt(a.visit_time.slice(0, 2)) < 12),
          'apres-midi': dayActs.filter(a => a.visit_time && parseInt(a.visit_time.slice(0, 2)) >= 12 && parseInt(a.visit_time.slice(0, 2)) < 18),
          'soir':       dayActs.filter(a => a.visit_time && parseInt(a.visit_time.slice(0, 2)) >= 18),
        };
        const libreActs = dayActs.filter(a => !a.visit_time);

        return (
          <DaySection
            key={day}
            day={day}
            dayIdx={dayIdx}
            totalDay={totalDay}
            slotActs={slotActs}
            libreActs={libreActs}
            cities={cities}
            destinations={destinations}
            groups={groups}
            tripStartDate={trip.start_date}
            onAssignGroupToDay={onAssignGroupToDay}
            onAssignCityToDay={onAssignCityToDay}
            onRemoveActivity={onRemoveActivity}
            onUpdateActivity={onUpdateActivity}
            onAssignActivityToGroup={onAssignActivityToGroup}
          />
        );
      })}

      {unplanned.length > 0 && (
        <div className="pp-day-section pp-day-section--unplanned">
          <div className="pp-day-section-header">
            <div className="pp-day-num pp-day-num--unplanned">?</div>
            <div className="pp-day-info">
              <span className="pp-day-label">Non planifiées</span>
              <span className="pp-day-count">{unplanned.length} activité{unplanned.length > 1 ? 's' : ''}</span>
            </div>
          </div>
          <Droppable droppableId="day-unplanned">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                {...unplannedDrop.handlers}
                className={`pp-day-activities${snapshot.isDraggingOver || unplannedDrop.isNativeOver ? ' pp-day-activities--over' : ''}`}
              >
                {unplanned.map((act, idx) => (
                  <ActivityItem
                    key={act.id} act={act} index={idx} variant="day" draggableIdPrefix="dayact:"
                    cities={cities} destinations={destinations} groups={groups} tripStartDate={trip.start_date}
                    onRemove={onRemoveActivity} onUpdate={onUpdateActivity} onAssignToGroup={onAssignActivityToGroup}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </div>
  );
}

function DaySection({
  day, dayIdx, totalDay, slotActs, libreActs, cities, destinations, groups, tripStartDate,
  onAssignGroupToDay, onAssignCityToDay, onRemoveActivity, onUpdateActivity, onAssignActivityToGroup,
}) {
  const libreDrop = useNativeDropTarget(
    groupId => onAssignGroupToDay(groupId, day, null),
    cityId => onAssignCityToDay(cityId, day, null),
  );

  return (
    <div className="pp-day-section">
      <div className="pp-day-section-header">
        <div className="pp-day-num">J{dayIdx + 1}</div>
        <div className="pp-day-info">
          <span className="pp-day-label">{formatDayLabel(day)}</span>
          {totalDay > 0 && (
            <span className="pp-day-count">{totalDay} activité{totalDay > 1 ? 's' : ''}</span>
          )}
        </div>
      </div>

      {/* 3 créneaux */}
      <div className="pp-day-slots">
        {SLOTS.map(slot => (
          <DaySlot
            key={slot.key}
            slot={slot}
            day={day}
            droppableId={`slot:${slot.key}:${day}`}
            acts={slotActs[slot.key] || []}
            cities={cities}
            destinations={destinations}
            groups={groups}
            tripStartDate={tripStartDate}
            onAssignGroupToDay={onAssignGroupToDay}
            onAssignCityToDay={onAssignCityToDay}
            onRemoveActivity={onRemoveActivity}
            onUpdateActivity={onUpdateActivity}
            onAssignActivityToGroup={onAssignActivityToGroup}
          />
        ))}
      </div>

      {/* Toute la journée (activités sans créneau précis, ex : excursion, ou drop
          direct sur cette zone plutôt que sur un créneau) */}
      <Droppable droppableId={`day-${day}`}>
        {(provided, snapshot) => (
          <div
            className={`pp-day-libre${snapshot.isDraggingOver || libreDrop.isNativeOver ? ' pp-day-libre--over' : ''}${libreActs.length === 0 && !snapshot.isDraggingOver ? ' pp-day-libre--hidden' : ''}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
            {...libreDrop.handlers}
          >
            {libreActs.length > 0 && (
              <div className="pp-day-libre-label">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" opacity=".5">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
                </svg>
                Toute la journée
              </div>
            )}
            {libreActs.map((act, idx) => (
              <ActivityItem
                key={act.id} act={act} index={idx} variant="day" draggableIdPrefix="dayact:"
                cities={cities} destinations={destinations} groups={groups} tripStartDate={tripStartDate}
                onRemove={onRemoveActivity} onUpdate={onUpdateActivity} onAssignToGroup={onAssignActivityToGroup}
              />
            ))}
            {provided.placeholder}
            {(snapshot.isDraggingOver || libreDrop.isNativeOver) && libreActs.length === 0 && (
              <div className="pp-day-libre-empty">Déposer pour toute la journée</div>
            )}
          </div>
        )}
      </Droppable>
    </div>
  );
}
