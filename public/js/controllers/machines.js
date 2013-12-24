angular.module('mean.machines').controller('MachinesController', ['$scope', '$routeParams', '$location', 'Global', 'Machines', function ($scope, $routeParams, $location, Global, Machines) {
    $scope.global = Global;


//    $http.get('/pcStatus').success(function(pcStatuses) {
//        $scope.pcStatuses = pcStatuses;
//    });

    $scope.find = function() {
        Machines.query(function(pcStatuses) {
            $scope.pcStatuses = pcStatuses;
        });
    };
}]);
