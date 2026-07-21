import { useState, useEffect, useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";
import { COUNTRIES } from "../data/index";
import { localizeField } from "../lib/localizeCountry";
import { supabase } from "../lib/supabase";
import { useAuth } from "../context/AuthContext";
import { fetchTranslatedFields, translationKey } from "../lib/translateContent";
import CountryFlag from "./planning/CountryFlag";

const DESCRIPTION_MAX = 600;

// Onglet "Recommandations" de la fiche pays : "si vous avez aimé tel pays,
// vous aimerez aussi tel pays" (voir supabase/country_recommendations_v1.sql).
// Les recommandations sont regroupées par pays associé (les deux sens
// confondus : le pays ouvert peut être celui qu'on a aimé OU celui qu'on
// recommande), triées par nombre de personnes recommandantes — chaque
// recommandation individuelle garde son badge de direction pour ne pas
// perdre le sens d'origine.
export default function CountryRecommendations({ countryCode, onNavigateCountry, onCountLoaded }) {
  const { t, i18n } = useTranslation("app");
  const { user, setAuthModalOpen } = useAuth();

  const [recos, setRecos] = useState([]);
  const [profiles, setProfiles] = useState({});
  const [translatedDescs, setTranslatedDescs] = useState({});
  const [loading, setLoading] = useState(true);
  const [refreshKey, setRefreshKey] = useState(0);
  const [expanded, setExpanded] = useState(() => new Set());

  // Formulaire
  const [showForm, setShowForm] = useState(false);
  const [editingReco, setEditingReco] = useState(null);
  const [currentIsSource, setCurrentIsSource] = useState(true);
  const [otherCode, setOtherCode] = useState(null);
  const [otherSearch, setOtherSearch] = useState("");
  const [description, setDescription] = useState("");
  const [formError, setFormError] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const otherInputRef = useRef(null);

  const countryLabel = (code) => {
    const c = COUNTRIES[code];
    return c ? localizeField(c.name, i18n.language) : code;
  };
  const countryEmoji = (code) => COUNTRIES[code]?.emoji || "🌍";
  // Drapeau en image (Windows affiche "CN" au lieu de 🇨🇳, voir CountryFlag).
  const Flag = ({ code, size = 15 }) => <CountryFlag emoji={countryEmoji(code)} size={size} />;

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      const { data: rows } = await supabase
        .from("country_recommendations")
        .select("*")
        .or(`source_country_code.eq.${countryCode},target_country_code.eq.${countryCode}`)
        .order("created_at", { ascending: false });
      if (cancelled) return;
      // Filet de sécurité : une reco vers un pays retiré du site ne doit pas
      // produire une carte sans nom ni navigation possible.
      const valid = (rows || []).filter(
        (r) => COUNTRIES[r.source_country_code] && COUNTRIES[r.target_country_code]
      );
      setRecos(valid);
      setLoading(false);
      onCountLoaded?.(valid.length);

      const userIds = [...new Set(valid.map((r) => r.user_id))];
      if (userIds.length) {
        const { data: profileRows } = await supabase
          .from("profiles")
          .select("id, display_name")
          .in("id", userIds);
        if (!cancelled) {
          setProfiles(Object.fromEntries((profileRows || []).map((p) => [p.id, p.display_name])));
        }
      }
    })();
    return () => { cancelled = true; };
  }, [countryCode, refreshKey]);

  // Réinitialisation complète au changement de pays (l'onglet reste monté
  // quand on navigue d'une fiche pays à une autre via onNavigateCountry).
  useEffect(() => {
    setExpanded(new Set());
    setShowForm(false);
    setEditingReco(null);
    setDeletingId(null);
    setTranslatedDescs({});
  }, [countryCode]);

  // Traduction des descriptions dans la langue active (cache serveur, même
  // mécanique que les destinations communautaires — voir CountryPanel).
  useEffect(() => {
    if (!recos.length) { setTranslatedDescs({}); return; }
    let cancelled = false;
    (async () => {
      const items = recos.map((r) => ({
        contentType: "country_recommendation", contentId: r.id, field: "description", sourceText: r.description,
      }));
      const result = await fetchTranslatedFields(items, i18n.language);
      if (!cancelled) setTranslatedDescs(result);
    })();
    return () => { cancelled = true; };
  }, [recos, i18n.language]);

  const displayDesc = (r) =>
    translatedDescs[translationKey("country_recommendation", r.id, "description")] ?? r.description;

  const groups = useMemo(() => {
    const byCountry = {};
    for (const r of recos) {
      const other = r.source_country_code === countryCode ? r.target_country_code : r.source_country_code;
      (byCountry[other] ||= []).push(r);
    }
    return Object.entries(byCountry)
      .map(([code, items]) => ({ code, items, userCount: new Set(items.map((i) => i.user_id)).size }))
      .sort((a, b) => b.userCount - a.userCount || countryLabel(a.code).localeCompare(countryLabel(b.code), i18n.language));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recos, countryCode, i18n.language]);

  const otherCandidates = useMemo(() => {
    const q = otherSearch.trim().normalize("NFD").replace(/\p{Mn}/gu, "").toLowerCase();
    if (!q) return [];
    return Object.keys(COUNTRIES)
      .filter((code) => code !== countryCode)
      .map((code) => ({ code, name: countryLabel(code), emoji: countryEmoji(code) }))
      .filter((c) => c.name.normalize("NFD").replace(/\p{Mn}/gu, "").toLowerCase().includes(q))
      .sort((a, b) => a.name.localeCompare(b.name, i18n.language))
      .slice(0, 8);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [otherSearch, countryCode, i18n.language]);

  const openForm = (reco = null) => {
    if (!user) { setAuthModalOpen(true); return; }
    if (reco) {
      setEditingReco(reco);
      setCurrentIsSource(reco.source_country_code === countryCode);
      setOtherCode(reco.source_country_code === countryCode ? reco.target_country_code : reco.source_country_code);
      setDescription(reco.description);
    } else {
      setEditingReco(null);
      setCurrentIsSource(true);
      setOtherCode(null);
      setDescription("");
    }
    setOtherSearch("");
    setFormError(null);
    setShowForm(true);
  };

  const handleSubmit = async () => {
    if (!user) { setAuthModalOpen(true); return; }
    const desc = description.trim();
    if (!otherCode) { setFormError(t("recommendations.errNoCountry")); return; }
    if (!desc) { setFormError(t("recommendations.errNoDescription")); return; }
    setSubmitting(true);
    setFormError(null);

    const source = currentIsSource ? countryCode : otherCode;
    const target = currentIsSource ? otherCode : countryCode;
    // En édition, on modifie la ligne existante par id (la direction peut
    // avoir changé) ; en création, upsert sur la paire : re-recommander une
    // paire déjà recommandée met à jour sa description au lieu d'échouer sur
    // la contrainte d'unicité.
    const { error } = editingReco
      ? await supabase
          .from("country_recommendations")
          .update({ source_country_code: source, target_country_code: target, description: desc })
          .eq("id", editingReco.id)
      : await supabase
          .from("country_recommendations")
          .upsert(
            { user_id: user.id, source_country_code: source, target_country_code: target, description: desc },
            { onConflict: "user_id,source_country_code,target_country_code" }
          );
    setSubmitting(false);
    if (error) {
      // 23505 : en édition, changer la direction/le pays vers une paire qu'on
      // a DÉJÀ recommandée par ailleurs (l'update ne peut pas fusionner).
      setFormError(error.code === "23505" ? t("recommendations.errDuplicatePair") : t("recommendations.errGeneric"));
      return;
    }
    setShowForm(false);
    setEditingReco(null);
    setRefreshKey((k) => k + 1);
  };

  const handleDelete = async (recoId) => {
    const { error } = await supabase.from("country_recommendations").delete().eq("id", recoId);
    setDeletingId(null);
    if (!error) setRefreshKey((k) => k + 1);
  };

  const toggleExpanded = (code) => {
    setExpanded((prev) => {
      const s = new Set(prev);
      if (s.has(code)) s.delete(code); else s.add(code);
      return s;
    });
  };

  const sourceName = currentIsSource ? countryLabel(countryCode) : (otherCode ? countryLabel(otherCode) : "…");
  const targetName = currentIsSource ? (otherCode ? countryLabel(otherCode) : "…") : countryLabel(countryCode);

  return (
    <div className="reco-tab">
      <div className="reco-header">
        <p className="reco-intro">{t("recommendations.intro", { name: countryLabel(countryCode) })}</p>
        <button className="reco-add-btn" onClick={() => openForm()}>
          {user ? t("recommendations.addButton") : t("recommendations.loginToAdd")}
        </button>
      </div>

      {loading ? (
        <p className="reco-loading">{t("recommendations.loading")}</p>
      ) : groups.length === 0 ? (
        <div className="reco-empty">
          <span className="reco-empty-icon">🧭</span>
          <p>{t("recommendations.emptyLine1", { name: countryLabel(countryCode) })}</p>
          <p className="reco-empty-sub">{t("recommendations.emptyLine2")}</p>
        </div>
      ) : (
        <div className="reco-list">
          {groups.map(({ code, items, userCount }) => {
            const isExpanded = expanded.has(code);
            const visibleItems = isExpanded ? items : items.slice(0, 1);
            return (
              <div key={code} className="reco-card">
                <div className="reco-card-head">
                  <span className="reco-card-flagtile"><Flag code={code} size={24} /></span>
                  <div className="reco-card-headinfo">
                    <span className="reco-card-name">{countryLabel(code)}</span>
                    <span className="reco-count-badge" title={t("recommendations.countTitle")}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                      {t("recommendations.recommendersCount", { count: userCount })}
                    </span>
                  </div>
                  <button
                    className="reco-card-open"
                    onClick={() => onNavigateCountry?.(code)}
                    title={t("recommendations.openCountryTitle", { name: countryLabel(code) })}
                  >
                    {t("recommendations.openCountryShort")}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
                  </button>
                </div>
                <div className="reco-card-body">
                  {visibleItems.map((r) => {
                    const authorName = profiles[r.user_id] || t("recommendations.travelerFallback");
                    return (
                    <div key={r.id} className="reco-item">
                      <div className="reco-item-direction">
                        <span className="reco-direction-chip">
                          <Flag code={r.source_country_code} /> {countryLabel(r.source_country_code)}
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
                          <Flag code={r.target_country_code} /> {countryLabel(r.target_country_code)}
                        </span>
                      </div>
                      <p className="reco-item-desc">{displayDesc(r)}</p>
                      <div className="reco-item-meta">
                        <span className="reco-item-avatar" aria-hidden="true">{authorName.charAt(0).toUpperCase()}</span>
                        <span className="reco-item-author">
                          {t("recommendations.byAuthor", { name: authorName })}
                        </span>
                        {user?.id === r.user_id && (
                          deletingId === r.id ? (
                            <span className="review-confirm-delete reco-item-actions">
                              <span className="review-confirm-msg">{t("recommendations.confirmDeleteMessage")}</span>
                              <button className="review-confirm-no" onClick={() => setDeletingId(null)}>{t("common:no")}</button>
                              <button className="review-confirm-yes" onClick={() => handleDelete(r.id)}>{t("common:yes")}</button>
                            </span>
                          ) : (
                            <span className="reco-item-actions">
                              <button className="reco-item-btn" onClick={() => openForm(r)}>
                                {t("recommendations.editButton")}
                              </button>
                              <button className="reco-item-btn reco-item-btn--danger" onClick={() => setDeletingId(r.id)}>
                                {t("recommendations.deleteButton")}
                              </button>
                            </span>
                          )
                        )}
                      </div>
                    </div>
                    );
                  })}
                  {items.length > 1 && (
                    <button className="reco-expand-btn" onClick={() => toggleExpanded(code)}>
                      {isExpanded
                        ? t("recommendations.showLess")
                        : t("recommendations.showMore", { count: items.length - 1 })}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {showForm && (
        <div className="reco-form-overlay" onClick={(e) => e.target === e.currentTarget && setShowForm(false)}>
          <div className="reco-form-modal">
            <div className="reco-form-header">
              <h3>{editingReco ? t("recommendations.formTitleEdit") : t("recommendations.formTitleNew")}</h3>
              <button className="reco-form-close" onClick={() => setShowForm(false)} aria-label={t("recommendations.closeForm")}>✕</button>
            </div>

            {/* Phrase à trous : le pays ouvert occupe forcément un des deux
                côtés, le switch ⇄ échange les deux côtés. Le côté manquant est
                un bouton qui renvoie vers le champ de recherche ci-dessous. */}
            <div className="reco-form-sentence">
              <span className="reco-sentence-part">{t("recommendations.sentenceIfLiked")}</span>
              {currentIsSource || otherCode ? (
                <span className={`reco-sentence-country${currentIsSource ? " reco-sentence-country--fixed" : ""}`}>
                  {currentIsSource ? <Flag code={countryCode} /> : <Flag code={otherCode} />} {sourceName}
                </span>
              ) : (
                <button type="button" className="reco-sentence-slot" onClick={() => otherInputRef.current?.focus()}>
                  <span className="reco-sentence-slot-plus">+</span> {t("recommendations.pickCountrySlot")}
                </button>
              )}
              <button
                className="reco-swap-btn"
                onClick={() => setCurrentIsSource((v) => !v)}
                title={t("recommendations.swapTitle")}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"/></svg>
              </button>
              <span className="reco-sentence-part">{t("recommendations.sentenceYouWillLike")}</span>
              {!currentIsSource || otherCode ? (
                <span className={`reco-sentence-country${!currentIsSource ? " reco-sentence-country--fixed" : ""}`}>
                  {!currentIsSource ? <Flag code={countryCode} /> : <Flag code={otherCode} />} {targetName}
                </span>
              ) : (
                <button type="button" className="reco-sentence-slot" onClick={() => otherInputRef.current?.focus()}>
                  <span className="reco-sentence-slot-plus">+</span> {t("recommendations.pickCountrySlot")}
                </button>
              )}
            </div>

            <div className="reco-form-field">
              <label>{t("recommendations.otherCountryLabel")}</label>
              {!otherCode && <p className="reco-form-hint">{t("recommendations.otherCountryHint")}</p>}
              {otherCode ? (
                <div className="reco-selected-country">
                  <span><Flag code={otherCode} /> {countryLabel(otherCode)}</span>
                  <button className="reco-item-btn" onClick={() => { setOtherCode(null); setOtherSearch(""); }}>
                    {t("recommendations.changeCountry")}
                  </button>
                </div>
              ) : (
                <div className="reco-country-search">
                  <input
                    ref={otherInputRef}
                    type="text"
                    value={otherSearch}
                    onChange={(e) => setOtherSearch(e.target.value)}
                    placeholder={t("recommendations.searchCountryPlaceholder")}
                    autoFocus
                  />
                  {otherCandidates.length > 0 && (
                    <div className="reco-country-results">
                      {otherCandidates.map((c) => (
                        <button key={c.code} className="reco-country-result" onClick={() => { setOtherCode(c.code); setOtherSearch(""); }}>
                          <CountryFlag emoji={c.emoji} size={15} /> {c.name}
                        </button>
                      ))}
                    </div>
                  )}
                  {otherSearch.trim() && otherCandidates.length === 0 && (
                    <p className="reco-country-noresult">{t("recommendations.noCountryFound")}</p>
                  )}
                </div>
              )}
            </div>

            <div className="reco-form-field">
              <label>{t("recommendations.descriptionLabel")}</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value.slice(0, DESCRIPTION_MAX))}
                placeholder={t("recommendations.descriptionPlaceholder")}
                rows={4}
              />
              <span className="reco-char-count">{description.length} / {DESCRIPTION_MAX}</span>
            </div>

            {formError && <p className="reco-form-error">{formError}</p>}

            <div className="reco-form-actions">
              <button className="reco-btn-ghost" onClick={() => setShowForm(false)} disabled={submitting}>
                {t("recommendations.cancelButton")}
              </button>
              <button className="reco-btn-primary" onClick={handleSubmit} disabled={submitting}>
                {submitting
                  ? t("recommendations.submitting")
                  : editingReco ? t("recommendations.updateButton") : t("recommendations.publishButton")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
