const passport = require('passport');
const LocalStategy = require('passport-local').Strategy;
const conn = require("../db/queries");
const Strategy = new LocalStategy();

const verifyCallback = (username, password, done) => {
    
}

passport.use(new LocalStrategy(
    function (username, password, done) {
        User.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            if (!user.verifyPassword(password)) { return done(null, false); }
            return done(null, user);
        });
    }
));