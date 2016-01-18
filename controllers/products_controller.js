var mongojs = require('mongojs');
var db = mongojs('ecommerce', ['products']);
var ObjectId = require('mongodb').ObjectId;

module.exports = {

    index: function(req, res, next) {
        
        db.products.find(function(err, result) {
                     
            if (err) {
                res.status(500).send("Failed to get")
            }
            
            res.json(result);
        });
        
        console.log('get hit');
    },
    show: function(req, res, next) {
        
        var idToGet = ObjectId(req.params.id);
    
        console.log('idToGet = ', idToGet);
    
        db.products.findOne({_id: idToGet}, function(err, result) {
        
            if (err) {
                res.status(500).send("Failed to get")
            }
            
            res.json(result);
        });
        
        console.log('get hit');
    },
    create: function(req, res, next) {
        
        var dataToInsert = req.body;
        db.products.insert(dataToInsert, function(err, result) {
    
            if (err) {
                res.status(500).send("Failed to post");
            }
            res.json(result);
        });
    
        console.log('post hit');
    },
    update: function(req, res, next) {
    
        var idToModify = ObjectId(req.params.id);
        var updateObject = {
            query: {_id: idToModify},
            update: { $set: req.body},  // $set--just set one property of object
            new: false
        }
    
        db.products.findAndModify(updateObject, function(err, result) {
            if (err) {
                res.status(500).send("Failed to modify")
            }
            res.json(result);
        });
    
        console.log('put hit');
    },
    destroy: function(req, res, next) {
    
        var idToDelete = ObjectId(req.params.id);
    
        db.products.remove({_id: idToDelete}, function(err, result) {
            if(err) {
                res.status(500).send("Failed to delete");
            }
            res.send("Successfully deleted record");
        });
        console.log('delete hit');
   
    }
  
};