comment on column "Players"."Matches"."teams_id" is E'All Matches Details';
alter table "Players"."Matches"
  add constraint "Matches_teams_id_fkey"
  foreign key (teams_id)
  references "Players"."Teams"
  (id) on update restrict on delete restrict;
alter table "Players"."Matches" alter column "teams_id" drop not null;
alter table "Players"."Matches" add column "teams_id" uuid;
