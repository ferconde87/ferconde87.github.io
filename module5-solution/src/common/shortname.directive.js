(function(){
    "use strict";
    angular.module('common')
    .directive('shortname', ShortNameDirective);
    
    function ShortNameDirective() {
        return {
            require: 'ngModel',
            link: function (scope, elm, attrs, ctrl) {
                ctrl.$validators.shortname = function ShortNameValidation(modelValue, viewValue) {
                    if (ctrl.$isEmpty(modelValue)) {
                        return true;
                    }
                    return (scope.signUpCtrl.shortNameItems.indexOf(modelValue) != -1);
                };
            }
        };
    };

})();