import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { findCountry } from '../data/index';

function relativeTime(dateStr) {
  const diff = (Date.now() - new Date(dateStr)) / 1000;
  const rtf = new Intl.RelativeTimeFormat('fr', { numeric: 'auto' });
  if (diff < 60) return rtf.format(-Math.floor(diff), 'second');
  if (diff < 3600) return rtf.format(-Math.floor(diff / 60), 'minute');
  if (diff < 86400) return rtf.format(-Math.floor(diff / 3600), 'hour');
  if (diff < 2592000) return rtf.format(-Math.floor(diff / 86400), 'day');
  return rtf.format(-Math.floor(diff / 2592000), 'month');
}

const AVATAR_COLORS = ['#6366f1','#8b5cf6','#ec4899','#f59e0b','#10b981','#3b82f6'];

function FlagImage({ country, code }) {
  if (!country?.emoji) return <span style={{ fontSize: 13 }}>{code}</span>;
  const chars = [...country.emoji];
  if (chars.length < 2) return <span>{country.emoji}</span>;
  const alpha2 = chars.slice(0, 2).map((c) => String.fromCharCode(c.codePointAt(0) - 0x1F1E6 + 65)).join('').toLowerCase();
  return (
    <img src={`https://flagcdn.com/w20/${alpha2}.png`} alt={country?.name || code}
      style={{ width: 16, borderRadius: 2, verticalAlign: 'middle', flexShrink: 0 }}
      onError={(e) => { e.currentTarget.style.display = 'none'; }} />
  );
}

export default function NotificationPanel({ notifications, onClose, onOpenCountry, markRead, markAllRead, deleteOne, deleteAll }) {
  const [profiles, setProfiles] = useState({});

  useEffect(() => {
    const ids = [...new Set(notifications.map((n) => n.from_user_id).filter(Boolean))];
    if (!ids.length) return;
    supabase.from('profiles').select('id, display_name, avatar_url').in('id', ids)
      .then(({ data }) => {
        const map = {};
        (data || []).forEach((p) => { map[p.id] = p; });
        setProfiles(map);
      });
  }, [notifications]);

  async function handleClick(notif) {
    await markRead(notif.id);
    if (notif.type === 'new_dest_review') {
      const underscore = notif.destination_id?.indexOf('_') ?? -1;
      const destLocalId = underscore !== -1 ? notif.destination_id.slice(underscore + 1) : null;
      // Cherche l'id de l'avis pour pouvoir scroller jusqu'à lui
      const { data: rev } = await supabase
        .from('destination_reviews')
        .select('id')
        .eq('destination_id', notif.destination_id)
        .eq('user_id', notif.from_user_id)
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle();
      onOpenCountry(notif.country_code, 'destinations', { destId: destLocalId, reviewId: rev?.id ?? null });
    } else {
      onOpenCountry(notif.country_code, 'reviews', { reviewId: notif.review_id ?? null });
    }
    onClose();
  }

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="notif-panel">
      <div className="notif-panel-header">
        <span className="notif-panel-title">Notifications</span>
        <div className="notif-panel-actions">
          {unreadCount > 0 && (
            <button className="notif-mark-all" onClick={markAllRead}>Tout lire</button>
          )}
          {notifications.length > 0 && (
            <button className="notif-clear-all" onClick={deleteAll}>Tout supprimer</button>
          )}
        </div>
      </div>

      {notifications.length === 0 ? (
        <div className="notif-empty">Aucune notification pour l'instant.</div>
      ) : (
        <div className="notif-list">
          {notifications.map((n) => {
            const profile = profiles[n.from_user_id];
            const name = profile?.display_name || 'Voyageur';
            const color = AVATAR_COLORS[name.charCodeAt(0) % AVATAR_COLORS.length];
            const country = findCountry(n.country_code);
            return (
              <div
                key={n.id}
                className={`notif-item${!n.read ? ' notif-item--unread' : ''}`}
              >
                <button className="notif-item-main" onClick={() => handleClick(n)}>
                  <div className="notif-avatar">
                    {profile?.avatar_url
                      ? <img src={profile.avatar_url} alt={name} className="notif-avatar-img" />
                      : <div className="notif-avatar-initials" style={{ background: color }}>{name[0].toUpperCase()}</div>
                    }
                    {!n.read && <span className="notif-unread-dot" />}
                  </div>
                  <div className="notif-content">
                    <p className="notif-text">
                      {n.type === 'new_dest_review' ? (
                        <>
                          <strong>{name}</strong> a publié un avis sur <strong>{n.destination_name}</strong>{' '}
                          <span className="notif-country">
                            <FlagImage country={country} code={n.country_code} />
                            {' '}{country?.name || n.country_code}
                          </span>
                        </>
                      ) : (
                        <>
                          <strong>{name}</strong> a publié un avis sur{' '}
                          <span className="notif-country">
                            <FlagImage country={country} code={n.country_code} />
                            {' '}{country?.name || n.country_code}
                          </span>
                        </>
                      )}
                    </p>
                    <span className="notif-time">{relativeTime(n.created_at)}</span>
                  </div>
                </button>
                <button
                  className="notif-delete-btn"
                  onClick={(e) => { e.stopPropagation(); deleteOne(n.id); }}
                  title="Supprimer"
                >✕</button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
