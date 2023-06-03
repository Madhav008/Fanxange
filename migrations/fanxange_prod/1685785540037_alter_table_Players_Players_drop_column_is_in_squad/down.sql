comment on column "Players"."Players"."is_in_squad" is E'All players info';
alter table "Players"."Players" alter column "is_in_squad" drop not null;
alter table "Players"."Players" add column "is_in_squad" bool;
