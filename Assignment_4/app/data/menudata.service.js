(function() {
  'use strict';

  angular.module('data')
    .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$rootScope', '$http', 'ApiBasePath']
  function MenuDataService($rootScope, $http, ApiBasePath) {

    var service = {
      getAllCategories: getAllCategories,
      getItemsForCategory: getItemsForCategory
    };

    return service;

    ////////////

    function getAllCategories() {

      return $http
        .get(ApiBasePath + "/categories.json")
        .then(getCategoriesComplete)
        .catch(getCategoriesFailed);

      function getCategoriesComplete(data) {
        return data.data;
      }

      function getCategoriesFailed(e) {
        console.log('Error loading categories data');
        throw e;
      }
    }

    function getItemsForCategory(categoryShortName) {
      $rootScope.$broadcast('items.load', {on: true});
      return $http
        .get(ApiBasePath + "/menu_items.json", {
          params: {
            category: categoryShortName
          }
        })
        .then(getItemsComplete)
        .catch(getItemsFailed);

      function getItemsComplete(data) {
        $rootScope.$broadcast('items.load', {on: false});
        return data.data.menu_items;
      }

      function getItemsFailed(e) {
        $rootScope.$broadcast('items.load', {on: false});
        console.log('Error loading items data');
        throw e;
      }
    }
  }

})();
