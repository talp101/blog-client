(function(){
    "use strict";

    angular
        .module('blogger')
        .factory('BlogData', BlogData)

    BlogData.$inject = ['Restangular'];

    function BlogData(Restangular){
        return Restangular.service('blogs');
    }
})();