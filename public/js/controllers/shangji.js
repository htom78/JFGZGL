angular.module('mean.shangji').controller('ShangjiController', ['$scope', '$routeParams', '$location', 'Global', 'Shangji','$http', function ($scope, $routeParams, $location, Global, Shangji,$http) {
    $scope.global = Global;

//
//    $http.get('/pcStatus').success(function(pcStatuses) {
//        $scope.pcStatuses = pcStatuses;
//    });

    $scope.find = function() {
        Shangji.get(function(pcStatuses) {
            $scope.pcStatuses = pcStatuses;
        });
    };
}]);
