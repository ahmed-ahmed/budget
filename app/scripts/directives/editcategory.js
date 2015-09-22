'use strict';

/**
 * @ngdoc directive
 * @name budgetApp.directive:editCategory
 * @description
 * # editCategory
 */
angular.module('budgetApp')
  .directive('editCategory', function () {
    return {
    	scope:{
    		category: '@',
    		categories:'=',
    	 	selectionChanged: '&'
    	},
    	templateUrl: 'scripts/directives/edit-category.html',
	    restrict: 'E',
	    controller: function($scope){
	    	$scope.editInPlace = function(){
	    		$scope.editMode = !$scope.editMode;
	    	}
	    	$scope.categorySelected = function(selected) {
				if(selected){
		    		$scope.category = selected.originalObject.name;
	    			$scope.selectionChanged(selected);
	    			$scope.editInPlace();
	    		}
	    	}
	    },
	    link: function postLink(scope, element, attrs) {
	        // element.text('this is the editCategory directive');
	    }
    };
  });
