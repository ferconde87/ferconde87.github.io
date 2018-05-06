(function (){
    "user strict";

    angular.module('public')
    .controller('SignUpController', SignUpController)

    SignUpController.$inject = ['menuItems', 'MenuService', 'UserInformationService'];
    function SignUpController(menuItems, MenuService, UserInformationService){
        var ctrl = this;
        ctrl.menuItems = menuItems.menu_items;
        ctrl.firstName = "";
        ctrl.lastName = "";
        ctrl.email = "";
        ctrl.phone = "";
        ctrl.itemSelected = "";
        ctrl.shortNameItems = [];
        ctrl.submitted = false;
        for (var i = 0; i < ctrl.menuItems.length; i++) {
            ctrl.shortNameItems.push(ctrl.menuItems[i].short_name);
        }
        ctrl.submit = function(shortName) {
            MenuService.getItemFromShortName(shortName)
            .then(
                function( data ){
                    ctrl.itemSelected = data;
                }
            )
            .then(
                function (){
                    var userInformation = {};
                    userInformation.firstName = ctrl.firstName;
                    userInformation.lastName = ctrl.lastName;
                    userInformation.email = ctrl.email;
                    userInformation.phone = ctrl.phone;
                    userInformation.item = ctrl.itemSelected;
                    UserInformationService.save(userInformation);
                    ctrl.submitted = true;
                }
            );
        };

    };

})();