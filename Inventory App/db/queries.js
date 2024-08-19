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


module.exports = {
  getProducts,
  getCategory,
  insertCategory,
  insertItem,
  fetchUsers,
  deleteUsers
};
