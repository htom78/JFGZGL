angular.module('mean.machines').controller('MachinesController', ['$scope', '$routeParams', '$location', '$modal', 'Global', 'Machines', function ($scope, $routeParams, $location, $modal, Global, Machines) {
    $scope.global = Global;
    $scope.machines = {};
    $scope.selectR = true;
    $scope.selectF = true;
    $scope.useLog = {};

/*
* machines data init
* */
    $scope.find = function() {
        Machines.query(function(pcStatuses) {
            $scope.machines = pcStatuses;
        });
    };

/*
* button R
* */
    $scope.R = function () {
        var modalInstance = $modal.open({
            templateUrl: 'views/machines/machinesR.html',
            controller: function ($scope, Machines, $modalInstance, selectF, useLog) {
                $scope.selectF = selectF;
                $scope.useLog = new Machines({
                    name: '',
                    sno: null,
                    tel: null,
                    machineId: null,
                    others: ''
                });

                $scope.ok = function () {
                    $scope.useLog.$save(function(response) {
                    });
                    $modalInstance.close($scope.selectF = false);
                };

                $scope.cancel = function () {
                    $modalInstance.dismiss('cancel');
                };
            },
            resolve: {
                selectF:$scope.selectF,
                useLog:function () {
                    return $scope.useLog;
                }
            }
        });
        modalInstance.result.then(function (selected) {
            $scope.selectF = selected;
        });
    };

/*
* button fix
* */
    $scope.fix = function () {
        var modalInstance = $modal.open({
            templateUrl: 'views/machines/fixR.html',
            controller: function ($scope, $modalInstance) {
                $scope.ok = function () {
                    $modalInstance.close();
                };

                $scope.cancel = function () {
                    $modalInstance.dismiss('cancel');
                };
            },
            resolve: {
            }
        });
        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        });
    };

}]);
