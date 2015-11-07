(function () {
    "use strict";

    angular
        .module('blogger')
        .controller('LoginController', LoginController);

    LoginController.$inject = [];

    function LoginController(){
        var vm = this;

        vm.email = '';
        vm.password = '';
        vm.activate = activate;
        vm.loginToApi = loginToApi;

        activate();

        function activate(){
        }

        function loginToApi(){
            console.log(vm.email + ' ' + vm.password);
        }
    }
})();