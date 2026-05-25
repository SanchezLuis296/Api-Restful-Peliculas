const express = require('express');
const bodyParser = require('body-parser');

const logger = require('./middlewares/logger');
const apiKey = require('./middlewares/api');
const routes = require('./routes/Routes');
const authRoutes = require('./routes/authRoutes');
const auth = require('./middlewares/auth');

const app = express();

app.use(bodyParser.json());
app.use(logger);

app.use('/auth', authRoutes);

app.use('/peliculas', apiKey, auth, routes);

module.exports = app;