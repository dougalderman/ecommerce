angular.module('ecommerce')
.controller('adminCtrl', function(adminService, $scope ) {
    console.log('in adminCtrl');
    adminService.getProducts()
    .then(function( response ) {
        console.log('response', response);
        $scope.products = response.data;
    }); 
    
    $scope.deleteProd = function(prod) {
        adminService.deleteProduct(prod)
        .then(function(response) {
            console.log('response', response);
            adminService.getProducts()
            .then(function( response ) {
                console.log('response', response);
                $scope.products = response.data;
            });
        });
        
    };
    
     $scope.updateProd = function(prod) {
        adminService.updateProduct(prod)
        .then(function(response) {
            console.log('response', response);
            adminService.getProducts()
            .then(function( response ) {
                console.log('response', response);
                $scope.products = response.data;
            });
        });
        
    };
    
});