'use strict';

/**
 * @ngdoc overview
 * @name reportApp
 * @description
 * # reportApp
 *
 * Main module of the application.
 */
angular
  .module('reportApp', [
    'ngRoute',
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
