var usersModel = require('./../models/usersModel');

module.exports = {

    create: function(req, res) {
        
        console.log('in create');
        console.log('req.body = ', req.body);
        console.log('req.query = ', req.query);
       /* var newProducts = new productsModel(req.body); */
        
        usersModel
         .find(req.query)
         .exec(function(err, result) { 
            if (err)
                return res.status(500).send(err);
             else  { 
                console.log('result = ', result);
                res.send(result);  
             }
            
            /* usersModel.findByIdAndUpdate(req.params.id, req.body, function (err, result) {
            if (err)
                return res.status(500).send(err);
             else                                          
                res.send(result);  */
        });
    },
    
    
    update: function(req, res) {
        
         console.log('in update');
         console.log('req.params.id = ', req.params.id);
         console.log('req.body = ', req.body);
         var newProducts = new productsModel(req.body);
         var user = usersModel(req.query);
        
         productsModel.findByIdAndUpdate(req.params.id, req.body, function (err, result) {
            if (err)
                return res.status(500).send(err);
             else                                          
                res.send(result);  
        });
    }

}