const express = require("express");
const exphbs = require('express-handlebars');
const app = express();
const sequelize = require("./config/connection"); 
const PORT = process.env.PORT || 3001;
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });
const path = require('path');

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(require("./controllers/"));
app.use(express.static(path.join(__dirname, "public")));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log("Now listening"));
  });
