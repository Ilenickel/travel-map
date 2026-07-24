import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';
import { useTrips } from '../hooks/useTrips';
import { useInvitations } from '../hooks/useInvitations';
import { useEndTripSharePrompt } from '../hooks/useEndTripSharePrompt';
import AuthModal from '../components/AuthModal';
import TripsHome from '../components/planning/TripsHome';
import TripEditor from '../components/planning/TripEditor';
import PlanningGate from '../components/planning/PlanningGate';
import EndTripSharePrompt from '../components/planning/EndTripSharePrompt';
import './PlanningPage.css';

// ─── SEO ─────────────────────────────────────────────────────────

function usePlanningPageSEO() {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const prev = {
      title: document.title,
      desc: document.querySelector('meta[name="description"]')?.getAttribute('content'),
      ogTitle: document.querySelector('meta[property="og:title"]')?.getAttribute('content'),
      canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href'),
    };
    document.title = t('page.title');
    document.querySelector('meta[name="description"]')?.setAttribute('content', t('page.description'));
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', t('page.title'));
    // L'URL canonique reste fixe (une seule route /planifier, pas de version /en) :
    // hors du périmètre i18n de cette page tant qu'il n'y a pas de routes localisées.
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', 'https://travel-map-blush.vercel.app/planifier');
    return () => {
      document.title = prev.title;
      if (prev.desc) document.querySelector('meta[name="description"]')?.setAttribute('content', prev.desc);
      if (prev.ogTitle) document.querySelector('meta[property="og:title"]')?.setAttribute('content', prev.ogTitle);
      if (prev.canonical) document.querySelector('link[rel="canonical"]')?.setAttribute('href', prev.canonical);
    };
  }, [i18n.language, t]);
}

// ─── Topbar ───────────────────────────────────────────────────────

function PlanningTopbar() {
  const { t } = useTranslation();
  return (
    <header className="pp-topbar">
      <Link to="/" className="pp-topbar-brand" aria-label={t('topbar.backToMapLabel')}>
        <img src="/icon.png" alt="Triply" className="pp-brand-icon" />
        <span className="pp-brand-name">Triply</span>
      </Link>
      <nav className="pp-topbar-nav">
        <span className="pp-topbar-breadcrumb">
          <span className="pp-topbar-breadcrumb-sep">/</span>
          {t('topbar.breadcrumb')}
        </span>
      </nav>
      <div className="pp-topbar-right">
        <Link to="/" className="pp-btn pp-btn--home">
          <span className="pp-btn--home-icon">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
          </span>
          {t('topbar.homeButton')}
        </Link>
      </div>
    </header>
  );
}

// ─── Invitations en attente (bandeau) ────────────────────────────

