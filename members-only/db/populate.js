const { Client } = require('pg');
const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/../.env` });
const password = require("../lib/passwordUtils").genPassword('admin');
// const adminPassword = genPassword

const SQL = `
CREATE TABLE IF NOT EXISTS users (
  user_id INTEGER GENERATED ALWAYS AS IDENTITY,
  first_name VARCHAR ( 30 ) NOT NULL,
  last_name VARCHAR ( 30 ) NOT NULL,
  email VARCHAR ( 30 ) UNIQUE NOT NULL,
  password VARCHAR ( 255 ) NOT NULL,
  salt VARCHAR ( 255 ) NOT NULL,
  admin BOOLEAN NOT NULL,
  PRIMARY KEY (user_id)
);

CREATE TABLE IF NOT EXISTS messages (
  message_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  message VARCHAR ( 255 ),
  added VARCHAR ( 255 ),
  user_id INTEGER,
  CONSTRAINT fk_message
    FOREIGN KEY (user_id)
      REFERENCES users (user_id)
);

INSERT INTO users (first_name, last_name, email, password, salt, admin)
  VALUES
  ('admin', 'admin', 'admin@odinproject.com', '${password.hash}', '${password.salt}', TRUE);

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