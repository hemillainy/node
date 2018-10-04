'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

// Carrega as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
// não codificar o url
app.use(bodyParser.urlencoded({ 
    extended: false
}));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;