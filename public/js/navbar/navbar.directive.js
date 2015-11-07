(function(){
    "use strict";

    angular
        .module('blogger')
        .directive('navBar', navBar);


    function navBar(){
        var directive = {
            link: link,
            templateUrl: 'js/navbar/navbar.html',
            restrict: 'EA',
            controller: 'NavBarController',
            controllerAs : 'vm',
            bindToController: true
        };

        return directive;

        function link(scope, element, attrs){

        }
    }
})();