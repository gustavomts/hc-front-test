(function() {
  'use strict';
  angular.module('reportApp').factory('ReportService', function($http) {
    return {
      getReports: function() {
        return $http.get(
          'https://hc-challenge-report-api.herokuapp.com/reports/?pagination_offset=98'
        );
      }
    };
  });
})();
