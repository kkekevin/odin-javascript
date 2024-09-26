const db = require("../db/queries");
const genPassword = require("../lib/passwordUtils").genPassword;
const moment = require('moment');

async function login (req, res) {
    res.locals.msgs = await db.getAllMsgs();
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

async function dashboard (req, res) {
    res.locals.user = req.user;
    msgs = await db.getAllMsgs();
    res.locals.msgs = msgs;
    msgs.forEach(msg => {
        msg.added = moment(msg.added).fromNow();
    });
    res.render("dashboard", {
        title: "Messages",
        path: 'partials/messages'
    });
}

async function myMsgs (req, res) {
    res.locals.user = req.user;
    res.locals.msgs = await db.getUserMsgs(req.params.id);

    res.render('dashboard', {
        title: "My messages",
        path: 'partials/messages'
    });
}


module.exports = {
    login,
    createUserGet,
    createUserPost,
    dashboard,
    myMsgs
}