var ordersModel = require('./../models/ordersModel');

module.exports = {
    
     create: function(req, res) {
        
        console.log('in create');
        console.log('req.body = ', req.body);
        var newOrders = new ordersModel(req.body);
        
        newOrders.save(function(err, result) {
            if (err)
                return res.status(500).send(err);
            else
                res.send(result);  
        })
    },
    
    read: function(req, res) {
        console.log('in read');
        console.log('req.query = ', req.query)
         ordersModel
         .find(req.query)
         .exec(function(err, result) {
             console.log('err', err);
             console.log('result', result);
             if (err) {
                 console.log('in error routine');
                 return res.status(500).send(err);
             }
             else {
                 res.send(result)
             }
         })
    }
    
}