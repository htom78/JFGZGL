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

    $scope.R = function () {
        var modalInstance = $modal.open({
            templateUrl: 'views/machines/machinesR.html',
            controller: ModalInstanceRCtrl,
            resolve: {
                selectF:$scope.selectF
            }
        });
        modalInstance.result.then(function (selected) {
            $scope.selectF = selected;
        });
    };

    var ModalInstanceRCtrl = function ($scope, $modalInstance,selectF) {
        $scope.selectF = selectF;

        $scope.ok = function () {
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
