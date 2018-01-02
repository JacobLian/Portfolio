'use strict';

angular.module('portfolio', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: '../core/views/home.html'
    });
    $stateProvider.state('projects', {
        url: '/projects',
        templateUrl: '../core/views/projects.html'
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