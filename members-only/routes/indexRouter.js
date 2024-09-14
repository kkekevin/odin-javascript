const { Router } = require('express');
const router = new Router();
const siteController = require('../controllers/siteController');
const passport = require('passport');
const userType = require('./authMiddleware');


router.get('/', siteController.login);
router.post('/', passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/'
}), siteController.login);

router.get('/log-out', (req, res, next) => {
    req.logout((err) => {
        if (err)
            return next (err);
        res.redirect('/');
    });
});

router.get('/sign-up', siteController.createUserGet);
router.post('/sign-up', siteController.createUserPost);

router.get('/home', userType.isAuth, siteController.dashboard);
router.get('/log-out', (req, res, next) => {
    req.logout((err) => {
        if (err)
            return next (err);
        res.redirect('/');
    });
});


module.exports = router;