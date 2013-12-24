//Setting up route
angular.module('mean').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/machines', {
            templateUrl: 'views/machines/list.html'
        }).
        when('/machines/machinesR', {
            templateUrl: 'views/machines/machinesR.html'
        }).
        when('/machines/fixR', {
            templateUrl: 'views/machines/fixR.html'
        }).
        when('/machines/afterFixR', {
            templateUrl: 'views/machines/afterFixR.html'
        }).
        when('/machines/machinesS', {
            templateUrl: 'views/machines/machinesS.html'
        }).
        when('/signIn', {
            templateUrl: 'views/sign/signIn.html'
        }).
        when('/signOut', {
            templateUrl: 'views/sign/signOut.html'
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