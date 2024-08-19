const { Router } = require('express');
const inteventoryRouter = Router();
const beverageController = require('../controllers/inventoryController');

inteventoryRouter.get('/', beverageController.getProducts);
inteventoryRouter.get('/newcategory', beverageController.newCategoryGet);
inteventoryRouter.get('/newitem', beverageController.newItemGet);
inteventoryRouter.post('/newcategory', beverageController.newCategoryPost);
inteventoryRouter.post('/newitem', beverageController.newItemPost);

module.exports = inteventoryRouter;