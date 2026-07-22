import { useState } from 'react';
import { Droppable, Draggable } from '@hello-pangea/dnd';
import { useTranslation } from 'react-i18next';
import { getDaysBetween, formatDateShort, kMeansActivities, estimateGeoClusterCount, ACTIVITY_CATEGORIES } from '../../lib/planningUtils';
import { NATIVE_GROUP_DRAG_TYPE } from './DayView';
import { useScrollIntoViewOnOpen } from '../../hooks/useScrollIntoViewOnOpen';

const GROUP_COLORS = [
  '#6366f1','#f59e0b','#10b981','#3b82f6',
  '#ec4899','#8b5cf6','#ef4444','#06b6d4',
];

function DayDropdown({ trip, onSelect, onClose }) {
  const { t } = useTranslation();
  const days = getDaysBetween(trip?.start_date, trip?.end_date);
  // `true` constant : ce composant n'est monté QUE quand le dropdown est
  // ouvert — son montage EST l'ouverture (même raisonnement que DaytripCard).
  const dropdownRef = useScrollIntoViewOnOpen(true);
  return (
    <div className="pp-group-day-dropdown" ref={dropdownRef}>
      {days.length === 0 ? (
        <div className="pp-group-day-empty">{t('day.addDatesTitle')}</div>
      ) : (
        days.map((d, i) => (
          <button key={d} className="pp-group-day-opt" onClick={() => { onSelect(d); onClose(); }}>
            <span className="pp-group-day-num">{t('day.short', { n: i + 1 })}</span>
            <span>{formatDateShort(d)}</span>
          </button>
        ))
      )}
    </div>
  );
}

