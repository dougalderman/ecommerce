var mongoose = require('mongoose');
var Schema = mongoose.Schema;
  
var cartsSchema = new Schema({
    product: {type: Schema.Types.ObjectId, ref: 'Products2'},
    qty: {type: 'Number', min: 1}  
});

module.exports = cartsSchema;