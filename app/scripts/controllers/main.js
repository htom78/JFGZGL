'use strict';

angular.module('angularFullstackApp')
    .controller('LoginCtrl', function ($scope,$http) {
        $http.post('/api/enterSite',data).success(function(enterSite){
            $scope.enterSite = enterSite;
            redirectTo: '/main';
        })
    })
    .controller('MainCtrl', function ($scope, $http) {
        $http.get('/api/awesomeThings').success(function(awesomeThings) {
            $scope.awesomeThings = awesomeThings;
        });
    })
    .controller('RoomCtrl', function ($scope, $http) {
        $http.get('/api/pcStatuses').success(function(pcStatuses) {
            $scope.pcStatuses = pcStatuses;
        });
    })
    .controller('UsePc', function ($scope) {

    })