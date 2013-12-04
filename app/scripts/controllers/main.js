'use strict';

angular.module('angularFullstackApp')
    .controller('LayoutController',function($scope,$http){

    })
    .controller('EnterSiteCtrl', function ($scope,$http,$location) {
        $scope.user = {
            name:'',
            password:''
        };

        $scope.enterSite = function () {
            $http.post('/api/enterSite', $scope.user).success(function (data) {
                if (data.err) {
                    return $scope.err = data.err;
                }
                $location.path("/main");
            });
        };
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