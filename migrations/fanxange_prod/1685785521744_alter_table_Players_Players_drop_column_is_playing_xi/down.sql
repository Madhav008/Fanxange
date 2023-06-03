comment on column "Players"."Players"."is_playing_xi" is E'All players info';
alter table "Players"."Players" alter column "is_playing_xi" drop not null;
alter table "Players"."Players" add column "is_playing_xi" bool;
