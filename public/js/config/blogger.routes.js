(function(){
    "use strict";

    angular
        .module('blogger')
        .run(run)
        .config(config);

    run.$inject = ['$rootScope', '$state', '$stateParams'];
    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function run($rootScope, $state, $stateParams){
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }

    function config($stateProvider, $urlRouterProvider){
        $urlRouterProvider
            .otherwise('/login');

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl : 'js/login/login.html',
                controller : 'LoginController',
                controllerAs: 'vm'
            })
            .state('blog' , {
                url: '/blog',
                templateUrl : 'js/blog/blog.html',
                controller: 'BlogController',
                controllerAs: 'vm'
            })
            .state('post' , {
                url: '/post/:id',
                templateUrl : 'js/post/post.html',
                controller: 'PostController',
                controllerAs: 'vm'
            })
            .state('createBlog', {
                url:'/blog/create',
                tempalteUrl: 'js/blog/blogcreate.html',
                controller: 'BlogCreateController',
                controllerAs: 'vm'
            })
    }
})();