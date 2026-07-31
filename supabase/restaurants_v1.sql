-- ═══════════════════════════════════════════════════════════════════════════
-- Restaurants — extension du système « Lieux » existant (2026-07-28)
-- ═══════════════════════════════════════════════════════════════════════════
-- Choix d'architecture : un restaurant EST un lieu. Plutôt que de créer une
-- table `restaurants` parallèle (qui aurait dupliqué le vote, le géocodage, la
-- détection de doublons et la modération déjà en place sur destination_places /
-- static_destination_places), on ajoute une colonne `category` aux deux tables
-- de lieux existantes. Bénéfice direct : `place_votes`, api/geocode-place.js,
-- api/_lib/placeDuplicates.js et api/get-place-suggestions.js fonctionnent tels
-- quels sur les restaurants. Contrainte concrète qui a motivé ce choix : le
-- plan Vercel Hobby est plafonné à 12 fonctions serverless, déjà toutes prises.
--
-- `source` distingue une recommandation de l'équipe ('editorial') d'une
-- contribution d'un membre ('community') — les deux vivent dans la même table
-- et sont donc notables/votables de la même façon, avec un badge distinct à
-- l'affichage.
-- ═══════════════════════════════════════════════════════════════════════════

-- ─── 1. Colonnes communes aux deux tables de lieux ────────────────────────

-- destination_places : lieux rattachés à une destination créée par un membre.
alter table destination_places add column if not exists category text not null default 'place';
alter table destination_places add column if not exists source text not null default 'community';
alter table destination_places add column if not exists budget_level smallint;
alter table destination_places add column if not exists address text;
alter table destination_places add column if not exists geoapify_place_id text;
alter table destination_places add column if not exists rating_avg numeric(3,2);
alter table destination_places add column if not exists rating_count integer not null default 0;
-- `name` conserve TOUJOURS le nom d'origine (« 挽肉と米 »), et `name_latin` une
-- forme en alphabet latin quand elle existe (« Hikiniku to come »).
-- Surtout pas l'inverse : lequel des deux afficher dépend de la langue du
-- lecteur, ce n'est donc pas une décision à figer au moment de la contribution.
-- Le choix est fait à l'affichage (voir src/lib/restaurants.js), ce qui reste
-- correct le jour où le site proposera le japonais.
-- `name_latin` n'est rempli que si le nom d'origine n'est pas déjà en alphabet
-- latin : un restaurant français garde son nom français, quoi qu'il arrive.
alter table destination_places add column if not exists name_latin text;

-- static_destination_places : lieux rattachés à une destination éditoriale.
alter table static_destination_places add column if not exists category text not null default 'place';
alter table static_destination_places add column if not exists source text not null default 'community';
alter table static_destination_places add column if not exists budget_level smallint;
alter table static_destination_places add column if not exists address text;
alter table static_destination_places add column if not exists geoapify_place_id text;
alter table static_destination_places add column if not exists rating_avg numeric(3,2);
alter table static_destination_places add column if not exists rating_count integer not null default 0;
-- Voir le commentaire sur destination_places.name_latin ci-dessus.
alter table static_destination_places add column if not exists name_latin text;

-- Reprise des lignes créées par la toute première version de cette migration,
-- où les deux colonnes étaient inversées : `name` portait la forme latine et
-- `name_local` l'original. On rétablit le sens, puis on retire l'ancienne
-- colonne. Le bloc ne fait rien si `name_local` n'existe déjà plus, pour que le
-- fichier reste rejouable.
do $$
begin
  if exists (
    select 1 from information_schema.columns
     where table_name = 'destination_places' and column_name = 'name_local'
  ) then
    execute $q$
      update destination_places
         set name_latin = name, name = name_local
       where name_local is not null and name_latin is null
    $q$;
    alter table destination_places drop column name_local;
  end if;

  if exists (
    select 1 from information_schema.columns
     where table_name = 'static_destination_places' and column_name = 'name_local'
  ) then
    execute $q$
      update static_destination_places
         set name_latin = name, name = name_local
       where name_local is not null and name_latin is null
    $q$;
    alter table static_destination_places drop column name_local;
  end if;
end $$;

