angular.module('ecommerce')
.controller('adminCtrl', function(adminService, $scope ) {
    console.log('in adminCtrl');
    adminService.getProducts()
    .then(function( response ) {
        console.log('in adminCtrl');
        console.log('response', response);
        $scope.products = response.data;
    }); 
    
});