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
import CountryRecommendations from "./CountryRecommendations";
import { callAdminAction } from "../lib/admin";
import ReportModal from "./ReportModal";
import { monthAbbrev } from "../lib/monthAbbrev";
import { localizeAmountString } from "../lib/currency";
import { useSettings } from "../context/SettingsContext";
import CountryFlag from "./planning/CountryFlag";
import { fetchTranslatedFields, translationKey } from "../lib/translateContent";
import { translateTag } from "../lib/tagTranslations";
import { useModalHistory } from "../hooks/useModalHistory";
import useIsMobile from "../hooks/useIsMobile";

const RATING_EMOJI = { good: "😊", ok: "😐", bad: "😞" };
const BUDGET_ICONS = ["🎒", "🏨", "💎"];

// Découpe "Pékin (4j) → Xi'an (2j) → ..." en étapes { name, days } pour
// l'affichage en frise plutôt qu'en une seule phrase à parcourir de gauche
// à droite. Tolérant : si le format ne matche pas (pas de "→", pas de durée
// entre parenthèses), on retombe sur une étape unique avec le texte brut.
function parseRouteSegments(route) {
  if (!route) return [];
  return route.split("→").map((s) => s.trim()).filter(Boolean).map((seg) => {
    const m = seg.match(/^(.*?)\s*\(([^)]+)\)\s*$/);
    return m ? { name: m[1].trim(), days: m[2].trim() } : { name: seg, days: null };
  });
}

// Ordre des sections sur mobile (scroll continu). Sert à monter d'un coup
// toutes les sections *avant* une cible de navigation explicite (hamburger,
// CTA, deep-link) : sans ça, un scrollIntoView animé peut "rater" sa cible
// si une section-squelette au-dessus grandit (montage différé) pendant
// l'animation, ce qui repousse la position réelle de la cible.
const SECTION_ORDER = ["overview", "weather", "cost", "destinations", "practical", "reviews", "recommendations"];

const MAX_TEMP = 35;
const MAX_RAIN = 250;

