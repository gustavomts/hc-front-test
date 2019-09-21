(function() {
  'use strict';
  angular.module('reportApp').component('reportDetails', {
    template: `
      <div class="report-container">
        <span class="report-author-name">{{$ctrl.report.author.first_name}} {{$ctrl.report.author.last_name}}</span>
        <span class="report-author-email">{{$ctrl.report.author.email}}</span>
        <div class="report-message-container">
          <span class="report-message">{{$ctrl.report.message}}</span>
        </div>
        <hr size="1">
        <div class="responses-list-container">
          <div class="response-container" ng-repeat="response in $ctrl.report.responses">
            <span class="response-author-name">{{response.author.first_name}} {{response.author.last_name}}</span>
            <div>
              <span class="response-message">{{response.message}}</span>
            </div>
          </div>
        </div>
      </div>
    `,
    bindings: {
      report: '<'
    },
    controller: function() {}
  });
})();
