const { Router } = require('express');
const router = new Router();
const siteController = require('../controllers/siteController');

router.get('/', (req, res) => res.render('index'));
router.post('/home', siteController.login);
router.get('/sign-up', siteController.createUserGet);
router.post('/sign-up', siteController.createUserPost);

module.exports = router;