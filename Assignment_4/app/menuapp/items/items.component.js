(function() {
  'use strict';

  angular.module('MenuApp')
    .component('items', {
      templateUrl: 'app/menuapp/items/items.component.template.html',
      bindings: {
        items: '<'
      }
    });

})();
