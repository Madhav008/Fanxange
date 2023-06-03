comment on column "Players"."Players"."matches_played" is E'All players info';
alter table "Players"."Players" alter column "matches_played" drop not null;
alter table "Players"."Players" add column "matches_played" uuid;