-- Contraintes de domaine (idempotentes : `do $$` car `add constraint if not
-- exists` n'existe pas en PostgreSQL).
do $$
begin
  if not exists (select 1 from pg_constraint where conname = 'destination_places_category_chk') then
    alter table destination_places add constraint destination_places_category_chk
      check (category in ('place', 'restaurant'));
  end if;
  if not exists (select 1 from pg_constraint where conname = 'destination_places_source_chk') then
    alter table destination_places add constraint destination_places_source_chk
      check (source in ('community', 'editorial'));
  end if;
  if not exists (select 1 from pg_constraint where conname = 'destination_places_budget_chk') then
    alter table destination_places add constraint destination_places_budget_chk
      check (budget_level is null or budget_level between 1 and 3);
  end if;

  if not exists (select 1 from pg_constraint where conname = 'static_destination_places_category_chk') then
    alter table static_destination_places add constraint static_destination_places_category_chk
      check (category in ('place', 'restaurant'));
  end if;
  if not exists (select 1 from pg_constraint where conname = 'static_destination_places_source_chk') then
    alter table static_destination_places add constraint static_destination_places_source_chk
      check (source in ('community', 'editorial'));
  end if;
  if not exists (select 1 from pg_constraint where conname = 'static_destination_places_budget_chk') then
    alter table static_destination_places add constraint static_destination_places_budget_chk
      check (budget_level is null or budget_level between 1 and 3);
  end if;
end $$;

-- ─── 1 bis. Photo facultative pour un restaurant ──────────────────────────
-- `image_url` était NOT NULL : la photo EST la vignette d'un lieu à ne pas
-- manquer, elle y est indispensable. Pour un restaurant en revanche, la fiche a
-- déjà un nom, une adresse et une position issus de Geoapify — exiger une photo
-- ferait abandonner la majorité des contributions.
-- La contrainte n'est pas simplement supprimée mais REMPLACÉE par une règle
-- conditionnelle : les lieux de visite restent protégés au niveau de la base,
-- pas seulement par la validation applicative de api/places.js.
alter table destination_places alter column image_url drop not null;
alter table static_destination_places alter column image_url drop not null;

do $$
begin
  if not exists (select 1 from pg_constraint where conname = 'destination_places_image_chk') then
    alter table destination_places add constraint destination_places_image_chk
      check (category <> 'place' or image_url is not null);
  end if;
  if not exists (select 1 from pg_constraint where conname = 'static_destination_places_image_chk') then
    alter table static_destination_places add constraint static_destination_places_image_chk
      check (category <> 'place' or image_url is not null);
  end if;
end $$;

-- Les listes filtrent systématiquement sur (destination, category) : sans ces
-- index, l'onglet Restaurants scanne toute la table de lieux de la destination.
create index if not exists destination_places_category_idx
  on destination_places (destination_id, category);
create index if not exists static_destination_places_category_idx
  on static_destination_places (country_code, static_dest_id, category);

-- Note : une colonne `cuisine` (texte libre) a existé dans la première version
-- de ce fichier. Elle est remplacée par `cuisine_tags` ci-dessous et n'est plus
-- lue nulle part. Elle n'est plus créée pour une nouvelle installation, mais
-- volontairement PAS supprimée ici : le faire détruirait le contenu déjà saisi
-- sur les bases existantes. À retirer à la main une fois vérifié :
--   alter table destination_places drop column if exists cuisine;
--   alter table static_destination_places drop column if exists cuisine;

-- ─── 1 ter. Types de cuisine, en tags ─────────────────────────────────────
-- Remplace le champ texte libre `cuisine`, qui ne permettait ni de filtrer
-- (« montre-moi les sushis ») ni de regrouper deux graphies du même type
-- (« Sushi » / « sushis » / « japonais - sushi »). Un restaurant porte donc
-- plusieurs tags, stockés par leur identifiant.
--
-- Deux origines pour ces identifiants :
--   - les tags PRÉDÉFINIS, écrits en dur dans src/lib/cuisineTags.js, donc
--     traduits proprement dans les quatre langues du site ;
--   - les tags COMMUNAUTAIRES, créés par un membre quand aucun prédéfini ne
--     convient, stockés ci-dessous et proposés ensuite à tout le monde. Ils
--     s'affichent tels qu'ils ont été saisis (pas de traduction possible).
alter table destination_places add column if not exists cuisine_tags text[] not null default '{}';
alter table static_destination_places add column if not exists cuisine_tags text[] not null default '{}';

-- Filtrage par tag côté base si le besoin s'en fait sentir (aujourd'hui la
-- liste d'une destination est filtrée côté client, elle est courte).
create index if not exists destination_places_cuisine_tags_idx
  on destination_places using gin (cuisine_tags);
create index if not exists static_destination_places_cuisine_tags_idx
  on static_destination_places using gin (cuisine_tags);

create table if not exists place_cuisine_tags (
  -- Identifiant normalisé (minuscules, sans accent ni espace) : c'est lui qui
  -- est stocké dans `cuisine_tags`, pour que deux saisies équivalentes ne
  -- créent pas deux tags distincts.
  slug text primary key,
  -- Libellé tel que saisi par le membre, affiché à tout le monde.
  label text not null,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);

alter table place_cuisine_tags enable row level security;

-- Lecture publique : la liste des tags s'affiche aussi aux visiteurs non
-- connectés, qui doivent pouvoir filtrer.
drop policy if exists "place_cuisine_tags lisibles par tous" on place_cuisine_tags;
create policy "place_cuisine_tags lisibles par tous" on place_cuisine_tags
  for select using (true);

-- Écriture réservée à la clé service (api/places.js) : un tag est visible par
-- tous les utilisateurs, son libellé passe donc par la modération IA avant
-- d'être créé. Un insert direct depuis le client la contournerait.

-- ─── 1 quater. Favoris ────────────────────────────────────────────────────
-- Table distincte de `carnet_favorites`, qui ne porte que des codes pays.
-- Générique (place_id + place_type) comme place_reviews : elle servira aussi
-- aux lieux de visite le jour où on les rendra favorisables.
--
-- Usage principal : repérer une adresse depuis la fiche pays, puis la retrouver
-- immédiatement au moment de planifier la ville correspondante.
create table if not exists place_favorites (
  user_id uuid not null references auth.users(id) on delete cascade,
  place_id uuid not null,
  place_type text not null check (place_type in ('community', 'static')),
  created_at timestamptz not null default now(),
  primary key (user_id, place_id, place_type)
);

create index if not exists place_favorites_place_idx on place_favorites (place_id, place_type);

alter table place_favorites enable row level security;

-- Contrairement aux avis, un favori est une donnée PRIVÉE sans contenu à
-- modérer : le client peut donc l'écrire directement, sans passer par une
-- fonction serverless (le plan Vercel Hobby est plafonné à 12, toutes prises).
-- Chaque politique est bornée à ses propres lignes.
drop policy if exists "place_favorites lisibles par leur propriétaire" on place_favorites;
create policy "place_favorites lisibles par leur propriétaire" on place_favorites
  for select using (auth.uid() = user_id);

drop policy if exists "place_favorites ajoutables par leur propriétaire" on place_favorites;
create policy "place_favorites ajoutables par leur propriétaire" on place_favorites
  for insert with check (auth.uid() = user_id);

drop policy if exists "place_favorites supprimables par leur propriétaire" on place_favorites;
create policy "place_favorites supprimables par leur propriétaire" on place_favorites
  for delete using (auth.uid() = user_id);

-- ─── 2. Avis notés sur un lieu ────────────────────────────────────────────
-- Générique (place_id + place_type), pas `restaurant_reviews` : la même table
-- servira le jour où l'on voudra noter un lieu de visite. Distincte de
-- `reviews` (pays) et `destination_reviews` (destination) — ces deux-là portent
-- des colonnes et des notifications qui n'ont pas de sens ici.
create table if not exists place_reviews (
  id uuid primary key default gen_random_uuid(),
  place_id uuid not null,
  -- 'community' -> destination_places, 'static' -> static_destination_places.
  -- Pas de clé étrangère possible : la cible dépend de place_type (même
  -- compromis que place_votes, déjà en place).
  place_type text not null check (place_type in ('community', 'static')),
  user_id uuid not null references auth.users(id) on delete cascade,
  rating smallint not null check (rating between 1 and 5),
  comment text,
  photo_urls text[] not null default '{}',
  -- Chemins Storage correspondants : nécessaires pour supprimer réellement les
  -- fichiers quand l'avis est supprimé (une URL publique ne suffit pas).
  photo_paths text[] not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (place_id, place_type, user_id)
);

create index if not exists place_reviews_place_idx on place_reviews (place_id, place_type);
create index if not exists place_reviews_user_idx on place_reviews (user_id);

alter table place_reviews enable row level security;

-- Lecture publique (les avis sont affichés aux visiteurs non connectés).
drop policy if exists "place_reviews lisibles par tous" on place_reviews;
create policy "place_reviews lisibles par tous" on place_reviews
  for select using (true);

-- Écriture uniquement via la clé service (api/place-reviews.js), AUCUNE
-- politique d'insertion, de mise à jour ou de suppression pour le client :
--   - la modération IA du texte et des photos doit passer avant l'insertion,
--     qu'un insert direct contournerait entièrement ;
--   - toute écriture doit être suivie de `recalc_place_rating`, sans quoi la
--     note moyenne dénormalisée sur la ligne du lieu resterait fausse. Une
--     politique de suppression laissée au client permettait précisément cela :
--     retirer son avis sans que la note du restaurant soit recalculée.
drop policy if exists "place_reviews modifiables par leur auteur" on place_reviews;

-- ─── 3. Recalcul de la note moyenne ───────────────────────────────────────
-- Dénormalisée sur la ligne du lieu (comme upvotes/downvotes) : la liste des
-- restaurants doit pouvoir trier par note sans agréger place_reviews à chaque
-- affichage. Appelée par api/place-reviews.js après chaque écriture.
create or replace function recalc_place_rating(p_place_id uuid, p_place_type text)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_avg numeric(3,2);
  v_count integer;
begin
  select round(avg(rating)::numeric, 2), count(*)
    into v_avg, v_count
    from place_reviews
   where place_id = p_place_id and place_type = p_place_type;

  if p_place_type = 'community' then
    update destination_places
       set rating_avg = v_avg, rating_count = coalesce(v_count, 0)
     where id = p_place_id;
  else
    update static_destination_places
       set rating_avg = v_avg, rating_count = coalesce(v_count, 0)
     where id = p_place_id;
  end if;
end $$;

-- ─── 4. Nettoyage des avis quand un lieu est supprimé ─────────────────────
-- Pas de clé étrangère (cible polymorphe) : la suppression est faite
-- explicitement par api/places.js, comme déjà pour place_votes.
