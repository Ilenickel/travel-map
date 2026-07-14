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
import { getTranslatedField, TranslationUnavailableError, SUPPORTED_TARGET_LANGUAGES } from './_lib/translation.js';

const MAX_ITEMS = 200;

// Mappe chaque content_type vers sa table et sa colonne réelles en base.
const SOURCE_TABLES = {
  user_destination_name: { table: 'user_destinations', column: 'name' },
  user_destination_description: { table: 'user_destinations', column: 'description' },
  destination_place_name: { table: 'destination_places', column: 'name' },
  static_destination_place_name: { table: 'static_destination_places', column: 'name' },
  review_comment: { table: 'reviews', column: 'comment' },
  destination_review_comment: { table: 'destination_reviews', column: 'comment' },
  country_recommendation_description: { table: 'country_recommendations', column: 'description' },
  trip_template_activity_name: { table: 'trip_template_activities', column: 'name' },
};

async function fetchRealSourceText(admin, contentType, contentId, field) {
  const mapping = SOURCE_TABLES[`${contentType}_${field}`];
  if (!mapping) return null;
  const { data } = await admin.from(mapping.table).select(mapping.column).eq('id', contentId).maybeSingle();
  return data?.[mapping.column] ?? null;
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
        const realSourceText = await fetchRealSourceText(admin, it.contentType, it.contentId, it.field);
        if (!realSourceText) return; // type inconnu ou ligne introuvable : rien à traduire
        const key = `${it.contentType}:${it.contentId}:${it.field}`;
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
