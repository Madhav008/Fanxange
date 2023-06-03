alter table "Players"."Teams"
  add constraint "Teams_match_id_fkey"
  foreign key ("match_id")
  references "Players"."Matches"
  ("id") on update restrict on delete restrict;
