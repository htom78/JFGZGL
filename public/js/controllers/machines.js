angular.module('mean.machines').controller('MachinesController', ['$scope', '$routeParams', '$location', '$modal', 'Global', 'Machines', function ($scope, $routeParams, $location, $modal, Global, Machines) {
    $scope.global = Global;
    $scope.machines = {};
    $scope.selectR = true;
    $scope.selectF = true;
    $scope.useLog = {
        name: '',
        sno: null,
        tel: null,
        machineId: null,
        useOn: null,
        useOff: null,
        others: ''
    };

/*
* machines data init
* */
    $scope.find = function() {
        Machines.query(function(pcStatuses) {
            $scope.machines = pcStatuses;
        });
    };

/*
* button Rigister
* */
    $scope.R = function () {
        var modalInstance = $modal.open({
            templateUrl: 'views/machines/machinesR.html',
            controller: function ($scope, $http, $modalInstance, selectF, useLog) {
                $scope.selectF = selectF;
                $scope.useLog = useLog;

                $scope.ok = function () {
                    $http.post('/machines/:machineId', $scope.useLog).success();
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
