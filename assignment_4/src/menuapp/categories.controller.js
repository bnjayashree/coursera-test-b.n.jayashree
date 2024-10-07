(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['MenuDataService', 'categories'];
function CategoriesController(MenuDataService, categories) {
  console.log("CategoriesController");
  var categoriesCtrl = this;
  categoriesCtrl.categories = categories;
  console.log("categories :", categoriesCtrl.categories);
}

})();
