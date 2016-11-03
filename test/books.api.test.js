const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

//start the db, and store connection,
//so we can clear db
const connection = require('../lib/setup-mongoose');

const app = require('../lib/app');

describe('book', () => {

  before(done => {  
    const CONNECTED = 1;
    if (connection.readyState === CONNECTED) dropCollection;
    else (connection.on('open', dropCollection));

    function dropCollection() {
      const name = 'books';
      connection.db
        .listCollections({name})
        .next((err, collinfo) => {
          if (!collinfo) return done();
          connection.db.dropCollection(name, done);
        });
    };
  });

  const request = chai.request(app);

  // const sawyer = {
  //   title: 'Tom Sawyer',
  //   author: 'Mark Twain'
  // }; 

  it('/GET all', done => {
    request
      .get('/api/books')
      .then(res => {
        assert.deepEqual(res.body, []);
        done();
      })
      .catch(done);
  });
  // after(done => connection.close(done));
});
