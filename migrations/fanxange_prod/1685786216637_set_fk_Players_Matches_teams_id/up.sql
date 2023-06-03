alter table "Players"."Matches"
  add constraint "Matches_teams_id_fkey"
  foreign key ("teams_id")
  references "Players"."Teams"
  ("id") on update restrict on delete restrict;
