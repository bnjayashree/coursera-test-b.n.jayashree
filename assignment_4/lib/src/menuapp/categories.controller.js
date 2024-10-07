(function () {
'use strict';

angular.module('data')
.controller('CategoryCtrl', CategoryCtrl);

CategoryCtrl.$inject = ['menuCategory'];
function CategoryCtrl(menuCategory) {
  var catList = this;
  console.log(menuCategory);
  catList.items = menuCategory;
}

})();
