'use strict';

angular.module('angularFullstackApp')
    .controller('LayoutController',function($scope,$http,$location){


    })
    .controller('EnterSiteCtrl', function ($scope,$rootScope,$http,$location) {
        $rootScope.title = 'Login';

        $scope.user = {
            name:'',
            password:''
        };
        $scope.enterSite = function () {
            $http.post('/api/enterSite', $scope.user).success(function (data) {
                if (data.err) {
                    return $scope.err = data.err;
                } else if (data.identity == 'managementer') {
                    $location.path("/manager");
                } else {
                    $location.path("/main");
                }
            });
        };
    })
    .controller('MainCtrl', function ($scope,$rootScope,$http) {
        $rootScope.title = 'main';

//        $scope.templates =
//            [ { name: 'PcState.html', url: './partials/funcModel/PcState.html'}
//                , { name: 'manager.html', url: './partials/funcModel/manager.html'}
//                , { name: 'fix.html', url: './partials/funcModel/fix.html'}
//                , { name: 'userPc.html', url: './partials/funcModel/userPc.html'}];
//        $scope.template = $scope.templates[0];

//        for(;time<=1;time++) {location.reload();}


        $http.get('/api/pcStatuses').success(function(pcStatuses) {
            $scope.pcStatuses = pcStatuses;
        });
    })
    .controller('IndexCtrl', function ($scope,$rootScope,$location,$http) {
        $rootScope.title = 'index';

        $scope.enter = function () {
            $http.get('/api/enter').success(function(data) {

//                $scope.phones = data;//just for test

                if (data === 'managementer') {
                    $location.path("/manager");
                } else if (data === 'normal') {
                    $location.path("/main");
                } else {
                    $location.path("/enterSite");
                }
            });

        };

    })