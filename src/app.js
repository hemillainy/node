'use strict'

const bodyParser = require('body-parser');

const express = require('express');
const app = express();

const index = require('./routes/index');
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const create = router.post('/', (req, res, next) => {
    res.status(201).send(req.body);
});

const put = router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body
    });
});

const del = router.delete('/', (req, res, next) => {
    res.status(200).send(req.body);
});

app.use('/', index);
app.use('/products', create);
app.use('/products', put);
app.use('/products', del);

module.exports = app;