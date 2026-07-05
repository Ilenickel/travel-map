import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { COUNTRIES } from "../data/index";
import { localizeCountry } from "../lib/localizeCountry";
import WikiImage from "./WikiImage";
import { useWikipediaImages } from "../hooks/useWikipediaImages";
import { weatherRating } from "../utils/weather";
import { useAuth } from "../context/AuthContext";
import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";
import { HalfStars } from "./ReviewItem";
import { supabase } from "../lib/supabase";
import PublicProfileModal from "./PublicProfileModal";
import DestinationForm from "./DestinationForm";
import PlacesList from "./PlacesList";
import { callAdminAction } from "../lib/admin";
import ReportModal from "./ReportModal";
import { monthAbbrev } from "../lib/monthAbbrev";

const RATING_EMOJI = { good: "😊", ok: "😐", bad: "😞" };

const MAX_TEMP = 35;
const MAX_RAIN = 250;

export default function CountryPanel({ countryCode, onClose, isFavorite, onToggleFavorite, isVisited, onToggleVisited, onCompare, initialTab, initialExtra, onNavigateCountry, alertIds = new Map(), onAdminAction }) {
  const { t, i18n } = useTranslation("app");
  const data = useMemo(() => localizeCountry(COUNTRIES[countryCode], i18n.language), [countryCode, i18n.language]);
  const { user, isAdmin, setAuthModalOpen } = useAuth();
  const [activeTab, setActiveTab] = useState(initialTab || "overview");
  const [reviewRefreshKey, setReviewRefreshKey] = useState(0);
  const [avgRating, setAvgRating] = useState(null);
  const [reviewCount, setReviewCount] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [editReview, setEditReview] = useState(null);
  const [userReview, setUserReview] = useState(null);
  const [sortBy, setSortBy] = useState('date');
  const [publicProfileId, setPublicProfileId] = useState(null);
  const [visitedTabs, setVisitedTabs] = useState(() => new Set(["overview"]));
  const [selectedDest, setSelectedDest] = useState(null);
  const [activeCity, setActiveCity] = useState(0);
  const [activeBudget, setActiveBudget] = useState(0);
  const [costSubTab, setCostSubTab] = useState("summary");
  const panelBodyRef = useRef(null);

  // Destination reviews state
  const [destRefreshKey, setDestRefreshKey] = useState(0);
  const [destAvgRating, setDestAvgRating] = useState(null);
  const [destReviewCount, setDestReviewCount] = useState(0);
  const [destUserReview, setDestUserReview] = useState(null);
  const [destShowForm, setDestShowForm] = useState(false);
  const [destEditReview, setDestEditReview] = useState(null);
  const [destSortBy, setDestSortBy] = useState('date');
  const [destStats, setDestStats] = useState({});
  const destReviewsRef = useRef(null);

  // Community destinations state
  const [destSearch, setDestSearch] = useState('');
  const [userDestinations, setUserDestinations] = useState([]);
  const [showDestForm, setShowDestForm] = useState(false);
  const [editDest, setEditDest] = useState(null);
  const [deletingDestId, setDeletingDestId] = useState(null);
  const [deleteDestError, setDeleteDestError] = useState(false);
  const [reportedDestIds, setReportedDestIds] = useState(new Set());
  const [reportModalDestId, setReportModalDestId] = useState(null); // id de la dest dont le modal est ouvert
  const [adminActingDestId, setAdminActingDestId] = useState(null);

  const handleTabChange = (id) => {
    setActiveTab(id);
    setVisitedTabs((prev) => { const s = new Set(prev); s.add(id); return s; });
    setSelectedDest(null);
    setDestSearch('');
  };

  useEffect(() => {
    const tab = initialTab || "overview";
    setActiveTab(tab);
    setVisitedTabs(new Set([tab]));
    setSelectedDest(null);
    setActiveCity(0);
    setActiveBudget(0);
    setShowForm(false);
    setEditReview(null);
    setSortBy('date');
    setDestStats({});
    setShowDestForm(false);
    setEditDest(null);
    setDeletingDestId(null);
    setDestSearch('');
  }, [countryCode, initialTab]);

  // Load community destinations
  useEffect(() => {
    async function loadUserDests() {
      const { data: rows } = await supabase
        .from('user_destinations')
        .select('*, destination_places(*)')
        .eq('country_code', countryCode)
        .order('created_at', { ascending: false });
      setUserDestinations((rows || []).map(d => ({ ...d, isUserDest: true })));
    }
    loadUserDests();
  }, [countryCode, destRefreshKey]);

  // Auto-select destination + scroll to review from external navigation (profile/notif)
  useEffect(() => {
    if (!initialExtra?.destId) return;
    // Destinations statiques
    if (data?.destinations) {
      const dest = data.destinations.find((d) => String(d.id) === initialExtra.destId);
      if (dest) { setSelectedDest(dest); return; }
    }
    // Destinations communautaires (UUID)
    if (userDestinations.length) {
      const dest = userDestinations.find((d) => d.id === initialExtra.destId);
      if (dest) setSelectedDest(dest);
    }
  }, [initialExtra, data, userDestinations]);

  // Auto-select community destination from profile navigation
  useEffect(() => {
    if (!initialExtra?.commDestId || !userDestinations.length) return;
    const dest = userDestinations.find(d => d.id === initialExtra.commDestId);
    if (dest) setSelectedDest(dest);
  }, [initialExtra, userDestinations]);

  useEffect(() => {
    async function loadReviewStats() {
      const { data: rows } = await supabase.from('reviews').select('id, rating, user_id').eq('country_code', countryCode);
      if (!rows || rows.length === 0) { setAvgRating(null); setReviewCount(0); setUserReview(null); return; }
      const avg = rows.reduce((s, r) => s + r.rating, 0) / rows.length;
      setAvgRating(Math.round(avg * 10) / 10);
      setReviewCount(rows.length);
      if (user) {
        const mine = rows.find((r) => r.user_id === user.id) ?? null;
        setUserReview(mine);
      }
    }
    loadReviewStats();
  }, [countryCode, user, reviewRefreshKey]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key !== "Escape") return;
      if (publicProfileId) { setPublicProfileId(null); return; }
      onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, publicProfileId]);

  useEffect(() => {
    panelBodyRef.current?.scrollTo({ top: 0 });
    setDeletingDestId(null);
  }, [activeTab, selectedDest]);

  // Reset dest review state when navigating between destinations
  useEffect(() => {
    setDestShowForm(false);
    setDestEditReview(null);
    setDestSortBy('date');
    setDestUserReview(null);
    setDestAvgRating(null);
    setDestReviewCount(0);
    setDestRefreshKey(0);
  }, [selectedDest]);

  // Load destination review stats for detail view
  useEffect(() => {
    if (!selectedDest) return;
    async function loadDestReviewStats() {
      const { data: rows } = await supabase.from('destination_reviews').select('id, rating, user_id').eq('destination_id', `${countryCode}_${selectedDest.id}`);
      if (!rows?.length) { setDestAvgRating(null); setDestReviewCount(0); setDestUserReview(null); return; }
      const avg = rows.reduce((s, r) => s + r.rating, 0) / rows.length;
      setDestAvgRating(Math.round(avg * 10) / 10);
      setDestReviewCount(rows.length);
      if (user) setDestUserReview(rows.find((r) => r.user_id === user.id) ?? null);
    }
    loadDestReviewStats();
  }, [selectedDest, user, destRefreshKey]);

  // Load star stats for destination cards
  useEffect(() => {
    if (activeTab !== 'destinations' || selectedDest) return;
    if (!data?.destinations?.length && !userDestinations.length) return;
    async function loadDestStats() {
      const staticIds = data?.destinations?.map((d) => `${countryCode}_${d.id}`) ?? [];
      const commIds = userDestinations.map((d) => `${countryCode}_${d.id}`);
      const ids = [...staticIds, ...commIds];
      if (!ids.length) return;
      const { data: rows } = await supabase.from('destination_reviews').select('destination_id, rating').in('destination_id', ids);
      if (!rows) return;
      const acc = {};
      rows.forEach((r) => {
        if (!acc[r.destination_id]) acc[r.destination_id] = { sum: 0, count: 0 };
        acc[r.destination_id].sum += r.rating;
        acc[r.destination_id].count++;
      });
      const result = {};
      Object.entries(acc).forEach(([id, { sum, count }]) => {
        result[id] = { avg: Math.round((sum / count) * 10) / 10, count };
      });
      setDestStats(result);
    }
    loadDestStats();
  }, [activeTab, selectedDest, data?.destinations, userDestinations]);

  async function handleDeleteDest(destId) {
    const { data: session } = await supabase.auth.getSession();
    const authToken = session?.session?.access_token ?? null;

    let result;
    try {
      const res = await fetch('/api/delete-destination', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ authToken, destinationId: destId }),
      });
      result = await res.json();
    } catch {
      result = { ok: false };
    }

    if (!result.ok) {
      console.error('[CountryPanel] delete-destination:', result.reason);
      setDeletingDestId(null);
      setDeleteDestError(true);
      setTimeout(() => setDeleteDestError(false), 4000);
      return;
    }

    setDeletingDestId(null);
    // Dans les deux cas (suppression totale ou transfert), on revient à la liste
    setSelectedDest(null);
    setDestRefreshKey(k => k + 1);
  }

  function handleReportDest(destId, e) {
    e.stopPropagation();
    if (!user || reportedDestIds.has(destId)) return;
    setReportModalDestId(destId);
  }

  // Charge depuis la DB les destinations déjà signalées par l'utilisateur (pour ce pays)
  useEffect(() => {
    if (!user || !userDestinations.length) return;
    const ids = userDestinations.map((d) => d.id);
    supabase.from('reports')
      .select('content_id')
      .eq('reporter_id', user.id)
      .eq('content_type', 'destination')
      .in('content_id', ids)
      .then(({ data }) => {
        if (data?.length) {
          setReportedDestIds(new Set(data.map((r) => r.content_id)));
        }
      });
  }, [user, userDestinations]);

  async function handleAdminActionDest(action, destId, e) {
    e?.stopPropagation();
    if (adminActingDestId) return;
    setAdminActingDestId(destId);
    const result = await callAdminAction(action, 'destination', destId);
    setAdminActingDestId(null);
    if (result.ok) {
      setSelectedDest(null);
      setDestRefreshKey((k) => k + 1);
      onAdminAction?.();
    }
  }

  // Charge les images uniquement pour les onglets visités (lazy per tab)
  const allSlugs = useMemo(() => {
    const slugs = new Set();
    if (!data) return [];
    // Header + aperçu : toujours chargés
    data.destinations.slice(0, 3).forEach((d) => d.wikipedia && slugs.add(d.wikipedia));
    // Destinations + mustSee : seulement si l'onglet a été ouvert
    if (visitedTabs.has("destinations") || activeTab === "destinations") {
      // Card images only — mustSee loads only when a destination is selected
      data.destinations.forEach((d) => d.wikipedia && slugs.add(d.wikipedia));
    }
    // mustSee images lazy: only load for the currently opened destination
    if (selectedDest && !selectedDest.isUserDest) {
      selectedDest.mustSee?.forEach((s) => s.wikipedia && slugs.add(s.wikipedia));
    }
    return [...slugs];
  }, [data, visitedTabs, activeTab, selectedDest]);

  const wikiImages = useWikipediaImages(allSlugs);
  const img = (slug) => wikiImages[slug] ?? null;

  if (!data) return null;

  const allDestinations = [...(data.destinations ?? []), ...userDestinations];

  const filteredAllDests = useMemo(() => {
    const normalize = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
    const q = normalize(destSearch.trim());
    if (!q) return null;
    return [...(data.destinations ?? []), ...userDestinations].filter(d => normalize(d.name).includes(q));
  }, [destSearch, data.destinations, userDestinations]);

  const tabs = [
    { id: "overview",      label: t("countryPanel.tabOverview") },
    { id: "weather",       label: t("countryPanel.tabWeather") },
    { id: "cost",          label: t("countryPanel.tabCost") },
    { id: "destinations",  label: t("countryPanel.tabDestinations") },
    { id: "practical",     label: t("countryPanel.tabPractical") },
    { id: "reviews",       label: reviewCount > 0 ? t("countryPanel.tabReviewsWithCount", { count: reviewCount }) : t("countryPanel.tabReviews") },
  ];

  const cityData = data.weatherCities[activeCity];
  const tripBudget = data.costOfLiving.tripEstimate.budgets[activeBudget];

  return (
    <>
      {reportModalDestId && (
        <ReportModal
          contentType="destination"
          contentId={reportModalDestId}
          onClose={() => setReportModalDestId(null)}
          onReported={() => setReportedDestIds((prev) => new Set([...prev, reportModalDestId]))}
        />
      )}
      {showDestForm && (
        <div className="dest-form-overlay" onClick={(e) => e.stopPropagation()}>
          <div className="dest-form-modal" onClick={(e) => e.stopPropagation()}>
            <DestinationForm
              countryCode={countryCode}
              countryName={data.name}
              existingDestination={editDest}
              staticDestinations={data.destinations ?? []}
              existingDestinations={userDestinations}
              onSuccess={(dest) => { setShowDestForm(false); setEditDest(null); setDestRefreshKey(k => k + 1); setSelectedDest(dest); }}
              onCancel={() => { setShowDestForm(false); setEditDest(null); }}
            />
          </div>
        </div>
      )}
      {publicProfileId && (
        <PublicProfileModal
          userId={publicProfileId}
          onClose={() => setPublicProfileId(null)}
          onOpenCountry={(code, tab, extra) => { setPublicProfileId(null); onNavigateCountry?.(code, tab, extra); }}
        />
      )}
      <div className="panel-overlay" onClick={onClose} />
      <div className="modal-wrapper">
        <aside className="country-modal">

          {/* Header */}
          <div className="panel-header">
            <WikiImage src={img(data.destinations[0].wikipedia)} alt={data.name} className="panel-header-bg" />
            <div className="panel-header-overlay" />
            <button
              className="panel-compare-btn"
              onClick={(e) => { e.stopPropagation(); onCompare?.(); }}
              aria-label={t("countryPanel.compareAriaLabel")}
            >
              {t("countryPanel.compareButton")}
            </button>
            <button
              className={`panel-visited-btn${isVisited ? " active" : ""}`}
              onClick={(e) => { e.stopPropagation(); onToggleVisited(); }}
              aria-label={isVisited ? t("countryPanel.removeFromVisited") : t("countryPanel.markAsVisited")}
              title={isVisited ? t("countryPanel.removeFromVisited") : t("countryPanel.markAsVisited")}
            >
              ✈️
            </button>
            <button
              className={`panel-fav-btn${isFavorite ? " active" : ""}`}
              onClick={(e) => { e.stopPropagation(); onToggleFavorite(); }}
              aria-label={isFavorite ? t("countryPanel.removeFromFavorites") : t("countryPanel.addToFavorites")}
            >
              {isFavorite ? "⭐" : "☆"}
            </button>
            <button className="panel-close" onClick={(e) => { e.stopPropagation(); onClose(); }} aria-label={t("common:actions.close")}>✕</button>
            <div className="panel-header-content">
              <span className="panel-emoji">{data.emoji}</span>
              <h1 className="panel-title">{data.name}</h1>
              <div className="panel-meta">
                <span className="panel-meta-chip">🏙 {data.capital}</span>
                <span className="panel-meta-chip">💬 {data.language}</span>
                <span className="panel-meta-chip">💴 {data.currency}</span>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="panel-tabs-wrapper">
            <nav className="panel-tabs">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  className={`tab-btn${activeTab === t.id ? " active" : ""}`}
                  onClick={() => handleTabChange(t.id)}
                >
                  {t.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Body */}
          <div className="panel-body" ref={panelBodyRef}>

            {/* ── OVERVIEW ── */}
            {activeTab === "overview" && (
              <div className="tab-content">
                <p className="country-description">{data.description}</p>

                <h3 className="section-title">{t("countryPanel.sectionWhenToGo")}</h3>
                <div className="period-cards">
                  {data.bestPeriods.map((p) => (
                    <div key={p.months} className="period-card" style={{ borderLeftColor: p.color }}>
                      <span className="period-icon">{p.icon}</span>
                      <div>
                        <div className="period-months" style={{ color: p.color }}>{p.months}</div>
                        <div className="period-label">{p.label}</div>
                        <div className="period-desc">{p.description}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="section-title">{t("countryPanel.topDestinations")}</h3>
                <div className="dest-grid-preview">
                  {data.destinations.slice(0, 3).map((dest) => (
                    <div
                      key={dest.id}
                      className="dest-card-mini"
                      onClick={() => {
                        setActiveTab("destinations");
                        setVisitedTabs((prev) => { const s = new Set(prev); s.add("destinations"); return s; });
                        setSelectedDest(dest);
                      }}
                    >
                      <WikiImage src={img(dest.wikipedia)} alt={dest.name} className="dest-card-mini-img" />
                      <div className="dest-card-mini-info">
                        <span className="dest-card-mini-name">{dest.name}</span>
                        <span className="dest-card-mini-region">{dest.region}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── WEATHER ── */}
            {activeTab === "weather" && (
              <div className="tab-content">
                {/* Global bilan */}
                <div className="bilan-section">
                  <h3 className="section-title">{t("countryPanel.monthlyOverviewByCity")}</h3>
                  <p className="section-intro bilan-legend-row">
                    <span className="bilan-dot good" /><span>{t("search.legendIdeal")}</span>
                    <span className="bilan-dot ok" /><span>{t("countryPanel.legendAcceptable")}</span>
                    <span className="bilan-dot bad" /><span>{t("countryPanel.legendNotRecommended")}</span>
                    <span className="bilan-note">{t("countryPanel.weatherFactorsNote")}</span>
                  </p>
                  <div className="bilan-table">
                    <div className="bilan-header-row">
                      <div className="bilan-city-col" />
                      {data.weatherCities[0].data.map((m, i) => (
                        <div key={m.month} className="bilan-month-label">{monthAbbrev(i)}</div>
                      ))}
                    </div>
                    {data.weatherCities.map((city, idx) => (
                      <div
                        key={city.id}
                        className={`bilan-row${activeCity === idx ? " bilan-row-active" : ""}`}
                        onClick={() => setActiveCity(idx)}
                      >
                        <div className="bilan-city-col">
                          <span className="bilan-city-num">{idx + 1}</span>
                          <span className="bilan-city-name">{city.name}</span>
                        </div>
                        {city.data.map((m) => {
                          const r = weatherRating(m.temp, m.rain);
                          return (
                            <div key={m.month} className={`bilan-cell bilan-${r}`} title={`${m.temp}°C, ${m.rain}mm`}>
                              {RATING_EMOJI[r]}
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>

                {/* City selector */}
                <h3 className="section-title">{t("countryPanel.detailByCity")}</h3>
                <div className="city-tabs">
                  {data.weatherCities.map((c, i) => (
                    <button
                      key={c.id}
                      className={`city-tab${activeCity === i ? " active" : ""}`}
                      onClick={() => setActiveCity(i)}
                    >
                      {c.name}
                      <span className="city-tab-region">{c.region}</span>
                    </button>
                  ))}
                </div>

                <div className="weather-chart">
                  {(() => {
                    const cityMaxRain = Math.max(...cityData.data.map(m => m.rain), MAX_RAIN);
                    return cityData.data.map((m, i) => {
                    const maxTemp = 35;
                    const rainH = Math.round((m.rain / cityMaxRain) * 80);
                    const tempH = Math.max(Math.round(((m.temp + 5) / (maxTemp + 5)) * 80), 4);
                    return (
                      <div key={m.month} className="weather-month">
                        <div className="weather-bars">
                          <div className="bar bar-rain" style={{ height: `${rainH}px` }} title={`${m.rain} mm`} />
                          <div className="bar bar-temp" style={{ height: `${tempH}px` }} title={`${m.temp}°C`} />
                        </div>
                        <span className="weather-temp">{m.temp}°</span>
                        <span className="weather-icon">{m.icon}</span>
                        <span className="weather-month-label">{monthAbbrev(i)}</span>
                      </div>
                    );
                  });
                  })()}
                </div>

                <div className="weather-legend">
                  <span><span className="legend-dot rain" />{t("countryPanel.legendRain")}</span>
                  <span><span className="legend-dot temp" />{t("countryPanel.legendTemp")}</span>
                </div>
              </div>
            )}

            {/* ── COST OF LIVING ── */}
            {activeTab === "cost" && (
              <div className="tab-content">
                {/* Sub-tabs */}
                <div className="cost-subtabs">
                  {[
                    { id: "summary",    label: t("countryPanel.costSummaryTab") },
                    { id: "estimate",   label: t("countryPanel.costEstimateTab") },
                    { id: "prices",     label: t("countryPanel.costPricesTab") },
                  ].map((s) => (
                    <button
                      key={s.id}
                      className={`cost-subtab-btn${costSubTab === s.id ? " active" : ""}`}
                      onClick={() => setCostSubTab(s.id)}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>

                {/* ── Résumé ── */}
                {costSubTab === "summary" && (
                  <>
                    <p className="section-intro">{data.costOfLiving.intro}</p>

                    <div className="cost-exchange">
                      <span className="cost-exchange-icon">💱</span>
                      <span className="cost-exchange-label">{t("countryPanel.exchangeRateLabel")}</span>
                      <span className="cost-exchange-value">{data.costOfLiving.exchangeRate}</span>
                    </div>

                    <div className="budget-summary">
                      {data.costOfLiving.budgetSummary.map((b) => (
                        <div key={b.type} className="budget-card" style={{ "--budget-color": b.color }}>
                          <div className="budget-type">{b.type}</div>
                          <div className="budget-daily">{b.daily}</div>
                          <div className="budget-desc">{b.desc}</div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* ── Estimation ── */}
                {costSubTab === "estimate" && (
                  <div className="trip-estimate">
                    <h3 className="section-title">
                      {t("countryPanel.estimateTitle", { duration: data.costOfLiving.tripEstimate.duration })}
                    </h3>
                    <p className="trip-route">{data.costOfLiving.tripEstimate.route}</p>

                    <div className="trip-budget-tabs">
                      {data.costOfLiving.tripEstimate.budgets.map((b, i) => (
                        <button
                          key={b.type}
                          className={`trip-budget-tab${activeBudget === i ? " active" : ""}`}
                          style={{ "--tab-color": b.color }}
                          onClick={() => setActiveBudget(i)}
                        >
                          {b.type}
                        </button>
                      ))}
                    </div>

                    <div className="trip-budget-card" style={{ "--budget-color": tripBudget.color }}>
                      <div className="trip-total">
                        <span className="trip-total-label">{t("countryPanel.totalEstimated")}</span>
                        <span className="trip-total-value">{tripBudget.total}</span>
                      </div>
                      <div className="trip-breakdown">
                        {tripBudget.breakdown.map((item) => (
                          <div key={item.label} className="trip-line">
                            <span className="trip-line-label">{item.label}</span>
                            <span className="trip-line-amount">{item.amount}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* ── Prix courants ── */}
                {costSubTab === "prices" && (
                  <>
                    {data.costOfLiving.categories.map((cat) => (
                      <div key={cat.id} className="cost-category">
                        <h3 className="cost-category-title">
                          <span>{cat.icon}</span> {cat.label}
                        </h3>
                        <div className="cost-items">
                          {cat.items.map((item) => (
                            <div key={item.label} className="cost-item">
                              <div className="cost-item-left">
                                <span className="cost-item-label">{item.label}</span>
                                <span className="cost-item-detail">{item.detail}</span>
                              </div>
                              <span className="cost-item-price">{item.price}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            )}

            {/* ── DESTINATIONS ── */}
            {activeTab === "destinations" && (
              <div className="tab-content">
                {selectedDest ? (
                  <div className="dest-detail">
                    <button className="back-btn" onClick={() => setSelectedDest(null)}>{t("countryPanel.backButton")}</button>

                    {/* Bandeau alerte admin sur la destination */}
                    {selectedDest.isUserDest && isAdmin && alertIds.has(selectedDest.id) && (() => {
                      const alert = alertIds.get(selectedDest.id);
                      return (
                        <div className="admin-alert-bandeau">
                          <div className="admin-alert-bandeau-top">
                            <div className="admin-alert-bandeau-left">
                              <span>🚨</span>
                              <span className="admin-alert-bandeau-title">{t("countryPanel.destinationReportedTitle")}</span>
                              {alert?.reason && <span className="admin-alert-bandeau-reason">{t(`report.reasonsShort.${alert.reason}`, { defaultValue: alert.reason })}</span>}
                            </div>
                            <div className="admin-alert-bandeau-actions">
                              <button className="admin-inline-btn admin-inline-btn--dismiss" disabled={!!adminActingDestId} onClick={(e) => handleAdminActionDest('dismiss_report', selectedDest.id, e)}>{t("adminPanel.dismissButton")}</button>
                              <button className="admin-inline-btn admin-inline-btn--delete" disabled={!!adminActingDestId} onClick={(e) => handleAdminActionDest('delete_content', selectedDest.id, e)}>{t("common:actions.delete")}</button>
                            </div>
                          </div>
                          {alert?.detail && <div className="admin-alert-bandeau-detail">« {alert.detail} »</div>}
                        </div>
                      );
                    })()}

                    {selectedDest.isUserDest
                      ? <img src={selectedDest.image_url} alt={selectedDest.name} className="dest-detail-img" style={{ objectFit: 'cover' }} />
                      : <WikiImage src={img(selectedDest.wikipedia)} alt={selectedDest.name} className="dest-detail-img" />
                    }
                    <div className="dest-detail-title-row">
                      <div className="dest-detail-title-group">
                        <h2 className="dest-detail-name">{selectedDest.name}</h2>
                        {destAvgRating !== null && (
                          <div className="dest-detail-inline-rating">
                            <HalfStars rating={destAvgRating} size={13} />
                            <span className="dest-detail-inline-score">{destAvgRating}/5</span>
                            <span className="dest-detail-inline-count">({destReviewCount})</span>
                          </div>
                        )}
                      </div>
                      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                        {/* Bouton signaler (non-propriétaires) — à côté de "Voir les avis" */}
                        {selectedDest.isUserDest && user && user.id !== selectedDest.user_id && (
                          <button
                            className={`review-report-btn${reportedDestIds.has(selectedDest.id) ? ' reported' : ''}`}
                            disabled={reportedDestIds.has(selectedDest.id)}
                            onClick={(e) => handleReportDest(selectedDest.id, e)}
                          >
                            {reportedDestIds.has(selectedDest.id) ? t("review.reportedBadge") : (
                              <>
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/></svg>
                                {t("review.reportButtonLabel")}
                              </>
                            )}
                          </button>
                        )}
                        <button
                          className="dest-see-reviews-btn"
                          onClick={() => destReviewsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                        >
                          {destReviewCount > 0 ? t("countryPanel.seeReviewsButtonWithCount", { count: destReviewCount }) : t("countryPanel.seeReviewsButton")}
                        </button>
                      </div>
                    </div>
                    {!selectedDest.isUserDest && <span className="dest-detail-region">{selectedDest.region}</span>}
                    <p className="dest-detail-desc">{selectedDest.description}</p>
                    {selectedDest.isUserDest ? (
                      selectedDest.tags?.length > 0 && (
                        <div className="dest-tags">
                          {selectedDest.tags.map(t => <span key={t} className="tag">{t}</span>)}
                        </div>
                      )
                    ) : (
                      <div className="dest-tags">
                        {selectedDest.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                      </div>
                    )}

                    {/* Actions propriétaire : modifier / supprimer */}
                    {selectedDest.isUserDest && user?.id === selectedDest.user_id && (
                      <div className="dest-detail-actions">
                        {deletingDestId === selectedDest.id ? (
                          <div className="review-confirm-delete">
                            <span className="review-confirm-msg">{t("countryPanel.confirmDeleteDestination")}</span>
                            <button className="review-confirm-yes" onClick={() => handleDeleteDest(selectedDest.id)}>{t("common:yes")}</button>
                            <button className="review-confirm-no" onClick={() => setDeletingDestId(null)}>{t("common:no")}</button>
                          </div>
                        ) : (
                          <>
                            <button className="dest-edit-btn"
                              onClick={() => { setEditDest(selectedDest); setShowDestForm(true); setSelectedDest(null); }}>
                              {t("countryPanel.editButton")}
                            </button>
                            <button className="dest-delete-btn" onClick={() => setDeletingDestId(selectedDest.id)}>
                              {t("countryPanel.deleteButtonWithIcon")}
                            </button>
                          </>
                        )}
                      </div>
                    )}

                    <PlacesList dest={selectedDest} countryCode={countryCode} countryName={data.name} wikiImages={wikiImages} />

                    {/* Section avis destination */}
                    <div ref={destReviewsRef} className="dest-reviews-section">
                      <h4 className="dest-reviews-title">{t("countryPanel.reviewsOn", { name: selectedDest.name })}</h4>

                      {!destShowForm && (destReviewCount > 0 || (user && !destUserReview)) && (
                        <div className="reviews-controls">
                          {destReviewCount > 0 && (
                            <div className="reviews-sort-btns">
                              <button className={`reviews-sort-btn${destSortBy === 'date' ? ' active' : ''}`} onClick={() => setDestSortBy('date')}>{t("countryPanel.sortRecent")}</button>
                              <button className={`reviews-sort-btn${destSortBy === 'votes' ? ' active' : ''}`} onClick={() => setDestSortBy('votes')}>{t("countryPanel.sortMostHelpful")}</button>
                            </div>
                          )}
                                    {user && !destUserReview && (
                            <button className="review-write-btn" style={{ marginLeft: 'auto' }} onClick={() => setDestShowForm(true)}>{t("countryPanel.writeReviewButton")}</button>
                          )}
                        </div>
                      )}

                      {!destShowForm && !user && (
                        <button className="review-login-prompt" onClick={() => setAuthModalOpen(true)}>
                          {t("countryPanel.loginToReviewPrompt")}
                        </button>
                      )}

                      {destShowForm && (
                        <ReviewForm
                          destinationId={`${countryCode}_${selectedDest.id}`}
                          destinationName={selectedDest.name}
                          countryCode={countryCode}
                          existingReview={destEditReview}
                          onSuccess={() => { setDestShowForm(false); setDestEditReview(null); setDestRefreshKey((k) => k + 1); }}
                          onCancel={() => { setDestShowForm(false); setDestEditReview(null); }}
                        />
                      )}

                      <ReviewList
                        destinationId={`${countryCode}_${selectedDest.id}`}
                        currentUserId={user?.id}
                        refreshKey={destRefreshKey}
                        sortBy={destSortBy}
                        excludeId={destShowForm && destEditReview ? destEditReview.id : null}
                        onEdit={(review) => { setDestEditReview(review); setDestShowForm(true); }}
                        onDelete={() => setDestRefreshKey((k) => k + 1)}
                        onOpenProfile={(uid) => setPublicProfileId(uid)}
                        emptyMessage={t("countryPanel.noReviewsForDest", { name: selectedDest.name })}
                        highlightId={
                          initialExtra?.destId && String(selectedDest?.id) === initialExtra.destId
                            ? initialExtra.reviewId
                            : null
                        }
                        alertIds={alertIds}
                        onAdminAction={onAdminAction}
                      />
                    </div>
                  </div>
                ) : (() => {
                  const myDests = user ? userDestinations.filter(d => d.user_id === user.id) : [];
                  const otherDests = userDestinations.filter(d => !user || d.user_id !== user.id);
                  return (
                  <>
                    {deleteDestError && (
                      <div className="dest-delete-error">
                        <span className="dest-delete-error-icon">⚠</span>
                        <span>{t("countryPanel.deleteFailedError")}</span>
                      </div>
                    )}
                    <div className="dest-list-header">
                      <div className="dest-search-wrapper">
                        <input
                          type="text"
                          className="dest-search-input"
                          placeholder={t("countryPanel.searchDestinationPlaceholder")}
                          value={destSearch}
                          onChange={e => setDestSearch(e.target.value)}
                        />
                        {destSearch && (
                          <button className="dest-search-clear" onClick={() => setDestSearch('')}>✕</button>
                        )}
                      </div>
                      {user ? (
                        <button
                          className="dest-add-community-btn-top"
                          onClick={() => { setShowDestForm(true); setEditDest(null); }}
                        >
                          {t("countryPanel.addDestinationButton")}
                        </button>
                      ) : (
                        <button className="dest-add-community-btn-top dest-add-community-btn-top--muted" onClick={() => setAuthModalOpen(true)}>
                          {t("countryPanel.addDestinationButton")}
                        </button>
                      )}
                    </div>

                    {/* Résultats de recherche */}
                    {filteredAllDests !== null && (() => {
                      if (filteredAllDests.length === 0) {
                        return <p className="dest-search-empty">{t("countryPanel.noDestinationMatch")}</p>;
                      }
                      const M = 5; const C = 3.5;
                      const bayesian = (d) => { const s = destStats[`${countryCode}_${d.id}`]; return s ? (s.count * s.avg + M * C) / (s.count + M) : -1; };
                      const searchMyDests = user ? filteredAllDests.filter(d => d.isUserDest && d.user_id === user.id) : [];
                      const searchOtherDests = filteredAllDests
                        .filter(d => !user || !d.isUserDest || d.user_id !== user.id)
                        .sort((a, b) => bayesian(b) - bayesian(a));
                      const isOwner = (dest) => user?.id === dest.user_id;
                      const renderCard = (dest) => dest.isUserDest ? (
                        <div key={dest.id} className={`dest-card${isAdmin && alertIds.has(dest.id) ? ' dest-card--alert' : ''}`} onClick={() => setSelectedDest(dest)}>
                          <div className="dest-card-img-wrap">
                            <img src={dest.image_url} alt={dest.name} className="dest-card-img" style={{ objectFit: 'cover' }} />
                            {!isOwner(dest) && <span className="dest-card-community-badge">👤</span>}
                          </div>
                          <div className="dest-card-info">
                            <div className="dest-card-top">
                              <span className="dest-card-name">{dest.name}</span>
                              {isOwner(dest) && deletingDestId !== dest.id && (
                                <div className="dest-card-owner-actions" onClick={e => e.stopPropagation()}>
                                  <button className="review-action-btn review-action-btn--edit" title={t('countryPanel.editButton')}
                                    onClick={() => { setEditDest(dest); setShowDestForm(true); }}>
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
                                  </button>
                                  <button className="review-action-btn review-action-btn--delete" title={t('common:actions.delete')}
                                    onClick={() => setDeletingDestId(dest.id)}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 3h6l1 1h4v2H4V4h4l1-1zM5 8h14l-1 13H6L5 8zm5 2v8h1v-8h-1zm3 0v8h1v-8h-1z"/></svg>
                                  </button>
                                </div>
                              )}
                              {!isOwner(dest) && (
                                <div className="dest-card-top-actions" onClick={e => e.stopPropagation()}>
                                  {isAdmin && alertIds.has(dest.id) && <span className="dest-card-alert-badge">🚨</span>}
                                  {user && (
                                    <button
                                      className={`dest-card-report-btn-inline${reportedDestIds.has(dest.id) ? ' reported' : ''}`}
                                      disabled={reportedDestIds.has(dest.id)}
                                      onClick={(e) => handleReportDest(dest.id, e)}
                                    >
                                      {reportedDestIds.has(dest.id) ? t('review.reportedBadge') : (
                                        <>
                                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/></svg>
                                          {t('review.reportButtonLabel')}
                                        </>
                                      )}
                                    </button>
                                  )}
                                </div>
                              )}
                            </div>
                            {deletingDestId === dest.id ? (
                              <div className="dest-card-confirm-block" onClick={e => e.stopPropagation()}>
                                <span className="dest-card-confirm-msg">{t('countryPanel.confirmDeleteDestination')}</span>
                                <div className="dest-card-confirm-btns">
                                  <button className="review-confirm-no" onClick={() => setDeletingDestId(null)}>{t('common:actions.cancel')}</button>
                                  <button className="review-confirm-yes" onClick={() => handleDeleteDest(dest.id)}>{t('common:actions.delete')}</button>
                                </div>
                              </div>
                            ) : (
                              <>
                                <p className="dest-card-desc">{dest.description.length > 90 ? dest.description.slice(0, 90) + '…' : dest.description}</p>
                                {dest.tags?.length > 0 && (
                                  <div className="dest-tags">
                                    {dest.tags.map(t => <span key={t} className="tag">{t}</span>)}
                                  </div>
                                )}
                                {destStats[`${countryCode}_${dest.id}`] && (
                                  <div className="dest-card-rating">
                                    <HalfStars rating={destStats[`${countryCode}_${dest.id}`].avg} size={12} />
                                    <span className="dest-card-rating-score">{destStats[`${countryCode}_${dest.id}`].avg}/5</span>
                                    <span className="dest-card-rating-count">({t('profile.reviewsCount', { count: destStats[`${countryCode}_${dest.id}`].count })})</span>
                                  </div>
                                )}
                              </>
                            )}
                          </div>
                        </div>
                      ) : (
                        <div key={dest.id} className="dest-card" onClick={() => setSelectedDest(dest)}>
                          <WikiImage src={img(dest.wikipedia)} alt={dest.name} className="dest-card-img" />
                          <div className="dest-card-info">
                            <div className="dest-card-top">
                              <span className="dest-card-name">{dest.name}</span>
                              <span className="dest-card-region">{dest.region}</span>
                            </div>
                            <p className="dest-card-desc">{dest.description.length > 90 ? dest.description.slice(0, 90) + '…' : dest.description}</p>
                            <div className="dest-tags">
                              {dest.tags?.map((t) => <span key={t} className="tag">{t}</span>)}
                            </div>
                            {destStats[`${countryCode}_${dest.id}`] && (
                              <div className="dest-card-rating">
                                <HalfStars rating={destStats[`${countryCode}_${dest.id}`].avg} size={12} />
                                <span className="dest-card-rating-score">{destStats[`${countryCode}_${dest.id}`].avg}/5</span>
                                <span className="dest-card-rating-count">({t('profile.reviewsCount', { count: destStats[`${countryCode}_${dest.id}`].count })})</span>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                      return (
                        <>
                          {searchMyDests.length > 0 && (
                            <div className="my-dests-section">
                              <div className="my-dests-header">{t('countryPanel.myDestinationsHeader')}</div>
                              <div className="dest-grid">{searchMyDests.map(renderCard)}</div>
                            </div>
                          )}
                          {searchOtherDests.length > 0 && <div className="dest-grid">{searchOtherDests.map(renderCard)}</div>}
                        </>
                      );
                    })()}

                    {/* Section "Mes destinations" */}
                    {filteredAllDests === null && myDests.length > 0 && (
                      <div className="my-dests-section">
                        <div className="my-dests-header">{t('countryPanel.myDestinationsHeader')}</div>
                        <div className="dest-grid">
                          {myDests.map((dest) => (
                            <div key={dest.id} className="dest-card" onClick={() => setSelectedDest(dest)}>
                              <div className="dest-card-img-wrap">
                                <img src={dest.image_url} alt={dest.name} className="dest-card-img" style={{ objectFit: 'cover' }} />
                              </div>
                              <div className="dest-card-info">
                                <div className="dest-card-top">
                                  <span className="dest-card-name">{dest.name}</span>
                                  {deletingDestId !== dest.id && (
                                    <div className="dest-card-owner-actions" onClick={e => e.stopPropagation()}>
                                      <button className="review-action-btn review-action-btn--edit" title={t('countryPanel.editButton')}
                                        onClick={() => { setEditDest(dest); setShowDestForm(true); }}>
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
                                      </button>
                                      <button className="review-action-btn review-action-btn--delete" title={t('common:actions.delete')}
                                        onClick={() => setDeletingDestId(dest.id)}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 3h6l1 1h4v2H4V4h4l1-1zM5 8h14l-1 13H6L5 8zm5 2v8h1v-8h-1zm3 0v8h1v-8h-1z"/></svg>
                                      </button>
                                    </div>
                                  )}
                                </div>
                                {deletingDestId === dest.id ? (
                                  <div className="review-confirm-delete" onClick={e => e.stopPropagation()}>
                                    <span className="review-confirm-msg">{t('countryPanel.confirmDeleteDestination')}</span>
                                    <button className="review-confirm-yes" onClick={() => handleDeleteDest(dest.id)}>{t('common:yes')}</button>
                                    <button className="review-confirm-no" onClick={() => setDeletingDestId(null)}>{t('common:no')}</button>
                                  </div>
                                ) : (
                                  <>
                                    <p className="dest-card-desc">
                                      {dest.description.length > 90 ? dest.description.slice(0, 90) + '…' : dest.description}
                                    </p>
                                    {dest.tags?.length > 0 && (
                                      <div className="dest-tags">
                                        {dest.tags.map(t => <span key={t} className="tag">{t}</span>)}
                                      </div>
                                    )}
                                    {destStats[`${countryCode}_${dest.id}`] && (
                                      <div className="dest-card-rating">
                                        <HalfStars rating={destStats[`${countryCode}_${dest.id}`].avg} size={12} />
                                        <span className="dest-card-rating-score">{destStats[`${countryCode}_${dest.id}`].avg}/5</span>
                                        <span className="dest-card-rating-count">({t('profile.reviewsCount', { count: destStats[`${countryCode}_${dest.id}`].count })})</span>
                                      </div>
                                    )}
                                  </>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Destinations statiques + communautaires des autres, triées par note */}
                    {filteredAllDests === null && <div className="dest-grid">
                      {[
                        ...(data?.destinations ?? []).map(d => ({ ...d, _type: 'static' })),
                        ...otherDests.map(d => ({ ...d, _type: 'community' })),
                      ].sort((a, b) => {
                        const M = 5; const C = 3.5; // moyenne bayésienne : seuil de confiance + prior
                        const sa = destStats[`${countryCode}_${a.id}`];
                        const sb = destStats[`${countryCode}_${b.id}`];
                        const scoreA = sa ? (sa.count * sa.avg + M * C) / (sa.count + M) : -1;
                        const scoreB = sb ? (sb.count * sb.avg + M * C) / (sb.count + M) : -1;
                        return scoreB - scoreA;
                      }).map((dest) => dest._type === 'static' ? (
                        <div key={dest.id} className="dest-card" onClick={() => setSelectedDest(dest)}>
                          <WikiImage src={img(dest.wikipedia)} alt={dest.name} className="dest-card-img" />
                          <div className="dest-card-info">
                            <div className="dest-card-top">
                              <span className="dest-card-name">{dest.name}</span>
                              <span className="dest-card-region">{dest.region}</span>
                            </div>
                            <p className="dest-card-desc">
                              {dest.description.length > 90 ? dest.description.slice(0, 90) + '…' : dest.description}
                            </p>
                            <div className="dest-tags">
                              {dest.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                            </div>
                            {destStats[`${countryCode}_${dest.id}`] && (
                              <div className="dest-card-rating">
                                <HalfStars rating={destStats[`${countryCode}_${dest.id}`].avg} size={12} />
                                <span className="dest-card-rating-score">{destStats[`${countryCode}_${dest.id}`].avg}/5</span>
                                <span className="dest-card-rating-count">({t('profile.reviewsCount', { count: destStats[`${countryCode}_${dest.id}`].count })})</span>
                              </div>
                            )}
                          </div>
                        </div>
                      ) : (
                        <div key={dest.id} className={`dest-card${isAdmin && alertIds.has(dest.id) ? ' dest-card--alert' : ''}`} onClick={() => setSelectedDest(dest)}>
                          <div className="dest-card-img-wrap">
                            <img src={dest.image_url} alt={dest.name} className="dest-card-img" style={{ objectFit: 'cover' }} />
                            <span className="dest-card-community-badge">👤</span>
                          </div>
                          <div className="dest-card-info">
                            <div className="dest-card-top">
                              <span className="dest-card-name">{dest.name}</span>
                              <div className="dest-card-top-actions" onClick={(e) => e.stopPropagation()}>
                                {isAdmin && alertIds.has(dest.id) && <span className="dest-card-alert-badge">🚨</span>}
                                {user && user.id !== dest.user_id && (
                                  <button
                                    className={`dest-card-report-btn-inline${reportedDestIds.has(dest.id) ? ' reported' : ''}`}
                                    disabled={reportedDestIds.has(dest.id)}
                                    onClick={(e) => handleReportDest(dest.id, e)}
                                  >
                                    {reportedDestIds.has(dest.id) ? t('review.reportedBadge') : (
                                      <>
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/></svg>
                                        {t('review.reportButtonLabel')}
                                      </>
                                    )}
                                  </button>
                                )}
                              </div>
                            </div>
                            <p className="dest-card-desc">
                              {dest.description.length > 90 ? dest.description.slice(0, 90) + '…' : dest.description}
                            </p>
                            {dest.tags?.length > 0 && (
                              <div className="dest-tags">
                                {dest.tags.map(t => <span key={t} className="tag">{t}</span>)}
                              </div>
                            )}
                            {destStats[`${countryCode}_${dest.id}`] && (
                              <div className="dest-card-rating">
                                <HalfStars rating={destStats[`${countryCode}_${dest.id}`].avg} size={12} />
                                <span className="dest-card-rating-score">{destStats[`${countryCode}_${dest.id}`].avg}/5</span>
                                <span className="dest-card-rating-count">({t('profile.reviewsCount', { count: destStats[`${countryCode}_${dest.id}`].count })})</span>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>}
                  </>
                  );
                })()}
              </div>
            )}

            {/* ── PRACTICAL ── */}
            {activeTab === "practical" && (
              <div className="tab-content">
                <div className="visa-disclaimer">
                  <span className="visa-disclaimer-icon">⚠️</span>
                  <span>{t("countryPanel.visaDisclaimerPrefix")}&nbsp;
                    <a href="https://www.diplomatie.gouv.fr/fr/conseils-aux-voyageurs/" target="_blank" rel="noopener noreferrer">{t("countryPanel.visaDisclaimerLink")}</a> {t("countryPanel.visaDisclaimerSuffix")}
                  </span>
                </div>
                <div className="practical-list">
                  {data.practicalities.map((item) => (
                    <div key={item.label} className="practical-item">
                      <span className="practical-icon">{item.icon}</span>
                      <div className="practical-body">
                        <span className="practical-label">{item.label}</span>
                        <span className="practical-value">{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── REVIEWS ── */}
            {activeTab === "reviews" && (
              <div className="tab-content">
                {avgRating !== null && (
                  <div className="review-summary-widget">
                    <div className="review-summary-left">
                      <span className="review-summary-avg">{avgRating}</span>
                      <div className="review-summary-detail">
                        <HalfStars rating={avgRating} size={19} />
                        <span className="review-summary-count">{t("profile.reviewsCount", { count: reviewCount })}</span>
                      </div>
                    </div>
                    <div className="review-summary-right">
                      <span className="review-summary-label">{t("countryPanel.overallRating")}</span>
                      <span className="review-summary-sublabel">{t("countryPanel.fromTriplyTravelers")}</span>
                    </div>
                  </div>
                )}

                {/* Contrôles : tri + bouton écrire (masqués si rien à afficher) */}
                {!showForm && (reviewCount > 0 || (user && !userReview)) && (
                  <div className="reviews-controls">
                    {reviewCount > 0 && (
                      <div className="reviews-sort-btns">
                        <button className={`reviews-sort-btn${sortBy === 'date' ? ' active' : ''}`} onClick={() => setSortBy('date')}>{t("countryPanel.sortRecent")}</button>
                        <button className={`reviews-sort-btn${sortBy === 'votes' ? ' active' : ''}`} onClick={() => setSortBy('votes')}>{t("countryPanel.sortMostHelpful")}</button>
                      </div>
                    )}
                    {user && !userReview && (
                      <button className="review-write-btn" style={{ marginLeft: 'auto' }} onClick={() => setShowForm(true)}>{t("countryPanel.writeReviewButton")}</button>
                    )}
                  </div>
                )}

                {!showForm && !user && (
                  <button className="review-login-prompt" onClick={() => setAuthModalOpen(true)}>
                    {t("countryPanel.loginToReviewPrompt")}
                  </button>
                )}

                {/* Formulaire */}
                {showForm && (
                  <ReviewForm
                    countryCode={countryCode}
                    existingReview={editReview}
                    onSuccess={() => { setShowForm(false); setEditReview(null); setReviewRefreshKey((k) => k + 1); }}
                    onCancel={() => { setShowForm(false); setEditReview(null); }}
                  />
                )}

                <ReviewList
                  countryCode={countryCode}
                  currentUserId={user?.id}
                  refreshKey={reviewRefreshKey}
                  sortBy={sortBy}
                  excludeId={showForm && editReview ? editReview.id : null}
                  onEdit={(review) => { setEditReview(review); setShowForm(true); }}
                  onDelete={() => setReviewRefreshKey((k) => k + 1)}
                  onOpenProfile={(uid) => setPublicProfileId(uid)}
                  highlightId={!initialExtra?.destId ? initialExtra?.reviewId : null}
                  alertIds={alertIds}
                  onAdminAction={onAdminAction}
                />
              </div>
            )}
          </div>
        </aside>
      </div>
    </>
  );
}
