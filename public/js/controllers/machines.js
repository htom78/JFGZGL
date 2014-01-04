/*
* machine functions
* */

angular.module('mean.machines').controller('MachinesController', ['$scope', '$routeParams', '$location', '$modal',
        'Global', 'Machines','Situation', function ($scope, $routeParams, $location, $modal, Global, Machines, Situation) {
    $scope.global = Global;
    $scope.machines = {};
    $scope.useLog = {};
    $scope.fixLog = {};
    $scope.machineId = {};
    $scope.checked = false; // button switch default

    /*
    * machines data init
    * */
    $scope.find = function() {
        Machines.query(function(pcStatuses) {
            $scope.machines = pcStatuses;
        });
    };

    /*
    * button enroll
    * */
    $scope.enroll = function (machineId) {

        $scope.machineId = machineId;

        var modalInstance = $modal.open({
            templateUrl: 'views/machines/enroll.html',
            controller: function ($scope, Machines, $modalInstance, useLog, machineId) {

                $scope.machineId = machineId;

                $scope.useLog = new Machines({
                    name: this.name,
                    sno: this.sno,
                    tel: this.tel,
                    machineId: null,
                    status: null,
                    useOff:null

                });
                $scope.useLog.machineId = machineId;
                $scope.useLog.status = 'using';

                $scope.ok = function () {

                    $scope.useLog.$save(function(res) {
                        alert(res.a);
                    });

                    $modalInstance.close(
                    );
                };

                $scope.cancel = function () {
                    $modalInstance.dismiss('cancel');
                };

            },
            resolve: {
                useLog:function () {
                    return $scope.useLog;
                },
                machineId:function () {
                    return $scope.machineId;
                }
            }
        });

        modalInstance.result.then(function() {
            Machines.query(function(pcStatuses) {
                $scope.machines = pcStatuses;
            });
        });


    };

    /*
     * button away
     * */
    $scope.away = function (machineId) {

        $scope.machineId = machineId;

        var modalInstance = $modal.open({
            templateUrl: 'views/machines/away.html',
            controller: function ($scope, Machines, $modalInstance, useLog, machineId) {

                $scope.machineId = machineId;

                $scope.useLog = new Machines({
                    note: this.note,
                    machineId: null
                });
                if(!$scope.useLog.note) {
                    $scope.useLog.note = '';
                }
                $scope.useLog.machineId = machineId;

                $scope.ok = function () {

                    $scope.useLog.$update(function(res) {
                        alert(res.a);
                    });

                    $modalInstance.close();
                };

                $scope.cancel = function () {
                    $modalInstance.dismiss('cancel');
                };

            },
            resolve: {
                useLog:function () {
                    return $scope.useLog;
                },
                machineId:function () {
                    return $scope.machineId;
                }
            }
        });

        modalInstance.result.then(function() {
            Machines.query(function(pcStatuses) {
                $scope.machines = pcStatuses;
            });
        });
    };

    /*
    * button fixOn
    * */
    $scope.fixOn = function (machineId) {

            $scope.machineId = machineId;

            var modalInstance = $modal.open({
                templateUrl: 'views/machines/fixOn.html',
                controller: function ($scope, Machines, $modalInstance, fixLog, machineId) {

                    $scope.machineId = machineId;

                    $scope.fixLog = new Machines({
                        startName: this.startName,
                        problem: this.problem,
                        machineId: null,
                        status: null

                    });
                    $scope.fixLog.machineId = machineId;
                    $scope.fixLog.status = 'fixing';

                    $scope.ok = function () {

                        $scope.fixLog.$goPost(function(res) {
                            alert(res.a);
                        });

                        $modalInstance.close(
                        );
                    };

                    $scope.cancel = function () {
                        $modalInstance.dismiss('cancel');
                    };

                },
                resolve: {
                    fixLog:function () {
                        return $scope.fixLog;
                    },
                    machineId:function () {
                        return $scope.machineId;
                    }
                }
            });

            modalInstance.result.then(function() {
                Machines.query(function(pcStatuses) {
                    $scope.machines = pcStatuses;
                });
            });


        };

    /*
     * button fixOff
     * */
    $scope.fixOff = function (machineId) {

            $scope.machineId = machineId;

            var modalInstance = $modal.open({
                templateUrl: 'views/machines/fixOff.html',
                controller: function ($scope, Machines, $modalInstance, fixLog, machineId) {

                    $scope.machineId = machineId;

                    $scope.fixLog = new Machines({
                        result: this.result,
                        endName: this.endName,
                        machineId: null,
                        status: null
                    });
                    $scope.fixLog.machineId = machineId;
                    $scope.fixLog.status = 'free';

                    $scope.ok = function () {

                        $scope.fixLog.$goPut(function(res) {
                            alert(res.a);
                        });

                        $modalInstance.close();
                    };

                    $scope.cancel = function () {
                        $modalInstance.dismiss('cancel');
                    };

                },
                resolve: {
                    fixLog:function () {
                        return $scope.fixLog;
                    },
                    machineId:function () {
                        return $scope.machineId;
                    }
                }
            });

            modalInstance.result.then(function() {
                Machines.query(function(pcStatuses) {
                    $scope.machines = pcStatuses;
                });
            });
        };

}]);

