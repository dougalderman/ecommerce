var usersModel = require('./../models/usersModel');

module.exports = {

    create: function(req, res) {
        
        console.log('in create');
        console.log('req.body = ', req.body);
        var newUsers = new usersModel(req.body);
        
        newUsers.save(function(err, result) {
            if (err)
                return res.status(500).send(err);
            else
                res.send(result);  
        })
    },
    
    read: function(req, res) {
        console.log('in read');
        console.log('req.query = ', req.query)
         usersModel
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
         usersModel.findByIdAndUpdate(req.params.id, req.body, function (err, result) {
            if (err)
                return res.status(500).send(err);
             else                                          
                res.send(result);  
        });
    },
    
    delete: function(req, res) {
        
         console.log('in delete');
         console.log('req.params.id = ', req.params.id);
        
         usersModel.findByIdAndRemove(req.params.id, function(err, result) {
             
             if (err)
                 return res.status(500).send(err);
             else
                res.send(result);  
        });
    }

}