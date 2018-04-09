(function(){
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'src/home.template.html'
    })
    .state('categories', {
        url: '/categories',
        templateUrl: 'src/categories.template.html',
        controller: 'CategoriesController',
        controllerAs: 'categories',
        resolve: {
            items: ['MenuDataService', function (MenuDataService) {
                return MenuDataService.getAllCategories(); 
            }]
        }
    })
    .state('items', {
        url: '/items/{category}',
        templateUrl: 'src/items.template.html',
        controller: 'ItemsController as itemsCtrl',
        controllerAs: 'itemsCtrl',
        resolve: {
            itemsOfCategory: ['$stateParams', 'MenuDataService', 
                function ($stateParams, MenuDataService){
                    return MenuDataService.getItemsForCategory($stateParams.category);
                }]
        }
    });


}
})();