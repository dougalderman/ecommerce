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
                 result.carts.push(req.body);
                 console.log('result after push', result)
                 result.save(function(err, result) {
                    if (err)
                        return res.status(500).send(err);
                    else
                        res.send(result);  
                })
             }
         })
                 
    },
    
    
    update: function(req, res) {
        
        console.log('in update');
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
                 var length = result.carts.length;
                 for (var i = 0; i < length; i++) {
                     console.log(i);
//                     console.log('req.body.product', req.body.product);
//                     console.log('req.body.product length', req.body.product.length)
//                     console.log('typeof req.body.product', typeof req.body.product)
//                     console.log('result.carts[i].product', result.carts[i].product)
//                     console.log('result.carts[i].product length', result.carts[i].product.length);
//                     console.log('typeof result.carts[i].product', typeof result.carts[i].product);
                     if (req.body.product == result.carts[i].product) {
                         console.log('in if statement');
                         console.log('req.body = ' + req.body);
                         result.carts.set(i, req.body);
                     }
                 }
                 console.log('result after for loop', result)
                 result.save(function(err, result) {
                    if (err)
                        return res.status(500).send(err);
                    else
                        res.send(result);  
                })
             }
         })
         
    }

}