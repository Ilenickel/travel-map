import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTrips } from '../hooks/useTrips';
import { useInvitations } from '../hooks/useInvitations';
import AuthModal from '../components/AuthModal';
import TripSidebar from '../components/planning/TripSidebar';
import TripEditor from '../components/planning/TripEditor';
import EmptyEditor from '../components/planning/EmptyEditor';
import PlanningGate from '../components/planning/PlanningGate';
import './PlanningPage.css';

// ─── SEO ─────────────────────────────────────────────────────────

function usePlanningPageSEO() {
  useEffect(() => {
    const prev = {
      title: document.title,
      desc: document.querySelector('meta[name="description"]')?.getAttribute('content'),
      ogTitle: document.querySelector('meta[property="og:title"]')?.getAttribute('content'),
      canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href'),
    };
    document.title = 'Planifier mon voyage — Triply';
    document.querySelector('meta[name="description"]')?.setAttribute('content',
      'Planifiez votre voyage étape par étape avec Triply : créez votre itinéraire, organisez vos villes, lieux et activités, gérez vos dates — gratuitement et en ligne.'
    );
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', 'Planifier mon voyage — Triply');
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', 'https://travel-map-blush.vercel.app/planifier');
    return () => {
      document.title = prev.title;
      if (prev.desc) document.querySelector('meta[name="description"]')?.setAttribute('content', prev.desc);
      if (prev.ogTitle) document.querySelector('meta[property="og:title"]')?.setAttribute('content', prev.ogTitle);
      if (prev.canonical) document.querySelector('link[rel="canonical"]')?.setAttribute('href', prev.canonical);
    };
  }, []);
}

// ─── Topbar ───────────────────────────────────────────────────────

function PlanningTopbar() {
  return (
    <header className="pp-topbar">
      <Link to="/" className="pp-topbar-brand" aria-label="Retour à la carte">
        <img src="/icon.png" alt="Triply" className="pp-brand-icon" />
        <span className="pp-brand-name">Triply</span>
      </Link>
      <nav className="pp-topbar-nav">
        <span className="pp-topbar-breadcrumb">
          <span className="pp-topbar-breadcrumb-sep">/</span>
          Planifier
        </span>
      </nav>
      <div className="pp-topbar-right">
        <Link to="/" className="pp-btn pp-btn--home">
          <span className="pp-btn--home-icon">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
          </span>
          Accueil
        </Link>
      </div>
    </header>
  );
}

// ─── Invitations en attente (bandeau) ────────────────────────────

function PendingInvitations({ pending, onAccept, onDecline }) {
  if (!pending.length) return null;
  return (
    <div className="pp-pending-invites">
      {pending.map(inv => (
        <div key={inv.id} className="pp-pending-invite">
          <div className="pp-pending-invite-text">
            <span className="pp-pending-invite-from">{inv.inviter?.display_name || 'Quelqu\'un'}</span>
            {' '}vous invite au voyage{' '}
            <strong>« {inv.trips?.title || 'Voyage'} »</strong>
          </div>
          <div className="pp-pending-invite-actions">
            <button className="pp-btn pp-btn--primary pp-btn--xs" onClick={() => onAccept(inv.id)}>Accepter</button>
            <button className="pp-btn pp-btn--ghost pp-btn--xs" onClick={() => onDecline(inv.id)}>Refuser</button>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Main content (requires auth) ────────────────────────────────

function PlanningMain() {
  const { user } = useAuth();
  const {
    trips, loading, selectedTripId, setSelectedTripId, tripData,
    createTrip, updateTrip, deleteTrip, leaveTrip, duplicateTrip,
    addDestination, removeDestination,
    addCity, addDaytrip, updateCity, removeCity, reorderCities,
    addActivity, updateActivity, removeActivity, reorderActivities,
    duplicateActivity, undoRemoveActivity,
    addGroup, clearAutoGroups, updateGroup, removeGroup, assignActivityToGroup, assignGroupToDay, assignCityToDay,
    addLodging, updateLodging, removeLodging,
  } = useTrips(user?.id);

  const { pending, accept: acceptInvite, decline: declineInvite } = useInvitations(user?.id);

  // Ouvre directement un voyage précis si on arrive via ?trip=<id> (ex : après avoir
  // accepté une invitation depuis le panneau de notifications général)
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const tripParam = searchParams.get('trip');
    if (tripParam) setSelectedTripId(tripParam);
  }, [searchParams, setSelectedTripId]);

  const handleAcceptInvite = async (id) => {
    const ok = await acceptInvite(id);
    if (ok) {
      // Reload trips to include the newly accepted shared trip
      window.location.reload();
    }
  };

  return (
    <div className="pp-layout">
      <TripSidebar
        trips={trips}
        selectedId={selectedTripId}
        userId={user?.id}
        onSelect={setSelectedTripId}
        onCreate={createTrip}
        onDelete={deleteTrip}
        onLeaveTrip={leaveTrip}
        onDuplicate={duplicateTrip}
        pendingCount={pending.length}
      />

      <main className="pp-main">
        <PendingInvitations
          pending={pending}
          onAccept={handleAcceptInvite}
          onDecline={declineInvite}
        />

        {loading ? (
          <div className="pp-loading">
            <div className="pp-spinner" />
            <span>Chargement…</span>
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
            onUpdateActivity={updateActivity}
            onReorderActivities={reorderActivities}
            onDuplicateActivity={duplicateActivity}
            onUndoRemoveActivity={undoRemoveActivity}
            onAddGroup={addGroup}
            onClearAutoGroups={clearAutoGroups}
            onUpdateGroup={updateGroup}
            onRemoveGroup={removeGroup}
            onAssignActivityToGroup={assignActivityToGroup}
            onAssignGroupToDay={assignGroupToDay}
            onAssignCityToDay={assignCityToDay}
            onAddLodging={addLodging}
            onUpdateLodging={updateLodging}
            onRemoveLodging={removeLodging}
            onLeaveTrip={leaveTrip}
          />
        ) : (
          <EmptyEditor onCreate={createTrip} />
        )}
      </main>
    </div>
  );
}

// ─── Page entry point ─────────────────────────────────────────────

export default function PlanningPage() {
  usePlanningPageSEO();
  const { user, authModalOpen, setAuthModalOpen } = useAuth();

  if (!user) {
    return (
      <div className="pp-app">
        <PlanningTopbar />
        <PlanningGate onConnect={() => setAuthModalOpen(true)} />
        {authModalOpen && <AuthModal onClose={() => setAuthModalOpen(false)} />}
        <div className="sr-only">
          <h1>Planifier mon voyage — Triply</h1>
          <p>Créez et organisez votre itinéraire de voyage étape par étape avec Triply.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pp-app">
      <PlanningTopbar />
      <div className="sr-only"><h1>Planifier mon voyage — Triply</h1></div>
      <PlanningMain />
    </div>
  );
}
