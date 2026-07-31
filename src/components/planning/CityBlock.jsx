import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { Draggable, Droppable } from '@hello-pangea/dnd';
import { useTranslation } from 'react-i18next';
import ActivityItem from './ActivityItem';
import PlaceSearchInput from './PlaceSearchInput';
import PlaceSuggestionsButton from './PlaceSuggestionsButton';
import CitySearchInput from './CitySearchInput';
import DaytripCard from './DaytripCard';
import TrajetAddInput from './TrajetAddInput';
import LodgingSection from './LodgingSection';
import AddMenu from './AddMenu';
import SelectionActionBar from './SelectionActionBar';
import CityMenu from './CityMenu';
import CityPlanningFieldsButton from './CityPlanningFieldsButton';
import MobileDetailHeader from './MobileDetailHeader';
import { useHeaderScrollHide } from '../../hooks/useHeaderScrollHide';
import RestaurantExplorer from '../RestaurantExplorer';
import RestaurantsModal from '../RestaurantsModal';
import { sumCosts, formatPrice, kMeansActivities, estimateGeoClusterCount, GROUP_COLORS, matchingStaticDestinations, countryAlpha2FromEmoji, ACTIVITY_CATEGORIES } from '../../lib/planningUtils';
import { COUNTRIES } from '../../data/index';
import { useSettings } from '../../context/SettingsContext';
import { cropUnsplashUrl } from '../../lib/unsplashCrop';

// Vignette photo de la ville (résolue en amont par DestinationBlock via
// useCityImages, passée en prop `cityImage`) — repli sur une pastille avec
// icône si pas (encore) de photo, pour ne jamais laisser un carré vide.
function CityThumb({ cityImage, size }) {
  if (cityImage?.imageUrl) {
    // Vignette carrée (object-fit: cover) : recadrage 1/1 ciblé, voir
    // cropUnsplashUrl. 200px de côté : net sur les plus grandes variantes
    // (96px) sans re-télécharger une image différente par taille.
    const src = cropUnsplashUrl(cityImage.thumbUrl || cityImage.imageUrl, { width: 200, height: 200 });
    return (
      <img
        className="pp-city-thumb"
        src={src}
        alt=""
        draggable={false}
        style={size ? { width: size, height: size } : undefined}
      />
    );
  }
  return (
    <span className="pp-city-thumb pp-city-thumb--placeholder" style={size ? { width: size, height: size } : undefined}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    </span>
  );
}

