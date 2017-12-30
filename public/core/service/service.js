angular.module('portfolio').service('portSvc', function($http){

    this.getit = function(){
        return portfolio;
    }
    var portfolio = 'hello'
})