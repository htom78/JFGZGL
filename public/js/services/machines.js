//machines service used for machines REST endpoint
angular.module('mean.machines').factory("machines", ['$resource', function($resource) {
    return $resource('/machines');
}]);
