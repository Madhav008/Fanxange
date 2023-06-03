CREATE TABLE "Players"."Tournaments" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "name" text NOT NULL, "type" text NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("type") REFERENCES "public"."match_types"("name") ON UPDATE no action ON DELETE no action);COMMENT ON TABLE "Players"."Tournaments" IS E'All Tornaments details';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
