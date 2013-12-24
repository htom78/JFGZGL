angular.module('mean.machines').controller('MachinesController', ['$scope', '$routeParams', '$location', 'Global', 'Machines','$http', function ($scope, $routeParams, $location, Global, Machines,$http) {
    $scope.global = Global;

//
//    $http.get('/pcStatus').success(function(pcStatuses) {
//        $scope.pcStatuses = pcStatuses;
//    });

    $scope.find = function() {
        Machines.get(function(pcStatuses) {
            $scope.pcStatuses = pcStatuses;
        });
    };
}]);
