const pool = require("./pool");

async function getProducts() {
  const { rows } = await pool.query("SELECT * FROM items ;");
  return rows;
}

async function getCategory() {
  const { rows } = await pool.query("SELECT category FROM categories ;")
  return rows;
}

async function insertItem(content) {
  await pool.query(`INSERT INTO items (category, item, quant)
                    VALUES
                    ('${content.category}', '${content.item}', '${content.quant}')
                    ;`);
}

async function insertCategory(content) {
  await pool.query(`INSERT INTO categories (category) VALUES ('${content.category}') ;`);
}
async function getItem(content) {
  const { rows } = await pool.query(`SELECT * FROM items WHERE category='${content}' ;`);
  return rows;
}

async function findProduct(content) {
  const { rows } = await pool.query(`SELECT * FROM items WHERE item='${content}' ;`)
  return rows;
}

async function subQuant(content) {
  await pool.query(`UPDATE items
                    SET quant= quant - ${content.quant}
                    WHERE item='${content.item}'
                    ;`);
}

async function addQuant(content) {
  await pool.query(`UPDATE items
                    SET quant= quant + ${content.quant}
                    WHERE item='${content.item}'
                    ;`);
}

module.exports = {
  getProducts,
  getCategory,
  insertCategory,
  insertItem,
  getItem,
  findProduct,
  addQuant,
  subQuant
};
