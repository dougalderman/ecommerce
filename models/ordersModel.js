var mongoose = require('mongoose');
var cartsSchema = require('./cartsSchema');

var Schema = mongoose.Schema;
  
var ordersSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    orderId: {type: 'Number', required: true, min: 1},
    orderedAt: {type: 'Date'},
    products: [cartsSchema],    
});

ordersSchema.pre('save', function(next) {
    var order = this;
    order.updatedAt = new Date();
    next();
});

module.exports = mongoose.model('Orders', ordersSchema);