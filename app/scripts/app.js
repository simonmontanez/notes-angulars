'use strict';

/**
 * @ngdoc overview
 * @name iniciandoAngularApp
 * @description
 * # iniciandoAngularApp
 *
 * Main module of the application.
 */
angular
  .module('iniciandoAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/iniciando', {
        templateUrl: 'views/iniciando.html',
        controller: 'InciandoCtrl',
        controllerAs: 'iniciando'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
