// Traduit en lot (une requête HTTP, plusieurs champs) le contenu communautaire
// affiché sur le site (noms de destinations/lieux, descriptions, avis), avec
// cache permanent — voir api/_lib/translation.js. Route publique (lecture de
// contenu déjà public, comme les composants qui l'appellent aujourd'hui via
// Supabase directement) : pas d'authentification requise.
//
// Le texte source est TOUJOURS relu en base ici, jamais pris tel quel dans le
// corps de la requête : accepter le `sourceText` du client permettrait à
// n'importe qui (route non authentifiée) de faire traduire — et donc mettre
// en cache — un texte arbitraire de son choix sous l'id d'un contenu existant,
// défaçant silencieusement ce que les autres visiteurs voient ensuite pour ce
// contentId/field/langue.
import { getAdminClient } from './_lib/supabaseAdmin.js';
import { getTranslatedField, getTranslatedPlaceName, getTranslatedActivityName, TranslationUnavailableError, SUPPORTED_TARGET_LANGUAGES } from './_lib/translation.js';

const MAX_ITEMS = 200;

// Mappe chaque content_type vers sa table et sa colonne réelles en base.
const SOURCE_TABLES = {
  user_destination_name: { table: 'user_destinations', column: 'name' },
  user_destination_description: { table: 'user_destinations', column: 'description' },
  // Nom d'un lieu communautaire ("à ne pas manquer" ajouté par un visiteur,
  // pas l'entrée éditoriale mustSee figée dans src/data/<pays>.js, déjà
  // bilingue à la main) : nom propre, jamais traduit mot à mot — `viaWikipedia`
  // route ce champ vers getTranslatedPlaceName (Wikipédia/Wikidata) plutôt que
  // getTranslatedField (Google Translate), voir plus bas dans ce fichier.
  // Remis en place le 2026-07-24 : un premier essai via Google Translate
  // traduisait à tort des noms comme "High Line"/"Ground Zero" en français
  // ("Ligne haute", "Point zéro"), d'où sa désactivation complète le
  // 2026-07-23 — au prix, sans traduction du tout, d'un lieu saisi par son
  // auteur dans une langue qui reste affiché tel quel pour tout le monde.
  destination_place_name: { table: 'destination_places', column: 'name', viaWikipedia: true },
  static_destination_place_name: { table: 'static_destination_places', column: 'name', viaWikipedia: true },
  review_comment: { table: 'reviews', column: 'comment' },
  destination_review_comment: { table: 'destination_reviews', column: 'comment' },
  country_recommendation_description: { table: 'country_recommendations', column: 'description' },
  // Nom d'une activité d'un modèle de planning (ex. "Cité Interdite"/"Forbidden
  // City", mais aussi "hotpot"/"Maison de thé du parc du Peuple") : pas
  // toujours un nom de lieu propre repérable sur Wikipédia (plats, activités,
  // lieux descriptifs) — `viaWikipediaThenGoogle` essaie Wikipédia d'abord
  // (fiable pour les vrais noms propres, évite le "High Line" → "Ligne
  // haute"), puis Google Translate en second essai si rien trouvé, plutôt
  // que de laisser un texte descriptif non traduit (voir
  // getTranslatedActivityName).
  trip_template_activity_name: { table: 'trip_template_activities', column: 'name', viaWikipediaThenGoogle: true },
  // Nom de ville d'un modèle partagé (ex. "Pékin"/"Grenade" saisi par son
  // auteur) : nom propre, comme les noms de lieux ci-dessus — même souci que
  // Google Translate sur les noms de lieux, mais encore plus visible ici :
  // "Grenade" (ville espagnole, Granada) traduit mot à mot en anglais reste
  // "Grenade" (l'arme, ou confondu avec l'île de Grenada) au lieu de
  // "Granada" — aucune indication de langue source fiable ne corrige ça,
  // contrairement à Wikipédia qui connaît directement le bon nom de la
  // ville dans chaque langue (voir wikipediaPlaceName.js). Remplace
  // l'ancien passage par Google Translate (et son besoin de forcer
  // source_language='fr' pour les itinéraires éditoriaux, needsEditorialCheckDirect,
  // retiré avec ce changement — la recherche Wikipédia n'a pas besoin de
  // connaître la langue source).
  trip_template_city_name: { table: 'trip_templates', column: 'city_name', viaWikipedia: true },
};

