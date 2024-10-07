(function () {
'use strict';

angular.module('MenuApp')
  .component('items', {
    templateUrl: 'src/menulist/templates/itemscomponent.template.html',
    bindings: {
      items: '<'
    }
  });

})();
