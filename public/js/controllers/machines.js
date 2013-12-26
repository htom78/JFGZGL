angular.module('mean.machines').controller('MachinesController', ['$scope', '$routeParams', '$location', '$modal', 'Global', 'Machines', function ($scope, $routeParams, $location, $modal, Global, Machines) {
    $scope.global = Global;


//    $http.get('/pcStatus').success(function(pcStatuses) {
//        $scope.pcStatuses = pcStatuses;
//    });

    $scope.find = function() {
        Machines.query(function(pcStatuses) {
            $scope.pcStatuses = pcStatuses;
        });
    };

    $scope.selectR = true;
    $scope.selectF = true;
    $scope.useLog = {
        name: '',
        machineId: null,
        useOn: null,
        useOff: null,
        others: ''
    };

    $scope.R = function () {
        var modalInstance = $modal.open({
            templateUrl: 'views/machines/machinesR.html',
            controller: ModalInstanceRCtrl,
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

    var ModalInstanceRCtrl = function ($scope, $http, $modalInstance, selectF, useLog) {
        $scope.selectF = selectF;
        $scope.useLog = useLog;

        $scope.submit = function () {
            $http.post('/api/login', $scope.useLog).success();
            $modalInstance.close($scope.selectF = false);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    };

    $scope.fix = function () {

        var modalInstance = $modal.open({
            templateUrl: 'views/machines/fixR.html',
            controller: ModalInstanceFCtrl,
            resolve: {
            }
        });
        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        });
    };
    var ModalInstanceFCtrl = function ($scope, $modalInstance) {

        $scope.ok = function () {
            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    };
}]);
