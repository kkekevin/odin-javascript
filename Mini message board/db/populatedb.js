const { Client } = require("pg");
const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/../.env` });
const msg = require('../models/msgModel');

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  text VARCHAR ( 255 ),
  added VARCHAR ( 255 )
);

INSERT INTO messages (username, text, added) 
VALUES
  ('${msg[0].user}', '${msg[0].text}', '${msg[0].added}'),
  ('${msg[1].user}', '${msg[1].text}', '${msg[1].added}');
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
