-- Create the database 'event_planner_db' if it doesn't already exist
CREATE DATABASE event_planner_db;

-- Grant all privileges on the database to a specific user (change 'your_database_user' to the correct username)
GRANT ALL PRIVILEGES ON DATABASE event_planner_db TO your_database_user;

-- Connect to the newly created database
\c event_planner_db;
