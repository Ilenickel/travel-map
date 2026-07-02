import { useState } from 'react';
import { DragDropContext } from '@hello-pangea/dnd';
import { useAuth } from '../../context/AuthContext';
import TripEditorHeader from './TripEditorHeader';
import DestinationBlock from './DestinationBlock';
import CountryPicker from './CountryPicker';
import DayView from './DayView';
import GroupManager from './GroupManager';
import MapPanel from './MapPanel';
import TripShareModal from './TripShareModal';

export default function TripEditor({
  tripData, tripId,
  onUpdateTrip, onAddDestination, onRemoveDestination,
  onAddCity, onAddDaytrip, onRemoveCity, onRenameCity, onReorderCities,
  onAddActivity, onRemoveActivity, onUpdateActivity, onReorderActivities,
  onAddGroup, onClearAutoGroups, onUpdateGroup, onRemoveGroup, onAssignActivityToGroup, onAssignGroupToDay, onAssignCityToDay,
  onLeaveTrip,
}) {
  const { user } = useAuth();
  const { trip, destinations, cities, activities, groups = [] } = tripData;
  const [showCountryPicker, setShowCountryPicker] = useState(false);
  const [mapOpen, setMapOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);

  const sortedDests = [...destinations].sort((a, b) => a.position - b.position);
  const alreadyAdded = destinations.map(d => d.country_code);

  const handleCountrySelect = (country) => {
    onAddDestination(tripId, country.code, country.name);
    setShowCountryPicker(false);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const { type, source, destination, draggableId } = result;

    // City reordering (within a destination) — excursions (parent_city_id) exclues
    if (type === 'city') {
      const destId = source.droppableId.replace('cities-', '');
      const destCities = cities
        .filter(c => c.destination_id === destId && !c.parent_city_id)
        .sort((a, b) => a.position - b.position);
      const ids = destCities.map(c => c.id);
      const [removed] = ids.splice(source.index, 1);
      ids.splice(destination.index, 0, removed);
      onReorderCities(destId, ids);
      return;
    }

    // Les puces de lieu affichées dans un groupe déplié ou dans le calendrier utilisent
    // un id préfixé (pour ne jamais entrer en collision avec le Draggable de la liste
    // de la ville, qui affiche la même activité en parallèle)
    const activityId = draggableId.startsWith('groupchip:') ? draggableId.slice('groupchip:'.length)
      : draggableId.startsWith('dayact:') ? draggableId.slice('dayact:'.length)
      : draggableId;

    // Drop sur un groupe (assigner sans quitter la liste de lieux de la ville)
    if (destination.droppableId.startsWith('group:')) {
      const groupId = destination.droppableId.replace('group:', '');
      onAssignActivityToGroup(activityId, groupId === 'none' ? null : groupId);
      return;
    }

    // Drop sur un créneau horaire (Matin / Après-midi / Soir)
    if (destination.droppableId.startsWith('slot:')) {
      // Repose dans le même créneau (les activités y sont triées par heure, donc pas
      // de réordonnancement manuel possible) : ne rien faire, pour ne pas écraser une
      // heure personnalisée par l'heure par défaut du créneau.
      if (source.droppableId === destination.droppableId) return;
      const colonIdx = destination.droppableId.indexOf(':', 5);
      const slot = destination.droppableId.slice(5, colonIdx);
      const date = destination.droppableId.slice(colonIdx + 1);
      const slotTimes = { matin: '09:00', 'apres-midi': '14:00', soir: '20:00' };
      onUpdateActivity(activityId, { visit_date: date, visit_time: slotTimes[slot] || null });
      return;
    }

    // Drop sur la journée sans créneau (Horaire libre ou Non planifiées)
    if (destination.droppableId.startsWith('day-')) {
      // Repose dans la même liste (réordonnancement sans changement de jour/heure) :
      // ne rien faire, sinon on écraserait pour rien une durée déjà définie (voir
      // le même garde-fou dans la branche "slot:" juste au-dessus).
      if (source.droppableId === destination.droppableId) return;
      const dateStr = destination.droppableId.replace('day-', '');
      const date = dateStr === 'unplanned' ? null : dateStr;
      // duration_minutes efface aussi : sans heure de départ, un étirement n'a plus
      // de sens et resterait une valeur fantôme prête à ressurgir si l'activité est
      // replanifiée plus tard sur un créneau précis.
      onUpdateActivity(activityId, { visit_date: date, visit_time: null, duration_minutes: null });
      return;
    }

    // Les listes "lieux" (activities-) et "trajets" (trajets-) d'une même ville
    // n'ont volontairement pas de type RBD distinct (ça les empêcherait aussi
    // d'être déposées sur les groupes/créneaux/jours) : un dépose croisé entre les
    // deux est donc physiquement possible. Plutôt que de laisser cette action sans
    // effet (l'utilisateur voit la zone s'illuminer comme si le dépôt était accepté,
    // puis rien ne se passe), on le traite comme un changement de catégorie.
    const isPlaceList = id => id.startsWith('activities-');
    const isTrajetList = id => id.startsWith('trajets-');
    if ((isPlaceList(source.droppableId) || isTrajetList(source.droppableId))
      && (isPlaceList(destination.droppableId) || isTrajetList(destination.droppableId))) {
      const srcCityId = source.droppableId.replace(/^(activities-|trajets-)/, '');
      const destCityId = destination.droppableId.replace(/^(activities-|trajets-)/, '');
      if (srcCityId !== destCityId) return; // pas de déplacement d'une ville à l'autre

      if (isPlaceList(source.droppableId) !== isPlaceList(destination.droppableId)) {
        // Dépose croisée : bascule la catégorie plutôt que de réordonner
        if (isTrajetList(destination.droppableId)) {
          onUpdateActivity(activityId, { category: 'transport', transport_mode: 'voiture' });
        } else {
          onUpdateActivity(activityId, { category: 'other', transport_mode: null, duration_minutes: null });
        }
        return;
      }

      // Réordonnancement dans la même liste (lieux ou trajets)
      if (source.droppableId !== destination.droppableId) return;
      const filterFn = isPlaceList(source.droppableId)
        ? a => a.city_id === srcCityId && a.category !== 'transport'
        : a => a.city_id === srcCityId && a.category === 'transport';
      const subset = activities.filter(filterFn).sort((a, b) => a.position - b.position);
      const ids = subset.map(a => a.id);
      const [removed] = ids.splice(source.index, 1);
      ids.splice(destination.index, 0, removed);
      onReorderActivities(srcCityId, ids);
    }
  };

  return (
    <div className="pp-editor">
      <TripEditorHeader
        trip={trip}
        tripId={tripId}
        destinations={destinations}
        cities={cities}
        activities={activities}
        onUpdate={onUpdateTrip}
        mapOpen={mapOpen}
        onToggleMap={() => setMapOpen(m => !m)}
        shareOpen={shareOpen}
        onToggleShare={() => setShareOpen(s => !s)}
      />

      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="pp-editor-split">
          {/* ── Panneau villes ── */}
          <div className="pp-city-panel">
            <div className="pp-city-panel-dests">
              {sortedDests.length === 0 ? (
                <div className="pp-empty-destinations">
                  <div className="pp-empty-destinations-icon">🌍</div>
                  <p>Ajoutez un pays pour commencer</p>
                </div>
              ) : (
                sortedDests.map(dest => (
                  <DestinationBlock
                    key={dest.id}
                    dest={dest}
                    cities={cities}
                    activities={activities}
                    groups={groups}
                    tripId={tripId}
                    tripStartDate={trip?.start_date || null}
                    tripEndDate={trip?.end_date || null}
                    onRemove={onRemoveDestination}
                    onAddCity={onAddCity}
                    onAddDaytrip={onAddDaytrip}
                    onAssignCityToDay={onAssignCityToDay}
                    onRemoveCity={onRemoveCity}
                    onRenameCity={onRenameCity}
                    onAddActivity={onAddActivity}
                    onRemoveActivity={onRemoveActivity}
                    onUpdateActivity={onUpdateActivity}
                    onAssignActivityToGroup={onAssignActivityToGroup}
                  />
                ))
              )}
            </div>

            {showCountryPicker ? (
              <div className="pp-country-picker-wrap pp-country-picker-wrap--panel">
                <CountryPicker
                  alreadyAdded={alreadyAdded}
                  onSelect={handleCountrySelect}
                  onClose={() => setShowCountryPicker(false)}
                />
              </div>
            ) : (
              <button className="pp-add-dest-btn pp-add-dest-btn--panel" onClick={() => setShowCountryPicker(true)}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Ajouter un pays
              </button>
            )}
          </div>

          {/* ── Panneau groupes d'activité ── */}
          <div className="pp-groups-panel">
            <GroupManager
              tripId={tripId}
              groups={groups}
              activities={activities}
              trip={trip}
              onAddGroup={onAddGroup}
              onClearAutoGroups={onClearAutoGroups}
              onUpdateGroup={onUpdateGroup}
              onRemoveGroup={onRemoveGroup}
              onAssignGroupToDay={onAssignGroupToDay}
              onAssignActivityToGroup={onAssignActivityToGroup}
            />
          </div>

          {/* ── Panneau jours ── */}
          <div className={`pp-content-panel${mapOpen ? ' pp-content-panel--narrowed' : ''}`}>
            <DayView
              trip={trip}
              destinations={destinations}
              cities={cities}
              activities={activities}
              groups={groups}
              onAssignGroupToDay={onAssignGroupToDay}
              onAssignCityToDay={onAssignCityToDay}
              onRemoveActivity={onRemoveActivity}
              onUpdateActivity={onUpdateActivity}
              onAssignActivityToGroup={onAssignActivityToGroup}
            />
          </div>

          {/* ── Panneau carte (30% si ouvert) ── */}
          {mapOpen && (
            <div className="pp-map-panel">
              <MapPanel activities={activities} groups={groups} cities={cities} />
            </div>
          )}
        </div>
      </DragDropContext>

      {shareOpen && (
        <TripShareModal
          tripId={tripId}
          trip={trip}
          userId={user?.id}
          onClose={() => setShareOpen(false)}
          onLeaveTrip={onLeaveTrip}
        />
      )}
    </div>
  );
}
