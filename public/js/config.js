//Setting up route
angular.module('mean').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/shangji', {
            templateUrl: 'views/shangji/list.html'
        }).
        when('/shangji/shagnjidj', {
            templateUrl: 'views/shangji/shangjidj.html'
        }).
        when('/shangji/weixiudj', {
            templateUrl: 'views/shangji/weixiudj.html'
        }).
        when('/shangji/weixiudjhou', {
            templateUrl: 'views/shangji/weixiudjhou.html'
        }).
        when('/shangji/shagnjiqk', {
            templateUrl: 'views/shangji/shangjiqk.html'
        }).
        when('/qiandao', {
            templateUrl: 'views/qian/qiandao.html'
        }).
        when('/qianli', {
            templateUrl: 'views/qian/qianli.html'
        }).
        when('/articles', {
            templateUrl: 'views/articles/list.html'
        }).
        when('/articles/create', {
            templateUrl: 'views/articles/create.html'
        }).
        when('/articles/:articleId/edit', {
            templateUrl: 'views/articles/edit.html'
        }).
        when('/articles/:articleId', {
            templateUrl: 'views/articles/view.html'
        }).
        when('/', {
            templateUrl: 'views/index.html'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);

//Setting HTML5 Location Mode
angular.module('mean').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix("!");
    }
]);