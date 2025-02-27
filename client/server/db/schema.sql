-- Ensure database exists before creating
CREATE DATABASE event_planner_db;

-- Switch to the database
\c event_planner_db;

-- Drop tables only if they already exist (to prevent duplicate errors)
DROP TABLE IF EXISTS Events;
DROP TABLE IF EXISTS Users;

-- Create Users table
CREATE TABLE Users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Events table
CREATE TABLE Events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    createdBy UUID NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_createdBy FOREIGN KEY (createdBy) REFERENCES Users(id) ON DELETE CASCADE
);
