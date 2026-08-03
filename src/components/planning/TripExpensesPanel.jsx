import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation, Trans } from 'react-i18next';
import { supabase } from '../../lib/supabase';
import { formatPrice, formatDateShort } from '../../lib/planningUtils';
import { getCurrency } from '../../lib/currency';
import { refreshCountryRates, extractCurrencyCodes, convertToEurAtLiveRate } from '../../lib/exchangeRates';
import { currencySymbolOf, formatCurrencyAmount, isKnownCurrency } from '../../lib/expenseCurrencies';
import { findCountry } from '../../data/index';
import CurrencyPicker from './CurrencyPicker';
import { useSettings } from '../../context/SettingsContext';

function Avatar({ profile, size }) {
  const style = size ? { width: size, height: size } : undefined;
  const [broken, setBroken] = useState(false);
  if (profile?.avatar_url && !broken) {
    return <img src={profile.avatar_url} alt="" className="pp-expense-avatar" style={style} onError={() => setBroken(true)} />;
  }
  const initial = (profile?.display_name || '?').charAt(0).toUpperCase();
  return <div className="pp-expense-avatar pp-expense-avatar--initials" style={style}>{initial}</div>;
}

// Une couleur stable par participant (index dans la liste ACTUELLE, propriétaire
// d'abord) : reprise à l'identique sur le segment de la barre du bilan, le point
// de la légende et l'anneau de l'avatar dans sa carte — le même repère visuel
// partout, plutôt qu'un anneau vert/ambre qui ne parlait que du delta.
const PARTICIPANT_COLORS = ['#6366f1', '#14b8a6', '#f59e0b', '#ec4899', '#3b82f6', '#84cc16', '#f97316', '#a855f7'];

