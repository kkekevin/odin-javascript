const express = require ('express');
const app = express();
const path = require ('path');
const route = require ('./routes/index');
const messageRoute = require ('./routes/message')
const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/.env` });

app.use(express.urlencoded({ extended: true }));
app.use("/", route);
app.use('/message', messageRoute);
//app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`connected ${PORT}`));