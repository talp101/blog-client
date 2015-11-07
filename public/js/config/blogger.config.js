(function(){
    "use strict";

    angular
        .module('blogger')
        .config(config);


    config.$inject = ['$compileProvider'];

    function config($compileProvider){
        $compileProvider.debugInfoEnabled(false);
    }

})();