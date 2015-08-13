'use strict';

/**
 * @ngdoc overview
 * @name budgetApp
 * @description
 * # budgetApp
 *
 * Main module of the application.
 */
angular
  .module('budgetApp', [
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
      .when('/accounts', {
        templateUrl: 'views/accounts.html',
        controller: 'AccountsCtrl',
        controllerAs: 'accounts'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
