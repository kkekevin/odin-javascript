const { Pool } = require("pg");
const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/../.env` });

module.exports = new Pool({
  connectionString: process.env.DATABASE_URL,
});
