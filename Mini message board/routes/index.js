const { Router } = require('express');
const router = Router();
const messages = require('../models/msgModel');

router.get('/', (req, res) => {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});
router.get('/new', (req, res) => {
  res.render('form');
});
router.post('/new', (req, res) => {
  const content = req.body;
  messages.push({ text: content.messageText, user: content.messageUser, added: new Date() });
  res.redirect('/');
});

module.exports = router, messages;