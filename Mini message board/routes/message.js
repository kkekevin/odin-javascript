const { Router } = require('express');
const msgController = require ('../controllers/msgController');
const router = Router();

router.get('/:id', msgController.getUserById);

module.exports = router;