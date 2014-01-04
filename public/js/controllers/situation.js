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
            $scope.totalItems = situations;
        });
    };

    /*
     * PaginationController
     * */
            $scope.currentPage = 4;
            $scope.maxSize = 5;

            $scope.setPage = function (pageNo) {
                $scope.currentPage = pageNo;
            };

            $scope.bigTotalItems = 175;
            $scope.bigCurrentPage = 1;

        /*
         * function: if have note show the Button, else hide it!
         * */
        $scope.showButton = function(note) {
            if(note) {
                return false;
            }else {
                return true;
            }
        }

}]);