export default function CityBlock({
  city, activities, groups, lodgings, tripId, index, tripStartDate, tripEndDate, daytrips = [],
  countryCode, countryName, startExpanded = false, siblingPendingBaseCitiesCount = 0,
  cityImage = null, getCityImage, isMobile = false, mobileDetailOpen = false, onOpenDetail, onCloseDetail,
  onRemove, onRename, onAddActivity, onRemoveActivity, onRemoveActivities, onUpdateActivity, onDuplicateActivity,
  onAssignActivityToGroup, onAssignActivitiesToDay, onAddDaytrip, onAssignCityToDay,
  onAddGroup, onClearAutoGroups,
  onAddLodging, onUpdateLodging, onRemoveLodging,
  onPreviewPlacesChange = null,
  draggingListKind = null,
}) {
  const { t } = useTranslation();
  useSettings(); // abonnement devise : formatPrice dépend de la devise choisie
  const [addingPlace, setAddingPlace] = useState(false);
  const [addingTrajet, setAddingTrajet] = useState(false);
  const [addingDaytrip, setAddingDaytrip] = useState(false);
  const [addingLodging, setAddingLodging] = useState(false);
  const [editing, setEditing] = useState(false);
  const [cityName, setCityName] = useState(city.name);
  const [detectingZones, setDetectingZones] = useState(false);
  const [zoneMsg, setZoneMsg] = useState(null);
  // Repliée d'entrée sur mobile (même seuil que le pager, cf. TripEditor) : la
  // page Villes y liste tout le voyage sur un petit écran — dépliées, deux ou
  // trois villes suffisent à noyer l'écran. Sur ordinateur, dépliée comme
  // toujours. Exception : une ville qu'on vient d'ajouter (startExpanded, posé
  // par DestinationBlock) s'ouvre directement — on l'ajoute pour y travailler.
  // Évalué une seule fois au montage : un redimensionnement en cours de route
  // ne replie pas une ville qu'on vient d'ouvrir. N'est utilisé QUE sur
  // ordinateur : sur mobile, l'affichage du corps est piloté par le mode détail
  // (mobileDetailOpen), pas par ce repli.
  const [collapsed, setCollapsed] = useState(() => !startExpanded && window.matchMedia('(max-width: 768px)').matches);
  // Sélection multiple (lieux uniquement, pas les trajets) : cocher plusieurs
  // cartes pour les assigner à un groupe, les déplacer sur un jour, ou les
  // supprimer en une fois — cf. SelectionActionBar.
  const [selecting, setSelecting] = useState(false);
  const [selectedIds, setSelectedIds] = useState(() => new Set());
  // Détail mobile uniquement : onglet actif (Activités/Hébergements/
  // Transports/Excursions) et excursion ouverte EN PLUS (navigation récursive
  // — voir plus bas, "openDaytripId").
  const [activeTab, setActiveTab] = useState('activities');
  // L'explorateur de restaurants s'ouvre en plein écran, sur les DEUX
  // affichages : depuis le menu « Ajouter » sur ordinateur, depuis le bouton de
  // l'onglet Restaurants sur mobile. Il porte sa propre carte et sa propre
  // recherche — l'afficher en permanence allongeait la page d'ordinateur sans
  // fin, et sur mobile il ouvrait une page d'exploration alors qu'on venait
  // simplement voir les restaurants déjà retenus.
  const [restaurantsModalOpen, setRestaurantsModalOpen] = useState(false);
  const [openDaytripId, setOpenDaytripId] = useState(null);
  const { hidden: headerHidden, onScroll: onDetailScroll, containerRef: detailBodyRef } = useHeaderScrollHide();

  // Quitter l'onglet referme l'explorateur : il porte une carte Leaflet et une
  // liste chargée depuis le réseau, les laisser vivre derrière un autre onglet
  // n'a aucun intérêt — et en revenant, on retrouverait une recherche à moitié
  // remplie sans comprendre d'où elle sort.
  useEffect(() => {
    if (activeTab !== 'restaurants') setRestaurantsModalOpen(false);
  }, [activeTab]);

  const cityActivities = activities
    .filter(a => a.city_id === city.id)
    .sort((a, b) => a.position - b.position);
  // Les trajets vivent dans leur propre section : sinon, dans une longue liste de
  // lieux, ils se noient au milieu et cassent la lecture "ce qu'on va voir".
  // Trois listes distinctes. Les restaurants ont la leur : noyés parmi les
  // visites, on ne repérait pas d'un coup d'œil où l'on mange.
  // Ces filtres doivent rester le MIROIR EXACT de CATEGORY_FILTER dans
  // TripEditor (glisser-déposer) — au moindre écart, les index ne désignent
  // plus les mêmes cartes.
  const placeActivities = cityActivities.filter(a => a.category !== 'transport' && a.category !== 'food');
  const restoActivities = cityActivities.filter(a => a.category === 'food');
  const trajetActivities = cityActivities.filter(a => a.category === 'transport');
  const cityLodgings = (lodgings || []).filter(l => l.city_id === city.id);
  // Lieux ET trajets de la ville (un billet de train a un prix aussi), mais pas
  // les excursions rattachées : chaque DaytripCard affiche son propre total,
  // comme pour les compteurs "X lieux" — sinon les chiffres ne se recouperaient
  // plus entre l'en-tête de la ville et ceux des excursions.
  const cityCost = sumCosts(cityActivities);
  // Planning importé "à dater" : activités qui gardent leur jour relatif
  // (pending_day_index) tant qu'aucune date de début n'a été choisie pour
  // CETTE ville — voir icône calendrier + halo ci-dessous et CityMenu.
  const hasPendingContent = !city.start_date && cityActivities.some(a => a.pending_day_index != null);

  const saveRename = () => {
    const trimmed = cityName.trim();
    if (trimmed && trimmed !== city.name) onRename(city.id, { name: trimmed });
    else setCityName(city.name); // Reset if empty or unchanged
    setEditing(false);
  };

  const cancelRename = () => {
    setCityName(city.name);
    setEditing(false);
  };

  const handlePlaceSelect = (place) => {
    onAddActivity(tripId, city.id, place.name, {
      place_lat: place.lat,
      place_lng: place.lng,
      place_address: place.address || null,
    });
    setAddingPlace(false);
  };

  const toggleSelecting = () => {
    setSelecting(s => !s);
    setSelectedIds(new Set());
  };

  const toggleSelected = (actId) => {
    setSelectedIds(prev => {
      const next = new Set(prev);
      if (next.has(actId)) next.delete(actId); else next.add(actId);
      return next;
    });
  };

  // Appui long sur un lieu (voir ActivityItem.jsx) : entre en sélection
  // multiple ET sélectionne d'un coup l'élément qu'on vient de presser — geste
  // universel des applis mobiles, découvrable sans passer par le menu ⋯
  // (demande du 2026-07-23).
  const handleLongPressSelect = (actId) => {
    setSelecting(true);
    setSelectedIds(new Set([actId]));
  };

  // Ne garde que les ids qui existent encore réellement parmi les lieux affichés
  // (filet de sécurité si un lieu a disparu par un autre biais pendant la sélection).
  const validSelectedIds = placeActivities.filter(a => selectedIds.has(a.id)).map(a => a.id);

  const handleAssignDay = (date) => {
    if (validSelectedIds.length) onAssignActivitiesToDay(validSelectedIds, date);
  };

  const handleDeleteSelection = () => {
    if (validSelectedIds.length) onRemoveActivities(validSelectedIds);
    setSelecting(false);
    setSelectedIds(new Set());
  };

  const handleManualAdd = (name) => {
    onAddActivity(tripId, city.id, name, {});
    setAddingPlace(false);
  };

  // ─── Restaurants ────────────────────────────────────────────────────────
  // Destinations éditoriales correspondant à cette ville : même correspondance
  // que pour les lieux conseillés (PlaceSuggestionsButton), c'est elle qui
  // détermine à quelle destination rattacher une contribution.
  // Mémoïsé : la vue ordinateur rend toutes les villes du voyage, et cette
  // correspondance parcourt les destinations du pays — inutile de la refaire à
  // chaque rendu de chaque ville.
  const restaurantStaticDestIds = useMemo(
    () => matchingStaticDestinations(city.name, countryCode).map(d => String(d.id)),
    [city.name, countryCode]
  );
  // Points de repère pour l'affichage « à 1,2 km de X » : uniquement les lieux
  // DÉJÀ planifiés dans cette ville, et uniquement à vol d'oiseau — aucun
  // itinéraire n'est calculé (voir lib/restaurants.js).
  // Mémoïsé sur une signature stable : recréer ce tableau à chaque rendu
  // relancerait le calcul des distances côté explorateur pour rien.
  const geoActivitiesKey = cityActivities
    .filter(a => a.place_lat && a.place_lng)
    // `category` et `group_id` en font partie : ils décident de l'emoji et de la
    // couleur de la pastille posée sur la carte de l'explorateur. Sans eux,
    // changer la zone d'un lieu n'aurait pas rafraîchi son repère.
    .map(a => `${a.id}:${a.place_lat}:${a.place_lng}:${a.name}:${a.category}:${a.group_id ?? ''}`)
    .join('|')
    // La COULEUR des zones entre aussi dans la signature : elle est portée par
    // le groupe, pas par l'activité. Sans elle, recolorer une zone laissait ses
    // pastilles à l'ancienne teinte sur la carte de l'explorateur jusqu'au
    // rechargement de la page (trouvé en TNR le 2026-07-31).
    + '#' + (groups || []).map(g => `${g.id}:${g.color}`).join(',');
  // Nom ET adresse : voir `existingActivities` dans RestaurantExplorer, la
  // comparaison sur le seul nom ne distinguait pas deux adresses d'une même
  // enseigne.
  const activityRefsKey = cityActivities.map(a => `${a.id}:${a.name}:${a.place_address || ''}`).join('|');
  // `id` inclus : l'explorateur ne se contente plus de SAVOIR qu'un restaurant
  // est au programme, il doit pouvoir l'en retirer d'un second clic.
  const cityActivityRefs = useMemo(
    () => cityActivities.map(a => ({ id: a.id, name: a.name, address: a.place_address || null })),
    [activityRefsKey] // eslint-disable-line react-hooks/exhaustive-deps
  );
  // Noms seuls, pour PlaceSuggestionsButton qui compare des libellés de lieux
  // de visite (pas d'adresse à départager, contrairement aux restaurants).
  const cityActivityNames = useMemo(
    () => cityActivities.map(a => a.name),
    [activityRefsKey] // eslint-disable-line react-hooks/exhaustive-deps
  );
  const restaurantReferencePoints = useMemo(
    () => cityActivities
      // Les restaurants déjà au programme sont EXCLUS des points de repère :
      // « à 0 m de Hikiniku to come » comparait un restaurant à lui-même, et
      // personne n'enchaîne deux restaurants — la distance utile est celle qui
      // sépare l'adresse d'une VISITE prévue.
      .filter(a => a.category !== 'food' && a.place_lat && a.place_lng)
      // Apparence de la pastille calculée ICI, où les zones sont connues, et
      // non dans l'explorateur : il n'a pas à connaître les catégories ni les
      // groupes du planning. Mêmes règles que la carte du voyage (voir
      // MapPanel) — couleur de la zone si le lieu en a une, sinon couleur de sa
      // catégorie ; épingle 📍 pour une zone, emoji de catégorie sinon — pour
      // qu'un même lieu se reconnaisse d'une carte à l'autre.
      .map(a => {
        const group = a.group_id ? (groups || []).find(g => g.id === a.group_id) : null;
        const cat = ACTIVITY_CATEGORIES[a.category] || ACTIVITY_CATEGORIES.other;
        return {
          name: a.name,
          lat: a.place_lat,
          lng: a.place_lng,
          color: group ? group.color : cat.color,
          icon: group ? '📍' : cat.icon,
        };
      }),
    [geoActivitiesKey] // eslint-disable-line react-hooks/exhaustive-deps
  );

  // Un restaurant ajouté au voyage devient une activité ordinaire de catégorie
  // « food » : il se déplace, se date et se chiffre comme le reste du planning,
  // au lieu de vivre dans un système à part.
  const handleAddRestaurantToTrip = (resto) => {
    // `displayName` : le nom tel qu'il est affiché dans la langue courante (voir
    // restaurantNames) — un restaurant japonais entre au planning sous sa forme
    // latine, pas sous des idéogrammes que l'utilisateur ne peut pas relire.
    onAddActivity(tripId, city.id, resto.displayName || resto.name, {
      category: 'food',
      place_lat: resto.lat ?? null,
      place_lng: resto.lng ?? null,
      place_address: resto.address || null,
    });
  };

  // Remontée des restaurants affichés vers la carte du voyage (TripEditor →
  // MapPanel, `previewPlaces`). La réf garde la dernière callback sans la
  // mettre en dépendance : `onPreviewPlacesChange` vient d'un useCallback
  // stable, mais un parent la redéfinirait sans qu'on ait à recréer celle-ci.
  const previewChangeRef = useRef(onPreviewPlacesChange);
  previewChangeRef.current = onPreviewPlacesChange;
  const handleVisibleRestaurantsChange = useCallback((list) => {
    previewChangeRef.current?.(city.id, list);
  }, [city.id]);
  // Une ville repliée, un onglet quitté ou une ville retirée du voyage doivent
  // faire disparaître ses marqueurs de proposition : sans ce nettoyage, ils
  // resteraient sur la carte du voyage jusqu'au rechargement de la page.
  useEffect(() => () => { previewChangeRef.current?.(city.id, []); }, [city.id]);

  const restaurantExplorer = (
    <RestaurantExplorer
      mode="city"
      cityName={city.name}
      staticDestIds={restaurantStaticDestIds}
      countryCode={countryCode}
      countryName={countryName}
      countryAlpha2={countryAlpha2FromEmoji(COUNTRIES[countryCode]?.emoji)}
      destName={city.name}
      // Le titre est déjà porté par l'onglet (mobile) ou l'en-tête de la modale
      // (ordinateur) : le répéter ferait doublon.
      hideTitle
      // Carte immersive sur ordinateur : en planification, on cherche d'abord
      // « qu'y a-t-il près de mon programme ? », donc la carte prime et la liste
      // flotte par-dessus. Sur mobile, le composant retombe de lui-même sur
      // carte en haut + liste dessous.
      layout="immersive"
      referencePoints={restaurantReferencePoints}
      existingActivities={cityActivityRefs}
      onAddToTrip={handleAddRestaurantToTrip}
      onRemoveFromTrip={onRemoveActivity}
      onVisibleChange={handleVisibleRestaurantsChange}
    />
  );

  // Détection de zones par proximité, scopée à CETTE ville (+ ses excursions
  // rattachées) : cliquer sur "Grouper par proximité" pour Pékin ne doit
  // jamais toucher les pastilles déjà posées sur Shanghai. Clustering direct
  // sur les points d'activités individuels (pas d'ancrage par ville comme
  // l'ancien algorithme trip-wide, inutile ici puisqu'on est déjà dans une
  // seule ville) — une excursion, géographiquement éloignée, forme
  // naturellement son propre cluster.
  const cityIds = [city.id, ...daytrips.map(dt => dt.id)];
  const geoActs = activities.filter(a => cityIds.includes(a.city_id) && a.place_lat && a.place_lng);

  const handleAutoDetectZones = async () => {
    if (geoActs.length < 3 || detectingZones) return;
    setDetectingZones(true);
    try {
      await onClearAutoGroups(tripId, cityIds);
      // maxK = floor(nb lieux / 2) plafonnait le nombre de zones possibles
      // AVANT même que l'algorithme de distance n'ait sa chance : avec 4
      // lieux, maxK tombait à 2, donc jamais essayé à 3 ou 4 zones — Temple
      // du Ciel (~2,7km de Tian'anmen, au-dessus du seuil minSeparationKm)
      // se retrouvait quand même fusionné, aucun rapport avec le seuil de
      // distance (signalé le 2026-07-24, "l'algo c'est bien mais c'est pas
      // lui qui rentre en compte sur le site" — en réalité c'était CET
      // appel qui l'empêchait d'agir). maxK = nombre de lieux (plafonné à la
      // palette de couleurs) : laisse estimateGeoClusterCount décider
      // librement, sa propre logique de fusion (minSeparationKm) reste le
      // seul frein contre un excès de petites zones.
      const k = estimateGeoClusterCount(
        geoActs.map(a => ({ lat: a.place_lat, lng: a.place_lng })),
        { maxK: Math.min(GROUP_COLORS.length, geoActs.length) }
      );
      const clustered = kMeansActivities(geoActs.map(a => ({ id: a.id, lat: a.place_lat, lng: a.place_lng })), k);
      const activityIdToCluster = Object.fromEntries(clustered.map(p => [p.id, p.cluster]));
      const clusterValues = Object.values(activityIdToCluster).filter(Number.isInteger);
      if (!clusterValues.length) return;
      const kFinal = Math.max(...clusterValues) + 1;
      const clusterColors = GROUP_COLORS.slice(0, kFinal);
      let created = 0;
      for (let ci = 0; ci < kFinal; ci++) {
        const actIds = geoActs.filter(a => activityIdToCluster[a.id] === ci).map(a => a.id);
        if (!actIds.length) continue;
        const g = await onAddGroup(tripId, t('group.autoZoneName', { n: created + 1 }), clusterColors[ci], { isAuto: true });
        if (g) {
          created += 1;
          await Promise.all(actIds.map(id => onAssignActivityToGroup(id, g.id)));
        }
      }
      // Seul retour visible de cette action (sinon juste une pastille de
      // couleur discrète sur les lieux, dont on ne comprend pas l'origine
      // sans explication) — demande du 2026-07-24. Bulle locale sous le
      // bouton plutôt que le toast global : sur PC celui-ci s'affiche tout
      // en bas au centre de l'écran, hors du champ de vision (signalé le
      // 2026-07-24, "on le voit pas").
      setZoneMsg({ type: 'success', text: t('city.autoDetectZonesSuccess', { count: created }) });
    } catch (err) {
      console.error('[CityBlock] auto-détection des zones :', err);
      setZoneMsg({ type: 'error', text: t('city.autoDetectZonesError') });
    } finally {
      setDetectingZones(false);
      setTimeout(() => setZoneMsg(null), 4000);
    }
  };

  // ── Compteur "X lieux" + coût, réutilisés dans les 2 en-têtes (bureau /
  //    ligne mobile) ──
  const countBadge = (
    <span key="count" className="pp-city-count">{t('place.count', { count: placeActivities.length })}</span>
  );
  const costBadge = cityCost != null && (
    <span key="cost" className="pp-city-cost" title={t('city.costTitle', { city: city.name })}>
      💰 {formatPrice(cityCost)}
    </span>
  );

  // Date de début (ville déjà datée ET ses activités déjà réellement placées
  // = plus aucun intérêt à la changer depuis ici, voir CityPlanningFieldsButton).
  const dateLocked = !!city.start_date && cityActivities.some(a => a.visit_date != null);

  // Sélection multiple + détection de zones + date de début : boutons
  // VISIBLES (pas cachés dans le menu ⋯) — les garder dans un sous-menu ne
  // montrait pas que ces fonctions existaient (demande du 2026-07-24). Le
  // bouton de date n'existe plus qu'une fois (avant : une version surlignée
  // ici + une autre planquée dans le menu ⋯ quand c'était nécessaire —
  // doublon inutile, signalé le 2026-07-24).
  const extraActions = (
    <>
      {!dateLocked && (
        <CityPlanningFieldsButton
          city={city}
          tripStartDate={tripStartDate}
          onUpdate={onRename}
          highlight={hasPendingContent}
          hasPendingContent={hasPendingContent}
          siblingPendingBaseCitiesCount={siblingPendingBaseCitiesCount}
        />
      )}
      {placeActivities.length > 0 && (
        <button
          type="button"
          className={`pp-icon-btn pp-icon-btn--feature${selecting ? ' pp-icon-btn--active' : ''}`}
          onClick={toggleSelecting}
          title={selecting ? t('place.exitSelectTitle') : t('place.selectTitle')}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </button>
      )}
      {geoActs.length >= 3 && (
        <span className="pp-zone-msg-anchor">
          <button
            type="button"
            className="pp-icon-btn pp-icon-btn--feature"
            onClick={handleAutoDetectZones}
            disabled={detectingZones}
            title={t('city.autoDetectZonesTitle')}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3A8.994 8.994 0 0 0 13 3.06V1h-2v2.06A8.994 8.994 0 0 0 3.06 11H1v2h2.06A8.994 8.994 0 0 0 11 20.94V23h2v-2.06A8.994 8.994 0 0 0 20.94 13H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
            </svg>
          </button>
          {zoneMsg && (
            <span className={`pp-zone-msg pp-zone-msg--${zoneMsg.type}`} role="status">{zoneMsg.text}</span>
          )}
        </span>
      )}
    </>
  );

  const cityMenu = <CityMenu onRename={() => setEditing(true)} onDelete={() => onRemove(city.id)} />;

  // Bureau : tout groupé dans une seule rangée d'icônes (voir .pp-city-actions).
  const actions = (
    <div className="pp-city-actions">
      {extraActions}
      {cityMenu}
    </div>
  );

  const nameEl = editing ? (
    <input
      className="pp-city-name-input"
      value={cityName}
      onChange={e => setCityName(e.target.value)}
      onBlur={saveRename}
      onKeyDown={e => { if (e.key === 'Enter') saveRename(); if (e.key === 'Escape') cancelRename(); }}
      autoFocus
    />
  ) : (
    <span className="pp-city-name" onDoubleClick={() => setEditing(true)}>
      <span className="pp-city-name-text">{city.name}</span>
    </span>
  );

  // ── Corps de la ville pour l'ORDINATEUR (lieux / hébergements / excursions /
  //    trajets empilés + un seul "+ Ajouter" combiné) — inchangé, seul le
  //    détail MOBILE ci-dessous a été réorganisé en onglets. ──
  const body = (
    <div className="pp-city-body">
      {/* Suggestions de lieux déjà connus pour cette ville (n'ajoute rien tout
          seul — d'où sa place à part, en haut du corps). */}
      <div className="pp-suggest-row">
        <PlaceSuggestionsButton
          cityName={city.name}
          countryCode={countryCode}
          countryName={countryName}
          tripId={tripId}
          cityId={city.id}
          existingActivityNames={cityActivityNames}
          onAddActivity={onAddActivity}
        />
      </div>

      {selecting && validSelectedIds.length > 0 && (
        <SelectionActionBar
          count={validSelectedIds.length}
          tripStartDate={tripStartDate}
          tripEndDate={tripEndDate}
          onAssignDay={handleAssignDay}
          onDelete={handleDeleteSelection}
          onCancel={toggleSelecting}
        />
      )}
      <Droppable droppableId={`activities-${city.id}`} isDropDisabled={!!draggingListKind && draggingListKind !== 'place'}>
        {(provided, snapshot) => (
          <ul
            className={`pp-activities${snapshot.isDraggingOver ? ' pp-activities--over' : ''}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {placeActivities.map((act, idx) => (
              <ActivityItem
                key={act.id}
                act={act}
                index={idx}
                tripStartDate={tripStartDate}
                groups={groups}
                onRemove={onRemoveActivity}
                onUpdate={onUpdateActivity}
                onDuplicate={onDuplicateActivity}
                onAssignToGroup={onAssignActivityToGroup}
                selectable={selecting}
                selected={selectedIds.has(act.id)}
                onToggleSelect={toggleSelected}
                onLongPressSelect={handleLongPressSelect}
                dragDisabled={selecting}
              />
            ))}
            {provided.placeholder}
            {placeActivities.length === 0 && !snapshot.isDraggingOver && (
              <li className="pp-activities-empty">{t('place.emptyList')}</li>
            )}
          </ul>
        )}
      </Droppable>

      {addingPlace && (
        <div className="pp-add-place-wrap">
          <PlaceSearchInput
            cityHint={city.name}
            onSelect={handlePlaceSelect}
            onManualAdd={handleManualAdd}
            placeholder={t('place.searchPlaceholder', { city: city.name })}
            autoFocus
          />
          <button className="pp-btn pp-btn--ghost pp-btn--sm" onClick={() => setAddingPlace(false)}>
            {t('common:actions.cancel')}
          </button>
        </div>
      )}


      <LodgingSection
        city={city}
        lodgings={lodgings}
        tripId={tripId}
        tripStartDate={tripStartDate}
        tripEndDate={tripEndDate}
        adding={addingLodging}
        onCloseAdd={() => setAddingLodging(false)}
        onAddLodging={onAddLodging}
        onUpdateLodging={onUpdateLodging}
        onRemoveLodging={onRemoveLodging}
      />

      {daytrips.length > 0 && (
        <div className="pp-daytrips-list">
          {daytrips.map(dt => (
            <DaytripCard
              key={dt.id}
              city={dt}
              activities={activities}
              groups={groups}
              lodgings={lodgings}
              tripId={tripId}
              draggingListKind={draggingListKind}
              tripStartDate={tripStartDate}
              onRemove={onRemove}
              onRename={onRename}
              onAddActivity={onAddActivity}
              onRemoveActivity={onRemoveActivity}
              onRemoveActivities={onRemoveActivities}
              onUpdateActivity={onUpdateActivity}
              onDuplicateActivity={onDuplicateActivity}
              onAssignActivityToGroup={onAssignActivityToGroup}
              onAssignActivitiesToDay={onAssignActivitiesToDay}
              onAssignCityToDay={onAssignCityToDay}
              onAddLodging={onAddLodging}
              onUpdateLodging={onUpdateLodging}
              onRemoveLodging={onRemoveLodging}
              tripEndDate={tripEndDate}
            />
          ))}
        </div>
      )}

      {addingDaytrip && (
        <div className="pp-add-city-wrap">
          <CitySearchInput
            onSelect={name => { onAddDaytrip(tripId, city.destination_id, city.id, name); setAddingDaytrip(false); }}
            onManual={name => { onAddDaytrip(tripId, city.destination_id, city.id, name); setAddingDaytrip(false); }}
            placeholder={t('city.addDaytripSearchPlaceholder')}
            autoFocus
          />
          <button className="pp-btn pp-btn--ghost pp-btn--sm" onClick={() => setAddingDaytrip(false)}>{t('common:actions.cancel')}</button>
        </div>
      )}

      {restoActivities.length > 0 && (
        <div className="pp-restos-section">
          <div className="pp-restos-section-label">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/>
            </svg>
            {t('cityTabs.restaurants')} <span>({restoActivities.length})</span>
          </div>
          <Droppable droppableId={`restaurants-${city.id}`} isDropDisabled={!!draggingListKind && draggingListKind !== 'resto'}>
            {(provided, snapshot) => (
              <ul
                className={`pp-activities${snapshot.isDraggingOver ? ' pp-activities--over' : ''}`}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {restoActivities.map((act, idx) => (
                  <ActivityItem
                    key={act.id}
                    act={act}
                    index={idx}
                    tripStartDate={tripStartDate}
                    groups={groups}
                    onRemove={onRemoveActivity}
                    onUpdate={onUpdateActivity}
                    onDuplicate={onDuplicateActivity}
                    onAssignToGroup={onAssignActivityToGroup}
                  />
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </div>
      )}

      {trajetActivities.length > 0 && (
        <div className="pp-trajets-section">
          <div className="pp-trajets-section-label">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 8h-1V6c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2v1c0 .55.45 1 1 1s1-.45 1-1v-1h7v1c0 .55.45 1 1 1s1-.45 1-1v-1c1.1 0 2-.9 2-2v-1h1c.55 0 1-.45 1-1s-.45-1-1-1zM12 6l4 4h-8l4-4z"/>
            </svg>
            {t('trajetsSection.label')} <span>({trajetActivities.length})</span>
          </div>
          <Droppable droppableId={`trajets-${city.id}`} isDropDisabled={!!draggingListKind && draggingListKind !== 'trajet'}>
            {(provided, snapshot) => (
              <ul
                className={`pp-trajets-list${snapshot.isDraggingOver ? ' pp-trajets-list--over' : ''}`}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {trajetActivities.map((act, idx) => (
                  <ActivityItem
                    key={act.id}
                    act={act}
                    index={idx}
                    tripStartDate={tripStartDate}
                    groups={groups}
                    onRemove={onRemoveActivity}
                    onUpdate={onUpdateActivity}
                    onAssignToGroup={onAssignActivityToGroup}
                  />
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </div>
      )}

      {addingTrajet && (
        <TrajetAddInput
          onAdd={(name, details) => { onAddActivity(tripId, city.id, name, details); setAddingTrajet(false); }}
          onClose={() => setAddingTrajet(false)}
        />
      )}

      <AddMenu
        items={[
          {
            key: 'place',
            tone: 'indigo',
            icon: (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            ),
            label: t('addMenu.place'),
            desc: t('addMenu.placeDesc'),
            onSelect: () => setAddingPlace(true),
          },
          {
            key: 'restaurant',
            // Teinte propre aux restaurants : l'ambre est celle des excursions,
            // l'indigo celle des lieux, l'émeraude celle des hébergements et le
            // bleu celle des trajets — le violet est la seule nuance encore
            // franchement distinguable.
            tone: 'violet',
            icon: (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/>
              </svg>
            ),
            label: t('addMenu.restaurant'),
            desc: t('addMenu.restaurantDesc'),
            onSelect: () => setRestaurantsModalOpen(true),
          },
          {
            key: 'lodging',
            tone: 'emerald',
            icon: (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/>
              </svg>
            ),
            label: t('addMenu.lodging'),
            desc: t('addMenu.lodgingDesc'),
            onSelect: () => setAddingLodging(true),
          },
          {
            key: 'daytrip',
            tone: 'amber',
            icon: (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/>
              </svg>
            ),
            label: t('addMenu.daytrip'),
            desc: t('addMenu.daytripDesc'),
            onSelect: () => setAddingDaytrip(true),
          },
          {
            key: 'trajet',
            tone: 'blue',
            icon: (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 8h-1V6c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2v1c0 .55.45 1 1 1s1-.45 1-1v-1h7v1c0 .55.45 1 1 1s1-.45 1-1v-1c1.1 0 2-.9 2-2v-1h1c.55 0 1-.45 1-1s-.45-1-1-1zM12 6l4 4h-8l4-4z"/>
              </svg>
            ),
            label: t('addMenu.trajet'),
            desc: t('addMenu.trajetDesc'),
            onSelect: () => setAddingTrajet(true),
          },
        ]}
      />

      {restaurantsModalOpen && (
        <RestaurantsModal
          title={city.name}
          onClose={() => setRestaurantsModalOpen(false)}
        >
          {restaurantExplorer}
        </RestaurantsModal>
      )}
    </div>
  );

  // ─── Mobile : DÉTAIL plein écran d'une ville (liste → tap → détail) ───
  // Hors DnD (pas de Draggable) : les listes gardent leurs propres droppables
  // de lieux/trajets, qui n'ont besoin que du DragDropContext ancêtre
  // (TripEditor), pas d'un Droppable de villes parent. Le réordonnancement des
  // villes se fait depuis la liste, pas depuis le détail.
  //
  // Réorganisé en ONGLETS (Activités/Hébergements/Transports/Excursions) —
  // un seul type de contenu affiché à la fois, chacun avec son propre bouton
  // d'ajout contextuel — plutôt que tout empiler dans une longue page comme sur
  // ordinateur : évite les sections imbriquées (activités+trajets DANS une
  // excursion DANS la ville) qui se répétaient à chaque niveau. Voir demande du
  // 2026-07-23 ("évite les zones dans les zones dans les zones").
  if (isMobile && mobileDetailOpen) {
    // Excursion ouverte DEPUIS l'onglet Excursions de cette ville (navigation
    // récursive) : remplace tout l'écran par le détail de CETTE excursion
    // (même composant DaytripCard, son propre mode détail mobile — voir ce
    // fichier), avec un retour qui referme SEULEMENT l'excursion (revient sur
    // l'onglet Excursions de la ville, pas sur la liste des villes).
    const openDaytrip = openDaytripId ? daytrips.find(dt => dt.id === openDaytripId) : null;
    if (openDaytripId && !openDaytrip) {
      // Filet de sécurité (excursion supprimée par un autre biais pendant
      // qu'elle était affichée) : referme au lieu de laisser un écran vide.
      setOpenDaytripId(null);
    } else if (openDaytrip) {
      return (
        <DaytripCard
          city={openDaytrip}
          activities={activities}
          groups={groups}
          lodgings={lodgings}
          tripId={tripId}
          tripStartDate={tripStartDate}
          tripEndDate={tripEndDate}
          cityImage={getCityImage?.(openDaytrip.name)}
          draggingListKind={draggingListKind}
          isMobile
          mobileDetailOpen
          onCloseDetail={() => setOpenDaytripId(null)}
          onRemove={(id) => { onRemove(id); setOpenDaytripId(null); }}
          onRename={onRename}
          onAddActivity={onAddActivity}
          onRemoveActivity={onRemoveActivity}
          onRemoveActivities={onRemoveActivities}
          onUpdateActivity={onUpdateActivity}
          onDuplicateActivity={onDuplicateActivity}
          onAssignActivityToGroup={onAssignActivityToGroup}
          onAssignActivitiesToDay={onAssignActivitiesToDay}
          onAssignCityToDay={onAssignCityToDay}
          onAddLodging={onAddLodging}
          onUpdateLodging={onUpdateLodging}
          onRemoveLodging={onRemoveLodging}
        />
      );
    }

    // Libellés VOLONTAIREMENT raccourcis ici : la bande d'onglets répartit la
    // largeur de l'écran en parts égales, et à cinq onglets « Hébergements » ou
    // « Transports » ne tiennent plus sur un téléphone. Les titres complets
    // restent utilisés partout ailleurs (sections, menus d'ajout).
    const tabs = [
      {
        key: 'activities', label: t('cityTabs.activities'), count: placeActivities.length, tone: 'indigo',
        icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>,
      },
      {
        // Le compteur porte sur les restaurants DÉJÀ au programme (des
        // activités, donc déjà en mémoire) et non sur les adresses disponibles,
        // qui ne sont chargées qu'à l'ouverture de l'explorateur : compter
        // celles-ci obligerait à interroger le réseau pour toutes les villes du
        // voyage d'un coup, sans que personne ne l'ait demandé.
        key: 'restaurants', label: t('cityTabs.restaurants'), count: restoActivities.length, tone: 'violet',
        icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/></svg>,
      },
      {
        key: 'lodgings', label: t('cityTabs.lodgingsShort'), count: cityLodgings.length, tone: 'emerald',
        icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/></svg>,
      },
      {
        key: 'transports', label: t('cityTabs.transportsShort'), count: trajetActivities.length, tone: 'blue',
        icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 8h-1V6c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2v1c0 .55.45 1 1 1s1-.45 1-1v-1h7v1c0 .55.45 1 1 1s1-.45 1-1v-1c1.1 0 2-.9 2-2v-1h1c.55 0 1-.45 1-1s-.45-1-1-1zM12 6l4 4h-8l4-4z"/></svg>,
      },
      {
        key: 'excursions', label: t('cityTabs.excursions'), count: daytrips.length, tone: 'amber',
        icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/></svg>,
      },
    ];

    return (
      <div className="pp-city pp-city--detail">
        <MobileDetailHeader
          hidden={headerHidden}
          image={cityImage}
          onBack={onCloseDetail}
          backLabel={t('city.backToList')}
          name={nameEl}
          badges={[countBadge, costBadge].filter(Boolean)}
          menu={cityMenu}
          titleActions={extraActions}
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        <div className="pp-detail-body" ref={detailBodyRef} onScroll={onDetailScroll}>
          {activeTab === 'activities' && (
            <div className="pp-detail-tab-content">
              <div className="pp-suggest-row">
                <PlaceSuggestionsButton
                  cityName={city.name}
                  countryCode={countryCode}
                  countryName={countryName}
                  tripId={tripId}
                  cityId={city.id}
                  existingActivityNames={cityActivityNames}
                  onAddActivity={onAddActivity}
                />
              </div>

              {selecting && validSelectedIds.length > 0 && (
                <SelectionActionBar
                  count={validSelectedIds.length}
                  tripStartDate={tripStartDate}
                  tripEndDate={tripEndDate}
                  onAssignDay={handleAssignDay}
                  onDelete={handleDeleteSelection}
                  onCancel={toggleSelecting}
                />
              )}
              <Droppable droppableId={`activities-${city.id}`} isDropDisabled={!!draggingListKind && draggingListKind !== 'place'}>
                {(provided, snapshot) => (
                  <ul
                    className={`pp-activities${snapshot.isDraggingOver ? ' pp-activities--over' : ''}`}
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {placeActivities.map((act, idx) => (
                      <ActivityItem
                        key={act.id}
                        act={act}
                        index={idx}
                        tripStartDate={tripStartDate}
                        groups={groups}
                        onRemove={onRemoveActivity}
                        onUpdate={onUpdateActivity}
                        onDuplicate={onDuplicateActivity}
                        onAssignToGroup={onAssignActivityToGroup}
                        selectable={selecting}
                        selected={selectedIds.has(act.id)}
                        onToggleSelect={toggleSelected}
                        onLongPressSelect={handleLongPressSelect}
                        dragDisabled
                      />
                    ))}
                    {provided.placeholder}
                    {placeActivities.length === 0 && !snapshot.isDraggingOver && (
                      <li className="pp-activities-empty">{t('place.emptyList')}</li>
                    )}
                  </ul>
                )}
              </Droppable>

              {addingPlace ? (
                <div className="pp-add-place-wrap">
                  <PlaceSearchInput
                    cityHint={city.name}
                    onSelect={handlePlaceSelect}
                    onManualAdd={handleManualAdd}
                    placeholder={t('place.searchPlaceholder', { city: city.name })}
                    autoFocus
                  />
                  <button className="pp-btn pp-btn--ghost pp-btn--sm" onClick={() => setAddingPlace(false)}>
                    {t('common:actions.cancel')}
                  </button>
                </div>
              ) : (
                <button className="pp-add-menu-btn" onClick={() => setAddingPlace(true)}>
                  <span className="pp-add-menu-btn-plus" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
                  </span>
                  {t('cityTabs.addPlaceButton')}
                </button>
              )}
            </div>
          )}

          {/* Onglet Restaurants : les restaurants DÉJÀ au programme, et un
              bouton pour aller en chercher d'autres — exactement la structure
              des autres onglets (liste + « Ajouter un… »).
              L'explorateur (recherche, filtres, carte, adresses disponibles) ne
              s'affiche PLUS d'emblée : c'était le seul onglet à ouvrir son
              formulaire de recherche sans qu'on l'ait demandé, et il noyait les
              restaurants déjà choisis sous une page entière d'exploration. Il
              s'ouvre désormais en plein écran depuis le bouton, et se referme
              quand on quitte l'onglet (voir l'effet plus haut). */}
          {activeTab === 'restaurants' && (
            <div className="pp-detail-tab-content pp-detail-tab-content--restaurants">
              {/* Depuis qu'ils ne figurent plus dans l'onglet Activités (liste
                  séparée, voir placeActivities), c'est ici qu'on doit les
                  retrouver — sinon ils n'apparaîtraient nulle part sur mobile. */}
              {restoActivities.length > 0 && (
                <div className="pp-restos-section">
                  <div className="pp-restos-section-label">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/>
                    </svg>
                    {t('cityTabs.myRestaurants')} <span>({restoActivities.length})</span>
                  </div>
                  <Droppable droppableId={`restaurants-${city.id}`} isDropDisabled={!!draggingListKind && draggingListKind !== 'resto'}>
                    {(provided, snapshot) => (
                      <ul
                        className={`pp-activities${snapshot.isDraggingOver ? ' pp-activities--over' : ''}`}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                      >
                        {restoActivities.map((act, idx) => (
                          <ActivityItem
                            key={act.id}
                            act={act}
                            index={idx}
                            tripStartDate={tripStartDate}
                            groups={groups}
                            onRemove={onRemoveActivity}
                            onUpdate={onUpdateActivity}
                            onDuplicate={onDuplicateActivity}
                            onAssignToGroup={onAssignActivityToGroup}
                          />
                        ))}
                        {provided.placeholder}
                      </ul>
                    )}
                  </Droppable>
                </div>
              )}
              {restoActivities.length === 0 && (
                <p className="pp-activities-empty">{t('cityTabs.emptyRestaurants')}</p>
              )}
              <button className="pp-add-menu-btn" onClick={() => setRestaurantsModalOpen(true)}>
                <span className="pp-add-menu-btn-plus" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
                </span>
                {t('cityTabs.addRestaurantButton')}
              </button>
            </div>
          )}

          {activeTab === 'lodgings' && (
            <div className="pp-detail-tab-content">
              <LodgingSection
                city={city}
                lodgings={lodgings}
                tripId={tripId}
                tripStartDate={tripStartDate}
                tripEndDate={tripEndDate}
                adding={addingLodging}
                onCloseAdd={() => setAddingLodging(false)}
                onAddLodging={onAddLodging}
                onUpdateLodging={onUpdateLodging}
                onRemoveLodging={onRemoveLodging}
              />
              {cityLodgings.length === 0 && !addingLodging && (
                <p className="pp-activities-empty">{t('cityTabs.emptyLodgings')}</p>
              )}
              {!addingLodging && (
                <button className="pp-add-menu-btn" onClick={() => setAddingLodging(true)}>
                  <span className="pp-add-menu-btn-plus" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
                  </span>
                  {t('cityTabs.addLodgingButton')}
                </button>
              )}
            </div>
          )}

          {activeTab === 'transports' && (
            <div className="pp-detail-tab-content">
              <Droppable droppableId={`trajets-${city.id}`} isDropDisabled={!!draggingListKind && draggingListKind !== 'trajet'}>
                {(provided, snapshot) => (
                  <ul
                    className={`pp-trajets-list${snapshot.isDraggingOver ? ' pp-trajets-list--over' : ''}`}
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {trajetActivities.map((act, idx) => (
                      <ActivityItem
                        key={act.id}
                        act={act}
                        index={idx}
                        tripStartDate={tripStartDate}
                        groups={groups}
                        onRemove={onRemoveActivity}
                        onUpdate={onUpdateActivity}
                        onAssignToGroup={onAssignActivityToGroup}
                        dragDisabled
                      />
                    ))}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
              {trajetActivities.length === 0 && (
                <p className="pp-activities-empty">{t('cityTabs.emptyTrajets')}</p>
              )}
              {addingTrajet ? (
                <TrajetAddInput
                  onAdd={(name, details) => { onAddActivity(tripId, city.id, name, details); setAddingTrajet(false); }}
                  onClose={() => setAddingTrajet(false)}
                />
              ) : (
                <button className="pp-add-menu-btn" onClick={() => setAddingTrajet(true)}>
                  <span className="pp-add-menu-btn-plus" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
                  </span>
                  {t('cityTabs.addTrajetButton')}
                </button>
              )}
            </div>
          )}

          {activeTab === 'excursions' && (
            <div className="pp-detail-tab-content">
              {daytrips.length === 0 && !addingDaytrip && (
                <p className="pp-activities-empty">{t('cityTabs.emptyExcursions')}</p>
              )}
              {daytrips.length > 0 && (
                <ul className="pp-detail-daytrip-list">
                  {daytrips.map((dt) => {
                    const dtActs = activities.filter(a => a.city_id === dt.id);
                    const dtPlaces = dtActs.filter(a => a.category !== 'transport').length;
                    return (
                      <li key={dt.id}>
                        <button type="button" className="pp-detail-daytrip-row" onClick={() => setOpenDaytripId(dt.id)}>
                          <CityThumb cityImage={getCityImage?.(dt.name)} size={48} />
                          <span className="pp-detail-daytrip-texts">
                            <span className="pp-detail-daytrip-name">{dt.name}</span>
                            <span className="pp-city-row-sub">{t('place.count', { count: dtPlaces })}</span>
                          </span>
                          <svg className="pp-city-row-chevron" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
                          </svg>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
              {addingDaytrip ? (
                <div className="pp-add-city-wrap">
                  <CitySearchInput
                    onSelect={name => { onAddDaytrip(tripId, city.destination_id, city.id, name); setAddingDaytrip(false); }}
                    onManual={name => { onAddDaytrip(tripId, city.destination_id, city.id, name); setAddingDaytrip(false); }}
                    placeholder={t('city.addDaytripSearchPlaceholder')}
                    autoFocus
                  />
                  <button className="pp-btn pp-btn--ghost pp-btn--sm" onClick={() => setAddingDaytrip(false)}>{t('common:actions.cancel')}</button>
                </div>
              ) : (
                <button className="pp-add-menu-btn" onClick={() => setAddingDaytrip(true)}>
                  <span className="pp-add-menu-btn-plus" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
                  </span>
                  {t('cityTabs.addExcursionButton')}
                </button>
              )}
            </div>
          )}
        </div>

        {/* Explorateur en plein écran, la même coquille que sur ordinateur : sur
            mobile elle occupe tout l'écran (voir .resto-modal en dessous de
            1024px), ce qui donne enfin à la carte et à la liste la place que
            l'onglet leur mesurait. */}
        {restaurantsModalOpen && (
          <RestaurantsModal
            title={city.name}
            onClose={() => setRestaurantsModalOpen(false)}
          >
            {restaurantExplorer}
          </RestaurantsModal>
        )}
      </div>
    );
  }

  // ─── Mobile : LIGNE de la liste des villes (tap → ouvre le détail) ───
  if (isMobile) {
    return (
      <Draggable draggableId={`city-${city.id}`} index={index}>
        {(cityProvided, citySnapshot) => (
          <div
            ref={cityProvided.innerRef}
            {...cityProvided.draggableProps}
            className={`pp-city pp-city--row${citySnapshot.isDragging ? ' pp-city--dragging' : ''}`}
          >
            <div
              className="pp-city-row"
              onClick={() => onOpenDetail?.(city.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpenDetail?.(city.id); } }}
            >
              <div className="pp-city-drag" {...cityProvided.dragHandleProps} onClick={(e) => e.stopPropagation()} title={t('city.reorderTitle')}>
                <svg width="12" height="16" viewBox="0 0 12 16" fill="currentColor" opacity=".3">
                  <circle cx="3" cy="3" r="1.5"/><circle cx="9" cy="3" r="1.5"/>
                  <circle cx="3" cy="8" r="1.5"/><circle cx="9" cy="8" r="1.5"/>
                  <circle cx="3" cy="13" r="1.5"/><circle cx="9" cy="13" r="1.5"/>
                </svg>
              </div>
              <CityThumb cityImage={cityImage} size={84} />
              <div className="pp-city-row-texts">
                <span className="pp-city-row-name">{city.name}</span>
                <span className="pp-city-row-sub">
                  {/* Chips séparées (pas un seul texte au fil de l'eau) : sur
                      un petit écran, le retour à la ligne pouvait tomber en
                      plein milieu d'un séparateur " · ", laissant un point
                      isolé tout seul sur sa propre ligne (signalé le
                      2026-07-23, "que tout se monte dessus"). Chaque chip est
                      insécable, le retour à la ligne ne peut plus se faire
                      qu'ENTRE deux chips entières. */}
                  <span className="pp-city-row-sub-chip">{t('place.count', { count: placeActivities.length })}</span>
                  {daytrips.length > 0 && (
                    <span className="pp-city-row-sub-chip">{t('city.daytripsCount', { count: daytrips.length })}</span>
                  )}
                  {cityCost != null && (
                    <span className="pp-city-row-sub-chip">💰 {formatPrice(cityCost)}</span>
                  )}
                </span>
              </div>
              {hasPendingContent && (
                <div className="pp-city-row-planning-badge" onClick={(e) => e.stopPropagation()}>
                  <CityPlanningFieldsButton
                    city={city}
                    tripStartDate={tripStartDate}
                    onUpdate={onRename}
                    highlight
                    hasPendingContent
                    siblingPendingBaseCitiesCount={siblingPendingBaseCitiesCount}
                  />
                </div>
              )}
              <svg className="pp-city-row-chevron" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
              </svg>
            </div>
          </div>
        )}
      </Draggable>
    );
  }

  // ─── Ordinateur : bloc classique repliable (inchangé, + vignette) ───
  return (
    <Draggable draggableId={`city-${city.id}`} index={index}>
      {(cityProvided, citySnapshot) => (
        <div
          ref={cityProvided.innerRef}
          {...cityProvided.draggableProps}
          className={`pp-city${citySnapshot.isDragging ? ' pp-city--dragging' : ''}`}
        >
          <div className="pp-city-header">
            <div className="pp-city-drag" {...cityProvided.dragHandleProps} title={t('city.reorderTitle')}>
              <svg width="12" height="16" viewBox="0 0 12 16" fill="currentColor" opacity=".3">
                <circle cx="3" cy="3" r="1.5"/><circle cx="9" cy="3" r="1.5"/>
                <circle cx="3" cy="8" r="1.5"/><circle cx="9" cy="8" r="1.5"/>
                <circle cx="3" cy="13" r="1.5"/><circle cx="9" cy="13" r="1.5"/>
              </svg>
            </div>

            <button
              className="pp-city-collapse"
              onClick={() => setCollapsed(c => !c)}
              title={collapsed ? t('city.expandTitle') : t('city.collapseTitle')}
            >
              <svg
                width="20" height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ transform: collapsed ? 'rotate(-90deg)' : 'none', transition: 'transform 0.2s' }}
              >
                <path d="M7 10l5 5 5-5z"/>
              </svg>
            </button>

            <CityThumb cityImage={cityImage} size={96} />

            <div className="pp-city-title-stack">
              {nameEl}
              <span className="pp-city-badges-row">
                {countBadge}
                {costBadge}
              </span>
            </div>

            {actions}
          </div>

          {!collapsed && body}
        </div>
      )}
    </Draggable>
  );
}
