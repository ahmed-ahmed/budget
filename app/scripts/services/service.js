'use strict';

/**
 * @ngdoc service
 * @name budgetApp.service
 * @description
 * # service
 * Service in the budgetApp.
 */
angular.module('budgetApp')
  .service('service', function ($q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var service = {};

    var accounts = [
    	{id: 1, type: 'checking' ,name: 'DCU', description: 'This is an account at DCU', balance: 35425.12},
    	{id: 2, type: 'saving' ,name: 'Midwest One', description: 'This is an account at DCU', balance: 35425.12},
    	{id: 2, type: 'checking' ,name: 'Midwest One', description: 'This is an account at DCU', balance: 35425.12},
    ];

    var account = {id: 1, type: 'checking' ,name: 'DCU', description: 'This is an account at DCU', balance: 35425.12, 
    	transactions: [{
    		id: 32542,
    		description: 'visa payment for card no #####9823',
    		value: 500.00,
    		date: '08/12/2015',
    		category: {id: 1, name: 'education'}
    	},
		{
    		id: 32542,
    		description: 'visa payment for card no #####9823',
    		value: 500.00,
    		date: '08/12/2015',
    		category: {id: 1, name: 'education'}
    	}
    	]

	};

    service.getAccounts = function(){
		var deferred = $q.defer();
        deferred.resolve({data: accounts});
        return deferred.promise;
    };

    service.getAccountDetails = function(id){
		var deferred = $q.defer();
        deferred.resolve({data: account});
        return deferred.promise;
    };


    return service;
  });
