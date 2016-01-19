angular.module('ecommerce')
.controller('newItemCtrl', function(adminService, $scope, $state ) {
    console.log('in newItemCtrl');
    
     $scope.addProd = function(prod) {
        adminService.addProduct(prod)
        .then(function(response) {
            console.log('response', response);
            $state.go('admin');
        });
    };
    
});