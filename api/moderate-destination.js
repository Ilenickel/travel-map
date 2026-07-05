// Endpoint serveur : modère une destination communautaire (création ou édition)
// AVANT de l'écrire en base. Le navigateur a déjà téléversé les photos dans le
// bucket `destination-photos`, puis appelle cette fonction. En cas de refus, les
// photos fraîchement téléversées sont supprimées et un motif est renvoyé.
import { getAdminClient, verifyUser } from './_lib/supabaseAdmin.js';
import { moderateContent, checkSemanticDuplicate, ModerationUnavailableError } from './_lib/moderation.js';
import { invalidateTranslations } from './_lib/translation.js';

// ── Similarité de noms (miroir de la logique client) ─────────────────────────
function normalizeName(str) {
  return str.toLowerCase()
    .normalize('NFD').replace(/\p{Mn}/gu, '')
    .replace(/\b(le|la|les|l|de|du|des|un|une|the|a|an)\b\s*/g, '')
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function levenshtein(a, b) {
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  const row = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let prev = i;
    for (let j = 1; j <= b.length; j++) {
      const next = a[i - 1] === b[j - 1] ? row[j - 1] : 1 + Math.min(prev, row[j], row[j - 1]);
      row[j - 1] = prev;
      prev = next;
    }
    row[b.length] = prev;
  }
  return row[b.length];
}

function isSimilar(a, b) {
  const na = normalizeName(a);
  const nb = normalizeName(b);
  if (!na || !nb) return false;
  if (na === nb) return true;
  if (na.includes(nb) || nb.includes(na)) return true;
  const maxLen = Math.max(na.length, nb.length);
  return maxLen > 0 && (1 - levenshtein(na, nb) / maxLen) >= 0.75;
}
// ─────────────────────────────────────────────────────────────────────────────

const PHOTO_BUCKET = 'destination-photos';

