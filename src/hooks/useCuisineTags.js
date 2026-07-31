import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

// Tags de cuisine créés par la communauté (table `place_cuisine_tags`).
// Les tags prédéfinis, eux, sont écrits en dur et traduits — voir
// src/lib/cuisineTags.js.
//
// Cache au niveau du module : la liste est courte, quasi statique, et lue par
// plusieurs composants à la fois (filtre de l'explorateur, sélecteur du
// formulaire d'ajout). Sans lui, ouvrir la modale d'ajout depuis l'explorateur
// déclencherait une seconde requête pour exactement les mêmes lignes.
let cache = null;
let inFlight = null;
const subscribers = new Set();

async function fetchTags() {
  const { data, error } = await supabase
    .from('place_cuisine_tags')
    .select('slug, label')
    .order('label');
  if (error) {
    // Échec silencieux : les tags prédéfinis suffisent à faire fonctionner le
    // sélecteur, ce serait disproportionné de bloquer l'écran pour autant.
    console.error('[useCuisineTags]', error);
    return [];
  }
  return data || [];
}

/** Ajoute un tag fraîchement créé au cache, sans refaire de requête. */
export function registerCuisineTags(tags) {
  if (!cache || !tags?.length) return;
  const known = new Set(cache.map((t) => t.slug));
  const added = tags.filter((t) => t.slug && !known.has(t.slug));
  if (!added.length) return;
  cache = [...cache, ...added].sort((a, b) => a.label.localeCompare(b.label));
  subscribers.forEach((fn) => fn(cache));
}

export default function useCuisineTags() {
  const [tags, setTags] = useState(cache || []);

  useEffect(() => {
    subscribers.add(setTags);
    if (cache) {
      setTags(cache);
    } else {
      inFlight = inFlight || fetchTags();
      inFlight.then((rows) => {
        cache = rows;
        inFlight = null;
        subscribers.forEach((fn) => fn(rows));
      });
    }
    return () => { subscribers.delete(setTags); };
  }, []);

  return tags;
}
