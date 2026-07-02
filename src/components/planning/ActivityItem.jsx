import { useState, useEffect } from 'react';
import { Draggable } from '@hello-pangea/dnd';
import { ACTIVITY_CATEGORIES, TRANSPORT_MODES, formatDateShort, formatTimeShort, formatDuration } from '../../lib/planningUtils';
import { COUNTRIES } from '../../data/index';
import CountryFlag from './CountryFlag';

const CATEGORY_LIST = Object.entries(ACTIVITY_CATEGORIES);
const TRANSPORT_MODE_LIST = Object.entries(TRANSPORT_MODES);

export default function ActivityItem({
  act, index, tripStartDate, groups, onRemove, onUpdate, onAssignToGroup,
  variant = 'list', draggableIdPrefix = '', cities, destinations,
}) {
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
      setGroupId(act.group_id || null);
    }
  }, [act.name, act.description, act.visit_date, act.visit_time, act.category, act.transport_mode, act.duration_minutes, act.group_id, editing]);

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
    // Math.max : le min="0" des inputs n'empêche pas une saisie clavier négative
    const totalMinutes = Math.max(0, parseInt(durationH, 10) || 0) * 60 + Math.max(0, parseInt(durationM, 10) || 0);
    onUpdate(act.id, {
      name: name.trim(),
      description: note.trim() || null,
      visit_date: finalDate,
      visit_time: allDay ? null : (time || null),
      category: category || 'other',
      transport_mode: isTransport ? transportMode : null,
      duration_minutes: isTransport && totalMinutes > 0 ? totalMinutes : null,
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
  const durationLabel = isTransport ? formatDuration(act.duration_minutes) : '';

  return (
    <Draggable draggableId={`${draggableIdPrefix}${act.id}`} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...(!editing ? provided.dragHandleProps : {})}
          className={
            variant === 'day'
              ? `pp-day-activity${snapshot.isDragging ? ' pp-day-activity--dragging' : ''}${editing ? ' pp-activity--editing' : ''}`
              : `pp-activity${snapshot.isDragging ? ' pp-activity--dragging' : ''}${editing ? ' pp-activity--editing' : ''}`
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
                placeholder="Nom du lieu"
                autoFocus
                onKeyDown={e => e.key === 'Enter' && save()}
              />

              {/* Category */}
              <div className="pp-activity-field">
                <span className="pp-activity-field-label">Catégorie</span>
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
                  <span className="pp-activity-field-label">Mode de transport</span>
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
                      type="number" min="0" placeholder="0"
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
                  <label>Date</label>
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
                    <label>Heure</label>
                    <button
                      type="button"
                      className={`pp-allday-toggle${allDay ? ' active' : ''}`}
                      onClick={toggleAllDay}
                      title="Toute la journée (pas de créneau précis — utile pour une excursion)"
                    >
                      <span className="pp-allday-toggle-track"><span className="pp-allday-toggle-thumb" /></span>
                      Journée entière
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
              </div>

              {/* Zone (group) */}
              {groups && groups.length > 0 && (
                <div className="pp-group-picker-field">
                  <label className="pp-group-picker-label">Groupe</label>
                  <div className="pp-group-chips">
                    <button
                      className={`pp-group-chip${!groupId ? ' active' : ''}`}
                      onClick={() => setGroupId(null)}
                    >
                      Aucun
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
                placeholder="Note (horaires, infos, adresse…)"
                rows={2}
              />
              <div className="pp-activity-edit-actions">
                <button className="pp-btn pp-btn--primary pp-btn--sm" onClick={save}>Enregistrer</button>
                <button className="pp-btn pp-btn--ghost pp-btn--sm" onClick={cancel}>Annuler</button>
              </div>
            </div>
          ) : variant === 'day' ? (
            <div className="pp-day-activity-view" onClick={startEditing} role="button" tabIndex={0}>
              <div className="pp-day-activity-group-bar" style={{ background: accentColor }} title={group ? group.name : cat.label} />
              <div className="pp-day-activity-time">{act.visit_time ? formatTimeShort(act.visit_time) : '—'}</div>
              <div className="pp-day-activity-dot" style={{ background: accentColor }} title={group ? group.name : cat.label} />
              <div className="pp-day-activity-content">
                <div className="pp-day-activity-title">
                  <span className="pp-day-activity-cat">{displayIcon}</span>
                  <span className="pp-day-activity-name">{act.name}</span>
                  {durationLabel && <span className="pp-chip pp-chip--duration">⏱ {durationLabel}</span>}
                  {group && (
                    <span className="pp-day-activity-group-chip" style={{ color: group.color }}>● {group.name}</span>
                  )}
                </div>
                {(city || dest) && (
                  <div className="pp-day-activity-location">
                    <CountryFlag emoji={destEmoji} size={13} /> {city?.name}{dest ? `, ${dest.country_name}` : ''}
                  </div>
                )}
                {act.description && <p className="pp-day-activity-note">{act.description}</p>}
              </div>
            </div>
          ) : (
            <div className="pp-activity-view" onClick={startEditing} role="button" tabIndex={0}>
              {/* Dot coloré = zone picker rapide */}
              <div style={{ position: 'relative', flexShrink: 0 }}>
                <div
                  className={`pp-activity-cat-dot${groups?.length ? ' pp-activity-cat-dot--clickable' : ''}`}
                  style={{ background: accentColor }}
                  title={groups?.length ? (group ? `Groupe : ${group.name} — cliquer pour changer` : 'Cliquer pour assigner un groupe') : (cat.label)}
                  onClick={e => {
                    if (!groups?.length) return;
                    e.stopPropagation();
                    setShowGroupPicker(s => !s);
                  }}
                />
                {showGroupPicker && groups?.length > 0 && (
                  <>
                    <div className="pp-backdrop-overlay" onClick={() => setShowGroupPicker(false)} />
                    <div className="pp-quick-group-picker">
                      <div className="pp-quick-group-label">Assigner un groupe</div>
                      <button
                        className={`pp-quick-group-opt${!act.group_id ? ' active' : ''}`}
                        onClick={e => { e.stopPropagation(); handleQuickGroup(null); }}
                      >
                        <span className="pp-quick-group-dot" style={{ background: 'var(--border-light)' }} />
                        Aucun
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
                <div className="pp-activity-chips">
                  {durationLabel && <span className="pp-chip pp-chip--duration">⏱ {durationLabel}</span>}
                  {group && (
                    <span className="pp-chip pp-chip--group" style={{ '--group-color': group.color }}>
                      ● {group.name}
                    </span>
                  )}
                  {act.visit_date && (
                    <span className="pp-chip pp-chip--date">
                      📅 {formatDateShort(act.visit_date)}
                      {act.visit_time ? ` · ${formatTimeShort(act.visit_time)}` : ' · Toute la journée'}
                    </span>
                  )}
                  {!act.visit_date && act.visit_time && (
                    <span className="pp-chip pp-chip--time">⏰ {formatTimeShort(act.visit_time)}</span>
                  )}
                </div>
                {act.description && <p className="pp-activity-desc">{act.description}</p>}
              </div>
            </div>
          )}

          {!editing && (
            <button
              className="pp-activity-del"
              onClick={e => { e.stopPropagation(); onRemove(act.id); }}
              title="Supprimer"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
          )}
        </div>
      )}
    </Draggable>
  );
}
