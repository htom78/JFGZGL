/*
* analyzing the situation
* */

angular.module('mean.situation').controller('SituationController', ['$scope', '$routeParams', '$location', '$modal',
    'Global', 'Machines','Situation', function ($scope, $routeParams, $location, $modal, Global, Machines, Situation) {

    /*
     * fetch situation data
     * */
    $scope.gain = function() {
        Situation.query(function(situations) {
            $scope.situations = situations;
        });
    };

    var PaginationController = function ($scope) {

        $scope.setPage = function (pageNo) {
            $scope.currentPage = pageNo;
        };

        $scope.bigCurrentPage = 1;
    };


}]);
