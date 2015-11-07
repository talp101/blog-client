(function(){
    "use strict";

    angular
        .module('blogger')
        .controller('NavBarController', NavBarController);

    NavBarController.$inject = [];

    function NavBarController(){
        var vm = this;

        vm.fullName = 'Tal Peretz';
        vm.activate = activate;


        activate();

        function activate(){

        }
    }
})();