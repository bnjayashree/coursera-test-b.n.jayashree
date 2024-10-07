(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  //first, we want that evrything go to the home
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  //routes
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  //categories page
  .state('category',{
    url: '/category',
    templateUrl: 'src/menuapp/templates/categories.template.html',
    controller: 'CategoryCtrl as catList',
    resolve: {
      menuCategory: ['MenuDataService', function (MenuDataService){
        return MenuDataService.getAllCategories();
      }]
    }
  })

  //items pages
  .state('items',{
    url: '/items/{itemsCategory}',
    templateUrl: 'src/menuapp/templates/items.template.html',
    controller: 'ItemsCtrl as cat',
    resolve: {
      items: ['$stateParams', 'MenuDataService',
              function ($stateParams, MenuDataService) {
                return MenuDataService.getItemsForCategory($stateParams.itemsCategory);
              }]
    }
  });

}

})();
