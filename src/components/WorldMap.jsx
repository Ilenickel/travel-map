import { useEffect, useRef } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";
import { COUNTRIES, NUMERIC_TO_CODE } from "../data/index";

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

function getBaseFill(numericId, filterActive, highlightMap, isMobile) {
  const code = NUMERIC_TO_CODE[numericId];
  const hasData = code && COUNTRIES[code];
  if (!hasData) return filterActive ? "#07101c" : "#09131f";
  if (!filterActive) return "#1c3a55";
  const color = highlightMap?.[code];
  if (!color) return "#07101c";
  return color + (isMobile ? "55" : "28"); // plus opaque sur mobile
}

function getBaseStroke(numericId, filterActive, highlightMap, isMobile) {
  const code = NUMERIC_TO_CODE[numericId];
  const hasData = code && COUNTRIES[code];
  if (!hasData) return "#0b1828";
  if (!filterActive) return "#0d1e30";
  // Bordures colorées sur desktop ET mobile quand filtre actif
  return highlightMap?.[code] ?? "#0d1e30";
}

function getBaseStrokeWidth(numericId, filterActive, highlightMap) {
  const code = NUMERIC_TO_CODE[numericId];
  if (!code || !COUNTRIES[code]) return 0.4;
  if (!filterActive) return 0.8;
  return highlightMap?.[code] ? 1.2 : 0.4;
}

function isInteractive(numericId, filterActive, highlightMap, searchActive) {
  const code = NUMERIC_TO_CODE[numericId];
  if (!code || !COUNTRIES[code]) return false;
  if (searchActive && !highlightMap?.[code]) return false; // recherche : seuls les résultats sont cliquables
  return true; // filtre : tous les pays avec données restent cliquables
}

export default function WorldMap({ onCountryClick, highlightMap, filterActive, searchActive }) {
  const svgRef     = useRef(null);
  const tooltipRef = useRef(null);
  const zoomRef    = useRef(null);  // d3 zoom behaviour
  const mapGRef    = useRef(null);  // group that gets zoomed/panned

  const highlightMapRef    = useRef(highlightMap);
  const filterActiveRef    = useRef(filterActive);
  const searchActiveRef    = useRef(searchActive);
  const isMobileRef        = useRef(window.innerWidth <= 768);
  const onCountryClickRef  = useRef(onCountryClick);
  const pathsSelRef        = useRef(null);
  const mapReadyRef        = useRef(false);
  const hoverGRef          = useRef(null);
  const labelGRef          = useRef(null);
  const pathFnRef          = useRef(null);
  const hoveredAlpha3Ref   = useRef(null);

  useEffect(() => { highlightMapRef.current = highlightMap; }, [highlightMap]);
  useEffect(() => { filterActiveRef.current = filterActive; }, [filterActive]);
  useEffect(() => { searchActiveRef.current = searchActive; }, [searchActive]);
  useEffect(() => { onCountryClickRef.current = onCountryClick; }, [onCountryClick]);

  useEffect(() => {
    if (!mapReadyRef.current || !pathsSelRef.current) return;
    pathsSelRef.current
      .attr("fill",         (d) => getBaseFill(+d.id, filterActive, highlightMap, isMobileRef.current))
      .attr("stroke",       (d) => getBaseStroke(+d.id, filterActive, highlightMap, isMobileRef.current))
      .attr("stroke-width", (d) => getBaseStrokeWidth(+d.id, filterActive, highlightMap))
      .style("cursor",      (d) => isInteractive(+d.id, filterActive, highlightMap) ? "pointer" : "default");
  }, [highlightMap, filterActive]);

  useEffect(() => {
    const init = () => {
    const svg    = d3.select(svgRef.current);
    const rect   = svgRef.current.getBoundingClientRect();
    const width  = rect.width  || svgRef.current.clientWidth  || window.innerWidth;
    const height = rect.height || svgRef.current.clientHeight || (window.innerHeight - 54);

    svg.selectAll("*").remove();
    svg.attr("viewBox", `0 0 ${width} ${height}`);

    const isMobile = width <= 768;
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
          .attr("fill",         (d) => getBaseFill(+d.id, filterActiveRef.current, highlightMapRef.current, isMobileRef.current))
          .attr("stroke",       (d) => getBaseStroke(+d.id, filterActiveRef.current, highlightMapRef.current, isMobileRef.current))
          .attr("stroke-width", (d) => getBaseStrokeWidth(+d.id, filterActiveRef.current, highlightMapRef.current))
          .style("cursor",      (d) => isInteractive(+d.id, filterActiveRef.current, highlightMapRef.current, searchActiveRef.current) ? "pointer" : "default")
          .on("mouseenter", function (event, d) {
            if (!isInteractive(+d.id, filterActiveRef.current, highlightMapRef.current, searchActiveRef.current)) return;

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
            d3.select(tooltipRef.current)
              .style("opacity", 1)
              .html(
                `<span class="tooltip-flag">${data.emoji}</span>` +
                `<span>${data.name}</span>` +
                `<span class="tooltip-hint">Cliquer pour explorer</span>`
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
            if (!isInteractive(+d.id, filterActiveRef.current, highlightMapRef.current, searchActiveRef.current)) return;
            const alpha3 = NUMERIC_TO_CODE[+d.id];
            onCountryClickRef.current(alpha3);
          });

        borderG.append("path")
          .datum(borders)
          .attr("d", path)
          .attr("fill", "none")
          .attr("stroke", "#0d1e30")
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
            .text(data.name.toUpperCase());

          labelG.append("circle")
            .attr("class", `country-dot dot-${code}`)
            .attr("cx", cx).attr("cy", cy).attr("r", 3)
            .attr("fill", "#ffffff")
            .attr("pointer-events", "none")
            .attr("opacity", 0);
        }

        pathsSelRef.current = paths;
        mapReadyRef.current = true;
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
      if (!isInteractive(numId, filterActiveRef.current, highlightMapRef.current, searchActiveRef.current)) return;
      const alpha3 = NUMERIC_TO_CODE[numId];
      if (alpha3) onCountryClickRef.current(alpha3);
    }, { passive: true });

    const onResize = () => {
      const r = svgRef.current?.getBoundingClientRect();
      if (r?.width && r?.height) svg.attr("viewBox", `0 0 ${r.width} ${r.height}`);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    }; // end init

    requestAnimationFrame(init);
  }, []);

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
      <div className="map-zoom-controls">
        <button className="map-zoom-btn" onClick={handleZoomIn} title="Zoom +">+</button>
        <button className="map-zoom-btn" onClick={handleZoomOut} title="Zoom −">−</button>
        <button className="map-zoom-btn map-zoom-reset" onClick={handleZoomReset} title="Vue initiale">⌂</button>
      </div>
    </div>
  );
}
