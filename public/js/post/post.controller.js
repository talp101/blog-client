(function(){
    "use strict";

    angular
        .module('blogger')
        .controller('PostController', PostController);

    PostController.$inject = ['$stateParams', 'PostData'];

    function PostController($stateParams, PostData){
        var vm = this;
        vm.postId = $stateParams.id;
        vm.post = {};

        vm.activate = activate;


        activate();
        function activate(){
            return PostData.one(vm.postId).get().then(function(data) {
                console.log(data);
                vm.post = data;
                return vm.post;
            });
            //console.log(PostData);
            //console.log(vm.postId);
            //console.log(PostData.one(vm.postId));
        }
    }
})();