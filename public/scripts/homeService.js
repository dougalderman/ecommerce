angular.module('ecommerce')
.service('homeService', function( $http ) {
      
     this.getProducts = function() {
    	return $http({
            method: 'GET',
            url: '/products'
        });
    };
});