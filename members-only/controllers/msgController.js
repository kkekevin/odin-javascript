const db = require("../db/queries");
const messageValidation = require('../models/msgModel');
const { validationResult } = require("express-validator");

const newMsg = {
    get: (req, res) => {
        res.locals.user = req.user;
        res.render('dashboard', {
            title: "New Message",
            path: 'partials/newMsg'
        })
    },
    post: [
        messageValidation,
        async (req, res) => {
            res.locals.user = req.user;
            const errors = validationResult(req);
            if(!errors.isEmpty()) {
                const result = errors.formatWith(error => error.msg).array();
                return res.status(400).render('dashboard', {
                    title: "New message",
                    path: 'partials/newMsg',
                    errors: result
                });
            }
            try {
                await db.insertMsg(req.user.user_id, req.body.message);
                res.redirect('/home');
            }
            catch (err) {
                res.status(500);
            }
        }
    ]
};


module.exports = newMsg;
