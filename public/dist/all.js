'use strict';

angular.module('portfolio', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: './views/home.html'
    });
    $stateProvider.state('projects', {
        url: '/',
        templateUrl: './views/projects.html'
    });
});
'use strict';

angular.module('portfolio').controller('portCtrl', function ($scope, portSvc) {
    $scope.getit = portSvc.getit();
});
'use strict';

angular.module('portfolio').service('portSvc', function ($http) {

    this.getit = function () {
        return portfolio;
    };
    var portfolio = 'hello';
});