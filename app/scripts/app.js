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
        templateUrl: 'partials/login',
        controller: 'LoginCtrl'
      })
      .when('/main', {
          templateUrl: 'partials/main',
          controller: 'MainCtrl'
      })
      .when('/room',{
        templateUrl: 'partials/room',
        controller: 'RoomCtrl'
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
