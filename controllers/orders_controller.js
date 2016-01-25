var ordersModel = require('./../models/ordersModel');
var usersModel = require('./../models/usersModel');

module.exports = {
    
     create: function(req, res) {
        
        console.log('in create');
        console.log('req.body = ', req.body);
        console.log('req.query = ', req.query);
        
        usersModel
        .findById(req.query._id)
        .exec(function(err, result) {
             console.log('err', err);
             console.log('result', result);
             if (err) {
                 console.log('in error routine');
                 return res.status(500).send(err);
             }
             else {
                  var newOrders = new ordersModel({
                      user: req.query._id,
                      orderedAt: new Date(),
                      products: result.carts
                  });
                  newOrders.save(function(er, re) {
                    if (er)
                        return res.status(500).send(er);
                    else {
                        res.send(re);
                        result.carts = [];
                        result.save(function(e, r) {  // can't resend e or r since they've
                                                      // already been returned to the                                                             // client.
                        });
                    }
                  });
             }
         });
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