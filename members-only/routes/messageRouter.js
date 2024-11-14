const express = require('express');
const router = new express.Router();
const msgController = require('../controllers/msgController');
const userType = require('./authMiddleware')
const siteController = require('../controllers/siteController');

router.get('/', userType.isAuth, msgController.get);
router.post('/', msgController.post);

router.get('/:id', userType.isAuth, siteController.myMsgs);

router.get('/d/:id', userType.isAdmin, siteController.deleteMsg);

module.exports = router;