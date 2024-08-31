const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/.env` });

app.use("view engine", "ejs");
app.get('/', (req, res) => {
    res.send("ola");
});

PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`connected to port ${PORT}`));