import { useState, useEffect, useCallback, useMemo, Fragment } from 'react';
import { Droppable } from '@hello-pangea/dnd';
import { getDaysBetween, formatDayLabel, ACTIVITY_CATEGORIES, TRANSPORT_MODES, lodgingsForNight, addDaysToDateStr, sumCosts, formatPrice, buildTravelSegments, timeToMinutes, sortActivitiesByTimeThenPosition as sortActsByTimeThenPosition } from '../../lib/planningUtils';
import { COUNTRIES } from '../../data/index';
import CountryFlag from './CountryFlag';
import ActivityItem from './ActivityItem';
import TravelConnector from './TravelConnector';

const SLOTS = [
  { key: 'matin',      label: 'Matin',       icon: '🌅', range: [0, 12],  defaultTime: '09:00' },
  { key: 'apres-midi', label: 'Après-midi',  icon: '☀',  range: [12, 18], defaultTime: '14:00' },
  { key: 'soir',       label: 'Soir',        icon: '🌙', range: [18, 24], defaultTime: '20:00' },
];
const SLOT_END_MINUTES = { matin: 12 * 60, 'apres-midi': 18 * 60, soir: 24 * 60 };
const SLOT_START_MINUTES = { matin: 0, 'apres-midi': 12 * 60, soir: 18 * 60 };
const MINUTES_PER_DAY = 24 * 60;

function slotIndexForMinutes(min) {
  if (min < 12 * 60) return 0;
  if (min < 18 * 60) return 1;
  return 2;
}

// Sous-ensemble ordonné (activités "de départ" seulement — jamais les cartes de
// suite/overflow d'un étirement, qui ne sont pas de vrais Draggable) d'un
// jour+créneau donné.
export function activitiesInSlot(activities, date, slotKey) {
  const slotIdx = SLOTS.findIndex(s => s.key === slotKey);
  if (slotIdx === -1) return [];
  return sortActsByTimeThenPosition(
    activities.filter(a => a.visit_date === date && a.visit_time && slotIndexForMinutes(timeToMinutes(a.visit_time)) === slotIdx)
  );
}

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

// Carte "fantôme" affichée dans un créneau (ou un jour) traversé par une activité
// étirée depuis un créneau antérieur — reprend la mise en forme complète d'une
// vraie activité (icône, nom, ville) plutôt qu'une simple mention en petit texte,
// mais sans être un <Draggable> : l'activité d'origine (dans son créneau de
// départ) reste la seule instance réellement déplaçable/éditable pour cet id.
function ActivityContinuationCard({ act, fromLabel, cities, destinations, groups, onCutHere }) {
  const cat = ACTIVITY_CATEGORIES[act.category] || ACTIVITY_CATEGORIES.other;
  const group = groups?.find(g => g.id === act.group_id);
  const accentColor = group ? group.color : cat.color;
  const isTransport = act.category === 'transport';
  const displayIcon = isTransport ? (TRANSPORT_MODES[act.transport_mode]?.icon || cat.icon) : cat.icon;
  const city = cities?.find(c => c.id === act.city_id);
  const dest = destinations?.find(d => city && d.id === city.destination_id);
  const destEmoji = dest ? (COUNTRIES[dest.country_code]?.emoji || '📍') : '📍';

  return (
    <div
      className={`pp-day-activity pp-day-activity--continuation${act.is_done ? ' pp-day-activity--done' : ''}`}
      style={{ '--cat-color': accentColor }}
      title={`${act.name} — débute ${fromLabel}`}
    >
      <div className="pp-day-activity-group-bar" style={{ background: accentColor }} />
      <div className="pp-day-activity-time pp-day-activity-time--continuation">⋯</div>
      <div className="pp-day-activity-dot" style={{ background: accentColor }} />
      <div className="pp-day-activity-content">
        <div className="pp-day-activity-title">
          <span className="pp-day-activity-cat">{displayIcon}</span>
          <span className="pp-day-activity-name">{act.name}</span>
          <span className="pp-chip pp-chip--continuation">↳ suite ({fromLabel})</span>
        </div>
        {(city || dest) && (
          <div className="pp-day-activity-location">
            <CountryFlag emoji={destEmoji} size={13} /> {city?.name}{dest ? `, ${dest.country_name}` : ''}
          </div>
        )}
      </div>
      <button
        type="button"
        className="pp-day-activity-cut-btn"
        title="Arrêter l'activité juste avant ce créneau (retire celui-ci et tous les suivants)"
        onClick={() => onCutHere()}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6 6h12v12H6z"/>
        </svg>
      </button>
    </div>
  );
}

