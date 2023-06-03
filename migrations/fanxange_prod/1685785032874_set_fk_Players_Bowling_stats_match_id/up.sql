alter table "Players"."Bowling_stats" drop constraint "Bowling_stats_match_id_fkey",
  add constraint "Bowling_stats_match_id_fkey"
  foreign key ("match_id")
  references "Players"."Matches"
  ("id") on update cascade on delete cascade;
