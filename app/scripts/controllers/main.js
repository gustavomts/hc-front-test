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
    $scope.currentPage = 1;
    $scope.pageLimit = 5;

    $scope.updatePageNumber = function(pageNumber) {
      $scope.currentPage = pageNumber;
      $scope.getReports();
    };

    $scope.updatePageSize = function(pageLimit) {
      $scope.pageLimit = pageLimit;
      $scope.getReports();
    };

    $scope.getReports = function() {
      ReportService.getReports({
        userId: this.selectedUser,
        paginationLimit: $scope.pageLimit,
        paginationOffset: ($scope.currentPage - 1) * $scope.pageLimit
      }).then(function(res) {
        $scope.reports = res.data;
        if ($scope.reports.length < 1 && $scope.currentPage > 1) {
          $scope.currentPage -= 1;
          $scope.getReports();
        }
      });
    };

    $scope.selectUser = function(selectedUser) {
      this.selectedUser = selectedUser;
      $scope.getReports();
    };

    UserService.getUsers().then(function(res) {
      $scope.users = res.data;
    });

    $scope.getReports();
  }
]);
