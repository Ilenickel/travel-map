-- Coordonnées géographiques mises en cache pour les lieux à ne pas manquer
-- (communautaires et statiques), résolues via Geoapify au moment de l'ajout à
-- la planification (voir api/geocode-place.js). Un lieu physique ne bouge pas,
-- le cache est donc permanent une fois résolu.
alter table destination_places add column if not exists lat double precision;
alter table destination_places add column if not exists lng double precision;
alter table destination_places add column if not exists geocoded_at timestamptz;

alter table static_destination_places add column if not exists lat double precision;
alter table static_destination_places add column if not exists lng double precision;
alter table static_destination_places add column if not exists geocoded_at timestamptz;
