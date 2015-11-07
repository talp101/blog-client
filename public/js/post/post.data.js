(function () {
    "use strict";

    angular
        .module('blogger')
        .factory('PostData', PostData);

    PostData.$inject = ['Restangular'];

    function PostData(Restangular){
        return Restangular.service('posts');
    }
})();