-- Cache permanent des coordonnées des lieux éditoriaux figés (mustSee, dans
-- src/data/<pays>.js) : contrairement aux lieux communautaires/statiques, ces
-- lieux n'ont pas de ligne en base — ce cache leur en donne une, dédiée au
-- géocodage, pour ne payer Geoapify + le repli IA (voir
-- api/_lib/geocodeConfidence.js) qu'une seule fois par lieu, jamais deux.
--
-- Clé = (country_code, static_dest_id, label) plutôt qu'un index de tableau :
-- insensible à un réordonnancement du mustSee dans le fichier source, et
-- invalide naturellement si le libellé lui-même est modifié (un nouveau
-- libellé = une nouvelle recherche, ce qui est le comportement correct).
--
-- lat/lng NULL = déjà recherché, non trouvé (évite de refaire une recherche
-- vouée à l'échec à chaque nouvelle tentative d'ajout).
create table if not exists editorial_place_geocache (
  country_code text not null,
  static_dest_id text not null,
  label text not null,
  lat double precision,
  lng double precision,
  geocoded_at timestamptz not null default now(),
  primary key (country_code, static_dest_id, label)
);
