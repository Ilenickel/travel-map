import { useEffect, useRef, useState } from 'react';
import { ACTIVITY_CATEGORIES, formatDateShort } from '../../lib/planningUtils';

// Les popups Leaflet sont injectées en HTML brut : tout texte utilisateur doit
// être échappé — sur un voyage partagé, le nom d'un hébergement est saisi par
// n'importe quel membre et ne doit jamais pouvoir devenir du HTML exécutable.
function escapeHtml(s) {
  return String(s ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

export default function MapPanel({ activities, groups, cities, lodgings }) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef([]);
  const resizeObserverRef = useRef(null);
  // Sur mobile, la légende démarre repliée (widget déroulant) pour ne pas
  // envahir la carte s'il y a beaucoup de groupes ; sans effet sur ordinateur
  // où elle reste toujours dépliée (cf. CSS).
  const [legendOpen, setLegendOpen] = useState(false);

  useEffect(() => {
    let L, map;
    import('leaflet').then(module => {
      L = module.default;
      import('leaflet/dist/leaflet.css');

      if (!containerRef.current || mapRef.current) return;

      map = L.map(containerRef.current, { zoomControl: true, attributionControl: false });
      mapRef.current = map;

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap',
        maxZoom: 19,
      }).addTo(map);

      L.control.attribution({ position: 'bottomright', prefix: '© OSM' }).addTo(map);

      renderMarkers(L, map);

      // Leaflet fige la taille de son conteneur au moment de l'init. Or ce montage a
      // lieu pendant la transition CSS d'ouverture du panneau (.pp-content-panel
      // passe en largeur réduite sur 300ms) : la carte se retrouve calée sur une
      // largeur trop petite et ne se redimensionne jamais toute seule ensuite.
      const observer = new ResizeObserver(() => map.invalidateSize());
      observer.observe(containerRef.current);
      resizeObserverRef.current = observer;
    });

    return () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
        resizeObserverRef.current = null;
      }
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!mapRef.current) return;
    import('leaflet').then(module => {
      renderMarkers(module.default, mapRef.current);
    });
  }, [activities, groups, lodgings]);

  function renderMarkers(L, map) {
    markersRef.current.forEach(m => m.marker.remove());
    markersRef.current = [];

    const groupMap = {};
    (groups || []).forEach(g => { groupMap[g.id] = g; });

    const geoActs = (activities || []).filter(a => a.place_lat && a.place_lng);
    const geoLodgings = (lodgings || []).filter(l => l.place_lat && l.place_lng);
    if (!geoActs.length && !geoLodgings.length) return;

    const bounds = [];

    // Hébergements : marqueur carré doré distinct des lieux (ronds, colorés par
    // catégorie/zone) — un hôtel n'est pas une étape de visite, il doit se
    // repérer d'un coup d'œil.
    geoLodgings.forEach(l => {
      const divIcon = L.divIcon({
        className: '',
        html: `<div class="pp-map-marker pp-map-marker--lodging">🏨</div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -18],
      });
      const city = cities?.find(c => c.id === l.city_id);
      const datesLine = (l.check_in && l.check_out)
        ? `<div class="pp-map-popup-city">${formatDateShort(l.check_in)} → ${formatDateShort(l.check_out)}</div>`
        : '';
      const popupContent = `
        <div class="pp-map-popup">
          <div class="pp-map-popup-name">🏨 ${escapeHtml(l.name)}</div>
          ${city ? `<div class="pp-map-popup-city">${escapeHtml(city.name)}</div>` : ''}
          ${datesLine}
          ${l.address ? `<div class="pp-map-popup-addr">${escapeHtml(l.address)}</div>` : ''}
        </div>`;
      const marker = L.marker([l.place_lat, l.place_lng], { icon: divIcon })
        .addTo(map)
        .bindPopup(popupContent);
      markersRef.current.push({ marker, groupId: null, latlng: [l.place_lat, l.place_lng], isLodging: true });
      bounds.push([l.place_lat, l.place_lng]);
    });
    geoActs.forEach(act => {
      const group = act.group_id ? groupMap[act.group_id] : null;
      const cat = ACTIVITY_CATEGORIES[act.category] || ACTIVITY_CATEGORIES.other;
      const color = group ? group.color : cat.color;
      const icon = group ? '📍' : cat.icon;

      const divIcon = L.divIcon({
        className: '',
        html: `<div class="pp-map-marker" style="background:${color};border-color:${color};">${icon}</div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -18],
      });

      const city = cities?.find(c => c.id === act.city_id);
      const popupContent = `
        <div class="pp-map-popup">
          <div class="pp-map-popup-name">${escapeHtml(act.name)}</div>
          ${city ? `<div class="pp-map-popup-city">${escapeHtml(city.name)}</div>` : ''}
          ${group ? `<div class="pp-map-popup-group" style="color:${group.color}">● ${escapeHtml(group.name)}</div>` : ''}
          ${act.place_address ? `<div class="pp-map-popup-addr">${escapeHtml(act.place_address)}</div>` : ''}
        </div>`;

      const marker = L.marker([act.place_lat, act.place_lng], { icon: divIcon })
        .addTo(map)
        .bindPopup(popupContent);
      markersRef.current.push({ marker, groupId: act.group_id || null, latlng: [act.place_lat, act.place_lng] });
      bounds.push([act.place_lat, act.place_lng]);
    });

    if (bounds.length > 0) {
      map.fitBounds(bounds, { padding: [30, 30], maxZoom: 14 });
    }
  }

  // Recentre la carte sur les lieux d'une zone donnée (ou "sans groupe" si groupId === null)
  const focusOnGroup = (groupId) => {
    const map = mapRef.current;
    if (!map) return;
    const matches = markersRef.current.filter(m => m.groupId === groupId);
    if (!matches.length) return;
    if (matches.length === 1) {
      map.setView(matches[0].latlng, 15);
      matches[0].marker.openPopup();
    } else {
      map.fitBounds(matches.map(m => m.latlng), { padding: [40, 40], maxZoom: 15 });
    }
  };

  const hasGeoActs = (activities || []).some(a => a.place_lat && a.place_lng)
    || (lodgings || []).some(l => l.place_lat && l.place_lng);
  const activeGroups = (groups || []).filter(g =>
    (activities || []).some(a => a.group_id === g.id && a.place_lat && a.place_lng)
  );

  return (
    <div className="pp-map-panel-inner">
      <div ref={containerRef} className="pp-map-container" />

      {!hasGeoActs && (
        <div className="pp-map-empty">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" opacity=".3">
            <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5z"/>
          </svg>
          <p>Ajoutez des lieux via la recherche pour les voir sur la carte</p>
        </div>
      )}

      {/* Légende groupes — cliquer une zone recentre la carte dessus */}
      {hasGeoActs && activeGroups.length > 0 && (
        <div className={`pp-map-legend${legendOpen ? ' pp-map-legend--open' : ''}`}>
          <button className="pp-map-legend-title" onClick={() => setLegendOpen(o => !o)}>
            <span>Zones</span>
            <svg className="pp-map-legend-chevron" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 10l5 5 5-5z"/>
            </svg>
          </button>
          <div className="pp-map-legend-list">
          {activeGroups.map(g => {
            const cnt = (activities || []).filter(a => a.group_id === g.id && a.place_lat && a.place_lng).length;
            return (
              <button key={g.id} className="pp-map-legend-item" onClick={() => focusOnGroup(g.id)} title={`Recentrer la carte sur « ${g.name} »`}>
                <span className="pp-map-legend-dot" style={{ background: g.color }} />
                <span className="pp-map-legend-name">{g.name}</span>
                <span className="pp-map-legend-count">{cnt}</span>
              </button>
            );
          })}
          </div>
        </div>
      )}
    </div>
  );
}
