angular.module('portfolio', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.when('','/')

    $stateProvider
    .state('home', {
        url:'/',
        templateUrl: '../core/views/home.html'
    })
    $stateProvider
    .state('projects', {
        url:'/projects',
        templateUrl:'../core/views/projects.html'
    })
})