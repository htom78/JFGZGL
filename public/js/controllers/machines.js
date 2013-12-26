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

    $scope.R = function () {
        var modalInstance = $modal.open({
            templateUrl: 'views/machines/machinesR.html',
            controller: ModalInstanceCtrl,
            resolve: {
            }
        });
        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        });
    };

    var ModalInstanceCtrl = function ($scope, $modalInstance) {

        $scope.ok = function () {
            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    };
}]);
