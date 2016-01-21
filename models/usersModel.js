var mongoose = require('mongoose');
var cartsSchema = require('./cartsSchema');
  
var usersSchema = new mongoose.Schema({
    email: {type: 'String', lowercase: true},
    username: {type: 'String', lowercase: true, maxlength: 20, index: true},
    password: {type: 'String', lowercase: true},
    carts: [cartsSchema]
});


module.exports = mongoose.model('Users', usersSchema);