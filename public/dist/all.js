'use strict';

angular.module('portfolio', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/');

    $stateProvider.state('projects', {
        url: '/',
        templateUrl: './views/home.html'
    });
    $stateProvider.state('projects', {
        url: '/',
        templateUrl: './views/projects.html'
    });
});