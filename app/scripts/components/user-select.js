(function() {
  'use strict';
  angular.module('reportApp').component('userSelect', {
    template: `
      <select ng-model="selectedUser" ng-options='user.id as (user.first_name + " " + user.last_name) for user in $ctrl.users'>
        <option value="">Selecione um usuário</option>
      </select>
    `,
    bindings: {
      users: '<',
      selectUser: '<'
    },
    controller: function() {}
  });
})();
