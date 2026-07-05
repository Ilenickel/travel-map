-- Compteur de consommation mensuelle de caractères Google Translate, pour
-- pouvoir couper la traduction (repli sur le texte original) avant de dépasser
-- un budget fixé par variable d'env (GOOGLE_TRANSLATE_MONTHLY_CHAR_LIMIT),
-- indépendamment du fait que la traduction soit lazy ou non : le lazy évite de
-- traduire du contenu jamais consulté, mais ne protège pas seul contre une
-- explosion progressive du volume total (plus de pays/langues/trafic).
create table if not exists translation_usage (
  month text primary key,  -- 'YYYY-MM'
  characters_used bigint not null default 0
);

-- Incrément atomique (évite une course lecture-puis-écriture si deux requêtes
-- traduisent en même temps) ; renvoie le nouveau total du mois pour que
-- l'appelant sache s'il vient de dépasser le seuil.
create or replace function increment_translation_usage(p_month text, p_chars int)
returns bigint
language sql
as $$
  insert into translation_usage (month, characters_used)
  values (p_month, p_chars)
  on conflict (month) do update set characters_used = translation_usage.characters_used + excluded.characters_used
  returning characters_used;
$$;
