const express = require ('express');
const app = express();
const path = require ('path');
const route = require ('routes/Message');

//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');

app.get("/", route.get);

  const PORT = 5000;
  app.listen(PORT, () => console.log(`connected ${PORT}`));