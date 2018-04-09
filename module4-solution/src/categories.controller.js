(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['items'];
    function CategoriesController(items) {
        var categories = this;
        categories.items = items;

        categories.pepe = function () {
            debugger;
            console.log(categories);
        }
    }

})();