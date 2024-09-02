const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/.env` });
const route = require('./routes/indexRouter');

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use('/', route)

PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`connected to port ${PORT}`));