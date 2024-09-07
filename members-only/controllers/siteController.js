const db = require("../db/queries");
const genPassword = require("../lib/passwordUtils").genPassword;

function login (req, res) {
    res.render("index", { user: req.user });
}

function createUserGet (req, res) {
    res.render("signup");
}

async function createUserPost (req, res) {
    const password = genPassword(req.body.password);
    await db.newUser(req.body, password);
    process.on('uncaughtException', (error) => console.log(error));
    res.redirect('/');
}

function dashboard (req, res) {
    res.locals.user = req.user;
    res.render("dashboard");
}

module.exports = {
    login,
    createUserGet,
    createUserPost,
    dashboard
}