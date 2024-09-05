const db = require("../db/queries");
const genPassword = require("../lib/passwordUtils").genPassword;

async function login (req, res) {
    res.render("index", { user: req.user });
}

async function createUserGet (req, res) {
    res.render("signup");
}

async function createUserPost (req, res) {
    const password = genPassword(req.body.password);
    await db.newUser(req.body, password);
    process.on('uncaughtException', (error) => console.log(error));
    res.redirect('/');
}

module.exports = {
    login,
    createUserGet,
    createUserPost
}