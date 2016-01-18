angular.module('ecommerce')
.controller('homeCtrl', function(homeService, $scope ) {
    console.log('in homeCtrl');
    homeService.getProducts()
    .then(function( response ) {
        console.log('in homeCtrl');
        console.log('response', response);
        $scope.products = response.data;
    }); 
    
});