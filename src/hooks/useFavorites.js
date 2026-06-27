import { useState, useCallback, useEffect, useRef } from "react";
import { supabase } from "../lib/supabase";

const KEY = "triply-favorites";

function loadLocal() {
  try { return JSON.parse(localStorage.getItem(KEY)) || []; }
  catch { return []; }
}

export function useFavorites(user) {
  const [favorites, setFavorites] = useState(loadLocal);
  const prevUser = useRef(null);

  useEffect(() => {
    const wasNull = prevUser.current === null;
    const isNowSet = user !== null && user !== undefined;

    if (wasNull && isNowSet) {
      // Login : merger local + DB
      (async () => {
        const local = loadLocal();
        const { data } = await supabase.from('carnet_favorites').select('country_code').eq('user_id', user.id);
        const remote = (data || []).map((r) => r.country_code);
        const merged = [...new Set([...local, ...remote])];
        if (local.length > 0) {
          await supabase.from('carnet_favorites').upsert(
            local.map((code) => ({ user_id: user.id, country_code: code })),
            { onConflict: 'user_id,country_code' }
          );
        }
        setFavorites(merged);
        localStorage.removeItem(KEY);
      })();
    } else if (!isNowSet && prevUser.current !== null) {
      // Logout : remettre les données en local
      const current = favorites;
      localStorage.setItem(KEY, JSON.stringify(current));
      setFavorites(current);
    } else if (isNowSet) {
      // Déjà connecté au montage
      supabase.from('carnet_favorites').select('country_code').eq('user_id', user.id).then(({ data }) => {
        if (data) setFavorites(data.map((r) => r.country_code));
      });
    }

    prevUser.current = user ?? null;
  }, [user]);

  const toggle = useCallback(async (code) => {
    if (!user) {
      setFavorites((prev) => {
        const next = prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code];
        localStorage.setItem(KEY, JSON.stringify(next));
        return next;
      });
      return;
    }
    setFavorites((prev) => {
      if (prev.includes(code)) {
        supabase.from('carnet_favorites').delete().eq('user_id', user.id).eq('country_code', code);
        return prev.filter((c) => c !== code);
      }
      supabase.from('carnet_favorites').upsert({ user_id: user.id, country_code: code }, { onConflict: 'user_id,country_code' });
      return [...prev, code];
    });
  }, [user]);

  const remove = useCallback(async (code) => {
    if (!user) {
      setFavorites((prev) => {
        const next = prev.filter((c) => c !== code);
        localStorage.setItem(KEY, JSON.stringify(next));
        return next;
      });
      return;
    }
    await supabase.from('carnet_favorites').delete().eq('user_id', user.id).eq('country_code', code);
    setFavorites((prev) => prev.filter((c) => c !== code));
  }, [user]);

  return { favorites, toggle, remove };
}
