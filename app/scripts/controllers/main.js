'use strict';

/**
 * @ngdoc function
 * @name reportApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the reportApp
 */
angular.module('reportApp').controller('MainCtrl', [
  '$scope',
  'ReportService',
  'UserService',
  function($scope, ReportService, UserService) {
    $scope.reports = [];
    $scope.users = [];

    ReportService.getReports().then(function(res) {
      $scope.reports = res.data;
    });

    UserService.getUsers().then(function(res) {
      $scope.users = res.data;
    });
  }
]);
