alter table "Players"."Player_match_stats"
  add constraint "Player_match_stats_bowling_stats_id_fkey"
  foreign key ("bowling_stats_id")
  references "Players"."Bowling_stats"
  ("id") on update restrict on delete restrict;
