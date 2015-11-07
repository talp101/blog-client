(function(){
    "use strict";

    angular
        .module('blogger')
        .controller('BlogController', BlogController);

    BlogController.$inject = ['BlogData'];

    function BlogController(BlogData){
        var vm = this;
        vm.blog = {id:1, title:'This is blog', description:'This is blog blog blog', timestamp:'2015-18-02'};
        vm.posts = [{id:1, title:"Some Post"}, {id:2, title:"TItle 2"}];


        vm.activate = activate;

        activate();
        function activate(){
            return BlogData.one(vm.blog.id).getList('posts').then(function(data) {
                console.log(data);
                vm.posts = data;
                return vm.post;
            });
        }

    }
})();