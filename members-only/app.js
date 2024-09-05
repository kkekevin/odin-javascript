const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/.env` });
const route = require('./routes/indexRouter');
const passport = require('passport');
const session = require('express-session');

require('./controllers/authController');

app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.session());

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use('/', route)

PORT = process.env.PORT || 5000;
IP_ADRESS = process.env.IP_ADDRESS || 'localhost';
app.listen(PORT, IP_ADRESS, () => {
    console.log(`connected to port ${PORT}`)
});