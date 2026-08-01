import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { callModeration } from '../lib/moderation';
import { useAuth } from '../context/AuthContext';
import useIsMobile from '../hooks/useIsMobile';
import useRestaurants from '../hooks/useRestaurants';
import { haversineKm, formatTravelDuration } from '../lib/planningUtils';
import { useWalkRoutes, MAX_WALK_HAVERSINE_KM } from '../hooks/useTravelRoutes';
import { BUDGET_SYMBOL, formatDistance, restaurantNames } from '../lib/restaurants';
import { cuisineTagLabel } from '../lib/cuisineTags';
import useCuisineTags from '../hooks/useCuisineTags';
import usePlaceFavorites from '../hooks/usePlaceFavorites';
import FilterDropdown from './FilterDropdown';
import CuisineTagPicker from './CuisineTagPicker';
import RestaurantDetail from './RestaurantDetail';
import SourceBadge from './SourceBadge';
import AddRestaurantModal from './AddRestaurantModal';
import EditRestaurantModal from './EditRestaurantModal';
import '../styles/restaurants.css';

// Explorateur carte + liste des restaurants d'une destination.
//
// Exigence structurante : la liste et les positions doivent rester visibles EN
// MÊME TEMPS. La carte est donc embarquée dans le composant (instance Leaflet
// propre) plutôt que déportée dans la carte globale de la planification, qui
// est une page à part sur mobile et ne pourrait jamais cohabiter avec la liste.
//   - Ordinateur : liste à gauche, carte à droite, collée en haut au défilement.
//   - Mobile     : carte en haut (hauteur fixe), liste défilante en dessous.
//
// Interactions, volontairement réduites au minimum :
//   - toute la carte d'un restaurant est cliquable et ouvre sa fiche ;
//   - la survoler (ordinateur) met son repère en avant sur la carte ;
//   - toucher un repère met la ligne correspondante en avant et l'amène à
//     l'écran.
// Pas de vote pouce en l'air : un restaurant se juge sur ses avis notés, et
// deux systèmes de jugement côte à côte n'apportaient rien.

// Icône d'un repère. Extraite pour que la mise en avant puisse la recalculer
// seule, sans reconstruire tous les repères de la carte.
// Épingle en GOUTTE (pointe vers le bas), et non plus une pastille ronde
// portant l'emoji 🍽 : l'emoji se rendait différemment sur chaque système, il
// perdait toute lisibilité à 13px et un rond ne dit pas où il pointe
// exactement. Ici, le repère désigne son point (la pointe), et le couvert est
// un tracé net qui reste net à toutes les tailles et sur toutes les
// plateformes. La forme est un seul SVG : pas d'image à charger, et la couleur
// suit la source (recommandation de l'équipe ou contribution).
function markerIcon(L, restaurant, isActive) {
  // Écart de taille volontairement FRANC (26 → 44) : dans un quartier dense,
  // les gouttes se chevauchent, et un agrandissement discret se perdait dans le
  // tas — on ne voyait pas laquelle venait d'être désignée (2026-07-31). Le
  // reste de la mise en avant (anneau blanc, halo, passage au premier plan) est
  // dans le CSS et dans setZIndexOffset.
  const size = isActive ? 44 : 26;
  const cls = [
    'resto-marker',
    isActive ? 'resto-marker--selected' : '',
    restaurant.source === 'editorial' ? 'resto-marker--editorial' : '',
  ].filter(Boolean).join(' ');
  // Le couvert est le pictogramme « restaurant » DÉJÀ utilisé par l'onglet et
  // par le titre de section — même dessin partout, plutôt qu'un tracé refait à
  // la main. Il est repris en APLAT (et non en traits, essayés d'abord : la
  // fourchette y montrait un creux entre ses dents qu'on lisait comme un trou),
  // mis à l'échelle et translaté pour tomber au centre du disque de la goutte
  // — dont le centre est (12, 12) et non le centre du dessin entier, la pointe
  // occupant tout le bas.
  // Budget sous la goutte : c'est le critère qu'on compare d'une adresse à
  // l'autre, et jusqu'ici il fallait redescendre dans la liste pour le lire.
  // Posé en dehors du flux (`position: absolute` côté CSS) pour ne pas déplacer
  // la pointe, qui reste l'ancrage géographique du repère. Rien pour un
  // restaurant sans budget renseigné : une pastille vide n'apprendrait rien.
  const budget = BUDGET_SYMBOL[restaurant.budgetLevel] || null;
  const budgetTag = budget ? `<span class="resto-marker-price">${budget}</span>` : '';
  return L.divIcon({
    className: '',
    html: `<div class="${cls}" style="width:${size}px;height:${size * 1.28}px">
      <svg viewBox="0 0 24 31" width="100%" height="100%" aria-hidden="true">
        <path class="resto-marker-shape" d="M12 0.9c-6.1 0-11.1 5-11.1 11.1 0 7.7 9.6 17.3 10.4 18.1a1 1 0 0 0 1.4 0c.8-.8 10.4-10.4 10.4-18.1C23.1 5.9 18.1.9 12 .9z"/>
        <path class="resto-marker-glyph" transform="translate(5.4 5.4) scale(0.55)"
          d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/>
      </svg>${budgetTag}
    </div>`,
    // Ancre sur la POINTE de la goutte (bas du dessin), pas sur son centre :
    // c'est elle qui désigne l'adresse.
    iconSize: [size, size * 1.28],
    iconAnchor: [size / 2, size * 1.28],
    popupAnchor: [0, -size * 1.15],
  });
}

// Infobulle Leaflet à partir d'un TEXTE. Indispensable : `bindTooltip` reçu
// sous forme de chaîne est inséré par Leaflet en HTML (`innerHTML`). Les noms
// passés ici viennent d'utilisateurs — nom d'un restaurant proposé par la
// communauté, nom d'une activité d'un voyage importé —, un nom contenant du
// balisage s'exécuterait donc chez le lecteur. Un nœud DOM rempli par
// `textContent` ferme la porte (même précaution que la bulle d'aperçu plus bas
// et que RestaurantPickerMap).
function textTooltip(text) {
  const el = document.createElement('span');
  el.textContent = text;
  return el;
}

// Repère d'un lieu DÉJÀ AU PROGRAMME de la ville : la MÊME pastille que sur la
// carte du voyage — rond coloré à liseré blanc, emoji de catégorie ou 📍 pour
// une zone — pour qu'un lieu se reconnaisse d'une carte à l'autre. Un simple
// point bleu ne se remarquait pas (2026-07-31).
// L'apparence (`color`, `icon`) est calculée par l'appelant, qui seul connaît
// les catégories et les zones du planning ; ce composant se contente de poser.
// Elle reste distincte des gouttes de restaurant : ce n'est pas une proposition
// à choisir, c'est un point d'ancrage. « à 2,0 km de Kiyomizu-dera » dit à
// quelle distance, la carte dit dans quelle direction.
function plannedPlaceIcon(L, point) {
  const color = point.color || '#6366f1';
  return L.divIcon({
    className: '',
    html: `<div class="resto-planned-marker" style="background:${color};border-color:#fff">${point.icon || '📍'}</div>`,
    iconSize: [26, 26],
    iconAnchor: [13, 13],
  });
}

// Nombre de restaurants affichés d'emblée, puis ajoutés à chaque « voir plus ».
const PAGE_SIZE = 10;

