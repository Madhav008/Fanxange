alter table "Players"."Matches"
  add constraint "Matches_tournament_id_fkey"
  foreign key ("tournament_id")
  references "Players"."Tournaments"
  ("id") on update cascade on delete cascade;
