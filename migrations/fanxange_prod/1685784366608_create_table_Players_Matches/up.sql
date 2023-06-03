CREATE TABLE "Players"."Matches" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "name" text NOT NULL, "date" text NOT NULL, PRIMARY KEY ("id") , UNIQUE ("id"));COMMENT ON TABLE "Players"."Matches" IS E'All Matches Details';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
