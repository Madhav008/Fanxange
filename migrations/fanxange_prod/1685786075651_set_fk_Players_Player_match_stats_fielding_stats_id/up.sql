alter table "Players"."Player_match_stats"
  add constraint "Player_match_stats_fielding_stats_id_fkey"
  foreign key ("fielding_stats_id")
  references "Players"."Filding_stats"
  ("id") on update restrict on delete restrict;
