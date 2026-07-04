import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Draggable } from '@hello-pangea/dnd';
import { useTranslation } from 'react-i18next';
import { ACTIVITY_CATEGORIES, TRANSPORT_MODES, formatDateShort, formatTimeShort, formatDuration, formatPrice } from '../../lib/planningUtils';
import { COUNTRIES } from '../../data/index';
import CountryFlag from './CountryFlag';
import { setHoveredActivity, clearHoveredActivity } from '../../lib/hoverTracker';
import { useAttachmentsCount } from '../../context/AttachmentsCountContext';
import AttachmentsPanel from './AttachmentsPanel';

const CATEGORY_LIST = Object.entries(ACTIVITY_CATEGORIES);
const TRANSPORT_MODE_LIST = Object.entries(TRANSPORT_MODES);

export default function ActivityItem({
  act, index, tripStartDate, groups, onRemove, onUpdate, onDuplicate, onAssignToGroup,
  variant = 'list', draggableIdPrefix = '', cities, destinations,
  onResizeStart, resizing = false, dragDisabled = false,
  selectable = false, selected = false, onToggleSelect,
}) {
  const { t } = useTranslation();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(act.name);
  const [note, setNote] = useState(act.description || '');
  const [date, setDate] = useState(act.visit_date || '');
  const [time, setTime] = useState(act.visit_time || '');
  // "Toute la journée" : l'activité est planifiée pour un jour mais sans créneau
  // précis, donc pas confinée à Matin/Après-midi/Soir (elle apparaît dans la section
  // "Toute la journée" du calendrier) — utile pour une excursion qui déborde d'un
  // seul créneau, sans avoir besoin d'une heure de fin.
  const [allDay, setAllDay] = useState(!!act.visit_date && !act.visit_time);
  const [category, setCategory] = useState(act.category || 'other');
  const [transportMode, setTransportMode] = useState(act.transport_mode || 'voiture');
  const [durationH, setDurationH] = useState(act.duration_minutes ? Math.floor(act.duration_minutes / 60) : '');
  const [durationM, setDurationM] = useState(act.duration_minutes ? act.duration_minutes % 60 : '');
  // `?? ''` et non `|| ''` : un coût de 0 € (activité gratuite notée
  // volontairement) doit réapparaître dans le champ, pas être confondu
  // avec "pas de coût renseigné".
  const [cost, setCost] = useState(act.cost ?? '');
  const [groupId, setGroupId] = useState(act.group_id || null);
  const [showGroupPicker, setShowGroupPicker] = useState(false);
  // Le champ date s'ouvre pré-rempli à la date de début du voyage (pour éviter à
  // l'utilisateur de faire défiler 30 mois dans le sélecteur), mais ça reste une
  // valeur purement visuelle tant qu'il n'a pas lui-même modifié le champ : sinon
  // enregistrer sans y toucher planifierait le lieu au jour 1 silencieusement.
  const [dateTouched, setDateTouched] = useState(false);

  const startEditing = () => {
    if (!act.visit_date && tripStartDate) setDate(tripStartDate);
    setDateTouched(false);
    setEditing(true);
  };

  useEffect(() => {
    if (!editing) {
      setName(act.name);
      setNote(act.description || '');
      setDate(act.visit_date || '');
      setTime(act.visit_time || '');
      setAllDay(!!act.visit_date && !act.visit_time);
      setCategory(act.category || 'other');
      setTransportMode(act.transport_mode || 'voiture');
      setDurationH(act.duration_minutes ? Math.floor(act.duration_minutes / 60) : '');
      setDurationM(act.duration_minutes ? act.duration_minutes % 60 : '');
      setCost(act.cost ?? '');
      setGroupId(act.group_id || null);
    }
  }, [act.name, act.description, act.visit_date, act.visit_time, act.category, act.transport_mode, act.duration_minutes, act.cost, act.group_id, editing]);

  const toggleAllDay = () => {
    setAllDay(a => {
      // On ne vide jamais `time` en cochant : le champ est simplement désactivé le
      // temps que la case est cochée (save() force visit_time à null tant que allDay
      // est vrai, quelle que soit la valeur de `time`). Ça permet de décocher sans
      // perdre l'heure d'origine si l'utilisateur change d'avis avant d'enregistrer —
      // sinon un aller-retour coche/décoche remplaçait silencieusement une heure déjà
      // définie par un horaire générique.
      if (a && !time) setTime('09:00');
      return !a;
    });
  };

  const save = () => {
    if (!name.trim()) return;
    // Si l'activité n'avait pas de date et que l'utilisateur n'a pas touché le champ,
    // on ignore la valeur pré-remplie (jour 1) et on garde l'activité non planifiée.
    const finalDate = (!act.visit_date && !dateTouched) ? null : (date || null);
    const isTransport = category === 'transport';
    // min/max des inputs n'empêchent ni une saisie clavier négative, ni une valeur
    // au-delà de max (ces attributs HTML ne bloquent que les flèches +/-, pas la
    // frappe libre) : on reclampe donc ici, sans quoi un "999" tapé au clavier
    // produirait un trajet de plusieurs dizaines de jours.
    const clampedH = Math.min(99, Math.max(0, parseInt(durationH, 10) || 0));
    const clampedM = Math.min(59, Math.max(0, parseInt(durationM, 10) || 0));
    const totalMinutes = clampedH * 60 + clampedM;
    // Même règle que le prix des hébergements (LodgingForm) : min="0" ne bloque
    // pas une saisie clavier négative, on reclampe donc à l'enregistrement.
    const parsedCost = cost === '' ? null : Math.max(0, parseFloat(cost) || 0);
    onUpdate(act.id, {
      name: name.trim(),
      description: note.trim() || null,
      visit_date: finalDate,
      visit_time: allDay ? null : (time || null),
      category: category || 'other',
      transport_mode: isTransport ? transportMode : null,
      duration_minutes: isTransport && totalMinutes > 0 ? totalMinutes : null,
      cost: parsedCost,
    });
    if (groupId !== act.group_id && onAssignToGroup) {
      onAssignToGroup(act.id, groupId);
    }
    setEditing(false);
  };

  const cancel = () => {
    setName(act.name);
    setNote(act.description || '');
    setDate(act.visit_date || '');
    setTime(act.visit_time || '');
    setAllDay(!!act.visit_date && !act.visit_time);
    setCategory(act.category || 'other');
    setTransportMode(act.transport_mode || 'voiture');
    setDurationH(act.duration_minutes ? Math.floor(act.duration_minutes / 60) : '');
    setDurationM(act.duration_minutes ? act.duration_minutes % 60 : '');
    setCost(act.cost ?? '');
    setGroupId(act.group_id || null);
    setEditing(false);
  };

  const handleQuickGroup = (gid) => {
    if (onAssignToGroup) onAssignToGroup(act.id, gid);
    setShowGroupPicker(false);
  };

  const cat = ACTIVITY_CATEGORIES[act.category] || ACTIVITY_CATEGORIES.other;
  const group = groups?.find(g => g.id === act.group_id);
  const accentColor = group ? group.color : cat.color;

  // Vue "jour" (calendrier) : affiche en plus la ville/pays de rattachement, puisque
  // la vue par jour mélange des activités de plusieurs villes sur une même journée.
  const city = variant === 'day' ? cities?.find(c => c.id === act.city_id) : null;
  const dest = variant === 'day' ? destinations?.find(d => city && d.id === city.destination_id) : null;
  const destEmoji = dest ? (COUNTRIES[dest.country_code]?.emoji || '📍') : '📍';
  const isTransport = act.category === 'transport';
  const displayIcon = isTransport ? (TRANSPORT_MODES[act.transport_mode]?.icon || cat.icon) : cat.icon;
  // La durée sert aussi à étirer une activité (pas seulement un trajet) sur
  // plusieurs créneaux de la vue par jour : on l'affiche donc quelle que soit
  // la catégorie dès qu'elle est renseignée.
  const durationLabel = act.duration_minutes ? formatDuration(act.duration_minutes) : '';
  const canResize = variant === 'day' && !!onResizeStart && !!act.visit_time;
  const costLabel = formatPrice(act.cost);
  const { count: attachmentCount } = useAttachmentsCount(act.id);

  const toggleDone = (e) => {
    e.stopPropagation();
    onUpdate(act.id, { is_done: !act.is_done });
  };

  const checkButton = (
    <button
      type="button"
      className={`pp-activity-check${act.is_done ? ' pp-activity-check--done' : ''}`}
      onClick={toggleDone}
      title={act.is_done ? t('activity.markUndone') : t('activity.markDone')}
      aria-pressed={!!act.is_done}
    >
      {act.is_done ? (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
      ) : null}
    </button>
  );

  // Le glisser-déposer normal (réordonner, déplacer vers un groupe/jour) et la
  // sélection multiple se marchent dessus si les deux sont actifs en même temps
  // (un mousedown pour démarrer un drag vs un clic pour cocher) — désactivé le
  // temps que la sélection est active, quel que soit ce que le parent a lui-même
  // déjà réglé via `dragDisabled`.
  const effectiveDragDisabled = dragDisabled || selectable;

  return (
    <Draggable draggableId={`${draggableIdPrefix}${act.id}`} index={index} isDragDisabled={effectiveDragDisabled}>
      {(provided, snapshot) => {
        const card = (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...(!editing && !effectiveDragDisabled ? provided.dragHandleProps : {})}
          onMouseEnter={() => setHoveredActivity(act.id)}
          onMouseLeave={() => clearHoveredActivity(act.id)}
          className={
            variant === 'day'
              ? `pp-day-activity${snapshot.isDragging ? ' pp-day-activity--dragging' : ''}${editing ? ' pp-activity--editing' : ''}${resizing ? ' pp-day-activity--resizing' : ''}${act.is_done ? ' pp-day-activity--done' : ''}`
              : `pp-activity${snapshot.isDragging ? ' pp-activity--dragging' : ''}${editing ? ' pp-activity--editing' : ''}${act.is_done ? ' pp-activity--done' : ''}`
          }
          style={{
            ...provided.draggableProps.style,
            '--cat-color': accentColor,
            '--group-color': group?.color,
          }}
        >
          {editing ? (
            <div className="pp-activity-edit">
              <input
                className="pp-activity-name-input"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder={t('activity.namePlaceholder')}
                autoFocus
                onKeyDown={e => e.key === 'Enter' && save()}
              />

              {/* Category */}
              <div className="pp-activity-field">
                <span className="pp-activity-field-label">{t('activity.categoryLabel')}</span>
                <div className="pp-cat-picker">
                  {CATEGORY_LIST.map(([key, val]) => (
                    <button
                      key={key}
                      className={`pp-cat-btn${category === key ? ' active' : ''}`}
                      onClick={() => setCategory(key)}
                      title={val.label}
                      style={{ '--cat-color': val.color }}
                    >
                      {val.icon}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mode de transport + durée (uniquement pour un trajet) */}
              {category === 'transport' && (
                <div className="pp-activity-field">
                  <span className="pp-activity-field-label">{t('activity.transportModeLabel')}</span>
                  <div className="pp-cat-picker">
                    {TRANSPORT_MODE_LIST.map(([key, val]) => (
                      <button
                        key={key}
                        type="button"
                        className={`pp-cat-btn${transportMode === key ? ' active' : ''}`}
                        onClick={() => setTransportMode(key)}
                        title={val.label}
                        style={{ '--cat-color': ACTIVITY_CATEGORIES.transport.color }}
                      >
                        {val.icon}
                      </button>
                    ))}
                  </div>
                  <div className="pp-trajet-duration">
                    <input
                      type="number" min="0" max="99" placeholder="0"
                      className="pp-trajet-duration-input"
                      value={durationH}
                      onChange={e => setDurationH(e.target.value)}
                    />
                    <span>h</span>
                    <input
                      type="number" min="0" max="59" placeholder="00"
                      className="pp-trajet-duration-input"
                      value={durationM}
                      onChange={e => setDurationM(e.target.value)}
                    />
                    <span>min</span>
                  </div>
                </div>
              )}

              {/* Date + heure */}
              <div className="pp-activity-datetime">
                <div className="pp-activity-datetime-field">
                  <label>{t('activity.dateLabel')}</label>
                  <input
                    className="pp-activity-date-input"
                    type="date"
                    value={date}
                    min={tripStartDate || undefined}
                    onChange={e => { setDate(e.target.value); setDateTouched(true); }}
                  />
                </div>
                <div className="pp-activity-datetime-field">
                  <div className="pp-activity-datetime-field-head">
                    <label>{t('activity.timeLabel')}</label>
                    <button
                      type="button"
                      className={`pp-allday-toggle${allDay ? ' active' : ''}`}
                      onClick={toggleAllDay}
                      title={t('activity.allDayToggleTitle')}
                    >
                      <span className="pp-allday-toggle-track"><span className="pp-allday-toggle-thumb" /></span>
                      {t('activity.allDayToggleLabel')}
                    </button>
                  </div>
                  <input
                    className="pp-activity-time-input"
                    type="time"
                    value={time}
                    disabled={allDay}
                    onChange={e => setTime(e.target.value)}
                  />
                </div>
                <div className="pp-activity-datetime-field pp-activity-datetime-field--cost">
                  <label>{t('activity.priceLabel')}</label>
                  <div className="pp-activity-cost-wrap">
                    <input
                      className="pp-activity-cost-input"
                      type="number" min="0" step="0.01" placeholder="—"
                      value={cost}
                      onChange={e => setCost(e.target.value)}
                      title={t('activity.costInputTitle')}
                    />
                    <span>€</span>
                  </div>
                </div>
              </div>

              {/* Zone (group) */}
              {groups && groups.length > 0 && (
                <div className="pp-group-picker-field">
                  <label className="pp-group-picker-label">{t('activity.groupLabel')}</label>
                  <div className="pp-group-chips">
                    <button
                      className={`pp-group-chip${!groupId ? ' active' : ''}`}
                      onClick={() => setGroupId(null)}
                    >
                      {t('common:none')}
                    </button>
                    {groups.map(g => (
                      <button
                        key={g.id}
                        className={`pp-group-chip${groupId === g.id ? ' active' : ''}`}
                        style={{ '--group-color': g.color }}
                        onClick={() => setGroupId(g.id)}
                      >
                        <span className="pp-group-chip-dot" style={{ background: g.color }} />
                        {g.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <textarea
                className="pp-activity-note-input"
                value={note}
                onChange={e => setNote(e.target.value)}
                placeholder={t('activity.notePlaceholder')}
                rows={2}
              />
              <AttachmentsPanel tripId={act.trip_id} activityId={act.id} />
              <div className="pp-activity-edit-actions">
                <button className="pp-btn pp-btn--primary pp-btn--sm" onClick={save}>{t('common:actions.save')}</button>
                <button className="pp-btn pp-btn--ghost pp-btn--sm" onClick={cancel}>{t('common:actions.cancel')}</button>
              </div>
            </div>
          ) : variant === 'day' ? (
            <div className="pp-day-activity-view" onClick={startEditing} role="button" tabIndex={0}>
              <div className="pp-day-activity-group-bar" style={{ background: accentColor }} title={group ? group.name : cat.label} />
              {checkButton}
              <div className="pp-day-activity-time">{act.visit_time ? formatTimeShort(act.visit_time) : '—'}</div>
              <div className="pp-day-activity-content">
                <div className="pp-day-activity-title">
                  <span className="pp-day-activity-cat">{displayIcon}</span>
                  <span className="pp-day-activity-name">{act.name}</span>
                  {group && (
                    <span className="pp-day-activity-group-chip" style={{ color: group.color }}>● {group.name}</span>
                  )}
                </div>
                {(durationLabel || costLabel || attachmentCount > 0) && (
                  <div className="pp-meta-line">
                    {durationLabel && <span className="pp-meta-item"><span className="pp-meta-icon">⏱</span> {durationLabel}</span>}
                    {costLabel && <span className="pp-meta-item pp-meta-item--price" title={t('activity.priceTitle')}><span className="pp-meta-icon">💰</span> {costLabel}</span>}
                    {attachmentCount > 0 && (
                      <span className="pp-meta-item" title={t('activity.attachmentCount', { count: attachmentCount })}>
                        <span className="pp-meta-icon">📎</span> {attachmentCount}
                      </span>
                    )}
                  </div>
                )}
                {(city || dest) && (
                  <div className="pp-day-activity-location">
                    <CountryFlag emoji={destEmoji} size={13} /> {city?.name}{dest ? `, ${dest.country_name}` : ''}
                  </div>
                )}
                {act.description && <p className="pp-day-activity-note">{act.description}</p>}
              </div>
              {canResize && (
                // <button> plutôt que <div> : @hello-pangea/dnd ignore nativement les
                // éléments interactifs (input/button/textarea…) pour démarrer un drag
                // classique, donc pas besoin (et pas fiable) de stopPropagation ici —
                // le mousedown ne déclenche jamais le déplacement normal de la carte.
                <button
                  type="button"
                  className="pp-day-activity-resize-handle"
                  title={t('activity.resizeHandleTitle')}
                  onMouseDown={e => { e.preventDefault(); onResizeStart(act); }}
                  onTouchStart={() => onResizeStart(act)}
                  onClick={e => e.stopPropagation()}
                >
                  <span className="pp-day-activity-resize-grip" />
                </button>
              )}
            </div>
          ) : (
            <div
              className={`pp-activity-view${selected ? ' pp-activity-view--selected' : ''}`}
              onClick={selectable ? () => onToggleSelect(act.id) : startEditing}
              role="button"
              tabIndex={0}
            >
              {checkButton}
              {/* Dot coloré = zone picker rapide (désactivé en mode sélection : pas
                  de sous-menu à ouvrir pendant qu'on coche plusieurs cartes) */}
              <div style={{ position: 'relative', flexShrink: 0 }}>
                <div
                  className={`pp-activity-cat-dot${groups?.length && !selectable ? ' pp-activity-cat-dot--clickable' : ''}`}
                  style={{ background: accentColor }}
                  title={groups?.length ? (group ? t('activity.groupTitleWithName', { name: group.name }) : t('activity.groupTitleAssign')) : (cat.label)}
                  onClick={e => {
                    if (!groups?.length || selectable) return;
                    e.stopPropagation();
                    setShowGroupPicker(s => !s);
                  }}
                />
                {showGroupPicker && groups?.length > 0 && (
                  <>
                    <div className="pp-backdrop-overlay" onClick={() => setShowGroupPicker(false)} />
                    <div className="pp-quick-group-picker">
                      <div className="pp-quick-group-label">{t('activity.assignGroupLabel')}</div>
                      <button
                        className={`pp-quick-group-opt${!act.group_id ? ' active' : ''}`}
                        onClick={e => { e.stopPropagation(); handleQuickGroup(null); }}
                      >
                        <span className="pp-quick-group-dot" style={{ background: 'var(--border-light)' }} />
                        {t('common:none')}
                      </button>
                      {groups.map(g => (
                        <button
                          key={g.id}
                          className={`pp-quick-group-opt${act.group_id === g.id ? ' active' : ''}`}
                          onClick={e => { e.stopPropagation(); handleQuickGroup(g.id); }}
                        >
                          <span className="pp-quick-group-dot" style={{ background: g.color }} />
                          {g.name}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="pp-activity-content">
                <div className="pp-activity-main">
                  <span className="pp-activity-cat-icon">{displayIcon}</span>
                  <span className="pp-activity-name">{act.name}</span>
                </div>
                {(durationLabel || costLabel || attachmentCount > 0) && (
                  <div className="pp-meta-line">
                    {durationLabel && <span className="pp-meta-item"><span className="pp-meta-icon">⏱</span> {durationLabel}</span>}
                    {costLabel && <span className="pp-meta-item pp-meta-item--price" title={t('activity.priceTitle')}><span className="pp-meta-icon">💰</span> {costLabel}</span>}
                    {attachmentCount > 0 && (
                      <span className="pp-meta-item" title={t('activity.attachmentCount', { count: attachmentCount })}>
                        <span className="pp-meta-icon">📎</span> {attachmentCount}
                      </span>
                    )}
                  </div>
                )}
                <div className="pp-activity-chips">
                  {group && (
                    <span className="pp-chip pp-chip--group" style={{ '--group-color': group.color }}>
                      ● {group.name}
                    </span>
                  )}
                  {act.visit_date && (
                    <span className="pp-chip pp-chip--date">
                      📅 {formatDateShort(act.visit_date)}
                      {act.visit_time ? ` · ${formatTimeShort(act.visit_time)}` : ` · ${t('activity.allDayChip')}`}
                    </span>
                  )}
                  {!act.visit_date && act.visit_time && (
                    <span className="pp-chip pp-chip--time">⏰ {formatTimeShort(act.visit_time)}</span>
                  )}
                </div>
                {act.description && <p className="pp-activity-desc">{act.description}</p>}
              </div>
              {selectable && (
                <span className={`pp-select-circle${selected ? ' pp-select-circle--checked' : ''}`}>
                  {selected && (
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  )}
                </span>
              )}
            </div>
          )}

          {!editing && !selectable && onDuplicate && (
            <button
              className="pp-activity-duplicate"
              onClick={e => { e.stopPropagation(); onDuplicate(act.id); }}
              title={t('activity.duplicateTitle')}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
              </svg>
            </button>
          )}

          {!editing && !selectable && (
            <button
              className="pp-activity-del"
              onClick={e => {
                e.stopPropagation();
                if (variant === 'day' && act.visit_date) {
                  // Dans la vue par jour, la croix ne fait que déplanifier l'activité
                  // (elle repasse en "Non planifiées") : elle reste disponible dans la
                  // ville pour être replanifiée, au lieu d'être supprimée pour de bon.
                  // Une activité déjà dans "Non planifiées" (pas de date) n'a plus rien
                  // à déplanifier : la croix y supprime réellement, comme dans la liste.
                  onUpdate(act.id, { visit_date: null, visit_time: null, duration_minutes: null });
                } else {
                  onRemove(act.id);
                }
              }}
              title={variant === 'day' && act.visit_date ? t('activity.removeFromPlanningTitle') : t('activity.deleteTitle')}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
          )}
        </div>
        );
        // Pendant le drag, la lib positionne la carte en `position: fixed` par
        // rapport au viewport — mais si un ancêtre a `overflow` (ex. la liste
        // scrollable des activités "Non planifiées"), ce fixed se retrouve
        // piégé/rogné dans ce conteneur au lieu de suivre le curseur à l'écran.
        // Un portail vers <body> sort la carte de tout ancêtre à overflow le
        // temps du drag, sans rien changer au rendu normal (non-dragging).
        return snapshot.isDragging ? createPortal(card, document.body) : card;
      }}
    </Draggable>
  );
}
