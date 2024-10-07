(function(){
'use strict';

  angular.module('MenuApp')
    .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['$rootScope', '$scope', 'categories'];
  function CategoriesController($rootScope, $scope, categories) {
    var $ctrl = this;

    $ctrl.categories = categories;
  }

})();
