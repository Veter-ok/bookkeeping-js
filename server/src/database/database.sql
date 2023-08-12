CREATE DATABASE bookkeeping

CREATE TABLE users(
	id SERIAL PRIMARY KEY,
	isAdmin BOOLEAN,
	name VARCHAR(255),
	surname VARCHAR(255),
	email VARCHAR(255) UNIQUE,
	password VARCHAR(255),
	birthday DATE
);

CREATE TABLE banks(
	id SERIAL PRIMARY KEY,
	name VARCHAR(255) UNIQUE,
	description VARCHAR(255)
);

CREATE TABLE accounts(
	id SERIAL PRIMARY KEY,
	bank_id INTEGER,
	name VARCHAR(255),
	isCardsAccount BOOLEAN
	percent INTEGER,
	description VARCHAR(255),
	FOREIGN KEY (bank_id) REFERENCES banks(id)
);

CREATE TABLE cards(
	id SERIAL PRIMARY KEY,
	bank_id INTEGER,
	title VARCHAR(255),
	percent INTEGER,
	image VARCHAR(255),
	description VARCHAR(255),
	FOREIGN KEY (bank_id) REFERENCES banks(id)
);

CREATE TABLE users_bank_accounts(
	id SERIAL PRIMARY KEY,
	user_id INTEGER,
	type_id INTEGER,
	amount NUMERIC(15, 3),
	dateOpen DATE,
	FOREIGN KEY (user_id) REFERENCES users(id),
	FOREIGN KEY (type_id) REFERENCES accounts(id)
);

CREATE TABLE users_cards(
	id SERIAL PRIMARY KEY,
	user_id INTEGER,
	type_id INTEGER,
	account_id INTEGER,
	amount NUMERIC(15, 3),
	date DATE,
	FOREIGN KEY (user_id) REFERENCES users(id),
	FOREIGN KEY (type_id) REFERENCES cards(id)
);


CREATE TABLE payments(
	id SERIAL PRIMARY KEY,
	user_id INTEGER,
	account_id INTEGER,
	amount NUMERIC(15, 3),
	category VARCHAR(255),
	date TIMESTAMP,
	FOREIGN KEY (user_id) REFERENCES users(id),
	FOREIGN KEY (account_id) REFERENCES users_bank_accounts(id)
);