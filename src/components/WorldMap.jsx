import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import * as d3 from "d3";
import * as topojson from "topojson-client";
import { COUNTRIES, NUMERIC_TO_CODE } from "../data/index";
import { localizeField } from "../lib/localizeCountry";
import { twemojiUrl } from "./planning/CountryFlag";
import i18n from "../i18n";
import { useSettings } from "../context/SettingsContext";

const HOVER_COLORS = ["#e94560", "#ff9f43", "#a78bfa", "#22d3ee", "#4ade80"];
function randomHoverColor() {
  return HOVER_COLORS[Math.floor(Math.random() * HOVER_COLORS.length)];
}

function largestPolygonFeature(feature) {
  const { geometry } = feature;
  if (geometry.type !== "MultiPolygon") return feature;
  let maxArea = -Infinity, best = null;
  for (const coords of geometry.coordinates) {
    const f = { type: "Feature", geometry: { type: "Polygon", coordinates: coords } };
    const a = d3.geoArea(f);
    if (a > maxArea) { maxArea = a; best = coords; }
  }
  return best ? { ...feature, geometry: { type: "Polygon", coordinates: best } } : feature;
}

// Couleurs de la carte déclinées par thème (le fond d'océan, lui, est en CSS :
// .world-svg + [data-theme="light"] .world-svg). Lues au moment du rendu via
// mapColors() : le composant re-colore les tracés quand le thème change (voir
// l'effet dépendant de `theme` plus bas).
const MAP_THEME_COLORS = {
  dark: {
    noData: "#09131f", dimmed: "#07101c", base: "#1c3a55",
    noDataStroke: "#0b1828", baseStroke: "#0d1e30", borders: "#0d1e30",
    visitedFill: "#215878", visitedStroke: "#2896c0",
  },
  // Jour : monochromie bleue (même sémantique que le mode nuit — un pays
  // visité est un bleu plus saturé que la base, pas une couleur étrangère)
  // + beige papier pour les pays hors catalogue. Une seule famille froide
  // sur fond crème : aucun conflit chromatique.
  light: {
    noData: "#eae4d6", dimmed: "#f0ede5", base: "#b9d1e8",
    noDataStroke: "#dbd3c1", baseStroke: "#93b5d5", borders: "#8aa8c6",
    visitedFill: "#5e97cf", visitedStroke: "#3672ad",
  },
};

// Thème actif lu par mapColors(). Synchronisé depuis la valeur du contexte
// (voir l'effet de repeinture du composant) et NON depuis l'attribut
// data-theme de <html> : cet attribut est posé par l'effet de
// SettingsProvider, qui s'exécute APRÈS ceux de ses enfants (ordre React
// enfant → parent) — le lire ici donnait des couleurs en retard d'un
// basculement, d'où une carte "inversée" après un aller-retour jour/nuit.
let activeMapTheme = typeof document !== "undefined" && document.documentElement.dataset.theme === "light" ? "light" : "dark";

function mapColors() {
  return MAP_THEME_COLORS[activeMapTheme];
}

function getBaseFill(numericId, filterActive, highlightMap, visitedSet, hideVisited, isMobile) {
  const c = mapColors();
  const code = NUMERIC_TO_CODE[numericId];
  const hasData = code && COUNTRIES[code];
  if (!hasData) return filterActive ? c.dimmed : c.noData;
  const isVisited = visitedSet?.has(code);
  if (hideVisited && isVisited) return c.dimmed;
  if (!filterActive) return isVisited ? c.visitedFill : c.base;
  const color = highlightMap?.[code];
  if (!color) return c.dimmed;
  // Alpha plus soutenu en mode jour : à 16% (28), les couleurs de filtre se
  // fondent dans l'océan clair au lieu de ressortir comme sur fond nuit.
  if (activeMapTheme === "light") return color + (isMobile ? "77" : "59");
  return color + (isMobile ? "55" : "28");
}

