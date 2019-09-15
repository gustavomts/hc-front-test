(function() {
  'use strict';
  angular.module('reportApp').component('responseDetails', {
    template: `Hello, {{$ctrl.user}}!`,
    bindings: {
      response: '<'
    },
    controller: function() {}
  });
})();
