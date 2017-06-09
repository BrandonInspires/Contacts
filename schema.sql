DROP DATABASE IF EXISTS contacts;
CREATE DATABASE contacts;

\c contacts

DROP TABLE IF EXISTS contacts;
CREATE TABLE contacts (
  id SERIAL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  phone VARCHAR,
  street VARCHAR,
  city VARCHAR, 
  state VARCHAR(2),
  country VARCHAR,
  zip NUMERIC(5),
  birthday DATE,
  website VARCHAR

);
