(function() {
  'use strict';

  angular.module('MenuApp')
    .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['$rootScope', '$scope', 'items'];
  function ItemsController($rootScope, $scope, items) {
    var $ctrl = this;

    $ctrl.items = items;

    $ctrl.$onInit = onInit;
    $scope.$on('$destroy', onDestoy);

    ////////////

    var cancellers = [];

    function onInit() {
      var cancel = $rootScope.$on('items.load', function(event, data) {
        $ctrl.loading = data.on;
      });
      cancellers.push(cancel);
    };

    function onDestoy() {
      cancellers.forEach(function(item) {
        item();
      });
    }

  }

})();
