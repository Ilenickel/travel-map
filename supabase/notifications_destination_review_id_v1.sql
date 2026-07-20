-- Ajoute une colonne dédiée pour lier une notification à un avis de
-- destination (destination_reviews), distincte de review_id (qui pointe
-- vers reviews, avis pays) : les deux tables ont des ids indépendants,
-- réutiliser review_id pour un id de destination_reviews viole sa
-- contrainte de clé étrangère (erreur 23503) puisque cet id n'existe pas
-- dans reviews.
--
-- ON DELETE SET NULL (pas CASCADE) : si l'avis est supprimé, la
-- notification doit survivre (NotificationPanel sait déjà gérer une
-- notif sans review_id/destination_review_id, elle retombe sur une
-- recherche par destination_id + from_user_id).

alter table notifications
  add column if not exists destination_review_id uuid references destination_reviews(id) on delete set null;
