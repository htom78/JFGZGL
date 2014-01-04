/*
* analyzing the situation
* */

angular.module('mean.situation').controller('SituationController', ['$scope', '$routeParams', '$location', '$modal',
    'Global', 'Machines','Situation', function ($scope, $routeParams, $location, $modal, Global, Machines, Situation) {

    /*
    * fetch situation data
    * */
    $scope.gain = function(callback) {
        Situation.query(function(situations) {
            $scope.situations = situations;
        });
    };

    /*
    * PaginationController
    * */
    $scope.Pagination = function() {

        $scope.filteredTodos = []
            ,$scope.currentPage = 1
            ,$scope.numPerPage = 10
            ,$scope.maxSize = 5;


        $scope.numPages = function () {
            return Math.ceil($scope.situations.length / $scope.numPerPage);
        };

        $scope.$watch('currentPage + numPerPage', function() {
            var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                , end = begin + $scope.numPerPage;

            $scope.filteredTodos = $scope.situations.slice(begin, end);
        });
    }

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
