alter table "Players"."Player_match_stats"
  add constraint "Player_match_stats_match_id_fkey"
  foreign key ("match_id")
  references "Players"."Matches"
  ("id") on update restrict on delete restrict;
