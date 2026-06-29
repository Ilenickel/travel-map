// Endpoint serveur : modère une destination communautaire (création ou édition)
// AVANT de l'écrire en base. Le navigateur a déjà téléversé les photos dans le
// bucket `destination-photos`, puis appelle cette fonction. En cas de refus, les
// photos fraîchement téléversées sont supprimées et un motif est renvoyé.
import { getAdminClient, verifyUser } from './_lib/supabaseAdmin.js';
import { moderateContent, ModerationUnavailableError } from './_lib/moderation.js';

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

  if (!countryCode || !trimmedName || !trimmedDesc || !cover?.url || cleanPlaces.length < 1) {
    await cleanupPhotos(admin, newPaths);
    return res.status(400).json({ ok: false, reason: 'Requête invalide.' });
  }

  const country = countryName ? { code: countryCode, name: countryName } : { code: countryCode, name: countryCode };

  // 3) Modération
  try {
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

  // 4) Écriture en base (service_role)
  const finalPlaces = cleanPlaces.map((p, i) => ({ name: p.name, image_url: p.url, sort_order: i }));
  const safeTags = Array.isArray(tags) ? tags.filter((t) => typeof t === 'string').slice(0, 7) : [];

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

  await admin.from('destination_places').delete().eq('destination_id', existingDestinationId);
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
