'use strict';

angular.module('angularFullstackApp')
    .controller('LayoutController',function($scope,$http,$location){
    })
    .controller('EnterSiteCtrl', function ($scope,$rootScope,$http,$location) {
        $rootScope.title = 'Login';

        $scope.user = {
            name:'',
            password:'',
            identity:''
        };
        $scope.enterSite = function () {
            $http.post('/api/enterSite', $scope.user).success(function (data) {
                if (data.err) {
                    return $scope.err = data.err;
                }
                $rootScope.account = data;
                $location.path("/main");
            });
        };
    })
    .controller('MainCtrl', function ($scope,$rootScope,$http) {
        $rootScope.title = 'main';


        $http.get('/api/pcStatuses').success(function(pcStatuses) {
            $scope.pcStatuses = pcStatuses;
        });
    })