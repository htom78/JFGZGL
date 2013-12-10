'use strict';

angular.module('angularFullstackApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/index',
        controller: 'IndexCtrl'
      })
      .when('/enterSite', {
          templateUrl: 'partials/enterSite',
          controller: 'EnterSiteCtrl'
      })
      .when('/main', {
          templateUrl: 'partials/main',
          controller: 'MainCtrl'
      })
      .when('/usePc',{
        templateUrl: 'partials/usePc',
        controller: 'UsePcCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  });
