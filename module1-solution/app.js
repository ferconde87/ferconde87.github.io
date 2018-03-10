(function () {
    'use strict';

    angular.module('LunchCheck', [])

        .controller('LunchCheckController', LunchCheckController)

        LunchCheckController.$inject = ['$scope'];

        function LunchCheckController($scope) {
            
            $scope.itemsForLunch = "";
            function getItemsAmount(items){
                var itemsArray = items.split(',');
                var amount = 0;
                var n = itemsArray.length;
                for (var i = 0; i < n; i++) {
                    var item = itemsArray[i].trim()
                    if(item != ''){
                        amount+= 1;
                    }
                }
                return amount;
            }

            $scope.checkItems = function(){
                console.log($scope.itemsForLunch);
                var amount = getItemsAmount($scope.itemsForLunch);
                $scope.message = "";
                $scope.warning = ""
                if (amount == 0) {
                    $scope.warning = "Please enter data first";
                } else if (amount <= 3) {
                    $scope.message = "Enjoy!";
                }else {
                    $scope.message = "Too much!";
                }
            };
        };
        
})();
