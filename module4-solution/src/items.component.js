(function(){
'use strict';

angular.module('MenuApp')
.component('itemsList', {
    templateUrl: 'src/items-list.html',
    bindings: {
        items: '<',
        category: '@'
    }
})

})();