-- Cache permanent des photos de villes/pays récupérées via l'API Unsplash.
-- Alimenté une première fois par scripts/fetch-city-images.mjs (villes des
-- suggestions éditoriales), puis au fil de l'eau par les utilisateurs qui
-- ajoutent leurs propres villes (route API future, service role uniquement —
-- la clé Unsplash ne doit jamais être exposée côté client).
--
-- Clé = (city_name, country_code) normalisés en minuscules : une ville n'est
-- recherchée qu'une seule fois, quelle que soit la source de la demande
-- (script d'import ou utilisateur). Pas de colonne "source" : le comportement
-- est identique dans les deux cas, seule la présence en base compte.
--
-- author_name/author_url/unsplash_id sont stockés dès maintenant pour
-- respecter les guidelines d'attribution Unsplash le jour où on affichera un
-- crédit visible — non affiché pour l'instant (démo), donc pas utilisé côté
-- client tant que cette UI n'existe pas.
--
-- not_found = true : recherché mais aucun résultat exploitable (évite de
-- retenter une recherche vouée à l'échec à chaque passage du script). Les
-- colonnes image sont alors NULL.
create table if not exists city_images (
  id uuid primary key default gen_random_uuid(),
  city_name text not null,
  country_code text not null,
  city_name_key text generated always as (lower(trim(city_name))) stored,
  image_url text,
  thumb_url text,
  unsplash_id text,
  author_name text,
  author_url text,
  likes int,
  query_used text not null,
  not_found boolean not null default false,
  fetched_at timestamptz not null default now(),
  unique (city_name_key, country_code)
);

alter table city_images enable row level security;

-- Lecture publique (l'app affiche ces photos à tout visiteur, connecté ou non).
drop policy if exists "city_images_public_read" on city_images;
create policy "city_images_public_read"
  on city_images for select
  using (true);

-- Aucune policy insert/update/delete : seules les écritures via service role
-- (script + future route API) sont autorisées, qui contournent RLS.
