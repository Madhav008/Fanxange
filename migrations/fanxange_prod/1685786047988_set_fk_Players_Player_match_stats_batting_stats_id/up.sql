alter table "Players"."Player_match_stats"
  add constraint "Player_match_stats_batting_stats_id_fkey"
  foreign key ("batting_stats_id")
  references "Players"."Batting_stats"
  ("id") on update restrict on delete restrict;
