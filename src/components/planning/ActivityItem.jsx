import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Draggable } from '@hello-pangea/dnd';
import { useTranslation } from 'react-i18next';
import { ACTIVITY_CATEGORIES, TRANSPORT_MODES, formatDateShort, formatTimeShort, formatDuration, formatPrice } from '../../lib/planningUtils';
import { useScrollIntoViewOnOpen } from '../../hooks/useScrollIntoViewOnOpen';
import { CURRENCY_SYMBOLS, eurToInputValue, inputValueToEur } from '../../lib/currency';
import { useSettings } from '../../context/SettingsContext';
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
  selectable = false, selected = false, onToggleSelect, onLongPressSelect,
}) {
  const { t } = useTranslation();
  // Abonnement à la devise d'affichage : le coût est stocké en EUR mais saisi
  // et affiché dans la devise choisie (voir src/lib/currency.js).
  const { currency } = useSettings();
  const [editing, setEditing] = useState(false);
  // Tactile uniquement (voir CSS hover:none) : les détails repliés du desktop
  // se déplient au tap sur le bouton ⓘ au lieu du survol.
  const [infoOpen, setInfoOpen] = useState(false);
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
  // avec "pas de coût renseigné". La valeur du champ est exprimée dans la
  // devise d'affichage (conversion depuis l'EUR stocké).
  const [cost, setCost] = useState(eurToInputValue(act.cost));
  const [groupId, setGroupId] = useState(act.group_id || null);
  const [showGroupPicker, setShowGroupPicker] = useState(false);
  const groupPickerRef = useScrollIntoViewOnOpen(showGroupPicker);
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
      setCost(eurToInputValue(act.cost));
      setGroupId(act.group_id || null);
    }
  }, [act.name, act.description, act.visit_date, act.visit_time, act.category, act.transport_mode, act.duration_minutes, act.cost, act.group_id, editing, currency]);

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
    // Le champ est saisi dans la devise d'affichage : reconversion en EUR
    // (devise de stockage) avant enregistrement.
    const parsedCost = cost === '' ? null : inputValueToEur(Math.max(0, parseFloat(cost) || 0));
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
    setCost(eurToInputValue(act.cost));
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

  // Appui long → sélection multiple, comme sur toutes les applis mobiles
  // (demande du 2026-07-23 : "sans cliquer sur ce bouton [le menu ⋯] on ne
  // sait pas" qu'on peut sélectionner plusieurs lieux — un appui long est le
  // geste universel, découvrable sans avoir à lire un menu). Coexiste avec le
  // glisser-déposer @hello-pangea/dnd, qui arme AUSSI un geste au toucher
  // maintenu (~120ms, voir TripEditor.jsx) MAIS n'engage un vrai drag qu'après
  // un déplacement du doigt : tant que le doigt reste immobile, dnd n'a rien
  // démarré de visible — notre timer (plus long, 480ms) peut donc déclencher
  // la sélection sans conflit. Le moindre mouvement (`onTouchMove` au-delà du
  // seuil) annule notre timer et laisse dnd faire son travail normalement
  // (réordonner) ; symétriquement, si dnd a par ailleurs commencé un drag
  // (`snapshot.isDragging`), on n'a jamais atteint notre seuil immobile de
  // toute façon.
  const longPressTimerRef = useRef(null);
  const longPressStartRef = useRef(null);
  const longPressFiredRef = useRef(false);
  const LONG_PRESS_MS = 480;
  const LONG_PRESS_MOVE_TOLERANCE = 10;

  const clearLongPressTimer = () => {
    if (longPressTimerRef.current) {
      clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }
  };

  const handleTouchStart = (e) => {
    if (editing || selectable || !onLongPressSelect) return;
    const t0 = e.touches[0];
    longPressStartRef.current = { x: t0.clientX, y: t0.clientY };
    longPressFiredRef.current = false;
    clearLongPressTimer();
    longPressTimerRef.current = setTimeout(() => {
      longPressFiredRef.current = true;
      // Vibration discrète si dispo (feedback tactile standard à l'entrée en
      // sélection) — best-effort, silencieux si l'appareil/navigateur ne
      // supporte pas l'API.
      if (navigator.vibrate) navigator.vibrate(15);
      onLongPressSelect(act.id);
    }, LONG_PRESS_MS);
  };
  const handleTouchMove = (e) => {
    if (!longPressStartRef.current) return;
    const t0 = e.touches[0];
    const dx = t0.clientX - longPressStartRef.current.x;
    const dy = t0.clientY - longPressStartRef.current.y;
    if (Math.abs(dx) > LONG_PRESS_MOVE_TOLERANCE || Math.abs(dy) > LONG_PRESS_MOVE_TOLERANCE) {
      clearLongPressTimer();
    }
  };
  const handleTouchEnd = () => {
    clearLongPressTimer();
    longPressStartRef.current = null;
  };
  // L'appui long a déjà déclenché la sélection : le "click" de compatibilité
  // que les navigateurs tactiles émettent quand même juste après ne doit pas
  // EN PLUS ouvrir l'édition (startEditing) — capturé puis réarmé aussitôt.
  const guardClickAfterLongPress = (handler) => (e) => {
    if (longPressFiredRef.current) {
      longPressFiredRef.current = false;
      e.preventDefault();
      return;
    }
    handler(e);
  };
  useEffect(() => () => clearLongPressTimer(), []);

  // Bouton ⓘ tactile (masqué sur desktop via CSS) : déplie les détails que le
  // desktop révèle au survol. Rendu seulement s'il y a quelque chose à déplier.
  const hasCollapsedInfo = !!(durationLabel || costLabel || attachmentCount > 0 || act.description
    || (variant === 'day' ? (city || dest) : (group || act.visit_date || act.visit_time)));
  const infoToggle = hasCollapsedInfo && !editing ? (
    <button
      type="button"
      className="pp-info-toggle"
      onClick={e => { e.stopPropagation(); setInfoOpen(o => !o); }}
      aria-expanded={infoOpen}
      title={t('activity.infoToggleTitle')}
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ transform: infoOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.15s' }}>
        <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
      </svg>
    </button>
  ) : null;

  // Formulaire d'édition : rendu dans une VRAIE modale centrée (portail vers
  // <body>, .pp-modal-overlay/.pp-modal — même habillage que les autres
  // formulaires de l'app, ex. hébergement/pays), plutôt qu'en ligne à la
  // place exacte de la carte dans la liste. Avant ce changement, éditer une
  // activité l'étirait sur place, à l'endroit où elle se trouvait dans une
  // liste déjà scrollée — dans le nouveau détail mobile à onglets (CityBlock),
  // ça atterrissait n'importe où, coincé contre la bande d'onglets, jamais
  // centré ni mis en avant (signalé le 2026-07-23). La carte en arrière-plan
  // reste affichée normalement (couverte par le fond opaque de la modale,
  // donc jamais cliquable pendant l'édition — pas besoin de la neutraliser).
  const editForm = (
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
                    <span>{CURRENCY_SYMBOLS[currency]}</span>
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
  );

  return (
    <>
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
              ? `pp-day-activity${snapshot.isDragging ? ' pp-day-activity--dragging' : ''}${editing ? ' pp-activity--editing' : ''}${resizing ? ' pp-day-activity--resizing' : ''}${act.is_done ? ' pp-day-activity--done' : ''}${infoOpen ? ' pp-activity--info-open' : ''}`
              : `pp-activity${snapshot.isDragging ? ' pp-activity--dragging' : ''}${editing ? ' pp-activity--editing' : ''}${act.is_done ? ' pp-activity--done' : ''}${infoOpen ? ' pp-activity--info-open' : ''}`
          }
          style={{
            ...provided.draggableProps.style,
            '--cat-color': accentColor,
            '--group-color': group?.color,
          }}
        >
          {variant === 'day' ? (
            <div
              className="pp-day-activity-view"
              onClick={guardClickAfterLongPress(startEditing)}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              role="button"
              tabIndex={0}
            >
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
                  {infoToggle}
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
              onClick={guardClickAfterLongPress(selectable ? () => onToggleSelect(act.id) : startEditing)}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
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
                    <div className="pp-quick-group-picker" ref={groupPickerRef}>
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
                  {infoToggle}
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
        //
        // Désactivé sous 768px (mobile) : déplacer le nœud DOM vers <body> pile
        // au moment où isDragging bascule à vrai fait perdre à Android Chrome le
        // suivi du contact tactile en cours (le navigateur annule le geste si son
        // nœud cible est déplacé ailleurs dans le DOM pendant qu'il est touché) —
        // confirmé empiriquement : sans le portail, le glisser reste continu au
        // doigt ; avec lui, il fallait relâcher puis reposer le doigt pour
        // reprendre le déplacement après le "lift" initial. Le repli sans portail
        // reste sans régression visible sur mobile (testé glisser-déposer entre
        // jours, y compris depuis "Non planifiées") : le clonage `overflow`
        // n'entre pas en jeu dans les mêmes proportions qu'en desktop ici.
        const isMobilePager = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches;
        return snapshot.isDragging && !isMobilePager ? createPortal(card, document.body) : card;
      }}
    </Draggable>
    {editing && createPortal(
      <div className="pp-modal-overlay" onClick={(e) => e.target === e.currentTarget && cancel()}>
        <div className="pp-modal pp-activity-edit-modal">
          {editForm}
        </div>
      </div>,
      document.body
    )}
    </>
  );
}
