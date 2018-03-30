(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var ctrlBuy = this;
        ctrlBuy.items = ShoppingListCheckOffService.getItemsToBuy();
        ctrlBuy.buy = function (itemIndex) {
            ShoppingListCheckOffService.checkOff(itemIndex);
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var ctrlBought = this;
        ctrlBought.items = ShoppingListCheckOffService.getItemsBought();
    }

    function ShoppingListCheckOffService() {
        var service = this;
        var itemsToBuy = [];
        var itemsBought = [];
        // List of shopping items to buy
        itemsToBuy = [
            { name: "cookies", quantity: 10 },
            { name: "chips", quantity: 5 },
            { name: "bananas", quantity: 20 },
            { name: "apples", quantity: 15 },
            { name: "oranges", quantity: 20 },
        ];
        
        service.checkOff = function (itemIndex) {
            var item = itemsToBuy[itemIndex];
            itemsToBuy.splice(itemIndex, 1);
            itemsBought.push(item);
        };

        service.getItemsToBuy = function () {
            return itemsToBuy;
        };

        service.getItemsBought = function () {
            return itemsBought;
        };
    }
})();
