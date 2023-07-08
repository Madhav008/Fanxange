alter table "Fanxange"."BowlingStats" alter column "balls_bowled" drop not null;
alter table "Fanxange"."BowlingStats" add column "balls_bowled" text;
