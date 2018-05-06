(function() {
"use strict";

angular.module('common')
.service('UserInformationService', UserInformationService)

function UserInformationService(){
    var service = this;

    service.userInformation = {};
    
    service.save = function (up){
        service.userInformation.firstName = up.firstName;
        service.userInformation.lastName = up.lastName;
        service.userInformation.email = up.email;
        service.userInformation.phone = up.phone;
        service.userInformation.item = up.item;
    };

    service.getUserInformation = function(){
        return service.userInformation;
    }
}

})();