export default function CountryPanel({ countryCode, onClose, isFavorite, onToggleFavorite, isVisited, onToggleVisited, onCompare, initialTab, initialExtra, onNavigateCountry, alertIds = new Map(), onAdminAction }) {
  useModalHistory(onClose);
  useSettings(); // abonnement devise : les montants affichés sont convertis
  const { t, i18n } = useTranslation("app");
  const data = useMemo(() => localizeCountry(COUNTRIES[countryCode], i18n.language), [countryCode, i18n.language]);
  const { user, isAdmin, setAuthModalOpen } = useAuth();
  // Desktop : système d'onglets classique (une seule section montée à la fois).
  // Mobile : défilement continu (toutes les sections montées, empilées) — voir
  // showSection()/navigateToSection() ci-dessous. `activeTab` reste utilisé sur
  // mobile pour la logique interne existante (visitedTabs, reset recherche...)
  // mais ne conditionne plus le montage des sections.
  // Seuil relevé à 1024px (tablette incluse) : l'affichage "tablette" de la
  // fiche pays (769-1024px) n'était pas maintenu au même rythme que le mode
  // mobile et accumulait des régressions — jusqu'à ce qu'il soit repris, on
  // bascule ces largeurs sur le rendu mobile (défilement continu, déjà à
  // jour). Les petits laptops (généralement ≥1280px) restent sur le rendu PC.
  const isMobile = useIsMobile(1024);
  const [drawerOpen, setDrawerOpen] = useState(false);
  // Barre du haut : le hero défile avec le contenu (voir plus bas), donc
  // son titre/description finirait par passer derrière la barre
  // transparente si elle restait affichée en permanence.
  // - PC : visible uniquement tout en haut de la fiche (scrollTop === 0),
  //   masquée dès qu'on scrolle, jamais de réapparition en remontant.
  // - Mobile : masquée en scrollant vers le bas, réapparaît en remontant
  //   ou en haut (plus de place pour le contenu — comportement différent
  //   assumé, pas un oubli).
  // Seuil pour ignorer les micro-scrolls (rebond iOS...), mobile uniquement.
  const [topbarHidden, setTopbarHidden] = useState(false);
  const lastScrollTopRef = useRef(0);
  const SCROLL_HIDE_THRESHOLD = 8;
  const handlePanelBodyScroll = () => {
    const top = panelBodyRef.current?.scrollTop ?? 0;
    if (!isMobile) {
      setTopbarHidden(top > 0);
      return;
    }
    const delta = top - lastScrollTopRef.current;
    if (top <= 0) {
      setTopbarHidden(false);
    } else if (delta > SCROLL_HIDE_THRESHOLD) {
      setTopbarHidden(true);
      lastScrollTopRef.current = top;
    } else if (delta < -SCROLL_HIDE_THRESHOLD) {
      setTopbarHidden(false);
      lastScrollTopRef.current = top;
    }
  };
  const [activeTab, setActiveTab] = useState(initialTab || "overview");
  // Montage différé (mobile uniquement) : évite de monter les 6 sections
  // lourdes (destinations, avis...) et de déclencher toutes leurs requêtes
  // d'un coup à l'ouverture — chaque section ne se monte réellement que
  // lorsqu'elle approche de l'écran (IntersectionObserver) ou qu'on y
  // navigue explicitement (hamburger, CTA, deep-link). "overview" est
  // toujours monté (c'est le contenu visible à l'ouverture).
  const [mountedSections, setMountedSections] = useState(() => new Set(["overview", initialTab || "overview"]));
  const sectionRefsMap = useRef({});
  const [recoCount, setRecoCount] = useState(0);
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
  // Position de scroll dans la liste des destinations avant d'ouvrir une
  // fiche (desktop) — on la restaure au retour au lieu de rescroller depuis
  // le haut de l'onglet.
  const destScrollPosRef = useRef(0);

  const openDestination = (dest) => {
    if (panelBodyRef.current) destScrollPosRef.current = panelBodyRef.current.scrollTop;
    setSelectedDest(dest);
  };

  const closeDestination = () => {
    setSelectedDest(null);
    requestAnimationFrame(() => {
      if (panelBodyRef.current) panelBodyRef.current.scrollTop = destScrollPosRef.current;
    });
  };

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
  // Mobile uniquement : la recherche démarre repliée (gros bouton "Rechercher"
  // pleine largeur + bouton "Ajouter" en taille normale) et se déplie en champ
  // de saisie (+ bouton "+" compact) au clic, pour éviter le champ trop
  // étriqué observé quand les deux se partageaient la ligne d'entrée.
  const [destSearchExpanded, setDestSearchExpanded] = useState(false);
  const destSearchInputRef = useRef(null);
  const DEST_PAGE_SIZE = 10;
  // Pagination "voir plus" de la liste principale (statiques + communautaires
  // des autres, triées par note) — pas de la recherche, qui montre toujours
  // tous les résultats correspondants d'un coup.
  const [destVisibleCount, setDestVisibleCount] = useState(DEST_PAGE_SIZE);
  const [userDestinations, setUserDestinations] = useState([]);
  // Version affichée (nom + description traduits) des destinations communautaires,
  // avec cache serveur — voir api/get-translated-content.js. `userDestinations`
  // reste inchangée (texte d'origine) : nécessaire pour existingDestinations
  // (détection de doublon à la soumission) et pour l'édition (DestinationForm
  // doit repartir du texte original, pas d'une traduction).
  const [translatedUserDestinations, setTranslatedUserDestinations] = useState([]);
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
    setDestSearchExpanded(false);
    setDestVisibleCount(DEST_PAGE_SIZE);
  };

  // Une section est visible si : on est en mode desktop (onglets) et c'est
  // l'onglet actif, OU on est en mode mobile (toutes les sections empilées).
  const showSection = (id) => isMobile || activeTab === id;

  // Sur mobile, une section montée n'affiche son contenu réel que si elle a
  // été marquée "mountedSections" (par l'IntersectionObserver ou une
  // navigation explicite) — sinon elle affiche un squelette léger. Sur
  // desktop, aucune section n'est jamais montée sans être active, donc pas
  // besoin de ce garde-fou (toujours vrai).
  const shouldRenderContent = (id) => !isMobile || mountedSections.has(id);

  // Monte toutes les sections de "overview" jusqu'à `id` inclus (voir le
  // commentaire sur SECTION_ORDER) — utilisé avant tout scroll programmatique.
  const markMountedUpTo = (id) => {
    const idx = SECTION_ORDER.indexOf(id);
    if (idx < 0) return;
    setMountedSections((prev) => {
      const next = new Set(prev);
      for (let i = 0; i <= idx; i++) next.add(SECTION_ORDER[i]);
      return next;
    });
  };

  // Point d'entrée unique pour "aller vers une section" (bouton du hero,
  // tiroir hamburger) : change d'onglet sur desktop, défile jusqu'à l'ancre
  // sur mobile (les sections y sont déjà toutes montées, mais on force le
  // montage du contenu réel immédiatement plutôt que d'attendre l'IntersectionObserver).
  const navigateToSection = (id) => {
    if (isMobile) {
      setDrawerOpen(false);
      markMountedUpTo(id);
      requestAnimationFrame(() => {
        document.getElementById(`panel-section-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    } else {
      handleTabChange(id);
    }
  };

  // Cas particulier : ouvrir une destination précise (mini-carte de l'Aperçu)
  // — sur mobile la section Destinations est déjà montée, il suffit d'y défiler.
  const goToDestination = (dest) => {
    openDestination(dest);
    if (isMobile) {
      setDrawerOpen(false);
      markMountedUpTo("destinations");
      requestAnimationFrame(() => document.getElementById("panel-section-destinations")?.scrollIntoView({ behavior: "smooth", block: "start" }));
    } else {
      setActiveTab("destinations");
      setVisitedTabs((prev) => { const s = new Set(prev); s.add("destinations"); return s; });
    }
  };

  useEffect(() => {
    // Le panneau n'est pas remonté quand on change juste de pays (même
    // instance réutilisée, cf. App.jsx) : sans ce reset, le scroll physique
    // d'une visite précédente (ex. sur Destinations) reste tel quel et le
    // nouveau pays s'affiche déjà scrollé au même endroit.
    panelBodyRef.current?.scrollTo({ top: 0 });
    lastScrollTopRef.current = 0;
    setTopbarHidden(false);
    const tab = initialTab || "overview";
    setActiveTab(tab);
    setVisitedTabs(new Set([tab]));
    setMountedSections(new Set(["overview", tab]));
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
    setDestSearchExpanded(false);
    setDestVisibleCount(DEST_PAGE_SIZE);
    setRecoCount(0);
  }, [countryCode, initialTab]);

  // Deep-link vers un onglet précis (profil, notifications) : sur mobile
  // toutes les sections sont déjà montées en continu, donc on défile
  // directement vers la bonne au lieu de changer d'onglet. On force aussi
  // son montage immédiat (sans attendre l'IntersectionObserver).
  // Si un avis précis est visé (initialExtra.reviewId), on laisse le scroll
  // fin de ReviewList (document.getElementById('review-'+id) + scrollIntoView,
  // avec retry) faire tout le travail — sinon les deux scrolls s'enchaînent
  // et on voit un petit "sursaut" visuel.
  useEffect(() => {
    if (!isMobile || !initialTab) return;
    markMountedUpTo(initialTab);
    if (initialExtra?.reviewId) return;
    const id = requestAnimationFrame(() => {
      document.getElementById(`panel-section-${initialTab}`)?.scrollIntoView({ behavior: "auto", block: "start" });
    });
    return () => cancelAnimationFrame(id);
  }, [isMobile, initialTab, initialExtra, countryCode]);

  // Montage différé mobile : observe les sections pas encore montées et les
  // monte réellement (contenu + requêtes) dès qu'elles approchent de l'écran
  // (marge de 600px pour que ça reste fluide au scroll, sans pop-in visible).
  useEffect(() => {
    if (!isMobile) return;
    const pending = Object.entries(sectionRefsMap.current).filter(([id, el]) => el && !mountedSections.has(id));
    if (!pending.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const toMount = entries.filter((e) => e.isIntersecting).map((e) => e.target.dataset.sectionId);
        if (!toMount.length) return;
        setMountedSections((prev) => {
          const next = new Set(prev);
          toMount.forEach((id) => next.add(id));
          return next;
        });
        entries.forEach((e) => { if (e.isIntersecting) observer.unobserve(e.target); });
      },
      { rootMargin: "600px 0px" }
    );
    pending.forEach(([, el]) => observer.observe(el));
    return () => observer.disconnect();
  }, [isMobile, mountedSections, countryCode]);

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

  // Traduction en lot des noms/descriptions des destinations communautaires
  // dans la langue active (cache serveur, voir api/get-translated-content.js).
  useEffect(() => {
    if (!userDestinations.length) { setTranslatedUserDestinations([]); return; }
    const lang = i18n.language;
    let cancelled = false;
    (async () => {
      const items = userDestinations.flatMap((d) => [
        { contentType: 'user_destination', contentId: d.id, field: 'name', sourceText: d.name },
        { contentType: 'user_destination', contentId: d.id, field: 'description', sourceText: d.description },
      ]);
      const result = await fetchTranslatedFields(items, lang);
      if (cancelled) return;
      setTranslatedUserDestinations(userDestinations.map((d) => ({
        ...d,
        name: result[translationKey('user_destination', d.id, 'name')] ?? d.name,
        description: result[translationKey('user_destination', d.id, 'description')] ?? d.description,
      })));
    })();
    return () => { cancelled = true; };
  }, [userDestinations, i18n.language]);

  // Auto-select destination + scroll to review from external navigation (profile/notif)
  useEffect(() => {
    if (!initialExtra?.destId) return;
    // Destinations statiques
    if (data?.destinations) {
      const dest = data.destinations.find((d) => String(d.id) === initialExtra.destId);
      if (dest) { setSelectedDest(dest); return; }
    }
    // Destinations communautaires (UUID)
    if (translatedUserDestinations.length) {
      const dest = translatedUserDestinations.find((d) => d.id === initialExtra.destId);
      if (dest) setSelectedDest(dest);
    }
  }, [initialExtra, data, translatedUserDestinations]);

  // Auto-select community destination from profile navigation
  useEffect(() => {
    if (!initialExtra?.commDestId || !translatedUserDestinations.length) return;
    const dest = translatedUserDestinations.find(d => d.id === initialExtra.commDestId);
    if (dest) setSelectedDest(dest);
  }, [initialExtra, translatedUserDestinations]);

  // Compteur du libellé de l'onglet Recommandations, chargé dès l'ouverture
  // de la fiche (comme le compteur d'avis) : le contenu de l'onglet, lui,
  // reste chargé à la demande par CountryRecommendations (qui remet ce
  // compteur à jour après un ajout/une suppression via onCountLoaded).
  useEffect(() => {
    let cancelled = false;
    supabase
      .from('country_recommendations')
      .select('id', { count: 'exact', head: true })
      .or(`source_country_code.eq.${countryCode},target_country_code.eq.${countryCode}`)
      .then(({ count }) => { if (!cancelled) setRecoCount(count || 0); });
    return () => { cancelled = true; };
  }, [countryCode]);

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
    // Destinations + mustSee : seulement si l'onglet a été ouvert (desktop) —
    // sur mobile, la section Destinations est toujours montée (scroll continu),
    // donc toujours "visitée".
    if (isMobile || visitedTabs.has("destinations") || activeTab === "destinations") {
      // Card images only — mustSee loads only when a destination is selected
      data.destinations.forEach((d) => d.wikipedia && slugs.add(d.wikipedia));
    }
    // mustSee images lazy: only load for the currently opened destination
    if (selectedDest && !selectedDest.isUserDest) {
      selectedDest.mustSee?.forEach((s) => s.wikipedia && slugs.add(s.wikipedia));
    }
    return [...slugs];
  }, [data, visitedTabs, activeTab, selectedDest, isMobile]);

  const { images: wikiImages, meta: wikiMeta } = useWikipediaImages(allSlugs);
  const img = (slug) => wikiImages[slug] ?? null;
  const imgMeta = (slug) => wikiMeta[slug];

  if (!data) return null;

  const allDestinations = [...(data.destinations ?? []), ...userDestinations];

  const filteredAllDests = useMemo(() => {
    const normalize = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
    const q = normalize(destSearch.trim());
    if (!q) return null;
    return [...(data.destinations ?? []), ...translatedUserDestinations].filter(d => normalize(d.name).includes(q));
  }, [destSearch, data.destinations, translatedUserDestinations]);

  const tabs = [
    { id: "overview",      label: t("countryPanel.tabOverview") },
    { id: "weather",       label: t("countryPanel.tabWeather") },
    { id: "cost",          label: t("countryPanel.tabCost") },
    { id: "destinations",  label: t("countryPanel.tabDestinations") },
    { id: "practical",     label: t("countryPanel.tabPractical") },
    { id: "reviews",       label: reviewCount > 0 ? t("countryPanel.tabReviewsWithCount", { count: reviewCount }) : t("countryPanel.tabReviews") },
    { id: "recommendations", label: recoCount > 0 ? t("countryPanel.tabRecommendationsWithCount", { count: recoCount }) : t("countryPanel.tabRecommendations") },
  ];

  const cityData = data.weatherCities[activeCity];
  const tripBudget = data.costOfLiving.tripEstimate.budgets[activeBudget];

  // En-tête de section (mobile uniquement) : en scroll continu les onglets ne
  // nomment plus les parties — chaque section affiche donc son propre grand
  // titre (repris du libellé d'onglet, avec son emoji) + un sous-titre,
  // comme sur la maquette mobile de référence.
  const sectionHead = (id) => {
    const tb = tabs.find((x) => x.id === id);
    return (
      <div className="panel-mobile-section-head">
        <h2 className="panel-mobile-section-title">{tb?.label}</h2>
        <p className="panel-mobile-section-sub">{t(`countryPanel.sectionSub_${id}`)}</p>
      </div>
    );
  };

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

          {/* Tiroir hamburger (mobile uniquement) : liste des sections, le clic
              défile jusqu'à l'ancre correspondante (toutes les sections sont
              montées en continu sur mobile, cf. showSection()). */}
          {isMobile && drawerOpen && (
            <>
              <div className="panel-drawer-overlay" onClick={() => setDrawerOpen(false)} />
              <nav className="panel-drawer">
                <span className="panel-drawer-title">{t("countryPanel.sectionsMenuTitle")}</span>
                {tabs.map((tb) => (
                  <button key={tb.id} className="panel-drawer-item" onClick={() => navigateToSection(tb.id)}>
                    {tb.label}
                  </button>
                ))}
              </nav>
            </>
          )}

          {/* Body */}
          <div className="panel-body" ref={panelBodyRef} onScroll={handlePanelBodyScroll}>

            {/* Barre du haut : navigation (onglets desktop / hamburger mobile)
                + pilule d'actions (comparer, visité, favori, fermer). Premier
                enfant de .panel-body (le conteneur qui défile) en position
                sticky — plus robuste qu'un position:absolute sur un frère du
                conteneur scrollable, qui pouvait se désépingler sur certaines
                fenêtres courtes en hauteur.
                .panel-topbar (l'élément sticky) est une boîte à hauteur
                nulle (overflow: visible) : le vrai contenu vit dans
                .panel-topbar-inner. Un margin-bottom négatif sur l'élément
                sticky lui-même (tenté avant) fausse le calcul de sa plage
                d'ancrage dans certains navigateurs — elle se désépingle en
                milieu de page dès que la fiche est courte. Hauteur nulle
                évite ce piège tout en ne réservant aucune place dans le
                flux (le hero suivant n'a donc pas besoin d'être décalé). */}
            <div className="panel-topbar">
              <div className={`panel-topbar-inner${topbarHidden ? " panel-topbar-inner--hidden" : ""}`}>
                {isMobile ? (
                  <button
                    className="panel-hamburger-btn"
                    onClick={() => setDrawerOpen((v) => !v)}
                    aria-label={t("countryPanel.sectionsMenuAriaLabel")}
                    aria-expanded={drawerOpen}
                  >
                    ☰
                  </button>
                ) : (
                  <nav className="panel-tabs">
                    {tabs.map((tb) => (
                      <button
                        key={tb.id}
                        className={`tab-btn${activeTab === tb.id ? " active" : ""}`}
                        onClick={() => handleTabChange(tb.id)}
                      >
                        {tb.label}
                      </button>
                    ))}
                  </nav>
                )}
                <div className="panel-actions">
                  <button
                    className="panel-compare-btn"
                    onClick={(e) => { e.stopPropagation(); onCompare?.(); }}
                    aria-label={t("countryPanel.compareAriaLabel")}
                  >
                    <span aria-hidden="true">⚖</span>
                    <span className="panel-compare-label">{t("countryPanel.compareButton")}</span>
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
                  <span className="panel-actions-sep" />
                  <button className="panel-close" onClick={(e) => { e.stopPropagation(); onClose(); }} aria-label={t("common:actions.close")}>✕</button>
                </div>
              </div>
            </div>

            {/* Header / hero — DANS la zone scrollable : il défile avec le
                contenu au lieu de rester figé en haut (maquette de référence).
                Sur l'Aperçu il est riche (grand titre + description + CTA sur
                l'image fondue) ; sur les autres onglets, version compacte. */}
            <div className={`panel-header${showSection("overview") ? " panel-header--full" : ""}`}>
              <WikiImage src={img(data.destinations[0].wikipedia)} meta={imgMeta(data.destinations[0].wikipedia)} alt={data.name} className="panel-header-bg" />
              <div className="panel-header-overlay" />
              <div className="panel-header-content">
                <div className="panel-name-row">
                  <h1 className="panel-title">{data.name}</h1>
                  <span className="panel-emoji"><CountryFlag emoji={data.emoji} size={34} /></span>
                </div>
                <div className="panel-meta">
                  <span className="panel-meta-chip">🏙 {data.capital}</span>
                  <span className="panel-meta-chip">💬 {data.language}</span>
                  <span className="panel-meta-chip">💴 {data.currency}</span>
                </div>
                {showSection("overview") && (
                  <>
                    <p className="country-description panel-hero-description">{data.description}</p>
                    <button className="panel-hero-cta" onClick={() => navigateToSection("destinations")}>
                      {t("countryPanel.heroCta")}
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* ── OVERVIEW ── */}
            {showSection("overview") && (
              <div id="panel-section-overview" className="tab-content panel-mobile-section">
                <div>
                  <h3 className="section-title section-title-lg">{t("countryPanel.sectionWhenToGo")}</h3>
                  {isMobile && <p className="panel-mobile-section-sub">{t("countryPanel.sectionSubWhenToGo")}</p>}
                </div>
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

                <div>
                  <div className="dest-preview-head">
                    <h3 className="section-title section-title-lg">{t("countryPanel.topDestinations")}</h3>
                    <button className="panel-link-btn" onClick={() => navigateToSection("destinations")}>
                      {t("countryPanel.seeAllDestinations")} →
                    </button>
                  </div>
                  {isMobile && <p className="panel-mobile-section-sub">{t("countryPanel.sectionSubTopDestinations")}</p>}
                </div>
                <div className="dest-grid-preview">
                  {data.destinations.slice(0, 3).map((dest) => (
                    <div
                      key={dest.id}
                      className="dest-card-mini"
                      onClick={() => goToDestination(dest)}
                    >
                      <WikiImage src={img(dest.wikipedia)} meta={imgMeta(dest.wikipedia)} alt={dest.name} className="dest-card-mini-img" />
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
            {showSection("weather") && (
              <div
                id="panel-section-weather"
                className="tab-content panel-mobile-section"
                ref={(el) => { sectionRefsMap.current.weather = el; }}
                data-section-id="weather"
              >
              {isMobile && sectionHead("weather")}
              {shouldRenderContent("weather") ? (<>
                {/* Global bilan */}
                <div className="bilan-section">
                  <div className="bilan-head">
                    <h3 className="section-title section-title-lg">{t("countryPanel.monthlyOverviewByCity")}</h3>
                    <div className="bilan-legend-row">
                      <span className="bilan-chip bilan-chip-good"><span className="bilan-dot good" />{t("search.legendIdeal")}</span>
                      <span className="bilan-chip bilan-chip-ok"><span className="bilan-dot ok" />{t("countryPanel.legendAcceptable")}</span>
                      <span className="bilan-chip bilan-chip-bad"><span className="bilan-dot bad" />{t("countryPanel.legendNotRecommended")}</span>
                    </div>
                  </div>
                  <p className="bilan-note">{t("countryPanel.weatherFactorsNote")}</p>
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
                          <span className="bilan-city-avatar">{idx + 1}</span>
                          <span className="bilan-city-name" title={city.name}>{city.name}</span>
                        </div>
                        {city.data.map((m) => {
                          const r = weatherRating(m.temp, m.rain);
                          return (
                            <div key={m.month} className={`bilan-cell bilan-${r}`} title={`${m.temp}°C, ${m.rain}mm`}>
                              <span className="bilan-cell-emoji">{RATING_EMOJI[r]}</span>
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>

                {/* City selector */}
                <h3 className="section-title section-title-lg">{t("countryPanel.detailByCity")}</h3>
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

                <div className="weather-chart-card">
                  <div className="weather-chart">
                    {(() => {
                      const cityMaxRain = Math.max(...cityData.data.map(m => m.rain), MAX_RAIN);
                      return cityData.data.map((m, i) => {
                      const maxTemp = 35;
                      const rainH = Math.round((m.rain / cityMaxRain) * 80);
                      const tempH = Math.max(Math.round(((m.temp + 5) / (maxTemp + 5)) * 80), 4);
                      return (
                        <div key={m.month} className="weather-month">
                          <span className="weather-icon">{m.icon}</span>
                          <div className="weather-bars">
                            <div className="bar bar-rain" style={{ height: `${rainH}px` }} title={`${m.rain} mm`} />
                            <div className="bar bar-temp" style={{ height: `${tempH}px` }} title={`${m.temp}°C`} />
                          </div>
                          <span className="weather-temp">{m.temp}°</span>
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
              </>) : <div className="panel-section-skeleton" />}
              </div>
            )}

            {/* ── COST OF LIVING ── */}
            {showSection("cost") && (
              <div
                id="panel-section-cost"
                className="tab-content panel-mobile-section"
                ref={(el) => { sectionRefsMap.current.cost = el; }}
                data-section-id="cost"
              >
              {isMobile && sectionHead("cost")}
              {shouldRenderContent("cost") ? (<>
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
                      <span className="cost-exchange-icon-badge"><span className="cost-exchange-icon">💱</span></span>
                      <span className="cost-exchange-label">{t("countryPanel.exchangeRateLabel")}</span>
                      <span className="cost-exchange-value">{data.costOfLiving.exchangeRate}</span>
                    </div>

                    <div className="budget-summary">
                      {data.costOfLiving.budgetSummary.map((b, i) => (
                        <div key={b.type} className="budget-card" style={{ "--budget-color": b.color }}>
                          <span className="budget-card-icon">{BUDGET_ICONS[i % BUDGET_ICONS.length]}</span>
                          <div className="budget-type">{b.type}</div>
                          <div className="budget-daily">{localizeAmountString(b.daily)}</div>
                          <div className="budget-desc">{b.desc}</div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* ── Estimation ── */}
                {costSubTab === "estimate" && (
                  <div className="trip-estimate">
                    <h3 className="section-title section-title-lg">
                      {t("countryPanel.estimateTitle", { duration: data.costOfLiving.tripEstimate.duration })}
                    </h3>

                    <div className="trip-route-timeline">
                      {parseRouteSegments(data.costOfLiving.tripEstimate.route).flatMap((seg, i, arr) => [
                        <div key={`stop-${i}`} className="trip-route-stop">
                          <span className="trip-route-stop-name">{seg.name}</span>
                          {seg.days && <span className="trip-route-stop-days">{seg.days}</span>}
                        </div>,
                        i < arr.length - 1
                          ? <span key={`arrow-${i}`} className="trip-route-arrow">→</span>
                          : null,
                      ])}
                    </div>

                    <div className="trip-budget-tabs">
                      {data.costOfLiving.tripEstimate.budgets.map((b, i) => (
                        <button
                          key={b.type}
                          className={`trip-budget-tab${activeBudget === i ? " active" : ""}`}
                          style={{ "--tab-color": b.color }}
                          onClick={() => setActiveBudget(i)}
                        >
                          <span className="trip-budget-tab-icon">{BUDGET_ICONS[i % BUDGET_ICONS.length]}</span>
                          {b.type}
                        </button>
                      ))}
                    </div>

                    <div className="trip-budget-card" style={{ "--budget-color": tripBudget.color }}>
                      <div className="trip-total">
                        <span className="trip-total-icon">🧾</span>
                        <span className="trip-total-label">{t("countryPanel.totalEstimated")}</span>
                        <span className="trip-total-value">{localizeAmountString(tripBudget.total)}</span>
                      </div>
                      <div className="trip-breakdown">
                        {tripBudget.breakdown.map((item) => (
                          <div key={item.label} className="trip-line">
                            <span className="trip-line-label">{item.label}</span>
                            <span className="trip-line-amount">{localizeAmountString(item.amount)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* ── Prix courants ── */}
                {costSubTab === "prices" && (
                  <div className="cost-category-grid">
                    {data.costOfLiving.categories.map((cat) => (
                      <div key={cat.id} className="cost-category">
                        <h3 className="cost-category-title">
                          <span className="cost-category-icon-badge">{cat.icon}</span>
                          {cat.label}
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
                  </div>
                )}
              </>) : <div className="panel-section-skeleton" />}
              </div>
            )}

            {/* ── DESTINATIONS ── */}
            {showSection("destinations") && (
              <div
                id="panel-section-destinations"
                className="tab-content panel-mobile-section"
                ref={(el) => { sectionRefsMap.current.destinations = el; }}
                data-section-id="destinations"
              >
              {isMobile && sectionHead("destinations")}
              {shouldRenderContent("destinations") ? (<>
                {selectedDest ? (
                  <div className="dest-detail">
                    <button className="back-btn" onClick={closeDestination}>{t("countryPanel.backButton")}</button>

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
                      ? <img src={selectedDest.image_url} alt={selectedDest.name} className="dest-detail-img" />
                      : <WikiImage src={img(selectedDest.wikipedia)} meta={imgMeta(selectedDest.wikipedia)} alt={selectedDest.name} className="dest-detail-img" />
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
                          {selectedDest.tags.map(tag => <span key={tag} className="tag">{translateTag(tag, t)}</span>)}
                        </div>
                      )
                    ) : (
                      <div className="dest-tags">
                        {selectedDest.tags.map((tag) => <span key={tag} className="tag">{translateTag(tag, t)}</span>)}
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

                    <PlacesList dest={selectedDest} countryCode={countryCode} countryName={data.name} wikiImages={wikiImages} wikiMeta={wikiMeta} />

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
                  const myDests = user ? translatedUserDestinations.filter(d => d.user_id === user.id) : [];
                  const otherDests = translatedUserDestinations.filter(d => !user || d.user_id !== user.id);
                  return (
                  <>
                    {deleteDestError && (
                      <div className="dest-delete-error">
                        <span className="dest-delete-error-icon">⚠</span>
                        <span>{t("countryPanel.deleteFailedError")}</span>
                      </div>
                    )}
                    {isMobile && !destSearchExpanded ? (
                      /* Replié (mobile) : petit bouton recherche (icône) à côté du
                         bouton "Ajouter" en gros — le clic sur la recherche ouvre le
                         vrai champ (+ bouton "+" compact à sa place). */
                      <div className="dest-list-header dest-list-header--collapsed">
                        <button
                          className="dest-search-toggle-btn"
                          onClick={() => {
                            setDestSearchExpanded(true);
                            requestAnimationFrame(() => destSearchInputRef.current?.focus());
                          }}
                          aria-label={t("countryPanel.searchDestinationPlaceholder")}
                        >
                          <span aria-hidden="true">🔍</span>
                        </button>
                        {user ? (
                          <button
                            className="dest-add-community-btn-top dest-add-community-btn-top--full"
                            onClick={() => { setShowDestForm(true); setEditDest(null); }}
                          >
                            {t("countryPanel.addDestinationButton")}
                          </button>
                        ) : (
                          <button className="dest-add-community-btn-top dest-add-community-btn-top--full dest-add-community-btn-top--muted" onClick={() => setAuthModalOpen(true)}>
                            {t("countryPanel.addDestinationButton")}
                          </button>
                        )}
                      </div>
                    ) : (
                      <div className="dest-list-header">
                        <div className="dest-search-wrapper">
                          <input
                            ref={destSearchInputRef}
                            type="text"
                            className="dest-search-input"
                            placeholder={t("countryPanel.searchDestinationPlaceholder")}
                            value={destSearch}
                            onChange={e => setDestSearch(e.target.value)}
                            onBlur={() => {
                              // Repasse au petit bouton icône quand on quitte le champ
                              // et qu'il est vide — on le laisse ouvert s'il y a une
                              // recherche active (l'utilisateur doit pouvoir la voir/
                              // l'effacer sans le rouvrir).
                              if (isMobile && !destSearch) setDestSearchExpanded(false);
                            }}
                          />
                          {destSearch && (
                            <button
                              className="dest-search-clear"
                              onClick={() => {
                                // Le clic sur la croix fait déjà perdre le focus au champ
                                // (blur avant le clic) : à ce moment-là destSearch n'était
                                // pas encore vide, donc le onBlur du champ ne repliait pas
                                // le bouton — on le fait ici, une fois le texte effacé.
                                setDestSearch('');
                                if (isMobile) setDestSearchExpanded(false);
                              }}
                            >✕</button>
                          )}
                        </div>
                        {user ? (
                          <button
                            className="dest-add-community-btn-top"
                            onClick={() => { setShowDestForm(true); setEditDest(null); }}
                          >
                            <span aria-hidden="true">+</span>
                            <span className="dest-add-btn-label">{t("countryPanel.addDestinationButton")}</span>
                          </button>
                        ) : (
                          <button className="dest-add-community-btn-top dest-add-community-btn-top--muted" onClick={() => setAuthModalOpen(true)}>
                            <span aria-hidden="true">+</span>
                            <span className="dest-add-btn-label">{t("countryPanel.addDestinationButton")}</span>
                          </button>
                        )}
                      </div>
                    )}

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
                        <div key={dest.id} className={`dest-card${isAdmin && alertIds.has(dest.id) ? ' dest-card--alert' : ''}`} onClick={() => openDestination(dest)}>
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
                                <p className="dest-card-desc">{dest.description}</p>
                                {dest.tags?.length > 0 && (
                                  <div className="dest-tags">
                                    {dest.tags.map(tag => <span key={tag} className="tag">{translateTag(tag, t)}</span>)}
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
                        <div key={dest.id} className="dest-card" onClick={() => openDestination(dest)}>
                          <WikiImage src={img(dest.wikipedia)} meta={imgMeta(dest.wikipedia)} alt={dest.name} className="dest-card-img" />
                          <div className="dest-card-info">
                            <div className="dest-card-top">
                              <span className="dest-card-name">{dest.name}</span>
                              <span className="dest-card-region">{dest.region}</span>
                            </div>
                            <p className="dest-card-desc">{dest.description}</p>
                            <div className="dest-tags">
                              {dest.tags?.map((tag) => <span key={tag} className="tag">{translateTag(tag, t)}</span>)}
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
                            <div key={dest.id} className="dest-card" onClick={() => openDestination(dest)}>
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
                                  <div className="dest-card-confirm-block" onClick={e => e.stopPropagation()}>
                                    <span className="dest-card-confirm-msg">{t('countryPanel.confirmDeleteDestination')}</span>
                                    <div className="dest-card-confirm-btns">
                                      <button className="review-confirm-no" onClick={() => setDeletingDestId(null)}>{t('common:no')}</button>
                                      <button className="review-confirm-yes" onClick={() => handleDeleteDest(dest.id)}>{t('common:yes')}</button>
                                    </div>
                                  </div>
                                ) : (
                                  <>
                                    <p className="dest-card-desc">
                                      {dest.description}
                                    </p>
                                    {dest.tags?.length > 0 && (
                                      <div className="dest-tags">
                                        {dest.tags.map(tag => <span key={tag} className="tag">{translateTag(tag, t)}</span>)}
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

                    {/* Destinations statiques + communautaires des autres, triées par note,
                        paginées 10 par 10 ("voir plus" charge 10 de plus à chaque clic) */}
                    {filteredAllDests === null && (() => {
                      const sortedOtherDests = [
                        ...(data?.destinations ?? []).map(d => ({ ...d, _type: 'static' })),
                        ...otherDests.map(d => ({ ...d, _type: 'community' })),
                      ].sort((a, b) => {
                        const M = 5; const C = 3.5; // moyenne bayésienne : seuil de confiance + prior
                        const sa = destStats[`${countryCode}_${a.id}`];
                        const sb = destStats[`${countryCode}_${b.id}`];
                        const scoreA = sa ? (sa.count * sa.avg + M * C) / (sa.count + M) : -1;
                        const scoreB = sb ? (sb.count * sb.avg + M * C) / (sb.count + M) : -1;
                        return scoreB - scoreA;
                      });
                      return (
                    <>
                    <div className="dest-grid">
                      {sortedOtherDests.slice(0, destVisibleCount).map((dest) => dest._type === 'static' ? (
                        <div key={dest.id} className="dest-card" onClick={() => openDestination(dest)}>
                          <WikiImage src={img(dest.wikipedia)} meta={imgMeta(dest.wikipedia)} alt={dest.name} className="dest-card-img" />
                          <div className="dest-card-info">
                            <div className="dest-card-top">
                              <span className="dest-card-name">{dest.name}</span>
                              <span className="dest-card-region">{dest.region}</span>
                            </div>
                            <p className="dest-card-desc">
                              {dest.description}
                            </p>
                            <div className="dest-tags">
                              {dest.tags.map((tag) => <span key={tag} className="tag">{translateTag(tag, t)}</span>)}
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
                        <div key={dest.id} className={`dest-card${isAdmin && alertIds.has(dest.id) ? ' dest-card--alert' : ''}`} onClick={() => openDestination(dest)}>
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
                              {dest.description}
                            </p>
                            {dest.tags?.length > 0 && (
                              <div className="dest-tags">
                                {dest.tags.map(tag => <span key={tag} className="tag">{translateTag(tag, t)}</span>)}
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
                    </div>
                    {destVisibleCount < sortedOtherDests.length && (
                      <button
                        className="dest-load-more"
                        onClick={() => setDestVisibleCount((c) => c + DEST_PAGE_SIZE)}
                      >
                        {t("countryPanel.loadMoreDestinations", { count: sortedOtherDests.length - destVisibleCount })}
                      </button>
                    )}
                    </>
                      );
                    })()}
                  </>
                  );
                })()}
              </>) : <div className="panel-section-skeleton" />}
              </div>
            )}

            {/* ── PRACTICAL ── */}
            {showSection("practical") && (
              <div
                id="panel-section-practical"
                className="tab-content panel-mobile-section"
                ref={(el) => { sectionRefsMap.current.practical = el; }}
                data-section-id="practical"
              >
              {isMobile && sectionHead("practical")}
              {shouldRenderContent("practical") ? (<>
                <div className="visa-disclaimer">
                  <span className="visa-disclaimer-icon">⚠️</span>
                  <span>{t("countryPanel.visaDisclaimerPrefix")}&nbsp;
                    <a href="https://www.diplomatie.gouv.fr/fr/conseils-aux-voyageurs/" target="_blank" rel="noopener noreferrer">{t("countryPanel.visaDisclaimerLink")}</a> {t("countryPanel.visaDisclaimerSuffix")}
                  </span>
                </div>
                <div className="practical-list">
                  {data.practicalities.map((item) => (
                    <div key={item.label} className="practical-item">
                      <span className="practical-icon-badge"><span className="practical-icon">{item.icon}</span></span>
                      <div className="practical-body">
                        <span className="practical-label">{item.label}</span>
                        <span className="practical-value">{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </>) : <div className="panel-section-skeleton" />}
              </div>
            )}

            {/* ── REVIEWS ── */}
            {showSection("reviews") && (
              <div
                id="panel-section-reviews"
                className="tab-content panel-mobile-section"
                ref={(el) => { sectionRefsMap.current.reviews = el; }}
                data-section-id="reviews"
              >
              {isMobile && sectionHead("reviews")}
              {shouldRenderContent("reviews") ? (<>
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
              </>) : <div className="panel-section-skeleton" />}
              </div>
            )}

            {/* ── RECOMMENDATIONS ── */}
            {showSection("recommendations") && (
              <div
                id="panel-section-recommendations"
                className="tab-content panel-mobile-section"
                ref={(el) => { sectionRefsMap.current.recommendations = el; }}
                data-section-id="recommendations"
              >
              {isMobile && sectionHead("recommendations")}
              {shouldRenderContent("recommendations") ? (
                <CountryRecommendations
                  countryCode={countryCode}
                  onNavigateCountry={onNavigateCountry}
                  onCountLoaded={setRecoCount}
                />
              ) : <div className="panel-section-skeleton" />}
              </div>
            )}
          </div>
        </aside>
      </div>
    </>
  );
}
