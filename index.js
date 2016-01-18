var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var productsCtrl = require('./controllers/products_controller');

var app = express();
app.use(bodyParser.json());

app.use(cors());

app.use(express.static(__dirname + '/public'));

var nodePort = 7312;

app.get('/products', productsCtrl.index);
app.get('/products/:id', productsCtrl.show);
app.post('/products', productsCtrl.create)
app.put('/products/:id', productsCtrl.update);
app.delete('/products/:id', productsCtrl.destroy);
 
app.listen(nodePort, function() {
    console.log('listening to port ', nodePort);
});