function getBaseStroke(numericId, filterActive, highlightMap, visitedSet, hideVisited, isMobile) {
  const c = mapColors();
  const code = NUMERIC_TO_CODE[numericId];
  const hasData = code && COUNTRIES[code];
  if (!hasData) return c.noDataStroke;
  const isVisited = visitedSet?.has(code);
  if (hideVisited && isVisited) return c.noDataStroke;
  if (!filterActive) return isVisited ? c.visitedStroke : c.baseStroke;
  return highlightMap?.[code] ?? c.baseStroke;
}

function getBaseStrokeWidth(numericId, filterActive, highlightMap) {
  const code = NUMERIC_TO_CODE[numericId];
  if (!code || !COUNTRIES[code]) return 0.4;
  if (!filterActive) return 0.8;
  return highlightMap?.[code] ? 1.2 : 0.4;
}

function isInteractive(numericId) {
  const code = NUMERIC_TO_CODE[numericId];
  return !!(code && COUNTRIES[code]);
}

export default function WorldMap({ onCountryClick, highlightMap, filterActive, searchActive, hoveredCode, visitedSet, hideVisited }) {
  const { t } = useTranslation("app");
  // Thème actif : re-colore les tracés (pays, frontières) au basculement
  // jour/nuit — les couleurs sont lues via mapColors() au moment du rendu.
  const { theme } = useSettings();
  // Écran d'accueil de l'app : si le fetch de la topologie échoue (CDN injoignable,
  // hors ligne…), on l'affiche à la place d'une carte vide plutôt que de laisser
  // le composant ne rien montrer sans explication. retryKey force le useEffect
  // d'init à rejouer (voir plus bas, init() vide tout via selectAll("*").remove()
  // en tête, donc rejouable sans fuite).
  const [mapLoadError, setMapLoadError] = useState(false);
  const [retryKey, setRetryKey] = useState(0);
  const svgRef     = useRef(null);
  const tooltipRef = useRef(null);
  const zoomRef    = useRef(null);
  const mapGRef    = useRef(null);

  const highlightMapRef    = useRef(highlightMap);
  const filterActiveRef    = useRef(filterActive);
  const searchActiveRef    = useRef(searchActive);
  const visitedSetRef      = useRef(visitedSet);
  const hideVisitedRef     = useRef(hideVisited);
  // 1024 (pas 768) — même seuil que le reste de l'app depuis le 2026-07-23
  // (tablette incluse, voir useIsMobile(1024) dans CountryPanel/TripEditor) :
  // resté à 768 ici, la carte gardait son cadrage "PC" (zoom initial large,
  // non recentré) sur iPad Pro alors que tout le reste de l'app basculait
  // déjà en mobile.
  const isMobileRef        = useRef(window.innerWidth <= 1024);
  const onCountryClickRef  = useRef(onCountryClick);
  const pathsSelRef        = useRef(null);
  const borderSelRef       = useRef(null);
  const mapReadyRef        = useRef(false);
  const hoverGRef          = useRef(null);
  const labelGRef          = useRef(null);
  const pathFnRef          = useRef(null);
  const hoveredAlpha3Ref   = useRef(null);

  useEffect(() => { highlightMapRef.current = highlightMap; }, [highlightMap]);
  useEffect(() => { filterActiveRef.current = filterActive; }, [filterActive]);
  useEffect(() => { searchActiveRef.current = searchActive; }, [searchActive]);
  useEffect(() => { visitedSetRef.current = visitedSet; }, [visitedSet]);
  useEffect(() => { hideVisitedRef.current = hideVisited; }, [hideVisited]);
  useEffect(() => { onCountryClickRef.current = onCountryClick; }, [onCountryClick]);

  // Hover depuis la liste externe (ListView)
  useEffect(() => {
    if (!mapReadyRef.current) return;
    const hoverG = hoverGRef.current;
    const labelG = labelGRef.current;
    if (!hoverG || !labelG) return;

    // Effacer le hover précédent
    hoverG.selectAll("*").remove();
    const prev = hoveredAlpha3Ref.current;
    if (prev) {
      labelG.select(`.label-${prev}`).interrupt().transition().duration(150).attr("opacity", 0);
      labelG.select(`.dot-${prev}`).interrupt().transition().duration(150).attr("opacity", 0);
    }
    d3.select(tooltipRef.current).style("opacity", 0);

    if (!hoveredCode) { hoveredAlpha3Ref.current = null; return; }

    // Trouver la feature D3 correspondante
    const svg = d3.select(svgRef.current);
    const targetFeature = svg.selectAll(".country").data()
      .find((d) => NUMERIC_TO_CODE[+d.id] === hoveredCode);
    if (!targetFeature) return;

    const filterColor = highlightMapRef.current?.[hoveredCode];
    const hoverColor = filterColor ?? "#a78bfa";

    const geom = targetFeature.geometry;
    const polys = geom.type === "MultiPolygon"
      ? geom.coordinates.map(coords => ({ ...targetFeature, geometry: { type: "Polygon", coordinates: coords } }))
      : [targetFeature];
    for (const poly of polys) {
      hoverG.append("path")
        .attr("d", pathFnRef.current(poly))
        .attr("fill", hoverColor)
        .attr("stroke", hoverColor)
        .attr("stroke-width", 1.5)
        .attr("pointer-events", "none")
        .attr("opacity", 0)
        .transition().duration(200)
        .attr("opacity", 1);
    }

    hoveredAlpha3Ref.current = hoveredCode;
    labelG.select(`.label-${hoveredCode}`).interrupt().transition().duration(150).attr("opacity", 1);
    labelG.select(`.dot-${hoveredCode}`).interrupt().transition().duration(150).attr("opacity", 1);
  }, [hoveredCode]);

  useEffect(() => {
    // Synchronisation AVANT la repeinture : la valeur du contexte fait foi
    // (l'attribut data-theme de <html> n'est pas encore à jour à ce stade,
    // voir le commentaire de activeMapTheme).
    activeMapTheme = theme === "light" ? "light" : "dark";
    if (!mapReadyRef.current || !pathsSelRef.current) return;
    pathsSelRef.current
      .attr("fill",         (d) => getBaseFill(+d.id, filterActive, highlightMap, visitedSet, hideVisited, isMobileRef.current))
      .attr("stroke",       (d) => getBaseStroke(+d.id, filterActive, highlightMap, visitedSet, hideVisited, isMobileRef.current))
      .attr("stroke-width", (d) => getBaseStrokeWidth(+d.id, filterActive, highlightMap))
      .style("cursor",      (d) => isInteractive(+d.id) ? "pointer" : "default");
    if (borderSelRef.current) borderSelRef.current.attr("stroke", mapColors().borders);
  }, [highlightMap, filterActive, visitedSet, hideVisited, theme]);

  useEffect(() => {
    const init = () => {
    const svg    = d3.select(svgRef.current);
    const rect   = svgRef.current.getBoundingClientRect();
    const width  = rect.width  || svgRef.current.clientWidth  || window.innerWidth;
    const height = rect.height || svgRef.current.clientHeight || (window.innerHeight - 54);

    svg.selectAll("*").remove();
    svg.attr("viewBox", `0 0 ${width} ${height}`);

    const isMobile = width <= 1024; // même seuil que isMobileRef ci-dessus
    // Sur mobile : projection ajustée à la hauteur (carte plus large que l'écran)
    // Sur desktop : projection ajustée au conteneur complet
    const NE_ASPECT = 1.97; // rapport largeur/hauteur de NaturalEarth
    const projW = isMobile ? height * NE_ASPECT : width;
    const projH = isMobile ? height : height;

    const projection = d3
      .geoNaturalEarth1()
      .fitExtent([[4, 4], [projW - 4, projH - 4]], { type: "Sphere" });

    const path = d3.geoPath().projection(projection);
    pathFnRef.current = path;

    // ── All map content goes in a group so zoom transforms the whole map ──
    const mapG = svg.append("g");
    mapGRef.current = mapG;

    fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
      .then((r) => r.json())
      .then((world) => {
        setMapLoadError(false);
        const countries = topojson.feature(world, world.objects.countries);
        const borders   = topojson.mesh(world, world.objects.countries, (a, b) => a !== b);

        const fillG   = mapG.append("g");
        const borderG = mapG.append("g");
        const hoverG  = mapG.append("g");
        const labelG  = mapG.append("g");

        hoverGRef.current = hoverG;
        labelGRef.current = labelG;

        const clearHover = () => {
          hoverG.selectAll("*").remove();
          const prev = hoveredAlpha3Ref.current;
          if (prev) {
            labelG.select(`.label-${prev}`).interrupt().transition().duration(150).attr("opacity", 0);
            labelG.select(`.dot-${prev}`).interrupt().transition().duration(150).attr("opacity", 0);
          }
          hoveredAlpha3Ref.current = null;
          d3.select(tooltipRef.current).style("opacity", 0);
        };

        const paths = fillG
          .selectAll(".country")
          .data(countries.features)
          .join("path")
          .attr("class", "country")
          .attr("d", path)
          .attr("fill",         (d) => getBaseFill(+d.id, filterActiveRef.current, highlightMapRef.current, visitedSetRef.current, hideVisitedRef.current, isMobileRef.current))
          .attr("stroke",       (d) => getBaseStroke(+d.id, filterActiveRef.current, highlightMapRef.current, visitedSetRef.current, hideVisitedRef.current, isMobileRef.current))
          .attr("stroke-width", (d) => getBaseStrokeWidth(+d.id, filterActiveRef.current, highlightMapRef.current))
          .style("cursor",      (d) => isInteractive(+d.id) ? "pointer" : "default")
          .on("mouseenter", function (event, d) {
            if (!isInteractive(+d.id)) return;

            const alpha3      = NUMERIC_TO_CODE[+d.id];
            const filterColor = highlightMapRef.current?.[alpha3];
            const hoverColor  = filterColor ?? randomHoverColor();

            const mainFeature = largestPolygonFeature(d);
            const [cx, cy]    = pathFnRef.current.centroid(mainFeature);

            const prev = hoveredAlpha3Ref.current;
            if (prev && prev !== alpha3) {
              hoverG.selectAll("*").remove();
              labelG.select(`.label-${prev}`).interrupt().attr("opacity", 0);
              labelG.select(`.dot-${prev}`).interrupt().attr("opacity", 0);
            }

            hoverG.selectAll("*").remove();
            const geom = d.geometry;
            const polys = geom.type === "MultiPolygon"
              ? geom.coordinates.map(coords => ({ ...d, geometry: { type: "Polygon", coordinates: coords } }))
              : [d];
            for (const poly of polys) {
              const [pcx, pcy] = pathFnRef.current.centroid(poly);
              const svgBounds = pathFnRef.current.bounds(poly);
              const polyW = svgBounds[1][0] - svgBounds[0][0];
              const polyH = svgBounds[1][1] - svgBounds[0][1];
              const mapW = svgRef.current.clientWidth;
              const mapH = svgRef.current.clientHeight;
              const validCentroid = !isNaN(pcx) && !isNaN(pcy)
                && polyW < mapW * 0.4 && polyH < mapH * 0.8;
              const ptf = validCentroid
                ? `translate(${pcx},${pcy}) scale(1.06) translate(${-pcx},${-pcy})`
                : null;
              hoverG.append("path")
                .attr("d", pathFnRef.current(poly))
                .attr("fill", hoverColor)
                .attr("stroke", hoverColor)
                .attr("stroke-width", 1.5)
                .attr("pointer-events", "none")
                .attr("opacity", 0)
                .attr("transform", ptf || null)
                .transition().duration(200)
                .attr("opacity", 1);
            }

            hoveredAlpha3Ref.current = alpha3;

            labelG.select(`.label-${alpha3}`).interrupt().transition().duration(150).attr("opacity", 1);
            labelG.select(`.dot-${alpha3}`).interrupt().transition().duration(150).attr("opacity", 1);

            const data = COUNTRIES[alpha3];
            // Drapeau servi en image Twemoji : Windows ne rend pas les emojis
            // drapeaux (affiche "CN" au lieu de 🇨🇳) — repli sur l'emoji brut
            // si l'image ne charge pas (même approche que CountryFlag).
            d3.select(tooltipRef.current)
              .style("opacity", 1)
              .html(
                `<img class="tooltip-flag-img" src="${twemojiUrl(data.emoji)}" alt="" onerror="this.outerHTML='<span class=&quot;tooltip-flag&quot;>${data.emoji}</span>'" />` +
                `<span>${localizeField(data.name, i18n.language)}</span>` +
                `<span class="tooltip-hint">${i18n.t("worldMap.clickToExplore", { ns: "app" })}</span>`
              );
          })
          .on("mousemove", function (event) {
            const [mx, my] = d3.pointer(event, svgRef.current);
            const el   = tooltipRef.current;
            const svgW = svgRef.current.clientWidth;
            let x = mx + 14;
            let y = my - el.offsetHeight / 2;
            if (x + el.offsetWidth > svgW) x = mx - el.offsetWidth - 14;
            if (y < 0) y = 0;
            d3.select(el).style("left", x + "px").style("top", y + "px");
          })
          .on("mouseleave", function (event, d) {
            if (NUMERIC_TO_CODE[+d.id] !== hoveredAlpha3Ref.current) return;
            clearHover();
          })
          .on("click", function (event, d) {
            if (!isInteractive(+d.id)) return;
            const alpha3 = NUMERIC_TO_CODE[+d.id];
            onCountryClickRef.current(alpha3);
          });

        borderSelRef.current = borderG.append("path")
          .datum(borders)
          .attr("d", path)
          .attr("fill", "none")
          .attr("stroke", mapColors().borders)
          .attr("stroke-width", 0.5)
          .attr("opacity", 0.8);

        for (const [code, data] of Object.entries(COUNTRIES)) {
          const feature = countries.features.find((f) => NUMERIC_TO_CODE[+f.id] === code);
          if (!feature) continue;
          const [cx, cy] = path.centroid(largestPolygonFeature(feature));
          if (isNaN(cx) || isNaN(cy)) continue;

          labelG.append("text")
            .attr("class", `country-label label-${code}`)
            .attr("x", cx).attr("y", cy - 12)
            .attr("text-anchor", "middle")
            .attr("fill", "#ffffff")
            .attr("font-size", "11px")
            .attr("font-weight", "700")
            .attr("letter-spacing", "0.08em")
            .attr("pointer-events", "none")
            .attr("opacity", 0)
            .text(localizeField(data.name, i18n.language).toUpperCase());

          labelG.append("circle")
            .attr("class", `country-dot dot-${code}`)
            .attr("cx", cx).attr("cy", cy).attr("r", 3)
            .attr("fill", "#ffffff")
            .attr("pointer-events", "none")
            .attr("opacity", 0);
        }

        pathsSelRef.current = paths;
        mapReadyRef.current = true;
      })
      .catch((err) => {
        console.error("[WorldMap] Échec du chargement du fond de carte :", err);
        setMapLoadError(true);
      });

    // ── Zoom & pan (desktop + touch pinch) ──
    const zoom = d3.zoom()
      .scaleExtent([1, 8])
      .translateExtent([[0, 0], [projW, projH]])
      .on("zoom", (event) => {
        mapG.attr("transform", event.transform);
        d3.select(tooltipRef.current).style("opacity", 0);
      });

    zoomRef.current = zoom;
    svg.call(zoom);
    svg.on("dblclick.zoom", null);

    // Sur mobile : centrer la vue (milieu du monde = milieu de la projection)
    if (isMobile) {
      const startX = (projW - width) / 2;
      svg.call(zoom.transform, d3.zoomIdentity.translate(-startX, 0));
    }

    // ── Touch tap → open country ──
    let touchStartX = 0, touchStartY = 0;
    svg.on("touchstart", (event) => {
      touchStartX = event.touches[0].clientX;
      touchStartY = event.touches[0].clientY;
    }, { passive: true });

    svg.on("touchend", (event) => {
      const dx = Math.abs(event.changedTouches[0].clientX - touchStartX);
      const dy = Math.abs(event.changedTouches[0].clientY - touchStartY);
      if (dx > 8 || dy > 8) return; // was a pan, not a tap
      const touch = event.changedTouches[0];
      const el = document.elementFromPoint(touch.clientX, touch.clientY);
      if (!el) return;
      const pathEl = el.closest(".country");
      if (!pathEl) return;
      const datum = d3.select(pathEl).datum();
      if (!datum) return;
      const numId = +datum.id;
      if (!isInteractive(numId)) return;
      // preventDefault (nécessite un listener non-passif, voir plus bas) :
      // sans ça, iOS Safari enchaîne quand même sa propre cascade d'événements
      // souris synthétiques après ce touchend (mouseenter → mousemove →
      // mousedown → mouseup → click) puisque rien ne l'en a empêché — le
      // 1er tap n'affichait alors que l'effet ".on('mouseenter', ...)" plus
      // haut (surbrillance + tooltip), et il fallait un 2e tap pour que
      // quelque chose ouvre vraiment la fiche pays. Chrome/Android ne
      // reproduisaient pas ce bug (signalé le 2026-07-24, "sur la webapp de
      // l'iPhone... il faut cliquer deux fois").
      event.preventDefault();
      const alpha3 = NUMERIC_TO_CODE[numId];
      if (alpha3) onCountryClickRef.current(alpha3);
    }, { passive: false });

    return () => {};
    }; // end init

    requestAnimationFrame(init);
  }, [retryKey]);

  const handleZoomIn = () => {
    const svg = d3.select(svgRef.current);
    svg.transition().duration(300).call(zoomRef.current.scaleBy, 1.6);
  };

  const handleZoomOut = () => {
    const svg = d3.select(svgRef.current);
    svg.transition().duration(300).call(zoomRef.current.scaleBy, 0.625);
  };

  const handleZoomReset = () => {
    const svg = d3.select(svgRef.current);
    svg.transition().duration(400).call(zoomRef.current.transform, d3.zoomIdentity);
  };

  return (
    <div className="map-container">
      <svg ref={svgRef} className="world-svg" preserveAspectRatio="xMidYMid meet" />
      <div ref={tooltipRef} className="map-tooltip" />
      {mapLoadError && (
        <div className="map-load-error">
          <p>{t("worldMap.loadError")}</p>
          <button type="button" onClick={() => setRetryKey((k) => k + 1)}>
            {t("worldMap.retryButton")}
          </button>
        </div>
      )}
      <div className="map-zoom-controls">
        <button className="map-zoom-btn" onClick={handleZoomIn} title={t("worldMap.zoomIn")}>+</button>
        <button className="map-zoom-btn" onClick={handleZoomOut} title={t("worldMap.zoomOut")}>−</button>
        <button className="map-zoom-btn map-zoom-reset" onClick={handleZoomReset} title={t("worldMap.resetView")}>⌂</button>
      </div>
    </div>
  );
}
