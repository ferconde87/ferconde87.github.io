(function (){
    angular.module('public')
    .controller('SignUpController', SignUpController)

    SignUpController.$inject = ['shortNameItems', 'menuItems', '$scope'];
    function SignUpController(shortNameItems, menuItems, $scope){
        var ctrl = this;
        ctrl.shortNameItems = shortNameItems;
        ctrl.selected = shortNameItems[0];
        ctrl.menuItems = menuItems.menu_items;
        $scope.selected2 = "pepe";

        ctrl.submit = function() {
            var pepe = "prueba";
            debugger;
            return true;
        }
    }

})();