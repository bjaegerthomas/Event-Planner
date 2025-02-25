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
    name VARCHAR(255) NOT NULL, -- Added name field
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(255) UNIQUE NOT NULL, -- Added username field
    password VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Events table
CREATE TABLE Events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    date VARCHAR(255) NOT NULL, -- Added date field
    location VARCHAR(255) NOT NULL, -- Added location field
    createdBy UUID NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_createdBy FOREIGN KEY (createdBy) REFERENCES Users(id) ON DELETE CASCADE
);
