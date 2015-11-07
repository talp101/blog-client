(function(){
    "use strict";

    angular
        .module('blogger')
        .directive('postItem', postItem);

    function postItem(){
        var directive = {
            link: link,
            templateUrl: 'js/post/postItem.html',
            restrict: 'EA',
            scope: {
                id: '=',
                title: '='
            }
        };

        return directive;

        function link(scope, element, attrs){
        }
    }
})();