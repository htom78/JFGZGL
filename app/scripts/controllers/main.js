'use strict';

angular.module('angularFullstackApp')
    .controller('LayoutController',function($scope,$http,$location){
        $scope.loginOut = function () {
            $http.get('/api/logout').success(function(session) {
//                $scope.session = session;
            });
            $location.path("/");
        };
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
    .controller('UsePc', function ($scope) {

    })