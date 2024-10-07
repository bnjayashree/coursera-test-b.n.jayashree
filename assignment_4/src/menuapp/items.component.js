(function () {
'use strict';

angular.module('data')
.component('itemsData', {
  templateUrl: 'src/menuapp/templates/itemsData.html',
  bindings: {
    items: '<'
  }
});

})();
