angular.module('ecommerce')
.service('adminService', function( $http ) {
      
     this.getProducts = function() {
    	return $http({
            method: 'GET',
            url: '/products'
        });
    };
});