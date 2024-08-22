const { Router } = require('express');
const cartRouter = Router();
const beverageController = require('../controllers/inventoryController');

cartRouter.get('/', beverageController.cartGet);
cartRouter.post('/', beverageController.cartPost);

module.exports = cartRouter;