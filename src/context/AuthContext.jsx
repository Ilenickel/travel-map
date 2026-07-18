import { createContext, useContext, useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { supabase } from '../lib/supabase';
import { useToast } from './ToastContext';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const { t } = useTranslation('app');
  const toast = useToast();
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  // Supabase JS ne distingue pas nativement "refresh de session échoué" de
  // "déconnexion volontaire" : on approxime via ces deux refs plutôt que
  // d'avertir l'utilisateur à chaque signOut() normal.
  const intentionalSignOutRef = useRef(false);
  const hadUserRef = useRef(false);

  async function fetchAdminStatus(userId) {
    if (!userId) { setIsAdmin(false); return; }
    const { data } = await supabase.from('profiles').select('is_admin').eq('id', userId).maybeSingle();
    setIsAdmin(data?.is_admin === true);
  }

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      const u = session?.user ?? null;
      hadUserRef.current = !!u;
      setUser(u);
      fetchAdminStatus(u?.id);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      const u = session?.user ?? null;
      if (!u && hadUserRef.current && !intentionalSignOutRef.current) {
        // Un utilisateur était connecté juste avant et ce n'est pas nous qui
        // avons appelé signOut() : la session a probablement expiré / le
        // refresh a échoué, plutôt qu'une déconnexion volontaire.
        toast?.error(t('auth.sessionExpired'));
      }
      hadUserRef.current = !!u;
      setUser(u);
      fetchAdminStatus(u?.id);
      if (u) {
        // Crée le profil s'il n'existe pas encore, sans écraser les données existantes
        const displayName = u.user_metadata?.display_name || u.user_metadata?.full_name || u.email?.split('@')[0] || '';
        supabase.from('profiles').select('id, display_name').eq('id', u.id).maybeSingle()
          .then(({ data }) => {
            if (!data) {
              supabase.from('profiles').insert({
                id: u.id, display_name: displayName, avatar_url: u.user_metadata?.avatar_url || null,
              }).then(() => {});
            } else if (!data.display_name) {
              supabase.from('profiles').update({ display_name: displayName }).eq('id', u.id).then(() => {});
            }
          });
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  async function signUp(email, password, displayName) {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { display_name: displayName } },
    });
    return { error };
  }

  async function signIn(email, password) {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    return { error };
  }

  async function signInWithGoogle() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.origin },
    });
    return { error };
  }

  async function signOut() {
    intentionalSignOutRef.current = true;
    try {
      await supabase.auth.signOut();
    } finally {
      intentionalSignOutRef.current = false;
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAdmin, loading, signUp, signIn, signInWithGoogle, signOut, authModalOpen, setAuthModalOpen }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
