import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { DragDropContext } from '@hello-pangea/dnd';
import { useTranslation } from 'react-i18next';
import useIsMobile from '../../hooks/useIsMobile';
import { useHeaderScrollHide } from '../../hooks/useHeaderScrollHide';
import { useAuth } from '../../context/AuthContext';
import { AttachmentsCountProvider } from '../../context/AttachmentsCountContext';
import TripEditorHeader from './TripEditorHeader';
import DestinationBlock from './DestinationBlock';
import CountryPicker from './CountryPicker';
import DayView, { activitiesInSlot } from './DayView';
import MapPanel from './MapPanel';
import TripShareModal from './TripShareModal';
import TripPrintView from './TripPrintView';
import TripDayModeView from './TripDayModeView';
import TripExpensesPanel from './TripExpensesPanel';
import { getHoveredActivity } from '../../lib/hoverTracker';
import { downloadTripIcs } from '../../lib/exportTrip';
import { shareTripAsTemplates } from '../../lib/shareTripTemplate';

export default function TripEditor({
  tripData, tripId,
  onUpdateTrip, onAddDestination, onRemoveDestination,
  onAddCity, onAddDaytrip, onRemoveCity, onRenameCity, onReorderCities,
  onAddActivity, onRemoveActivity, onRemoveActivities, onUpdateActivity, onReorderActivities,
  onDuplicateActivity, onUndoLastDelete,
  onAddGroup, onClearAutoGroups, onAssignActivityToGroup, onAssignCityToDay, onAssignActivitiesToDay,
  onAddLodging, onUpdateLodging, onRemoveLodging,
  onLeaveTrip, onReloadTripData, onBack,
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
  // Partage programmé mais pas encore envoyé — persiste TEL QUEL entre les
  // rendus (contrairement à un état local) pour que l'effet puisse comparer,
  // à sa prochaine exécution, le voyage qu'il concernait à celui affiché
  // maintenant. C'est ce qui permet de détecter un changement de voyage
  // ci-dessous, pas seulement un vrai démontage.
  const pendingShareRef = useRef(null);
  useEffect(() => {
    // Un partage restait programmé pour un AUTRE voyage que celui affiché
    // maintenant : l'utilisateur a changé de voyage dans la sidebar moins de
    // 4s après une modif. TripEditor n'est JAMAIS démonté entre deux voyages
    // (voir PlanningPage.jsx, pas de `key={tripId}`), donc le filet de
    // sécurité de démontage plus bas ne se déclenche pas ici — sans ce
    // rattrapage, le `clearTimeout` + la ré-écriture de `pendingShareRef.current`
    // juste en dessous perdaient silencieusement ce partage ("des fois ça ne
    // s'enregistre pas"). On l'envoie immédiatement avant de continuer.
    if (pendingShareRef.current && pendingShareRef.current.tripId !== tripId) {
      const stale = pendingShareRef.current;
      pendingShareRef.current = null;
      clearTimeout(autoShareTimerRef.current);
      shareTripAsTemplates(stale.tripId, stale.destinations);
    }

    if (!trip?.auto_share_template) return;
    // Signature limitée aux champs réellement copiés dans un modèle (voir
    // api/trip-templates.js) : sans elle, cocher "fait" ou éditer un
    // coût/une note — jamais partagés — re-déclenchait quand même un
    // re-partage complet de toutes les villes du voyage à chaque frappe.
    // duration_minutes inclus : étirer une activité sur plusieurs créneaux
    // change ce qui est partagé (voir planning_modele_v7.sql) même si aucun
    // autre champ ne bouge.
    // share_criteria inclus : les critères du voyage (avec enfants, en
    // couple…) sont recopiés sur les modèles au partage (planning_modele_v8),
    // les modifier depuis l'en-tête doit donc re-déclencher un re-partage.
    const signature = JSON.stringify({
      criteria: trip?.share_criteria || [],
      cities: cities.map((c) => [c.id, c.name, c.parent_city_id]),
      activities: activities.map((a) => [a.city_id, a.name, a.description, a.visit_date, a.visit_time, a.category, a.place_lat, a.place_lng, a.place_address, a.position, a.duration_minutes]),
    });
    if (signature === autoShareSignatureRef.current) return;
    autoShareSignatureRef.current = signature;
    pendingShareRef.current = { tripId, destinations };
    clearTimeout(autoShareTimerRef.current);
    autoShareTimerRef.current = setTimeout(() => {
      pendingShareRef.current = null;
      shareTripAsTemplates(tripId, destinations);
    }, 4000);
    return () => clearTimeout(autoShareTimerRef.current);
  }, [trip?.auto_share_template, trip?.share_criteria, cities, activities, destinations, tripId]);

  // Démontage réel du composant (deps figées à [], contrairement à l'effet
  // ci-dessus qui se ré-arme à chaque changement) : si un partage restait en
  // attente pour le voyage encore affiché (l'utilisateur a quitté l'écran de
  // planification avant la fin du débounce), on l'envoie quand même plutôt
  // que de le perdre. Le cas "changement de voyage" est géré plus haut, dans
  // l'effet lui-même.
  useEffect(() => {
    return () => {
      if (pendingShareRef.current) {
        shareTripAsTemplates(pendingShareRef.current.tripId, pendingShareRef.current.destinations);
      }
    };
  }, []);

  const [showCountryPicker, setShowCountryPicker] = useState(false);
  const [mapOpen, setMapOpen] = useState(false);
  // Affichage de la carte : "à côté" (colonne normale) ou "en superposition" (plein
  // écran par-dessus le reste) — la carte est optionnelle, si l'utilisateur l'ouvre
  // c'est qu'il en a besoin, autant lui laisser la possibilité de la voir en grand.
  const [mapOverlay, setMapOverlay] = useState(false);
  // Repli manuel en rail fin (distinct de mapOpen/mapOverlay, voir plus bas) :
  // "masquer la carte" ne doit jamais la démonter (elle resterait ouverte,
  // juste réduite visuellement) — sinon on perdrait la garantie d'ouverture
  // automatique une seule fois par montage ci-dessous, et l'état interne de
  // la carte Leaflet (zoom, centrage) à chaque repli/dépli.
  const [mapCollapsed, setMapCollapsed] = useState(false);
  // N'auto-ouvre la carte qu'une seule fois par montage de l'éditeur : sans ce
  // garde-fou, ajouter un 2e lieu géolocalisé après que l'utilisateur a
  // explicitement refermé la carte (mapOpen à false) la rouvrirait de force à
  // chaque fois, ignorant son choix.
  const mapAutoOpenedRef = useRef(false);
  // TripEditor n'est pas démonté/remonté quand on change de voyage dans la
  // sidebar (pas de `key={tripId}` côté PlanningPage) : sans ce reset, le
  // garde-fou au-dessus resterait armé pour le voyage précédent, empêchant
  // l'auto-ouverture de la carte pour un voyage tout neuf où l'utilisateur
  // n'a pourtant jamais rien fermé lui-même.
  useEffect(() => {
    mapAutoOpenedRef.current = false;
    setMapOpen(false);
    setMapCollapsed(false);
    setMobileCityDetailId(null); // changer de voyage referme tout détail de ville ouvert
  }, [tripId]);
  useEffect(() => {
    if (mapAutoOpenedRef.current) return;
    if (activities.some(a => a.place_lat && a.place_lng)) {
      mapAutoOpenedRef.current = true;
      setMapOpen(true);
    }
  }, [activities]);
  const [shareOpen, setShareOpen] = useState(false);
  // Modal Dépenses (ordinateur uniquement — sur mobile la fonctionnalité vit
  // dans sa propre page du pager, cf. plus bas). Même panneau (TripExpensesPanel)
  // dans les deux cas : seul l'habillage change.
  const [expensesOpen, setExpensesOpen] = useState(false);
  const [dayModeActive, setDayModeActive] = useState(false);
  // Bouton "Jour J" : vivait dans l'en-tête du voyage (TripEditorHeader), migré
  // dans l'en-tête de la colonne Jours (voir pp-content-panel-header ci-dessous)
  // — même comportement, juste un point d'entrée différent.
  const toggleDayMode = () => {
    // Sur mobile, Jour J est une page du pager (voir JOURJ_PAGE) : on ne passe
    // jamais par le mode plein écran `dayModeActive`, qui n'existe que pour
    // l'ordinateur (là où il n'y a pas de pager à faire glisser).
    if (pagerActive()) { setPage(JOURJ_PAGE); return; }
    setDayModeActive(a => !a);
  };
  // ─── Pager mobile (voir @media max-width:768px) ─────────────────────────────
  // Sur téléphone, les panneaux deviennent des pages plein écran que l'on fait
  // défiler horizontalement au doigt (ou via la barre de navigation basse),
  // comme les écrans d'une appli : [Villes] [Jours] [Jour J] [Carte, si
  // ouverte] [Dépenses]. La piste (.pp-pager-track) est translatée en CSS via la
  // variable --pp-page ; sur ordinateur elle est en display:contents et tout
  // est inerte (Jour J y est géré séparément par dayModeActive, voir plus bas).
  // Page d'arrivée : Villes (0) — c'est par là qu'on planifie (ajouter des
  // villes, importer un planning, dater une ville). Sans effet sur ordinateur
  // (la piste est en display:contents, tout est visible).
  const [page, setPage] = useState(0);
  // 1024 (pas le défaut 768) — même convention que CountryPanel.jsx : une
  // tablette en portrait (iPad Pro compris, 1024px) reçoit la vue mobile
  // (peaufinée sur toute cette session), pas la vue PC à 3 colonnes qui n'a
  // pas la place d'y tenir proprement (noms de ville tronqués "Che...",
  // signalé le 2026-07-23). En paysage (bien plus large), la même tablette
  // repasse naturellement en vue PC.
  const isMobile = useIsMobile(1024);
  // Mobile uniquement : ville ouverte en "détail plein écran" dans la page
  // Villes (liste → tap → détail, voir CityBlock/DestinationBlock). null = on
  // affiche la liste des villes. Sans effet sur ordinateur (les villes s'y
  // déplient sur place, ce champ n'est jamais lu).
  const [mobileCityDetailId, setMobileCityDetailId] = useState(null);
  const splitRef = useRef(null);
  // true pendant un drag @hello-pangea/dnd : le geste appartient alors au drag
  // d'une carte, il ne doit jamais déclencher un changement de page en plus.
  const rbdDraggingRef = useRef(false);

  // Même seuil que useIsMobile(1024) plus haut — sinon ce check ponctuel se
  // désynchronise du isMobile "officiel" (signalé le 2026-07-23, tablette).
  const pagerActive = () => window.matchMedia('(max-width: 1024px)').matches;
  // Après un import de suggestion(s) (voir DestinationBlock/TripSuggestionsModal),
  // les villes viennent d'apparaître/changer : sur mobile, on ramène sur la
  // page Villes (0) pour les montrer directement, plutôt que de laisser
  // l'utilisateur sur la page où il a lancé l'import (souvent déjà Villes,
  // mais pas garanti). Sans effet sur ordinateur, où tout est déjà visible.
  const VILLES_PAGE = 0;
  // Après un import de suggestion(s) : on revient à la LISTE des villes (referme
  // tout détail ouvert) pour montrer les villes ajoutées/changées.
  const goToCitiesPageIfMobile = () => { if (pagerActive()) { setPage(VILLES_PAGE); setMobileCityDetailId(null); } };
  // Quitter la page Villes (balayage / barre de nav basse) referme le détail de
  // ville : au retour sur Villes on retrouve la liste, pas un détail orphelin.
  useEffect(() => {
    if (page !== VILLES_PAGE) setMobileCityDetailId(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  // Filet de sécurité : la ville ouverte en détail peut disparaître par un
  // autre biais que le bouton supprimer de son propre menu (import qui
  // remplace les villes de la destination — voir TripSuggestionsModal
  // "confirmReplaceText" —, Ctrl+Z, rechargement après action d'un autre
  // membre du voyage…). Sans ce filet, DestinationBlock ne trouve plus la
  // ville correspondant à un id resté en mémoire et masque TOUT (aucune
  // destination ne correspond) : la page Villes resterait vide, sans bouton
  // retour ni "Ajouter un pays", un vrai cul-de-sac pour l'utilisateur.
  useEffect(() => {
    if (mobileCityDetailId && !cities.some((c) => c.id === mobileCityDetailId)) {
      setMobileCityDetailId(null);
    }
  }, [cities, mobileCityDetailId]);
  // Sur mobile, en scrollant la liste des pays/villes (page Villes), le
  // chrome autour se masque pour laisser le maximum de place à la liste —
  // l'en-tête du voyage (titre, en haut) ET le bas de l'écran (bouton
  // "Ajouter un pays" + barre de navigation) réapparaissent dès qu'on
  // remonte, même mécanique que le détail d'une ville (useHeaderScrollHide,
  // demande du 2026-07-23 : "globalement pour voir les différentes villes sur
  // mobile on a qu'une toute petite partie"). N'a aucun effet ordinateur (le
  // scroll n'y déclenche jamais handleVillesListScroll côté JSX) ni sur les
  // autres pages du pager (villesChromeHidden n'est lu que combiné à
  // `page === VILLES_PAGE` plus bas).
  const { hidden: villesChromeHiddenRaw, onScroll: onVillesListScrollRaw, containerRef: villesListRef } = useHeaderScrollHide();
  const villesChromeHidden = villesChromeHiddenRaw && isMobile && page === VILLES_PAGE && !mobileCityDetailId;
  // Même garde que onJoursScroll plus bas : ignore ce scroll pendant un drag
  // (reorder de ville) actif, pour ne pas re-rendre toute la page à chaque
  // tick d'auto-scroll de @hello-pangea/dnd.
  const onVillesListScroll = (e) => { if (!rbdDraggingRef.current) onVillesListScrollRaw(e); };
  // Même mécanique pour la page Jours (timeline verticale) : la barre de
  // navigation basse se masque aussi en scrollant cette page vers le bas, se
  // réaffiche en remontant OU en arrivant tout en bas (voir useHeaderScrollHide,
  // demande du 2026-07-23). JOURS_PAGE = 1 (Villes=0, Jours=1, JourJ=2).
  const JOURS_PAGE = 1;
  const { hidden: joursChromeHiddenRaw, onScroll: onJoursScrollRaw, containerRef: joursContentRef } = useHeaderScrollHide();
  const joursChromeHidden = joursChromeHiddenRaw && isMobile && page === JOURS_PAGE;
  // .pp-content-panel est AUSSI le conteneur de scroll que @hello-pangea/dnd
  // auto-scrolle pendant un glisser-déposer proche des bords : sans ce garde,
  // chaque tick de cet auto-scroll déclenchait ce handler (setState → re-rendu
  // de tout l'arbre de la page Jours en pleine seconde de drag), ce qui cassait
  // le drag&drop des activités (cartes qui ne se déposaient plus). rbdDraggingRef
  // (déjà utilisé plus bas pour ignorer le geste de swipe pendant un drag) sert
  // ici au même usage : ignorer complètement ce scroll tant qu'un drag est actif.
  const onJoursScroll = (e) => { if (!rbdDraggingRef.current) onJoursScrollRaw(e); };
  // Pages du pager mobile, dans l'ordre : 0 Villes, 1 Jours, 2 Jour J, 3 Carte
  // (si ouverte), puis Dépenses en dernière page (index 3 ou 4 selon la carte —
  // toujours pageCount - 1).
  // Jour J est toujours présente (contrairement à la Carte, qui n'existe comme
  // page que si mapOpen) : sur ordinateur elle n'a pas besoin d'un bouton
  // dédié, mais sur mobile c'est justement l'usage le plus fréquent
  // (consultation pendant le voyage) — c'est le bouton central mis en avant.
  const JOURJ_PAGE = 2;
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
  // qu'on était dessus, on retombe sur la dernière page existante (Dépenses).
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
    const mq = window.matchMedia('(max-width: 1024px)');
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
      // [data-rfd-drag-handle-draggable-id] (carte/ville @hello-pangea/dnd) : la
      // lib exige ~120ms d'appui maintenu avant de reconnaître un drag tactile
      // (timeForLongPress). Sans cette exclusion, ce suivi de balayage tournait
      // en parallèle pendant cette fenêtre et, dès que le doigt bougeait un peu
      // à l'horizontale (typiquement en glissant une activité vers une autre
      // colonne/journée), le geste était détourné en changement de page avant
      // même que le drag n'ait pu s'enclencher.
      // .pp-city--detail (détail plein écran ville/excursion) exclu en bloc :
      // ni sa bande d'onglets (scroll horizontal propre, cf. .pp-detail-tabbar)
      // ni rien d'autre à l'intérieur ne doit jamais déclencher un changement
      // de page — ce n'est pas une page du pager, juste un écran fixe avec son
      // propre bouton retour (signalé le 2026-07-23 : scroller la bande
      // d'onglets jusqu'au bout faisait atterrir sur la page Jours).
      if (e.target.closest?.('.pp-map-panel, input, textarea, [contenteditable], [data-rfd-drag-handle-draggable-id], .pp-city--detail')) return;
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
  // Devenu inatteignable depuis que pagerActive() est passé à 1024px (avant
  // 768px, voir plus haut, "tablette reçoit la vue mobile") : sideMapHidden
  // (900px) est maintenant un sous-ensemble strict de pagerActive, donc le
  // "else if" ci-dessous ne se déclenche plus jamais — pas un bug, juste
  // devenu redondant (pagerActive couvre déjà tout ce cas via le pager
  // mobile). Conservé tel quel plutôt que retiré, pour ne pas devoir
  // retoucher aussi le CSS @media 900px qui masque encore le panneau "carte
  // à côté" (sans conséquence, ce panneau n'est de toute façon plus affiché
  // ainsi sous 1024px).
  const sideMapHidden = () => window.matchMedia('(max-width: 900px)').matches;
  const openMap = () => {
    setMapOpen(true);
    if (pagerActive()) setPage(JOURJ_PAGE + 1); // Carte = page suivant Jour J
    else if (sideMapHidden()) setMapOverlay(true);
  };
  // Réduire la superposition : sous 1024px on retombe sur la page carte du
  // pager (cas normal désormais, y compris pour l'ancienne plage
  // intermédiaire 769-900px, voir sideMapHidden ci-dessus).
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
      {/* Masquée entièrement (pas seulement au scroll) tant qu'une ville/
          excursion est ouverte en détail sur mobile : ce sont des infos du
          VOYAGE (titre, réglages, partage), pas de la ville affichée —
          demande du 2026-07-23. */}
      {!(isMobile && mobileCityDetailId) && (
      <TripEditorHeader
        trip={trip}
        tripId={tripId}
        destinations={destinations}
        cities={cities}
        activities={activities}
        onUpdate={onUpdateTrip}
        shareOpen={shareOpen}
        onToggleShare={() => setShareOpen(s => !s)}
        onOpenExpenses={() => setExpensesOpen(true)}
        onExportPdf={() => window.print()}
        onExportIcal={() => downloadTripIcs({ trip, cities, activities, lodgings })}
        lodgings={lodgings}
        onToggleAutoShareTemplate={(checked) => onUpdateTrip(tripId, { auto_share_template: checked })}
        onBack={onBack}
      />
      )}

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
        onDragStart={() => {
          rbdDraggingRef.current = true;
          // Mobile uniquement (voir .pp-editor-split--dnd-active en CSS) :
          // sans portail, la carte glissée reste position:fixed MAIS enfant
          // réel de sa section de jour d'origine — le overflow:hidden de
          // .pp-day-section (coins arrondis) la coupe dès qu'elle en sort
          // visuellement, alors qu'elle devrait rester au-dessus de tout.
          // On suspend ce découpage juste le temps du geste plutôt que de le
          // retirer en permanence (les coins arrondis restent nets hors drag).
          splitRef.current?.classList.add('pp-editor-split--dnd-active');
        }}
        onDragEnd={(result) => {
          rbdDraggingRef.current = false;
          splitRef.current?.classList.remove('pp-editor-split--dnd-active');
          handleDragEnd(result);
        }}
      >
        <div className="pp-editor-split" ref={splitRef}>
          {/* Piste du pager mobile : translatée d'une page à l'autre au balayage.
              Sur ordinateur, display:contents la rend transparente pour le layout. */}
          <div className="pp-pager-track" data-page={page} style={{ '--pp-page': page }}>
          {/* ── Panneau villes ── */}
          <div className={`pp-city-panel${mobileCityDetailId ? ' pp-city-panel--detail' : ''}`}>
            <div className="pp-city-panel-dests" ref={villesListRef} onScroll={onVillesListScroll}>
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
                    isMobile={isMobile}
                    mobileCityDetailId={mobileCityDetailId}
                    onOpenCityDetail={setMobileCityDetailId}
                    onCloseCityDetail={() => setMobileCityDetailId(null)}
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
                    onAddGroup={onAddGroup}
                    onClearAutoGroups={onClearAutoGroups}
                    onAssignActivitiesToDay={onAssignActivitiesToDay}
                    onAddLodging={onAddLodging}
                    onUpdateLodging={onUpdateLodging}
                    onRemoveLodging={onRemoveLodging}
                    onReloadTripData={onReloadTripData}
                    onAfterImport={goToCitiesPageIfMobile}
                  />
                ))
              )}
            </div>

            {/* Masqué pendant qu'une ville est ouverte en détail sur mobile
                (le détail prend tout l'écran) — sinon "Ajouter un pays"
                resterait visible sous la fiche de la ville. Se masque AUSSI
                (translate, voir CSS) en scrollant la liste des pays/villes
                vers le bas, comme la barre de navigation basse ci-dessous —
                même signal villesChromeHidden pour les deux. */}
            {!(isMobile && mobileCityDetailId) && (
            <div className={`pp-city-panel-bottom${villesChromeHidden && !showCountryPicker ? ' pp-city-panel-bottom--hidden' : ''}`}>
            {showCountryPicker ? (
              // Sur mobile, ce wrapper devient une feuille plein écran (voir
              // CSS, @media max-width:768px) — le clic sur le fond visible
              // autour de la feuille la ferme, même comportement que les
              // autres popups de l'app (.pp-modal-overlay). Sans effet sur
              // ordinateur où le wrapper reste le petit panneau intégré
              // habituel (le clic sur son propre fond n'y est pas atteignable).
              // Sur mobile, portalée vers <body> : sinon, restée DANS
              // .pp-city-panel (qui a overflow:hidden), la feuille se faisait
              // rogner à la hauteur du panneau et la barre de nav basse (rendue
              // ailleurs dans le DOM, donc jamais rognée) apparaissait par-dessus
              // (signalé le 2026-07-23).
              (() => {
                const picker = (
                  <div
                    className="pp-country-picker-wrap pp-country-picker-wrap--panel"
                    onClick={(e) => e.target === e.currentTarget && setShowCountryPicker(false)}
                  >
                    <CountryPicker
                      alreadyAdded={alreadyAdded}
                      onSelect={handleCountrySelect}
                      onClose={() => setShowCountryPicker(false)}
                    />
                  </div>
                );
                return isMobile ? createPortal(picker, document.body) : picker;
              })()
            ) : (
              <button className="pp-add-dest-btn pp-add-dest-btn--panel" onClick={() => setShowCountryPicker(true)}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                {t('country.addTitle')}
              </button>
            )}
            </div>
            )}
          </div>

          {/* ── Panneau jours ── */}
          <div
            className={`pp-content-panel${mapOpen ? ' pp-content-panel--narrowed' : ''}`}
            ref={joursContentRef}
            onScroll={onJoursScroll}
          >
            {/* Bouton "Jour J" — vivait dans l'en-tête du voyage, il a migré ici
                (en-tête de LA colonne qu'il concerne) : masqué sur mobile (CSS),
                où la page dédiée du pager (JOURJ_PAGE) fait déjà ce rôle. */}
            <div className="pp-content-panel-header">
              <button
                type="button"
                className={`pp-btn pp-btn--share pp-btn--dayj${dayModeActive ? ' active' : ''}`}
                onClick={toggleDayMode}
                disabled={!trip?.start_date || !trip?.end_date}
                title={
                  !trip?.start_date || !trip?.end_date
                    ? t('header.dayModeNeedDatesTitle')
                    : (dayModeActive ? t('header.dayModeBackTitle') : t('header.dayModeEnterTitle'))
                }
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 8a4 4 0 100 8 4 4 0 000-8zm0 6a2 2 0 110-4 2 2 0 010 4zm7.9-3a7.94 7.94 0 00-1.6-3.86l1.14-1.14-1.41-1.41-1.14 1.14A7.94 7.94 0 0013 4.1V2h-2v2.1a7.94 7.94 0 00-3.86 1.6L5.99 4.56 4.58 5.97l1.14 1.14A7.94 7.94 0 004.1 11H2v2h2.1a7.94 7.94 0 001.6 3.86l-1.14 1.14 1.41 1.41 1.14-1.14A7.94 7.94 0 0011 19.9V22h2v-2.1a7.94 7.94 0 003.86-1.6l1.14 1.14 1.41-1.41-1.14-1.14A7.94 7.94 0 0019.9 13H22v-2h-2.1z"/>
                </svg>
                {t('header.dayModeButton')}
              </button>
            </div>
            <DayView
              trip={trip}
              destinations={destinations}
              cities={cities}
              activities={activities}
              groups={groups}
              lodgings={lodgings}
              isMobile={isMobile}
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
              <div className={`pp-map-panel${mapOverlay ? ' pp-map-panel--overlay' : ''}${mapCollapsed && !mapOverlay ? ' pp-map-panel--collapsed' : ''}`}>
                {mapCollapsed && !mapOverlay ? (
                  // Rail fin — la carte reste montée derrière (voir
                  // .pp-map-panel-mount--hidden plus bas), jamais démontée : on
                  // garde son état interne (zoom, centrage) et l'auto-ouverture
                  // "une seule fois" ci-dessus reste valable au dépli.
                  <button
                    type="button"
                    className="pp-map-collapsed-rail"
                    onClick={() => setMapCollapsed(false)}
                    title={t('editor.showMapTitle')}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/>
                    </svg>
                    <span className="pp-map-collapsed-rail-label">{t('header.mapButton')}</span>
                  </button>
                ) : (
                  <>
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
                    {!mapOverlay && (
                      <button
                        type="button"
                        className="pp-map-collapse-toggle"
                        onClick={() => setMapCollapsed(true)}
                        title={t('editor.hideMapToRailTitle')}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                        </svg>
                      </button>
                    )}
                  </>
                )}
                <div className={`pp-map-panel-mount${mapCollapsed && !mapOverlay ? ' pp-map-panel-mount--hidden' : ''}`}>
                  <MapPanel activities={activities} groups={groups} cities={cities} lodgings={lodgings} />
                </div>
              </div>
            </>
          )}

          {/* ── Page Dépenses (mobile uniquement — masquée en CSS sur ordinateur,
              où la fonctionnalité arrivera plus tard via un bouton dédié).
              Toujours la DERNIÈRE page du pager (après la carte quand elle est
              ouverte). `active` ne devient vrai que quand la page est affichée :
              le panneau ne charge rien sur ordinateur ni tant qu'on n'y va pas. */}
          <div className="pp-expenses-page">
            <TripExpensesPanel
              tripId={tripId}
              trip={trip}
              userId={user?.id}
              active={pagerActive() && page === pageCount - 1}
            />
          </div>
          </div>{/* /pp-pager-track */}
        </div>
      </DragDropContext>
      )}

      {/* Barre de navigation basse, mobile uniquement (masquée sur ordinateur) :
          les mêmes pages que le balayage, façon appli. Jour J est le bouton
          central circulaire mis en avant (même langage que le bouton Planifier
          de la barre de l'écran principal, cf. .app-nav-btn--primary) puisque
          c'est l'usage mobile le plus fréquent. Villes et Jours à gauche,
          Carte (ouvre la carte à la demande) et Dépenses à droite. Chaque
          onglet porte sa cible et son état actif : les index de pages bougent
          avec la carte (Dépenses est toujours la dernière), un simple
          `page === i` ne suffit plus.
          Masquée entièrement tant qu'un détail de ville/excursion est ouvert
          (mobileCityDetailId) : cet écran plein n'a pas sa propre nav — le seul
          moyen d'en sortir est son propre bouton retour (voir CityBlock/
          DaytripCard), demande du 2026-07-23 ("la barre d'action disparaît sur
          cet écran jusqu'à ce qu'on retourne en arrière"). */}
      {!mobileCityDetailId && (
      <nav className={`pp-mobile-nav${(villesChromeHidden || joursChromeHidden) ? ' pp-mobile-nav--hidden' : ''}`} aria-label={t('editor.navLabel')}>
        {[
          { icon: '🌍', label: t('editor.navCities'), go: () => { setPage(0); setMobileCityDetailId(null); }, isActive: page === 0 },
          { icon: '📅', label: t('editor.navDays'), go: () => setPage(1), isActive: page === 1 },
          { primary: true, label: t('header.dayModeButton'), go: () => setPage(JOURJ_PAGE), isActive: page === JOURJ_PAGE },
          { icon: '🗺️', label: t('header.mapButton'), go: openMap, isActive: showMapPage && page === JOURJ_PAGE + 1 },
          { icon: '🧾', label: t('expenses.navLabel'), go: () => setPage(pageCount - 1), isActive: page === pageCount - 1 },
        ].map(({ icon, label, primary, go, isActive }) => (
          <button
            key={label}
            type="button"
            className={`pp-mobile-nav-btn${primary ? ' pp-mobile-nav-btn--dayj' : ''}${isActive ? ' active' : ''}`}
            onClick={() => {
              // Filet de sécurité : si dayModeActive était resté vrai (ouvert sur
              // ordinateur juste avant un redimensionnement/rotation vers une
              // largeur mobile), on en sort pour retrouver un pager cohérent.
              if (dayModeActive) setDayModeActive(false);
              go();
            }}
            aria-label={label}
            aria-current={isActive}
          >
            {primary ? (
              // Vraie boussole (aiguille en losange, icône "explore" classique) :
              // le losange, symétrique par rotation de 180°, reste net à cette
              // taille — contrairement à la boussole à aiguille fine tentée
              // précédemment. Distincte de l'engrenage de paramétrage (bouton
              // séparé, forme différente).
              <span className="pp-mobile-nav-primary-icon" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  <path d="M14.19 14.19 6 18l3.81-8.19L18 6l-3.81 8.19z"/>
                </svg>
              </span>
            ) : (
              <span className="pp-mobile-nav-icon" aria-hidden="true">{icon}</span>
            )}
            {label}
          </button>
        ))}
      </nav>
      )}

      {shareOpen && (
        <TripShareModal
          tripId={tripId}
          trip={trip}
          userId={user?.id}
          onClose={() => setShareOpen(false)}
          onLeaveTrip={onLeaveTrip}
        />
      )}

      {/* Modal Dépenses (ordinateur uniquement) : même panneau que la page
          mobile, dans l'habillage pp-modal standard — centré sur ordinateur,
          bottom sheet sous 768px (cohérent avec les autres modales de l'écran). */}
      {expensesOpen && (
        <div className="pp-modal-overlay" onClick={e => e.target === e.currentTarget && setExpensesOpen(false)}>
          <div className="pp-modal pp-expenses-modal">
            <div className="pp-modal-header">
              <h3 className="pp-modal-title">{t('expenses.title')}</h3>
              <button className="pp-icon-btn" onClick={() => setExpensesOpen(false)}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
              </button>
            </div>
            <div className="pp-modal-body">
              <TripExpensesPanel tripId={tripId} trip={trip} userId={user?.id} active={expensesOpen} />
            </div>
          </div>
        </div>
      )}

      {/* Invisible à l'écran, révélé uniquement à l'impression (voir .pp-print-view) */}
      <TripPrintView trip={trip} destinations={destinations} cities={cities} activities={activities} lodgings={lodgings} focusToday={isDayModeView} />
    </div>
    </AttachmentsCountProvider>
  );
}
