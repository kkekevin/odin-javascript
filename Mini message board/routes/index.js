const { Router } = require('express');
const router = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


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

module.exports = router;