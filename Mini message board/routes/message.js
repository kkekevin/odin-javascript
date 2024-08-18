const { Router } = require('express');
const msgController = require ('../controllers/msgController');
const dbController = require ('../controllers/dbController');
const router = Router();

router.get('/:user', msgController.getUserById);
router.get('/delete/:user', dbController.deleteMessage);

module.exports = router;