(function() {
  'use strict';
  angular.module('reportApp').factory('ReportService', function($http) {
    var url = 'https://hc-challenge-report-api.herokuapp.com/reports/';
    return {
      getReports: function(search) {
        return $http({
          url,
          method: 'GET',
          params: {
            user_id: search.userId,
            pagination_limit: search.paginationLimit,
            pagination_offset: search.paginationOffset
          }
        });
      }
    };
  });
})();
