const express = require('express');
const app = express();

const books = require('../routes/books');
const authors = require('../routes/authors');
const errorHandler = require('../routes/error-handler');

module.exports = app;

app.get('/favicon.ico', favicon);

app.use('/books', router);
app.use('/authors', router);

app.use('*', not-found);

app.use(errorHandler);

