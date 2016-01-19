angular.module('ecommerce')
.service('adminService', function( $http ) {
      
    this.getProducts = function() {
    	return $http({
            method: 'GET',
            url: '/products'
        });
    };
    
    this.deleteProduct = function(prod) {
        console.log('In deleteProduct()');
        console.log('prod = ', prod);
        var url = '/products/' + prod._id;
        console.log('url = ', url);
    	return $http({
            method: 'DELETE',
            url: url
        });
    };
    
    this.updateProduct = function(prod) {
        console.log('In updateProduct()');
        console.log('prod = ', prod);
        var url = '/products/' + prod._id;
        console.log('url = ', url);
        var data = {};
        for (var key in prod) {
            if (prod.hasOwnProperty(key)) {
                if (key !== '_id')
                    data[key] = prod[key];
            }
        }
        console.log('data = ', data);
    	return $http({
            method: 'PUT',
            url: url,
            data: data
        });
    };
    
     this.addProduct = function(prod) {
        console.log('In addProduct()');
        console.log('prod = ', prod);
        var url = '/products/'          
        return $http({
            method: 'POST',
            url: url,
            data: prod
        });
    };
});