(function() {
  'use strict';
  // definições de módulo aqui
  // definições de serviço aqui
  angular.module('reportApp').factory('UserService', function($http) {
    return {
      getUsers: function() {
        return $http.get(
          'https://hc-challenge-report-api.herokuapp.com/users/'
        );
      }
    };
  });
})();