function PendingInvitations({ pending, onAccept, onDecline }) {
  const { t } = useTranslation();
  if (!pending.length) return null;
  return (
    <div className="pp-pending-invites">
      {pending.map(inv => (
        <div key={inv.id} className="pp-pending-invite">
          <div className="pp-pending-invite-text">
            <span className="pp-pending-invite-from">{inv.inviter?.display_name || t('invite.someoneFallback')}</span>
            {' '}{t('invite.inviteVerb')}{' '}
            <strong>{t('invite.tripQuoted', { title: inv.trips?.title || t('invite.tripFallback') })}</strong>
          </div>
          <div className="pp-pending-invite-actions">
            <button className="pp-btn pp-btn--primary pp-btn--xs" onClick={() => onAccept(inv.id, inv.trip_id)}>{t('invite.acceptButton')}</button>
            <button className="pp-btn pp-btn--ghost pp-btn--xs" onClick={() => onDecline(inv.id)}>{t('invite.declineButton')}</button>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Main content (requires auth) ────────────────────────────────

function PlanningMain() {
  const { t } = useTranslation();
  const { user } = useAuth();
  const {
    trips, tripStats, reloadTrips, loading, selectedTripId, setSelectedTripId, tripData, loadTripData,
    createTrip, updateTrip, deleteTrip, leaveTrip, duplicateTrip,
    addDestination, removeDestination,
    addCity, addDaytrip, updateCity, removeCity, reorderCities,
    addActivity, updateActivity, removeActivity, removeActivities, reorderActivities,
    duplicateActivity, undoLastDelete,
    addGroup, clearAutoGroups, assignActivityToGroup, assignCityToDay, assignActivitiesToDay,
    addLodging, updateLodging, removeLodging,
  } = useTrips(user?.id);

  const { pending, accept: acceptInvite, decline: declineInvite } = useInvitations(user?.id);
  // Même popup qu'à l'écran principal du site (App.jsx) : présente aux deux
  // endroits pour forcer une réponse, chacune interroge la base indépendamment
  // donc répondre d'un côté la fait disparaître de l'autre au prochain montage.
  const { trip: pendingShareTrip, answer: answerSharePrompt } = useEndTripSharePrompt(user?.id);

  // Ouvre directement un voyage précis si on arrive via ?trip=<id> (ex : après avoir
  // accepté une invitation depuis le panneau de notifications général)
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const tripParam = searchParams.get('trip');
    if (tripParam) setSelectedTripId(tripParam);
  }, [searchParams, setSelectedTripId]);

  const handleAcceptInvite = async (invitationId, tripId) => {
    const ok = await acceptInvite(invitationId);
    if (!ok) return;
    // Recharge la liste pour y inclure le voyage partagé nouvellement accepté
    // (loadTrips ramène aussi les voyages où l'on est membre), puis ouvre ce
    // voyage en plein écran. Un simple retour en arrière (bouton « Mes voyages »)
    // ramène ensuite à la grille, où le voyage est désormais présent — plus de
    // rechargement complet de la page (qui perdait l'état de l'écran).
    await reloadTrips();
    if (tripId) setSelectedTripId(tripId);
  };

  // Retour de l'éditeur plein écran vers la grille d'accueil : on déselectionne
  // le voyage ET on rafraîchit la liste (les agrégats des cartes — nb villes,
  // activités, progression — ont pu changer pendant l'édition).
  const handleBackToHome = () => {
    setSelectedTripId(null);
    reloadTrips();
  };

  return (
    <div className="pp-layout">
      {pendingShareTrip && (
        <EndTripSharePrompt key={pendingShareTrip.id} trip={pendingShareTrip} onAnswer={answerSharePrompt} />
      )}

      <main className="pp-main">
        {loading && tripData?.trip?.id !== selectedTripId ? (
          // Spinner uniquement lors d'un vrai changement de voyage (les données
          // affichées ne correspondent plus encore au voyage sélectionné) — un
          // simple rafraîchissement du voyage déjà ouvert (ex. onReloadTripData
          // après un import de suggestion) ne doit JAMAIS démonter TripEditor :
          // ça réinitialiserait son état local (page du pager mobile, villes
          // repérées comme "nouvellement importées" pour s'ouvrir dépliées —
          // voir DestinationBlock, initialCityIdsRef).
          <div className="pp-loading">
            <div className="pp-spinner" />
            <span>{t('common:loading')}</span>
          </div>
        ) : selectedTripId && tripData?.trip ? (
          <TripEditor
            tripData={tripData}
            tripId={selectedTripId}
            onUpdateTrip={updateTrip}
            onAddDestination={addDestination}
            onRemoveDestination={removeDestination}
            onAddCity={addCity}
            onAddDaytrip={addDaytrip}
            onRemoveCity={removeCity}
            onRenameCity={updateCity}
            onReorderCities={reorderCities}
            onAddActivity={addActivity}
            onRemoveActivity={removeActivity}
            onRemoveActivities={removeActivities}
            onUpdateActivity={updateActivity}
            onReorderActivities={reorderActivities}
            onDuplicateActivity={duplicateActivity}
            onUndoLastDelete={undoLastDelete}
            onAddGroup={addGroup}
            onClearAutoGroups={clearAutoGroups}
            onAssignActivityToGroup={assignActivityToGroup}
            onAssignCityToDay={assignCityToDay}
            onAssignActivitiesToDay={assignActivitiesToDay}
            onAddLodging={addLodging}
            onUpdateLodging={updateLodging}
            onRemoveLodging={removeLodging}
            onLeaveTrip={leaveTrip}
            onReloadTripData={() => loadTripData(selectedTripId)}
            onBack={handleBackToHome}
          />
        ) : (
          <>
            <PendingInvitations
              pending={pending}
              onAccept={handleAcceptInvite}
              onDecline={declineInvite}
            />
            <TripsHome
              trips={trips}
              tripStats={tripStats}
              userId={user?.id}
              onSelect={setSelectedTripId}
              onCreate={createTrip}
              onDelete={deleteTrip}
              onLeaveTrip={leaveTrip}
              onDuplicate={duplicateTrip}
            />
          </>
        )}
      </main>
    </div>
  );
}

// ─── Page entry point ─────────────────────────────────────────────

export default function PlanningPage() {
  usePlanningPageSEO();
  const { t } = useTranslation();
  const { user, authModalOpen, setAuthModalOpen } = useAuth();

  if (!user) {
    return (
      <div className="pp-app">
        <PlanningTopbar />
        <PlanningGate onConnect={() => setAuthModalOpen(true)} />
        {authModalOpen && <AuthModal onClose={() => setAuthModalOpen(false)} />}
        <div className="sr-only">
          <h1>{t('page.title')}</h1>
          <p>{t('page.description')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pp-app">
      <PlanningTopbar />
      <div className="sr-only"><h1>{t('page.title')}</h1></div>
      <PlanningMain />
    </div>
  );
}
