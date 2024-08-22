const db = require('../db/queries');
var cart = [];

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
async function cartGet(req, res) {
    cart.push(req.query);
    const product = await db.getProducts();
    cart.forEach((item) => {
        for (let i = 0; i < product.length; i++){
            if (item.item == product[i].item)
                product[i].quant--;
            if (product[i].quant == 0)
                product.splice(i, 1);
        }
    });
    res.render('cart', {
        title: "Shopping cart",
        items: cart,
        beverages: product
    });
}

async function cartPost(req, res) {
    cart.forEach((item) => {
        db.alterQuant(item.item);
    });
    cart = null;
    res.redirect('/');
}

module.exports = {
    getProducts,
    newCategoryGet,
    newItemGet,
    newCategoryPost,
    newItemPost,
    categoriesGet,
    cartGet,
    cartPost
}