CREATE TABLE "Players"."Teams" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "name" text NOT NULL, PRIMARY KEY ("id") );COMMENT ON TABLE "Players"."Teams" IS E'All Teams details including players';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
