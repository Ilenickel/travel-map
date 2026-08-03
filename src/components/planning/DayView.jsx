import { useState, useEffect, useCallback, useMemo, Fragment } from 'react';
import { createPortal } from 'react-dom';
import { Droppable } from '@hello-pangea/dnd';
import { useTranslation, Trans } from 'react-i18next';
import { getDaysBetween, formatDayLabel, formatDateShort, ACTIVITY_CATEGORIES, TRANSPORT_MODES, lodgingsForNight, addDaysToDateStr, buildTravelSegments, buildSwapDaysMapping, buildMoveDaysMapping, timeToMinutes, sortActivitiesByTimeThenPosition as sortActsByTimeThenPosition, getCarriedOverActivities } from '../../lib/planningUtils';
import { COUNTRIES } from '../../data/index';
import { useToast } from '../../context/ToastContext';
import CountryFlag from './CountryFlag';
import ActivityItem from './ActivityItem';
import TravelConnector from './TravelConnector';
import DayRouteButton from './DayRouteButton';
import DayActionsMenu from './DayActionsMenu';
import SelectionActionBar from './SelectionActionBar';
import { useTravelRoutes } from '../../hooks/useTravelRoutes';
import i18n from '../../i18n';

// Étapes transmises à Google Maps pour UN jour donné de la vue par jour, dans
// le même ordre que ce qu'on y lit : activités reportées d'un jour précédent
// (une activité de la veille qui déborde sur ce jour), puis les activités
// horodatées, puis celles sans heure. Même logique que TripDayModeView (écran
// « Jour J »), généralisée à un jour quelconque plutôt qu'au seul jour courant.
// `cities`/`destinations` : la ville et le pays de chaque étape accompagnent son
// nom jusqu'à Google Maps (voir coordParam dans lib/googleMapsRoute.js) — sans
// eux, un nom seul se ferait géocoder à l'échelle du monde et le repère
// atterrirait sur le premier homonyme venu.
function routeStopsForDay(activities, day, cities = [], destinations = []) {
  const dayActs = activities.filter(a => a.visit_date === day);
  const carriedOver = getCarriedOverActivities(activities, day).map(({ act }) => act);
  const timed = sortActsByTimeThenPosition(dayActs.filter(a => a.visit_time));
  const allDay = dayActs.filter(a => !a.visit_time).sort((a, b) => a.position - b.position);
  const cityById = new Map((cities || []).map(c => [c.id, c]));
  const countryByDestId = new Map((destinations || []).map(d => [d.id, d.country_name]));
  return [...carriedOver, ...timed, ...allDay].map(act => {
    const city = cityById.get(act.city_id);
    return {
      id: act.id,
      name: act.name,
      address: act.place_address ?? null,
      city: city?.name ?? null,
      country: city ? (countryByDestId.get(city.destination_id) ?? null) : null,
      lat: act.place_lat ?? null,
      lng: act.place_lng ?? null,
    };
  });
}

