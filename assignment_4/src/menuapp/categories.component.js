(function () {
'use strict';

angular.module('data')
.component('categoriesData', {
  templateUrl: 'src/menuapp/templates/categoriesData.html',
  bindings: {
    categories: '<'
  }
});

})();
