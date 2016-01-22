var productsModel = require('./../models/productsModel');

module.exports = {

    create: function(req, res) {
        
        console.log('in create');
        console.log('req.body = ', req.body);
        var newProducts = new productsModel(req.body);
        
        newProducts.save(function(err, result) {
            if (err)
                return res.status(500).send(err);
            else
                res.send(result);  
        })
    },
    
    read: function(req, res) {
        console.log('in read');
        console.log('req.query = ', req.query)
         productsModel
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
    },
    
    update: function(req, res) {
        
         console.log('in update');
         console.log('req.params.id = ', req.params.id);
         console.log('req.body = ', req.body);
        
         productsModel
        .findById(req.params.id)
        .exec(function(err, result) {
             console.log('err', err);
             console.log('result', result);
             if (err) {
                 console.log('in error routine');
                 return res.status(500).send(err);
             }
             else {
                  for (var p in req.body) {
                      if (req.body.hasOwnProperty(p)) {
                          result[p] = req.body[p];
                      }
                  }
                  result.save(function(err, result) {
                    if (err)
                        return res.status(500).send(err);
                    else
                        res.send(result);  
                })
             }
         })
                  

        
        
//         productsModel.findByIdAndUpdate(req.params.id, req.body, function (err, result) {
//            if (err)
//                return res.status(500).send(err);
//             else                                          
//                res.send(result);  
//        });
    },
    
    delete: function(req, res) {
        
         console.log('in delete');
         console.log('req.params.id = ', req.params.id);
        
         productsModel.findByIdAndRemove(req.params.id, function(err, result) {
             
             if (err)
                 return res.status(500).send(err);
             else
                res.send(result);  
        });
    }

}