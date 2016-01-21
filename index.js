var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

// var productsCtrl = require('./controllers/products_controller');

var productsCtrl = require('./controllers/products_controller2');  
var usersCtrl = require('./controllers/users_controller'); 
var cartsCtrl = require('./controllers/carts_controller');  
var ordersCtrl = require('./controllers/orders_controller');  
var app = express();
app.use(bodyParser.json());

app.use(cors());

var mongoUri = 'mongodb://localhost:27017/ecommerce';

mongoose.connect(mongoUri);

mongoose.connection.once('open', function() {
    console.log("Successfully connected to mongodb")
})

app.use(express.static(__dirname + '/public'));

var nodePort = 7312;

app.get('/products', productsCtrl.read);
app.post('/products', productsCtrl.create)
app.put('/products/:id', productsCtrl.update);
app.delete('/products/:id', productsCtrl.delete);

app.get('/users', usersCtrl.read);
app.post('/users', usersCtrl.create)
app.put('/users/:id', usersCtrl.update);
app.delete('/users/:id', usersCtrl.delete);

app.get('/api/order', ordersCtrl.read);
app.post('api/order', ordersCtrl.create)

app.post('/api/cart', cartsCtrl.create);
app.put('/api/cart', cartsCtrl.update);
 
app.listen(nodePort, function() {
    console.log('listening to port ', nodePort);
});


