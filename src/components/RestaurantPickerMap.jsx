import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Petite carte de désambiguïsation, utilisée par le formulaire de contribution
// (AddRestaurantModal).
//
// Raison d'être : contrairement à un lieu de visite, un restaurant n'est pas
// identifiable par son seul nom. Une franchise peut avoir trois adresses dans la
// même ville, et deux lignes de résultats qui ne diffèrent que par « 12 rue X »
// et « 45 avenue Y » ne permettent pas de choisir en confiance. Voir les points
// sur une carte, numérotés comme les lignes de la liste, règle la question
// immédiatement.
//
// Les marqueurs portent leur numéro de ligne (pas une icône générique) : c'est
// ce qui fait le lien entre la carte et la liste sans avoir à survoler.

// Icône d'un repère. Extraite pour que la mise en avant du repère choisi
// puisse la refabriquer seule (setIcon), sans reconstruire toute la couche.
function markerIcon(L, label, isSelected) {
  return L.divIcon({
    className: '',
    html: `<div class="resto-pick-marker${isSelected ? ' resto-pick-marker--selected' : ''}">${label}</div>`,
    iconSize: isSelected ? [34, 34] : [26, 26],
    iconAnchor: isSelected ? [17, 17] : [13, 13],
  });
}

export default function RestaurantPickerMap({
  points = [],
  selectedId = null,
  onSelect = null,
  // Choisir l'établissement DEPUIS son repère, sans redescendre le chercher
  // dans la liste : au-delà de quelques résultats, retrouver la ligne n° 12
  // demandait autant d'efforts que la carte en épargnait.
  onPick = null,
  numbered = true,
  className = '',
}) {
  const { t } = useTranslation('app');
  const elRef = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef({});
  // Callbacks lues via des réfs, jamais mises en dépendance de l'effet qui pose
  // les repères. L'appelant les écrit en fonctions fléchées : leur identité
  // change à CHAQUE rendu, donc l'effet se relançait à chaque rendu et
  // reconstruisait tous les repères — ce qui refermait aussitôt la bulle qu'un
  // premier clic venait d'ouvrir. D'où l'impression qu'il fallait cliquer deux
  // fois.
  const onSelectRef = useRef(onSelect);
  onSelectRef.current = onSelect;
  const onPickRef = useRef(onPick);
  onPickRef.current = onPick;
  // Présence (et non identité) de la callback de choix : c'est la seule chose
  // dont la construction des repères a besoin de savoir, et c'est un booléen —
  // donc stable d'un rendu à l'autre.
  const pickable = !!onPick;
  // Lue à la construction des repères pour poser la bonne icône d'emblée, mais
  // hors dépendances : c'est l'effet de mise en avant ci-dessous qui suit ses
  // changements ensuite.
  const selectedIdRef = useRef(selectedId);
  selectedIdRef.current = selectedId;
  // Leaflet est importé dynamiquement : sans ce drapeau, l'effet qui pose les
  // marqueurs s'exécuterait avant l'existence de la carte et ne serait jamais
  // relancé (même correctif que RestaurantExplorer).
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    import('leaflet').then((module) => {
      const L = module.default;
      import('leaflet/dist/leaflet.css');
      if (cancelled || !elRef.current || mapRef.current) return;

      const map = L.map(elRef.current, { zoomControl: false, attributionControl: false });
      mapRef.current = map;
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(map);
      L.control.attribution({ position: 'bottomright', prefix: '© OSM' }).addTo(map);
      // Le formulaire s'ouvre par une transition (repli de section, changement
      // d'onglet) : Leaflet figerait sa taille sur un conteneur encore à zéro.
      const observer = new ResizeObserver(() => map.invalidateSize());
      observer.observe(elRef.current);
      map._ppObserver = observer;
      // Leaflet fige les dimensions de son conteneur à la création. Dans une
      // modale qui s'ouvre avec une transition, ce conteneur peut encore
      // mesurer zéro : la carte reste alors vide, et l'observateur de taille ne
      // la réveille pas toujours (il ne se déclenche pas si la taille finale
      // était déjà appliquée au moment du montage).
      // Plusieurs relances espacées plutôt qu'une seule : on couvre aussi bien
      // une transition courte qu'un rendu tardif, sans dépendre d'un délai
      // deviné juste.
      map._ppKicks = [60, 200, 500, 1000].map((delay) =>
        setTimeout(() => { try { map.invalidateSize(); } catch { /* carte démontée */ } }, delay)
      );
      setReady(true);
    });

    return () => {
      cancelled = true;
      setReady(false);
      if (mapRef.current) {
        clearTimeout(mapRef.current._ppViewKick);
        (mapRef.current._ppKicks || []).forEach(clearTimeout);
        mapRef.current._ppObserver?.disconnect();
        mapRef.current.remove();
        mapRef.current = null;
        markersRef.current = {};
      }
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !ready) return undefined;
    let cancelled = false;

    import('leaflet').then((module) => {
      const L = module.default;
      if (cancelled || !mapRef.current) return;

      Object.values(markersRef.current).forEach((m) => m.remove());
      markersRef.current = {};

      const valid = points.filter((p) => p.lat != null && p.lng != null);
      if (!valid.length) return;

      valid.forEach((p, idx) => {
        const isSelected = p.id === selectedIdRef.current;
        const label = numbered ? String(idx + 1) : '📍';
        const marker = L.marker([p.lat, p.lng], {
          icon: markerIcon(L, label, isSelected),
          zIndexOffset: isSelected ? 1000 : 0,
        }).addTo(map);
        marker._ppLabel = label;
        // Nœud DOM et non une chaîne : Leaflet insère une infobulle texte en
        // HTML, et ces noms viennent de Geoapify — donnée externe qu'on ne
        // contrôle pas. Même précaution que la bulle ci-dessous.
        const tip = document.createElement('span');
        tip.textContent = p.name;
        // `direction: 'auto'` : Leaflet ne recadre pas les infobulles, et un nom
        // d'établissement un peu long posé au-dessus d'un repère proche du bord
        // se faisait couper par la carte. En auto, elle s'ouvre du côté du
        // centre (même correctif que l'explorateur).
        marker.bindTooltip(tip, { direction: 'auto', offset: [0, 0], className: 'resto-map-tooltip' });
        if (pickable) {
          const box = document.createElement('div');
          box.className = 'resto-pick-popup';

          const name = document.createElement('span');
          name.className = 'resto-pick-popup-name';
          // `textContent` et non `innerHTML` : ces libellés viennent d'une API
          // externe, ils ne doivent jamais être interprétés comme du balisage.
          name.textContent = p.name;
          box.appendChild(name);

          if (p.address) {
            const addr = document.createElement('span');
            addr.className = 'resto-pick-popup-addr';
            addr.textContent = p.address;
            box.appendChild(addr);
          }

          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'resto-pick-popup-btn';
          btn.textContent = p.alreadyAdded ? t('restaurants.alreadyInList') : t('restaurants.pickButton');
          btn.disabled = !!p.alreadyAdded;
          btn.addEventListener('click', () => { map.closePopup(); onPickRef.current?.(p.id); });
          box.appendChild(btn);

          // `autoPanPadding` généreux en haut : la bulle se déploie AU-DESSUS du
          // repère, c'est ce bord-là qui sort du cadre sur une carte courte.
          marker.bindPopup(box, {
            closeButton: false,
            offset: [0, -12],
            autoPanPadding: [16, 20],
          });
        }
        marker.on('click', () => {
          onSelectRef.current?.(p.id);
          if (pickable) marker.openPopup();
        });
        markersRef.current[p.id] = marker;
      });

      // Recadrage à CHAQUE changement de points, contrairement à la carte de
      // l'explorateur : ici la liste de résultats change à chaque frappe, garder
      // le cadrage précédent laisserait souvent les nouveaux points hors champ.
      const applyView = () => {
        if (!mapRef.current) return;
        map.invalidateSize();
        if (valid.length === 1) {
          map.setView([valid[0].lat, valid[0].lng], 16);
        } else {
          map.fitBounds(valid.map((p) => [p.lat, p.lng]), { padding: [28, 28], maxZoom: 16 });
        }
      };
      applyView();
      // Rejoué une fois la mise en page stabilisée : calculé sur un conteneur
      // encore à zéro, le cadrage retient un zoom absurde et la carte paraît
      // vide même après coup.
      map._ppViewKick = setTimeout(applyView, 250);
    });

    return () => { cancelled = true; };
    // `selectedId`, `onSelect` et `onPick` volontairement absents : voir les
    // réfs plus haut. Reconstruire la couche à chaque rendu refermait la bulle
    // aussitôt ouverte et rejouait le recadrage sans raison.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [points, ready, numbered, pickable, t]);

  // Mise en avant du repère choisi : seules les icônes concernées changent.
  useEffect(() => {
    if (!ready) return undefined;
    let cancelled = false;
    import('leaflet').then((module) => {
      const L = module.default;
      if (cancelled) return;
      Object.entries(markersRef.current).forEach(([id, marker]) => {
        const isSelected = id === String(selectedId);
        marker.setIcon(markerIcon(L, marker._ppLabel, isSelected));
        marker.setZIndexOffset(isSelected ? 1000 : 0);
      });
    });
    return () => { cancelled = true; };
  }, [selectedId, points, ready]);

  // Le point sélectionné doit rester visible même si l'utilisateur a déplacé la
  // carte entre-temps.
  //
  // Ce recentrage s'exécute APRÈS l'ouverture de la bulle (clic sur un repère →
  // état parent → nouveau rendu → cet effet) et écrasait donc le recadrage
  // automatique que Leaflet venait de faire pour la rendre entièrement visible :
  // le repère revenait pile au centre, et la bulle — qui se déploie au-dessus de
  // lui sur une bonne centaine de pixels — se retrouvait tronquée en haut du
  // cadre (constaté sur ordinateur, où la carte est courte). On décale donc le
  // centre vers le haut quand une bulle est possible, pour que le repère se pose
  // dans la moitié basse et laisse la place à sa bulle. Décalage plafonné au
  // quart de la hauteur : sur une carte très courte, pousser plus enverrait le
  // repère hors du cadre par le bas.
  useEffect(() => {
    const map = mapRef.current;
    if (!selectedId || !map) return;
    const p = points.find((x) => x.id === selectedId);
    if (p?.lat == null || p?.lng == null) return;
    // Pas encore de vue posée (`applyView` n'a pas tourné) : `project()` n'a
    // aucun zoom de référence et lèverait une erreur.
    const zoom = map.getZoom();
    if (zoom == null) return;
    if (!pickable) {
      map.panTo([p.lat, p.lng], { animate: true });
      return;
    }
    const target = map.project([p.lat, p.lng], zoom);
    target.y -= Math.min(70, map.getSize().y / 4);
    map.panTo(map.unproject(target, zoom), { animate: true });
  }, [selectedId, points, pickable]);

  return <div ref={elRef} className={`resto-pick-map ${className}`.trim()} />;
}