function GroupRow({ group, activities, trip, onUpdate, onRemove, onAssignToDay, onAssignActivityToGroup }) {
  const { t } = useTranslation();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(group.name);
  const [showDays, setShowDays] = useState(false);
  const [showColors, setShowColors] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const colorsDropdownRef = useScrollIntoViewOnOpen(showColors);

  const groupActivities = activities.filter(a => a.group_id === group.id);
  const count = groupActivities.length;

  const save = () => {
    const trimmed = name.trim();
    if (trimmed && trimmed !== group.name) onUpdate(group.id, { name: trimmed });
    else setName(group.name);
    setEditing(false);
  };

  const stop = (e) => e.stopPropagation();

  return (
    <Droppable droppableId={`group:${group.id}`}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={`pp-group-row-wrap${snapshot.isDraggingOver ? ' pp-group-row--over' : ''}`}
        >
          <div
            className="pp-group-row"
            style={{ '--group-color': group.color }}
            draggable={!editing}
            onClick={() => count > 0 && setExpanded(e => !e)}
            onDragStart={e => {
              e.dataTransfer.setData(NATIVE_GROUP_DRAG_TYPE, group.id);
              e.dataTransfer.effectAllowed = 'move';
            }}
            title={count > 0 ? (expanded ? t('group.hideActivitiesTitle') : t('group.showActivitiesTitle')) : t('group.dragToPlanTitle')}
          >
            <div style={{ position: 'relative' }} onClick={stop}>
              <div
                className="pp-group-swatch"
                style={{ background: group.color }}
                onClick={() => setShowColors(s => !s)}
                title={t('group.changeColorTitle')}
              />
              {showColors && (
                <>
                  <div className="pp-backdrop-overlay" onClick={() => setShowColors(false)} />
                  <div className="pp-group-colors" ref={colorsDropdownRef}>
                    {GROUP_COLORS.map(c => (
                      <button
                        key={c}
                        className={`pp-group-color-btn${c === group.color ? ' active' : ''}`}
                        style={{ background: c }}
                        onClick={() => { onUpdate(group.id, { color: c }); setShowColors(false); }}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {editing ? (
              <input
                className="pp-group-name-input"
                value={name}
                onChange={e => setName(e.target.value)}
                onBlur={save}
                onClick={stop}
                onKeyDown={e => { if (e.key === 'Enter') save(); if (e.key === 'Escape') { setName(group.name); setEditing(false); } }}
                autoFocus
              />
            ) : (
              <span className="pp-group-name" onDoubleClick={e => { stop(e); setEditing(true); }} title={t('group.renameHintTitle')}>
                {group.name}
              </span>
            )}

            <span className="pp-group-count">
              {t('place.count', { count })}
              {count > 0 && (
                <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor" style={{ transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform .15s', marginLeft: 3 }}>
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              )}
            </span>

            <div className="pp-group-actions" onClick={stop}>
              {count > 0 && (
                <div style={{ position: 'relative' }}>
                  <button
                    className="pp-icon-btn"
                    title={t('group.planGroupOnDayTitle')}
                    onClick={() => setShowDays(s => !s)}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
                    </svg>
                  </button>
                  {showDays && (
                    <>
                      <div className="pp-backdrop-overlay" onClick={() => setShowDays(false)} />
                      <DayDropdown trip={trip} onSelect={date => onAssignToDay(group.id, date)} onClose={() => setShowDays(false)} />
                    </>
                  )}
                </div>
              )}
              <button className="pp-icon-btn" title={t('common:actions.rename')} onClick={() => setEditing(true)}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                </svg>
              </button>
              <button className="pp-icon-btn pp-icon-btn--danger" title={t('group.deleteGroupTitle')} onClick={() => onRemove(group.id)}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                </svg>
              </button>
            </div>
          </div>

          {(expanded || snapshot.isDraggingOver) && (
            <div className="pp-group-activities">
              {groupActivities.map((act, idx) => {
                const cat = ACTIVITY_CATEGORIES[act.category] || ACTIVITY_CATEGORIES.other;
                return (
                  <Draggable key={act.id} draggableId={`groupchip:${act.id}`} index={idx}>
                    {(chipProvided, chipSnapshot) => (
                      <div
                        ref={chipProvided.innerRef}
                        {...chipProvided.draggableProps}
                        {...chipProvided.dragHandleProps}
                        className={`pp-group-activity-chip${chipSnapshot.isDragging ? ' pp-group-activity-chip--dragging' : ''}`}
                      >
                        <span className="pp-group-activity-icon">{cat.icon}</span>
                        <span className="pp-group-activity-name">{act.name}</span>
                        <button
                          className="pp-group-activity-remove"
                          onClick={e => { e.stopPropagation(); onAssignActivityToGroup(act.id, null); }}
                          title={t('group.removeFromGroupTitle')}
                        >
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                          </svg>
                        </button>
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {groupActivities.length === 0 && (
                <div className="pp-group-activities-empty">{t('group.emptyDropHint')}</div>
              )}
            </div>
          )}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default function GroupManager({ tripId, groups, activities, cities, trip, onAddGroup, onClearAutoGroups, onUpdateGroup, onRemoveGroup, onAssignGroupToDay, onAssignActivityToGroup }) {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(true);
  const [creating, setCreating] = useState(false);
  const [newName, setNewName] = useState('');
  const [newColor, setNewColor] = useState(GROUP_COLORS[0]);
  const [detecting, setDetecting] = useState(false);

  const handleCreate = async () => {
    const name = newName.trim() || t('group.defaultName', { n: groups.length + 1 });
    await onAddGroup(tripId, name, newColor);
    setNewName('');
    setNewColor(GROUP_COLORS[groups.length % GROUP_COLORS.length]);
    setCreating(false);
  };

  // Ancre de clustering = ville de BASE (cities.parent_city_id vide), jamais
  // une excursion : une excursion (Nara/Kyoto, Miyajima/Hiroshima…) suit
  // TOUJOURS la zone de sa ville mère, quelle que soit la distance qui les
  // sépare — regrouper au niveau ville (au lieu de chaque activité) évite
  // aussi qu'une ville proche d'une autre par le nombre d'activités (donc de
  // points sur la carte) finisse fusionnée à tort avec elle par le k-means.
  const handleAutoDetect = async () => {
    const geoActs = activities.filter(a => a.place_lat && a.place_lng);
    if (geoActs.length < 2) return;

    const cityList = cities || [];
    const baseCityIdFor = {};
    for (const c of cityList) baseCityIdFor[c.id] = c.parent_city_id || c.id;

    const baseCities = cityList.filter(c => !c.parent_city_id);
    const cityPoints = baseCities
      .map(c => {
        const acts = geoActs.filter(a => baseCityIdFor[a.city_id] === c.id);
        if (!acts.length) return null;
        return {
          id: c.id,
          lat: acts.reduce((s, a) => s + a.place_lat, 0) / acts.length,
          lng: acts.reduce((s, a) => s + a.place_lng, 0) / acts.length,
        };
      })
      .filter(Boolean);

    setDetecting(true);
    // Remplace les groupes issus d'une détection précédente plutôt que d'en empiler de nouveaux
    await onClearAutoGroups(tripId);

    let activityIdToCluster;
    if (cityPoints.length >= 2) {
      const k = estimateGeoClusterCount(cityPoints, { maxK: Math.min(GROUP_COLORS.length, cityPoints.length) });
      const clusteredCities = kMeansActivities(cityPoints, k);
      const cityIdToCluster = Object.fromEntries(clusteredCities.map(c => [c.id, c.cluster]));
      activityIdToCluster = Object.fromEntries(geoActs.map(a => [a.id, cityIdToCluster[baseCityIdFor[a.city_id]]]));
    } else {
      // Repli si les villes ne sont pas connues (voyage sans `cities`
      // renseignées) : clustering par activité comme avant.
      const k = estimateGeoClusterCount(
        geoActs.map(a => ({ lat: a.place_lat, lng: a.place_lng })),
        { maxK: Math.min(GROUP_COLORS.length, Math.floor(geoActs.length / 2) || 1) }
      );
      const clustered = kMeansActivities(geoActs.map(a => ({ id: a.id, lat: a.place_lat, lng: a.place_lng })), k);
      activityIdToCluster = Object.fromEntries(clustered.map(p => [p.id, p.cluster]));
    }

    // .filter(Number.isInteger) : une activité dont la ville n'est plus dans
    // `cities` (état encore désynchronisé juste après une suppression de
    // ville, par ex.) résout en `undefined` — sans ce filtre, Math.max
    // incluait cette valeur, tombait sur NaN, et l'auto-détection ne créait
    // alors SILENCIEUSEMENT aucun groupe (GROUP_COLORS.slice(0, NaN) = [],
    // boucle 0..NaN jamais exécutée) tout en ayant déjà effacé les groupes
    // précédents via onClearAutoGroups ci-dessus.
    const clusterValues = Object.values(activityIdToCluster).filter(Number.isInteger);
    if (!clusterValues.length) { setDetecting(false); return; }
    const k = Math.max(...clusterValues) + 1;
    const clusterColors = GROUP_COLORS.slice(0, k);
    let created = 0;
    for (let ci = 0; ci < k; ci++) {
      const actIds = geoActs.filter(a => activityIdToCluster[a.id] === ci).map(a => a.id);
      if (!actIds.length) continue;
      const g = await onAddGroup(tripId, t('group.autoZoneName', { n: created + 1 }), clusterColors[ci], { isAuto: true });
      if (g) {
        created += 1;
        await Promise.all(actIds.map(id => onAssignActivityToGroup(id, g.id)));
      }
    }
    setDetecting(false);
    setExpanded(true);
  };

  const geoActsCount = activities.filter(a => a.place_lat && a.place_lng).length;

  return (
    <div className="pp-groups">
      {/* Même bandeau discret que .pp-day-view-hint (colonne Jours) : explique
          l'usage de la colonne avant même de créer un premier groupe. */}
      <div className="pp-day-view-hint">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" opacity=".5">
          <path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/>
        </svg>
        {t('group.columnHint')}
      </div>

      <button className="pp-groups-toggle" onClick={() => setExpanded(e => !e)}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
          <path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"/>
        </svg>
        <span>{t('group.header')}</span>
        {groups.length > 0 && (
          <span className="pp-groups-swatches">
            {groups.slice(0, 5).map(g => (
              <span key={g.id} className="pp-groups-swatch-mini" style={{ background: g.color }} />
            ))}
          </span>
        )}
        <svg
          width="12" height="12" viewBox="0 0 24 24" fill="currentColor"
          style={{ transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform .2s', marginLeft: 'auto', flexShrink: 0 }}
        >
          <path d="M7 10l5 5 5-5z"/>
        </svg>
      </button>

      {expanded && (
        <div className="pp-groups-body">
          {groups.length === 0 && !creating && (
            <div className="pp-groups-empty">
              <p>{t('group.emptyHint')}</p>
            </div>
          )}

          <div className="pp-groups-list">
            {groups.map(g => (
              <GroupRow
                key={g.id}
                group={g}
                activities={activities}
                trip={trip}
                onUpdate={onUpdateGroup}
                onRemove={onRemoveGroup}
                onAssignToDay={onAssignGroupToDay}
                onAssignActivityToGroup={onAssignActivityToGroup}
              />
            ))}
          </div>

          {creating && (
            <div className="pp-group-create">
              <input
                className="pp-group-name-input"
                value={newName}
                onChange={e => setNewName(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') handleCreate(); if (e.key === 'Escape') { setCreating(false); setNewName(''); } }}
                placeholder={t('group.defaultName', { n: groups.length + 1 })}
                autoFocus
              />
              <div className="pp-group-colors pp-group-colors--inline">
                {GROUP_COLORS.map(c => (
                  <button key={c} className={`pp-group-color-btn${c === newColor ? ' active' : ''}`} style={{ background: c }} onClick={() => setNewColor(c)} />
                ))}
              </div>
              <div className="pp-group-create-actions">
                <button className="pp-btn pp-btn--primary pp-btn--sm" onClick={handleCreate}>{t('common:actions.create')}</button>
                <button className="pp-btn pp-btn--ghost pp-btn--sm" onClick={() => { setCreating(false); setNewName(''); }}>{t('common:actions.cancel')}</button>
              </div>
            </div>
          )}

          <div className="pp-groups-footer">
            {!creating && (
              <button className="pp-add-item-btn" onClick={() => setCreating(true)}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
                {t('group.newGroupButton')}
              </button>
            )}
            {geoActsCount >= 3 && (
              <button
                className="pp-btn pp-btn--ghost pp-btn--xs pp-btn--autodetect"
                onClick={() => handleAutoDetect()}
                disabled={detecting}
                title={t('group.autoDetectTitle', { count: geoActsCount })}
                style={{ marginTop: 4 }}
              >
                {detecting ? '…' : (
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3A8.994 8.994 0 0 0 13 3.06V1h-2v2.06A8.994 8.994 0 0 0 3.06 11H1v2h2.06A8.994 8.994 0 0 0 11 20.94V23h2v-2.06A8.994 8.994 0 0 0 20.94 13H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
                  </svg>
                )}
                {t('group.autoDetectButton')}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