function sourceMapping(contentType, field) {
  return SOURCE_TABLES[`${contentType}_${field}`] ?? null;
}

async function fetchRealSourceText(admin, mapping, contentId) {
  const { data } = await admin.from(mapping.table).select(mapping.column).eq('id', contentId).maybeSingle();
  return data?.[mapping.column] ?? null;
}

// Un itinéraire éditorial (is_editorial=true, écrit par l'équipe) est
// toujours saisi en français — nécessaire UNIQUEMENT pour forcer la langue
// source du repli Google Translate de getTranslatedActivityName (Wikipédia,
// lui, n'a pas besoin de cette information). Sans ce forcage, l'auto-
// détection de Google Translate se trompe parfois sur ces noms courts et
// saturés de noms propres (voir getTranslatedActivityName).
async function isEditorialActivity(admin, activityId) {
  const { data } = await admin
    .from('trip_template_activities')
    .select('trip_template_days(trip_templates(is_editorial))')
    .eq('id', activityId)
    .maybeSingle();
  return !!data?.trip_template_days?.trip_templates?.is_editorial;
}
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, reason: 'Méthode non autorisée.' });
  }

  let admin;
  try { admin = getAdminClient(); } catch {
    return res.status(500).json({ ok: false, reason: 'Configuration serveur manquante.' });
  }

  const body = typeof req.body === 'string' ? safeParse(req.body) : (req.body || {});
  const { items, targetLanguage } = body;

  if (!Array.isArray(items) || !items.length || !SUPPORTED_TARGET_LANGUAGES.includes(targetLanguage)) {
    return res.status(400).json({ ok: false, reason: 'Requête invalide.' });
  }
  const cleanItems = items.slice(0, MAX_ITEMS).filter(
    (it) => it && typeof it.contentType === 'string' && it.contentId != null && typeof it.field === 'string'
  );

  const translations = {};
  try {
    await Promise.all(
      cleanItems.map(async (it) => {
        const mapping = sourceMapping(it.contentType, it.field);
        if (!mapping) return; // type inconnu
        const realSourceText = await fetchRealSourceText(admin, mapping, it.contentId);
        if (!realSourceText) return; // ligne introuvable : rien à traduire
        const key = `${it.contentType}:${it.contentId}:${it.field}`;
        if (mapping.viaWikipedia) {
          translations[key] = await getTranslatedPlaceName({
            admin,
            contentType: it.contentType,
            contentId: it.contentId,
            field: it.field,
            sourceText: realSourceText,
            targetLanguage,
          });
          return;
        }
        if (mapping.viaWikipediaThenGoogle) {
          const isEditorial = await isEditorialActivity(admin, it.contentId);
          translations[key] = await getTranslatedActivityName({
            admin,
            contentType: it.contentType,
            contentId: it.contentId,
            field: it.field,
            sourceText: realSourceText,
            isEditorial,
            targetLanguage,
          });
          return;
        }
        translations[key] = await getTranslatedField({
          admin,
          contentType: it.contentType,
          contentId: it.contentId,
          field: it.field,
          sourceText: realSourceText,
          targetLanguage,
        });
      })
    );
  } catch (err) {
    if (err instanceof TranslationUnavailableError) {
      console.error('[get-translated-content] indisponible:', err.message);
      // Repli : les champs déjà résolus restent utilisables, les manquants
      // seront simplement absents de la réponse (l'appelant garde alors le texte original).
    } else {
      throw err;
    }
  }

  return res.status(200).json({ ok: true, translations });
}

function safeParse(s) { try { return JSON.parse(s); } catch { return {}; } }
