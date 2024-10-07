(function () {
'use strict';

angular.module('MenuApp').config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function RoutesConfig($stateProvider, $urlRouterProvider) {
  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/menulist/templates/home.template.html'
    })
    // Categories list page
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/menulist/templates/categories.template.html',
      controller: 'CategoriesController as categoriesCtrl',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })
    // Items list page
    .state('items', {
       url: '/categories/{categoryShortName}',
       templateUrl: 'src/menulist/templates/items.template.html',
       controller: 'ItemsController as itemsCtrl',
       params: {
         categoryShortName: null,
         categoryName: null
       },
       resolve: {
         items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
           return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
         }]
       }
     });
   }

})();
