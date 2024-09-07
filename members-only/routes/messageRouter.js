const express = require('express');
const router = new express.Router();
const siteController = require('../controllers/siteController');
const userType = require('./authMiddleware')

router.get('/', userType.isAuth, siteController.dashboard);
router.get('/log-out', (req, res, next) => {
    req.logout((err) => {
        if (err)
            return next (err);
        res.redirect('/');
    });
});


module.exports = router;