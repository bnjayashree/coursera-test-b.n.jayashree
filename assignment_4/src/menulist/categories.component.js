(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
    templateUrl: 'src/menulist/templates/categoriescomponent.template.html',
    bindings: {
      categories: '<'
    }
});

})();
