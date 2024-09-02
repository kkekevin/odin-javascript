const db = require("../db/queries");

async function login (req, res) {
    res.send("you're in");
}

async function createUserGet (req, res) {
    res.render("createUser");
}

async function createUserPost (req, res) {
    await db.newUser(req.body);
    process.on('uncaughtException', (error) => console.log(error));
    res.redirect('/');
}

module.exports = {
    login,
    createUserGet,
    createUserPost
}