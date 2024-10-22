CREATE DATABASE lunaris;

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    body TEXT NOT NULL,
    image VARCHAR(255)
);

