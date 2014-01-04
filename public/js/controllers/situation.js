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

    /*
     * PaginationController
     * */
//    var PaginationController = function ($scope) {
//
//        $scope.prevPage = function () {
//            if ($scope.currentPage > 0) {
//                $scope.currentPage--;
//            }
//        };
//
//        $scope.nextPage = function () {
//            if ($scope.currentPage < $scope.pagedItems.length - 1) {
//                $scope.currentPage++;
//            }
//        };
//
//        $scope.setPage = function () {
//            $scope.currentPage = this.n;
//        };
//
//        $scope.bigCurrentPage = 1;
//    };

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
