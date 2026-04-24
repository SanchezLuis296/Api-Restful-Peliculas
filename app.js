const express = require('express');
const bodyParser = require('body-parser');

const logger = require('./middlewares/logger');
const apiKey = require('./middlewares/api');
const routes = require('./routes/Routes');

const app = express();

app.use(bodyParser.json());
app.use(logger);
app.use(apiKey);

app.use('/', routes);

module.exports = app;