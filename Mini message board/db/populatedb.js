const { Client } = require("pg");
const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/../.env` });
const added = new Date();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  text VARCHAR ( 255 ),
  added VARCHAR ( 255 )
);

INSERT INTO messages (username, text, added) 
VALUES
  ('Amando', 'Hi there!', '${added}'),
  ('Charles', 'Hello World!', '${added}');
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
