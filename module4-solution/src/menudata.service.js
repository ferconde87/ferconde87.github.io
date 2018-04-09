(function () {
    angular.module('data')
    .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$stateParams','$http'];
    function MenuDataService($stateParams, $http){
        var service = this;

        var baseUrl = "https://davids-restaurant.herokuapp.com";

        service.getAllCategories = function () {
            return $http({
                method: "GET",
                url: (baseUrl + "/categories.json")
            }).then( function(response){
                return response.data;
            });
        };

        service.getItemsForCategory = function (category) {
            return $http({
                method: "GET",
                url: (baseUrl + "/menu_items.json?"),
                params: { category: category}//testear esto!!!
            }).then( function(response){
                return response.data;
            });
            
        };
    }
})();
