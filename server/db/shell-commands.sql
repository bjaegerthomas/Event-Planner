-- Drop and recreate the database
DROP DATABASE IF EXISTS event_planner_db;
CREATE DATABASE event_planner_db;

-- Connect to the database
\c event_planner_db;

-- Run the schema file to create tables
\i schema.sql;

-- Run the seeds file to populate the database
\i seeds.sql;
