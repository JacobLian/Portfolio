angular.module('portfolio').controller('portCtrl', function($scope, portSvc){
    $scope.getit = portSvc.getit();
})