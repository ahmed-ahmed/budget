'use strict';

/**
 * @ngdoc directive
 * @name budgetApp.directive:budgetProgress
 * @description
 * # budgetProgress
 */
angular.module('budgetApp')
  .directive('budgetProgress', function () {
    return {
      templateUrl: 'budget-progress.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the budgetProgress directive');
      }
    };
  });