function slotLabel(key) {
  return { matin: 'daySlots.matin', 'apres-midi': 'daySlots.apresMidi', soir: 'daySlots.soir' }[key];
}
const SLOTS = [
  { key: 'matin',      get label() { return i18n.t(slotLabel('matin'), { ns: 'planning' }); },      icon: '🌅', range: [0, 12],  defaultTime: '09:00' },
  { key: 'apres-midi', get label() { return i18n.t(slotLabel('apres-midi'), { ns: 'planning' }); },  icon: '☀',  range: [12, 18], defaultTime: '14:00' },
  { key: 'soir',       get label() { return i18n.t(slotLabel('soir'), { ns: 'planning' }); },        icon: '🌙', range: [18, 24], defaultTime: '20:00' },
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

// Type de données pour le drag-and-drop natif HTML5 (glisser une excursion
// ENTIÈRE vers un jour). Volontairement indépendant de @hello-pangea/dnd, qui gère
// lui le drag des lieux individuels : les deux systèmes utilisent des événements
// navigateur différents et ne se marchent jamais dessus.
export const NATIVE_DAYTRIP_DRAG_TYPE = 'application/x-triply-daytrip';

function useNativeDropTarget(onDropCity) {
  const [isNativeOver, setIsNativeOver] = useState(false);

  const isRelevant = (e) => {
    const types = e.dataTransfer?.types;
    return !!types && types.includes(NATIVE_DAYTRIP_DRAG_TYPE);
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
        const cityId = e.dataTransfer.getData(NATIVE_DAYTRIP_DRAG_TYPE);
        if (cityId) onDropCity(cityId);
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
  const { t } = useTranslation();
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
      title={t('dayView.continuationTitle', { name: act.name, from: fromLabel })}
    >
      <div className="pp-day-activity-group-bar" style={{ background: accentColor }} />
      <div className="pp-day-activity-time pp-day-activity-time--continuation">⋯</div>
      <div className="pp-day-activity-content">
        <div className="pp-day-activity-title">
          <span className="pp-day-activity-cat">{displayIcon}</span>
          <span className="pp-day-activity-name">{act.name}</span>
          <span className="pp-chip pp-chip--continuation">{t('dayView.continuationChip', { from: fromLabel })}</span>
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
        title={t('dayView.cutHereTitle')}
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
  onAssignCityToDay, onRemoveActivity, onUpdateActivity, onDuplicateActivity, onAssignActivityToGroup,
  onResizeStart, resizingActId, resizeHighlight, onCutHere, travelSegments = {}, travelRoutes = {},
  selecting = false, selectedIds, onToggleSelect, onLongPressSelect,
}) {
  const { t } = useTranslation();
  const sorted = sortActsByTimeThenPosition(acts);

  const { isNativeOver, handlers } = useNativeDropTarget(
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
              <div className="pp-day-slot-empty">{t('dayView.dropHere')}</div>
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
                  && travelSegments[act.id]
                  && <TravelConnector segment={travelSegments[act.id]} route={travelRoutes[act.id]} />}
                <ActivityItem
                  act={act} index={idx} variant="day" draggableIdPrefix="dayact:"
                  cities={cities} destinations={destinations} groups={groups} tripStartDate={tripStartDate}
                  onRemove={onRemoveActivity} onUpdate={onUpdateActivity} onDuplicate={onDuplicateActivity} onAssignToGroup={onAssignActivityToGroup}
                  onResizeStart={onResizeStart} resizing={resizingActId === act.id}
                  selectable={selecting} selected={!!selectedIds?.has(act.id)}
                  onToggleSelect={onToggleSelect} onLongPressSelect={onLongPressSelect}
                  dragDisabled={selecting}
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

// Couleurs des pastilles de la timeline mobile (J1 bleu, J2 violet, …) —
// cyclées par index de jour. Mobile uniquement (voir branche isMobile).
const DAY_COLORS = ['#6366f1', '#8b5cf6', '#0ea5e9', '#10b981', '#f59e0b', '#ec4899', '#14b8a6', '#f97316'];

// Icône engrenage incrustée dans le texte "Cliquez sur ⚙ pour définir les
// dates…" (dayView.noDatesNotice, via <Trans>) — même tracé que le bouton de
// paramétrage du voyage (TripEditorHeader, .pp-header-collapse-btn), pour
// que l'utilisateur reconnaisse visuellement le bouton à cliquer plutôt que
// de devoir deviner ce que "la partie paramétrage" désigne.
const SETTINGS_GEAR_ICON = (
  <span className="pp-inline-gear-icon" aria-hidden="true">
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
    </svg>
  </span>
);

export default function DayView({
  trip, destinations, cities, activities, groups = [], lodgings = [], isMobile = false, onAssignCityToDay,
  onRemoveActivity, onUpdateActivity, onDuplicateActivity, onAssignActivityToGroup,
  onRemoveActivities, onMoveActivitiesToDay,
  onRemapDays, onPatchTrip, onInsertDay, onDeleteDay, onDuplicateDay, onSetDayDone, onReloadTripData,
}) {
  const { t } = useTranslation();
  const toast = useToast();
  const days = useMemo(() => getDaysBetween(trip.start_date, trip.end_date), [trip.start_date, trip.end_date]);
  const hasNoDates = !trip.start_date || !trip.end_date;

  const unplanned = activities.filter(a => !a.visit_date).sort((a, b) => a.position - b.position);

  // Nombre d'activités par date + dernière date occupée — calculés UNE fois
  // pour tout le calendrier plutôt qu'un balayage complet des activités par
  // jour affiché (le menu de chaque journée en a besoin, et un voyage d'un
  // mois avec 200 activités multiplierait ces balayages à chaque rendu).
  const dayStats = useMemo(() => {
    const counts = {};
    let lastDated = null;
    for (const a of activities) {
      if (!a.visit_date) continue;
      counts[a.visit_date] = (counts[a.visit_date] || 0) + 1;
      if (!lastDated || a.visit_date > lastDated) lastDated = a.visit_date;
    }
    return { counts, lastDated };
  }, [activities]);

  // ─── Actions à l'échelle d'une journée (menu ⋯) ────────────────────────────
  // Une action peut toucher des dizaines de lignes en base : l'écran est
  // assombri et bloqué le temps de l'écriture, pour qu'un deuxième clic ne
  // vienne pas se superposer à une réorganisation encore en cours. Si tout va
  // vite, ce voile n'a pas le temps d'être vu — c'est le but.
  const [busy, setBusy] = useState(false);
  // Sélection multiple d'activités DANS une journée : `selectingDay` porte le
  // jour concerné (une seule journée à la fois — la barre d'actions est propre
  // au jour et déplacer des activités venues de plusieurs jours d'un coup ne
  // correspond à aucun geste naturel ici).
  const [selectingDay, setSelectingDay] = useState(null);
  const [selectedIds, setSelectedIds] = useState(() => new Set());

  const exitSelection = useCallback(() => {
    setSelectingDay(null);
    setSelectedIds(new Set());
  }, []);

  // Changement de voyage : TripEditor (et donc DayView) n'est jamais démonté
  // entre deux voyages (pas de `key={tripId}`, voir PlanningPage) — sans ce
  // nettoyage, une sélection laissée ouverte sur le 21 mars du voyage A
  // rouvrait la barre d'actions sur le 21 mars du voyage B, sur des activités
  // qui n'ont rien à voir.
  useEffect(() => { exitSelection(); }, [trip.id, exitSelection]);

  const toggleSelected = useCallback((actId) => {
    setSelectedIds(prev => {
      const next = new Set(prev);
      if (next.has(actId)) next.delete(actId); else next.add(actId);
      return next;
    });
  }, []);

  // Appui long sur une carte : entre en sélection ET coche la carte pressée —
  // même geste que dans le panneau Villes (CityBlock).
  const startSelectionWith = useCallback((day, actId) => {
    setSelectingDay(day);
    setSelectedIds(actId ? new Set([actId]) : new Set());
  }, []);

  // Ne garde que les ids encore réellement présents dans la journée en cours de
  // sélection (filet de sécurité si une activité a bougé par un autre biais).
  const selectedInDay = useMemo(
    () => activities.filter(a => a.visit_date === selectingDay && selectedIds.has(a.id)).map(a => a.id),
    [activities, selectingDay, selectedIds]
  );

  // Déplacement de la sélection vers un autre jour : chaque activité GARDE son
  // heure (donc son créneau) — voir onMoveActivitiesToDay, distinct du
  // déplacement depuis le panneau Villes qui, lui, remet tout à "toute la
  // journée".
  const handleSelectionAssignDay = useCallback(async (date) => {
    const ids = selectedInDay;
    if (!ids.length) return;
    exitSelection();
    setBusy(true);
    const ok = await onMoveActivitiesToDay(ids, date);
    setBusy(false);
    if (ok) toast?.success(t('selection.assignDaySuccess', { count: ids.length, date: formatDateShort(date) }));
    else toast?.error(t('selection.assignDayError'));
  }, [selectedInDay, exitSelection, onMoveActivitiesToDay, toast, t]);

  const handleSelectionDelete = useCallback(() => {
    if (selectedInDay.length) onRemoveActivities(selectedInDay);
    exitSelection();
  }, [selectedInDay, onRemoveActivities, exitSelection]);

  // Traduit le descripteur produit par le menu (DayActionsMenu) en écritures.
  // Chaque branche renvoie un booléen : un échec affiche un message ET
  // recharge le voyage, car une réorganisation interrompue en cours de route
  // laisse l'écran en avance ou en retard sur la base.
  const runDayAction = useCallback(async (day, dayIdx, desc) => {
    // Une sélection en cours n'a plus de sens après une réorganisation des
    // jours (insertion, suppression, décalage) : les activités cochées peuvent
    // avoir changé de date, et la barre resterait accrochée à un jour qui
    // n'existe plus.
    exitSelection();
    setBusy(true);
    let ok = false;
    let message = null;
    try {
      switch (desc.kind) {
        case 'swap': {
          // Échange jour par jour des deux tranches (une seule journée de part
          // et d'autre dans le cas courant) — voir buildSwapDaysMapping.
          const span = desc.spanDays || 1;
          const mapping = buildSwapDaysMapping(days, dayIdx, desc.targetDay, span);
          if (!mapping) break; // tranches qui se chevauchent : jamais proposé par l'écran
          ok = await onRemapDays(mapping);
          message = span > 1
            ? t('dayActions.successSwapPeriod', { count: span, date: formatDateShort(desc.targetDay) })
            : t('dayActions.successSwap', { a: formatDateShort(day), b: formatDateShort(desc.targetDay) });
          break;
        }
        case 'move': {
          // La date de fin est repoussée AVANT le déplacement : dans l'ordre
          // inverse, les activités atterriraient un instant sur des jours hors
          // calendrier — invisibles à l'écran si l'extension venait à échouer.
          if (desc.extendEndTo && !(await onPatchTrip(trip.id, { end_date: desc.extendEndTo }))) break;
          const mapping = buildMoveDaysMapping(days, dayIdx, desc.targetDay, desc.spanDays);
          if (!mapping) break;
          ok = await onRemapDays(mapping);
          message = t('dayActions.successMove', { count: desc.spanDays, date: formatDateShort(desc.targetDay) });
          break;
        }
        case 'duplicate':
          ok = await onDuplicateDay(trip.id, day, desc.targetDay);
          message = t('dayActions.successDuplicate', { date: formatDateShort(desc.targetDay) });
          break;
        case 'insert':
          ok = await onInsertDay(trip.id, day);
          message = t('dayActions.successInsert', { date: formatDateShort(addDaysToDateStr(day, 1)) });
          break;
        case 'unplan':
          ok = await onRemapDays({ [day]: null });
          message = t('dayActions.successUnplan', { date: formatDateShort(day) });
          break;
        case 'delete':
          ok = await onDeleteDay(trip.id, day);
          message = t('dayActions.successDelete', { date: formatDateShort(day) });
          break;
        case 'done':
          ok = await onSetDayDone(day, desc.value);
          message = desc.value ? t('dayActions.successDone') : t('dayActions.successUndone');
          break;
        default:
          break;
      }
    } finally {
      setBusy(false);
    }
    if (ok) {
      if (message) toast?.success(message);
    } else {
      toast?.error(t('dayActions.error'));
      onReloadTripData?.();
    }
  }, [days, trip.id, exitSelection, onRemapDays, onPatchTrip, onInsertDay, onDeleteDay, onDuplicateDay, onSetDayDone, onReloadTripData, toast, t]);

  const unplannedDrop = useNativeDropTarget(
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
  const [unplannedOpen, setUnplannedOpen] = useState(false);

  // Segments de trajet de TOUS les jours calculés ici, en amont du rendu d'un
  // jour : le hook de routage doit voir l'ensemble des segments à l'écran pour
  // n'émettre qu'un seul appel réseau, alors qu'il serait interdit (règle des
  // hooks) de l'appeler depuis renderDaySection, exécuté une fois par jour et
  // après un retour anticipé. Les identifiants de segment sont des identifiants
  // d'activité, uniques d'un jour à l'autre : la fusion est sans collision.
  const travelSegmentsByDay = useMemo(() => {
    const out = {};
    for (const day of days) {
      out[day] = buildTravelSegments(
        sortActsByTimeThenPosition(activities.filter(a => a.visit_date === day && a.visit_time))
      );
    }
    return out;
  }, [days, activities]);
  const allTravelSegments = useMemo(
    () => Object.assign({}, ...Object.values(travelSegmentsByDay)),
    [travelSegmentsByDay]
  );
  const travelRoutes = useTravelRoutes(allTravelSegments);

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
          <p><Trans i18nKey="dayView.noDatesNotice" components={{ icon: SETTINGS_GEAR_ICON }} /></p>
        </div>
        {activities.length > 0 && (
          <Droppable droppableId="day-unplanned">
            {(provided, snapshot) => (
              <div
                className={`pp-day-section pp-day-section--unplanned${snapshot.isDraggingOver || unplannedDrop.isNativeOver ? ' pp-day-section--over' : ''}`}
                {...unplannedDrop.handlers}
              >
                <div className="pp-day-section-header">
                  <span className="pp-day-label">{t('dayView.activitiesCount', { count: activities.length })}</span>
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

  // Rendu d'un jour (identique desktop/mobile) — factorisé pour être réutilisé
  // dans la timeline mobile sans dupliquer la longue liste de props. hideHeader
  // : la timeline mobile affiche déjà l'info du jour à côté de la pastille
  // (voir plus bas), donc masque la boîte d'en-tête interne de DaySection pour
  // ne pas la répéter — desktop ne passe jamais ce paramètre (reste true).
  const renderDaySection = (day, dayIdx, hideHeader = false) => {
    const dayActs = activities.filter(a => a.visit_date === day);
    const libreActs = dayActs.filter(a => !a.visit_time);
    const travelSegments = travelSegmentsByDay[day] || {};
    return (
      <DaySection
        key={day}
        day={day}
        dayIdx={dayIdx}
        importedDay={(trip.import_added_days || []).includes(day)}
        dayActs={dayActs}
        totalDay={dayActs.length}
        doneDay={dayActs.filter(a => a.is_done).length}
        nightLodgings={lodgingsForNight(lodgings, day)}
        slotActs={daySlotActs[day]}
        slotOverflow={daySlotOverflow[day]}
        travelSegments={travelSegments}
        travelRoutes={travelRoutes}
        libreActs={libreActs}
        cities={cities}
        destinations={destinations}
        groups={groups}
        tripStartDate={trip.start_date}
        onAssignCityToDay={onAssignCityToDay}
        onRemoveActivity={onRemoveActivity}
        onUpdateActivity={onUpdateActivity}
        onDuplicateActivity={onDuplicateActivity}
        onAssignActivityToGroup={onAssignActivityToGroup}
        onResizeStart={beginResize}
        resize={resize}
        onCutHere={cutStretchHere}
        hideHeader={hideHeader}
        selecting={selectingDay === day}
        selectedIds={selectedIds}
        onToggleSelect={toggleSelected}
        onLongPressSelect={(actId) => startSelectionWith(day, actId)}
      />
    );
  };

  // ─── Mobile : MÊME liste multi-jours + drag&drop, avec une timeline verticale
  // à gauche (pastilles J1/J2… colorées reliées par un trait). Rendue pour
  // toutes les tailles d'écran depuis le 2026-07-24 (test demandé : même
  // traitement sur ordinateur qu'en mobile/tablette, plus de branche séparée
  // par isMobile) — voir aussi PlanningPage.css, .pp-day-timeline-body
  // .pp-day-section (grosse carte retirée) et .pp-day-cities-badge (nom de
  // ville en texte coloré plutôt qu'en badge). ──────────────
  return (
      <div className="pp-day-view pp-day-view--timeline">
        {/* Visible sur toutes les tailles d'écran (2026-07-24 : remontée sur
            mobile/tablette aussi, où elle était masquée avant l'unification
            des deux rendus). Icône ampoule "astuce" (pas la flèche d'avant,
            retirée puis redemandée sous une autre forme le 2026-07-24). */}
        <div className="pp-day-view-hint">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="pp-day-view-hint-icon">
            <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/>
          </svg>
          {t('dayView.hint')}
        </div>
        <div className="pp-day-timeline">
          {unplanned.length > 0 && (
            <div className="pp-day-timeline-row">
              <div className="pp-day-timeline-node">
                <div className="pp-day-timeline-circle pp-day-timeline-circle--unplanned">?</div>
              </div>
              <div className="pp-day-timeline-body">
                <div className="pp-day-section pp-day-section--unplanned">
                  <button
                    type="button"
                    className="pp-day-section-header pp-day-section-header--toggle"
                    onClick={() => setUnplannedOpen(o => !o)}
                    aria-expanded={unplannedOpen}
                  >
                    <div className="pp-day-info">
                      <span className="pp-day-label">{t('dayView.unplannedLabel')}</span>
                      <span className="pp-day-count">{t('dayView.unplannedCount', { count: unplanned.length })}</span>
                      {!unplannedOpen && <span className="pp-day-section-hint">{t('dayView.clickToShow')}</span>}
                    </div>
                    <svg
                      className={`pp-day-section-chevron${unplannedOpen ? ' pp-day-section-chevron--open' : ''}`}
                      width="18" height="18" viewBox="0 0 24 24" fill="currentColor"
                    >
                      <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"/>
                    </svg>
                  </button>
                  <Droppable droppableId="day-unplanned">
                    {(provided, snapshot) => {
                      const isOver = snapshot.isDraggingOver || unplannedDrop.isNativeOver;
                      const forceOpen = unplannedOpen || isOver;
                      return (
                        <div
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                          {...unplannedDrop.handlers}
                          className={`pp-day-activities pp-day-unplanned-list${isOver ? ' pp-day-activities--over' : ''}${forceOpen ? '' : ' pp-day-activities--collapsed'}`}
                        >
                          {forceOpen && unplanned.map((act, idx) => (
                            <ActivityItem
                              key={act.id} act={act} index={idx} variant="day" draggableIdPrefix="dayact:"
                              cities={cities} destinations={destinations} groups={groups} tripStartDate={trip.start_date}
                              onRemove={onRemoveActivity} onUpdate={onUpdateActivity} onDuplicate={onDuplicateActivity} onAssignToGroup={onAssignActivityToGroup}
                            />
                          ))}
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            </div>
          )}
          {days.map((day, dayIdx) => {
            const dayActs = activities.filter(a => a.visit_date === day);
            const totalDay = dayActs.length;
            const doneDay = dayActs.filter(a => a.is_done).length;
            const dayCityLabels = citiesForDay(cities, dayActs);
            const importedDay = (trip.import_added_days || []).includes(day);
            return (
              <div
                className="pp-day-timeline-row"
                key={day}
                style={{ '--node-color': DAY_COLORS[dayIdx % DAY_COLORS.length] }}
              >
                <div className="pp-day-timeline-node">
                  <div className="pp-day-timeline-circle">
                    {t('day.short', { n: dayIdx + 1 })}
                  </div>
                </div>
                <div className="pp-day-timeline-body">
                  {/* En-tête UNIQUE du jour, hors boîte, juste à côté de la
                      pastille — évite le doublon avec l'en-tête interne de
                      DaySection (masqué ici via hideHeader, signalé le
                      2026-07-23 "on a deux fois l'info du jour"). */}
                  <div className="pp-day-timeline-header">
                    <span className="pp-day-timeline-date">{formatDayLabel(day)}</span>
                    {dayCityLabels.length > 0 && (
                      <span className="pp-day-cities-badge" title={t('dayView.cityForDayTitle')}>
                        📍 {dayCityLabels.join(' · ')}
                      </span>
                    )}
                    {importedDay && (
                      <span className="pp-day-imported-badge" title={t('dayView.importedDayTitle')}>
                        📥 {t('dayView.importedDayBadge')}
                      </span>
                    )}
                    {totalDay > 0 && (
                      <span className={`pp-day-count${doneDay === totalDay ? ' pp-day-count--complete' : ''}`} title={t('dayView.doneCountTitle', { done: doneDay, total: totalDay, count: doneDay })}>
                        {doneDay}/{totalDay}
                      </span>
                    )}
                    {/* Un seul bouton par jour, pas réservé au « Jour J » : voir
                        TripDayModeView pour l'écran plein écran du jour courant,
                        cette même action doit rester disponible pour N'IMPORTE
                        QUEL jour du voyage depuis la vue par jour (demandé le
                        2026-07-31). `margin-left: auto` (CSS) le pousse à droite
                        de l'en-tête, sans perturber les badges qui précèdent. */}
                    {totalDay > 0 && <DayRouteButton stops={routeStopsForDay(activities, day, cities, destinations)} variant="link" />}
                    {/* Actions sur la journée entière (intervertir, décaler,
                        insérer un jour…) : disponible sur TOUS les jours, y
                        compris vides — "ajouter une journée après" ou "déplacer
                        vers" ont justement du sens sur une journée sans contenu.
                        `hasContentAfter`/`insertExtendsEnd` prennent le contenu
                        au sens large : lieux, restaurants et trajets (tous des
                        activités, distinguées par leur catégorie) MAIS aussi les
                        hébergements, qui vivent dans leur propre table et se
                        décalent avec le reste. */}
                    <DayActionsMenu
                      day={day}
                      dayIdx={dayIdx}
                      days={days}
                      tripEndDate={trip.end_date}
                      activityCount={totalDay}
                      doneCount={doneDay}
                      countsByDay={dayStats.counts}
                      hasContentAfter={(!!dayStats.lastDated && dayStats.lastDated > day)
                        || lodgings.some(l => l.check_in && l.check_in > day)}
                      insertExtendsEnd={day === days[days.length - 1]
                        || (dayStats.counts[trip.end_date] || 0) > 0
                        || lodgingsForNight(lodgings, trip.end_date).length > 0}
                      onRun={(desc) => runDayAction(day, dayIdx, desc)}
                      onStartSelection={() => startSelectionWith(day, null)}
                    />
                  </div>
                  {selectingDay === day && (
                    <SelectionActionBar
                      count={selectedInDay.length}
                      tripStartDate={trip.start_date}
                      tripEndDate={trip.end_date}
                      onAssignDay={handleSelectionAssignDay}
                      onDelete={handleSelectionDelete}
                      onCancel={exitSelection}
                    />
                  )}
                  {renderDaySection(day, dayIdx, true)}
                </div>
              </div>
            );
          })}
        </div>
        {/* Voile de progression des actions de journée — porté par <body> pour
            couvrir aussi l'en-tête et le panneau des villes : une réorganisation
            en cours ne doit pas pouvoir être doublée par un clic ailleurs. */}
        {busy && createPortal(
          <div className="pp-busy-overlay" role="alert" aria-busy="true">
            <div className="pp-spinner" />
            <span className="pp-busy-overlay-label">{t('dayActions.busy')}</span>
          </div>,
          document.body
        )}
      </div>
    );
}

// Confort visuel : quelle(s) ville(s) correspondent à ce jour, déduit
// directement des activités RÉELLEMENT datées ce jour-là (ville de base ET
// excursions) — plus de champ "jours prévus" séparé à tenir synchronisé avec
// le contenu réel. Gère nativement les combos (ex. matinée à Tokyo, après-midi
// à Kyoto le même jour de transition : les deux badges apparaissent) et une
// activité isolée placée loin du reste du séjour dans cette ville (elle
// n'avait pas de badge avant si elle tombait hors de la plage
// start_date/planned_days déclarée — elle en a un maintenant, à sa vraie
// place). `dayActs` : activités DÉJÀ filtrées sur ce jour par l'appelant
// (DayView), toutes catégories confondues (place ou trajet, peu importe).
function citiesForDay(cities, dayActs) {
  const cityIdsToday = new Set((dayActs || []).map(a => a.city_id));
  return (cities || []).filter(c => cityIdsToday.has(c.id)).map(c => c.name);
}

function DaySection({
  day, dayIdx, importedDay = false, dayActs = [], totalDay, doneDay, nightLodgings = [], slotActs, slotOverflow, travelSegments = {}, travelRoutes = {}, libreActs, cities, destinations, groups, tripStartDate,
  onAssignCityToDay, onRemoveActivity, onUpdateActivity, onDuplicateActivity, onAssignActivityToGroup,
  onResizeStart, resize, onCutHere, hideHeader = false,
  selecting = false, selectedIds, onToggleSelect, onLongPressSelect,
}) {
  const { t } = useTranslation();
  const libreDrop = useNativeDropTarget(
    cityId => onAssignCityToDay(cityId, day, null),
  );

  const dayCityLabels = citiesForDay(cities, dayActs);

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
      {/* hideHeader (rail mobile, DayView) : cette même info (jour, ville(s),
          compteur) est déjà affichée UNE FOIS, hors boîte, juste à côté de la
          pastille de la timeline — la répéter ici ferait doublon (signalé le
          2026-07-23, "on a deux fois l'info du jour"). Desktop : toujours
          affiché, hideHeader jamais passé à true. */}
      {!hideHeader && (
        <div className="pp-day-section-header">
          <div className="pp-day-num">{t('day.short', { n: dayIdx + 1 })}</div>
          <div className="pp-day-info">
            <span className="pp-day-label">{formatDayLabel(day)}</span>
            {dayCityLabels.length > 0 && (
              <span className="pp-day-cities-badge" title={t('dayView.cityForDayTitle')}>
                📍 {dayCityLabels.join(' · ')}
              </span>
            )}
            {/* Jour ajouté automatiquement parce qu'un voyage importé était plus
                long que les dates du voyage (voir handleImportTrip) : signalé,
                sinon l'extension passerait pour une erreur de saisie de dates. */}
            {importedDay && (
              <span className="pp-day-imported-badge" title={t('dayView.importedDayTitle')}>
                📥 {t('dayView.importedDayBadge')}
              </span>
            )}
            {totalDay > 0 && (
              <span className={`pp-day-count${doneDay === totalDay ? ' pp-day-count--complete' : ''}`} title={t('dayView.doneCountTitle', { done: doneDay, total: totalDay, count: doneDay })}>
                {doneDay}/{totalDay}
              </span>
            )}
          </div>
        </div>
      )}

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
                {t('dayView.nightAt')} <strong>{l.name}</strong>{lCity ? <span className="pp-day-lodging-city"> · {lCity.name}</span> : null}
                {day === l.check_in && <span className="pp-day-lodging-tag">{t('dayView.arrivalTag')}</span>}
                {isLastNight && <span className="pp-day-lodging-tag pp-day-lodging-tag--last">{t('dayView.lastNightTag')}</span>}
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
            travelRoutes={travelRoutes}
            cities={cities}
            destinations={destinations}
            groups={groups}
            tripStartDate={tripStartDate}
            onAssignCityToDay={onAssignCityToDay}
            onRemoveActivity={onRemoveActivity}
            onUpdateActivity={onUpdateActivity}
            onDuplicateActivity={onDuplicateActivity}
            onAssignActivityToGroup={onAssignActivityToGroup}
            onResizeStart={onResizeStart}
            resizingActId={resize?.actId}
            resizeHighlight={isSlotHighlighted(slotIdx)}
            onCutHere={onCutHere}
            selecting={selecting}
            selectedIds={selectedIds}
            onToggleSelect={onToggleSelect}
            onLongPressSelect={onLongPressSelect}
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
                {t('activity.allDayChip')}
              </div>
            )}
            {libreActs.map((act, idx) => (
              <ActivityItem
                key={act.id} act={act} index={idx} variant="day" draggableIdPrefix="dayact:"
                cities={cities} destinations={destinations} groups={groups} tripStartDate={tripStartDate}
                onRemove={onRemoveActivity} onUpdate={onUpdateActivity} onDuplicate={onDuplicateActivity} onAssignToGroup={onAssignActivityToGroup}
                selectable={selecting} selected={!!selectedIds?.has(act.id)}
                onToggleSelect={onToggleSelect} onLongPressSelect={onLongPressSelect}
                dragDisabled={selecting}
              />
            ))}
            {provided.placeholder}
            {(snapshot.isDraggingOver || libreDrop.isNativeOver) && libreActs.length === 0 && (
              <div className="pp-day-libre-empty">{t('dayView.dropAllDay')}</div>
            )}
          </div>
        )}
      </Droppable>
    </div>
  );
}