function DaySlot({
  slot, droppableId, acts, overflow, cities, destinations, groups, day, tripStartDate,
  onAssignGroupToDay, onAssignCityToDay, onRemoveActivity, onUpdateActivity, onDuplicateActivity, onAssignActivityToGroup,
  onResizeStart, resizingActId, resizeHighlight, onCutHere, travelSegments = {},
}) {
  const sorted = sortActsByTimeThenPosition(acts);

  const { isNativeOver, handlers } = useNativeDropTarget(
    groupId => onAssignGroupToDay(groupId, day, slot.defaultTime),
    cityId => onAssignCityToDay(cityId, day, slot.defaultTime),
  );

  return (
    <div
      className={`pp-day-slot pp-day-slot--${slot.key}${resizeHighlight ? ' pp-day-slot--resize-target' : ''}`}
      data-pp-slot={slot.key}
      data-pp-day={day}
    >
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
            className={`pp-day-slot-drop${snapshot.isDraggingOver || isNativeOver ? ' pp-day-slot-drop--over' : ''}${acts.length === 0 && overflow.length === 0 ? ' pp-day-slot-drop--empty' : ''}`}
          >
            {acts.length === 0 && overflow.length === 0 && !snapshot.isDraggingOver && (
              <div className="pp-day-slot-empty">Glissez ici</div>
            )}
            {sorted.map((act, idx) => (
              <Fragment key={act.id}>
                {/* Temps de trajet estimé depuis l'activité horodatée précédente de la
                    journée (même si elle est dans un créneau antérieur) — affiché juste
                    au-dessus de l'activité d'arrivée. Masqué pendant un drag qui
                    concerne ce créneau (départ ou survol) : dnd n'anime que les
                    Draggables, un connecteur resterait figé au milieu des cartes qui
                    s'écartent — avec une estimation de toute façon périmée puisque
                    l'ordre est en train de changer. Il réapparaît recalculé au drop. */}
                {!snapshot.isDraggingOver && !snapshot.draggingFromThisWith
                  && travelSegments[act.id] && <TravelConnector segment={travelSegments[act.id]} />}
                <ActivityItem
                  act={act} index={idx} variant="day" draggableIdPrefix="dayact:"
                  cities={cities} destinations={destinations} groups={groups} tripStartDate={tripStartDate}
                  onRemove={onRemoveActivity} onUpdate={onUpdateActivity} onDuplicate={onDuplicateActivity} onAssignToGroup={onAssignActivityToGroup}
                  onResizeStart={onResizeStart} resizing={resizingActId === act.id}
                />
              </Fragment>
            ))}
            {provided.placeholder}
            {overflow.map(({ act, fromLabel }) => (
              <ActivityContinuationCard
                key={`overflow-${act.id}-${slot.key}`} act={act} fromLabel={fromLabel}
                cities={cities} destinations={destinations} groups={groups}
                onCutHere={() => onCutHere(act, day, slot.key)}
              />
            ))}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default function DayView({
  trip, destinations, cities, activities, groups = [], lodgings = [], onAssignGroupToDay, onAssignCityToDay,
  onRemoveActivity, onUpdateActivity, onDuplicateActivity, onAssignActivityToGroup,
}) {
  const days = useMemo(() => getDaysBetween(trip.start_date, trip.end_date), [trip.start_date, trip.end_date]);
  const hasNoDates = !trip.start_date || !trip.end_date;

  const unplanned = activities.filter(a => !a.visit_date).sort((a, b) => a.position - b.position);

  const unplannedDrop = useNativeDropTarget(
    groupId => onAssignGroupToDay(groupId, null, null),
    cityId => onAssignCityToDay(cityId, null, null),
  );

  // ─── Étirement (drag-to-resize) d'une activité vers les créneaux (voire les
  // jours) suivants ───────────────────────────────────────────────────────────
  // Indépendant de @hello-pangea/dnd (qui gère déjà le déplacement de la carte
  // entière) : on suit ici la souris nous-mêmes, uniquement depuis la poignée
  // dédiée sur la carte, pour ne jamais entrer en conflit avec le drag normal.
  // { actId, startDay, startDayIdx, startMinutes, startSlotIdx,
  //   hoverDay, hoverDayIdx, hoverSlotIdx, hadDuration }
  const [resize, setResize] = useState(null);

  const beginResize = useCallback((act) => {
    const startMinutes = timeToMinutes(act.visit_time);
    if (startMinutes == null) return;
    const startDayIdx = days.indexOf(act.visit_date);
    if (startDayIdx === -1) return;
    const startSlotIdx = slotIndexForMinutes(startMinutes);
    setResize({
      actId: act.id,
      startDay: act.visit_date, startDayIdx, startMinutes, startSlotIdx,
      hoverDay: act.visit_date, hoverDayIdx: startDayIdx, hoverSlotIdx: startSlotIdx,
      hadDuration: !!act.duration_minutes,
    });
  }, [days]);

  useEffect(() => {
    if (!resize) return;

    function handleMove(e) {
      const point = e.touches ? e.touches[0] : e;
      const el = document.elementFromPoint(point.clientX, point.clientY);
      const slotEl = el?.closest('[data-pp-slot]');
      if (!slotEl) return;
      const hoverDay = slotEl.dataset.ppDay;
      const hoverDayIdx = days.indexOf(hoverDay);
      if (hoverDayIdx === -1) return;
      const hoverSlotIdx = SLOTS.findIndex(s => s.key === slotEl.dataset.ppSlot);
      if (hoverSlotIdx < 0) return;
      setResize(r => (r && (r.hoverDay !== hoverDay || r.hoverSlotIdx !== hoverSlotIdx)
        ? { ...r, hoverDay, hoverDayIdx, hoverSlotIdx }
        : r));
    }

    function handleUp() {
      setResize(r => {
        if (!r) return null;
        const dayOffset = r.hoverDayIdx - r.startDayIdx;
        const isLater = dayOffset > 0 || (dayOffset === 0 && r.hoverSlotIdx > r.startSlotIdx);
        if (isLater) {
          const endMinutesInHoverDay = SLOT_END_MINUTES[SLOTS[r.hoverSlotIdx].key];
          const duration = dayOffset * MINUTES_PER_DAY + endMinutesInHoverDay - r.startMinutes;
          onUpdateActivity(r.actId, { duration_minutes: duration > 0 ? duration : null });
        } else if (r.hadDuration) {
          // Relâché sur (ou avant) son créneau de départ alors qu'une durée était déjà
          // définie : on considère que l'utilisateur "annule" l'étirement.
          onUpdateActivity(r.actId, { duration_minutes: null });
        }
        // Sinon (simple clic sans durée préexistante) : on ne fait rien.
        return null;
      });
    }

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('touchmove', handleMove, { passive: true });
    window.addEventListener('touchend', handleUp);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleUp);
    };
  }, [resize, onUpdateActivity, days]);

  // Terminer l'étirement juste avant le créneau cliqué (sur une carte "suite"),
  // sans avoir à reprendre le geste depuis le point de départ. Le créneau cliqué
  // est lui-même retiré (et pas seulement ceux d'après) : sinon le tout premier
  // débordement resterait impossible à effacer sans redéfinir l'étirement complet
  // depuis l'activité d'origine.
  const cutStretchHere = useCallback((act, day, slotKey) => {
    const startDayIdx = days.indexOf(act.visit_date);
    const targetDayIdx = days.indexOf(day);
    if (startDayIdx === -1 || targetDayIdx === -1) return;
    const startMinutes = timeToMinutes(act.visit_time);
    const dayOffset = targetDayIdx - startDayIdx;
    const duration = dayOffset * MINUTES_PER_DAY + SLOT_START_MINUTES[slotKey] - startMinutes;
    // Couper juste avant le tout premier créneau de suite ramène exactement à la
    // fin du créneau de départ : une durée positive, mais qui ne provoque plus
    // aucun débordement réel. Dans ce cas, on retire complètement la durée plutôt
    // que de garder un chip "3h" trompeur pour une activité qui n'étire plus rien.
    const startSlotEnd = SLOT_END_MINUTES[SLOTS[slotIndexForMinutes(startMinutes)].key];
    const hasRealOverflow = duration > 0 && (startMinutes + duration) > startSlotEnd;
    onUpdateActivity(act.id, { duration_minutes: hasRealOverflow ? duration : null });
  }, [days, onUpdateActivity]);

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
                      onRemove={onRemoveActivity} onUpdate={onUpdateActivity} onDuplicate={onDuplicateActivity} onAssignToGroup={onAssignActivityToGroup}
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

  // ─── Calcul global (tous jours confondus) des créneaux pleins + des créneaux
  // "de suite" traversés par étirement — une activité étirée sur plusieurs jours
  // doit pouvoir apparaître dans des jours au-delà de celui où elle a été postée.
  const daySlotActs = {};
  const daySlotOverflow = {};
  days.forEach(d => {
    daySlotActs[d] = { matin: [], 'apres-midi': [], soir: [] };
    daySlotOverflow[d] = { matin: [], 'apres-midi': [], soir: [] };
  });
  activities.forEach(act => {
    if (!act.visit_date || !act.visit_time) return;
    const startDayIdx = days.indexOf(act.visit_date);
    if (startDayIdx === -1) return;
    const startMinutes = timeToMinutes(act.visit_time);
    const startSlotIdx = slotIndexForMinutes(startMinutes);
    daySlotActs[act.visit_date][SLOTS[startSlotIdx].key].push(act);
    if (!act.duration_minutes) return;

    const endTotalMinutes = startMinutes + act.duration_minutes - 1; // dernière minute couverte
    const endDayOffset = Math.floor(endTotalMinutes / MINUTES_PER_DAY);
    const endMinutesInEndDay = endTotalMinutes - endDayOffset * MINUTES_PER_DAY;
    const endSlotIdxInEndDay = slotIndexForMinutes(endMinutesInEndDay);

    // Borne la boucle à la durée réelle du voyage : le champ "durée" (formulaire
    // trajet) n'a pas de maximum, une saisie extrême (ex. des milliers d'heures)
    // ne doit pas faire tourner cette boucle pour rien au-delà des jours affichés.
    const maxDayOffset = days.length - 1 - startDayIdx;
    const cappedEndDayOffset = Math.min(endDayOffset, maxDayOffset);

    for (let dOff = 0; dOff <= cappedEndDayOffset; dOff++) {
      const dIdx = startDayIdx + dOff;
      const targetDay = days[dIdx];
      const fromSlot = dOff === 0 ? startSlotIdx + 1 : 0;
      const toSlot = dOff === endDayOffset ? endSlotIdxInEndDay : 2;
      const fromLabel = dOff === 0 ? SLOTS[startSlotIdx].label : `${formatDayLabel(days[startDayIdx])}`;
      for (let s = fromSlot; s <= toSlot; s++) {
        daySlotOverflow[targetDay][SLOTS[s].key].push({ act, fromLabel });
      }
    }
  });

  return (
    <div className="pp-day-view">
      <div className="pp-day-view-hint">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" opacity=".5">
          <path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/>
        </svg>
        Glissez un lieu vers un créneau (Matin / Après-midi / Soir) pour le planifier, ou tirez la poignée en bas d'une activité planifiée pour l'étirer sur les créneaux — voire les jours — suivants
      </div>

      {days.map((day, dayIdx) => {
        const dayActs = activities.filter(a => a.visit_date === day);
        const totalDay = dayActs.length;
        const doneDay = dayActs.filter(a => a.is_done).length;
        // Coût du jour = activités qui DÉMARRENT ce jour (une activité étirée sur
        // plusieurs jours n'est comptée qu'une fois, le jour de son début — son
        // prix n'est pas payé deux fois).
        const dayCost = sumCosts(dayActs);
        const libreActs = dayActs.filter(a => !a.visit_time);
        const nightLodgings = lodgingsForNight(lodgings, day);
        // Temps de trajet entre activités horodatées consécutives de la journée —
        // dérivé des activités à chaque rendu, donc recalculé automatiquement à
        // chaque déplacement, changement d'heure ou de lieu. Doit utiliser EXACTEMENT
        // le même tri que celui affiché par créneau (sortActsByTimeThenPosition) :
        // un tri différent (ex. comparaison de chaînes brutes sur visit_time, qui ne
        // départage pas les égalités par position) désynchronise les paires "from/to"
        // des cartes réellement adjacentes à l'écran — la distance affichée se
        // retrouve alors au-dessus de la mauvaise activité, ou manque entre deux
        // cartes visuellement consécutives.
        const travelSegments = buildTravelSegments(
          sortActsByTimeThenPosition(dayActs.filter(a => a.visit_time))
        );

        return (
          <DaySection
            key={day}
            day={day}
            dayIdx={dayIdx}
            totalDay={totalDay}
            doneDay={doneDay}
            dayCost={dayCost}
            nightLodgings={nightLodgings}
            slotActs={daySlotActs[day]}
            slotOverflow={daySlotOverflow[day]}
            travelSegments={travelSegments}
            libreActs={libreActs}
            cities={cities}
            destinations={destinations}
            groups={groups}
            tripStartDate={trip.start_date}
            onAssignGroupToDay={onAssignGroupToDay}
            onAssignCityToDay={onAssignCityToDay}
            onRemoveActivity={onRemoveActivity}
            onUpdateActivity={onUpdateActivity}
            onDuplicateActivity={onDuplicateActivity}
            onAssignActivityToGroup={onAssignActivityToGroup}
            onResizeStart={beginResize}
            resize={resize}
            onCutHere={cutStretchHere}
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
                    onRemove={onRemoveActivity} onUpdate={onUpdateActivity} onDuplicate={onDuplicateActivity} onAssignToGroup={onAssignActivityToGroup}
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
  day, dayIdx, totalDay, doneDay, dayCost = null, nightLodgings = [], slotActs, slotOverflow, travelSegments = {}, libreActs, cities, destinations, groups, tripStartDate,
  onAssignGroupToDay, onAssignCityToDay, onRemoveActivity, onUpdateActivity, onDuplicateActivity, onAssignActivityToGroup,
  onResizeStart, resize, onCutHere,
}) {
  const libreDrop = useNativeDropTarget(
    groupId => onAssignGroupToDay(groupId, day, null),
    cityId => onAssignCityToDay(cityId, day, null),
  );

  const isSlotHighlighted = (slotIdx) => {
    if (!resize) return false;
    if (dayIdx < resize.startDayIdx || dayIdx > resize.hoverDayIdx) return false;
    if (dayIdx === resize.startDayIdx && dayIdx === resize.hoverDayIdx) {
      return slotIdx >= resize.startSlotIdx && slotIdx <= resize.hoverSlotIdx;
    }
    if (dayIdx === resize.startDayIdx) return slotIdx >= resize.startSlotIdx;
    if (dayIdx === resize.hoverDayIdx) return slotIdx <= resize.hoverSlotIdx;
    return true; // jour entièrement compris entre le départ et le survol
  };

  return (
    <div className="pp-day-section">
      <div className="pp-day-section-header">
        <div className="pp-day-num">J{dayIdx + 1}</div>
        <div className="pp-day-info">
          <span className="pp-day-label">{formatDayLabel(day)}</span>
          {totalDay > 0 && (
            <span className={`pp-day-count${doneDay === totalDay ? ' pp-day-count--complete' : ''}`} title={`${doneDay} activité${doneDay > 1 ? 's' : ''} faite${doneDay > 1 ? 's' : ''} sur ${totalDay}`}>
              {doneDay}/{totalDay}
            </span>
          )}
          {dayCost != null && (
            <span className="pp-day-cost" title="Coût des activités de la journée (hors hébergements)">
              💰 {formatPrice(dayCost)}
            </span>
          )}
        </div>
      </div>

      {/* Où l'on dort CETTE nuit (check_in <= jour < check_out) — informatif
          uniquement, l'édition se fait dans la ville (panneau Villes) */}
      {nightLodgings.length > 0 && (
        <div className="pp-day-lodging-banner">
          {nightLodgings.map(l => {
            const lCity = cities?.find(c => c.id === l.city_id);
            const isLastNight = addDaysToDateStr(day, 1) === l.check_out;
            return (
              <span key={l.id} className="pp-day-lodging-item" title={l.address || undefined}>
                <span className="pp-day-lodging-icon">🏨</span>
                Nuit à <strong>{l.name}</strong>{lCity ? <span className="pp-day-lodging-city"> · {lCity.name}</span> : null}
                {day === l.check_in && <span className="pp-day-lodging-tag">arrivée</span>}
                {isLastNight && <span className="pp-day-lodging-tag pp-day-lodging-tag--last">dernière nuit</span>}
              </span>
            );
          })}
        </div>
      )}

      {/* 3 créneaux */}
      <div className="pp-day-slots">
        {SLOTS.map((slot, slotIdx) => (
          <DaySlot
            key={slot.key}
            slot={slot}
            day={day}
            droppableId={`slot:${slot.key}:${day}`}
            acts={slotActs[slot.key] || []}
            overflow={slotOverflow[slot.key] || []}
            travelSegments={travelSegments}
            cities={cities}
            destinations={destinations}
            groups={groups}
            tripStartDate={tripStartDate}
            onAssignGroupToDay={onAssignGroupToDay}
            onAssignCityToDay={onAssignCityToDay}
            onRemoveActivity={onRemoveActivity}
            onUpdateActivity={onUpdateActivity}
            onDuplicateActivity={onDuplicateActivity}
            onAssignActivityToGroup={onAssignActivityToGroup}
            onResizeStart={onResizeStart}
            resizingActId={resize?.actId}
            resizeHighlight={isSlotHighlighted(slotIdx)}
            onCutHere={onCutHere}
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
                onRemove={onRemoveActivity} onUpdate={onUpdateActivity} onDuplicate={onDuplicateActivity} onAssignToGroup={onAssignActivityToGroup}
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
