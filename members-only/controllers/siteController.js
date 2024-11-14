const db = require("../db/queries");
const genPassword = require("../lib/passwordUtils").genPassword;
const moment = require('moment');
const { validationResult } = require("express-validator");

async function login (req, res) {
    msgs = await db.getAllMsgs();
    // msgs.forEach(msg => {
    //     msg.added = moment(msg.added).fromNow();
    // });
    res.locals.msgs = msgs;
    res.render("index", { user: req.user });
}

function createUserGet (req, res) {
    res.render("signup");
}

async function createUserPost (req, res) {
    // use validation here
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        res.locals.error = errors.formatWith(error => error.msg).array();
        return res.status(400).render('signup');
    }

    const password = genPassword(req.body.password);
    await db.newUser(req.body, password);
    process.on('uncaughtException', (error) => console.log(error));
    res.redirect('/');
}

async function dashboard (req, res) {
    res.locals.user = req.user;
    msgs = await db.getAllMsgs();
    // msgs.forEach(msg => {
    //     msg.added = moment(msg.added).fromNow();
    // });
    res.locals.msgs = msgs;
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

async function deleteMsg (req, res) {
    await db.deleteMsg(req.params.id);
    console.log("the msg with id " + req.params.id + " was deleted");
    res.redirect('/home');
}

module.exports = {
    login,
    createUserGet,
    createUserPost,
    dashboard,
    myMsgs,
    deleteMsg
}