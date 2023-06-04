comment on column "Players"."Teams"."match_id" is E'All Teams details including players';
alter table "Players"."Teams"
  add constraint "Teams_match_id_fkey"
  foreign key (match_id)
  references "Players"."Matches"
  (id) on update restrict on delete restrict;
alter table "Players"."Teams" alter column "match_id" drop not null;
alter table "Players"."Teams" add column "match_id" uuid;
