-- Insert sample users
INSERT INTO users (username, email, password) VALUES
('Alice Johnson', 'alice@example.com', '$2b$10$KIX/LvC3f.JH6H4C0aVbDOQQF61rEzHzYIN0x1BBoOjX52q.VPbK2'), -- hashed password: "password123"
('Bob Smith', 'bob@example.com', '$2b$10$KIX/LvC3f.JH6H4C0aVbDOQQF61rEzHzYIN0x1BBoOjX52q.VPbK2'),
('Charlie Brown', 'charlie@example.com', '$2b$10$KIX/LvC3f.JH6H4C0aVbDOQQF61rEzHzYIN0x1BBoOjX52q.VPbK2');

-- Insert sample events
INSERT INTO events (event_title, event_description, created_by) VALUES
('Team Meeting', 'Monthly team sync-up meeting.', 1),
('Birthday Party', 'Celebrating Alice’s birthday!', 2),
('Conference', 'Annual tech conference with speakers and workshops.', 3);

-- Insert RSVPs (varying responses)
INSERT INTO rsvps (event_id, guest_email, rsvp_link, status) VALUES
(1, 'guest1@example.com', 'http://yourfrontend.com/rsvp/12345abc', 'YES'),
(2, 'guest2@example.com', 'http://yourfrontend.com/rsvp/67890def', 'NO'),
(3, 'guest3@example.com', 'http://yourfrontend.com/rsvp/11223xyz', 'PENDING');