(function (){
'use strict';

    angular.module('MenuApp')
    .component('categoriesList', {
        templateUrl: 'src/categories-list.html',
        bindings: {
            items: '<'
        }
    });

})();
