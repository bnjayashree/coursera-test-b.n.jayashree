(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['$stateParams', 'MenuDataService', 'items'];
function ItemsController($stateParams, MenuDataService, items) {
  var itemsCtrl = this;
  itemsCtrl.items = items;
  itemsCtrl.categoryName = $stateParams.categoryName;
  console.log(itemsCtrl.categoryName);
}

})();
