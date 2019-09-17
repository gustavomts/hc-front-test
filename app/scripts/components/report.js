(function() {
  'use strict';
  angular.module('reportApp').component('reportDetails', {
    template: '<p>{{$ctrl.report}}</p>',
    bindings: {
      report: '<'
    },
    controller: function() {}
  });
})();
