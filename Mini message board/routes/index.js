const { Router } = require('express');
const router = Router();
const messages = require('../models/msgModel');
const dbController = require('../controllers/dbController');

router.get('/', dbController.getAllMessages);
router.get('/new', (req, res) => {
  res.render('form');
});
router.post('/new', dbController.insertMessage);

module.exports = router, messages;