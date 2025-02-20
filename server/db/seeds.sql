-- Insert sample users
INSERT INTO users (name, email, password_hash) VALUES
('Alice Johnson', 'alice@example.com', '$2b$10$KIX/LvC3f.JH6H4C0aVbDOQQF61rEzHzYIN0x1BBoOjX52q.VPbK2'), -- hashed password: "password123"
('Bob Smith', 'bob@example.com', '$2b$10$KIX/LvC3f.JH6H4C0aVbDOQQF61rEzHzYIN0x1BBoOjX52q.VPbK2'),
('Charlie Brown', 'charlie@example.com', '$2b$10$KIX/LvC3f.JH6H4C0aVbDOQQF61rEzHzYIN0x1BBoOjX52q.VPbK2');

-- Insert sample events
INSERT INTO events (event_title, event_description, created_by) VALUES
('Alice’s Birthday Party', 'A fun birthday party with games and food.', 1),
('Tech Meetup', 'Networking event for software engineers.', 2),
('Board Game Night', 'Come and play board games with us!', 3);

-- Insert RSVPs (varying responses)
INSERT INTO rsvp (event_id, user_id, status) VALUES
-- RSVPs for Alice's Birthday Party
(1, 1, 'YES'), -- Alice is attending her own party
(1, 2, 'NO'),  -- Bob is not attending
(1, 3, 'PENDING'), -- Charlie has not responded yet

-- RSVPs for Tech Meetup
(2, 1, 'YES'), -- Alice is attending
(2, 2, 'YES'), -- Bob is attending
(2, 3, 'NO'),  -- Charlie is not attending

-- RSVPs for Board Game Night
(3, 1, 'NO'),  -- Alice is not attending
(3, 2, 'PENDING'), -- Bob has not responded yet
(3, 3, 'YES'); -- Charlie is attending



-- Passwords: The passwords are hashed for security. They all correspond to "password123" (hashed using bcrypt).