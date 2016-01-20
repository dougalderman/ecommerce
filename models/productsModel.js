var mongoose = require('mongoose');
  
var productsSchema = new mongoose.Schema({
    name: {type: 'String', lowercase: true, required: true},
    vendor: {type: 'String', lowercase: true, required: true},
    price: {type: 'Number', required: true, min: 0},
    color: {type: 'String', lowercase: true}
});

module.exports = mongoose.model('Products2', productsSchema);