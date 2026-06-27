import { useState, useCallback, useEffect, useRef } from "react";
import { supabase } from "../lib/supabase";

const KEY = "triply-visited";

function loadLocal() {
  try { return JSON.parse(localStorage.getItem(KEY)) || []; }
  catch { return []; }
}

export function useVisited(user) {
  const [visited, setVisited] = useState(loadLocal);
  const prevUser = useRef(null);

  useEffect(() => {
    const wasNull = prevUser.current === null;
    const isNowSet = user !== null && user !== undefined;

    if (wasNull && isNowSet) {
      (async () => {
        const local = loadLocal();
        const { data } = await supabase.from('carnet_visited').select('country_code').eq('user_id', user.id);
        const remote = (data || []).map((r) => r.country_code);
        const merged = [...new Set([...local, ...remote])];
        if (local.length > 0) {
          await supabase.from('carnet_visited').upsert(
            local.map((code) => ({ user_id: user.id, country_code: code })),
            { onConflict: 'user_id,country_code' }
          );
        }
        setVisited(merged);
        localStorage.removeItem(KEY);
      })();
    } else if (!isNowSet && prevUser.current !== null) {
      const current = visited;
      localStorage.setItem(KEY, JSON.stringify(current));
      setVisited(current);
    } else if (isNowSet) {
      supabase.from('carnet_visited').select('country_code').eq('user_id', user.id).then(({ data }) => {
        if (data) setVisited(data.map((r) => r.country_code));
      });
    }

    prevUser.current = user ?? null;
  }, [user]);

  const toggle = useCallback(async (code) => {
    if (!user) {
      setVisited((prev) => {
        const next = prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code];
        localStorage.setItem(KEY, JSON.stringify(next));
        return next;
      });
      return;
    }
    setVisited((prev) => {
      if (prev.includes(code)) {
        supabase.from('carnet_visited').delete().eq('user_id', user.id).eq('country_code', code);
        return prev.filter((c) => c !== code);
      }
      supabase.from('carnet_visited').upsert({ user_id: user.id, country_code: code }, { onConflict: 'user_id,country_code' });
      return [...prev, code];
    });
  }, [user]);

  const remove = useCallback(async (code) => {
    if (!user) {
      setVisited((prev) => {
        const next = prev.filter((c) => c !== code);
        localStorage.setItem(KEY, JSON.stringify(next));
        return next;
      });
      return;
    }
    await supabase.from('carnet_visited').delete().eq('user_id', user.id).eq('country_code', code);
    setVisited((prev) => prev.filter((c) => c !== code));
  }, [user]);

  return { visited, toggle, remove };
}
