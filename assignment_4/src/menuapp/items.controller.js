(function () {
'use strict';

angular.module('data')
.controller('ItemsCtrl', ItemsCtrl);

ItemsCtrl.$inject = ['items'];
function ItemsCtrl(items) {
  var cat = this;
  cat.menuItems = items.menu_items;
  cat.items = items;
}

})();
