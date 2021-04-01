const express = require("express");
const exphbs = require('express-handlebars');
const app = express();
const sequelize = require("./config/connection"); 
const session = require('express-session');
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const path = require('path');

const sess = {
  secret: 'Its a secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
}
const PORT = process.env.PORT || 3001;
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.json());
// declare before require("./controllers") or any other files that need session middleware
app.use(session(sess));
app.use(require("./controllers/"));
app.use(express.static(path.join(__dirname, "public")));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log("Now listening"));
  });
