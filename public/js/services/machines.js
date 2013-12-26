//machines service used for machines REST endpoint
angular.module('mean.machines').factory("Machines", ['$resource', function($resource) {
    return $resource('/machines:machineId',{
        machineId: '@machineId'
    },{});
}]);
