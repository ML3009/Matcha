\connect matchadb matcha;

CREATE TABLE IF NOT EXISTS users (
    ID SERIAL PRIMARY KEY,
    username VARCHAR(30),
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    email VARCHAR(30),
    password VARCHAR(64)
);