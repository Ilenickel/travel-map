-- Cache de traduction pour le contenu communautaire (destinations, lieux, avis).
-- Rempli à la volée (lazy) par api/_lib/translation.js lors du premier affichage
-- dans une langue différente de la langue source. `source_hash` sert de filet de
-- sécurité : si le texte source change sans passer par un point d'invalidation
-- explicite, le hash ne correspond plus et la traduction est refaite.
create table if not exists translations (
  id uuid primary key default gen_random_uuid(),
  content_type text not null,      -- 'user_destination' | 'destination_place' | 'static_destination_place' | 'review' | 'destination_review'
  content_id text not null,        -- id de la ligne source (uuid), ou 'country_code:static_dest_id' pour les lieux statiques
  field text not null,             -- 'name' | 'description' | 'comment'
  language text not null,          -- langue cible, ex: 'en'
  translated_text text not null,
  source_language text,
  source_hash text not null,
  translated_at timestamptz not null default now(),
  unique (content_type, content_id, field, language)
);

create index if not exists translations_lookup_idx on translations (content_type, content_id);
