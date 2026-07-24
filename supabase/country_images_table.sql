-- Cache d'UNE photo générique par pays, utilisée en repli quand une ville n'a
-- AUCUNE photo exploitable après la cascade complète (city_images.not_found)
-- — pour ne jamais laisser un carré blanc côté front. Résolue une seule fois
-- par pays (comme city_images), jamais re-recherchée. Voir
-- resolveCountryFallbackImage (api/_lib/cityImages.js).
create table if not exists country_images (
  id uuid primary key default gen_random_uuid(),
  country_code text not null unique,
  image_url text,
  thumb_url text,
  unsplash_id text,
  author_name text,
  author_url text,
  likes int,
  fetched_at timestamptz not null default now()
);

alter table country_images enable row level security;

drop policy if exists "country_images_public_read" on country_images;
create policy "country_images_public_read"
  on country_images for select
  using (true);

-- Aucune policy insert/update/delete : seules les écritures via service role
-- sont autorisées, qui contournent RLS.
