const express = require ('express');
const app = express();
const inventoryRouter = require ('./routes/inventoryRouter');
const cartRouter = require('./routes/cartRouter');
const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/.env` });

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use("/", inventoryRouter);
app.use("/cart", cartRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`connected to port ${PORT}`));