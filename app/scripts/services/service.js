'use strict';

/**
 * @ngdoc service
 * @name budgetApp.service
 * @description
 * # service
 * Service in the budgetApp.
 */
angular.module('budgetApp')
  .service('service', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var service = {};

    var getAccounts = [
    	{Id: 1, type: 'checking' ,name: 'DCU', description: 'This is an account at DCU', balance: 35425.12},
    	{Id: 2, type: 'saving' ,name: 'Midwest One', description: 'This is an account at DCU', balance: 35425.12},
    	{Id: 2, type: 'checking' ,name: 'Midwest One', description: 'This is an account at DCU', balance: 35425.12},
    ];

    service.getAccounts = function(){

    };


    return service;
  });
