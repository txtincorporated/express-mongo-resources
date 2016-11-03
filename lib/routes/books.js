const express = require('express');
const router = express.Router();

// const bodyParser = require('body-parser').json;

const Book = require('../models/book');

router
    .get('/', (req, res, next) => {
      const query = {};

      if(req.query.title) query.title = req.query.title; 
      if(req.query.author) query.author = req.query.author; 

      Book.find(query)
        .then(books => res.send(books))
        .catch(next);
    }) ;
    // .get('/:fileName', (request, response, next) => {
    //   handlers.getFile(request, response);
    // });
    // .post('/', bodyParser, (request, response)=> {
    //   console.log('Calling handlers.post... ');
    //   mongoose.post(request, response);
    // })
    // .put('/:fileName', bodyParser, (request, response) => {
    //   console.log('Calling handlers.put...');
    //   handlers.put(request, response);
    // })
    // .delete('/:fileName', (request, response) => {
    //   console.log('Calling handlers.del...');
    //   handlers.del(request, response);
    // });

module.exports = router;
