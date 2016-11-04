const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  period: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Author', schema);