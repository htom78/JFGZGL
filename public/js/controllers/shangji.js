angular.module('mean.shangji').controller('ShangjiController', ['$scope', '$routeParams', '$location', 'Global', 'Shangji', function ($scope, $routeParams, $location, Global, Shangji) {
    $scope.global = Global;

    $scope.pcStatus = Shangji.get();
}]);
