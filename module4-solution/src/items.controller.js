(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['itemsOfCategory'];
    function ItemsController(itemsOfCategory) {
        var itemsCtrl = this;
        itemsCtrl.itemsOfCategory = itemsOfCategory.menu_items;
        itemsCtrl.category = itemsOfCategory.category.name
    }

})();