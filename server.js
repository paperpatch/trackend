const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'random secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

const helpers = require('./utils/helpers');

const hbs = exphbs.create({ helpers });
const Handlebars = require('handlebars');

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

Handlebars.registerHelper('ifGuest', function(input, options) {
  if(input === 'Guest' || input === 'guest') {
    return options.inverse(this);
  }
  return options.fn(this);
});

Handlebars.registerHelper('ifAdmin', function(input, options) {
  if(input === 'Admin' || input === 'admin') {
    return options.fn(this);
  }
  return options.inverse(this);
});

Handlebars.registerHelper('ifOpen', function(input, options) {
  if(input === 'Open' || input === 'open') {
    return options.fn(this);
  }
  return options.inverse(this);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});