// Suivi des dépenses partagées ("qui a payé quoi") : un compte par
// participant du voyage, chacun peut ajouter/retirer des sommes. La liste des
// participants est DÉRIVÉE (propriétaire + trip_members + payeurs historiques),
// jamais stockée : une personne invitée en cours de voyage apparaît donc
// automatiquement, sans toucher aux montants déjà saisis pour les autres — et
// un ancien membre qui a payé des choses reste visible ("Ancien participant").
export default function TripExpensesPanel({ tripId, trip, destinations = [], userId, active = true }) {
  const { t, i18n } = useTranslation();
  useSettings(); // abonnement devise : formatPrice dépend de la devise choisie
  const [participants, setParticipants] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [loaded, setLoaded] = useState(false);
  // Accordéon : un seul participant déplié à la fois (liste courte, on évite
  // le mur de cartes toutes ouvertes en même temps).
  const [expandedId, setExpandedId] = useState(null);
  const [addingFor, setAddingFor] = useState(null);
  const [label, setLabel] = useState('');
  const [amount, setAmount] = useState('');
  const [saving, setSaving] = useState(false);
  // Devise dans laquelle la dépense a été RÉELLEMENT payée : au Japon on
  // saisit 5 000 JPY, la conversion en euros (la devise de stockage) se fait
  // à l'enregistrement, au taux journalier. Rien à voir avec la devise
  // d'AFFICHAGE du site (getCurrency, EUR/USD) qui, elle, ne change que la
  // présentation des montants déjà convertis.
  const [currency, setCurrency] = useState(() => getCurrency());
  // Message d'erreur du formulaire (taux indisponible) : on refuse alors
  // d'enregistrer plutôt que d'écrire un montant faux, qui fausserait ensuite
  // tous les soldes du voyage sans qu'on puisse le détecter après coup.
  const [formError, setFormError] = useState(null);
  // Bénéficiaires sélectionnés pour la dépense en cours de saisie : par
  // défaut TOUT le monde (comportement historique), l'utilisateur peut
  // décocher les personnes absentes de cette dépense précise (ex: un resto
  // partagé par 3 des 8 participants). Un Set d'ids, jamais vide tant que le
  // formulaire est ouvert (au moins le payeur reste coché).
  const [selectedBeneficiaries, setSelectedBeneficiaries] = useState(null);
  // Liste dépliante des bénéficiaires (voir openAddForm) : fermée par défaut,
  // tout le monde est déjà coché sans avoir à l'ouvrir — ne s'ouvre que si on
  // veut retirer quelqu'un. Évite d'afficher toutes les personnes à la suite
  // (encombrant dès 8-10 participants).
  const [benefsMenuOpen, setBenefsMenuOpen] = useState(false);
  // Petit popover "qui doit quoi à qui" ouvert depuis le i à côté du solde
  // d'un participant — un seul à la fois, indépendant de l'accordéon (peut
  // s'ouvrir même carte fermée).
  const [balanceInfoId, setBalanceInfoId] = useState(null);
  // Popover "partagé entre" ouvert depuis la pastille "N pers." d'une dépense
  // partielle — clic requis sur PC comme sur mobile (pas de hover natif),
  // un seul ouvert à la fois. Id de la dépense concernée, ou null.
  const [splitInfoId, setSplitInfoId] = useState(null);
  // Position (coordonnées écran) du popover "partagé entre" : rendu via portail
  // dans document.body pour échapper à l'overflow:hidden de .pp-expense-card
  // (sinon coupé net au bord de la carte, voir capture utilisateur).
  const [splitInfoPos, setSplitInfoPos] = useState(null);
  // Élément déclencheur ("N pers.") actuellement ouvert + le popover
  // lui-même : simples refs mutables (pas de callback ref ni de Map), pour
  // ignorer les clics à l'intérieur lors de la fermeture au clic dehors. La
  // position est calculée directement au clic (synchrone, voir onClick plus
  // bas) plutôt que dans un useEffect séparé : évite un aller-retour de rendu
  // en plus qui pouvait rater le bon état selon le timing.
  const splitTriggerElRef = useRef(null);
  const splitPopoverRef = useRef(null);
  // Champ montant du formulaire : sert d'ancrage au sélecteur de devise, qui
  // s'aligne dessus plutôt que sur son petit bouton déclencheur (sinon la
  // liste pend de travers, décalée par rapport à la modale).
  const amountFieldRef = useRef(null);

  // Zone d'écran réellement visible, hors clavier logiciel. Sur iOS, ouvrir
  // le clavier ne réduit PAS le viewport de mise en page : une modale
  // `position: fixed` centrée reste centrée sur l'écran entier et se retrouve
  // donc à moitié sous le clavier. On redimensionne le voile sur
  // visualViewport pour que « centré » veuille dire centré dans ce qui reste
  // visible. `null` (navigateur sans visualViewport) → le CSS `inset: 0`
  // s'applique tel quel.
  const [visibleViewport, setVisibleViewport] = useState(null);
  useEffect(() => {
    const vv = typeof window !== 'undefined' ? window.visualViewport : null;
    if (!addingFor || !vv) return;
    const sync = () => setVisibleViewport({ top: vv.offsetTop, height: vv.height });
    sync();
    vv.addEventListener('resize', sync);
    vv.addEventListener('scroll', sync);
    return () => {
      vv.removeEventListener('resize', sync);
      vv.removeEventListener('scroll', sync);
    };
  }, [addingFor]);

  useEffect(() => {
    if (!splitInfoId) return;
    const closeIfOutside = (e) => {
      if (splitTriggerElRef.current?.contains(e.target)) return;
      if (splitPopoverRef.current?.contains(e.target)) return;
      setSplitInfoId(null);
      setSplitInfoPos(null);
    };
    document.addEventListener('click', closeIfOutside, true);
    return () => {
      document.removeEventListener('click', closeIfOutside, true);
    };
  }, [splitInfoId]);
  // Un participant avec des dizaines/centaines de dépenses ne doit pas tout
  // dérouler d'un coup (le carnet Notes/Lieux paginent déjà ainsi ailleurs
  // dans l'app) : seules les PAGE_SIZE plus récentes sont montrées par défaut,
  // "Voir plus" en affiche PAGE_SIZE de plus. Réinitialisé à chaque ouverture
  // d'un autre participant (voir toggleExpanded).
  const PAGE_SIZE = 8;
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const loadAll = useCallback(async () => {
    if (!tripId) return;
    const [{ data: memberRows }, { data: expenseRows }] = await Promise.all([
      supabase.from('trip_members').select('user_id').eq('trip_id', tripId),
      supabase.from('trip_expenses').select('*').eq('trip_id', tripId).order('created_at', { ascending: false }),
    ]);
    const memberIds = (memberRows || []).map((r) => r.user_id);
    // Anciens participants à faire figurer : ceux qui ont payé quelque chose,
    // mais AUSSI ceux qui doivent encore leur part d'une dépense (les
    // bénéficiaires figés). Sans les seconds, quelqu'un qui n'a jamais rien
    // avancé disparaissait purement et simplement de l'écran en quittant le
    // voyage — sa dette restait pourtant comptée dans le solde des autres,
    // qui ne s'équilibrait alors plus avec personne à l'écran.
    const involvedIdsFromExpenses = (expenseRows || [])
      .flatMap((e) => [e.payer_id, ...(e.beneficiaries || [])]);
    const allIds = [...new Set([trip?.user_id, ...memberIds, ...involvedIdsFromExpenses].filter(Boolean))];
    let profMap = {};
    if (allIds.length) {
      // Comme dans TripShareModal : trip_members.user_id référence auth.users,
      // pas profiles — pas d'embed PostgREST possible, on rattache nous-mêmes.
      const { data: profs } = await supabase
        .from('profiles')
        .select('id, display_name, avatar_url')
        .in('id', allIds);
      (profs || []).forEach((p) => { profMap[p.id] = p; });
    }
    const memberSet = new Set([trip?.user_id, ...memberIds].filter(Boolean));
    // Propriétaire d'abord, puis les membres (ordre alphabétique), puis les
    // anciens participants qui ont encore des sommes à leur nom.
    const ordered = [
      ...(trip?.user_id ? [trip.user_id] : []),
      ...memberIds
        .filter((id) => id !== trip?.user_id)
        .sort((a, b) => (profMap[a]?.display_name || '').localeCompare(profMap[b]?.display_name || '')),
      ...[...new Set(involvedIdsFromExpenses)].filter((id) => !memberSet.has(id)),
    ];
    setParticipants([...new Set(ordered)].map((id) => ({
      id,
      profile: profMap[id] || null,
      isFormer: !memberSet.has(id),
    })));
    setExpenses(expenseRows || []);
    setLoaded(true);
  }, [tripId, trip?.user_id]);

  // Rechargé à chaque ouverture de l'onglet (active) : sur un voyage partagé,
  // les sommes saisies par les autres depuis la dernière visite apparaissent.
  useEffect(() => {
    if (active) loadAll();
  }, [active, loadAll]);

  const parsedAmount = parseFloat(String(amount).replace(',', '.'));
  const amountValid = !Number.isNaN(parsedAmount) && parsedAmount > 0;

  // Devises des pays du voyage, dans l'ordre de l'itinéraire : la première
  // est présélectionnée à l'ouverture du formulaire, toutes sont épinglées en
  // tête du sélecteur. Un pays peut en faire circuler plusieurs (champ libre
  // "Dollar américain (USD) / Riel (KHR)" des données pays) — on les garde
  // toutes, dans l'ordre cité, celui des données étant déjà « monnaie
  // principale d'abord ».
  // Le filtre isKnownCurrency n'est pas cosmétique : la lecture du champ
  // libre remonte tout groupe de 3 majuscules, y compris des faux positifs
  // ("Franc CFA (XOF)" → CFA puis XOF). Sans lui, "CFA" serait présélectionné
  // comme devise de saisie alors qu'aucun taux n'existe pour ce code.
  const tripCurrencies = useMemo(() => {
    const codes = [...destinations]
      .sort((a, b) => (a.position ?? 0) - (b.position ?? 0))
      .flatMap((d) => extractCurrencyCodes(findCountry(d.country_code)?.costOfLiving?.currency))
      .filter(isKnownCurrency);
    return [...new Set(codes)];
  }, [destinations]);

  // Conversion affichée en direct sous le champ montant (« ≈ 31,20 € »),
  // recalculée à chaque frappe. `null` quand le taux manque encore (le
  // message d'erreur n'apparaît qu'à la validation, pas pendant la frappe)
  // ou qu'il n'y a rien d'utile à montrer : saisie en euros, ou saisie déjà
  // dans la devise d'AFFICHAGE (l'aperçu répéterait le montant tapé, à un
  // centime près puisque le stockage passe par l'euro — un « 100 $ ≈ 99,98 $ »
  // ne ferait que semer le doute).
  const liveConversion = (amountValid && currency !== 'EUR' && currency !== getCurrency())
    ? convertToEurAtLiveRate(parsedAmount, currency)
    : null;

  // ── Dérivés (participants actuels, totaux, soldes) — calculés avant les
  // handlers qui les utilisent (ex: openAddForm coche tout le monde par
  // défaut). ──
  const byPayer = {};
  expenses.forEach((e) => { (byPayer[e.payer_id] ||= []).push(e); });
  const totalOf = (id) => (byPayer[id] || []).reduce((s, e) => s + Number(e.amount || 0), 0);
  // Participants ACTUELS (membres + propriétaire) : c'est entre eux que les
  // comptes s'équilibrent, pas avec un ancien membre.
  const currentParticipants = participants.filter((p) => !p.isFormer);

  // Bénéficiaires effectifs d'une dépense : sa liste, figée à la création.
  // Le repli sur les participants actuels ne concerne plus que d'éventuelles
  // lignes historiques restées à NULL (voir planning_tables_v19.sql, qui les
  // fige) — c'est précisément ce repli qui, appliqué à toutes les dépenses
  // "pour tout le monde", faisait disparaître la dette d'un participant dès
  // qu'il quittait le voyage.
  const effectiveBeneficiaries = (e) => (e.beneficiaries && e.beneficiaries.length)
    ? e.beneficiaries
    : currentParticipants.map((p) => p.id);

  // Une dépense est "partagée par tout le groupe" (donc comptée dans la
  // cagnotte commune du bilan) selon l'INTENTION enregistrée à sa création :
  // « tout le monde était coché ». On ne le redéduit plus de la composition
  // actuelle du groupe, sinon une dépense payée à 3 sortirait de la cagnotte
  // le jour où un 4e participant rejoint le voyage.
  //
  // Repli pour les lignes antérieures au drapeau (shared_by_all NULL) : le
  // test géométrique d'avant — chaque participant ACTUEL doit figurer parmi
  // les bénéficiaires. Comparer les tailles ne suffirait pas : une dépense à
  // 2 (A, B) sur un voyage à 3 (A, B, C) où B part ensuite laisserait 2
  // participants actuels (A, C) pour une liste toujours longue de 2 (A, B),
  // ce qui la ferait passer à tort pour "partagée par tout le groupe".
  const isSharedByAll = (e) => {
    if (typeof e.shared_by_all === 'boolean') return e.shared_by_all;
    const benefs = effectiveBeneficiaries(e);
    return currentParticipants.every((p) => benefs.includes(p.id));
  };

  // La "cagnotte" globale du bilan n'inclut QUE les dépenses partagées par
  // TOUT le groupe : une dépense à 3 personnes sur un voyage à 8 ne doit pas
  // gonfler ce total commun — elle ne concerne que les 3 en question, et se
  // règle directement entre elles (voir le i de chaque carte), pas dans la
  // cagnotte.
  const sharedExpenses = expenses.filter(isSharedByAll);
  const grandTotal = sharedExpenses.reduce((s, e) => s + Number(e.amount || 0), 0);
  const hasPartialExpenses = expenses.length > sharedExpenses.length;
  // Part de chacun dans la cagnotte commune (uniquement les dépenses "pour
  // tout le monde"), utilisée pour la barre/légende du bilan — même périmètre
  // que grandTotal ci-dessus.
  const sharedPaidOf = (id) => sharedExpenses
    .filter((e) => e.payer_id === id)
    .reduce((s, e) => s + Number(e.amount || 0), 0);

  // Qui figure dans la barre et la légende du bilan : les participants
  // ACTUELS (même à 0 %, pour que chacun se retrouve dans la légende) ET les
  // anciens participants qui ont alimenté la cagnotte. Sans les seconds, une
  // somme avancée par quelqu'un qui a depuis quitté le voyage restait comptée
  // dans le total mais n'était attribuée à personne : la barre gardait un
  // trou et les pourcentages ne totalisaient pas 100 %.
  const potContributors = [
    ...currentParticipants,
    ...participants.filter((p) => p.isFormer && sharedPaidOf(p.id) > 0),
  ];

  // Ce que chacun DOIT au total (sa part de TOUTES les dépenses auxquelles
  // il/elle participe, partielles incluses) : sert au solde payé-dû par
  // personne, périmètre différent de la cagnotte commune ci-dessus.
  const owedOf = (id) => expenses.reduce((s, e) => {
    const benefs = effectiveBeneficiaries(e);
    if (!benefs.includes(id)) return s;
    return s + Number(e.amount || 0) / benefs.length;
  }, 0);
  // Solde = ce qu'il a payé moins ce qu'il doit. Positif → on lui doit de
  // l'argent ; négatif → il doit encore de l'argent au groupe.
  const balanceOf = (id) => totalOf(id) - owedOf(id);

  const colorOf = (id) => {
    const idx = currentParticipants.findIndex((p) => p.id === id);
    return idx === -1 ? 'var(--text-muted)' : PARTICIPANT_COLORS[idx % PARTICIPANT_COLORS.length];
  };

  const nameOf = (id) => participants.find((p) => p.id === id)?.profile?.display_name || t('expenses.formerParticipant');

  // ── "Qui doit quoi à qui", nette DEUX À DEUX ──
  // Chaque dépense crée une dette de chaque bénéficiaire (hors le payeur
  // lui-même) vers le payeur, pour sa part. On NETTE ensuite ces dettes,
  // mais uniquement entre les DEUX MÊMES personnes (jamais à travers un
  // troisième) : si B doit 100 à A (hôtel) et que A doit 50 à B (train que B
  // a payé pour tout le monde), on affiche juste "B doit 50 à A" — mais ce
  // que C doit à B (sa part du train) reste une ligne à part, distincte de
  // ce que C doit à A (sa part de l'hôtel). Rien ne se mélange entre des
  // paires différentes, et une dépense à 3 seulement ne touche jamais le
  // 4e participant qui n'y était pas.
  const rawDebts = {}; // rawDebts[debtorId][creditorId] = montant brut dû
  expenses.forEach((e) => {
    const benefs = effectiveBeneficiaries(e);
    if (!benefs.length) return;
    const share = Number(e.amount || 0) / benefs.length;
    benefs.forEach((beneficiaryId) => {
      if (beneficiaryId === e.payer_id) return;
      rawDebts[beneficiaryId] = rawDebts[beneficiaryId] || {};
      rawDebts[beneficiaryId][e.payer_id] = (rawDebts[beneficiaryId][e.payer_id] || 0) + share;
    });
  });
  const owesTo = {}; // owesTo[debtorId] = [{ id: creditorId, amount }]
  const owedBy = {}; // owedBy[creditorId] = [{ id: debtorId, amount }]
  // Toutes les personnes impliquées dans au moins une dépense (payeur ou
  // bénéficiaire), PAS seulement les participants actuels : un ancien
  // participant qui doit encore de l'argent (ou à qui on doit encore de
  // l'argent) doit continuer à apparaître dans ce détail, sinon son solde
  // agrégé (balanceOf, qui lui inclut toutes les dépenses) ne correspondrait
  // plus à ce qui est montré ici.
  const allInvolvedIds = new Set(currentParticipants.map((p) => p.id));
  expenses.forEach((e) => {
    allInvolvedIds.add(e.payer_id);
    effectiveBeneficiaries(e).forEach((bid) => allInvolvedIds.add(bid));
  });
  const involvedIds = [...allInvolvedIds];
  involvedIds.forEach((x, i) => {
    involvedIds.slice(i + 1).forEach((y) => {
      const xOwesY = rawDebts[x]?.[y] || 0;
      const yOwesX = rawDebts[y]?.[x] || 0;
      const net = Math.round((xOwesY - yOwesX) * 100) / 100;
      if (net === 0) return;
      const [debtor, creditor, netAmount] = net > 0 ? [x, y, net] : [y, x, -net];
      (owesTo[debtor] ||= []).push({ id: creditor, amount: netAmount });
      (owedBy[creditor] ||= []).push({ id: debtor, amount: netAmount });
    });
  });

  const toggleExpanded = (id) => {
    setExpandedId((cur) => (cur === id ? null : id));
    setAddingFor(null);
    setBalanceInfoId(null);
    setBenefsMenuOpen(false);
    setSplitInfoId(null);
    setSplitInfoPos(null);
    setVisibleCount(PAGE_SIZE);
  };

  // Ouverture directe depuis la légende du bilan : même remise à zéro que
  // toggleExpanded (pagination et formulaire d'ajout appartiennent au
  // participant qu'on quitte), mais toujours OUVRIR, jamais replier.
  const openParticipant = (id) => {
    setExpandedId(id);
    setAddingFor(null);
    setVisibleCount(PAGE_SIZE);
  };

  // Le formulaire s'ouvre dans une petite modale par-dessus la liste (portail
  // vers <body>, voir plus bas) et non plus déplié sous la carte du
  // participant : sur mobile, l'insérer dans le flux faisait défiler toute la
  // page et le champ de saisie passait sous la barre d'onglets/d'action, très
  // haute sur iPhone (signalé le 2026-08-03). Du coup on n'ouvre plus non plus
  // l'accordéon du payeur — la modale se suffit à elle-même et rappelle qui
  // paie dans son en-tête.
  const openAddForm = (payerId) => {
    setAddingFor(payerId);
    setLabel('');
    setAmount('');
    setFormError(null);
    setBenefsMenuOpen(false);
    // Popovers de la liste : la modale passe par-dessus, les laisser ouverts
    // derrière ne servirait qu'à les retrouver là à la fermeture.
    setBalanceInfoId(null);
    setSplitInfoId(null);
    setSplitInfoPos(null);
    // Devise du premier pays de l'itinéraire (le cas courant : on paie dans la
    // monnaie du pays où l'on est), sinon la devise d'affichage du site.
    setCurrency(tripCurrencies[0] || getCurrency());
    // Par défaut : tout le monde partage la dépense (cas le plus courant).
    setSelectedBeneficiaries(new Set(currentParticipants.map((p) => p.id)));
    // Les taux journaliers peuvent dater de plus de 24h (onglet resté ouvert,
    // navigateur hors-ligne au démarrage…) : on les rafraîchit dès l'ouverture
    // pour que l'aperçu de conversion soit juste avant même de valider.
    refreshCountryRates();
  };

  // Bouton commun "Ajouter une dépense" (hors accordéon) : évite d'avoir à
  // ouvrir la carte du bon participant. Payeur par défaut = l'utilisateur
  // courant s'il est participant, sinon le premier participant actuel.
  const openAddFormGlobal = () => {
    if (currentParticipants.length === 0) return;
    const defaultPayerId = currentParticipants.some((p) => p.id === userId)
      ? userId
      : currentParticipants[0].id;
    openAddForm(defaultPayerId);
  };

  const toggleBeneficiary = (id) => {
    // Le payeur fait forcément partie des bénéficiaires : illogique de payer
    // une somme dont on s'exclut soi-même (voir addingFor, l'id du payeur en
    // cours de saisie).
    if (id === addingFor) return;
    setSelectedBeneficiaries((cur) => {
      const next = new Set(cur);
      if (next.has(id)) {
        if (next.size === 1) return next; // au moins un bénéficiaire requis
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const allBeneficiariesSelected = selectedBeneficiaries && selectedBeneficiaries.size === currentParticipants.length;

  const submitExpense = async () => {
    if (!amountValid || saving) return;
    setSaving(true);
    setFormError(null);
    // Conversion vers l'euro (devise de stockage de `amount`, sur laquelle
    // reposent tous les calculs de soldes). On rafraîchit les taux du jour
    // juste avant : le cache local peut dater de plus de 24h si l'onglet est
    // resté ouvert, et une dépense doit être convertie au cours du jour où
    // elle est saisie.
    let amountEur = Math.round(parsedAmount * 100) / 100;
    let usedRate = null;
    if (currency !== 'EUR') {
      await refreshCountryRates();
      const converted = convertToEurAtLiveRate(parsedAmount, currency);
      if (!converted) {
        // Taux introuvable (hors-ligne, API en panne) : on n'enregistre RIEN
        // plutôt qu'un montant faux impossible à repérer ensuite.
        setSaving(false);
        setFormError(t('expenses.rateUnavailable', { currency }));
        return;
      }
      amountEur = converted.eur;
      usedRate = converted.rate;
    }
    const beneficiaryIds = [...(selectedBeneficiaries || [])];
    await supabase.from('trip_expenses').insert({
      trip_id: tripId,
      payer_id: addingFor,
      created_by: userId,
      label: label.trim() || null,
      amount: amountEur,
      // Trace de ce qui a été saisi (NULL si saisie directe en euros) : sert
      // uniquement à réafficher « 5 000 JPY » sous la dépense. Le taux est
      // figé ici volontairement — une dépense passée garde le cours du jour
      // où elle a été payée, elle n'est pas réécrite quand le cours bouge.
      original_amount: usedRate ? Math.round(parsedAmount * 100) / 100 : null,
      original_currency: usedRate ? currency : null,
      exchange_rate: usedRate,
      // La liste est TOUJOURS figée, même quand tout le monde est coché (elle
      // n'est plus jamais NULL) : autrefois on stockait NULL et on la
      // recalculait à l'affichage sur les participants du moment, si bien
      // qu'un départ effaçait rétroactivement la part du partant sur les
      // dépenses passées (et une arrivée rendait le nouveau venu redevable de
      // l'hôtel de la veille). Voir planning_tables_v19.sql.
      beneficiaries: beneficiaryIds,
      // …mais on garde l'INTENTION : « c'était pour tout le monde ». Sans ce
      // drapeau, la dépense basculerait dans les « partielles » (et sortirait
      // de la cagnotte commune) dès qu'un participant de plus rejoint.
      shared_by_all: allBeneficiariesSelected,
    });
    setSaving(false);
    setAddingFor(null);
    loadAll();
  };

  const removeExpense = async (id) => {
    await supabase.from('trip_expenses').delete().eq('id', id);
    loadAll();
  };

  return (
    <div className="pp-expenses">
      {/* ── Bilan : gros total (dépenses partagées par TOUT le groupe
          uniquement) + barre de répartition + légende cliquable. Les
          dépenses partielles (ex: resto à 3) n'y entrent pas — elles se
          règlent directement entre les personnes concernées, voir le i de
          chaque carte. */}
      <div className="pp-expenses-hero">
        <div className="pp-expenses-hero-icon" aria-hidden="true">🧾</div>
        <div className="pp-expenses-hero-total">{formatPrice(grandTotal)}</div>
        <div className="pp-expenses-hero-sub">{t('expenses.subtitle')}</div>
        {hasPartialExpenses && (
          <div className="pp-expenses-hero-note">
            <Trans i18nKey="expenses.potNote" components={{ icon: <span className="pp-expense-delta-info-btn pp-expense-delta-info-btn--inline">i</span> }} />
          </div>
        )}

        {loaded && grandTotal > 0 && currentParticipants.length > 0 && (
          <>
            <div className="pp-expenses-bar">
              {potContributors.map(({ id }) => {
                const pct = (sharedPaidOf(id) / grandTotal) * 100;
                if (pct <= 0) return null;
                return <span key={id} style={{ width: `${pct}%`, background: colorOf(id) }} />;
              })}
            </div>
            <div className="pp-expenses-legend">
              {potContributors.map(({ id, profile, isFormer }) => (
                <button
                  type="button"
                  key={id}
                  className={`pp-expenses-legend-item${isFormer ? ' pp-expenses-legend-item--former' : ''}`}
                  onClick={() => openParticipant(id)}
                  title={isFormer ? t('expenses.formerNote') : undefined}
                >
                  <span className="pp-expenses-legend-dot" style={{ background: colorOf(id) }} />
                  <span className="pp-expenses-legend-name">{profile?.display_name || t('expenses.formerParticipant')}</span>
                  <span className="pp-expenses-legend-pct">{Math.round((sharedPaidOf(id) / grandTotal) * 100)}%</span>
                </button>
              ))}
            </div>
          </>
        )}

        <div className="pp-expenses-stats-row">
          <strong>{currentParticipants.length}</strong> {t('expenses.participantsLabel', { count: currentParticipants.length })}
        </div>

        {loaded && currentParticipants.length > 0 && (
          <div className="pp-expenses-footer">
            <div className="pp-expenses-footer-divider" aria-hidden="true" />
            <button type="button" className="pp-expense-add-trigger pp-expense-add-trigger--global" onClick={openAddFormGlobal}>
              <span className="pp-expense-add-trigger-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                </svg>
              </span>
              {t('expenses.addButton')}
            </button>
          </div>
        )}
      </div>

      {/* ── Liste des participants, en accordéon ── */}
      <div className="pp-expense-accordion">
        {loaded && participants.map(({ id, profile, isFormer }) => {
          const rows = byPayer[id] || [];
          const total = totalOf(id);
          // Solde = payé - dû (basé sur les bénéficiaires réels de chaque
          // dépense, partielles incluses). Affiché AUSSI pour un ancien
          // participant : sa part des dépenses faites de son vivant dans le
          // groupe reste due (les bénéficiaires sont figés à la création), il
          // faut donc pouvoir la lire — sinon les soldes affichés ne
          // s'équilibrent pas entre eux.
          const delta = balanceOf(id);
          const hasDelta = Math.round(Math.abs(delta) * 100) > 0;
          const color = isFormer ? 'var(--text-muted)' : colorOf(id);
          const isOpen = expandedId === id;
          const infoOpen = balanceInfoId === id;
          return (
            <div
              key={id}
              id={`pp-expense-card-${id}`}
              className={`pp-expense-card${isFormer ? ' pp-expense-card--former' : ''}${isOpen ? ' pp-expense-card--open' : ''}`}
              style={{ '--p-color': color }}
            >
              {/* En-tête : nom complet à gauche (retour à la ligne autorisé —
                  le voir en entier prime), badge "Vous" dessous ; à droite le
                  montant avec le nombre de dépenses dessous. Un <div> (pas un
                  <button>) car il contient le bouton "i" du solde : imbriquer
                  un bouton dans un bouton n'est pas valide en HTML. */}
              <div
                className="pp-expense-card-head"
                role="button"
                tabIndex={0}
                onClick={() => toggleExpanded(id)}
                onKeyDown={(ev) => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); toggleExpanded(id); } }}
                aria-expanded={isOpen}
              >
                <span className="pp-expense-card-avatar-ring">
                  <Avatar profile={profile} size={32} />
                </span>
                <span className="pp-expense-card-who">
                  <span className="pp-expense-card-name">
                    <span className="pp-expense-card-name-text">{profile?.display_name || t('expenses.formerParticipant')}</span>
                  </span>
                  {id === userId && <span className="pp-expense-you-tag">{t('expenses.youTag')}</span>}
                  {isFormer && (
                    <span className="pp-expense-card-count pp-expense-card-count--wrap">{t('expenses.formerNote')}</span>
                  )}
                </span>
                <span className="pp-expense-card-totals">
                  <span className="pp-expense-card-total-row">
                    {isFormer && (
                      <button
                        type="button"
                        className="pp-expense-card-former-add"
                        title={t('expenses.addButton')}
                        onClick={(ev) => { ev.stopPropagation(); openAddForm(id); }}
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
                      </button>
                    )}
                    <span className="pp-expense-card-total">{formatPrice(total)}</span>
                  </span>
                  {!isFormer && (
                    <span className="pp-expense-card-count">{t('expenses.entriesCount', { count: rows.length })}</span>
                  )}
                  {hasDelta && (
                    <span className={`pp-expense-delta${delta > 0 ? ' pp-expense-delta--plus' : ' pp-expense-delta--minus'}`}>
                      <span className="pp-expense-delta-arrow" aria-hidden="true">{delta > 0 ? '▲' : '▼'}</span> {formatPrice(Math.abs(delta))}
                      <button
                        type="button"
                        className="pp-expense-delta-info-btn"
                        title={t('expenses.balanceInfoTitle')}
                        onClick={(ev) => { ev.stopPropagation(); setBalanceInfoId((cur) => (cur === id ? null : id)); }}
                      >
                        i
                      </button>
                    </span>
                  )}
                </span>
                <svg className="pp-expense-card-chevron" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"/>
                </svg>
              </div>

              {/* Popover "qui doit quoi à qui" pour cette personne : liste ce
                  qu'elle doit à chacun (net, après compensation deux-à-deux)
                  et ce qu'on lui doit — indépendant de l'accordéon, peut
                  s'ouvrir carte fermée. */}
              {infoOpen && (
                <div className="pp-expense-balance-popover">
                  {(owesTo[id] || []).map((o) => (
                    <div key={`owe-${o.id}`} className="pp-expense-balance-line">
                      <span className="pp-expense-balance-line-dot" style={{ background: colorOf(o.id) }} />
                      <span className="pp-expense-balance-line-text">{t('expenses.youOweLine', { name: nameOf(o.id) })}</span>
                      <span className="pp-expense-balance-line-amount pp-expense-delta--minus">{formatPrice(o.amount)}</span>
                    </div>
                  ))}
                  {(owedBy[id] || []).map((o) => (
                    <div key={`owed-${o.id}`} className="pp-expense-balance-line">
                      <span className="pp-expense-balance-line-dot" style={{ background: colorOf(o.id) }} />
                      <span className="pp-expense-balance-line-text">{t('expenses.owesYouLine', { name: nameOf(o.id) })}</span>
                      <span className="pp-expense-balance-line-amount pp-expense-delta--plus">{formatPrice(o.amount)}</span>
                    </div>
                  ))}
                  {!(owesTo[id]?.length) && !(owedBy[id]?.length) && (
                    <div className="pp-expense-balance-empty">{t('expenses.balanceAllSettled')}</div>
                  )}
                </div>
              )}

              {isOpen && (
                <div className="pp-expense-card-body">
                  {rows.length > 0 && (
                    <>
                      <ul className="pp-expense-list">
                        {rows.slice(0, visibleCount).map((e) => {
                          const benefs = effectiveBeneficiaries(e);
                          const isPartial = !isSharedByAll(e);
                          return (
                          <li key={e.id} className="pp-expense-row">
                            <span className="pp-expense-row-main">
                              <span className="pp-expense-row-label">{e.label || t('expenses.noLabel')}</span>
                              <span className="pp-expense-row-meta">
                                {e.created_at && (
                                  <span className="pp-expense-row-date">{formatDateShort(e.created_at.slice(0, 10))}</span>
                                )}
                                {/* Dépense saisie en devise étrangère : on
                                    rappelle le montant réellement payé sur
                                    place, le montant affiché à droite étant
                                    sa conversion (figée au taux du jour de
                                    la saisie, cf. planning_tables_v18.sql). */}
                                {e.original_currency && e.original_amount != null && (
                                  <span className="pp-expense-row-original">
                                    {formatCurrencyAmount(e.original_amount, e.original_currency, i18n.language)}
                                  </span>
                                )}
                                {isPartial && (
                                  <span className="pp-expense-row-split-wrap">
                                    <button
                                      type="button"
                                      className="pp-expense-row-split"
                                      onClick={(ev) => {
                                        ev.stopPropagation();
                                        if (splitInfoId === e.id) {
                                          setSplitInfoId(null);
                                          setSplitInfoPos(null);
                                          splitTriggerElRef.current = null;
                                          return;
                                        }
                                        const rect = ev.currentTarget.getBoundingClientRect();
                                        splitTriggerElRef.current = ev.currentTarget;
                                        setSplitInfoPos({ top: rect.bottom + 6, left: rect.left });
                                        setSplitInfoId(e.id);
                                      }}
                                    >
                                      {t('expenses.splitBadge', { count: benefs.length })}
                                    </button>
                                    {splitInfoId === e.id && splitInfoPos && createPortal(
                                      <div
                                        ref={splitPopoverRef}
                                        className="pp-expense-split-popover"
                                        style={{ top: splitInfoPos.top, left: splitInfoPos.left }}
                                      >
                                        <div className="pp-expense-split-popover-title">{t('expenses.sharedWithLabel')}</div>
                                        {benefs.map((bid) => {
                                          const bprofile = participants.find((p) => p.id === bid)?.profile;
                                          return (
                                            <div key={bid} className="pp-expense-split-popover-item">
                                              <Avatar profile={bprofile} size={18} />
                                              <span>{bprofile?.display_name || t('expenses.formerParticipant')}</span>
                                            </div>
                                          );
                                        })}
                                      </div>,
                                      document.body
                                    )}
                                  </span>
                                )}
                              </span>
                            </span>
                            <span className="pp-expense-row-amount">{formatPrice(Number(e.amount))}</span>
                            <button
                              type="button"
                              className="pp-expense-row-del"
                              onClick={() => removeExpense(e.id)}
                              title={t('expenses.deleteTitle')}
                            >
                              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                            </button>
                          </li>
                          );
                        })}
                      </ul>
                      {rows.length > visibleCount && (
                        <button
                          type="button"
                          className="pp-expense-showmore-btn"
                          onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                        >
                          {t('expenses.showMore', { count: rows.length - visibleCount })}
                        </button>
                      )}
                    </>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {loaded && expenses.length === 0 && (
        <p className="pp-expenses-empty">{t('expenses.emptyHint')}</p>
      )}

      {/* ── Formulaire d'ajout : petite modale portée dans <body>, plutôt
          qu'un bloc déplié sous la carte du participant. En ligne, sur
          mobile, l'ouvrir poussait toute la page et le champ montant
          atterrissait sous la barre d'onglets/d'action (haute sur iPhone) ;
          ici, rien ne défile derrière et le champ reste haut à l'écran,
          au-dessus du clavier. Contenu strictement identique — seul le
          symbole de devise figé est devenu un vrai sélecteur. ── */}
      {addingFor && createPortal(
        <div
          className="pp-expense-form-overlay"
          style={visibleViewport ? { top: visibleViewport.top, height: visibleViewport.height, bottom: 'auto' } : undefined}
          onClick={(e) => e.target === e.currentTarget && setAddingFor(null)}
        >
          <div className="pp-expense-form-modal" role="dialog" aria-modal="true">
            {/* Rappel du payeur : la modale n'est plus rattachée visuellement
                à la carte du participant, il faut donc dire explicitement
                pour qui on saisit. */}
            <div className="pp-expense-form-head">
              <Avatar profile={participants.find((p) => p.id === addingFor)?.profile} size={28} />
              <span className="pp-expense-form-head-text">
                <span className="pp-expense-form-head-title">{t('expenses.addButton')}</span>
                <span className="pp-expense-form-head-payer">
                  {t('expenses.paidBy', { name: nameOf(addingFor) })}
                </span>
              </span>
              <button
                type="button"
                className="pp-expense-form-close"
                onClick={() => setAddingFor(null)}
                aria-label={t('common:actions.cancel')}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
              </button>
            </div>

            <div className="pp-expense-form-body">
              <div className="pp-expense-add-form">
                <div className="pp-expense-add-amount-wrap" ref={amountFieldRef}>
                  {/* Symbole en tête du champ, mais seulement quand c'en est
                      un : pour la moitié des devises Intl n'a pas de symbole
                      et retombe sur le code, ce qui donnait « AED 0,00 » avec
                      « AED » répété dans le sélecteur juste à droite. Le
                      sélecteur porte alors seul l'identité de la devise. */}
                  {currencySymbolOf(currency) !== currency && (
                    <span className="pp-expense-add-currency" aria-hidden="true">{currencySymbolOf(currency)}</span>
                  )}
                  <input
                    className="pp-expense-add-amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0,00"
                    inputMode="decimal"
                    autoFocus
                    onKeyDown={(e) => e.key === 'Enter' && submitExpense()}
                  />
                  <CurrencyPicker value={currency} onChange={setCurrency} suggested={tripCurrencies} anchorRef={amountFieldRef} />
                </div>
                {/* Aperçu de la conversion, mis à jour à chaque frappe : on
                    voit ce qui sera réellement enregistré (les montants sont
                    stockés en euros) avant de valider. */}
                {liveConversion && (
                  <div className="pp-expense-add-converted">
                    {t('expenses.convertedPreview', { amount: formatPrice(liveConversion.eur) })}
                  </div>
                )}
                <input
                  className="pp-expense-add-label"
                  value={label}
                  onChange={(e) => setLabel(e.target.value)}
                  placeholder={t('expenses.labelPlaceholder')}
                  onKeyDown={(e) => e.key === 'Enter' && submitExpense()}
                />

                {/* Qui partage cette dépense : par défaut tout le monde
                    (le cas courant, déjà coché sans avoir à ouvrir la
                    liste) — cliquer le déclencheur déplie une liste à
                    cocher pour retirer les absents, plutôt que de tout
                    afficher d'un coup (encombrant dès 8-10 personnes).
                    Leur part ne bougera pas et la cagnotte commune
                    n'inclut cette somme que si tout le monde reste
                    coché. Affiché à partir de 3 participants : à 2, la
                    dépense est forcément partagée par les deux. */}
                {currentParticipants.length > 2 && (
                  <div className="pp-expense-add-benefs">
                    <div className="pp-expense-add-benefs-label">{t('expenses.sharedWithLabel')}</div>
                    <button
                      type="button"
                      className="pp-expense-benefs-trigger"
                      onClick={() => setBenefsMenuOpen((o) => !o)}
                      aria-expanded={benefsMenuOpen}
                    >
                      <span className="pp-expense-benefs-trigger-avatars">
                        {currentParticipants
                          .filter(({ id: pid }) => selectedBeneficiaries?.has(pid))
                          .slice(0, 4)
                          .map(({ id: pid, profile: pprofile }) => (
                            <Avatar key={pid} profile={pprofile} size={20} />
                          ))}
                      </span>
                      <span className="pp-expense-benefs-trigger-label">
                        {allBeneficiariesSelected
                          ? t('expenses.sharedWithEveryone')
                          : t('expenses.sharedWithCount', { count: selectedBeneficiaries?.size || 0 })}
                      </span>
                      <svg className="pp-expense-benefs-trigger-chevron" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"/>
                      </svg>
                    </button>
                    {benefsMenuOpen && (
                      <div className="pp-expense-benefs-menu">
                        {currentParticipants.map(({ id: pid, profile: pprofile }) => {
                          const checked = selectedBeneficiaries?.has(pid);
                          const isPayer = pid === addingFor;
                          return (
                            <button
                              type="button"
                              key={pid}
                              className={`pp-expense-benefs-menu-item${checked ? ' pp-expense-benefs-menu-item--on' : ''}${isPayer ? ' pp-expense-benefs-menu-item--locked' : ''}`}
                              onClick={() => toggleBeneficiary(pid)}
                              disabled={isPayer}
                              title={isPayer ? t('expenses.payerAlwaysIncluded') : undefined}
                            >
                              <Avatar profile={pprofile} size={22} />
                              <span className="pp-expense-benefs-menu-name">{pprofile?.display_name || t('expenses.formerParticipant')}</span>
                              {isPayer ? (
                                <svg className="pp-expense-benefs-menu-lock" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                  <path d="M12 17a2 2 0 0 0 2-2 2 2 0 0 0-2-2 2 2 0 0 0-2 2 2 2 0 0 0 2 2zm6-9h-1V6a5 5 0 0 0-10 0v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2zM8.9 6a3.1 3.1 0 0 1 6.2 0v2H8.9z"/>
                                </svg>
                              ) : (
                                <span className="pp-expense-benefs-menu-check" aria-hidden="true">
                                  {checked && (
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                      <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                    </svg>
                                  )}
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    )}
                    {!allBeneficiariesSelected && (
                      <div className="pp-expense-add-benefs-hint">
                        {t('expenses.splitHint', { count: selectedBeneficiaries?.size || 0 })}
                      </div>
                    )}
                  </div>
                )}

                {formError && <div className="pp-expense-add-error">{formError}</div>}

                <div className="pp-expense-add-actions">
                  <button type="button" className="pp-btn pp-btn--ghost pp-btn--sm" onClick={() => setAddingFor(null)}>
                    {t('common:actions.cancel')}
                  </button>
                  <button
                    type="button"
                    className="pp-btn pp-btn--primary pp-btn--sm"
                    onClick={submitExpense}
                    disabled={!amountValid || saving}
                  >
                    {t('common:actions.add')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
