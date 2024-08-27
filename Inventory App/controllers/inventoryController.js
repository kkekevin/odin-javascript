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
    if (db.findProduct(content.item))
        db.addQuant(content);
    else 
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

async function cartGet(req, res) {
    cart.push(req.query);
    const product = await db.getProducts();
    let even = false;
    for (let i = 0; i < cart.length - 1; i++){
        if (cart.length > 1 && cart[i].item == cart[cart.length - 1].item) {
            cart[i].quant++;
            even = true;
        }
        for (let j = 0; j < product.length; j++){
            if (cart[i].item == product[j].item)
                product[j].quant -= cart[i].quant;
            if (product[j].quant == 0)
                product.splice(j, 1);
        }
    }
    if (even && cart.length > 1)
        cart.splice(-1);
    console.log(cart);
    res.render('cart', {
        title: "Shopping cart",
        items: cart,
        beverages: product
    });
}

async function cartPost(req, res) {
    cart.forEach((item) => db.subQuant(item));
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