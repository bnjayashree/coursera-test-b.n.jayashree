(function() {
  'use strict';

  angular.module('MenuApp')
    .component('categories', {
      templateUrl: 'app/menuapp/categories/categories.component.template.html',
      bindings: {
        items: '<'
      }
    });

})();