async function cleanupPhotos(admin, paths) {
  const valid = (paths || []).filter(Boolean);
  if (!valid.length) return;
  try {
    await admin.storage.from(PHOTO_BUCKET).remove(valid);
  } catch (err) {
    console.error('[moderate-destination] cleanup photos:', err.message);
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, reason: 'Méthode non autorisée.' });
  }

  let admin;
  try {
    admin = getAdminClient();
  } catch (err) {
    console.error('[moderate-destination] config:', err.message);
    return res.status(500).json({ ok: false, reason: 'Configuration serveur manquante.' });
  }

  const body = typeof req.body === 'string' ? safeParse(req.body) : (req.body || {});
  const {
    authToken,
    countryCode,
    countryName = null,
    name = '',
    description = '',
    tags = [],
    cover = {},
    places = [],
    existingDestinationId = null,
    mergeIntoId = null,
    existingNames = [],
  } = body;

  // Chemins des photos NOUVELLEMENT téléversées (pour nettoyage en cas de refus)
  const newPaths = [
    cover?.path,
    ...(Array.isArray(places) ? places.map((p) => p?.path) : []),
  ].filter(Boolean);

  // 1) Authentification
  const user = await verifyUser(admin, authToken);
  if (!user) {
    await cleanupPhotos(admin, newPaths);
    return res.status(401).json({ ok: false, reason: 'Session expirée, veuillez vous reconnecter.' });
  }

  // 2) Validation
  const trimmedName = typeof name === 'string' ? name.trim() : '';
  const trimmedDesc = typeof description === 'string' ? description.trim() : '';
  const cleanPlaces = (Array.isArray(places) ? places : [])
    .map((p) => ({ name: typeof p?.name === 'string' ? p.name.trim() : '', url: p?.url }))
    .filter((p) => p.name && p.url);

  if (!countryCode || !trimmedName || !trimmedDesc || (!mergeIntoId && !cover?.url) || cleanPlaces.length < 1) {
    await cleanupPhotos(admin, newPaths);
    return res.status(400).json({ ok: false, reason: 'Requête invalide.' });
  }

  const country = countryName ? { code: countryCode, name: countryName } : { code: countryCode, name: countryCode };

  // 3) Modération (ignorée en mode fusion : le premier appel l'a déjà passée)
  if (!mergeIntoId) try {
    const verdict = await moderateContent({
      texts: [
        { label: 'Nom de la destination', value: trimmedName },
        { label: 'Description', value: trimmedDesc },
        ...cleanPlaces.map((p, i) => ({ label: `Nom du lieu ${i + 1}`, value: p.name })),
      ],
      images: [
        { url: cover.url, expected: trimmedName, labelFr: 'photo de couverture', detail: 'high' },
        ...cleanPlaces.map((p) => ({
          url: p.url,
          expected: p.name,
          parent: trimmedName,
          labelFr: `photo du lieu « ${p.name} »`,
          detail: 'low',
        })),
      ],
      country,
      // Vérification de cohérence factuelle uniquement si on dispose d'un vrai
      // nom de pays (et pas seulement du code) pour la situer géographiquement.
      coherence: countryName
        ? {
            name: trimmedName,
            description: trimmedDesc,
            placeNames: cleanPlaces.map((p) => p.name),
          }
        : null,
    });

    if (!verdict.ok) {
      await cleanupPhotos(admin, newPaths);
      return res.status(200).json({ ok: false, reason: verdict.reason });
    }
  } catch (err) {
    await cleanupPhotos(admin, newPaths);
    if (err instanceof ModerationUnavailableError) {
      console.error('[moderate-destination] indisponible:', err.message);
      return res.status(503).json({
        ok: false,
        unavailable: true,
        reason: 'La vérification est momentanément indisponible. Réessayez dans un instant.',
      });
    }
    console.error('[moderate-destination] erreur modération:', err);
    return res.status(500).json({ ok: false, reason: 'Une erreur est survenue lors de la vérification.' });
  }

  // 4) Check doublon cross-langue (IA sémantique) — uniquement pour une nouvelle destination
  if (!existingDestinationId && !mergeIntoId && Array.isArray(existingNames) && existingNames.length > 0) {
    const semCheck = await checkSemanticDuplicate(trimmedName, existingNames);
    if (semCheck.duplicate) {
      // Trouver l'id de la destination communautaire correspondante pour la fusion
      // On cherche dans user_destinations du même pays (les destinations statiques n'ont pas d'id en DB)
      const { data: communityDests } = await admin
        .from('user_destinations')
        .select('id, name')
        .eq('country_code', countryCode);
      const matched = (communityDests || []).find((d) => d.name === semCheck.matchedName);
      // Nettoyer la photo de couverture (pas réutilisable pour la fusion)
      if (cover?.path) await cleanupPhotos(admin, [cover.path]);
      return res.status(200).json({
        ok: false,
        duplicate: true,
        matchedName: semCheck.matchedName,
        existingDestId: matched?.id ?? null, // null = destination statique, pas de fusion possible
      });
    }
  }

  // 5) Écriture en base (service_role)
  const safeTags = Array.isArray(tags) ? tags.filter((t) => typeof t === 'string').slice(0, 7) : [];

  // ── Branche fusion ──────────────────────────────────────────────────────────
  if (mergeIntoId) {
    const { data: targetDest } = await admin
      .from('user_destinations')
      .select('id, destination_places(id, name, sort_order)')
      .eq('id', mergeIntoId)
      .maybeSingle();

    if (!targetDest) {
      await cleanupPhotos(admin, newPaths);
      return res.status(404).json({ ok: false, reason: 'Destination cible introuvable.' });
    }

    const existingPlaceNames = (targetDest.destination_places || []).map((p) => p.name);
    const maxOrder = (targetDest.destination_places || []).reduce((m, p) => Math.max(m, p.sort_order ?? 0), -1);

    const toAdd = [];
    const toClean = cover?.path ? [cover.path] : [];

    for (const p of places) {
      const cleanName = typeof p?.name === 'string' ? p.name.trim() : '';
      if (!cleanName || !p.url) continue;
      if (existingPlaceNames.some((en) => isSimilar(en, cleanName))) {
        if (p.path) toClean.push(p.path);
      } else {
        toAdd.push({ name: cleanName, image_url: p.url, image_path: p.path ?? null });
      }
    }

    await cleanupPhotos(admin, toClean);

    if (toAdd.length > 0) {
      await admin.from('destination_places').insert(
        toAdd.map((p, i) => ({ ...p, sort_order: maxOrder + 1 + i, destination_id: mergeIntoId, user_id: user.id }))
      );
    }

    return res.status(200).json({ ok: true, destinationId: mergeIntoId, merged: true, addedPlaces: toAdd.length });
  }
  // ───────────────────────────────────────────────────────────────────────────

  const finalPlaces = cleanPlaces.map((p, i) => ({ name: p.name, image_url: p.url, image_path: p.path ?? null, sort_order: i, user_id: user.id }));

  if (!existingDestinationId) {
    const { data: newDest, error: insErr } = await admin
      .from('user_destinations')
      .insert({
        user_id: user.id,
        country_code: countryCode,
        name: trimmedName,
        description: trimmedDesc,
        image_url: cover.url,
        tags: safeTags,
      })
      .select('id')
      .single();
    if (insErr) {
      console.error('[moderate-destination] insert dest:', insErr);
      return res.status(500).json({ ok: false, reason: "La destination n'a pas pu être créée. Réessayez." });
    }
    const { error: placesErr } = await admin
      .from('destination_places')
      .insert(finalPlaces.map((p) => ({ ...p, destination_id: newDest.id })));
    if (placesErr) {
      console.error('[moderate-destination] insert places:', placesErr);
      return res.status(500).json({ ok: false, reason: "Les lieux n'ont pas pu être enregistrés. Réessayez." });
    }
    return res.status(200).json({ ok: true, destinationId: newDest.id });
  }

  // Édition : la destination doit appartenir à l'utilisateur
  const { data: existing, error: ownErr } = await admin
    .from('user_destinations')
    .select('user_id')
    .eq('id', existingDestinationId)
    .maybeSingle();
  if (ownErr || !existing) {
    return res.status(404).json({ ok: false, reason: 'Destination introuvable.' });
  }
  if (existing.user_id !== user.id) {
    return res.status(403).json({ ok: false, reason: 'Action non autorisée.' });
  }

  const { error: updErr } = await admin
    .from('user_destinations')
    .update({
      name: trimmedName,
      description: trimmedDesc,
      image_url: cover.url,
      tags: safeTags,
      updated_at: new Date().toISOString(),
    })
    .eq('id', existingDestinationId);
  if (updErr) {
    console.error('[moderate-destination] update dest:', updErr);
    return res.status(500).json({ ok: false, reason: "Les modifications n'ont pas pu être enregistrées. Réessayez." });
  }
  await invalidateTranslations(admin, 'user_destination', existingDestinationId);

  // En édition : on ne remplace que les lieux appartenant à l'éditeur
  // pour ne pas effacer les lieux d'autres contributeurs.
  await admin.from('destination_places').delete()
    .eq('destination_id', existingDestinationId)
    .eq('user_id', user.id);
  const { error: placesErr } = await admin
    .from('destination_places')
    .insert(finalPlaces.map((p) => ({ ...p, destination_id: existingDestinationId })));
  if (placesErr) {
    console.error('[moderate-destination] update places:', placesErr);
    return res.status(500).json({ ok: false, reason: "Les lieux n'ont pas pu être mis à jour. Réessayez." });
  }

  return res.status(200).json({ ok: true, destinationId: existingDestinationId });
}

function safeParse(s) {
  try { return JSON.parse(s); } catch { return {}; }
}
