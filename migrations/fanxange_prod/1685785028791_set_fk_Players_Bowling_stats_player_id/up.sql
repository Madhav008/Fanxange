alter table "Players"."Bowling_stats" drop constraint "Bowling_stats_player_id_fkey",
  add constraint "Bowling_stats_player_id_fkey"
  foreign key ("player_id")
  references "Players"."Players"
  ("id") on update cascade on delete cascade;
