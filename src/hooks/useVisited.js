import { useState, useCallback } from "react";

const KEY = "travel-map-visited";

function load() {
  try { return JSON.parse(localStorage.getItem(KEY)) || []; }
  catch { return []; }
}

export function useVisited() {
  const [visited, setVisited] = useState(load);

  const toggle = useCallback((code) => {
    setVisited((prev) => {
      const next = prev.includes(code)
        ? prev.filter((c) => c !== code)
        : [...prev, code];
      localStorage.setItem(KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const remove = useCallback((code) => {
    setVisited((prev) => {
      const next = prev.filter((c) => c !== code);
      localStorage.setItem(KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  return { visited, toggle, remove };
}
