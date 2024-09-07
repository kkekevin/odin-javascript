function isAuth (req, res, next) {
    if (req.isAuthenticated())
        next();
    else
        res.status(401).json({ msg: "you're not athenticated" });
}

function isAdmin (req, res, next) {
    if (req.isAuthenticated() && req.user.admin)
        next();
    else
        res.status(401).json({ msg: "you're not an admin" });
}

module.exports = {
    isAuth,
    isAdmin
};