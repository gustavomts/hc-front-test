(function() {
  'use strict';
  angular.module('reportApp').component('pagination', {
    template: `
    <div class="pagination-container">
      <div class="select-box">
        <select ng-model="$ctrl.selectedPageLimit" ng-change="$ctrl.updatePageSize()" ng-options='size for size in $ctrl.pageSizes'>
          <option value="">Tamanho da página</option>
        </select>
      </div>

      <div class="pagination">
        <a class="prev page-numbers" ng-click="$ctrl.goToPrevious()">prev</a>
        <span aria-current="page" class="page-numbers current">{{$ctrl.currentPage}}</span>
        <a class="next page-numbers" ng-click="$ctrl.goToNext()">next</a>
      </div>
    </div>
  `,
    bindings: {
      onPrevious: '&',
      onNext: '&',
      onUpdatePageSize: '&',
      currentPage: '<',
      reportCount: '<',
      pageLimit: '<'
    },
    controller: function() {
      this.pageSizes = [10, 20, 50, 100];

      this.updatePageSize = function() {
        if (
          this.reportCount === this.pageLimit ||
          this.selectedPageLimit < this.reportCount
        ) {
          this.onUpdatePageSize({ pageLimit: this.selectedPageLimit });
        }
      };

      this.goToPrevious = function() {
        if (this.currentPage > 1) {
          this.onPrevious({ pageNumber: this.currentPage - 1 });
        }
      };

      this.goToNext = function() {
        if (this.reportCount === this.pageLimit) {
          this.onNext({ pageNumber: this.currentPage + 1 });
        }
      };
    }
  });
})();
