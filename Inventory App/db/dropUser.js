#! /usr/bin/env node

const { Client } = require("pg");
const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/../.env` });

const SQL = `
DROP TABLE items ;
DROP TABLE categories ;
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
