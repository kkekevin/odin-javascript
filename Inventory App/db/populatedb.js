#! /usr/bin/env node

const { Client } = require("pg");
const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/../.env` });

const SQL = `
CREATE TABLE IF NOT EXISTS categories (
  category_id INTEGER GENERATED ALWAYS AS IDENTITY,
  category VARCHAR ( 30 ),
  PRIMARY KEY (category)
);

CREATE TABLE IF NOT EXISTS items (
  item_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  category VARCHAR ( 30 ),
  item VARCHAR ( 30 ) UNIQUE,
  quant INTEGER,
  CONSTRAINT fk_category
    FOREIGN KEY(category)
      REFERENCES categories(category)
);

INSERT INTO categories (category) 
VALUES
  ('soda'),
  ('beer');

INSERT INTO items (category, item, quant) 
VALUES
  ('soda', 'pepsi', '5'),
  ('beer', 'skol', '5');
  `;


async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
