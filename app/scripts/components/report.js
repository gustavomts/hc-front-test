(function() {
  'use strict';
  angular.module('reportApp').component('reportDetails', {
    template: `
      <div class="report-container">
        <span class="report-author-name">{{$ctrl.report.author.first_name}} {{$ctrl.report.author.last_name}}</span>
        <span class="report-author-email">{{$ctrl.report.author.email}}</span>
        <div class="report-message-container">
          <span class="report-message">{{$ctrl.report.message || 'Report with no message'}}</span>
        </div>
        <hr ng-if="$ctrl.report.responses && $ctrl.report.responses.length > 0" size="1">
        <div ng-if="$ctrl.report.responses && $ctrl.report.responses.length > 0" class="responses-list-container">
          <div class="response-container" ng-repeat="response in $ctrl.report.responses">
            <span class="response-author-name">{{response.author.first_name}} {{response.author.last_name}}</span>
            <div>
              <span class="response-message">{{response.message}}</span>
            </div>
          </div>
        </div>
        <hr ng-if="$ctrl.report.supervisors && $ctrl.report.supervisors.length > 0" size="1">
        <div ng-if="$ctrl.report.supervisors && $ctrl.report.supervisors.length > 0" class="report-supervisors-container">
          <span class="supervisors-label">Supervisors:</span>
          <span class="supervisor-name" ng-repeat="supervisor in $ctrl.report.supervisors">
            {{supervisor.first_name}} {{supervisor.last_name}} {{$last ? '' : ', '}}
          </span>
        </div>
      </div>
    `,
    bindings: {
      report: '<'
    },
    controller: function() {}
  });
})();
