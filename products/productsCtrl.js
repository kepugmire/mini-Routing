angular.module('miniRouter')
.controller('productsCtrl', function($scope, productsService){


    if($stateParams.id === 'shoes'){
        $scope.produts = productService.showData
    } 
    else if ($stateParams.id === 'socks') {
        $scope.products = productService.sockData
    }

})