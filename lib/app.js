const express = require('express');
const app = express();

const errorHandler = require('./error-handler');

const books = require('./routes/books');
// const authors = require('./routes/authors');
const favicon = require('./favicon');


app.get('/favicon.ico', favicon);

app.use('/api/books', books);
// app.use('/api/authors', authors);

//app.use('*', not-found);

app.use(errorHandler);

module.exports = app;
