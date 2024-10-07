(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http'];

function MenuDataService($http) {
  var menuService = this;

  menuService.getAllCategories = function () {
      return $http({
        method: "GET",
        url: ('https://coursera-jhu-default-rtdb.firebaseio.com/categories.json')
      }).then(function (response) {
        return response.data;
      });
  };

  menuService.getItemsForCategory = function (categoryShortName) {
      return $http({
        method: "GET",
        url: ('https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/'+categoryShortName+'.json')
      }).then(function (response) {
        return response.data.menu_items;
      });
  };
}

})();
