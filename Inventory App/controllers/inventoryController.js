const db = require('../db/queries');

async function getProducts(req, res) {
    if (req.query.product) {
     
        const items = await db.findProduct(req.query.product);
        res.render('index', {
            title: 'List of items',
            beverages: items
        });
    } else {
        const product = await db.getProducts();
        res.render('index', {
            title: 'Beverage store',
            beverages: product
        });
    }
}

function newCategoryGet(req, res) {
    res.render('createCategory', { title: "New Category" });
}

async function newItemGet(req, res) {
    const categories = await db.getCategory();
    res.render('createItem', {
        title: "New Item",
        categories: categories
    });
}

async function newCategoryPost(req, res) {
    const content = req.body;
    db.insertCategory(content);
    process.on('uncaughtException', function (error) {
        console.log(error.stack);
     });
    res.redirect('/');
}

async function newItemPost(req, res) {
    const content = req.body;
    db.insertItem(content);
    res.redirect('/');
}

async function categoriesGet(req, res) {
    if (req.query.category) {
        const items = await db.getItem(req.query.category);
        res.render('itemByCategory', {
            title: 'List of this category',
            beverages: items
        });
    } else {
        const categories = await db.getCategory();
        res.render('categoryList', {
            title: "Categories",
            categories: categories
        });
    }
}

async function categoriesPost(req, res) { }

module.exports = {
    getProducts,
    newCategoryGet,
    newItemGet,
    newCategoryPost,
    newItemPost,
    categoriesGet
}