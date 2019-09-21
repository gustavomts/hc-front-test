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
      <!-- <ul class="pagination">
        <li class="page-item">
          <a class="page-link" ng-click="$ctrl.goToPrevious()" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item"><a class="page-link">{{$ctrl.currentPage}}</a></li>
        <li class="page-item">
          <a class="page-link" ng-click="$ctrl.goToNext()" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul> -->

      <div class="pagination">
        <a class="prev page-numbers" ng-click="$ctrl.goToPrevious()" href="javascript:;">prev</a>
        <span aria-current="page" class="page-numbers current">{{$ctrl.currentPage}}</span>
        <a class="next page-numbers" ng-click="$ctrl.goToNext()" href="javascript:;">next</a>
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
