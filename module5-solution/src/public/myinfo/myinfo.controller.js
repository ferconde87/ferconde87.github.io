(function (){
    "use strict";

    angular.module('public')
    .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['userInformation', 'ApiPath'];
    function MyInfoController(userInformation, ApiPath){
        var ctrl = this;
        ctrl.basePath = ApiPath;
        ctrl.userInformation = userInformation;

        ctrl.submit = function () {
            ctrl.userInformation.firstName = "Prueba!";
        }

    }

})();