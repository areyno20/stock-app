const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
require('dotenv').config();

// const sequelize = require('./config/connection');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});
