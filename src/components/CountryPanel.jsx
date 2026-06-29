import { useEffect, useMemo, useRef, useState } from "react";
import { COUNTRIES } from "../data/index";
import WikiImage from "./WikiImage";
import { useWikipediaImages } from "../hooks/useWikipediaImages";
import { weatherRating } from "../utils/weather";
import { useAuth } from "../context/AuthContext";
import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";
import { HalfStars } from "./ReviewItem";
import { supabase } from "../lib/supabase";
import PublicProfileModal from "./PublicProfileModal";

const RATING_EMOJI = { good: "😊", ok: "😐", bad: "😞" };

const MAX_TEMP = 35;
const MAX_RAIN = 250;

export default function CountryPanel({ countryCode, onClose, isFavorite, onToggleFavorite, isVisited, onToggleVisited, onCompare, initialTab, initialExtra, onNavigateCountry }) {
  const data = COUNTRIES[countryCode];
  const { user, setAuthModalOpen } = useAuth();
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

  const handleTabChange = (id) => {
    setActiveTab(id);
    setVisitedTabs((prev) => { const s = new Set(prev); s.add(id); return s; });
    setSelectedDest(null);
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
  }, [countryCode, initialTab]);

  // Auto-select destination + scroll to review from external navigation (profile/notif)
  useEffect(() => {
    if (!initialExtra?.destId || !data?.destinations) return;
    const dest = data.destinations.find((d) => String(d.id) === initialExtra.destId);
    if (dest) setSelectedDest(dest);
  }, [initialExtra, data]);

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
    if (activeTab !== 'destinations' || selectedDest || !data?.destinations?.length) return;
    async function loadDestStats() {
      const ids = data.destinations.map((d) => `${countryCode}_${d.id}`);
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
  }, [activeTab, selectedDest, data?.destinations]);

  if (!data) return null;

  const tabs = [
    { id: "overview",      label: "🗾 Aperçu" },
    { id: "weather",       label: "🌤 Météo" },
    { id: "cost",          label: "💴 Coût de la vie" },
    { id: "destinations",  label: "📍 Destinations" },
    { id: "practical",     label: "🧳 Pratique" },
    { id: "reviews",       label: reviewCount > 0 ? `⭐ Avis (${reviewCount})` : "⭐ Avis" },
  ];

  const cityData = data.weatherCities[activeCity];
  const tripBudget = data.costOfLiving.tripEstimate.budgets[activeBudget];

  // Charge les images uniquement pour les onglets visités (lazy per tab)
  const allSlugs = useMemo(() => {
    const slugs = new Set();
    // Header + aperçu : toujours chargés
    data.destinations.slice(0, 3).forEach((d) => d.wikipedia && slugs.add(d.wikipedia));
    // Destinations + mustSee : seulement si l'onglet a été ouvert
    if (visitedTabs.has("destinations") || activeTab === "destinations") {
      data.destinations.forEach((d) => {
        d.wikipedia && slugs.add(d.wikipedia);
        d.mustSee.forEach((s) => s.wikipedia && slugs.add(s.wikipedia));
      });
    }
    return [...slugs];
  }, [data, visitedTabs, activeTab]);

  const wikiImages = useWikipediaImages(allSlugs);
  const img = (slug) => wikiImages[slug] ?? null;

  return (
    <>
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
              aria-label="Comparer"
            >
              ⚖ Comparer
            </button>
            <button
              className={`panel-visited-btn${isVisited ? " active" : ""}`}
              onClick={(e) => { e.stopPropagation(); onToggleVisited(); }}
              aria-label={isVisited ? "Retirer des visités" : "Marquer comme visité"}
              title={isVisited ? "Retirer des visités" : "Marquer comme visité"}
            >
              ✈️
            </button>
            <button
              className={`panel-fav-btn${isFavorite ? " active" : ""}`}
              onClick={(e) => { e.stopPropagation(); onToggleFavorite(); }}
              aria-label={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
            >
              {isFavorite ? "⭐" : "☆"}
            </button>
            <button className="panel-close" onClick={(e) => { e.stopPropagation(); onClose(); }} aria-label="Fermer">✕</button>
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

                <h3 className="section-title">Quand y aller ?</h3>
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

                <h3 className="section-title">Destinations phares</h3>
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
                  <h3 className="section-title">Bilan mensuel par ville</h3>
                  <p className="section-intro bilan-legend-row">
                    <span className="bilan-dot good" /><span>Idéal</span>
                    <span className="bilan-dot ok" /><span>Acceptable</span>
                    <span className="bilan-dot bad" /><span>Déconseillé</span>
                    <span className="bilan-note">Chaleur + pluie + humidité</span>
                  </p>
                  <div className="bilan-table">
                    <div className="bilan-header-row">
                      <div className="bilan-city-col" />
                      {data.weatherCities[0].data.map((m) => (
                        <div key={m.month} className="bilan-month-label">{m.month}</div>
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
                <h3 className="section-title">Détail par ville</h3>
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
                    return cityData.data.map((m) => {
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
                        <span className="weather-month-label">{m.month}</span>
                      </div>
                    );
                  });
                  })()}
                </div>

                <div className="weather-legend">
                  <span><span className="legend-dot rain" />Pluie (mm)</span>
                  <span><span className="legend-dot temp" />Température (°C)</span>
                </div>
              </div>
            )}

            {/* ── COST OF LIVING ── */}
            {activeTab === "cost" && (
              <div className="tab-content">
                {/* Sub-tabs */}
                <div className="cost-subtabs">
                  {[
                    { id: "summary",    label: "💰 Résumé" },
                    { id: "estimate",   label: "🧾 Estimation" },
                    { id: "prices",     label: "🛒 Prix courants" },
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
                      <span className="cost-exchange-label">Taux de change</span>
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
                      Estimation — {data.costOfLiving.tripEstimate.duration}
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
                        <span className="trip-total-label">Total estimé</span>
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
                    <button className="back-btn" onClick={() => setSelectedDest(null)}>← Retour</button>
                    <WikiImage src={img(selectedDest.wikipedia)} alt={selectedDest.name} className="dest-detail-img" />
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
                      <button
                        className="dest-see-reviews-btn"
                        onClick={() => destReviewsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                      >
                        Voir les avis{destReviewCount > 0 ? ` (${destReviewCount})` : ''}
                      </button>
                    </div>
                    <span className="dest-detail-region">{selectedDest.region}</span>
                    <p className="dest-detail-desc">{selectedDest.description}</p>
                    <div className="dest-tags">
                      {selectedDest.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                    </div>
                    <h4 className="must-title">À ne pas manquer</h4>
                    <div className="must-list">
                      {selectedDest.mustSee.map((s) => (
                        <div key={s.name} className="must-item">
                          <WikiImage src={img(s.wikipedia)} alt={s.name} className="must-item-img" />
                          <span className="must-item-name">{s.name}</span>
                        </div>
                      ))}
                    </div>

                    {/* Section avis destination */}
                    <div ref={destReviewsRef} className="dest-reviews-section">
                      <h4 className="dest-reviews-title">Avis sur {selectedDest.name}</h4>

                      {!destShowForm && (destReviewCount > 0 || (user && !destUserReview)) && (
                        <div className="reviews-controls">
                          {destReviewCount > 0 && (
                            <div className="reviews-sort-btns">
                              <button className={`reviews-sort-btn${destSortBy === 'date' ? ' active' : ''}`} onClick={() => setDestSortBy('date')}>Plus récents</button>
                              <button className={`reviews-sort-btn${destSortBy === 'votes' ? ' active' : ''}`} onClick={() => setDestSortBy('votes')}>Les plus utiles</button>
                            </div>
                          )}
                                    {user && !destUserReview && (
                            <button className="review-write-btn" style={{ marginLeft: 'auto' }} onClick={() => setDestShowForm(true)}>✏️ Écrire un avis</button>
                          )}
                        </div>
                      )}

                      {!destShowForm && !user && (
                        <button className="review-login-prompt" onClick={() => setAuthModalOpen(true)}>
                          ✍️ Connectez-vous pour laisser un avis
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
                        emptyMessage={`Aucun avis pour ${selectedDest.name}. Soyez le premier !`}
                        highlightId={
                          initialExtra?.destId && String(selectedDest?.id) === initialExtra.destId
                            ? initialExtra.reviewId
                            : null
                        }
                      />
                    </div>
                  </div>
                ) : (
                  <div className="dest-grid">
                    {[...data.destinations].sort((a, b) => {
                      const avgA = destStats[`${countryCode}_${a.id}`]?.avg ?? -1;
                      const avgB = destStats[`${countryCode}_${b.id}`]?.avg ?? -1;
                      return avgB - avgA;
                    }).map((dest) => (
                      <div key={dest.id} className="dest-card" onClick={() => setSelectedDest(dest)}>
                        <WikiImage src={img(dest.wikipedia)} alt={dest.name} className="dest-card-img" />
                        <div className="dest-card-info">
                          <div className="dest-card-top">
                            <span className="dest-card-name">{dest.name}</span>
                            <span className="dest-card-region">{dest.region}</span>
                          </div>
                          <p className="dest-card-desc">{dest.description.slice(0, 90)}…</p>
                          <div className="dest-tags">
                            {dest.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                          </div>
                          {destStats[`${countryCode}_${dest.id}`] && (
                            <div className="dest-card-rating">
                              <HalfStars rating={destStats[`${countryCode}_${dest.id}`].avg} size={12} />
                              <span className="dest-card-rating-score">{destStats[`${countryCode}_${dest.id}`].avg}/5</span>
                              <span className="dest-card-rating-count">({destStats[`${countryCode}_${dest.id}`].count} avis)</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* ── PRACTICAL ── */}
            {activeTab === "practical" && (
              <div className="tab-content">
                <div className="visa-disclaimer">
                  <span className="visa-disclaimer-icon">⚠️</span>
                  <span>Les informations sur les visas sont indicatives et peuvent évoluer. Vérifiez toujours auprès de l'ambassade ou sur&nbsp;
                    <a href="https://www.diplomatie.gouv.fr/fr/conseils-aux-voyageurs/" target="_blank" rel="noopener noreferrer">France Diplomatie</a> avant de voyager.
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
                        <span className="review-summary-count">{reviewCount} {reviewCount === 1 ? 'avis' : 'avis'}</span>
                      </div>
                    </div>
                    <div className="review-summary-right">
                      <span className="review-summary-label">Note globale</span>
                      <span className="review-summary-sublabel">des voyageurs Triply</span>
                    </div>
                  </div>
                )}

                {/* Contrôles : tri + bouton écrire (masqués si rien à afficher) */}
                {!showForm && (reviewCount > 0 || (user && !userReview)) && (
                  <div className="reviews-controls">
                    {reviewCount > 0 && (
                      <div className="reviews-sort-btns">
                        <button className={`reviews-sort-btn${sortBy === 'date' ? ' active' : ''}`} onClick={() => setSortBy('date')}>Plus récents</button>
                        <button className={`reviews-sort-btn${sortBy === 'votes' ? ' active' : ''}`} onClick={() => setSortBy('votes')}>Les plus utiles</button>
                      </div>
                    )}
                    {user && !userReview && (
                      <button className="review-write-btn" style={{ marginLeft: 'auto' }} onClick={() => setShowForm(true)}>✏️ Écrire un avis</button>
                    )}
                  </div>
                )}

                {!showForm && !user && (
                  <button className="review-login-prompt" onClick={() => setAuthModalOpen(true)}>
                    ✍️ Connectez-vous pour laisser un avis
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
                />
              </div>
            )}
          </div>
        </aside>
      </div>
    </>
  );
}
