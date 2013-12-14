'use strict';

angular.module('angularFullstackApp')
    .controller('LayoutController',function($scope,$http,$location){

        $scope.manager = function() {
            $http.get('/api/manager').success(function(data) {

                if (data) {
                    $location.path("/manager");
                }
                else {
                    $location.path("/main");
                }
            })
        }
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
    .controller('IndexCtrl', function ($scope,$rootScope,$location,$http) {
        $rootScope.title = 'index';

        $scope.enter = function () {
            $http.get('/api/enter').success(function(data) {

//                $scope.phones = data;//just for test

                if (data) {
                    $location.path("/main");
                }
                else {
                    $location.path("/enterSite");
                }

            $http.get('/api/manager').success(function(data) {

                if (data) {
                    $rootScope.managerShow = data;

                }
                else {
                    $rootScope.managerShow = undefined;
                }
            })

            });

        };

    })