-- Connect to the correct database
\c event_planner_db;

-- Insert sample users into the Users table
-- The passwords should be hashed before inserting in a real application
INSERT INTO Users (id, email, password) VALUES
(gen_random_uuid(), 'user1@example.com', 'hashedpassword1'), -- First user with a placeholder hashed password
(gen_random_uuid(), 'user2@example.com', 'hashedpassword2'); -- Second user with a placeholder hashed password

-- Insert sample events into the Events table
-- The createdBy field references an existing user ID to associate events with users
INSERT INTO Events (id, title, description, createdBy) VALUES
(gen_random_uuid(), 'Team Meeting', 'Discuss project updates', (SELECT id FROM Users LIMIT 1)), -- Event created by the first user
(gen_random_uuid(), 'Birthday Party', 'Celebrate John’s birthday', (SELECT id FROM Users ORDER BY createdAt DESC LIMIT 1)), -- Event created by the most recently added user
(gen_random_uuid(), 'Workshop', 'Learn about new tech trends', (SELECT id FROM Users OFFSET 1 LIMIT 1)); -- Event created by the second user
