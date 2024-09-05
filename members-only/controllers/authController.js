const passport = require('passport');
const LocalStategy = require('passport-local');
const db = require('../db/queries');
const validPassword = require("../lib/passwordUtils").validPassword;


const verifyCallback = (username, password, done) => {
    db.fetchUser(username)
        .then((user) => {
            if (!user)
                return done(null, false);
            const isValid = validPassword(password, user.password, user.salt);
            if (isValid)
                return done(null, user);
            else
                return done(null, false);
        })
        .catch((err) => done(err))
}

const strategy = new LocalStategy(verifyCallback);
passport.use(strategy);

passport.serializeUser((user, done) => {
    done(null, user.user_id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await db.fetchUserId(id);
        done(null, user);
    } catch (err) {
        done(err);
    }
});
