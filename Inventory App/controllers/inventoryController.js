const db = require ('../db/queries');

async function getProducts(req, res) {
    const product = await db.getProducts();
    res.render('index', {
        title: 'Beverage store',
        beverages: product
    });
}

function newCategoryGet (req, res) {
    res.render('createCategory', { title: "New Category" });
}

async function newItemGet (req, res) {
    const categories = await db.getCategory();
    res.render('createItem', {
        title: "New Item",
        categories: categories
    });
}

async function newCategoryPost (req, res) {
    const content = req.body;
    db.insertCategory(content);
    res.redirect('/');
}

async function newItemPost (req, res) {
    const content = req.body;
    db.insertItem(content);
    res.redirect('/');
}

module.exports = {
    getProducts,
    newCategoryGet,
    newItemGet,
    newCategoryPost,
    newItemPost
}