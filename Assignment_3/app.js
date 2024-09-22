(function () {
'use strict';

angular.module('MenuItemsApp', [])
.controller('MenuItemsController', MenuItemsController)
.service('MenuItemsService', MenuItemsService)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com")
.directive('foundItems', ItemsListDirective);


function ItemsListDirective() {
  var ddo = {
    templateUrl: 'itemsList.html',
    scope: {
      items: '<',
      myTitle: '@title',
      onRemove: '&'
    },
    controller: MenuItemsDirectiveController,
    controllerAs: 'menu',
    bindToController: true
  };

  return ddo;
}


function MenuItemsDirectiveController() {
  var menu = this;

  menu.isEmpty = function() {
    return menu.items.length === 0;
  }
}


MenuItemsController.$inject = ['MenuItemsService'];
function MenuItemsController(MenuItemsService) {
  var menu = this;
  menu.items = [];
  menu.searchTerm = "";
  menu.logMenuItems = function () {
    if(menu.searchTerm != "") {
      var promise = MenuItemsService.getMatchedMenuItems(menu.searchTerm);

      promise.then(function (response) {
        console.log(response);
        menu.items = response;
      })
      .catch(function (error) {
        console.log(error);
      });
    } else {
      menu.items = [];
    }

  };

  menu.removeItem = function(index) {
      menu.items.splice(index, 1);
  };

}


MenuItemsService.$inject = ['$http', 'ApiBasePath']
function MenuItemsService($http, ApiBasePath) {
  var service = this;

       service.getMatchedMenuItems = function(searchTerm) {
         return $http({
           method: "GET",
           url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
         })
         .then(function(response) {

           // process all results
           var items = response.data.menu_items;
           var foundItems = [];

           for (var i = 0; i < items.length; i++) {

             if (items[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0) {
               foundItems.push(items[i]);
             }
           }
           return foundItems;
         });

       };

}

})();