// Recherche libre : insensible à la casse et aux accents, sur le nom (les deux
// graphies), l'adresse et les catégories — « shibuya » trouve un restaurant dont
// seul le quartier correspond, l'adresse enregistrée le contenant.
function normalizeSearch(value) {
  return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

// Découpe la saisie en mots, TOUS exigés (et non la suite de caractères telle
// quelle). Sans ça, « sushi shibuya » ne trouvait rien : les deux termes sont
// bien présents, mais dans deux champs différents — le nom et l'adresse — donc
// jamais côte à côte dans le texte comparé.
function searchTokens(value) {
  return normalizeSearch(value).split(/\s+/).filter(Boolean);
}

export default function RestaurantExplorer({
  // ── Identification de la destination (voir useRestaurants) ──
  mode,                       // 'destination' | 'city'
  destType, destinationId, staticDestId,   // mode 'destination'
  cityName, staticDestIds,                 // mode 'city'
  countryCode,
  countryName,
  countryAlpha2 = null,
  destName,
  // Masque le titre quand le composant est déjà sous un onglet « Restaurants ».
  hideTitle = false,
  // 'list'      : liste seule, SANS carte (fiche pays). La fiche pays sert à
  //               parcourir et repérer, pas à situer précisément : une carte y
  //               occupait beaucoup de place pour peu d'usage, faute de repères
  //               de programme auxquels se comparer.
  // 'immersive' : la carte occupe tout l'espace, la liste flotte par-dessus
  //               (planification sur ordinateur, où la vraie question est
  //               « qu'y a-t-il près de mon programme ? »).
  // Sur mobile, 'immersive' retombe sur carte en haut + liste dessous : un
  // panneau flottant y masquerait la carte qu'il sert à lire.
  layout = 'list',
  // ── Planification uniquement ──
  // Lieux déjà planifiés, pour afficher « à 8 min à pied de X ». Le lieu le plus
  // proche est choisi à vol d'oiseau (haversineKm, gratuit et instantané) ; seul
  // le temps de marche affiché vient d'un itinéraire réel, mis en cache et
  // demandé pour les seuls restaurants visibles et assez proches pour qu'une
  // marche ait un sens (MAX_WALK_HAVERSINE_KM).
  referencePoints = [],
  // [{ name, address }] des activités déjà au programme de la ville. L'adresse
  // est indispensable : une ville peut compter six McDonald's, et comparer les
  // seuls noms marquait les six « Ajouté » dès le premier ajouté.
  existingActivities = [],
  onAddToTrip = null,
  // Retire une activité du programme (son identifiant). Donne au bouton d'ajout
  // son second état : recliquer retire le restaurant, plutôt que de laisser un
  // bouton mort « Ajouté » et obliger à aller le chercher dans la liste.
  onRemoveFromTrip = null,
  // Remonte les restaurants affichés pour que la grande carte de la
  // planification puisse afficher les mêmes marqueurs (previewPlaces).
  onVisibleChange = null,
}) {
  const { t, i18n } = useTranslation('app');
  const { user } = useAuth();
  const isMobile = useIsMobile(1024);

  const { restaurants, loading, reload, setRestaurants } = useRestaurants({
    mode, destType, destinationId, countryCode, staticDestId,
    cityName, staticDestIds,
  });

  // `null` = aucun filtre. Les trois filtres sont indépendants et se cumulent.
  // Disposition. DÉCLARÉ ICI, avant les effets de carte qui le lisent : posé
  // près du rendu, il était lu avant son initialisation (zone morte temporelle).
  const withMap = layout === 'immersive';
  const immersive = withMap && !isMobile;

  const [sourceFilter, setSourceFilter] = useState(null);  // null | 'editorial' | 'community'
  const [budgetFilter, setBudgetFilter] = useState(null);  // null | 1 | 2 | 3
  const [cuisineFilter, setCuisineFilter] = useState([]);  // slugs de tags
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [search, setSearch] = useState('');
  // Nombre de cartes affichées. Une destination peut compter des centaines
  // d'adresses : tout rendre d'un coup allongerait la page sans fin et poserait
  // autant de repères sur la carte.
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const communityTags = useCuisineTags();
  const { favorites, isFavorite, toggleFavorite } = usePlaceFavorites(user?.id ?? null);
  // Restaurant mis en avant sur la carte (survol ou repère touché). Distinct de
  // l'ouverture de la fiche : mettre en avant ne doit rien ouvrir.
  const [activeId, setActiveId] = useState(null);
  const [detailId, setDetailId] = useState(null);
  const [adding, setAdding] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [editingId, setEditingId] = useState(null);

  const mapElRef = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef({});
  // Repères des lieux déjà au programme (décor de la carte), tenus à part des
  // repères de restaurants : ils ne se sélectionnent pas et ne se recadrent pas.
  const plannedMarkersRef = useRef([]);
  const cardRefs = useRef({});
  // Évite que la mise en avant déclenchée PAR la liste ne la fasse défiler
  // sous les doigts de l'utilisateur.
  const skipScrollRef = useRef(false);
  // La mise en avant courante doit-elle recentrer la carte ? Vrai quand elle
  // vient de la liste, faux quand elle vient d'un tap sur le repère lui-même.
  const centerOnActiveRef = useRef(false);
  // Jeu de repères déjà cadré : évite de recadrer à chaque survol, et impose de
  // recadrer quand la liste visible change ou que la carte est recréée.
  const fittedSignatureRef = useRef(null);
  const [mapReady, setMapReady] = useState(false);
  // La carte n'a pas pu être construite (module Leaflet non chargé, conteneur
  // refusé…). Sans cet état, l'échec était TOTALEMENT silencieux : un rectangle
  // vide, aucun message, rien dans l'interface pour le comprendre.
  const [mapError, setMapError] = useState(false);
  // Incrémenté chaque fois que la carte a dû être remesurée (voir plus bas) :
  // sert uniquement à faire rejouer le recadrage, qui ne vaut rien s'il a été
  // calculé sur un conteneur de taille nulle.
  const [mapSizeTick, setMapSizeTick] = useState(0);

  // Libellés des tags communautaires, résolus une fois pour toute la liste.
  // DÉCLARÉ AVANT `filtered`, qui les lit pour la recherche par catégorie.
  const communityLabels = useMemo(() => {
    const map = {};
    for (const tg of communityTags) map[tg.slug] = tg.label;
    return map;
  }, [communityTags]);

  const searchWords = useMemo(() => searchTokens(search), [search]);

  const filtered = useMemo(() => {
    if (!restaurants) return [];
    return restaurants.filter((r) => {
      if (sourceFilter && r.source !== sourceFilter) return false;
      if (budgetFilter != null && r.budgetLevel !== budgetFilter) return false;
      // Plusieurs types cochés = « l'un OU l'autre ». Exiger tous les types à la
      // fois ne renverrait presque jamais rien : un restaurant porte rarement
      // « sushi » ET « pizzeria ».
      if (cuisineFilter.length && !cuisineFilter.some((slug) => (r.cuisineTags || []).includes(slug))) return false;
      if (favoritesOnly && !isFavorite(r.type, r.id)) return false;
      if (searchWords.length) {
        const haystack = normalizeSearch([
          r.name, r.nameLatin, r.address,
          ...(r.cuisineTags || []).map((slug) => cuisineTagLabel(slug, t, communityLabels)),
        ].filter(Boolean).join(' '));
        if (!searchWords.every((w) => haystack.includes(w))) return false;
      }
      return true;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [restaurants, sourceFilter, budgetFilter, cuisineFilter, favoritesOnly, searchWords, favorites]);

  const hasActiveFilter = !!sourceFilter || budgetFilter != null || cuisineFilter.length > 0
    || favoritesOnly || searchWords.length > 0;
  const resetFilters = () => {
    setSourceFilter(null); setBudgetFilter(null); setCuisineFilter([]);
    setFavoritesOnly(false); setSearch('');
  };

  // Toute modification du filtrage repart de la première page : rester à
  // « 40 affichés » après avoir réduit la liste à 3 résultats n'a aucun sens.
  useEffect(() => { setVisibleCount(PAGE_SIZE); },
    [sourceFilter, budgetFilter, cuisineFilter, favoritesOnly, searchWords]);

  // Seules les cartes visibles sont rendues ET portées sur la carte : les
  // repères suivent exactement ce que la liste montre.
  const shown = useMemo(() => filtered.slice(0, visibleCount), [filtered, visibleCount]);

  // Lieu planifié le plus proche, calculé une fois pour toute la liste.
  //
  // La sélection du plus proche reste faite à VOL D'OISEAU, et le tri de la
  // liste avec elle : c'est instantané, ça ne coûte aucun appel, et ça donne le
  // même classement dans 99 % des cas. Seul le libellé affiché est enrichi d'un
  // temps de marche réel (voir walkByRestaurant juste en dessous) — on remplace
  // une unité par une autre pour la même adresse, on ne réordonne pas la liste
  // sous les yeux de l'utilisateur au fil des réponses réseau.
  const nearestByRestaurant = useMemo(() => {
    const out = {};
    if (!referencePoints.length) return out;
    for (const r of shown) {
      if (r.lat == null || r.lng == null) continue;
      let best = null;
      for (const p of referencePoints) {
        if (p.lat == null || p.lng == null) continue;
        const km = haversineKm(r.lat, r.lng, p.lat, p.lng);
        if (!best || km < best.km) best = { km, name: p.name, lat: p.lat, lng: p.lng };
      }
      if (best) out[r.id] = best;
    }
    return out;
  }, [shown, referencePoints]);

  // Temps de marche depuis ce lieu planifié jusqu'au restaurant. Même borne que
  // la planification : au-delà de MAX_WALK_HAVERSINE_KM à vol d'oiseau, la
  // marche dépasse forcément les 45 min affichables, l'appel serait donc payé
  // pour une information qu'on n'afficherait pas — la distance reprend la main.
  // Sens lieu → restaurant, celui de la phrase affichée.
  const walkEntries = useMemo(() => Object.entries(nearestByRestaurant)
    .filter(([, n]) => n.km <= MAX_WALK_HAVERSINE_KM)
    .map(([restaurantId, n]) => {
      const r = shown.find((x) => x.id === restaurantId);
      return r ? { id: restaurantId, fromLat: n.lat, fromLng: n.lng, toLat: r.lat, toLng: r.lng } : null;
    })
    .filter(Boolean), [nearestByRestaurant, shown]);
  const walkByRestaurant = useWalkRoutes(walkEntries);

  // Callback lue via une réf : l'appelant la redéfinit à chaque rendu, la mettre
  // en dépendance relancerait l'effet en boucle.
  const visibleChangeRef = useRef(onVisibleChange);
  visibleChangeRef.current = onVisibleChange;
  useEffect(() => {
    visibleChangeRef.current?.(shown.filter((r) => r.lat != null && r.lng != null));
  }, [shown]);
  // AU DÉMONTAGE, on vide la liste. Sans ça, les repères de proposition
  // restaient sur la grande carte du voyage après la fermeture de
  // l'explorateur : le nettoyage n'existait qu'au démontage de CityBlock, qui
  // survit à la fermeture de la modale comme au changement d'onglet. On voyait
  // donc des restaurants qu'on ne consultait plus, jusqu'au rechargement de la
  // page (trouvé en TNR le 2026-07-31).
  useEffect(() => () => visibleChangeRef.current?.([]), []);

  const geolocated = useMemo(() => shown.filter((r) => r.lat != null && r.lng != null), [shown]);
  const hasAny = (restaurants?.length ?? 0) > 0;

  // Lu par la création de la carte (qui ne doit pas dépendre de `geolocated`,
  // sous peine de se recréer à chaque filtre) et par le recentrage sur la fiche
  // ouverte, plus bas.
  const geolocatedRef = useRef(geolocated);
  geolocatedRef.current = geolocated;

  // Activité correspondant à ce restaurant dans le programme de la ville, ou
  // `null`. Renvoie l'ACTIVITÉ et pas un booléen : c'est elle qu'il faut pour
  // retirer le restaurant d'un second clic. Sorti de la liste pour que la fiche
  // détail, qui porte le même bouton, réponde exactement pareil.
  const tripActivityFor = useCallback((r) => {
    if (!r) return null;
    const names = restaurantNames(r, i18n.language);
    // Comparaison sur les DEUX graphies : un restaurant ajouté au voyage sous
    // son nom latin ne doit pas se reproposer parce que la liste l'affiche
    // désormais sous son nom d'origine.
    return existingActivities.find((a) => {
      const sameName = [names.primary, names.secondary]
        .filter(Boolean)
        .some((n) => n.trim().toLowerCase() === String(a.name || '').trim().toLowerCase());
      if (!sameName) return false;
      // Adresses connues des deux côtés : elles doivent concorder, sinon il
      // s'agit d'une autre adresse de la même enseigne. Adresse manquante
      // quelque part : on s'en tient au nom, le faux positif étant préférable
      // à un doublon dans le voyage.
      if (!r.address || !a.address) return true;
      return r.address.trim().toLowerCase() === a.address.trim().toLowerCase();
    }) || null;
  }, [existingActivities, i18n.language]);

  // Ajout / retrait sur le même bouton, comme un « abonné / se désabonner » :
  // le bouton dit l'état, le clic le bascule. Le retrait n'est proposé que si
  // l'appelant sait le faire ET que l'activité est identifiée (les seeds
  // éditoriaux d'anciennes versions n'ont pas d'`id` remonté ici).
  // Restaurant dont le bouton vient d'être actionné SANS que le curseur l'ait
  // quitté. Le bouton bascule alors sous la souris : « Ajouter » devient
  // « Ajouté », et son survol — qui annonce le retrait en rouge — s'appliquait
  // dans la foulée. On voyait donc du rouge à l'instant même où l'on venait
  // d'ajouter, et il fallait déplacer la souris pour lire le vert. Le survol
  // rouge est neutralisé jusqu'à ce que le curseur sorte du bouton.
  const [justToggledId, setJustToggledId] = useState(null);

  const toggleTrip = useCallback((r, activity, displayName) => {
    setJustToggledId(r.id);
    if (activity) {
      if (activity.id) onRemoveFromTrip?.(activity.id);
      return;
    }
    onAddToTrip?.({ ...r, displayName });
  }, [onAddToTrip, onRemoveFromTrip]);

  // ─── Carte ────────────────────────────────────────────────────────────────
  // `hasAny` en dépendance : au montage, la liste n'est pas encore chargée et le
  // conteneur de la carte n'existe pas dans le DOM.
  useEffect(() => {
    if (!hasAny || !withMap) return undefined;
    let cancelled = false;
    setMapError(false);
    import('leaflet').then((module) => {
      const L = module.default;
      import('leaflet/dist/leaflet.css');
      if (cancelled || !mapElRef.current || mapRef.current) return;

      const map = L.map(mapElRef.current, { zoomControl: false, attributionControl: false });
      // Commandes de zoom à DROITE : le panneau de recherche flotte sur le bord
      // gauche en disposition immersive, elles passaient dessous. Masquées sur
      // mobile, où le pincement suffit et où chaque pixel compte.
      if (!isMobile) L.control.zoom({ position: 'topright' }).addTo(map);
      mapRef.current = map;
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(map);
      L.control.attribution({ position: 'bottomright', prefix: '© OSM' }).addTo(map);
      // VUE POSÉE D'EMBLÉE. Une carte Leaflet sans vue ne dessine RIEN — pas
      // même une tuile — et toutes les autres poses de vue de ce composant sont
      // conditionnelles : le cadrage n'a lieu que s'il existe des repères
      // géolocalisés ET que le cadre a déjà une taille exploitable. Il suffisait
      // donc qu'une de ces conditions manque à l'instant de la création pour que
      // le conteneur reste désespérément blanc — c'est ce qu'on voyait sur
      // l'écran de planification mobile. Le premier restaurant géolocalisé sert
      // de point de départ, à défaut une vue mondiale.
      const first = geolocatedRef.current[0];
      map.setView(first ? [first.lat, first.lng] : [20, 0], first ? 13 : 2);
      // Remesure + RECADRAGE, et pas seulement `invalidateSize()`. Sur l'écran
      // de planification mobile, l'explorateur est monté dans un onglet qui
      // s'affiche par une transition : au moment où Leaflet fige les
      // dimensions de son conteneur, celui-ci mesure encore zéro. Le cadrage
      // calculé là-dessus est inexploitable (zoom aberrant, centre nulle part)
      // et la carte restait donc VIDE, même une fois le conteneur à sa taille
      // réelle — remesurer sans recadrer ne suffisait pas (signalé le
      // 2026-07-31 : « on ne voit pas la carte sur l'écran de planif »).
      // Ne fait quelque chose que si le conteneur a RÉELLEMENT changé de taille :
      // les relances ci-dessous et l'observateur se recouvrent volontairement,
      // sans ce garde-fou on reconstruirait les repères trois fois pour rien à
      // chaque ouverture.
      let lastW = 0;
      let lastH = 0;
      const refit = () => {
        const el = mapElRef.current;
        if (!el) return;
        if (el.clientWidth === lastW && el.clientHeight === lastH) return;
        lastW = el.clientWidth;
        lastH = el.clientHeight;
        try { map.invalidateSize(); } catch { return; /* carte démontée */ }
        fittedSignatureRef.current = null;
        setMapSizeTick((t) => t + 1);
      };
      const observer = new ResizeObserver(refit);
      observer.observe(mapElRef.current);
      map._ppObserver = observer;
      // L'observateur ne suffit pas toujours : il ne se déclenche pas si la
      // taille finale du conteneur était déjà appliquée au montage. Plusieurs
      // relances espacées couvrent aussi bien une transition courte qu'un rendu
      // tardif, sans dépendre d'un délai deviné juste (même parade que
      // RestaurantPickerMap).
      map._ppKicks = [60, 200, 500, 1000].map((delay) => setTimeout(refit, delay));
      // Carte neuve : elle n'a encore AUCUNE vue. Oublier de réarmer le
      // recadrage la laisserait centrée nulle part après un changement de
      // format (rotation du téléphone, passage du seuil 1024 px), puisque la
      // signature du jeu de repères, elle, n'a pas changé.
      fittedSignatureRef.current = null;
      setMapReady(true);
    }).catch((err) => {
      // Un échec ici — chargement du module Leaflet, conteneur refusé par
      // `L.map()` — ne remontait NULLE PART : la promesse n'avait pas de
      // `catch`, donc rien dans l'interface et rien dans la console au-delà
      // d'un rejet non traité. On le trace et on l'affiche.
      console.error('[RestaurantExplorer] carte indisponible :', err);
      if (!cancelled) setMapError(true);
    });

    return () => {
      cancelled = true;
      setMapReady(false);
      if (mapRef.current) {
        (mapRef.current._ppKicks || []).forEach(clearTimeout);
        mapRef.current._ppObserver?.disconnect();
        mapRef.current.remove();
        mapRef.current = null;
        markersRef.current = {};
        plannedMarkersRef.current = [];
      }
    };
  }, [isMobile, hasAny, withMap]);

  // Signature du jeu de repères affiché : sert à ne recadrer QUE lorsque la
  // liste visible change réellement (chargement, filtre), et pas à chaque survol.
  const geoSignature = useMemo(() => geolocated.map((r) => r.id).join('|'), [geolocated]);

  // Lieux du programme à faire ENTRER DANS LE CADRE avec les restaurants.
  // Poser leurs repères ne suffisait pas : la carte se cadrant sur les seuls
  // restaurants, ils tombaient souvent hors champ et l'on croyait qu'ils
  // n'existaient pas (signalé le 2026-07-31). On ne prend toutefois que les
  // PROCHES : une excursion à 40 km aurait fait dézoomer jusqu'à rendre le
  // quartier illisible, exactement ce qu'on cherche à montrer ici.
  const plannedInFrame = useMemo(() => {
    const geo = referencePoints.filter((p) => p.lat != null && p.lng != null);
    if (!geo.length || !geolocated.length) return [];
    return geo.filter((p) => geolocated.some((r) => haversineKm(p.lat, p.lng, r.lat, r.lng) <= 6));
  }, [referencePoints, geolocated]);

  // Le cadrage doit se rejouer quand ces points changent, pas seulement quand
  // la liste de restaurants change.
  const fitSignature = useMemo(
    () => `${geoSignature}#${plannedInFrame.map((p) => `${p.lat},${p.lng}`).join('|')}`,
    [geoSignature, plannedInFrame]
  );

  // Création des repères. Volontairement SANS `activeId` en dépendance : la mise
  // en avant se contente de changer l'icône du repère concerné (effet suivant).
  // Tout recréer à chaque survol détruisait et reconstruisait la trentaine de
  // repères d'une ville à chaque mouvement de souris, avec le scintillement et
  // la perte d'infobulle que cela suppose.
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady) return undefined;
    let cancelled = false;

    import('leaflet').then((module) => {
      const L = module.default;
      if (cancelled || !mapRef.current) return;

      Object.values(markersRef.current).forEach((m) => m.remove());
      markersRef.current = {};

      // Lieux déjà au programme de la ville, posés AVANT les restaurants pour
      // qu'ils restent dessous : ils servent de décor, pas de choix. Rendus même
      // quand la liste de restaurants est vide (un filtre trop restrictif) —
      // c'est justement là qu'on veut comprendre où l'on cherchait.
      plannedMarkersRef.current.forEach((m) => m.remove());
      plannedMarkersRef.current = [];
      for (const p of referencePoints) {
        if (p.lat == null || p.lng == null) continue;
        const marker = L.marker([p.lat, p.lng], {
          icon: plannedPlaceIcon(L, p),
          // Sous les gouttes : deux repères superposés, c'est le restaurant
          // qu'on veut pouvoir toucher.
          zIndexOffset: -500,
          keyboard: false,
        }).addTo(map);
        // `direction: 'auto'` et non `'top'` : Leaflet ne recadre JAMAIS une
        // infobulle (contrairement aux bulles, qui déplacent la carte). Posée
        // au-dessus d'un repère proche d'un bord, elle sortait du cadre et se
        // faisait couper par la carte — « …ashiyama — à votre programme »
        // (signalé le 2026-07-31). En mode auto, Leaflet la place du côté du
        // CENTRE de la carte : à droite d'un repère situé à gauche, à gauche
        // d'un repère situé à droite. Elle rentre donc toujours.
        marker.bindTooltip(textTooltip(t('restaurants.plannedPlaceTooltip', { name: p.name })), {
          direction: 'auto',
          offset: [0, 0],
          className: 'resto-map-tooltip',
        });
        plannedMarkersRef.current.push(marker);
      }

      if (!geolocated.length) return;

      geolocated.forEach((r) => {
        const names = restaurantNames(r, i18n.language);
        const marker = L.marker([r.lat, r.lng], {
          icon: markerIcon(L, r, false),
        }).addTo(map);
        // Infobulle au SURVOL seulement : au toucher, elle doublonnerait avec
        // la bulle d'aperçu ci-dessous, qui dit la même chose en mieux.
        // Décalage = hauteur de l'épingle : le repère est ancré sur sa POINTE
        // (voir markerIcon), l'infobulle doit donc remonter au-dessus du dessin
        // entier, pas au-dessus du point désigné.
        // Même raison que ci-dessus. Décalage vertical pour viser le disque de
        // la goutte plutôt que sa pointe, sur laquelle le repère est ancré.
        if (!isMobile) marker.bindTooltip(textTooltip(names.primary), {
          direction: 'auto',
          offset: [0, -20],
          className: 'resto-map-tooltip',
        });

        if (isMobile) {
          // ─── Toucher un repère : APERÇU, pas ouverture ───
          // Au doigt, il n'y a pas de survol : toucher un repère ouvrait donc la
          // fiche complète d'emblée, sans laisser vérifier qu'il s'agit bien du
          // bon établissement — et en refermant, on se retrouvait projeté sur la
          // ligne correspondante, loin de la carte, obligé de remonter pour
          // regarder le repère suivant (signalé le 2026-07-31). La bulle donne
          // de quoi reconnaître l'adresse sur place, et « Détails » reste à un
          // geste. La carte, elle, ne bouge pas.
          const box = document.createElement('div');
          box.className = 'resto-map-popup';

          const title = document.createElement('span');
          title.className = 'resto-map-popup-name';
          // `textContent` : ces noms viennent d'une base de données publique,
          // ils ne doivent jamais être interprétés comme du balisage.
          title.textContent = names.primary;
          box.appendChild(title);

          if (names.secondary) {
            const local = document.createElement('span');
            local.className = 'resto-map-popup-local';
            local.textContent = names.secondary;
            box.appendChild(local);
          }

          const facts = [
            r.budgetLevel ? BUDGET_SYMBOL[r.budgetLevel] : null,
            r.ratingCount > 0 ? `★ ${r.ratingAvg.toFixed(1).replace('.', ',')} (${r.ratingCount})` : null,
            (r.cuisineTags || []).slice(0, 2).map((slug) => cuisineTagLabel(slug, t, communityLabels)).join(' · ') || null,
          ].filter(Boolean);
          if (facts.length) {
            const meta = document.createElement('span');
            meta.className = 'resto-map-popup-meta';
            meta.textContent = facts.join('   ');
            box.appendChild(meta);
          }

          if (r.address) {
            const addr = document.createElement('span');
            addr.className = 'resto-map-popup-addr';
            addr.textContent = r.address;
            box.appendChild(addr);
          }

          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'resto-map-popup-btn';
          btn.textContent = t('restaurants.detailsButton');
          btn.addEventListener('click', () => {
            // La liste ne défile PAS : on revient sur la carte en refermant.
            skipScrollRef.current = true;
            setDetailId(r.id);
          });
          box.appendChild(btn);

          // Marge d'auto-cadrage SERRÉE en vertical (14px) : la carte ne fait
          // que 34vh sur mobile, chaque pixel réservé en haut et en bas est
          // pris sur la place dont Leaflet dispose pour loger la bulle. À 26px,
          // une bulle un peu haute ne rentrait plus et restait tronquée.
          marker.bindPopup(box, { closeButton: false, offset: [0, 0], autoPanPadding: [14, 14] });
        }

        marker.on('click', () => {
          if (isMobile) {
            skipScrollRef.current = true;
            setActiveId(r.id);
            return;   // la bulle s'ouvre d'elle-même (bindPopup)
          }
          // Ordinateur : le survol a déjà mis la ligne en avant et permis de
          // vérifier de quel restaurant il s'agit — le clic va donc droit à la
          // fiche complète. La mise en avant est conservée : à la fermeture, la
          // ligne correspondante est déjà en vue et surlignée.
          skipScrollRef.current = false;
          setActiveId(r.id);
          setDetailId(r.id);
        });
        markersRef.current[r.id] = marker;
      });

      // Recadrage à chaque changement du jeu affiché, pas seulement au premier
      // rendu : filtrer sur une catégorie dont les adresses sont hors du champ
      // courant laissait sinon une carte vide, sans rien pour le comprendre.
      //
      // JAMAIS sur un cadre encore trop petit : `fitBounds` y calcule un niveau
      // de zoom aberrant à partir d'une taille de 0 (la marge de 30px demandée
      // dépasse alors le conteneur lui-même), ce qui laisse la carte dans un
      // état dont un simple `invalidateSize()` ne la sort pas. On laisse la
      // signature NON marquée : le prochain passage — déclenché par la remesure
      // du conteneur, voir `refit` — refera le cadrage pour de bon.
      const size = map.getSize();
      if (fittedSignatureRef.current !== fitSignature && size.x > 80 && size.y > 80) {
        map.fitBounds([
          ...geolocated.map((r) => [r.lat, r.lng]),
          ...plannedInFrame.map((p) => [p.lat, p.lng]),
        ], { padding: [30, 30], maxZoom: 15 });
        fittedSignatureRef.current = fitSignature;
      }
    });

    return () => { cancelled = true; };
    // `i18n.language` : les infobulles des repères portent le nom affiché, elles
    // doivent suivre un changement de langue.
    // `mapSizeTick` : rejoue le cadrage après une remesure du conteneur — celui
    // calculé sur une taille nulle ne vaut rien (voir la création de la carte).
    // `isMobile` / `communityLabels` : la bulle d'aperçu tactile n'existe que sur
    // mobile et affiche les libellés de catégories.
    // `referencePoints` : les lieux au programme changent quand on en ajoute ou
    // qu'on en retire un, leurs repères doivent suivre.
  }, [geolocated, fitSignature, plannedInFrame, mapReady, i18n.language, mapSizeTick, isMobile, communityLabels, t, referencePoints]);

  // Mise en avant : seules les icônes des deux repères concernés changent.
  useEffect(() => {
    if (!mapReady) return undefined;
    let cancelled = false;
    import('leaflet').then((module) => {
      const L = module.default;
      if (cancelled) return;
      for (const r of geolocated) {
        const marker = markersRef.current[r.id];
        if (!marker) continue;
        const isActive = r.id === activeId;
        marker.setIcon(markerIcon(L, r, isActive));
        // Au PREMIER PLAN. Leaflet empile les repères par latitude : dans un
        // quartier dense, celui qu'on vient de désigner pouvait se retrouver
        // derrière ses voisins, agrandi mais à moitié caché.
        marker.setZIndexOffset(isActive ? 1000 : 0);
      }
    });
    return () => { cancelled = true; };
  }, [activeId, geolocated, mapReady]);

  // Mise en avant → recentrage carte + amenée à l'écran de la ligne.
  // `geolocated` est LU (via `geolocatedRef`, déclarée plus haut) mais
  // délibérément absent des dépendances : filtrer ou taper dans la recherche le
  // fait changer, et l'effet rejouait alors son défilement alors que la
  // sélection, elle, n'avait pas bougé.
  useEffect(() => {
    if (!activeId) return;
    const r = geolocatedRef.current.find((x) => x.id === activeId);
    const map = mapRef.current;
    // Sur mobile, on ne recentre QUE si la mise en avant vient de la liste. Un
    // tap sur le repère, lui, ouvre une bulle d'aperçu que Leaflet place déjà
    // au mieux (`autoPan`) : notre propre recentrage, exécuté juste après,
    // écrasait ce calcul et tronquait la bulle en haut du cadre.
    const fromList = centerOnActiveRef.current;
    const shouldCenter = !isMobile || fromList;
    centerOnActiveRef.current = false;
    if (r && map && shouldCenter) map.panTo([r.lat, r.lng], { animate: true });

    // Mise en avant demandée DEPUIS LA LISTE, sur mobile : la carte est en haut
    // de la page et l'on a forcément défilé pour atteindre la ligne — elle est
    // donc hors de l'écran, et la goutte qu'on vient de désigner grossit sans
    // que personne ne la voie. On ramène la carte à l'écran (2026-07-31), et on
    // OUVRE SA BULLE : toucher une ligne doit donner exactement ce que donne un
    // tap sur le repère lui-même — nom, budget, note, adresse — sinon la ligne
    // ne fait que déplacer une carte sans rien dire de plus.
    if (fromList && isMobile && r && mapElRef.current) {
      mapElRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Après le recentrage : `openPopup` déclenche le recadrage automatique de
      // Leaflet (autoPan), qui doit travailler sur la position finale de la
      // carte, pas sur celle d'avant le `panTo`.
      const marker = markersRef.current[activeId];
      if (marker) requestAnimationFrame(() => marker.openPopup());
    }

    if (skipScrollRef.current) { skipScrollRef.current = false; return; }
    cardRefs.current[activeId]?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [activeId, isMobile]);

  const highlightFromList = useCallback((id) => {
    skipScrollRef.current = true;
    // Demande explicite de recentrage : la mise en avant vient de la LISTE, la
    // carte doit donc aller chercher le repère, qui peut être hors champ. Un
    // tap sur le repère lui-même ne pose pas ce drapeau : il n'y a rien à aller
    // chercher, et Leaflet est déjà en train de placer la bulle d'aperçu.
    centerOnActiveRef.current = true;
    setActiveId(id);
  }, []);

  async function handleDelete(resto) {
    const result = await callModeration('places', {
      action: 'delete', placeId: resto.id, placeType: resto.type,
    });
    if (result.ok) {
      setRestaurants((prev) => prev.filter((r) => r.id !== resto.id));
      setDeletingId(null);
      if (activeId === resto.id) setActiveId(null);
      if (detailId === resto.id) setDetailId(null);
    }
  }

  const detailRestaurant = detailId ? (restaurants || []).find((r) => r.id === detailId) : null;
  const editingRestaurant = editingId ? (restaurants || []).find((r) => r.id === editingId) : null;

  // Où rattacher une contribution. En planification on ne connaît qu'un nom de
  // ville : on vise la première destination éditoriale correspondante. S'il n'y
  // en a aucune, le bouton d'ajout est masqué plutôt que de mener à une erreur
  // au moment de publier.
  const addTarget = mode === 'destination'
    ? { destType, destinationId, staticDestId }
    : ((staticDestIds || []).length
        ? { destType: 'static', destinationId: null, staticDestId: staticDestIds[0] }
        : null);
  const canContribute = !!user && !!addTarget?.destType;

  const addButton = canContribute && (
    <button className="places-add-btn" onClick={() => setAdding(true)}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
      </svg>
      {t('restaurants.addButton')}
    </button>
  );

  if (restaurants === null) {
    return <div className="resto-explorer-loading">{t('restaurants.loading')}</div>;
  }

  const searchField = (
    <div className="resto-search-field">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14z"/>
      </svg>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={t('restaurants.searchListPlaceholder')}
        aria-label={t('restaurants.searchListPlaceholder')}
      />
      {search && (
        <button className="resto-search-clear" onClick={() => setSearch('')} aria-label={t('restaurants.clearFilters')}>✕</button>
      )}
    </div>
  );

  // Nombre de filtres actifs, affiché sur le bouton : replié, rien n'indiquerait
  // sinon qu'un filtre restreint la liste. Les favoris n'y comptent pas — ils
  // ont leur propre bouton, toujours visible.
  const activeFilterCount = (sourceFilter ? 1 : 0) + (budgetFilter != null ? 1 : 0)
    + (cuisineFilter.length ? 1 : 0);

  // Favoris SORTI des filtres : c'est le raccourci le plus utilisé, il doit
  // rester à un seul clic au lieu d'être enterré derrière « Filtres ».
  const favoritesToggle = user && (
    <button
      className={`resto-filter-toggle${favoritesOnly ? ' resto-filter-toggle--set' : ''}`}
      onClick={() => setFavoritesOnly((v) => !v)}
      aria-pressed={favoritesOnly}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill={favoritesOnly ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
        <path d="M17 3H7a2 2 0 0 0-2 2v16l7-4 7 4V5a2 2 0 0 0-2-2z" />
      </svg>
      {t('restaurants.filterFavorites')}
    </button>
  );

  const filterToggle = (
    <button
      className={`resto-filter-toggle${activeFilterCount ? ' resto-filter-toggle--set' : ''}${filtersOpen ? ' resto-filter-toggle--open' : ''}`}
      onClick={() => setFiltersOpen((v) => !v)}
      aria-expanded={filtersOpen}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>
      </svg>
      {t('restaurants.filtersButton')}
      {activeFilterCount > 0 && <span className="resto-filter-count">{activeFilterCount}</span>}
      {/* Chevron couché quand c'est replié, tourné vers le bas une fois
          déplié : il annonce que les filtres vont apparaître À CÔTÉ. */}
      <svg className="resto-filter-toggle-chevron" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
      </svg>
    </button>
  );

  // Filtres AFFICHÉS EN LIGNE, à la suite des boutons : un panneau flottant
  // encadré ajoutait une surface et des intitulés pour trois listes qui se
  // lisent très bien seules.
  const inlineFilters = filtersOpen && (
    <>
      <FilterDropdown
        label={t('restaurants.filterSourceAll')}
        value={sourceFilter}
        onChange={setSourceFilter}
        options={[
          { value: null, label: t('restaurants.filterSourceAll') },
          { value: 'editorial', label: t('restaurants.filterEditorial') },
          { value: 'community', label: t('restaurants.filterCommunity') },
        ]}
      />
      <FilterDropdown
        label={t('restaurants.filterBudgetAny')}
        value={budgetFilter}
        onChange={setBudgetFilter}
        options={[
          { value: null, label: t('restaurants.filterBudgetAny') },
          ...[1, 2, 3].map((b) => ({ value: b, label: BUDGET_SYMBOL[b] })),
        ]}
      />
      <CuisineTagPicker
        selected={cuisineFilter}
        onChange={setCuisineFilter}
        communityTags={communityTags}
      />
      {hasActiveFilter && (
        <button className="resto-filters-reset" onClick={resetFilters}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
          {t('restaurants.clearFilters')}
        </button>
      )}
    </>
  );

  return (
    <div className={`resto-explorer${immersive ? ' resto-explorer--immersive' : ''}`}>
      {(!hideTitle || addButton) && (
        <div className="resto-explorer-header">
          {!hideTitle && <h4 className="resto-explorer-title">{t('restaurants.title')}</h4>}
          {addButton}
        </div>
      )}

      {!hasAny && (
        <p className="resto-explorer-empty">{t('restaurants.empty')}</p>
      )}

      {hasAny && (
        <div className={`resto-explorer-body${withMap ? '' : ' resto-explorer-body--list'}`}>
          {withMap && (
            <div className="resto-explorer-map-wrap">
              <div ref={mapElRef} className="resto-explorer-map" />
              {mapError ? (
                <div className="resto-explorer-map-empty">{t('restaurants.mapUnavailable')}</div>
              ) : !geolocated.length && shown.length > 0 && (
                <div className="resto-explorer-map-empty">{t('restaurants.noCoordinates')}</div>
              )}
            </div>
          )}

          <div className="resto-explorer-panel">
            {/* Recherche libre au-dessus des filtres : on cherche plus souvent
                un nom ou un quartier qu'on ne combine trois filtres. */}
            <div className="resto-explorer-toolbar">
              {searchField}
              {/* Les deux boutons se partagent la largeur, à parts égales : à
                  leur largeur de texte, ils flottaient au milieu d'une colonne
                  vide et le regard ne savait pas où s'arrêter. */}
              <div className="resto-explorer-toolbar-row">
                {favoritesToggle}
                {filterToggle}
              </div>
              {/* Filtres dépliés sur LEUR propre rangée, et non à la suite des
                  deux boutons. Dans le panneau flottant de la planification —
                  380 px de large — trois listes déroulantes et le compteur se
                  bousculaient sur la même ligne, chaque libellé tronqué à deux
                  mots. Sur une rangée à eux, ils prennent la largeur utile. */}
              {inlineFilters && (
                <div className="resto-explorer-filters-row">{inlineFilters}</div>
              )}
            </div>

            {/* Compteur sur SA ligne, aligné à gauche et souligné d'un trait :
                accroché à droite des filtres, il se lisait comme une troisième
                commande. Ici il annonce la liste qui suit, et le trait fait la
                césure entre ce qui filtre et ce qui est filtré. */}
            <div className="resto-explorer-count-row">
              <span className="resto-explorer-count">
                {t('restaurants.countFound', { count: filtered.length })}
              </span>
            </div>

            <ul className="resto-list">
              {shown.map((r) => {
                const nearest = nearestByRestaurant[r.id];
                const names = restaurantNames(r, i18n.language);
                const tripActivity = tripActivityFor(r);
                return (
                  <li
                    key={r.id}
                    ref={(el) => { cardRefs.current[r.id] = el; }}
                    className={`resto-card${activeId === r.id ? ' resto-card--active' : ''}`}
                    // AU DOIGT, toucher une ligne DÉSIGNE son repère sur la
                    // carte — il grossit et la carte va le chercher — sans
                    // ouvrir la fiche : celle-ci recouvrirait l'écran, et l'on
                    // ne verrait justement pas ce qu'on venait de désigner. La
                    // fiche s'ouvre par « Détails », comme depuis la bulle d'un
                    // repère. À LA SOURIS, le survol a déjà fait cette mise en
                    // avant : le clic peut donc aller droit à la fiche.
                    onClick={() => {
                      highlightFromList(r.id);
                      if (!isMobile || !withMap) setDetailId(r.id);
                    }}
                    // Mettre une ligne en avant n'a de sens que s'il y a une
                    // carte où la refléter. Sans elle, le survol armait un
                    // recentrage qui ramenait la liste en haut à chaque frappe
                    // dans la recherche (signalé le 2026-07-29).
                    onMouseEnter={() => { if (!isMobile && withMap) highlightFromList(r.id); }}
                    role="button"
                    tabIndex={0}
                    // Au clavier, en revanche, toujours la fiche : « Entrée » sur
                    // une ligne annonce qu'on l'ouvre, et il n'y a pas de carte
                    // à regarder pendant qu'on tabule.
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); highlightFromList(r.id); setDetailId(r.id); } }}
                  >
                    <div className="resto-card-main">
                      {/* Le nom occupe SA ligne, sans le budget à côté. Collé au
                          titre, « €€ » se lisait comme une partie de l'enseigne
                          — et il appartient à la même famille d'information que
                          la note, avec laquelle il est désormais regroupé. */}
                      <div className="resto-card-head">
                        <span className="resto-card-name">{names.primary}</span>
                      </div>
                      {/* Seconde graphie : pour un lecteur francophone c'est le
                          nom d'origine, celui de la devanture, indispensable
                          pour retrouver l'adresse une fois sur place. */}
                      {names.secondary && <span className="resto-card-name-local">{names.secondary}</span>}

                      {/* Rangée des ÉTIQUETTES : origine puis types de cuisine.
                          Toutes deux qualifient le restaurant et ont la même
                          forme de pastille ; les séparer sur deux rangées
                          faisait deux bandes maigres au lieu d'une lisible. */}
                      <div className="resto-card-tags">
                        <SourceBadge source={r.source} />
                        {(r.cuisineTags || []).map((slug) => (
                          <span key={slug} className="resto-card-tag">
                            {cuisineTagLabel(slug, t, communityLabels)}
                          </span>
                        ))}
                      </div>

                      {/* Rangée des CHIFFRES : budget puis note. Ce sont les deux
                          repères qu'on compare d'une adresse à l'autre, ils
                          doivent se lire ensemble et à la même hauteur. */}
                      <div className="resto-card-meta">
                        {r.budgetLevel && <span className="resto-card-budget">{BUDGET_SYMBOL[r.budgetLevel]}</span>}
                        {r.ratingCount > 0 ? (
                          <span className="resto-card-rating">
                            <span className="resto-card-rating-star" aria-hidden="true">★</span>
                            {r.ratingAvg.toFixed(1).replace('.', ',')}
                            <span className="resto-card-rating-count">({r.ratingCount})</span>
                          </span>
                        ) : (
                          <span className="resto-card-rating--none">{t('restaurants.noRating')}</span>
                        )}
                      </div>

                      {/* Éloignement SOUS la rangée des chiffres, jamais à côté.
                          Tant qu'il en était un enfant, `flex-wrap` le laissait
                          sur la même ligne quand le libellé était court et le
                          renvoyait dessous quand il était long : d'une carte à
                          l'autre, la même information changeait de place.
                          L'icône le rend identifiable sans avoir à lire la
                          phrase — et distingue d'un coup d'œil le temps de
                          marche réel de la distance à vol d'oiseau. */}
                      {nearest && (
                        <div className="resto-card-distance">
                          {walkByRestaurant[r.id] ? (
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                              <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z" />
                            </svg>
                          ) : (
                            /* Deux points reliés d'un trait pointillé : c'est
                               littéralement ce que la ligne annonce, une
                               distance à vol d'oiseau. Surtout PAS un bus ni
                               une voiture — useTravelRoutes.js s'interdit
                               explicitement de désigner un mode motorisé, qu'on
                               ne peut pas deviner (métro à Kyoto, voiture
                               ailleurs). Et ce repli ne veut pas toujours dire
                               « c'est loin » : il sert aussi quand l'itinéraire
                               n'est pas encore revenu ou que le quota du jour
                               est épuisé. */
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                              <circle cx="5.5" cy="18.5" r="2.6" fill="currentColor" stroke="none" />
                              <circle cx="18.5" cy="5.5" r="2.6" fill="currentColor" stroke="none" />
                              <path d="M7.9 16.1 16.1 7.9" strokeDasharray="2.4 2.8" />
                            </svg>
                          )}
                          <span>
                            {walkByRestaurant[r.id]
                              ? t('restaurants.walkFrom', { duration: formatTravelDuration(walkByRestaurant[r.id].durationS), name: nearest.name })
                              : t('restaurants.distanceFrom', { distance: formatDistance(nearest.km), name: nearest.name })}
                          </span>
                        </div>
                      )}

                      {/* Actions alignées à DROITE et discrètes : la carte
                          entière ouvre déjà la fiche, ces boutons ne sont qu'un
                          rappel explicite — un bouton plein leur donnerait plus
                          de poids qu'au nom du restaurant. */}
                      <div className="resto-card-actions" onClick={(e) => e.stopPropagation()}>
                        {onAddToTrip && (
                          <button
                            className={`resto-card-add-btn${tripActivity ? ' resto-card-add-btn--added' : ''}${justToggledId === r.id ? ' resto-card-add-btn--justtoggled' : ''}`}
                            onMouseLeave={() => { if (justToggledId === r.id) setJustToggledId(null); }}
                            // Plus jamais désactivé quand c'est ajouté : le
                            // second clic RETIRE, comme un « abonné / se
                            // désabonner ». Il ne reste inerte que si le retrait
                            // n'est pas possible (activité sans identifiant).
                            disabled={!!tripActivity && !(onRemoveFromTrip && tripActivity.id)}
                            title={tripActivity ? t('restaurants.removeFromTrip') : undefined}
                            // Le voyage reçoit le nom AFFICHÉ : une activité
                            // nommée « 挽肉と米 » dans un planning en français
                            // serait illisible.
                            onClick={() => toggleTrip(r, tripActivity, names.primary)}
                          >
                            {/* Coche : l'état se lit d'un coup d'œil en
                                parcourant la liste, sans lire le libellé. */}
                            {tripActivity && (
                              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                              </svg>
                            )}
                            {tripActivity ? t('restaurants.alreadyAdded') : t('restaurants.addToTrip')}
                          </button>
                        )}
                        <button className="resto-card-detail-btn" onClick={() => setDetailId(r.id)}>
                          {t('restaurants.detailsButton')}
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="resto-card-corner" onClick={(e) => e.stopPropagation()}>
                      {user && (
                        <button
                          className={`resto-fav-btn${isFavorite(r.type, r.id) ? ' resto-fav-btn--on' : ''}`}
                          onClick={() => toggleFavorite(r.type, r.id)}
                          aria-pressed={isFavorite(r.type, r.id)}
                          title={isFavorite(r.type, r.id) ? t('restaurants.favoriteRemove') : t('restaurants.favoriteAdd')}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill={isFavorite(r.type, r.id) ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
                            <path d="M17 3H7a2 2 0 0 0-2 2v16l7-4 7 4V5a2 2 0 0 0-2-2z" />
                          </svg>
                        </button>
                      )}
                      {/* Retouche réservée à la fiche pays, comme la suppression
                          juste en dessous et pour la même raison : en
                          planification, on consulte des adresses pour préparer
                          son voyage, on ne tient pas la fiche du restaurant.
                          Contribuer et planifier sont deux moments distincts —
                          les mêler ici avait été signalé le 2026-07-31. */}
                      {mode === 'destination' && user?.id === r.userId && (
                        <button
                          className="must-edit-btn"
                          onClick={() => setEditingId(r.id)}
                          title={t('restaurants.editButton')}
                        >
                          ✎
                        </button>
                      )}
                      {/* Suppression proposée UNIQUEMENT depuis la fiche pays.
                          En planification, on consulte des adresses pour son
                          voyage : y supprimer définitivement la contribution de
                          quelqu'un — la sienne comprise — n'a pas sa place, et
                          la confirmation en ligne décalait toute la carte. */}
                      {mode === 'destination' && user?.id === r.userId && (deletingId === r.id ? (
                        <span className="resto-card-confirm">
                          {t('restaurants.confirmDelete')}
                          <button className="review-confirm-no" onClick={() => setDeletingId(null)}>{t('placesList.noButton')}</button>
                          <button className="review-confirm-yes" onClick={() => handleDelete(r)}>{t('placesList.yesButton')}</button>
                        </span>
                      ) : (
                        <button className="must-delete-btn" onClick={() => setDeletingId(r.id)} title={t('placesList.deleteButton')}>✕</button>
                      ))}
                    </div>
                  </li>
                );
              })}
              {filtered.length === 0 && (
                <li className="resto-explorer-empty">{t('restaurants.noneMatchFilters')}</li>
              )}
            </ul>

            {/* Pagination locale : la liste est déjà entièrement chargée, seul
                l'AFFICHAGE est limité — inutile de repasser par le réseau. */}
            {filtered.length > shown.length && (
              <button
                className="resto-load-more"
                onClick={() => setVisibleCount((n) => n + PAGE_SIZE)}
              >
                {t('restaurants.seeMore', { count: Math.min(PAGE_SIZE, filtered.length - shown.length) })}
              </button>
            )}

            {loading && <div className="places-loading">{t('restaurants.loading')}</div>}
          </div>
        </div>
      )}

      {adding && addTarget && (
        <AddRestaurantModal
          destType={addTarget.destType}
          destinationId={addTarget.destinationId}
          staticDestId={addTarget.staticDestId}
          countryCode={countryCode}
          countryName={countryName}
          countryAlpha2={countryAlpha2}
          destName={destName}
          cityName={cityName || destName}
          onCancel={() => setAdding(false)}
          onAdded={() => { setAdding(false); reload(); }}
        />
      )}

      {editingRestaurant && (
        <EditRestaurantModal
          restaurant={editingRestaurant}
          onCancel={() => setEditingId(null)}
          onSaved={(updated) => {
            // Mise à jour locale plutôt que rechargement complet : la liste est
            // triée et filtrée, un rechargement la ferait sauter sous les yeux
            // pour deux champs qu'on connaît déjà.
            setRestaurants((prev) => prev.map((r) => (r.id === updated.id ? { ...r, ...updated } : r)));
            setEditingId(null);
          }}
        />
      )}

      {detailRestaurant && (
        <RestaurantDetail
          restaurant={detailRestaurant}
          countryCode={countryCode}
          countryName={countryName}
          canAddToTrip={!!onAddToTrip}
          onAddToTrip={onAddToTrip}
          alreadyAdded={!!tripActivityFor(detailRestaurant)}
          canRemoveFromTrip={!!(onRemoveFromTrip && tripActivityFor(detailRestaurant)?.id)}
          onRemoveFromTrip={() => {
            const activity = tripActivityFor(detailRestaurant);
            if (activity?.id) onRemoveFromTrip(activity.id);
          }}
          onClose={() => setDetailId(null)}
          onRatingChange={(ratingAvg, ratingCount) => {
            setRestaurants((prev) => prev.map((r) => (
              r.id === detailRestaurant.id ? { ...r, ratingAvg, ratingCount } : r
            )));
          }}
        />
      )}
    </div>
  );
}
