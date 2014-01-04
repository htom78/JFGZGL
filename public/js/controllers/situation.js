/*
* analyzing the situation
* */

angular.module('mean.situation').controller('SituationController', ['$scope','$filter', '$routeParams', '$location', '$modal',
    'Global', 'Machines','Situation', function ($scope, $filter, $routeParams, $location, $modal, Global, Machines, Situation) {

    /*
    * fetch situation data
    * */
     $scope.items = [];
     $scope.gain = function() {
        Situation.query(function(situations) {
            $scope.items = situations;
        });
    };

    $scope.gain();

    /*
    * PaginationController
    * */

        $scope.filteredItems = [];
        $scope.groupedItems = [];
        $scope.itemsPerPage = 10;
        $scope.pagedItems = [];
        $scope.currentPage = 0;

        var searchMatch = function (haystack, needle) {
            if (!needle) {
                return true;
            }
            return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
        };

        // init the filtered items
        $scope.search = function () {
            $scope.filteredItems = $filter('filter')($scope.items, function (item) {
                for(var attr in item) {
                    if (searchMatch(item[attr], $scope.query) || searchMatch(item.name, $scope.query))
                        return true;
                }
                return false;
            });

            if ($scope.sortPrep !== 'none') {
                $scope.filteredProjects = $filter('orderBy')($scope.filteredItems, $scope.sortPrep);
            }

            $scope.currentPage = 0;
            // now group by pages
            $scope.groupToPages();
        };

        // calculate page in place
        $scope.groupToPages = function () {
            $scope.pagedItems = [];

            for (var i = 0; i < $scope.filteredItems.length; i++) {
                if (i % $scope.itemsPerPage === 0) {
                    $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [ $scope.filteredItems[i] ];
                } else {
                    $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.filteredItems[i]);
                }
            }
        };

        $scope.range = function (start, end) {
            var ret = [];
            if (!end) {
                end = start;
                start = 0;
            }
            for (var i = start; i < end; i++) {
                ret.push(i);
            }
            return ret;
        };

        $scope.prevPage = function () {
            if ($scope.currentPage > 0) {
                $scope.currentPage--;
            }
        };

        $scope.nextPage = function () {
            if ($scope.currentPage < $scope.pagedItems.length - 1) {
                $scope.currentPage++;
            }
        };

        $scope.setPage = function () {
            $scope.currentPage = this.n;
        };

        // functions have been describe process the data for display
        $scope.search();


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
