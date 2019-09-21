(function() {
  'use strict';
  angular.module('reportApp').component('userSelect', {
    template: `
    <div class="select-box">
      <select ng-model="$ctrl.userId" ng-change="$ctrl.updateParent()" ng-options='user.id as (user.first_name + " " + user.last_name) for user in $ctrl.users'>
        <option value="">Selecione um usuário</option>
      </select>
    </div>
    `,
    bindings: {
      users: '<',
      onSelectUser: '&'
    },
    controller: function() {
      this.updateParent = function() {
        this.onSelectUser({ selectedUser: this.userId });
      };
    }
  });
})();
