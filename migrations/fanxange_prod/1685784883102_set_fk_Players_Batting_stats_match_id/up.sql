alter table "Players"."Batting_stats"
  add constraint "Batting_stats_match_id_fkey"
  foreign key ("match_id")
  references "Players"."Matches"
  ("id") on update restrict on delete restrict;
