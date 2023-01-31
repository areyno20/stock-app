const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});
