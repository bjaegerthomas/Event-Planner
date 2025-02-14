DROP DATABASE IF EXISTS event_planner_db;
CREATE DATABASE event_planner_db;

\c event_planner_db;

-- Users Table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Events Table
CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  event_title VARCHAR(255) NOT NULL,
  event_description TEXT NOT NULL,
  created_by INT NOT NULL,
  active BOOLEAN DEFAULT TRUE NOT NULL,
  date_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE CASCADE
);

-- RSVP Table
CREATE TABLE rsvp (
  id SERIAL PRIMARY KEY,
  event_id INT NOT NULL,
  user_id INT NOT NULL,
  status VARCHAR(10) CHECK (status IN ('YES', 'NO', 'PENDING')) DEFAULT 'PENDING',
  rsvp_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
