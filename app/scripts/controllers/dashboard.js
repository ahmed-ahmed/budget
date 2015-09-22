'use strict';

/**
 * @ngdoc function
 * @name budgetApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the budgetApp
 */
angular.module('budgetApp')
  .controller('DashboardCtrl', function (service, $scope) {

  	$scope.transactions = [];
  	$scope.accounts = [];

  	$scope.categories = [];


	service.getTransactions().then(function(response){
		$scope.transactions = response.data;
  	});

  	service.getAccounts().then(function(response){
  		$scope.accounts = response.data;
  	})

  	service.getCategories().then(function(response){
  		$scope.categories = response.data;
  	})
  	//to do create a directive
	// in place edit 

	$scope.editorEnabled = false;


  	$scope.inPlaceEdit = function(){
  		$(this).hide();
  	}

	$scope.categorySelected = function(selected) {
		console.log(selected);
		// if(selected){
		// 	var currentCategory = this.$parent.$index;
		// 	$scope.transactions[currentCategory].category = selected.originalObject;
		// }
		//service.updateCategory(transaction, category)
      // if (selected) {
      //   $scope.countrySelected9 = selected.originalObject;
      // } else {
      //   $scope.countrySelected9 = null;
      // }
    }

  });
