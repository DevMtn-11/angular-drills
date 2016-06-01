angular.module('routingApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './views/home/homeTmpl.html'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: './views/signup/signupTmpl.html'
      })
      .state('details', {
        url: '/details',
        templateUrl: './views/details/detailsTmpl.html',
        controller: 'controller'
      });

  });
