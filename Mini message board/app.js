const express = require ('express');
const app = express();
const path = require ('path');
const route = require ('./routes/index');
const messageRoute = require ('./routes/message')

app.use("/", route);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


const PORT = 5000;
app.listen(PORT, () => console.log(`connected ${PORT}`));