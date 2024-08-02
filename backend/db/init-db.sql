
-- Connection to the 'api' database
\connect api;

-- Create the 'users' table if it does not already exist
CREATE TABLE IF NOT EXISTS users (
    ID SERIAL PRIMARY KEY,
    name VARCHAR(30),
    email VARCHAR(30)
);

-- Insert data if 'users' table is empty
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM users WHERE name = 'Jerry' AND email = 'jerry@example.com') THEN
        INSERT INTO users (name, email)
        VALUES ('Jerry', 'jerry@example.com'), ('George', 'george@example.com');
    END IF;
END
$$;