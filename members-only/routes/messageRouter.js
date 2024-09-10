const express = require('express');
const router = new express.Router();
const msgController = require('../controllers/msgController');
const userType = require('./authMiddleware')

router.get('/', userType.isAuth, msgController.get);
router.post('/', msgController.post);

module.exports = router;