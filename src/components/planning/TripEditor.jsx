import { useState, useEffect, useRef } from 'react';
import { DragDropContext } from '@hello-pangea/dnd';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../context/AuthContext';
import { AttachmentsCountProvider } from '../../context/AttachmentsCountContext';
import TripEditorHeader from './TripEditorHeader';
import DestinationBlock from './DestinationBlock';
import CountryPicker from './CountryPicker';
import DayView, { activitiesInSlot } from './DayView';
import GroupManager from './GroupManager';
import MapPanel from './MapPanel';
import TripShareModal from './TripShareModal';
import TripPrintView from './TripPrintView';
import TripDayModeView from './TripDayModeView';
import { getHoveredActivity } from '../../lib/hoverTracker';
import { downloadTripIcs } from '../../lib/exportTrip';
import { shareTripAsTemplates } from '../../lib/shareTripTemplate';

export default function TripEditor({
  tripData, tripId,
  onUpdateTrip, onAddDestination, onRemoveDestination,
  onAddCity, onAddDaytrip, onRemoveCity, onRenameCity, onReorderCities,
  onAddActivity, onRemoveActivity, onRemoveActivities, onUpdateActivity, onReorderActivities,
  onDuplicateActivity, onUndoLastDelete,
  onAddGroup, onClearAutoGroups, onUpdateGroup, onRemoveGroup, onAssignActivityToGroup, onAssignActivitiesToGroup, onAssignGroupToDay, onAssignCityToDay, onAssignActivitiesToDay,
  onAddLodging, onUpdateLodging, onRemoveLodging,
  onLeaveTrip, onReloadTripData,
}) {
  const { t } = useTranslation();
  const { user } = useAuth();
  const { trip, destinations, cities, activities, groups = [], lodgings = [] } = tripData;

  // Partage automatique et continu (planning-modèle communautaire, branche
  // planModel) : tant que le voyage a la case activée, on repartage (upsert,
  // voir shareTripAsTemplates) quelques secondes après le dernier changement
  // significatif — par n'importe quel membre d'un voyage à plusieurs, un seul
  // et même modèle par ville est tenu à jour (contrainte d'unicité sur
  // (source_trip_id, country_code, city_name), voir planning_modele_v3/v4.sql).
  const autoShareTimerRef = useRef(null);
  const autoShareSignatureRef = useRef(null);
  useEffect(() => {
    if (!trip?.auto_share_template) return;
    // Signature limitée aux champs réellement copiés dans un modèle (voir
    // api/share-trip-templates.js) : sans elle, cocher "fait" ou éditer un
    // coût/une note — jamais partagés — re-déclenchait quand même un
    // re-partage complet de toutes les villes du voyage à chaque frappe.
    const signature = JSON.stringify({
      cities: cities.map((c) => [c.id, c.name, c.planned_days, c.parent_city_id]),
      activities: activities.map((a) => [a.city_id, a.name, a.description, a.visit_date, a.visit_time, a.category, a.place_lat, a.place_lng, a.place_address, a.position]),
    });
    if (signature === autoShareSignatureRef.current) return;
    autoShareSignatureRef.current = signature;
    clearTimeout(autoShareTimerRef.current);
    autoShareTimerRef.current = setTimeout(() => {
      shareTripAsTemplates(tripId, destinations);
    }, 4000);
    return () => clearTimeout(autoShareTimerRef.current);
  }, [trip?.auto_share_template, cities, activities, destinations, tripId]);

  const [showCountryPicker, setShowCountryPicker] = useState(false);
  const [mapOpen, setMapOpen] = useState(false);
  // Affichage de la carte : "à côté" (colonne normale) ou "en superposition" (plein
  // écran par-dessus le reste) — la carte est optionnelle, si l'utilisateur l'ouvre
  // c'est qu'il en a besoin, autant lui laisser la possibilité de la voir en grand.
  const [mapOverlay, setMapOverlay] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [dayModeActive, setDayModeActive] = useState(false);
  // ─── Pager mobile (voir @media max-width:768px) ─────────────────────────────
  // Sur téléphone, les panneaux deviennent des pages plein écran que l'on fait
  // défiler horizontalement au doigt (ou via la barre de navigation basse),
  // comme les écrans d'une appli : [Villes] [Groupes] [Jours] [Jour J] [Carte,
  // si ouverte]. La piste (.pp-pager-track) est translatée en CSS via la
  // variable --pp-page ; sur ordinateur elle est en display:contents et tout
  // est inerte (Jour J y est géré séparément par dayModeActive, voir plus bas).
  const [page, setPage] = useState(0);
  const splitRef = useRef(null);
  // true pendant un drag @hello-pangea/dnd : le geste appartient alors au drag
  // d'une carte, il ne doit jamais déclencher un changement de page en plus.
  const rbdDraggingRef = useRef(false);

  const pagerActive = () => window.matchMedia('(max-width: 768px)').matches;
  // Pages du pager mobile, dans l'ordre : 0 Villes, 1 Groupes, 2 Jours, 3 Jour J,
  // 4 Carte (si ouverte). Jour J y est toujours présente (contrairement à la
  // Carte, qui n'existe comme page que si mapOpen) : sur ordinateur elle n'a pas
  // besoin d'un bouton dédié, mais sur mobile c'est justement l'usage le plus
  // fréquent (consultation pendant le voyage) — elle doit être aussi facile
  // d'accès que les autres onglets, pas cachée dans l'en-tête repliable.
  const JOURJ_PAGE = 3;
  const showMapPage = mapOpen && !mapOverlay;
  const pageCount = showMapPage ? 5 : 4;
  const pageCountRef = useRef(pageCount);
  pageCountRef.current = pageCount;
  // Miroir de mapOpen pour le geste de balayage (useEffect à deps figées ci-dessous) :
  // même raison d'être que pageCountRef, avoir la valeur à jour sans réabonner les
  // écouteurs touch à chaque changement.
  const mapOpenRef = useRef(mapOpen);
  mapOpenRef.current = mapOpen;

  // Si la page carte disparaît (carte fermée ou passée en superposition) alors
  // qu'on était dessus, on retombe sur la dernière page existante (Jours).
  useEffect(() => {
    if (page > pageCount - 1) setPage(pageCount - 1);
  }, [page, pageCount]);

  // dayModeActive (plein écran) n'a de sens que sur ordinateur : sur mobile, Jour
  // J est une page du pager (voir JOURJ_PAGE), pas ce mode-là. Sans cet effet, un
  // redimensionnement/rotation vers une largeur mobile PENDANT que ce mode plein
  // écran est ouvert (ex : fenêtre de bureau rétrécie sous 768px) le laisserait
  // affiché tel quel — avec en plus la barre de navigation basse qui redevient
  // visible par-dessus (elle n'est plus conditionnée à dayModeActive), superposée
  // au contenu plutôt que de basculer proprement vers la page Jour J du pager.
  useEffect(() => {
    if (!dayModeActive) return;
    const mq = window.matchMedia('(max-width: 768px)');
    const handleChange = (e) => {
      if (!e.matches) return;
      setDayModeActive(false);
      setPage(JOURJ_PAGE); // on retrouve le même contenu (Jour J), via sa page du pager cette fois
    };
    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, [dayModeActive]);

  // Balayage horizontal → page précédente/suivante. Détection d'axe sur les
  // ~10 premiers pixels : un geste vertical reste un scroll natif de la page
  // courante (touch-action: pan-y), un geste horizontal change de page.
  useEffect(() => {
    const el = splitRef.current;
    if (!el) return;
    let startX = 0, startY = 0, tracking = false, horizontal = null;

    const onStart = (e) => {
      if (!pagerActive() || rbdDraggingRef.current) return;
      // Un geste commencé sur la carte Leaflet est un panoramique de la carte,
      // dans un champ texte une sélection : jamais un changement de page.
      if (e.target.closest?.('.pp-map-panel, input, textarea, [contenteditable]')) return;
      const t = e.touches[0];
      startX = t.clientX; startY = t.clientY;
      horizontal = null; tracking = true;
    };
    const onMove = (e) => {
      if (!tracking) return;
      // Un drag de carte @hello-pangea/dnd vient de démarrer (appui long) : le
      // geste lui appartient définitivement, on abandonne ce suivi-ci.
      if (rbdDraggingRef.current) { tracking = false; return; }
      const t = e.touches[0];
      const dx = t.clientX - startX, dy = t.clientY - startY;
      if (horizontal === null && (Math.abs(dx) > 10 || Math.abs(dy) > 10)) {
        horizontal = Math.abs(dx) > Math.abs(dy);
      }
    };
    const onEnd = (e) => {
      if (!tracking) return;
      tracking = false;
      if (rbdDraggingRef.current || !horizontal) return;
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) < 55) return; // trop court pour être un vrai balayage
      setPage(p => {
        const next = dx < 0 ? p + 1 : p - 1;
        // Balayer vers la droite depuis Jour J alors que la carte n'a encore
        // jamais été ouverte : elle n'existe pas encore comme page (pageCount
        // ne l'inclut pas), le balayage buterait donc sans rien faire. On
        // l'ouvre à la volée pour que le geste "je balaie, l'écran suivant
        // apparaît" reste cohérent, sans exiger un tap supplémentaire sur Carte.
        if (p === JOURJ_PAGE && next > p && !mapOpenRef.current) {
          setMapOpen(true);
          return JOURJ_PAGE + 1;
        }
        return Math.max(0, Math.min(pageCountRef.current - 1, next));
      });
    };

    el.addEventListener('touchstart', onStart, { passive: true });
    el.addEventListener('touchmove', onMove, { passive: true });
    el.addEventListener('touchend', onEnd, { passive: true });
    return () => {
      el.removeEventListener('touchstart', onStart);
      el.removeEventListener('touchmove', onMove);
      el.removeEventListener('touchend', onEnd);
    };
  }, []);

  const closeMap = () => { setMapOpen(false); setMapOverlay(false); };
  // Entre 769 et 900px, le panneau "carte à côté" est masqué en CSS (et le bouton
  // pour passer en superposition est dedans) : la superposition est donc le seul
  // mode carte visible à ces largeurs. Sous 768px en revanche, la carte a sa
  // propre page dans le pager — on y amène directement l'utilisateur.
  const sideMapHidden = () => window.matchMedia('(max-width: 900px)').matches;
  const openMap = () => {
    setMapOpen(true);
    if (pagerActive()) setPage(JOURJ_PAGE + 1); // Carte = page suivant Jour J
    else if (sideMapHidden()) setMapOverlay(true);
  };
  // Réduire la superposition : sous 768px on retombe sur la page carte du pager ;
  // entre 769 et 900px la carte "à côté" n'existe pas, réduire la laisserait
  // ouverte mais invisible — on la ferme complètement.
  const collapseOverlay = () => {
    if (pagerActive()) setMapOverlay(false);
    else if (sideMapHidden()) closeMap();
    else setMapOverlay(false);
  };

  // Contexte lu par l'impression (voir TripPrintView, prop focusToday) : imprimer
  // depuis le mode Jour J (plein écran sur ordinateur, page dédiée du pager sur
  // mobile) n'a de sens que pour la journée en cours, pas tout le voyage — sinon
  // l'impression contredisait ce qu'on regardait à l'écran juste avant de l'ouvrir.
  const isDayModeView = dayModeActive || (pagerActive() && page === JOURJ_PAGE);

  const sortedDests = [...destinations].sort((a, b) => a.position - b.position);
  const alreadyAdded = destinations.map(d => d.country_code);

  // Ctrl+C (survol d'un lieu/trajet) → le duplique. Ctrl+Z → annule la dernière
  // suppression d'activité. Ignorés si le focus est dans un champ de saisie (pour
  // ne jamais interférer avec un copier/coller ou un undo de texte normal), et
  // Ctrl+C est aussi ignoré s'il y a une sélection de texte active (l'utilisateur
  // essaie alors probablement de copier ce texte, pas de dupliquer une carte).
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!(e.ctrlKey || e.metaKey)) return;
      // e.repeat : le système génère des keydown en rafale tant qu'une touche reste
      // enfoncée — sans ce garde-fou, garder Ctrl+C ne serait-ce qu'un instant de
      // trop dupliquerait la carte plusieurs fois d'affilée au lieu d'une seule.
      if (e.repeat) return;
      const tag = document.activeElement?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;

      if (e.key === 'c' || e.key === 'C') {
        const hoveredId = getHoveredActivity();
        if (!hoveredId) return;
        if (window.getSelection()?.toString()) return;
        e.preventDefault();
        onDuplicateActivity(hoveredId);
      } else if (e.key === 'z' || e.key === 'Z') {
        e.preventDefault();
        onUndoLastDelete();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onDuplicateActivity, onUndoLastDelete]);

  // Échap réduit la carte en superposition (sans la fermer complètement)
  useEffect(() => {
    if (!mapOverlay) return;
    const handleEscape = (e) => { if (e.key === 'Escape') collapseOverlay(); };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mapOverlay]);

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
      const colonIdx = destination.droppableId.indexOf(':', 5);
      const slot = destination.droppableId.slice(5, colonIdx);
      const date = destination.droppableId.slice(colonIdx + 1);

      // Repose dans le même créneau : les activités y sont triées par heure, donc
      // ce glisser-déposer n'a d'effet visible que pour celles à égalité d'heure
      // (typiquement toutes calées sur l'heure par défaut du créneau tant qu'elles
      // n'ont pas été personnalisées) — sert à décider laquelle se fait avant
      // l'autre (utile par ex. pour comparer les temps de trajet estimés selon
      // l'ordre). On persiste ce nouvel ordre via `position`, mais seulement la
      // position RELATIVE des activités du créneau entre elles : jamais leur
      // position par rapport aux autres activités hors créneau de la même
      // ville/catégorie, sous peine de dupliquer des valeurs de position déjà
      // utilisées par la liste "Lieux"/"Trajets" de la ville pour son propre ordre.
      if (source.droppableId === destination.droppableId) {
        const slotIds = activitiesInSlot(activities, date, slot).map(a => a.id);
        const [movedId] = slotIds.splice(source.index, 1);
        slotIds.splice(destination.index, 0, movedId);
        const slotIdSet = new Set(slotIds);

        const groupKey = a => `${a.city_id}::${a.category === 'transport' ? 't' : 'p'}`;
        const groups = new Map();
        for (const a of activities) {
          const key = groupKey(a);
          if (!groups.has(key)) groups.set(key, []);
          groups.get(key).push(a);
        }
        for (const members of groups.values()) {
          const touched = members.filter(m => slotIdSet.has(m.id));
          if (touched.length < 2) continue; // rien à réordonner l'un par rapport à l'autre dans ce groupe
          members.sort((a, b) => a.position - b.position);
          const wanted = slotIds.filter(id => touched.some(m => m.id === id));
          let w = 0;
          onReorderActivities(null, members.map(m => slotIdSet.has(m.id) ? wanted[w++] : m.id));
        }
        return;
      }

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
    <AttachmentsCountProvider tripId={tripId}>
    <div className="pp-editor">
      <TripEditorHeader
        trip={trip}
        tripId={tripId}
        destinations={destinations}
        cities={cities}
        activities={activities}
        onUpdate={onUpdateTrip}
        mapOpen={mapOpen}
        onToggleMap={() => (mapOpen ? closeMap() : openMap())}
        shareOpen={shareOpen}
        onToggleShare={() => setShareOpen(s => !s)}
        onExportPdf={() => window.print()}
        onExportIcal={() => downloadTripIcs({ trip, cities, activities, lodgings })}
        lodgings={lodgings}
        dayModeActive={dayModeActive}
        onToggleDayMode={() => {
          // Sur mobile, Jour J est une page du pager (voir JOURJ_PAGE) : on ne
          // passe jamais par le mode plein écran `dayModeActive`, qui n'existe
          // que pour l'ordinateur (là où il n'y a pas de pager à faire glisser).
          if (pagerActive()) { setPage(JOURJ_PAGE); return; }
          setDayModeActive(a => !a);
        }}
        onToggleAutoShareTemplate={(checked) => onUpdateTrip(tripId, { auto_share_template: checked })}
      />

      {dayModeActive ? (
        <TripDayModeView
          trip={trip}
          cities={cities}
          destinations={destinations}
          groups={groups}
          activities={activities}
          lodgings={lodgings}
          onRemoveActivity={onRemoveActivity}
          onUpdateActivity={onUpdateActivity}
          onDuplicateActivity={onDuplicateActivity}
          onAssignActivityToGroup={onAssignActivityToGroup}
        />
      ) : (
      <DragDropContext
        onDragStart={() => { rbdDraggingRef.current = true; }}
        onDragEnd={(result) => { rbdDraggingRef.current = false; handleDragEnd(result); }}
      >
        <div className="pp-editor-split" ref={splitRef}>
          {/* Piste du pager mobile : translatée d'une page à l'autre au balayage.
              Sur ordinateur, display:contents la rend transparente pour le layout. */}
          <div className="pp-pager-track" style={{ '--pp-page': page }}>
          {/* ── Panneau villes ── */}
          <div className="pp-city-panel">
            <div className="pp-city-panel-dests">
              {sortedDests.length === 0 ? (
                <div className="pp-empty-destinations">
                  <div className="pp-empty-destinations-icon">🌍</div>
                  <p>{t('editor.addCountryPrompt')}</p>
                </div>
              ) : (
                sortedDests.map(dest => (
                  <DestinationBlock
                    key={dest.id}
                    dest={dest}
                    cities={cities}
                    activities={activities}
                    groups={groups}
                    lodgings={lodgings}
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
                    onRemoveActivities={onRemoveActivities}
                    onUpdateActivity={onUpdateActivity}
                    onDuplicateActivity={onDuplicateActivity}
                    onAssignActivityToGroup={onAssignActivityToGroup}
                    onAssignActivitiesToGroup={onAssignActivitiesToGroup}
                    onAssignActivitiesToDay={onAssignActivitiesToDay}
                    onAddLodging={onAddLodging}
                    onUpdateLodging={onUpdateLodging}
                    onRemoveLodging={onRemoveLodging}
                    onReloadTripData={onReloadTripData}
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
                {t('country.addTitle')}
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
              lodgings={lodgings}
              onAssignGroupToDay={onAssignGroupToDay}
              onAssignCityToDay={onAssignCityToDay}
              onRemoveActivity={onRemoveActivity}
              onUpdateActivity={onUpdateActivity}
              onDuplicateActivity={onDuplicateActivity}
              onAssignActivityToGroup={onAssignActivityToGroup}
            />
          </div>

          {/* ── Page Jour J (mobile uniquement — masquée en CSS sur ordinateur,
              où le bouton d'en-tête utilise le mode plein écran ci-dessus à la
              place). Imbriquée ici dans le DragDropContext déjà ouvert pour le
              reste du planning, d'où standalone={false} (voir TripDayModeView). ── */}
          <div className="pp-daymode-page">
            <TripDayModeView
              trip={trip}
              cities={cities}
              destinations={destinations}
              groups={groups}
              activities={activities}
              lodgings={lodgings}
              onRemoveActivity={onRemoveActivity}
              onUpdateActivity={onUpdateActivity}
              onDuplicateActivity={onDuplicateActivity}
              onAssignActivityToGroup={onAssignActivityToGroup}
              standalone={false}
            />
          </div>

          {/* ── Panneau carte (à côté, ou en superposition plein écran) ── */}
          {mapOpen && (
            <>
              {mapOverlay && (
                <div className="pp-map-overlay-backdrop" onClick={collapseOverlay} />
              )}
              <div className={`pp-map-panel${mapOverlay ? ' pp-map-panel--overlay' : ''}`}>
                <button
                  type="button"
                  className="pp-map-overlay-toggle"
                  onClick={() => (mapOverlay ? collapseOverlay() : setMapOverlay(true))}
                  title={mapOverlay ? t('editor.collapseMapTitle') : t('editor.expandMapTitle')}
                >
                  {mapOverlay ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 3H3v6h2V5h4V3zm12 0h-6v2h4v4h2V3zM5 15H3v6h6v-2H5v-4zm14 4h-4v2h6v-6h-2v4z"/>
                    </svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                    </svg>
                  )}
                </button>
                <MapPanel activities={activities} groups={groups} cities={cities} lodgings={lodgings} />
              </div>
            </>
          )}
          </div>{/* /pp-pager-track */}
        </div>
      </DragDropContext>
      )}

      {/* Barre de navigation basse, mobile uniquement (masquée sur ordinateur) :
          les mêmes pages que le balayage, façon appli. Jour J y a son propre
          onglet (toujours accessible, pas caché dans l'en-tête repliable comme
          sur ordinateur) puisque c'est l'usage mobile le plus fréquent. L'onglet
          Carte ouvre la carte à la demande — inutile de passer par l'en-tête. */}
      <nav className="pp-mobile-nav" aria-label={t('editor.navLabel')}>
        {[
          { icon: '🌍', label: t('editor.navCities') },
          { icon: '🗂️', label: t('editor.navGroups') },
          { icon: '📅', label: t('editor.navDays') },
          { icon: '🧭', label: t('header.dayModeButton') },
          { icon: '🗺️', label: t('header.mapButton') },
        ].map(({ icon, label }, i) => (
          <button
            key={label}
            type="button"
            className={`pp-mobile-nav-btn${page === i ? ' active' : ''}`}
            onClick={() => {
              if (i === JOURJ_PAGE + 1) { openMap(); return; }
              // Filet de sécurité : si dayModeActive était resté vrai (ouvert sur
              // ordinateur juste avant un redimensionnement/rotation vers une
              // largeur mobile), on en sort pour retrouver un pager cohérent.
              if (dayModeActive) setDayModeActive(false);
              setPage(i);
            }}
            aria-label={label}
            aria-current={page === i}
          >
            <span className="pp-mobile-nav-icon" aria-hidden="true">{icon}</span>
            {label}
          </button>
        ))}
      </nav>

      {shareOpen && (
        <TripShareModal
          tripId={tripId}
          trip={trip}
          userId={user?.id}
          onClose={() => setShareOpen(false)}
          onLeaveTrip={onLeaveTrip}
        />
      )}

      {/* Invisible à l'écran, révélé uniquement à l'impression (voir .pp-print-view) */}
      <TripPrintView trip={trip} destinations={destinations} cities={cities} activities={activities} lodgings={lodgings} focusToday={isDayModeView} />
    </div>
    </AttachmentsCountProvider>
  );
}
