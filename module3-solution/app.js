(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemsDirective)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

        function FoundItemsDirective(){
            var ddo = {
                templateUrl: 'foundItems.html',
                scope: {
                    found: '<',
                    onRemove: '&'
                }
            }
            return ddo;
        }
        
        MenuSearchService.$inject = ['$http', 'ApiBasePath'];
        function MenuSearchService($http, ApiBasePath){
            var service = this;
            service.foundItems = [];
            service.getMatchedMenuItems = function (searchTerm) {
                return $http({
                    method: "GET",
                    url: (ApiBasePath + "/menu_items.json")
                })
                .then( function (result) {
                    // process result and only keep items that match
                    var response = {};
                    var allItems = result.data.menu_items;
                    var foundItems = [];
                    for (var i = 0; i < allItems.length; i++) {
                        var item = allItems[i];
                        if (item.description.toLowerCase().indexOf(searchTerm) != -1) {
                            foundItems.push(item);
                        }
                    }
                    // return processed items
                    response.data = foundItems;
                    return response;
                });
            };

        };
        
        NarrowItDownController.$inject = ['MenuSearchService'];
        function NarrowItDownController(MenuSearchService){
            var ctrl = this;
            ctrl.searchTerm = undefined;
            ctrl.search = function (searchTerm) {
                if(searchTerm == undefined || searchTerm == ""){
                    ctrl.found = [];
                }else{
                    var promise = MenuSearchService.getMatchedMenuItems(searchTerm.toLowerCase());
                    promise.then( function (response){
                        ctrl.found = response.data;
                    });
                }
            };
            ctrl.removeItem = function (itemIndex) {
                ctrl.found.splice(itemIndex,1);
            };
        };
    
})();
